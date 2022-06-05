<script setup>
import { ref } from "vue";

import MachineState from "@/components/MachineState.vue";
import FlagState from "@/components/FlagState.vue";

const current = ref("machine");
</script>

<template>
  <div class="app">
    <nav class="nav">
      <div class="nav__link" @click="current = 'machine'">Machine State</div>
      <div class="nav__link" @click="current = 'flag'">Flag State</div>
    </nav>
    <MachineState v-if="current === 'machine'" />
    <FlagState v-if="current === 'flag'" />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}

.app {
  background-color: #d1ebfa;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  width: 100%;
  height: 10vh;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom: 3px solid black;
  background-color: #a9afb2;
  color: #5b6267;
  margin-bottom: 2vh;

  &__link {
    width: 200px;
    border-radius: 16px;
    text-align: center;
    height: 40px;
    border: 1px solid #d1ebfa;
    background-color: #fff;
    font-size: 24px;
    line-height: 34px;
    transition: background-color 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #d1ebfa;
      color: black;
    }
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 88vh;
  background-color: #d1ebfa;
  border-top: 3px solid #093149;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;

  &__card {
    height: 150px;
  }

  &__title {
    margin-bottom: 50px;
  }

  &__loader {
    position: relative;
    height: 62px;
    width: 62px;
    .loader {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border-top: 3px solid black;
      animation: spin 1.4s infinite linear;
    }
    .sparkle {
      position: absolute;
      top: 28.5px;
      left: 28.5px;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: goldenrod;
      animation: flare 1s infinite alternate linear;
    }
  }
  &__btn {
    margin-top: 20px;
    width: 200px;
    height: 40px;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid #093149;
    &:hover {
      background-color: #093149;
      color: white;
      cursor: pointer;
    }
  }
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    margin-bottom: 20px;
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flare {
  100% {
    transform: scale(2.5);
  }
}
</style>
