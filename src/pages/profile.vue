<template>
  <v-app-bar
    :elevation="0"
    class="bg-white"
    density="compact"
  >
    <v-app-bar-title>Привет, {{ appStore.user.login }}</v-app-bar-title>

    <template #append>
      <v-btn
        text="Выйти"
        @click="logout"
      />
    </template>
  </v-app-bar>
  <v-container class="container">
    <v-select
      v-model="city"
      label="Выберите город"
      class="input bg-white"
      :items="[
        'Москва',
        'Санкт-Петербург',
        'Уфа',
        'Ростов',
        'Сочи',
        'Омск',
        'Челябинск',
        'Екатеринбург',
        'Владивосток',
        'Якутск',
        'Стерлитамак',
      ]"
      width="230"
      variant="outlined"
    />
    <p
      v-if="city"
      class="city_name"
    >
      {{ city }}
    </p>
    <p class="city_text">
      {{ city ? lorem_text : "Город не выбран" }}
    </p>
    <v-carousel>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      />

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      />

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      />
    </v-carousel>
  </v-container>
</template>

<script lang="js" setup>
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const appStore = useAppStore();
const city = ref('');
const lorem_text = 'Lorem ipsum dolor sit amet consectetur. Elementum donec a accumsan egestas et non diam nunc. Semper aenean pharetra sit morbi. Est sed enim ut commodo adipiscing curabitur elementum tristique vel. Felis cras nisi et blandit. Vitae aliquam interdum aliquam ac senectus sit non erat. Euismod eu non id fermentum urna nunc scelerisque cursus vel. Phasellus ullamcorper congue ac tortor quam in mauris. Aliquam suspendisse erat dictumst libero. Commodo facilisis accumsan mattis pellentesque turpis nibh. Amet aliquam volutpat dictum risus nulla rhoncus arcu turpis tellus. Cursus feugiat quam arcu leo purus suspendisse cursus risus quis. Massa lobortis dolor a cras diam. Mi purus volutpat pulvinar accumsan dolor ultricies. Ipsum cursus proin mauris in. Bibendum amet ultrices faucibus tellus mauris magna. Eget leo sed aliquam eget tempus eget viverra tincidunt sit. Tortor non elit felis cras cras mi eget. Ut aliquet nibh eu at. Laoreet tincidunt porttitor tellus tristique.';
const logout = () => {
  appStore.logout();
  router.push('/');
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
}

.input {
  color: #000;
  background-color: white;
  height: 100px;
}

.city_name {
  font-weight: 700;
  font-size: 24px;
}

.city_text {
  font-weight: 400;
  font-size: 16px;
}
</style>
