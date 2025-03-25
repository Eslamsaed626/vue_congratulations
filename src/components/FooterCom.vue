<template>
  <div>{{ $t("This site is designed by Ataa programmers") }}</div>
</template>

<script>
export default {
  name: "FooterCom",
  setup() {},
};
</script>

<style scoped>
div {
  padding: 17px;
  background: #27445d;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
}

@media (max-width: 450px) {
  div {
    font-size: 14px;
  }
}
</style>
