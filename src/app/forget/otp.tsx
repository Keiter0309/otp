'use client'
import React, { useState, useEffect, useRef } from "react"
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { app } from '../config'
import { useRouter } from "next/navigation"

const OtpForget = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false);
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | undefined>(undefined);
    const auth = getAuth(app)
    const router = useRouter()

    useEffect(() => {
        recaptchaVerifierRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'normal',
            'callback': () => {
                // Your callback logic here
            }
        })
    }, [auth])

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value)
    }

    const handleSendOTP = async () => {
        try {
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, recaptchaVerifierRef.current!)
            setConfirmationResult(confirmation)
            setOtpSent(true)
            setPhoneNumber('')
            alert("OTP sent")
        } catch (error) {
            console.log(error);
        }
    }

    const handleOTPSubmit = async () => {
        try {
            if (confirmationResult) {
                await confirmationResult.confirm(otp)
                setOtp('')
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {!otpSent ? (
                <div id="recaptcha-container"></div>
            ) : null}
            <input type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
            />
            <input type="text"
                value={otp}
                onChange={handleOTPChange}
                placeholder="Enter OTP"
            />
            <button onClick={otpSent ? handleOTPSubmit : handleSendOTP}>
                {otpSent ? 'Submit' : 'Send OTP'}
            </button>
        </div>
    )
}

export default OtpForget
