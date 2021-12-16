<template>
  <div id="container" style="width: 100%; height: 100%"></div>
</template>

<script>
import AMap from "AMap";
export default {
  components: {},
  data() {
    return {
      map: {},
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        // mapStyle: "amap://styles/darkblue",
      });
    },
  },
};
</script>

<style scoped>
</style>
