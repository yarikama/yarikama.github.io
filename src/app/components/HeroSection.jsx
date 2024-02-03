"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f6d365] to-[#fda085]">
                            你好，我是{" "}
                        </span>
                        <TypeAnimation
                        sequence={[
                            '許恒睿！',
                            2000, 
                            'Heng Jui, Hsu!',
                            2000,
                        ]}
                        wrapper="span"
                        speed={5}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#85abc6] text-base sm:text-lg mb-6 lg:text-xl">
                        我是一位前端工程師，喜歡使用 React.js 開發網站。
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#f6d365] to-[#fda085] hover:bg-slate-200 text-black">
                            關於我
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#8b89c7] to-[#4f8396] hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">下載履歷</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mg-0">
                    <div className="rounded-full bg-[#448ea4] w-[250px] h-[250px] relative">
                        <Image
                            src="/images/HH_Portrait.png"
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default HeroSection