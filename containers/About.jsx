import React from 'react'
import AboutCard from '../components/AboutCard'

const data = [
    {
        title: 'Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, accusamus hic. Amet, nulla, nihil voluptate perferendis laudantium possimus eius commodi qui repudiandae porro fuga beatae quam voluptas modi maxime. Rem.',
        img: 'https://s19.postimg.cc/jl4cscutf/robot1.png'
    },
    {
        title: 'Program Languages',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, accusamus hic. Amet, nulla, nihil voluptate perferendis laudantium possimus eius commodi qui repudiandae porro fuga beatae quam voluptas modi maxime. Rem..',
        img: 'https://s19.postimg.cc/g1if2ix8j/robot2.png'
    },
    {
        title: 'Style',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, accusamus hic. Amet, nulla, nihil voluptate perferendis laudantium possimus eius commodi qui repudiandae porro fuga beatae quam voluptas modi maxime. Rem.',
        img: 'https://s19.postimg.cc/4cefeloab/robot3.png'
    }
]
const About = ({ color, bgColor }) => {
    return (
        <div style={{
            color: color,
            background: bgColor,
            width: '100%',
            height: '110vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }} id="about">
            <h1>About Us</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', color: color, background: bgColor}}>
                {data.map((item, index) => {
                    return <AboutCard key={index} color={color} bgColor={bgColor} {...item} />
                })}
            </div>
        </div>
    )
}

export default About