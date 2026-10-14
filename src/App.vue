<script setup>
import { RouterLink, RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>

  <!-- <nav>
    <RouterLink to="/">Geracao </RouterLink>
    <RouterLink to="/geracao2">Geracao </RouterLink>
    <RouterLink to="/geracao3">Geracao </RouterLink>
  </nav> -->

  <RouterView />
</template>
