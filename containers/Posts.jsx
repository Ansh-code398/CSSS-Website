import React from 'react'

import BlogPost from '../components/BlogPost'

const data = [
    {
        title: 'Making Begains',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni praesentium natus mollitia cum animi ut eos reprehenderit tempore earum nihil debitis, explicabo id itaque unde deleniti. Porro qui, voluptatem accusamus repellendus temporibus dolore fuga id obcaecati unde doloribus? Impedit quasi ducimus veritatis sint, autem similique non molestias veniam debitis!',
        img: 'https://s19.postimg.cc/4cefemj5f/design2.png',
        author: 'CSSC',
        date: 'March 1, 2022',
        profile: 'https://s19.postimg.cc/4cefemj5f/design2.png'
    },
    {
        title: '2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni praesentium natus mollitia cum animi ut eos reprehenderit tempore earum nihil debitis, explicabo id itaque unde deleniti. Porro qui, voluptatem accusamus repellendus temporibus dolore fuga id obcaecati unde doloribus? Impedit quasi ducimus veritatis sint, autem similique non molestias veniam debitis!',
        img: 'https://s19.postimg.cc/4cefemj5f/design2.png',
        author: 'CSSC',
        date: 'March 1, 2022',
        profile: 'https://s19.postimg.cc/4cefemj5f/design2.png'
    },
    {
        title: '3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni praesentium natus mollitia cum animi ut eos reprehenderit tempore earum nihil debitis, explicabo id itaque unde deleniti. Porro qui, voluptatem accusamus repellendus temporibus dolore fuga id obcaecati unde doloribus? Impedit quasi ducimus veritatis sint, autem similique non molestias veniam debitis!',
        img: 'https://s19.postimg.cc/4cefemj5f/design2.png',
        author: 'CSSC',
        date: 'March 1, 2022',
        profile: 'https://s19.postimg.cc/4cefemj5f/design2.png'
    },
    
]

const Posts = ({ color, bgColor }) => {
    return (
        <div style={{ color: color, background: bgColor, width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '200px', marginBottom: '200px' }} id="protfolio">
            <h1>Past Events</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', color: color, background: bgColor}}>
                {data.map((item, index) => {
                    return <BlogPost key={index} color={color} bgColor={bgColor} {...item} />
                })}
            </div>
        </div>
    )
}

export default Posts