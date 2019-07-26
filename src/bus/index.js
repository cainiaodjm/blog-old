// import Vue from 'vue'
// const  Bus =new Vue({
//   data:{
//     userName:"李逵",
//     userId:"1"
//   }
// })
//
// export  default Bus


const install=function (Vue) {
  const Bus=new Vue({
    methods:{
      emit(event,...args){
        this.$emit(event,...args)
      },
      on(event,callback){
        this.$on(event,callback)
      },
      off(event,callback){
        this.$off(event,callback)
      }
    }
  })
  Vue.prototype.$bus=Bus
}
export  default  install
