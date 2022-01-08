<template>
  <div class="main">
    <div id="photosphere" class="photosphere">
      <el-dialog title="测试" :visible.sync="dialogVisible" width="50%">
        <EchartsDialog></EchartsDialog>
      </el-dialog>
    </div>
    <div class="left">
      <div class="left1">
        <Tips></Tips>
      </div>
      <div class="left2">
        <EchartsBar></EchartsBar>
      </div>
      <div class="left3">
        <EchartsForm></EchartsForm>
      </div>
    </div>
    <div class="right">
      <div style="float: right; z-index: 999; top: 5px">
        <button
          @click="exit()"
          style="
            position: flex;
            background: rgba(0, 0, 0, 0);
            color: #0000ff;
            border: 0;
            font-size: 17px;
            cursor: pointer;
          "
        >
          <i class="el-icon-arrow-right" />
        </button>
      </div>
      <div class="right1">
        <EchartsRadar></EchartsRadar>
      </div>
      <div class="right2">
        <EchartsPie></EchartsPie>
      </div>
      <div class="right3">
        <EchartsLine></EchartsLine>
      </div>
    </div>
    <div class="title">
      <!-- <span class="titletext">瑞通碳素环保管控平台</span> -->
      <dv-decoration-11 style="width:950px" class="title-text"
        >瑞通碳素环保管控平台</dv-decoration-11
      >
    </div>
  </div>
</template>

