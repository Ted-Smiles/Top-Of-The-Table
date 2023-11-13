import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API)

const post = `
    id,
    title,
    datePublished,
    slug,
    coverPhoto { url }
    content { html }
`

export const QUERY_SLUG_POST = gql `
    {
        post() {
            name,
            slug
        }
    }
`