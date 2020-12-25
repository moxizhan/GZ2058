<template>
  <div class="general-header">
    <van-nav-bar left-arrow left-text="返回" :title="$attrs.title" @click-left="$router.back()">
      <template #right>
        <van-icon
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="
          size="22"
        />
        <van-icon
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC"
          size="22"
        /> </template
    ></van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.general-header {
//   border-bottom: 1px solid red;
  .van-nav-bar {
    background: #b83320;
    color: white;

    .van-nav-bar__title {
      .van-button {
        height: 28px;
        border-radius: 14px 0 0 14px;
        border-color: white;
        border-width: 1px;
        background-color: transparent;
        color: white;
        & + .van-button {
          border-left: none;
          border-radius: 0 14px 14px 0;
        }
        &.active {
          background: white;
          color: lightgray;
        }
      }
    }
    .van-nav-bar__title {
        color: white;
    }
    .van-icon {
        color: white;
    }
    .van-nav-bar__text {
        color: white;
    }
  }
}
</style>
