<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/ataa_logo.jpeg" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/holidays">Holidays</router-link>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Islamic occasions</a>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">National events</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Graduation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Births</a>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Arabic</a></li>
              <li><a class="dropdown-item" href="#">English</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.navbar {
  background: #27445d;
  color: #fff !important;
}
.nav-link {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}
.collapse {
  justify-content: end;
}
.navbar-brand img {
  width: 151px;
  height: 69px;
  border-radius: 10px;
}
</style>
