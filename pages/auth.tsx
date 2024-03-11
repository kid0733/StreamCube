import Input from "@/components/Input"
import { useCallback, useState } from "react"



const Auth = () =>{
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [password, setPassword]=useState("")

    const [variant, setVariant]=useState("login")
    const toggleVariant= useCallback(()=>{
        setVariant((currentVariant)=> currentVariant === "login"? "register":"login")
    },[])
    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <div className="flex items-center flex-col">
                            
                            <img src="/images/logo.png" alt="Logo" className="h-15 w-14 mb-5"   /> 

                            <h2 className="text-yellow-200 text-4xl mb-10 font-semibold">
                                {variant==='login' ? "Sign In" : "Register"}
                            </h2>

                        </div>
                        <div className="flex flex-col gap-5">
                            {variant === 'register' && (

                                <Input
                                        label="Username"
                                        onChange={(e:any) => setName(e.target.value)}
                                        id="name"
                                        value={name}
                                        
                                    />
                            )}

                                <Input
                                    label="Email"
                                    onChange={(e:any) => setEmail(e.target.value)}
                                    id="email"
                                    value={email}
                                    type="email"
                                />

                                <Input
                                    label="Password"
                                    onChange={(e:any) => setPassword(e.target.value)}
                                    id="password"
                                    value={password}
                                    type="password"
                                />
                                
                        </div>
                        <button className="bg-red-600 py-3 text-yellow-200 font-extrabold rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? "Login" : "Sign Up"}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? "First time using StreamCube?" : "Already have an account?"}  <br />
                            <span onClick={toggleVariant} className="text-yellow-200  hover:underline cursor-pointer">
                                {variant === 'login' ? "Create an Account" : "Log in"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Auth