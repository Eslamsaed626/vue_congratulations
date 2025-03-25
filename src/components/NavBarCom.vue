<template>
  <nav
    class="navbar navbar-expand-lg"
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
  >
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
            <router-link class="nav-link" to="/">{{ $t("Home") }}</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("language") }}
            </a>
            <ul class="dropdown-menu">
              <li
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="{ locale }"
              >
                <a
                  class="dropdown-item"
                  ref="lang"
                  @click="changeLang(locale)"
                  >{{ locale == "ar" ? "Arabic" : "English" }}</a
                >
              </li>
              <!-- <li><a class="dropdown-item" href="#">English</a></li> -->
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
  methods: {
    changeLang(locale) {
      this.$i18n.locale = locale;
    },
  },
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
  font-size: 19px;
  font-weight: 600;
}
.nav-item {
  margin: 0px 20px;
}
.nav-item .nav-link:hover {
  color: #727272;
}
.nav-item .nav-link:focus {
  color: #727272;
}
.collapse {
  justify-content: end;
}
.navbar-brand img {
  width: 151px;
  height: 69px;
  border-radius: 10px;
}

.dropdown-menu li a {
  cursor: pointer;
}
</style>
