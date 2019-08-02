import {login} from '../../api/user';
import {getToken,encode} from '../../lib/util'

export  default {
  state:{
    userName: '',
    userId:'',
    avatarImgPath: '',

  },
  mutations:{
    setUserId(state,id){
      state.userId=id
    },
    setUserName(state,name){
      state.userName=name
    }
  },
  actions:{
    handleLogin({commit},{userName,secret}){
      userName=userName.trim()
      return new Promise((resolve,reject)=>{
        login({
          userName,
          secret
        }).then(res=>{
          resolve(res)
        })
      })
    }
  }
}
