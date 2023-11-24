import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css';
import { useParams } from 'react-router-dom';
import request from 'graphql-request';

export default function SinglePage() {

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

    const { slug } = useParams();

    if (posts === null) {
        return (
            <h1>Error</h1>
        )
    }else {
        for (let i = 0; i < posts.length; i++) {
            
            if (posts[i].slug === slug){
                return (
                    <div className='blog'>
                    <h1>{posts[i].title}</h1>
                    <div className="blog__container">
                        <div className="blog__wrapper">
                            <img className="cards__item__img" src={posts[i].coverPhoto.url} />
                            <br />
                            <h3>{posts[i].datePublished}</h3>
                            
                        </div>
                    </div>
                </div>
                )
            } else {
                
            }
        } 
        
    }
}
