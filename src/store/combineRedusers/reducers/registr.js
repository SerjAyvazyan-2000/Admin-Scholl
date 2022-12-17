import authorizationType from "./type"

const defaultState = {
    loginKey:'',

}

const Register = (state = defaultState , action) => {
     switch (action.type) {
         case authorizationType.REGISTER_DATA:
               return {...state,loginKey:action.payload}

         case authorizationType.GET_LOGIN_KEY:
              let newKey = localStorage.getItem("login-key")
                 return {...state,loginKey: newKey}
         default :
              return {...state}
     }
}
export default Register