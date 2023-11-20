import { gql } from 'graphql-request'
import React from 'react'

export default function streamPage() {
  return (
    <div>[...slug]</div>
  )
}

export async function getStaticPaths() {
    const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clox175hi80uw01uqdjf6980x/master')
    
    const QUERY = gql `
        query {
            posts {
                slug
            }
        }
    `
    const {posts} = await graphcms.request(QUERY)
    
    const paths = posts.map ( posts => ({
        params: {slug: posts.slug}
    }))
    console.log(path)
    return { paths, fallback:false }
}

export async function getStaticProps() {

}