import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css';
import request, { GraphQLClient, gql } from 'graphql-request'
import { useNavigate } from 'react-router-dom';



export default function BlogSection(streams) {

    const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clox175hi80uw01uqdjf6980x/master')
    
    const QUERY = gql`
    query {
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
    const {posts} = graphcms.request(QUERY)


    getStaticProps()    
    console.log(streams)


    return (
        <div className='blog'>
            <h1>Recent Posts</h1>
            <div className="blog__container">
                <div className="blog__wrapper">
                    {/*{posts.map((post) => ( */}
                    <ul className="blog__items">        
                        <CardItem 
                            src="./images/P1020196.jpg"
                            label=""
                            title="A Double Header"
                            date="12/09/2023"
                            text="Summary"
                            action="Read More..."
                            path="/contact"
                        />
                        <CardItem 
                            src="./images/P1020217.jpg"
                            label=""
                            title="Goonhammer Open"
                            date="05/09/2023"
                            text="Summary"
                            action="Read More..."
                            path="/contact"
                        />
                        <CardItem 
                            src="./images/paradeGround.jpg"
                            label=""
                            title="Hellstorm All Stars 4"
                            date="28/08/2023"
                            text="Summary"
                            action="Read More..."
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
                {/* ))} */}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps (){
    const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clox175hi80uw01uqdjf6980x/master')
    
    const QUERY = gql`
    query {
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
    const {posts :streams} = await graphcms.request(QUERY)
    console.log(streams)

    return {
        props: {
            streams,
        }
    }
}