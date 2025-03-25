<template>
  <div class="home">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/images/ramadan.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/natonal.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/eid_7.png"
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
            <p class="m-0">{{ $t(item.occaseion) }}</p>
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
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 60px;
  height: 45px;
}
.carousel {
  height: 450px;
}
.carousel-inner,
.carousel-item,
.carousel-item img {
  height: 100%;
}

.carousel-item:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.sections {
  background: #fdfaf6;
  padding: 91px 0;
}
.sections .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.occasion {
  width: 23%;
  height: 135px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.occasion a:hover {
  background: #265f91;
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

@media (max-width: 450px) {
  .carousel {
    height: 280px;
  }
  .sections .occasion {
    width: 100%;
  }
}

@media (min-width: 450px) and (max-width: 768px) {
  .occasion {
    width: 31%;
  }
}
</style>
