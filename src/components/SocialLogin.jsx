import React from 'react'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook-logo.png'

const SocialLogin = () => {
    return (
        <>
            <button className='border border-primary mb-3 w-100 py-2 rounded-2'><img src={Google} width={20} className='mx-2' />Google</button>
            <br />
            <button className='border border-primary mb-3 w-100 py-2 rounded-2'><img src={Facebook} width={20} className='mx-2' />Facebook</button>
        </>
    )
}

export default SocialLogin