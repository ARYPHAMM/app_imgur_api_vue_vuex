<template>
  <div class="ui secondary pointing menu">
    <a class="item active">
      Image Storage
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="./upload" class="item">upload</router-link>
        <a  class="item"  @click="logout">logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login">Login</a>
      <!-- <router-link name="oauth2_callback">Login</router-link> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: mapActions(["login","logout"]),
};
</script>

<style scoped>
.horizontal{
    display: flex;
    flex-direction: row;
}
</style>
