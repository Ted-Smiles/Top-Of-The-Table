import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './BlogSection.css';
import { useParams } from 'react-router-dom';

export default function SinglePage( {posts} ) {
    const { slug } = useParams();

    console.log(posts)

    const post = posts.find((post) => post.slug === slug);

    return <div>Now showing post {slug}</div>
}
