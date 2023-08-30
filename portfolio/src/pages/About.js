import React from 'react'

import {Typography} from "antd"

import './About.css'

const {Title, Text, Paragraph} = Typography

const About = () => {
    return (
        <div className="about-container">
            <div className="intro">
                <Paragraph>
                    A computer science graduate has demonstrated dedication and a strong sense of responsibility during the work period.
                    Strengths in teamwork and communication with others, always completed work on time.
                    Expertise in front- end development by using React.js and React Native.
                </Paragraph>
            </div>

            <div className="content">
                <div className="sider">
                    <Title level={4} underline>
                        TEAM LEADER & FRONTEND DEVELOPER
                    </Title>
                    <Text underline>
                        Deakin university (DataBytes)
                    </Text>
                    <ul className="task-list">
                        <li>
                            Project in charged: Discount-Mate
                        </li>
                        <li>
                            Developed website and mobile application by React-Native and React Finished a basic application and admin board system
                        </li>
                        <li>
                            Analysed model and method for data prediction with data team Focused on leadership and teamwork skills
                        </li>
                    </ul>




                </div>

                <div>
                    <div className="workexp">
                        <Title level={4} underline>
                        ANALYST PROGRAMMER
                        </Title>
                        <Text underline>
                        GS1 Hong Kong
                        </Text>
                        <ul className="task-list">
                            <li>
                                Developed a program for data transforming and yielding with Python and Pandas Used docker to build up the project
                            </li>
                            <li>
                                Adjusted and fixed PowerBI report for internal use
                            </li>
                            <li>
                                Participated frontend development with Next.js and React.js
                            </li>
                            <li>
                                Setup Gitlab E.g. Gitlab runner, CICD pipelines
                            </li>
                        </ul>
                        <Title level={4} underline>
                            DEVELOPER (PLACEMENT)
                        </Title>
                        <Text underline>
                            Strong Compute
                        </Text>
                        <ul className="task-list">
                            <li>
                                Project involved: MLPerf AI benchmark
                            </li>
                            <li>
                                Running benchmarks with different datasets
                            </li>
                            <li>
                                Used Docker and VM to achieve the task
                            </li>

                        </ul>
                        <Title level={4} underline>
                            JUNIOR PROGRAMMER
                        </Title>
                        <Text underline>
                            Technine
                        </Text>
                        <ul className="task-list">
                            <li>
                                Project involved: JPEX Crypto Asset Platform
                            </li>
                            <li>
                                Developed both website and app by using React
                            </li>
                            <li>
                                Worked with a large team including back-end team, UI designer
                            </li>
                        </ul>
                    </div>
                    <div className="skill">
                        <Title level={5} underline>
                            Hobby
                        </Title>
                        <Text>
                           Photographic, Basketball, Learning new tech
                        </Text>
                        <Title level={5} underline>
                            Skill
                        </Title>
                        <Text>
                            Web & App development, Problem-solving, Team player, Communication, Time management
                        </Text>
                        <Title level={5} underline>
                            Notice period:
                        </Title>
                        <Text>
                            Available Immediately
                        </Text>
                    </div>
                </div>
            </div>











        </div>
    )
}

export default About
