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
                <li>高雄市立高級中學畢業</li>
                <li>國立陽明交通大學 工業工程與管理學系</li>
                <li>國立陽明交通大學 輔系 資訊工程學系</li>
                <li>三學期書卷獎 - 二上、三下、四上</li>
                <li>GPA Overall: 4.05/4.30, Last 60: 4.17/4.30</li>
                <li>165學分 Rank 7/76 (Top 9%) </li>
            </ul>
        )
    },{
        title: '技能',
        id: '技能',
        image: '/images/技能.png',
        content: (
            <div>
                <ul>
                    <li><b>語言：</b><code>C/C++</code>, <code>Python</code>, <code>Shell Script(BASH, ZSH)</code>, <code>SQL</code>, <code>PHP</code>, <code>JavaScript</code></li> 
                    <li><b>工具：</b><code>VSCode</code>, <code>Vim</code>, <code>Valgrind</code>, <code>GNU Debugger</code>, <code>Make</code>, <code>Git</code></li> 
                    <li><b>系統：</b><code>Linux</code>, <code>FreeBSD</code></li> 
                    <li><b>網路：</b><code>TCP/IP</code>, <code>Socket Programming</code></li> 
                    <li><b>伺服：</b><code>Nginx</code>, <code>Apache</code>, <code>HTTPs</code></li> 
                    <li><b>AI：</b><code>PyTorch</code>, <code>TensorFlow</code>, <code>Keras</code>, <code>OpenCV</code>, <code>YOLO</code>, <code>Numpy</code>, <code>Pandas</code></li>
                </ul>
                <style jsx>{`
                code {
                    background: dimgray;
                    border-radius: 3px;
                    padding: 2px 5px;
                    margin-right: 5px;
                }
                `}</style>
            </div>
        )
    },{
        title: '經驗',
        id: '經驗',
        image: '/images/經驗.png',
        content: (
            <ul className='list-disc pl-2'>
                <li>國立陽明交大工業工程與管理學系 系學會會長</li>
                <li>國立陽明交大管院院務會議 學生代表</li>
                <li>ATCC全國商業競賽 複賽決選（20/2000）</li>
                <li>國高中理科家教經驗 大一~大三</li>
            </ul>
        )
    },{
        title: '修課',
        id: '修課',
        image: '/images/修課.png',
        content: (
            <div>
                <ul className='list-disc pl-2'>
                    <li><b>資工系：</b><code>資料結構與物件導向</code>、<code>演算法概論</code>、<code>數位電路設計</code>、<code>網路程式設計概論</code>、<code>網路科學與架構</code>、<code>資料庫系統概論</code>、<code>計算機系統管理</code>、<code>計算機組織</code>、<code>作業系統</code>、<code>基礎程式設計</code>、<code>人工智慧概論</code>、<code>人工智慧總整與實做</code></li> 
                    <li><b>工工系：</b><code>計算機概論</code>、<code>程式設計</code>、<code>作業研究(一)</code>、<code>作業研究(二)</code>、<code>模擬學</code>、<code>基因演算法與管理實務</code></li> 
                    <li><b>通識課：</b><code>數學應用軟體</code>、<code>Python基礎程式設計</code></li>
                </ul>
                <style jsx>{`
                    code {
                        background: dimgray;
                        border-radius: 3px;
                        padding: 2px 5px;
                        margin-right: 5px;
                    }
                `}</style>
            </div>
        )
    },{
        title: '語言',
        id: '語言',
        image: '/images/語言.png',
        content: (
            <ul className='list-disc pl-2'>
                <li><b>GRE：</b> 324/340</li>
                <li><b>TOEFL ITP：</b> 573/677</li>
                <li><b>TOEIC：</b> 890/990</li>
                <li><b>全民英檢中高級：</b> 初試通過</li>
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
        <div className='md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-0'>
            <Image src={currentImage} width={800} height={500} alt="" />
            <div className='mt-4 md:mt-0 flex flex-col h-full'> 
                <h2 className='text-4xl flex justify-center font-bold text-[#ffffff] mb-1 my-2'>
                    關於我 
                </h2>
                <p className='text-base text-center text-blue-400 lg:text-lg mt-1'>
                    熱愛學習   |   程式開發   |   領導管理   |   競賽挑戰 <br/>
                </p>
                <p className='text-base text-white lg:text-lg mt-1'>  
                    我在大學中做過大大小小不同的嘗試，不論是在工業工程、資工跨領域的課程、或課外學生組織的活動。我喜歡學習新事物，並且能夠將所學應用在實際的專案中。我也喜歡帶領團隊，更喜歡在競賽中挑戰自己。期待能夠在未來的工作中找到一個能夠讓我持續學習，並且能夠發揮所長的工作環境。
                </p>
                <div className='flex flex-row text-left place-self-center justify-start mt-4'>
                    <TapButton selectTab={() => handleTabChange('學歷')} active={tab === '學歷'}>學歷</TapButton>
                    <TapButton selectTab={() => handleTabChange('技能')} active={tab === '技能'}>技能</TapButton>
                    <TapButton selectTab={() => handleTabChange('經驗')} active={tab === '經驗'}>經驗</TapButton>
                    <TapButton selectTab={() => handleTabChange('修課')} active={tab === '修課'}>修課</TapButton>
                    <TapButton selectTab={() => handleTabChange('語言')} active={tab === '語言'}>語言</TapButton>
                </div>
                <div className='mt-4'>
                    {TAB_DATA.find((item) => item.id === tab).content}
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutSection