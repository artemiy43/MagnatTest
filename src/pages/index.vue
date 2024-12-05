<template>
  <v-container class="container">
    <v-sheet class="bg-white p-0 m-0" max-width="230">
      <p class="text-center title m-0 p-0 mb-8">Войти в панель</p>
      <v-form class="form" @submit.prevent="submit">
        <input v-model="login" placeholder="Введите логин" class="input" />

        <input
          v-model="password"
          placeholder="Введите пароль"
          class="input"
          type="password"
        />

        <v-btn class="mt-2 mx-auto button" text="Войти" type="submit" />
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import { ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const login = ref("");
const password = ref("");
const router = useRouter();
//
const submit = () => {
  appStore.login({ login: login, password: password });
  router.push("/profile");
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 16px;
  font-weight: 500;
}

.input {
  font-weight: 400;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 12px;
  color: #000;
}

.button {
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  color: #d7d7d7;
}
</style>
