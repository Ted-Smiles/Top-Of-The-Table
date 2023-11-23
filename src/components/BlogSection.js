import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css';
import request from 'graphql-request'


export default function BlogSection() {

    const [posts, setPosts] = useState(null);

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
                        content {
                            html
                        }
                    }
                }
            `
                );

                const postss = posts.reverse()
                setPosts(postss);
            };

        fetchPosts(posts);
        console.log(posts)
        
    }, []);

    return (
        <div className='blog'>
            <h1>Recent Posts</h1>
            <div className="blog__container">
                <div className="blog__wrapper">
                    <ul className="blog__items">
                        {posts.map(post => <CardItem 
                            src={post.coverPhoto}
                            label=""
                            title={post.title}
                            date={post.datePublished}
                            text="Summary"
                            action="Read More..."
                            path="/contact"
                        />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}