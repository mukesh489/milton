import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#f1f2f4] flex justify-center items-start gap-32 pt-10 pb-20 font-semibold">
        {/* 1st container  */}
      <div className="flex flex-col items-start w-1/6 gap-4">
        <div className="flex justify-center items-center gap-2">
            <img className="h-8" src="/Images/icon.png" alt="icon" />
            <span className="text-2xl text-[#2e2e2e] font-semibold">Milton</span>
        </div>
        <p className="text-gray-500">A short text explaining why my startup is so cool</p>
        <p className="text-gray-500">© My super start-up</p>
        <div className="flex justify-center items-center gap-2 mt-8">
            <img src="#" alt="twitter" />
            <img src="#" alt="facebook" />
            <img src="#" alt="linkedin" />
        </div>
      </div>

      {/* 2nd Container  */}
      <div className="flex gap-32 justify-center items-center w-1/4">
        <div className="flex flex-col gap-4 justify-center items-start text-[#2e2e2e]">
            <span className="text-xl font-semibold">Products</span>
            <div className="flex flex-col opacity-70 gap-2">
                <span className="hover:opacity-100 hover:underline cursor-pointer">Features</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Testimonials</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Pricing</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">FAQs</span>
            </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-start text-[#2e2e2e]">
            <span className="text-xl font-semibold">Resources</span>
            <div className="flex flex-col opacity-70 gap-2">
                <span className="hover:opacity-100 hover:underline cursor-pointer">Change log</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Help center</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Blog</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Contact</span>
            </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-start text-[#2e2e2e]">
            <span className="text-xl font-semibold">Others</span>
            <div className="flex flex-col opacity-70 gap-2">
                <span className="hover:opacity-100 hover:underline cursor-pointer">Privacy</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Terms</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Affiliation</span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">Press</span>
            </div>
        </div>
      </div>

      {/* 3rd Container  */}
      <div className="w-1/5">
        <span className="text-xl font-semibold">From the blog</span>
        <div className="flex flex-col opacity-70 gap-2 mt-4">
                <span className="hover:opacity-100 hover:underline cursor-pointer">
                    Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life
                </span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">
                    Organizing Your Calendar for Enhanced Productivity and Focus
                </span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">
                    The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks
                </span>
                <span className="hover:opacity-100 hover:underline cursor-pointer">
                    Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar
                </span>
            </div>
      </div>
    </div>
  )
}

export default Footer
