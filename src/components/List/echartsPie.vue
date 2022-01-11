<template>
  <div class="Pie">
    <div id="cols2">治理设施运转</div>
    <div id="Pie"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initBar();
  },
  methods: {
    initBar() {
      let myChart = this.$echarts.init(document.getElementById("Pie")); //初始化实例
      let data = [
        {
          name: "设备1",
          value: 100,
        },
        {
          name: "设备2",
          value: 90,
        },
        {
          name: "设备3",
          value: 80,
        },
        {
          name: "设备4",
          value: 70,
        },
        {
          name: "设备5",
          value: 60,
        },
      ];
      let arrName = getArrayValue(data, "name");
      let arrValue = getArrayValue(data, "value");
      let sumValue = eval(arrValue.join("+"));
      let objData = array2obj(data, "name");
      let optionData = getData(data);
      function getArrayValue(array, key) {
        key = key || "value";
        var res = [];
        if (array) {
          array.forEach(function (t) {
            res.push(t[key]);
          });
        }
        return res;
      }
      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }
      function getData(data) {
        var res = {
          series: [],
          yAxis: [],
        };
        for (let i = 0; i < data.length; i++) {
          res.series.push({
            name: "",
            type: "pie",
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [73 - i * 15 + "%", 68 - i * 15 + "%"],
            center: ["45%", "55%"],
            label: {
              show: false,
            },
            itemStyle: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              borderWidth: 5,
            },
            data: [
              {
                value: data[i].value,
                name: data[i].name,
              },
              {
                value: sumValue - data[i].value,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0,
                },
                tooltip: {
                  show: false,
                },
                hoverAnimation: false,
              },
            ],
          });
          res.series.push({
            name: "",
            type: "pie",
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [73 - i * 15 + "%", 68 - i * 15 + "%"],
            center: ["45%", "55%"],
            label: {
              show: false,
            },
            itemStyle: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              borderWidth: 5,
            },
            data: [
              {
                value: 7.5,
                itemStyle: {
                  color: "rgb(3, 31, 62)",
                  borderWidth: 0,
                },
                tooltip: {
                  show: false,
                },
                hoverAnimation: false,
              },
              {
                value: 2.5,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0,
                },
                tooltip: {
                  show: false,
                },
                hoverAnimation: false,
              },
            ],
          });
          res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + "%");
        }
        return res;
      }
      let option = {
        legend: {
          show: true,
          icon: "circle",
        //   top: "center",
          top: "20%",
        //   bottom: "13%",
          left: "48%",
          data: arrName,
          width: 40,
        //   padding: [0, 10],
          itemGap: 0,
          formatter: function (name) {
            return (
              "{title|" +
              name +
              "} {value|" +
              objData[name].value +
              "}  {title|%}"
            );
          },

          textStyle: {
            rich: {
              title: {
                fontSize: 20,
                lineHeight: 30,
                color: "rgb(0, 178, 246)",
              },
              value: {
                fontSize: 18,
                lineHeight: 20,
                color: "#fff",
              },
            },
          },
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a}<br>{b}:{c}({d}%)",
        },
        color: [
          "rgb(9,187,247)",
          "rgb(184,254,165)",
          "rgb(253,218,23)",
          "rgb(252,152,12)",
        ],
        xAxis: [
          {
            show: false,
          },
        ],
        series: optionData.series,
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
#Pie {
  height: 100%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* margin-top: 3%; */
}
#cols2 {
  top: 10px;
  height: 7%;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 14px;
  color: white;
  text-shadow: 0 0 8px rgb(0, 233, 249);
  position: absolute;
  /* padding-top: 4%; */
  /* position: relative; */
  /* top: 6%; */
}
.Pie {
  /* background-color: burlywood; */
  height: 100%;
  width: 100%;
  /* backdrop-filter: blur(8px);
  background-color: rgba(1, 131, 196, 0.05);
  border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%; */
  /* margin-top: 8%; */
}
</style>