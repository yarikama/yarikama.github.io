"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TapButton from './TapButton'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

import Link from 'next/link'

const TAB_DATA = [
    {
        title: '學歷',
        id: '學歷',
        image: '/images/學歷.png',
        content: (
            <ul className='list-disc pl-2'>
                <li>市立高雄中學畢業</li>
                <li>國立陽明交通大學 工業工程與管理學系</li>
                <li>輔系 資訊工程學系</li>
                <li>三次書卷獎</li>
                <li>GPA 4.05/4.30 Over 151 Credits</li>
                <li>Last 60 GPA 4.15/4.30</li>
            </ul>
        )
    },{
        title: '技能',
        id: '技能',
        image: '/images/技能.png',
        content: (
            <ul className='list-disc pl-2'>
                <li><b>語言</b>: C/C++, Python, Shell Script(BASH, ZSH), SQL, PHP, JavaScript</li>
                <li><b>工具</b>: VSCode, Vim, Valgrind, GNU Debugger, Make, Git, Nginx, Apache</li>
                <li><b>系統</b>: Linux, FreeBSD</li>
            </ul>
        )
    },{
        title: '經驗',
        id: '經驗',
        image: '/images/經驗.png',
        content: (
            <ul className='list-disc pl-2'>
                <li>工業工程與管理學系系學會會長</li>
                <li>陽明交大管院院務學生代表</li>
                <li>ATCC全國商業競賽 複賽決選</li>
            </ul>
        )
    },{
        title: '修課',
        id: '修課',
        image: '/images/修課.png',
        content: (
            <ul className='list-disc pl-2'>
                <li><b>資工系</b>：資料結構與物件導向、演算法概論、網路程式設計概論、網路科學與架構、資料庫系統概論、計算機系統管理、計算機組織、作業系統、基礎程式設計</li>
                <li><b>工工系</b>：計算機概論、程式設計、作業研究(一)、作業研究(二)、模擬學、基因演算法與管理實務</li>
                <li><b>通識課</b>：數學應用軟體、Python基礎程式設計</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState('學歷')
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
    const currentTabData = TAB_DATA.find((item) => item.id === tab);
    const currentImage = currentTabData ? currentTabData.image : "/images/學歷.png"; 
  return (
    <section className='text-[#f1f1f1]'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={currentImage} width={600} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'> 
                <h2 className='text-4xl flex font-bold text-[#ffffff] mb-4 my-2'>
                    關於我 
                    <Link href="https://github.com/yarikama">
                        <DiGithubBadge className='inline-block text-5xl mx-1 text-[#e1e1e1]'/>
                    </Link>
                    <Link href="https://linkedin.com/in/yarikama">
                        <FaLinkedin className='inline-block text-5xl mx-1 text-[#44a3da]'/>
                    </Link>
                </h2>
                <p className='text-base text-blue-400 lg:text-lg'>
                    熱愛學習  |  程式開發  |  領導管理  |  競賽挑戰 <br/>
                </p>
                <p className='text-base text-white lg:text-lg'>  
                    我在大學中做過大大小小不同的嘗試。不論是跨領域的課程，或是課外學生組織的活動。我喜歡學習新事物，並且能夠將所學應用在實際的專案中。我也喜歡帶領團隊，更喜歡在競賽中挑戰自己。我期待能夠在未來的工作中，找到一個能夠讓我持續學習，並且能夠發揮所長的工作環境。
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TapButton selectTab={() => handleTabChange('學歷')} active={tab === '學歷'}>學歷</TapButton>
                    <TapButton selectTab={() => handleTabChange('技能')} active={tab === '技能'}>技能</TapButton>
                    <TapButton selectTab={() => handleTabChange('經驗')} active={tab === '經驗'}>經驗</TapButton>
                    <TapButton selectTab={() => handleTabChange('修課')} active={tab === '修課'}>修課</TapButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((item) => item.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection