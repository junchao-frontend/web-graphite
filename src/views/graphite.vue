<template>
<div class="main">
  <div id="container" style="width: 100%; height: 100%"></div>
</div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      map: null,
      imageLayer: null,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 插入自定义图层
      this.imageLayer = new AMap.ImageLayer({
        url: "http://49.232.18.137:9000/chao/shimo.jpg",
        bounds: new AMap.Bounds(
          [114.588403, 36.649755], // 左下角
          [114.908203, 36.780195] // 右上角
        )
      });
      this.map = new AMap.Map("container", {
        center: [114.748403, 36.714965],
        resizeEnable: true, // 是否监控地图容器尺寸变化
        // mapStyle: 'amap://styles/normal',
        zoom: 13,
        zooms: [13, 16],
        holes: [
          [114.908403, 36.649755],
          [114.588403, 36.649755],
          [114.588403, 36.780195],
          [114.908403, 36.780195],
          [114.908403, 36.649755],
        ],
        showLabel: false,
        layers: [new AMap.TileLayer(), this.imageLayer],
      });
    },
  },
};
</script>

<style scoped>
</style>
