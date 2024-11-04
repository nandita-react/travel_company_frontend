import {SHOW_TOAST,HIDE_TOAST, showToast} from '../actions/toastActions'

const initialState={
    showToast:false,
    message:'',
    toastType:'info'
}

const toastReducers=(state=initialState,action)=>{
    switch(action.type){
        case SHOW_TOAST:
            return{
                ...state,
                showToast:true,
                message:action.payload.message,
                toastType:action.payload.toastType
            }
            case HIDE_TOAST:
                return{
                    ...state,
                    showToast:false,
                    message:'',
                    toastType:'info'
                }
              default :
              return state  
    }
}

export default toastReducers