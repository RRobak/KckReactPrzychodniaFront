<template>
  <div id="reg">
    <h1>{{ specjalist }}-{{ data }}-{{ time }}</h1>
    <h1>Zarezerwować wizytę?</h1>
    <div class="centerbutton">
      <router-link to="/"
        ><button class="btn btn-success" v-on:click="reserve()">Tak</button></router-link
      >
      <router-link to="/"
        ><button class="btn btn-danger">Nie</button></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "reg",
  props: {
    specjalist: {
      type: String,
      default: "Internista",
    },
    data: {
      type: String,
      default: "21-04-2021",
    },
    time: {
      type: String,
      default: "8:00",
    },
  },
  methods: {
    reserve() {
      axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "put",
        url: this.specjalist+'/'+this.data+'/'+this.time,
        baseURL: "http://localhost:5000/visits/",
      }).then(
        (response) => (console.log(JSON.parse(JSON.stringify(response.data))))
      );
    },
  },
};
</script>

<style>
#reg {
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  width: 98vw;
  margin-top: 1px;
  margin: 0;
}

.btn {
  float: center;
  width: 10vw;
}
</style>