<template>
  <div class="infos">
    <table>
      <tr>
        <td class="leftcell">
          <img src="../assets/logoP.png" />
          POLMED - Warszawa, Twarda COVID TEST<br />
          <img src="../assets/pinezka.jpg" class="pinezka" />
          Adres:<br />
          Twarda 18, Warszawa Centrum Medyczne<br />
          POLMED WARSZAWA TWARDA Panel przeciwciał (półilościowy)
        </td>
        <td class="rightcell">
          {{ title }}<br />
          <li v-for="item in items" v-bind:key="item.id">
            <router-link
              :to="{
                name: 'RegisterVisit',
                params: {
                  specjalist: item.lekarz,
                  data: item.dzien,
                  time: item.godzina,
                },
              }"
            >
              <button class="btn" v-if="item.lekarz == title">
                {{ item.dzien }}-{{ item.godzina }}
              </button></router-link
            >
          </li>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "infos",
  data() {
    return {
      value: "",
      items: [],
    };
  },
  props: ["title"],
  async created() {
    try{axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
      url: this.title,
      baseURL: "http://localhost:5000/visits/",
    }).then((response) => (this.items = JSON.parse(JSON.stringify(response.data))));
    console.log(this.items);
    }
    catch (e) {
      this.errors.push(e)
    }
  },
  watch:{'title'(){
axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
      url: this.title,
      baseURL: "http://localhost:5000/visits/",
    }).then((response) => (this.items = JSON.parse(JSON.stringify(response.data))));
    console.log(this.items);
  }
}};
</script>
<style scoped>
.infos {
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  width: 98vw;
  margin-top: 1px;
  margin: 0;
  text-align: left;
}
.leftcell {
  width: 50%;
  max-width: 50vw;
  text-align: left;
}
.rightcell {
  width: 50%;
  max-width: 50vw;
  text-align: center;
}
.pinezka {
  width: 50px;
}
.date {
  width: 50%;
}
.btn {
  width: 50%;
}
li {
  list-style-type: none;
}
</style>