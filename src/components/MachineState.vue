<script setup>
import { ref } from "vue";

import { initialInstance } from "@/utils/axiosData";

const states = {
  empty: "empty",
  isLoading: "loading",
  hasLoaded: "loaded",
  hasError: "error",
};
const currentState = ref("empty");
const data = ref(null);

const transitions = {
  [states.empty]: {
    FETCH_DATA: states.isLoading,
  },
  [states.isLoading]: {
    FETCH_DATA_SUCCESS: states.hasLoaded,
    FETCH_DATA_ERROR: states.hasError,
  },
  [states.hasLoaded]: {
    FETCH_DATA: states.isLoading,
  },
  [states.hasError]: {
    FETCH_DATA: states.isLoading,
  },
};

function transition(currentState, action) {
  const nextState = transitions[currentState][action];

  //if next state exist in transitions then it's returned else we return current state.
  return nextState || currentState;
}

function updateState(action) {
  currentState.value = transition(currentState.value, action);
}

// compare state with current state return true or false
const compareState = (state) => currentState.value === state;

async function getData() {
  //switch state to loading
  updateState("FETCH_DATA");

  try {
    //getting data
    data.value = await initialInstance.get("");

    //switch state to loaded
    updateState("FETCH_DATA_SUCCESS");
  } catch (err) {
    // if there is error then switch state to error
    updateState("FETCH_DATA_ERROR");
  }
}

//call req for data
getData();
</script>

<template>
  <div class="container">
    <h1 class="container__title">Flag State</h1>

    <div class="container__card">
      <div class="card" v-if="compareState(states.hasLoaded)">
        <div class="card__title">Hi, my name is {{ data[0].name.first }}</div>

        <img
          class="card__picture"
          :src="data[0].picture.medium"
          alt="picture of person"
        />
      </div>

      <div class="container__error" v-if="compareState(states.hasError)">
        <p>Something goes wrong, try again</p>
      </div>

      <div class="container__loader" v-if="compareState(states.isLoading)">
        <div class="loader"></div>
        <div class="sparkle"></div>
      </div>
    </div>

    <div class="container__btn" @click="getData">Get Another Person</div>
  </div>
</template>

<style scoped></style>
