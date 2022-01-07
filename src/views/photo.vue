<template>
  <div class="main">
    <div id="photosphere" class="photosphere">
      <el-dialog
        title="测试"
        :visible.sync="dialogVisible"
        width="50%"
      >
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
      <span class="titletext">环 保</span>
    </div>
  </div>
</template>

<script>
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers.js";
import "photo-sphere-viewer/dist/plugins/markers.css";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import EchartsRadar from '../components/List/echartsRadar.vue'
import EchartsPie from '../components/List/echartsPie'
import EchartsForm from '../components/List/echartsForm'
import EchartsBar from '../components/List/echartsBar'
import Tips from '../components/List/Tips'
import EchartsLine from '../components/List/echartsLine'
import EchartsDialog from '../components/List/echartsDialog'
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
      dialogVisible: false
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
        defaultZoomLvl: 50,
        defaultLong: 6.231302993071661, // 初始经度，介于0和2π之间
        defaultLat: -0.15862493322827957, // 初始纬度，介于-π/ 2和π/ 2之间。
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
                  longitude: 6.1499380316414936,
                  latitude: -0.1384418182379843,
                  html: "<div class='yellow'><div class='yellow-text'>V</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "无组织VOCs",
                },
                {
                  id: "html2",
                  longitude: 0.04224938832835294,
                  latitude: -0.1412893819983141,
                  html: "<div class='pin'><div class='text'>V</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "有组织VOCs",
                },
                {
                  id: "html3",
                  longitude: 6.047462209861827,
                  latitude: -0.3089011327807749,
                  html: "<div class='blue'><div class='yellow-text'>C</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "CEMS",
                },
                {
                  id: "html",
                  longitude: 0.07750735348571346,
                  latitude: -0.10338181667067858,
                  html: "<div class='yangchen'><div class='text'>P</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html4",
                  longitude: 6.015142458534825,
                  latitude: -0.33140880893830915,
                  html: "<div class='yangchen'><div class='text'>P</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html5",
                  longitude: 5.7252865521698775,
                  latitude: -0.4710962437277053,
                  html: "<div class='yangchen'><div class='text'>P</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html6",
                  longitude: 0.5019453053703459,
                  latitude: -0.1395886141894247,
                  html: "<div class='yangchen'><div class='text'>P</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html7",
                  longitude: 0.6167093287226815,
                  latitude: -0.28475783293140733,
                  html: "<div class='yangchen'><div class='text'>P</div></div><div class='pulse'></div>",
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
              ],
            },
          ],
        ],
      });
      const markersPlugin = PSV.getPlugin(MarkersPlugin);
      PSV.on("click", (e) => {
        console.log(e);
      });
      markersPlugin.on("select-marker", () => {
        console.log(1);
        this.dialogVisible = true; // 弹出框
      });
    },
  },
};
</script>

<style scoped>
.wjc {
  z-index: 999999;
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.photosphere {
  width: 100%;
  height: 100%;
}
>>> .text {
  /* border: 1px solid red; */
  transform: rotate(45deg);
  margin-top: 3px;
  margin-left: 3px;
  color: white;
  /* text-align: center; */
  font-size: 10px;
  position: absolute;
  cursor: pointer;
}
>>> .yellow-text {
  /* border: 1px solid red; */
  transform: rotate(45deg);
  margin-top: 3px;
  margin-left: 3px;
  color: black;
  /* text-align: center; */
  font-size: 10px;
  position: absolute;
  cursor: pointer;
}

>>> .pin {
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 50% 0;
  background: #ff751a !important;
  position: absolute;
  transform: rotate(-45deg);
  z-index: 1;
}
>>> .yellow {
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 50% 0;
  background: #fefe85 !important;
  position: absolute;
  transform: rotate(-45deg);
  z-index: 1;
}
>>> .blue {
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 50% 0;
  background: #03fefd !important;
  position: absolute;
  transform: rotate(-45deg);
  z-index: 1;
}
>>> .yangchen {
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 50% 0;
  background: #029dd5 !important;
  position: absolute;
  transform: rotate(-45deg);
  z-index: 1;
}

>>> .pulse {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 20px 0px 0px 5px;
  /* z-index: -2; */
}

>>> .pulse:after {
  content: "";
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: absolute;
  margin: -10px 0 0 -5px;
  animation: pulsate 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -webkit-box-shadow: 0 0 1px 2px #e5e3de;
  box-shadow: 0 0 1px 2px#E5E3DE;
}
.main {
  width: 100%;
  height: 100%;
}
.left {
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
  width: 50%;
  height: 7%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 25%;
}
.titletext {
  font-size: 36px;
  color: rgb(52, 136, 167);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  letter-spacing: 50px;
}
.left1 {
  height: 26%;
  margin-bottom: 5%;
  background-color: rgb(0, 0, 0, 0.2);
  border: solid 1px rgb(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
}
.left2 {
  width: 100%;
  height: 32%;
  margin-bottom: 5%;
  background-color: rgb(0, 0, 0, 0.2);
  border: solid 1px rgb(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
.left3 {
  width: 100%;
  height: 37%;
  background-color: rgb(0, 0, 0, 0.2);
  border: solid 1px rgb(76, 205, 252, 0.5);
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
  height: 30%;
  margin-bottom: 5%;
  background-color: rgb(0, 0, 0, 0.2);
  border: solid 1px rgb(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
.right2 {
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
  background-color: rgb(0, 0, 0, 0.2);
  border: solid 1px rgb(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10%;
}
.right3 {
  width: 100%;
  height: 35%;
  background-color: rgb(0, 0, 0, 0.2);
  border: solid 1px rgb(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
>>> .dv-scroll-board .rows .ceil {
  padding: 0 13px;
}
/* .row-item {
  height: 45.6px !important;
  line-height: 45.6px !important;
} */
>>> .psv-navbar {
  /* left: 25%;
  bottom: 9%;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.2);
  width: 50%; */
  height: 3.5%;
}
>>> .psv-button {
  margin-right: 6%;
  width: 20px;
  height: 20px;
}
.psv-autorotate-button {
  margin-left: 5%;
}
.psv-zoom-button {
  width: 30%;
}
.psv-zoom-button-minus {
  width: 7%;
  margin-right: 25%;
}
.psv-zoom-button-range {
  margin-right: 25%;
}
.psv-zoom-button-plus {
  width: 7%;
}
>>> .el-dialog {
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
  -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 35% !important;
  height: 60% !important;
  background-color: rgba(64, 97, 148, 0.534);
  /* background-color: rgba(61, 77, 93, 0.5); */
}

>>> .el-dialog__body {
  /* padding: 30px 20px; */
  color: #606266;
  font-size: 14px;
  word-break: break-all;
  height: 100%;
  width: 97%;
}
>>> .el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #fff;
}
</style>
