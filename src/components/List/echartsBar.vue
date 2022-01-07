<template>
  <div class="Bars">
    <div id="cols2">近30天各分组人流量对比</div>
    <div id="Bar"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import chalk from "../chalk/chalk.json";
export default {
  data () {
    return {};
  },
  mounted () {
    this.initBar();
  },
  methods: {
    initBar () {
      let obj = chalk;

      echarts.registerTheme("chalk", obj);
      let myChart = this.$echarts.init(document.getElementById("Bar", "chalk")); //初始化实例
      let option = {
        // backgroundColor: "#00265f",
        title: {
          // text: "近三十天各派出所督察问题对比",
          x: "center",
          y: "4%",
          textStyle: {
            color: "#fff",
            fontSize: "16",
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          textStyle: {
            fontSize: 10,
          },
        },
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "15%",
        },
        xAxis: [
          {
            type: "category",
            data: [
              "学院",
              "食堂",
              "公寓",
              "公共部分",
              "后勤",
              // // "吴官营乡",
              // // "小寨镇",
              // // "鸡泽县",
            ],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#e2e9ff",
              textStyle: {
                fontSize: 12,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              show: false,
              formatter: "{value}",
              color: "#e2e9ff",
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,.12)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: [80, 130, 115, 180, 233, 206, 157, 169],
            //柱子宽度
            barWidth: "10px",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,244,255,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0,77,167,1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: "rgba(0,160,221,1)",
                shadowBlur: 4,
              },
            },
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 50,
                height: 30,
                // backgroundColor: "rgba(0,160,221,0.1)",
                borderRadius: 200,
                position: ["-12", "-22"],
                distance: 1,
                formatter: ["    {d|●}", "    {a|{c}}     \n"].join(","),
                rich: {
                  d: {
                    color: "#3CDDCF",
                  },
                  a: {
                    color: "#fff",
                    align: "center",
                  },
                  // b: {
                  //   width: 1,
                  //   height: 30,
                  //   borderWidth: 1,
                  //   borderColor: "#234e6c",
                  //   align: "left",
                  // },
                },
              },
            },
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style>
#Bar {
  height: 100%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* margin-top: 3%; */
}
#cols2 {
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
.Bars {
  height: 100%;
  width: 100%;
  /* backdrop-filter: blur(8px);
  background-color: rgba(1, 131, 196, 0.05);
  border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
  /* margin-top: 8%; */
}
</style>