<script setup>
import { ref } from "vue";

import { initialInstance } from "@/utils/axiosData";

const data = ref(null);
const isEmpty = ref(true);
const isLoading = ref(true);
const hasError = ref(true);

async function getData() {
  //set flags before req
  isEmpty.value = true;
  isLoading.value = true;
  hasError.value = false;

  try {
    //getting data
    data.value = await initialInstance.get("");

    //if data is received then reset flags
    isEmpty.value = false;
    isLoading.value = false;
    hasError.value = false;
  } catch (err) {
    // if there is error then reset flags and set hasError to true
    isEmpty.value = true;
    isLoading.value = false;
    hasError.value = true;
  }
}

//call req for data
getData();
</script>

<template>
  <div class="container">
    <h1 class="container__title">Flag State</h1>

    <div class="container__card">
      <div class="card" v-if="!isEmpty">
        <div class="card__title">Hi, my name is {{ data[0].name.first }}</div>

        <img
          class="card__picture"
          :src="data[0].picture.medium"
          alt="picture of person"
        />
      </div>

      <div class="container__error" v-if="hasError">
        <p>Something goes wrong, try again</p>
      </div>

      <div class="container__loader" v-if="isLoading">
        <div class="loader"></div>
        <div class="sparkle"></div>
      </div>
    </div>

    <div class="container__btn" @click="getData">Get Another Person</div>
  </div>
</template>

<style scoped></style>
