<template>
  <div>
    <div class="timer">
      <div class="timer-content d-flex justify-content-between">
        <div class="timer-content-fp d-flex flex-column">
          <span>Timer</span>
          <span class="time-count" id="time">00:00:05</span>
        </div>
        <div class="timer-content-sp">
          <img src="@/static/img/UpStroke.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style>
.timer{
 padding: 24px 32px;
}
.timer-content{
  border: 1px solid #DDE0E6;
  background-color: #fff;
  padding: 16px;
}
.timer-content-fp span{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.005em;
  color: #2D2F33;
}
.time-count{
  margin-top: 16px;
}
</style>
