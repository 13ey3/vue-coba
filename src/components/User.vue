<template>
  <div class="flex-shrink-0">
    <div class="container mt-5">
      <div class="col d-flex justify-content-center">
        <div class="card col-md-6 col-lg-6 text-center mx-auto">
          <div class="card-header">Data user : {{ user.name }}</div>
          <div class="card-body">
            <p>Username : {{ user.username }}</p>
            <p>Email : {{ user.email }}</p>
            <router-link class="btn btn-primary" to="/"> Back </router-link>
          </div>
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
      user: [],
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
        )
        .then((response) => {
          this.user = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}
</style>
