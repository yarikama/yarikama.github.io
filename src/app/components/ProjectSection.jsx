import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: '台灣老人長照機構地圖網',
        description: '提供老人長照設施登入功能、地圖長照設施床數燈號顯示、我的最愛設施、搜尋地圖常照設施、行政區內找尋設施等等...使用 LAMP (Linux, Apache, MySQL, PHP) 作為基礎搭建，由台灣行政公開資料配合 Python (Beautiful Soup) 爬蟲抓取相關長照資料，規劃資料庫關聯以及正規化。之後利用 Javascripts 配合 Google Geography API 完成地圖參照，讓使用者可以從 Google 地圖選取長照資訊。',
        image: '/images/台灣老人長照機構地圖網.png',
        tag: ["All", "Web", "Python", "PHP", "MySQL", "Bootstrap",  "Web Crawling", "Linux", "Apache", "Nginx", "Google Map API", "JavaScript",  "BeautifulSoup", "Selenium"]
    },{
        id: 2,
        title: 'Chat Bar 多人群聊地圖遊戲',
        description: '使用 C++(SMFL), Socket Programming(TCP) 建立的線上遊戲 Server: 建立可存取人員資料庫，以及利用 Socket Programming 傳遞玩家訊息的機制，並以 Nonblocking I/O 建立地圖模式，Blocking I/O 處理登入註冊等功能。Client: 利用 SMFL 進行物件移動，以及背景音樂撥放。分為地圖功能和聊天功能兩種。',
        image: '/images/ChatBar.png',
        tag: ["All", "Web", "TCP/IP", "Socket", "Multiprocessing", "C++", "SFML"]
    },{
        id: 3,
        title: '書店網站',
        description: '書店網站',
        image: '/images/書店網站.png',
        tag: ["All", "Web", "Python", "PHP", "mySQL", "Bootstrap"]
    },{
        id: 4,
        title: '運用貝式優化以及基因演算法解決零工式生產排程',
        description: '運用貝式優化以及基因演算法解決零工式生產排程',
        image: '/images/運用貝式優化以及基因演算法解決零工式生產排程.png',
        tag: ["All", "Python", "Bayesian Optimization", "Genetic Algorithm", "Job Shop Scheduling Problem", "Flexsim"]
    }
]

const ProjectSection = () => {
  return (
    <>
    <h2 className='text-center text-4xl text-white mt-4 my-4 lg:text-5xl font-bold'>
        作品集
    </h2>
    <div>
        {projectsData.map((project) => 
        <ProjectCard    
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image
        }/>)}
        
    </div>
    </>
  )
}

export default ProjectSection