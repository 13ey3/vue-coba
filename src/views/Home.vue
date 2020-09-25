<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <input type="text" v-model="searchKey" />
      <div
        class="col-lg-3 col-md-6 col-sm-10 pt-3"
        v-for="(post, index) in posts"
        :key="index"
      >
        <div class="card text-center shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1574376407492-c3cf78231def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p>
              {{ post.body.substring(0, 100) }}
            </p>
            <a class="btn btn-link">read more</a>
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
      posts: [],
      searchKey: "",
      currentPage: 0,
      itemsPerPage: 6,
      resultCounpostst: 0,
    };
  },
  created() {
    this.getAllPost();
  },
  computed: {
    totalPages: function() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
  },
  methods: {
    getAllPost() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.posts = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
