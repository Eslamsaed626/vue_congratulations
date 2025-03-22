<template>
  <div class="home">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/images/img_5955-1.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/eid_2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/eid_3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <section class="sections">
      <div class="container">
        <div
          v-for="item in occasions_list"
          class="occasion"
          :key="item.occaseion"
        >
          <router-link :to="'/' + item.occasionRoute">
            <i v-if="item.occaseion == 'holiday'" class="fa-solid fa-moon"></i>
            <i
              v-if="item.occaseion == 'Islamic occasions'"
              class="fa-solid fa-mosque"
            ></i>
            <i
              v-if="item.occaseion == 'National events'"
              class="fa-solid fa-house"
            ></i>
            <p class="m-0">{{ item.occaseion }}</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      occasions_list: [
        { occaseion: "holiday", occasionRoute: "holiday" },
        { occaseion: "Islamic occasions", occasionRoute: "islamic" },
        { occaseion: "National events", occasionRoute: "national" },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-item {
  height: 476px;
}

.carousel-item img {
  height: 100%;
}

.sections {
  margin: 43px 0;
}
.sections .container {
  display: flex;
  justify-content: space-evenly;
}
.occasion {
  width: 250px;
  height: 135px;

  border-radius: 10px;
}

.occasion a:hover {
  background: #263e53;
  transform: translateY(-5px);
}
.occasion a {
  transition: all 0.5s ease;
  color: #fff;
  text-decoration: none;
  background: #27445d;
  border-radius: 10px;

  font-size: 21px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>
