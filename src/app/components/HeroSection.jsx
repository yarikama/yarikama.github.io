"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f6d365] to-[#fda085]">
                            你好，我是
                            {" "} 
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
                    <p className="text-[#cfcfcf] flex text-base sm:text-lg mb-6 mx-3 lg:text-xl">
                        歡迎來到我的個人網站，請隨意逛～<br/>
                        目前就讀交大工工系四年級，應徵後端實習中，預計將在2024年6月畢業後上班，有興趣請務必點擊右上角聯絡我！
                    </p>
                    <div>
                        <Link href="/documents/Heng_Jui_Hsu_grading.pdf" download>
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#f6d365] to-[#fda085] hover:bg-slate-200 text-black">
                                在校成績
                            </button>
                        </Link>
                        <Link href="/documents/Heng_Jui__Hsu_Curriculum_Vitae.pdf" download>
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#f6d365] to-[#fda085] hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    個人履歷
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 mx-4 lg:mx-0">
                    <div className="rounded-full bg-[#448ea4] w-[240px] h-[240px] relative">
                        <Image
                            src="/images/HH_Portrait.png"
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={230}
                            height={230}
                        />
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default HeroSection