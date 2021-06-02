<template>
  <div>
    <div class="specjal">
      <div class="description">Jakiej specjalizacji szukasz?</div>
      <div class="specbuttons">
        <button
          type="button"
          class="btn specbtn"
          v-on:click="nameOfDoctor = 'Internista'"
        >
          Internista
        </button>
        <button
          type="button"
          class="btn specbtn"
          v-on:click="nameOfDoctor = 'Kardiolog'"
        >
          Kardiolog
        </button>
        <button
          type="button"
          class="btn specbtn"
          v-on:click="nameOfDoctor = 'Rodzinny'"
        >
          Rodzinny
        </button>
        <button
          type="button"
          class="btn specbtn"
          v-on:click="nameOfDoctor = 'Alergolog'"
        >
          Alergolog
        </button>
        <button
          type="button"
          class="btn specbtn"
          v-on:click="nameOfDoctor = 'Endokrynolog'"
        >
          Endokrynolog
        </button>
      </div>
    </div>
    <infos :title='nameOfDoctor' />
  </div>
</template>

<script>
import infos from "./infos.vue";
export default {
  name: "spec",
  components: {
    infos,
  },
  data() {
    return {
      nameOfDoctor: "Internista",
    };
  },
};
</script>

<style>
.specjal {
  background-color: #3d83df;
  width: 100vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 1px;
}
.specbtn {
  height: 5vh;
  width: 16%;
  margin: 0 2% 0 2%;
  min-width: min-content;
  background-color: white;
}
.description {
  margin-top: 20px;
  width: 100%;
  height: 30%;
  color: white;
}
.specbuttons {
  margin: auto;
  width: 100%;
}
</style>