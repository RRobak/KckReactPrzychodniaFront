<template>
  <div class="login">
    <div class="logindiv">
      <h1>Logowanie</h1>
      <label for="login">Login: </label>
      <input type="text" id="login" /><br />
      <label for="password">Hasło: </label>
      <input type="password" id="haslo" /><br />
      <label id="errorLabel"></label><br/>
      <button type="submit" class="btn btn-info" v-on:click="log()">
        Zaloguj
      </button><br/><br/>
      <router-link to="/register"
        ><button  class="btn btn-info">
        Przejdź do rejestracji
      </button></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      login: "admin",
      password: "admin",
    };
  },
  methods: {
    log() {
      let username = document.getElementById("login").value;
      let pass = document.getElementById("haslo").value;
      try {
        axios({
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          url: username + "/" + pass,
          baseURL: "http://localhost:5000/users/",
        }).then((response) => {
          this.items = JSON.parse(JSON.stringify(response.data));
          console.log(response.data);
          if(response.data==="OK")
          {this.$store.dispatch("saveUserLogged", username);
          this.$router.push("/");}
          else
          {var s = document.getElementById('errorLabel');
            s.innerHTML = "Błędny użytkownik lub hasło";}
        });
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>

<style>
.login {
  top: 50%;
}
.logindiv {
  display: inline-block;
  margin: auto;
  top: 50%;
  width: 40vw;
  height: 40vh;
  transform: translate(0%, 50%);
}
#login {
  margin-bottom: 2px;
}
</style>