import React from 'react'
import BlogCard from './BlogCard'
import '../styles/Blog.css'

const Blog = () => {

    const blogData=[
        {
            title: 'Blog 1',
            description:' bla bla bla bla',
            img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chetu.com%2Fon-demand-developers%2Fjava.php&psig=AOvVaw3W1qleNZrkmkwbgPJmjFPw&ust=1750489184046000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJCDhcK2_40DFQAAAAAdAAAAABAE'
        },
        {
          title: 'Blog 1',
            description:' bla bla bla bla',
            img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png'
        },
        {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png'
        },
        {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png'
        },
        {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png'
        },
         {
             title: 'Blog 1',
            description:' bla bla bla bla',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png'
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