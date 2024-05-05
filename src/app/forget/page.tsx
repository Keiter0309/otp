'use client'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import {app} from '../config'
import { useRouter } from "next/navigation"
import { useEffect } from 'react'
import OtpForget from './otp'
const page =()=>{
    const router = useRouter();
    const auth =getAuth(app)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                router.push('/dashboard')
            }
        })
    },[auth ,router])
    return (
        <div>
            <h1>otp singup</h1>
         <OtpForget/>
        </div>
    )
}
export default page