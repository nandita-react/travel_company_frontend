
export const SHOW_TOAST='SHOW_TOAST';
export const HIDE_TOAST='HIDE_TOAST';

export const showToast=(message,toastType='info')=>({
    type:SHOW_TOAST,
    payload:{message,toastType}
})

export const hideToast=()=>({
    type:HIDE_TOAST
})
