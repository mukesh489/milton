import React from 'react'

const Home = () => {
    return (
        <div>
            {/* 1st Container  */}
            <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)] font-semibold">
                <span className="bg-[#f1f2f4] p-2 rounded-xl">An other way to manage time</span>
                <h1 className="text-[80px] leading-none font-bold text-center w-[50%] text-[#2e2e2e]">Your new favorite calender <img className="w-20 h-20 inline" src="/Images/calender.png" alt="calender" /> app</h1>
                <span className="w-[35%] mt-8 mb-4 text-xl text-center text-gray-500 font-normal">Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </span>
                <div className="flex flex-col justify-center items-center mb-4">
                    <button className="bg-[#2e2e2e] px-8 py-4 text-[#f1f2f4] rounded-lg font-semibold text-lg mb-2">Get Started,it's free</button>
                    <span className="text-xs text-[#2e2e2e90]">Free 14 days trials,no credit card needed</span>
                </div>
                <img src="/Images/reviewImg.png" alt="review" />
            </div>

            {/* 2nd Container  */}
            <div className="object-contain w-[80%] m-auto">
                <img src="https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png" alt="page" />
            </div>

            {/* 3rd Container  */}
            <div className="flex flex-col items-center mt-32">
                <div className="flex flex-col items-center justify-center">
                    <span className="bg-[#f1f2f4] p-2 rounded-xl w-fit font-semibold text-lg">Our main features</span>
                    <span className="text-6xl font-bold text-center text-[#2e2e2e]">Discover your new super powers.</span>
                </div>
                <div className="flex flex-col items-center">
                    {/* 1st */}
                    <div className="flex justify-center items-center w-[80%] h-[100vh] gap-4">
                        <div className="flex flex-col items-start justify-start w-[50%]">
                            <span className="bg-[#fee9cb] text-[#2e2e2e] px-6 py-2 rounded-full w-fit font-semibold text-lg mb-2">Seamless scheduling</span>
                            <span className="text-5xl font-semibold">Focus on what matters most for you</span>
                            <p className="text-gray-500 text-xl mt-20">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                        </div>
                        <div className="">
                            <img className="h-[90vh] translate-y-20" src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="side" />
                        </div>
                    </div>

                    {/* 2nd  */}
                    <div className="flex justify-center items-center flex-row-reverse w-[80%] h-[100vh] gap-4">
                        <div className="flex flex-col items-start justify-center w-[50%] h-full relative">
                            <span className="bg-[#fee9cb] text-[#2e2e2e] px-6 py-2 rounded-full w-fit font-semibold text-lg mb-2">Smart Reminders & Task</span>
                            <span className="text-5xl font-semibold">Never miss an important deadline or event again</span>
                            <p className="text-gray-500 text-xl mt-20">Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                            {/* person Commenting  */}
                            <div>
                                <div className="bg-[#2e2e2e] text-white text-start p-4 rounded-xl rounded-br-none font-semibold w-[300px] absolute bottom-0 right-20">
                                    <p>I've recommended this app to all my friends and colleagues!</p>
                                    <p className="opacity-60 mt-2">Karl, CTO of a cool startup</p>
                                </div>
                                <img className="absolute h-[80px] -bottom-8 right-0" src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" alt="person" />
                            </div>


                        </div>
                        <div className="">
                            <img className="h-[90vh] translate-y-20" src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="side" />
                        </div>
                    </div>

                    {/* 3rd  */}
                    <div className="flex justify-center items-center w-[80%] h-[100vh] gap-4">
                        <div className="flex flex-col items-start justify-center h-full w-[50%] relative">
                            <span className="bg-[#fee9cb] text-[#2e2e2e] px-6 py-2 rounded-full w-fit font-semibold text-lg mb-2">Seamless scheduling</span>
                            <span className="text-5xl font-semibold">Focus on what matters most for you</span>
                            <p className="text-gray-500 text-xl mt-20">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                            <div>
                                <div className="bg-[#2e2e2e] text-white text-start p-4 rounded-xl rounded-bl-none font-semibold w-[300px] absolute bottom-0 left-20">
                                    <p>I've recommended this app to all my friends and colleagues!</p>
                                    <p className="opacity-60 mt-2">Karl, CTO of a cool startup</p>
                                </div>
                                <img className="absolute h-[80px] -bottom-8 left-0" src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" alt="person" />
                            </div>
                        </div>
                        <div className="">
                            <img className="h-[90vh] translate-y-20" src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="side" />
                        </div>
                    </div>


                    {/* 4th  */}
                    <div className="flex justify-center items-center flex-row-reverse w-[80%] h-[100vh] gap-4">
                        <div className="flex flex-col items-start justify-center h-full w-[50%] relative">
                            <span className="bg-[#fee9cb] text-[#2e2e2e] px-6 py-2 rounded-full w-fit font-semibold text-lg mb-2">Seamless scheduling</span>
                            <span className="text-5xl font-semibold">Focus on what matters most for you</span>
                            <p className="text-gray-500 text-xl mt-20">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                            <div>
                                <div className="bg-[#2e2e2e] text-white text-start p-4 rounded-xl rounded-br-none font-semibold w-[300px] absolute bottom-0 right-20">
                                    <p>I've recommended this app to all my friends and colleagues!</p>
                                    <p className="opacity-60 mt-2">Karl, CTO of a cool startup</p>
                                </div>
                                <img className="absolute h-[80px] -bottom-8 right-0" src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" alt="person" />
                            </div>
                        </div>
                        <div className="">
                            <img className="h-[90vh] translate-y-20" src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="side" />
                        </div>
                    </div>
                </div>

            </div>

            {/* 4th Container  */}
            <div className="mt-[280px] px-32">
                <div className="flex flex-col items-center justify-center">
                    <span className="bg-[#f1f2f4] p-2 rounded-xl w-fit font-semibold text-lg">And so much more</span>
                    <span className="text-6xl font-bold text-center text-[#2e2e2e]">Our features to make your life <br />easier</span>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-20">

                    <div className="flex flex-col gap-4">
                        <div className="bg-[#f1f2f4] rounded-xl py-8 px-8">
                            <img className="w-[200px] m-auto" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="gridImg" />
                        </div>
                        <span className="bg-[#f1f2f4] px-6 py-2 rounded-full w-fit font-semibold text-lg">Cross-Device Sync</span>
                        <p className="text-gray-400 mt-4">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[#f1f2f4] rounded-xl py-8 px-8">
                            <img className="w-[200px] m-auto" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="gridImg" />
                        </div>
                        <span className="bg-[#f1f2f4] px-6 py-2 rounded-full w-fit font-semibold text-lg">Cross-Device Sync</span>
                        <p className="text-gray-400 mt-4">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[#f1f2f4] rounded-xl py-8 px-8">
                            <img className="w-[200px] m-auto" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="gridImg" />
                        </div>
                        <span className="bg-[#f1f2f4] px-6 py-2 rounded-full w-fit font-semibold text-lg">Cross-Device Sync</span>
                        <p className="text-gray-400 mt-4">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[#f1f2f4] rounded-xl py-8 px-8">
                            <img className="w-[200px] m-auto" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="gridImg" />
                        </div>
                        <span className="bg-[#f1f2f4] px-6 py-2 rounded-full w-fit font-semibold text-lg">Cross-Device Sync</span>
                        <p className="text-gray-400 mt-4">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[#f1f2f4] rounded-xl py-8 px-8">
                            <img className="w-[200px] m-auto" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="gridImg" />
                        </div>
                        <span className="bg-[#f1f2f4] px-6 py-2 rounded-full w-fit font-semibold text-lg">Cross-Device Sync</span>
                        <p className="text-gray-400 mt-4">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[#f1f2f4] rounded-xl py-8 px-8">
                            <img className="w-[200px] m-auto" src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg" alt="gridImg" />
                        </div>
                        <span className="bg-[#f1f2f4] px-6 py-2 rounded-full w-fit font-semibold text-lg">Cross-Device Sync</span>
                        <p className="text-gray-400 mt-4">Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>

                </div>
            </div>

            {/* 5th Container  */}
            <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)] font-semibold">
                <span className="bg-[#f1f2f4] p-2 rounded-xl">Last call Baby!</span>
                <span className="text-[80px] leading-none font-bold text-center w-[50%] text-[#2e2e2e]">Ready to start?</span>
                <span className="w-[35%] mt-8 mb-4 text-xl text-center text-gray-500 font-normal">Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features.  </span>
                <button className="bg-[#2e2e2e] px-8 py-4 text-[#f1f2f4] rounded-lg font-semibold text-lg mb-2">Get Started,it's free</button>
                <div className="relative mt-10">
                    <div className="bg-[#fee9cb] text-[#2e2e2e] text-start p-4 rounded-xl rounded-bl-none font-semibold w-[400px]">
                        <p>I never missed a call again, the AI-drivenfeature is a game changer for me! </p>
                        <p className="opacity-60 mt-2">Adam,Solo Founder</p>
                    </div>
                    <img className="absolute h-[80px] -bottom-8 -left-20" src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" alt="person" />
                </div>
            </div>
        </div>
    )
}

export default Home
