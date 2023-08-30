import React, {useState} from 'react'
import {Button, Timeline} from 'antd'
import {Typography} from "antd"
import { ClockCircleOutlined } from '@ant-design/icons';

import JPEX from '../assets/img.png'
import DiscountMate from '../assets/dm.png'
import MyProfile from '../assets/myprofile.png'
import Gs1 from '../assets/Gs1.png'
import Dotpoint from '../assets/dotpoint.svg'
import GameMa from '../assets/gamema.png'
import './experience.css'
const {Title, Text, Paragraph} = Typography

const ProjectList = [
    {   'id':1,
        'img':JPEX,
        'period':'10/2021 - 01/2022',
        'title': 'JPEX Crypto Platform',
        'description':'This is my first React/React-Native Project. In this project, ' +
            'I mainly focus on frontend development on both website and mobile app' +
            ' and worked in a 12 persons team including backend team, frontend team and designer.',
        'learnt':'React/React-Native, Javascript, CSS, HTMl, Redux, Ant design, Git '
    },
    {   'id':2,
        'img':DiscountMate,
        'title': 'DiscountMate',
        'period':'03/2022 - 10/2022',
        'description':'I was the frontend team leader in the first trimester and team lead in the second trimester. ' +
            'I developed the whole frontend of this application with React-Native and connected to backend and designed the software structure for this project' +
            '. During the period, I have to make sure all the' +
            ' stuffs are on track because I am the leader and also have to learn how to lead a team to showcase my leadership.',
        'learnt':'React-Native, Javascript, CSS, HTMl, Git, Testing, Leadership, Time-management, Problem-solving'
    },
    {   'id':3,
        'img':Gs1,
        'title': 'GS1 Hong Kong',
        'period':'03/2023 - 05/2023',
        'description':'As a analyst programmer intern in Gs1, I did a lot of data transforming with Python, ' +
            'helped develop the data visualization on PowerBI, analysed on-going project and developed, build a CI/CD on Gitlab,' +
            'dockerized project, setup gitlab, I learned a lot of industry professional stuff during the internship.' +
             ' *Since all the project are internal or not publish and I signed confidentiality agreement, ' +
            'so I cant provide any live example for this experience. Sorry!',
        'learnt':'React, Next.js, Python, PowerBI, CI/CD, Docker, Testing, Git, Problem-solving'
    },
    {   'id':4,
        'img':MyProfile,
        'title': 'My Profile',
        'period':'08/2023',
        'description':'I developed my own website with React for present me and my service. ' +
            'Also, this project help me understand deeper about the css animation. ' +
            'During the time I am unemployed, I keep learning new tech such as Express.js, MongoDB etc.',
        'learnt':'React, HTML, Javascript, CSS, HTMl, Email.js, Backend development, Express.js, self-learning'
    },
    {   'id':4,
        'img':GameMa,
        'title': 'Video Game Market Analysis',
        'period':'07/2023',
        'description':'I developed my own website with React for present me and my service. ' +
            'Also, this project help me understand deeper about the css animation. ' +
            'During the time I am unemployed, I keep learning new tech such as Express.js, MongoDB etc.',
        'learnt':'Data Analysis, Tableau'
    }
]
const Experience = () => {
    const [projectNum, setProjectNum] = useState(1)

    const renderProject = () => {
        return (
            ProjectList.filter((ele) => ele.id === projectNum).map(
                item =>
                    <div style={{display:"grid"}}>
                        <Title>{item.title}</Title>
                        <img src={item.img} alt={item.id}/>
                        <Title level={5} underline>Period</Title>
                        <Text>{item.period}</Text>
                        <Title level={5} underline>Description</Title>
                        <Paragraph>{item.description}</Paragraph>
                        <Title level={5} underline>What I have learnt</Title>
                        <Text style={{marginBottom:20}}>{item.learnt}</Text>
                    </div>

            )
        )

    }
    return (
        <div className="exp-container">
            <div className="time-line-container">
                <div style={{marginBottom:'20px'}}>
                    <Text>
                        Click above company to check out my project!
                    </Text>
                </div>

                <Timeline
                    mode="alternate"
                    items={[
                        {
                            label:"2021",
                            color:projectNum === 1 ? "#379683" :"#5D5C61",
                            children:
                                <Text copyable={false} type="text" onClick={() => setProjectNum(1)}>
                                    Technine
                                </Text>,
                        },
                        {
                            label:"2022",
                            color:projectNum === 2 ? "#379683" :"#5D5C61",
                            children:
                                <Text type="text" onClick={() => setProjectNum(2)}>
                                    Deakin University
                                </Text>,
                        },
                        {
                            label:"2023",
                            color: projectNum === 3 ? "#379683" :"#5D5C61",
                            children:
                                <Text onClick={() => setProjectNum(3)}>
                                    GS1 Hong Kong
                                </Text>

                        },
                        {
                            label:"present",
                            color: projectNum === 4 ? "#379683" :"#5D5C61",
                            children:
                                <Text type="text" onClick={() => setProjectNum(4)}>
                                    Freelance
                                </Text>,
                        },
                    ]}
                />
            </div>
            <div className="projectShow-container">
                {renderProject()}
            </div>
        </div>
    )
}

export default Experience;
