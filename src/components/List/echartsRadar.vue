<template>
  <div class="radars">
    <div style="height: 10%">
      <p style="
          color: white;
          text-align: center;
          font-size: 14px;
          color: white;
          text-shadow: 0 0 8px rgb(0, 233, 249);
        ">
        教学区人流量
      </p>
    </div>
    <div id="Radar"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data () {
    return {};
  },
  mounted () {
    this.initRadar();
  },
  methods: {
    initRadar () {
      let myChart = this.$echarts.init(document.getElementById("Radar")); //初始化实例

      let option = {
        // backgroundColor: '#101736',
        color: ["#00c2ff", "#f9cf67", "#5DBD32"],
        //图例设置
        legend: {
          show: false,
          // icon: 'circle',//图例形状
          // bottom: 45,
          center: 0,
          itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 12,
            color: "#ace0f9",
          },
          data: ["人流量超标", "人数超标", "设备超时"],
        },

        grid: {
          x: 40,
          x2: 40,
          y2: 100,
          // top: "18%",
          // left: "15%",
          // right: "5%",
          // bottom: "14%",
        },
        radar: [
          {
            indicator: [
              {
                text: "组团一",
                max: 100,
              },
              {
                text: "组团二",
                max: 100,
              },
              {
                text: "组团三",
                max: 100,
              },
              {
                text: "组团四",
                max: 100,
              },
              {
                text: "组团五",
                max: 100,
              },
            ],

            textStyle: {
              color: "red",
              fontSize: '10px'
            },
            center: ["50%", "48%"],
            radius: 85,
            startAngle: 90,
            splitNumber: 3,
            orient: "horizontal", // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            // shape: 'circle',
            // backgroundColor: {
            //     image:imgPath[0]
            // },
            name: {
              formatter: "{value}",
              textStyle: {
                fontSize: 10, //外圈标签字体大小
                color: "#fff", //外圈标签字体颜色
              },
            },
            splitArea: {
              // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: {
                // 分隔区域的样式设置。
                color: ["rgba(255,255,255,.01)", "rgba(255,255,255,.05)"],
                // color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              },
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: {
              //指向外圈文本的分隔线样式
              lineStyle: {
                color: "rgba(0, 0, 0, 0.2)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(0, 0, 0, 0.2)", // 分隔线颜色
                width: 1, // 分隔线线宽
              },
            },
          },
        ],

        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 1,
                },
              },
            },
            data: [
              {
                name: "一社区",
                value: [25, 65, 55, 67, 82, 50, 85],
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: "linear",
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: "#00c2ff",
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)",
                        },
                        {
                          offset: 1,
                          color: "#00c2ff",
                        },
                      ],
                      globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                  },
                },
                symbolSize: 1.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: {
                  // 单个拐点文本的样式设置
                  normal: {
                    show: true, // 单个拐点文本的样式设置。[ default: false ]
                    position: "top", // 标签的位置。[ default: top ]
                    distance: 1, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                    color: "#cccc", // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                    fontSize: 10, // 文字的字体大小
                    formatter: function (params) {
                      return params.value;
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    //图形悬浮效果
                    borderColor: "#00c2ff",
                    borderWidth: 1.5,
                  },
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
              },
              {
                name: "二社区",
                value: [50, 20, 45, 30, 75, 60, 55],
                symbolSize: 1.5,
                itemStyle: {
                  normal: {
                    borderColor: "#f9cf67",
                    borderWidth: 1.5,
                  },
                },
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: "linear",
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: "#f9cf67",
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)",
                        },
                        {
                          offset: 1,
                          color: "#f9cf67",
                        },
                      ],
                      globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                  },
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
              },
              {
                name: "三社区",
                value: [37, 80, 12, 50, 25, 30, 60],
                symbolSize: 1.5,
                itemStyle: {
                  normal: {
                    borderColor: "#5DBD32",
                    borderWidth: 1.5,
                  },
                },
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: "linear",
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: "#5DBD32",
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)",
                        },
                        {
                          offset: 1,
                          color: "#5DBD32",
                        },
                      ],
                      globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                  },
                },
              },
            ],
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
#Radar {
  height: 100%;
  width: 100%;
  display: flex;
  /* padding-top: 7%; */
}
.radars {
  height: 100%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 10%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0%; */
}
</style>