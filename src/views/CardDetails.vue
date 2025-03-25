<template>
  <div class="card_details">
    <div class="container">
      <div class="card_actions">
        <div>
          <button class="btn btn-primary m-3" @click="selectText = false">
            {{ $t("Use Position") }}
          </button>
          <button class="btn btn-primary m-3" @click="selectText = true">
            {{ $t("Use Drag & Drop") }}
          </button>
        </div>

        <input
          type="text"
          v-model="userName"
          placeholder="Enter Your Name"
          class="form-control"
        />
        <div class="actions">
          <div>
            <div>
              <label class="form-label">{{ $t("Size") }}</label>
              <input type="range" v-model="sizeText" class="form-control" />
            </div>
            <div>
              <label class="form-label">{{ $t("Color") }}</label>
              <input type="color" v-model="colorText" class="form-control" />
            </div>
          </div>

          <div>
            <div>
              <label class="form-label">{{ $t("From Left") }}</label>
              <input
                type="range"
                v-model="fromx"
                class="form-control"
                min="0"
                :max="card_image_width"
              />
            </div>
            <div>
              <label class="form-label">{{ $t("From Top") }}</label>

              <input
                type="range"
                v-model="fromy"
                class="form-control"
                min="0"
                :max="card_image_hight"
              />
            </div>
          </div>

          <div v-if="selectText == false">
            <button class="btn btn-primary" @click="texthPlace('start')">
              {{ $t("Top") }}
            </button>
            <button class="btn btn-primary" @click="texthPlace('center')">
              {{ $t("Center") }}
            </button>
            <button class="btn btn-primary" @click="texthPlace('end')">
              {{ $t("Down") }}
            </button>
          </div>

          <div v-if="selectText == false">
            <button class="btn btn-success" @click="textvPlace('left')">
              {{ $t("Left") }}
            </button>
            <button class="btn btn-success" @click="textvPlace('center')">
              {{ $t("Center") }}
            </button>
            <button class="btn btn-success" @click="textvPlace('right')">
              {{ $t("Right") }}
            </button>
          </div>

          <div>
            <button class="btn btn-info" @click="printThis">
              {{ $t("Download") }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="card_image"
        ref="printcontent"
        :style="{
          height: card_image_hight + 'px',
          width: card_image_width + 'px',
        }"
      >
        <div class="text" :style="{ ...textplace }">
          <p
            :style="{
              ...positionText,
            }"
            :class="{ absolute: selectText }"
            ref="square"
            @mousedown="(e) => startDrag(e)"
          >
            {{ userName }}
          </p>
        </div>
        <img v-bind:src="theImage.image" alt="" class="w-100 h-100" />
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
      fromx: 0,
      fromy: 0,
      userName: "",
      colorText: "#fff",
      theId: "",
      theOccasion: {},
      hPlace: "",
      vPlace: "",
      sizeText: "",
      card_image_hight: "500",
      card_image_width: "400",

      selectText: false,
      startXCordinate: 0,
      startYCordinate: 0,
      offsetLeft: 0,
      offsetTop: 0,
      currentElement: null,
    };
  },
  computed: {
    positionText() {
      return {
        "font-size": this.sizeText + "px",
        color: this.colorText,
        top: this.fromy + "px",
        left: this.fromx + "px",
      };
    },
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
    drag(e) {
      this.startXCordinate = e.clientX;
      this.startYCordinate = e.clientY;

      if (this.currentElement) {
        const rect = this.currentElement.getBoundingClientRect();
        this.offsetLeft = rect.left;
        this.offsetTop = rect.top;
      }

      document.addEventListener("mousemove", this.dragOn);
      document.addEventListener("mouseup", this.dragOff);
    },

    dragOn(e) {
      if (this.currentElement) {
        const containerRect =
          this.currentElement.parentElement.getBoundingClientRect();
        const newLeft =
          e.clientX - containerRect.left - this.currentElement.offsetWidth / 2;
        const newTop =
          e.clientY - containerRect.top - this.currentElement.offsetHeight / 2;

        this.currentElement.style.left = `${newLeft}px`;
        this.currentElement.style.top = `${newTop}px`;
      }
    },
    dragOff() {
      document.removeEventListener("mousemove", this.dragOn);
      document.removeEventListener("mouseup", this.dragOff);

      this.currentElement = null;
    },
    startDrag(e) {
      this.selectText = true;
      this.currentElement = this.$refs.square;

      this.drag(e);
    },

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
      this.selectText = false;
      this.fromx = 0;
      this.fromy = 0;
      this.hPlace = place;
    },
    textvPlace(place) {
      this.selectText = false;
      this.fromx = 0;
      this.fromy = 0;
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
  position: relative;
  border: 2px solid #eee;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 13px #c0c0c0;
}
.container .card_image img {
  width: 100%;
  border-radius: 10px;
}
.text {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;

  padding: 13px 20px;
  overflow: hidden;
}
.text p {
  margin: 0;
  position: relative;
  top: 0;
  left: 0;
}
.card_actions {
  width: 30%;
}

.actions > div {
  display: flex;
  justify-content: space-between;
  align-content: center;

  padding: 10px 0;
  border-bottom: 2px solid #a5b68d;
}

.actions > div:first-child div,
.actions > div:nth-child(2) div {
  width: 45%;
}

.actions div:last-child {
  border: none;
}
.actions div:last-child button {
  width: 100%;
  color: #fff;
}

.absolute {
  display: inline !important;
  height: 50px !important;
}

@media (max-width: 425px) {
  .card_image {
    width: 300px !important;
    height: 400px !important;
  }
}
@media (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
  }

  .card_actions {
    width: 94%;
    margin-top: 26px;
  }
}
</style>
