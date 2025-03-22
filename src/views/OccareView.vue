<template>
  <div>
    <h1>{{ routeParam }}</h1>
  </div>
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
</template>

<script>
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
  },
  mounted() {
    this.routeParam = this.$route.params.occasion;
    this.getOccasion();
  },
};
</script>

<style scoped>
.all_occasions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.all_occasions > div {
  width: 23%;
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
}
</style>
