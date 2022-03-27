import React from 'react'

import ProtfolioCard from '../components/ProtfolioCard'

const data = [
    {
        title: 'Graphic',
        img: 'https://s19.postimg.cc/4cefemj5f/design2.png'
    },
    {
        title: 'Website',
        img: 'https://s19.postimg.cc/vmzqmk1hv/website2.jpg'
    },
    {
        title: 'App',
        img: 'https://s19.postimg.cc/uxgya7vtf/app.jpg'
    },
    {
        title: 'Codepen',
        img: 'https://s19.postimg.cc/cunvj0feb/code2.jpg'
    }
]
const About = ({ color, bgColor }) => {
    return (
      <div
        style={{
          color: color,
          background: bgColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="protfolio"
      >
        <h1>Protfolio</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            color: color,
            background: bgColor,
            marginTop: "0",
          }}
        >
          {data.map((item, index) => {
            return (
              <ProtfolioCard
                key={index}
                color={color}
                bgColor={bgColor}
                {...item}
              />
            );
          })}
        </div>
      </div>
    );
}

export default About