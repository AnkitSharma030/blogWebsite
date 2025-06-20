import React from 'react'
import BlogCard from './BlogCard'
import '../styles/Blog.css'

const Blog = () => {

    const blogData=[
        {
            title: 'Java',
            description:'Java is a language of ?? A great language',
            img: '../images/java.avif'
        },
        {
          title: 'Blog 1',
            description:' bla bla bla bla',
            img:'../images/img.png'
        },
        {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: '../images/img.png'
        },
        {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: '../images/img.png'
        },
        {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: '../images/img.png'
        },
         {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: '../images/img.png'
        }
    ];
  return (
    <div className='blog'>
        <h2>Blogs</h2>
        <div className='blog-list'>
            {blogData.map((blog,index)=>(
                <BlogCard 
                key={index}
                title={blog.title}
                description={blog.description}
                img={blog.img}
                />
            ))}
        </div>
    </div>
  )
}

export default Blog