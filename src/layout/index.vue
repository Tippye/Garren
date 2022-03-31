<template>
  <navbar :style="{height:`${navHeight}`}"/>
<!--  <sidebar/>-->
  <app-main/>
  <footer/>
</template>

<script setup>
import {AppMain, Footer, Navbar} from "@/layout/components";
import store from "@/store";

const navHeight = store.state.app.navHeight
</script>