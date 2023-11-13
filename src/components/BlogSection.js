import React from 'react'
import CardItem from './CardItem'
import './BlogSection.css';
import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clox175hi80uw01uqdjf6980x/master')

const QUERY = gql `
    {
        posts {
            id,
            title,
            datePublished,
            slug,
            content {
                html
            }
            coverPhoto {
                url
                }
            }
        }
    }
`

export async function getStaticProps (){
    const {posts} = await graphcms.request(QUERY)
    return {
        props: {
            posts,
        },
        revalidate: 10,
    }
}

function BlogSection() {
  return (
    <div className='blog'>
        <h1>Recent Posts</h1>
        <div className="blog__container">
            <div className="blog__wrapper">
                <ul className="blog__items">
                    
                    <CardItem 
                        src="./images/P1020196.jpg"
                        label="12/09/2023"
                        text="A Double Header"
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/P1020217.jpg"
                        label="05/09/2023"
                        text="Goonhammer Open"
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/paradeGround.jpg"
                        label="28/08/2023"
                        text="Hellstorm All Stars 4"
                        path="/contact"
                    />
                    <CardItem 
                        src="./images/P1020221.jpg"
                        text="..."
                        path="/services"
                    />
                    <CardItem 
                        src="./images/P1020222-2.jpg"
                        text="..."
                        path="/services"
                    />
                
                </ul>
            </div>
        </div>
    </div>
  )
}


export default BlogSection