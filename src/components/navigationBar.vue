<template>
  <div class="hello">
    <div class="head">
      <router-link to="/"
        ><img src="../assets/wizyta.png" class="logo"
      /></router-link>
      <input type="text" class="spec form-control" value="Specjalizacja" />
      <input type="text" class="location form-control" value="Lokalizacja" />
      <router-link to="/login"
        ><button type="button" class="LogIn btn btn-info">
          Zaloguj się
        </button></router-link
      >
      <button type="button" class="doctor btn btn-info" @click="logout()">
        Wyloguj
      </button>
      <div>
        <label for="Zalogowany" id="username"
          >Zalogowany: {{ loggedUser }}</label
        >
      </div>
    </div>
    <div class="navigation">
      <router-link to="/Konsultacje"
        ><button type="button" class="btn navibutton">
          <img src="../assets/tiles/Konsulatacje.png" />Konsultacje online
        </button></router-link
      >
      <router-link to="/Uslugi"
        ><button type="button" class="btn navibutton">
          <img src="../assets/tiles/Usługi.jpg" />Usługi
        </button></router-link
      >
      <router-link to="/Ubezpieczenia"
        ><button type="button" class="btn navibutton">
          <img src="../assets/tiles/Ubezpieczenia.jpg" />Ubezpieczenia
        </button></router-link
      >
      <router-link to="/Metody"
        ><button type="button" class="btn navibutton">
          <img src="../assets/tiles/Konsulatacje.png" />Metody płatności
        </button></router-link
      >
      <router-link to="/Filtry"
        ><button type="button" class="btn navibutton">
          <img src="../assets/tiles/Usługi.jpg" />Filtry
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "navigationBar",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    update() {
      this.$forceUpdate();
    },
    logout(){
        this.$store.dispatch(
          'saveUserLogged',
          ""
        );
        this.$router.push('/');
    }
  },
  computed: {
    loggedUser: function () {
      console.log("i'm here");
      return this.$store.state.userlogged;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.head {
  background-color: #00c3a5;
  height: 10vh;
  min-height: min-content;
  width: 100vw;
  align-items: center;
  display: flex;
}

.logo {
  float: left;
  margin-right: 15px;
}

.spec {
  float: left;
  margin-right: 15px;
  width: 15vw;
}

.location {
  float: left;
  margin-right: 15px;
  width: 15vw;
}

.lupa {
  height: 40px;
  width: 40px;
}

.LogIn {
  height: 50%;
  margin-left: 10vw;
  margin-right: 15px;
}

.doctor {
  height: 50%;
}

.navigation {
  float: left;
  height: min-content;
  margin: auto;
  margin-bottom: 2px;
}

.navibutton {
  width: 20vw;
}
</style>
