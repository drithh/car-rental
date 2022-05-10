<template>test</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  checkUser();
});

const checkUser = () => {
  axios
    .get("/api/is-admin")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
