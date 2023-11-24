import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css'
import './Cards.css';
import request from 'graphql-request'

var test = 'this is  a test'


 function BlogSection() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const { posts } = await request(
                'https://api-eu-west-2.hygraph.com/v2/clox175hi80uw01uqdjf6980x/master',
                `
            {
                posts {
                    id,
                    title,
                    datePublished,
                    slug,
                    coverPhoto {
                        url
                    },
                    summary,
                    content {
                        html
                    }
                }
            }
        `
            )
            const post = posts.reverse()
            setPosts(post)
        }
        fetchPosts()  
    }, [])

    console.log(posts)

    if (posts === null) {
        return (
            <h1>Error</h1>
        )
    }else {
        return (
            <div className='blog'>
                <h1>Recent Posts</h1>
                <div className="blog__container">
                    <div className="blog__wrapper">
                        <ul className="blog__items">  
                                 
                            {posts.map(post => <CardItem 
                                src={post.coverPhoto.url}
                                title={post.title}
                                date={post.datePublished}
                                text={post.summary}
                                action="Read More..."
                                path={post.slug}
                            />)}
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }


}

export default BlogSection