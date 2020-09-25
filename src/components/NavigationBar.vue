<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
    <div class="container-md">
      <a href="/" class="navbar-brand h1 mb-0">ASDF Project</a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-2 mb-2 mb-lg-0">
          <li class="nav-item"><a href="/" class="nav-link active">Home</a></li>
          <li class="nav-item"><a href="" class="nav-link">Project</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
          <li class="nav-item">
            <a href="" class="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>
