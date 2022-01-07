<template>
  <div style="height: 100%; width: 100%"
       class="pies">
    <div style="height: 7%">
      <p style="
          color: white;
          text-align: center;
          font-size: 14px;
          color: white;
          text-shadow: 0 0 8px rgb(0, 233, 249);
        ">
        学生比例对比
      </p>
    </div>
    <div id="Pie"
         style="height: 93%; width: 100%"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data () {
    return {};
  },
  mounted () {
    this.initPie();
  },
  methods: {
    initPie () {
      let myChart = this.$echarts.init(document.getElementById("Pie")); //初始化实例
      let option = {
        // backgroundColor: '#013954',
        title: {
          // text: 'Pie',
          left: "center",
          top: 20,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "学生类别 <br/>{b} : {c} ({d}%)",
        },
        // legend: {
        //     orient: 'vertical',
        //     // left: 20,
        //     // top: 20,
        //     data: ['睡觉', '离岗', '玩手机', '抽烟','超时审讯'],
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        series: [
          {
            name: "人数告警",
            type: "pie",
            radius: "45%",
            center: ["50%", "50%"],
            data: [
              {
                value: 210,
                name: "研究生",
              },
              // {
              //   value: 235,
              //   name: "用水量告警",
              // },
              {
                value: 274,
                name: "本科生",
              },
              {
                value: 310,
                name: "教职工",
              },
              // {
              //   value: 435,
              //   name: "超时审讯",
              // },
            ],
            roseType: "radius",
            label: {
              color: "#fff",
            },
            labelLine: {
              lineStyle: {
                color: "#888",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  //设置饼图分块颜色
                  var colorList = [
                    "#00B2EE",
                    // "	#4876FF",
                    "#5CACEE",
                    "#6495ED",
                    "#63B8FF",
                  ];
                  return colorList[params.dataIndex % colorList.length];
                },
              },
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            // eslint-disable-next-line no-unused-vars
            animationDelay: function (idx) {
              return Math.random() * 200;
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
.pies {
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