import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface SignupData {
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
}

interface SignupContextType {
    signupData: SignupData
    updateSignupData: (fields: Partial<SignupData>) => void
}

const SignupContext = createContext<SignupContextType | null>(null)

export function SignupProvider({ children }: { children: ReactNode }) {
    const [signupData, setSignupData] = useState<SignupData>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const updateSignupData = (fields: Partial<SignupData>) => {
        setSignupData((prev) => ({ ...prev, ...fields }))
    }

    return (
        <SignupContext.Provider value={{ signupData, updateSignupData }}>
            {children}
        </SignupContext.Provider>
    )
}

export function useSignup() {
    const context = useContext(SignupContext)
    if (!context) {
        throw new Error('useSignup must be used within a SignupProvider')
    }
    return context
}