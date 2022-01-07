<template>
  <div style="height: 100%; width: 100%">
    <div id="tag">
      <div class="tag1">
        <div style="height: 50%; width: 50%;align-items: center; display: flex;">
          <i class="iconfont icon-renjunrishenghuoyongshuiliang30"
             id="testicon1"></i>
        </div>
        <div style="height: 50%; width: 50%; align-items: center">
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            占地面积
          </div>
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            4098 亩
          </div>
        </div>
      </div>
      <div class="tag2">
        <div style="height: 50%; width: 50%;align-items: center; display: flex;">
          <i class="iconfont icon-gaojing"
             id="testicon2"></i>
        </div>
        <div style="height: 50%; width: 50%">
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            教职工
          </div>
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            2379 人
          </div>
        </div>
      </div>
      <div class="tag3">
        <div style="height: 50%; width: 50%;align-items: center; display: flex;">
          <i class="iconfont icon-icon-"
             id="testicon3"></i>
        </div>
        <div style="height: 50%; width: 50%">
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            在校生
          </div>
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            26277 人
          </div>
        </div>
      </div>
      <div class="tag4">
        <div style="height: 50%; width: 50%;align-items: center; display: flex;">
          <i class="iconfont icon-shuibiaoguohu-"
             id="testicon4"></i>
        </div>
        <div style="height: 50%; width: 50%">
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            专业
          </div>
          <div style="color: white; padding-bottom: 20px; font-size: 12px">
            87 个
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ".//at.alicdn.com/t/font_2572393_3l4ld09yv33.css";
export default {
  data () {
    return {};
  },
  mounted () { },
  methods: {},
};
</script>

<style>
#tag {
  height: 97%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%; */
}
.tag1 {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  /* background-color: #fff; */
}
.tag2 {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
}

.tag3 {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
}
.tag4 {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
}
#testicon1 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
}
#testicon2 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
  align-items: center;
  display: flex;
}
#testicon3 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
  align-items: center;
  display: flex;
}

#testicon4 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
  align-items: center;
  display: flex;
}
/* span:nth-child(1) {
  color: white;
  display: inline;
}
span:nth-child(2) {
  color: rgb(255, 255, 255);
  display: block;
} */
</style>