<script>
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers.js";
import "photo-sphere-viewer/dist/plugins/markers.css";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import EchartsRadar from "../components/List/echartsRadar.vue";
import EchartsPie from "../components/List/echartsPie";
import EchartsForm from "../components/List/echartsForm";
import EchartsBar from "../components/List/echartsBar";
import Tips from "../components/List/Tips";
import EchartsLine from "../components/List/echartsLine";
import EchartsDialog from "../components/List/echartsDialog";
export default {
  components: {
    // Echarts
    EchartsRadar,
    EchartsPie,
    EchartsForm,
    EchartsBar,
    EchartsLine,
    EchartsDialog,
    Tips,
  },
  data() {
    return {
      panoramadata: null,
      img: require("./70.jpg"),
      markersData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const PSV = new Viewer({
        container: document.getElementById("photosphere"),
        panorama: this.img,
        defaultZoomLvl: 60,
        defaultLong: 6.271302993071661, // 初始经度，介于0和2π之间
        defaultLat: -0.22862493322827957, // 初始纬度，介于-π/ 2和π/ 2之间。
        size: {
          width: "100%",
          height: "100%",
        },
        navbar: ["autorotate", "zoom", "markers", "download"],
        plugins: [
          [
            MarkersPlugin,
            {
              markers: [
                {
                  id: "html1",
                  longitude: 5.7252865521698775,
                  latitude: -0.4710962437277053,
                  html: `<div class="svg-container">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text">
                    <div class="svg-text-title">焙烧厂区大门颗粒物</div>
                    <div class="svg-text-body">
                    <div class="svg-text-item"><span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">PM10:</span><span class="right-span">35mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">TSP:</span><span class="right-span">45mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html2",
                  longitude: 6.015142458534825,
                  latitude: -0.33140880893830915,
                  html: `<div class="svg-container-pm2" >
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text-pm2">
                    <div class="svg-text-pm2-title">一烧车间门口颗粒物</div>
                    <div class="svg-text-pm2-body">
                    <div class="svg-text-pm2-item"><span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span></div>
                    <div class="svg-text-pm2-item"><span class="left-span">PM10:</span><span class="right-span">35mg/m3</span></div>
                    <div class="svg-text-pm2-item"><span class="left-span">TSP:</span><span class="right-span">45mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse-pm2'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html3",
                  longitude: 0.07393947431842574,
                  latitude: -0.12947662495924073,
                  html: `<div class="svg-container">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text">
                    <div class="svg-text-title">压型车间门口颗粒物</div>
                    <div class="svg-text-body">
                    <div class="svg-text-item"><span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">PM10:</span><span class="right-span">35mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">TSP:</span><span class="right-span">45mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html4",
                  longitude: 0.7040675782849761,
                  latitude: -0.33096554138647405,
                  html: `<div class="svg-container">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text">
                    <div class="svg-text-title">石墨化厂区大门颗粒物</div>
                    <div class="svg-text-body">
                    <div class="svg-text-item"><span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">PM10:</span><span class="right-span">35mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">TSP:</span><span class="right-span">45mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html5",
                  longitude: 0.5399753121111439,
                  latitude: -0.20969402700795658,
                  html: `<div class="svg-container">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text">
                    <div class="svg-text-title">石墨化车间大门颗粒物</div>
                    <div class="svg-text-body">
                    <div class="svg-text-item"><span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">PM10:</span><span class="right-span">35mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span">TSP:</span><span class="right-span">45mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html6",
                  longitude: 6.142411710733739,
                  latitude: -0.13664440734131178,
                  html: `<div class="svg-container-wuzu">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text-wuzu">
                    <div class="svg-text-wuzu-title">无组织VOCs</div>
                    <div class="svg-text-wuzu-body">
                    <div class="svg-text-wuzu-item"><span class="left-span">浓度</span><span class="right-span">25mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse-wuzu'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "无组织VOCs",
                },
                {
                  id: "html7",
                  longitude: 0.056468770790485866,
                  latitude: -0.14382677250626164,
                  html: `<div class="svg-container-wuzu">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text-wuzu">
                    <div class="svg-text-wuzu-title">有组织VOCs</div>
                    <div class="svg-text-wuzu-body">
                    <div class="svg-text-wuzu-item"><span class="left-span">浓度</span><span class="right-span">45mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse-wuzu'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "有组织VOCs",
                },
                {
                  id: "html8",
                  longitude: 6.028658770109717,
                  latitude: -0.30994143771483906,
                  html: `<div class="svg-container-cem">
                        <svg viewBox="0 0 680 240" class="test">
                            <path fill="rgba(64, 97, 148, 0.434)" d="
                        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                        L 660 10 L 675 25
                        L 675 235 L 20 235
                        L 5 220 L 5 20
                      " stroke="#6586ec"></path>
                            <path fill="transparent" stroke-width="3" stroke-linecap="round" stroke-dasharray="10, 5" d="M 16 9 L 61 9"
                                stroke="#6586ec"></path>
                            <path fill="transparent" d="M 5 20 L 5 10 L 12 3  L 60 3 L 68 10" stroke="#2cf7fe"></path>
                            <path fill="transparent" d="M 675 210 L 675 235 L 650 235" stroke="#2cf7fe"></path>
                        </svg>
                    </div>
                    <div class="svg-text-cem">
                    <div class="svg-text-cem-title">超低排放监测(CEMS)</div>
                    <div class="svg-text-cem-body">
                    <div class="svg-text-item"><span class="left-span-cem">颗粒物:</span><span class="right-span-cem">25mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span-cem">NOx:</span><span class="right-span-cem">35mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span-cem">SO2:</span><span class="right-span-cem">45mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span-cem">O3:</span><span class="right-span-cem">45mg/m3</span></div>
                    <div class="svg-text-item"><span class="left-span-cem">CO:</span><span class="right-span-cem">44mg/m3</span></div>
                    </div>
                    </div>
                    <div class='svg-pulse-cem'>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "CEMS",
                },
                // {
                //   id: "html3",

                //   html: "<div class='blue'><div class='yellow-text'>C</div></div><div class='pulse'></div>",
                //   width: 32,
                //   height: 32,
                //   anchor: "bottom center",
                //   tooltip: "CEMS",
                // },
              ],
            },
          ],
        ],
      });
      const markersPlugin = PSV.getPlugin(MarkersPlugin);
      PSV.on("click", (e) => {
        console.log(e, "坐标");
      });
      markersPlugin.on("select-marker", () => {
        // console.log(1);
        this.dialogVisible = true; // 弹出框
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.photosphere {
  width: 100%;
  height: 100%;
}
/deep/ .svg-container-pm2 {
  // text-align: center;
  z-index: 1;
  position: absolute;
  right: -125px;
  bottom: 100px;
  width: 300px;
  height: 200px;
}
/deep/ .svg-pulse-pm2 {
  position: absolute;
  // background: rgba(64, 97, 148, 0.434);
  background: rgba(2, 238, 252,.4);
  height: 200px;
  width: 2px;
  margin: -165px 0px 0px 5px;
}
/deep/ .svg-text-pm2 {
  z-index: 2;
  bottom: 205px;
  left: -130px;
  color: #02eefc;
  position: absolute;
  cursor: pointer;
  &-title {
    // margin: 0 auto;
    width: 280px;
    letter-spacing: 2px;
    font-size: 20px;
    // margin-bottom: 5px;
  }
  &-body {
    // margin-left: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  &-item {
    .left-span {
      margin-right: 15px;
      font-size: 14px;
      color: #b2f1f5;
    }
    .right-span {
      font-size: 14px;
      color: #02eefc;
    }
  }
}
/deep/ .svg-container-cem {
  // text-align: center;
  z-index: 1;
  position: absolute;
  right: -145px;
  bottom: -55px;
  width: 340px;
  height: 200px;
}
/deep/ .left-span-cem {
  margin-right: 15px;
  font-size: 12px;
  color: #b2f1f5;
}
/deep/ .right-span-cem {
  font-size: 12px;
  color: #02eefc;
}
/deep/ .svg-pulse-cem {
  position: absolute;
  // background: rgba(64, 97, 148, 0.434);
  background: rgba(2, 238, 252,.4);
  height: 60px;
  width: 2px;
  margin: -10px 0px 0px 5px;
}
/deep/ .svg-text-cem {
  z-index: 2;
  bottom: 30px;
  left: -150px;
  color: #02eefc;
  position: absolute;
  cursor: pointer;
  &-title {
    // margin: 0 auto;
    width: 280px;
    letter-spacing: 2px;
    font-size: 16px;
    // margin-bottom: 5px;
  }
  &-body {
    // margin-left: 10px;
    // margin-top: 5px;
    display: flex;
    flex-direction: column;
  }
}
/deep/ .svg-container-wuzu {
  // text-align: center;
  z-index: 1;
  position: absolute;
  right: -95px;
  bottom: -55px;
  width: 250px;
  height: 200px;
}
/deep/ .svg-pulse-wuzu {
  position: absolute;
  // background: rgba(64, 97, 148, 0.434);
  background: rgba(2, 238, 252,.4);
  height: 65px;
  width: 2px;
  margin: -25px 0px 0px 5px;
}
/deep/ .svg-text-wuzu {
  z-index: 2;
  bottom: 75px;
  left: -114px;
  color: #02eefc;
  position: absolute;
  cursor: pointer;
  &-title {
    // margin: 0 auto;
    width: 280px;
    letter-spacing: 2px;
    font-size: 18px;
    // margin-bottom: 5px;
  }
  &-body {
    // margin-left: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  &-item {
    .left-span {
      margin-right: 15px;
      font-size: 14px;
      color: #b2f1f5;
    }
    .right-span {
      font-size: 14px;
      color: #02eefc;
    }
  }
}
/deep/ .svg-container {
  // text-align: center;
  z-index: 1;
  position: absolute;
  right: -125px;
  bottom: 70px;
  width: 300px;
  height: 200px;
}
/deep/ .svg-pulse {
  position: absolute;
  // background: rgba(64, 97, 148, 0.434);
  background: rgba(2, 238, 252,.4);
  height: 165px;
  width: 2px;
  margin: -140px 0px 0px 5px;
}
/deep/ .svg-text {
  z-index: 2;
  bottom: 172px;
  left: -130px;
  color: #02eefc;
  position: absolute;
  cursor: pointer;
  &-title {
    // margin: 0 auto;
    width: 280px;
    letter-spacing: 2px;
    font-size: 20px;
    // margin-bottom: 5px;
  }
  &-body {
    // margin-left: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  &-item {
    .left-span {
      margin-right: 15px;
      font-size: 14px;
      color: #b2f1f5;
    }
    .right-span {
      font-size: 14px;
      color: #02eefc;
    }
  }
}
.main {
  width: 100%;
  height: 100%;
}
.left {
  // backdrop-filter: blur(8px);
  width: 13%;
  height: 94%;
  background-color: transparent;
  margin-top: 2%;
  margin-left: 1%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.title {
  // width: 40%;
  height: 8%;
  background-color: transparent;
  position: absolute;
  top: 0;
  margin-left: -500px;
  left: 50%;
}
.title-text {
  /* height: 5%; */
  font-size: 35px;
  color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  letter-spacing: 40px;
}
.left1 {
  backdrop-filter: blur(8px);
  height: 26%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
}
.left2 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 32%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
.left3 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 37%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
}
.right {
  width: 13%;
  height: 94%;
  background-color: transparent;
  margin-top: 2%;
  margin-right: 1%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
}
.right1 {
  backdrop-filter: blur(8px);
  height: 30%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
.right2 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10%;
}
.right3 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 35%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
/deep/ .dv-scroll-board .rows .ceil {
  padding: 0 13px;
}
/* .row-item {
  height: 45.6px !important;
  line-height: 45.6px !important;
} */
/deep/ .psv-navbar {
  left: 30px;
  width: 365px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 3%;
}
/deep/ .psv-button {
  margin-right: 15px;
  // width: 20px;
  height: 20px;
}
/deep/ .test {
  backdrop-filter: blur(8px);
}
/deep/ .el-dialog {
  position: relative;
  margin: 0 auto 50px;
  border-top-left-radius: 5%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 0;
  /* border-top: solid 3px #cccc;
  border-bottom: solid 3px #cccc;
  border-right: solid 3px #cccc;
  border-left: solid 3px #cccc; */
  backdrop-filter: blur(8px);
  border: solid 2px rgba(64, 97, 148, 0.6);
  // -webkit-box-shadow: 0 1px 3px rgba(0 0 0 / 30%);
  // box-shadow: 0 1px 3px rgba(0 ,0 ,0 , 30%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 35% !important;
  height: 60% !important;
  background-color: rgba(64, 97, 148, 0.534);
  /* background-color: rgba(61, 77, 93, 0.5); */
}

/deep/ .el-dialog__body {
  /* padding: 30px 20px; */
  color: #606266;
  font-size: 14px;
  word-break: break-all;
  height: 100%;
  width: 97%;
}
/deep/ .el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #fff;
}
</style>
