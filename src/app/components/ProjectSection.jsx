import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: '台灣老人長照機構地圖網',
        description: '台灣老人長照機構地圖網',
        image: '/images/台灣老人長照機構地圖網.png',
        tag: ["All", "Web", "Python", "PHP", "MySQL", "Bootstrap",  "Web Crawling", "Linux", "Apache", "Nginx", "Google Map API", "JavaScript",  "BeautifulSoup", "Selenium"]
    },{
        id: 2,
        title: 'Chat Bar 多人群聊地圖遊戲',
        description: 'Chat Bar多人群聊地圖遊戲',
        image: '/images/Chat Bar多人群聊地圖遊戲.png',
        tag: ["All", "Web", "TCP/IP", "Socket", "Multiprocessing", "C++", "SFML"]
    },{
        id: 3,
        title: '書店網站',
        description: '書店網站',
        image: '/images/書店網站.png',
        tag: ["All", "Web", "Python", "PHP", "mySQL", "Bootstrap"]
    },{
        id: 4,
        title: '運用貝式優化以及基因演算法解決旅行商問題',
        description: '運用貝式優化以及基因演算法解決旅行商問題',
        image: '/images/運用貝式最佳化以及基因演算法解決零工式生產排程.png',
        tag: ["All", "Python", "Bayesian Optimization", "Genetic Algorithm", "Job Shop Scheduling Problem", "Flexsim"]
    }
]

const ProjectSection = () => {
  return (
    <>
    <h2>
        作品集
    </h2>
    <div>
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}
    </div>
    </>
  )
}

export default ProjectSection