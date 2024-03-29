import Layout from '../../layout/layout'
import React from 'react'

export const Login = () => {
    return (
        <div>
            <body>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div
                    className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
                >

                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="text-[#0052d4] mb-3 text-4xl font-bold">Welcome back to BidWiz</span>
                        <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
                        <div className="py-4">
                            <span className="mb-2 text-md">Email</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Password</span>
                            <input
                                type="password"
                                name="pass"
                                id="pass"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                        </div>
                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">
                                <input type="checkbox" name="ch" id="ch" className="mr-2"/>
                                <span className="text-md">Remember for 30 days</span>
                            </div>
                            <span className="font-bold text-md">Forgot password</span>
                        </div>
                        <button
                            className="bg-[#0052d4] w-full text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                        >
                            Sign in
                        </button>
                        {/*<button*/}
                        {/*    className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"*/}
                        {/*>*/}
                        {/*    h<img src="google.svg" alt="img" className="w-6 h-6 inline mr-2"/>*/}
                        {/*    Sign in wit Google*/}
                        {/*</button>*/}
                        <div className="text-center text-gray-400">
                            Dont'have an account?
                            <span className="font-bold text-black">Sign up for free</span>
                        </div>
                    </div>

                    <div className="relative">
                        {/*<img*/}
                        {/*    src="image.jpg"*/}
                        {/*    alt="img"*/}
                        {/*    className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"*/}
                        {/*/>*/}

                        <div
                            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                        >
            {/*<span className="text-white text-xl"*/}
            {/*>We've been uesing Untitle to kick"<br/>start every new project*/}
            {/*  and can't <br/>imagine working without it."*/}
            {/*</span>*/}
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
    )
}
