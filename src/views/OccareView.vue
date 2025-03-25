<template>
  <div>
    <h1>{{ $t(routeParam) }}</h1>
  </div>
  <div class="occasions">
    <div class="container">
      <div class="all_occasions">
        <div v-for="occasion in allOccasions" :key="occasion.id">
          <router-link :to="`/${routeParam}/${occasion.id}`">
            <img
              v-bind:src="
                require(`../assets/images/${routeParam}/${occasion.image}`)
              "
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { router } from "json-server";
// import { router } from "json-server";
import response from "../assets/data/data.json";

export default {
  name: "OccareView",
  setup() {},
  data() {
    return {
      routeParam: "",
      allOccasions: [],
    };
  },
  methods: {
    async getOccasion() {
      let result = response[this.routeParam];
      this.allOccasions = result;
    },

    goToTop() {
      this.$router.beforeEach((to, from, next) => {
        if (!to.hash) {
          window.scrollTo(0, 0);
        }

        next();
      });
    },
  },
  mounted() {
    this.routeParam = this.$route.params.occasion;
    this.getOccasion();
    this.goToTop();
  },
};
</script>

<style scoped>
h1 {
  padding: 23px 0;
  background: #5f99ae;
  color: #ffffff;

  border-bottom: 2px solid #e4efe7;
}
.occasions {
  padding: 70px 0;
}
.all_occasions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.all_occasions > div {
  width: 23%;
  margin: 0 20px 15px 0;
  height: 350px;
  box-shadow: 0 0 13px #c0c0c0;
  border-radius: 10px;
  transition: all 0.4s ease;
}
.all_occasions > div:hover {
  box-shadow: 0 0 15px #9e9e9e;
}
.all_occasions > div a {
  display: block;
}
.all_occasions > div a img {
  border-radius: 10px;
}
.all_occasions > div a img,
.all_occasions > div a {
  width: 100%;
  height: 100%;
}

@media (max-width: 450px) {
  .all_occasions div {
    width: 100%;
    margin: 0px 0 15px 0;
  }
}

@media (min-width: 450px) and (max-width: 950px) {
  .all_occasions {
    justify-content: center;
  }
  .all_occasions div {
    width: 45%;
  }
}

@media (min-width: 950px) and (max-width: 1000px) {
  /* .all_occasions {
    justify-content: center;
  } */
  .all_occasions div {
    width: 30%;
  }
}
</style>
