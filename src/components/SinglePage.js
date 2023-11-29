import React, { useEffect, useState } from 'react'
import './BlogSection.css';
import { useParams } from 'react-router-dom';
import request from 'graphql-request';

/**
 * Single page for each blog when called
 */

export default function SinglePage() {

    const a = 1

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

    } else {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].slug === slug) {
                const a = i
            }
        }
    }
            return (
                <div className='blog'>
                    {posts === null ? 
                        (<h1>Loading</h1>) : 
                        (<h1>{posts[a].title}</h1>)
                    }
                    <div className="blog__container">
                        <div className="blog__wrapper">
                            {posts === null ? 
                                (<img className="cards__item__img" src="" alt='Test' />) : 
                                (<img className="cards__item__img" src={posts[a].coverPhoto.url} alt='Test' />)
                            }

                        </div>
                    </div>
                </div>
            )


}

// (<h3>{posts[a].datePublished}</h3>)
