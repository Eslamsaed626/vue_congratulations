<template>
  <div class="card_details">
    <div class="container">
      <div class="card_actions">
        <input
          type="text"
          v-model="userName"
          placeholder="Enter Your Name"
          class="form-control"
        />
        <div class="actions">
          <div>
            <input type="range" v-model="sizeText" class="form-control" />

            <input type="color" v-model="colorText" class="form-control" />
          </div>
          <div>
            <button class="btn btn-primary" @click="texthPlace('start')">
              Top
            </button>
            <button class="btn btn-primary" @click="texthPlace('center')">
              Center
            </button>
            <button class="btn btn-primary" @click="texthPlace('end')">
              Down
            </button>
          </div>

          <div>
            <button class="btn btn-success" @click="textvPlace('left')">
              Left
            </button>
            <button class="btn btn-success" @click="textvPlace('center')">
              Center
            </button>
            <button class="btn btn-success" @click="textvPlace('right')">
              Right
            </button>
          </div>
          <div>
            <button class="btn btn-info" @click="printThis">Download</button>
          </div>
        </div>
      </div>
      <div class="card_image" ref="printcontent">
        <div class="text" :style="{ ...textplace }">
          <p :style="{ color: colorText, fontSize: sizeText + 'px' }">
            {{ userName }}
          </p>
        </div>
        <img v-bind:src="theImage.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import response from "../assets/data/data.json";

export default {
  name: "CardDetails",
  setup() {},
  data() {
    return {
      userName: "",
      colorText: "#fff",
      theId: "",
      theOccasion: {},
      hPlace: "",
      vPlace: "",
      sizeText: "",
    };
  },
  computed: {
    textplace() {
      return {
        "justify-content": this.vPlace,
        "align-items": this.hPlace,
      };
    },
    theImage() {
      return {
        ...this.theOccasion,
        image:
          this.theOccasion.image &&
          require(`../assets/images/${this.theId.occasion}/${this.theOccasion.image}`),
      };
    },
  },
  methods: {
    async printThis() {
      const el = this.$refs.printcontent;

      const options = {
        type: "dataURL",
      };
      const printCanvas = await html2canvas(el, options);

      const link = document.createElement("a");
      link.setAttribute("download", "download.png");
      link.setAttribute(
        "href",
        printCanvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();
    },

    texthPlace(place) {
      this.hPlace = place;
    },
    textvPlace(place) {
      this.vPlace = place;
    },
    async getOneOccasion() {
      let routeName = this.theId.occasion;
      let routeId = this.theId.id;
      let result = response[routeName][routeId - 1];
      this.theOccasion = result;
    },
  },

  mounted() {
    this.theId = this.$route.params;

    this.getOneOccasion();
  },
};
</script>

<style scoped>
.card_details {
  margin: 30px 0;
}
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.container .card_image {
  width: 400px;
  position: relative;
  border: 2px solid #eee;
  padding: 5px;
  border-radius: 10px;
}
.container .card_image img {
  width: 100%;
}
.text {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 13px 20px;
}
.text p {
  margin: 0;
}
.card_actions {
  width: 30%;
}
.actions div {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 15px 0;
}
.actions div button {
  width: 30%;
}
/* .actions div:first-child, */
.actions div:last-child button {
  width: 100%;
  color: #fff;
}

.actions div:first-child input {
  width: 45%;
}
</style>
