<template>
  <div class="global-components-box">

<!--      <el-dialog-->
<!--        title="登录"-->
<!--        class="auth-modal-box"-->
<!--        :visible.sync="centerDialogVisible"-->
<!--        :close-on-click-modal="false"-->
<!--        :modal-append-to-body="false"-->
<!--        :lock-scroll="false"-->
<!--        :show-close="false"-->
<!--        custom-class="auth-form"-->
<!--        center>-->
<!--        <div class="panel">-->

<!--        </div>-->

<!--      </el-dialog>-->
    <div class="auth-modal-box" v-if="centerDialogVisible">
      <form class="auth-form">

      </form>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'global-components',
    data() {
      return {
        auth: false,
        centerDialogVisible: false
      };
    },
    props: {},
    methods: {
      handleClick() {

      }
    },
    mounted() {
      this.$bus.$on('showAuth', centerDialogVisible => {
        this.centerDialogVisible = centerDialogVisible;
      });
    }
  };
</script>
<style lang="less">

    .auth-form{
      position: relative !important;
      padding: 1.5rem !important;
      width: 18.5rem !important;
      max-width: 100% !important;
      font-size: 1.167rem !important;
      background-color: #fff !important;
      border-radius: 2px !important;
      box-sizing: border-box !important;
      margin: unset !important;
    }
    .auth-modal-box{
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.3);
      z-index: 500;
    }


</style>
