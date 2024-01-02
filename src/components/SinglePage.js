// SinglePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from 'graphql-request';
import './SinglePage.css';

export default function SinglePage() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await request(
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
        );
        const postList = response.posts.reverse();
        setPosts(postList);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  if (!posts) {
    return (
        <div className='loading-blog-post'>
          <h1 className="blog-post__title">Loading...</h1>
        </div>
      );
  }

  const postIndex = posts.findIndex(post => post.slug === slug);

  if (postIndex === -1) {
    return <h1>Post not found</h1>;
  }

  const post = posts[postIndex];

  return (
    <div className='blog-post'>
      <div className="blog-post__container">
        <div className="blog-post__wrapper">
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </div>
      </div>
    </div>
  );
}
