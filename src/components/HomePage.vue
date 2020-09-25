<template>
  <div id="container" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">Daftar Nama User:</h1>
      <div class="list-group">
        <div v-for="user in users" :key="user.id">
          <router-link
            class="list-group-item list-group-item-action"
            :to="{ name: 'User', params: { id: user.id } }"
          >
            {{ user.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data;
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
