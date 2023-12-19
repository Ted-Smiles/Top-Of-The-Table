import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import './BlogSection.css';
import './Cards.css';
import request from 'graphql-request';
import LoadingIcon from './LoadingIcon';

function GalleryImages() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { images } = await request(
        'https://api-eu-west-2.hygraph.com/v2/clox175hi80uw01uqdjf6980x/master',
        `
          {
              images {
                  id,
                  title,
                  army,
                  priority,
                  image {
                      url
                  }
              }
          }
        `
      );
      setImages(images);
    };
    fetchImages();
  }, []);

  console.log(images);

const renderImages = () => {
    if (!images) {
      return Array.from({ length: 6 }, (_, index) => <LoadingIcon key={index} />);
    }
  
    const result = [];
    let currentIndex = 0;
  
    const priorityImages = images.filter((image) => image.priority);
    const remainingImages = images.filter((image) => !image.priority);
  
    if (priorityImages.length > 0) {
      const groupOf2WithPriority = (
        <ul className="cards__items" key={`groupOf2WithPriority_${currentIndex}`}>
          {priorityImages.slice(0, 2).map((image) => (
            <CardItem
              key={image.title}
              src={image.image.url}
              alt="Blog Photo"
              title={image.title}
              action="Read More..."
              enableFullscreen={true}
            />
          ))}
          
          {Array.from({ length: 2 - priorityImages.slice(0, 2).length }).map((_, index) => (
            <div key={`emptySlot_${index}`} className="cards__item" />
          ))}
        </ul>
      );
      result.push(groupOf2WithPriority);
    }
  
    while (currentIndex < remainingImages.length) {
      const groupOf3 = (
        <ul className="cards__items" key={`groupOf3_${currentIndex}`}>
          {remainingImages
            .slice(currentIndex, currentIndex + 3)
            .map((image) => (
              <CardItem
                key={image.title}
                src={image.image.url}
                alt="Blog Photo"
                title={image.title}
                action="Read More..."
                enableFullscreen={true}
              />
            ))}
          
          {Array.from({ length: 3 - remainingImages.slice(currentIndex, currentIndex + 3).length }).map((_, index) => (
            <div key={`emptySlot_${index}`} className="cards__item" />
          ))}
        </ul>
      );
      result.push(groupOf3);
  
      currentIndex += 3;

      const groupOf2 = (
        <ul className="cards__items" key={`groupOf2_${currentIndex}`}>
          {remainingImages
            .slice(currentIndex, currentIndex + 2)
            .map((image) => (
            <CardItem
              key={image.title}
              src={image.image.url}
              alt="Blog Photo"
              title={image.title}
              action="Read More..."
              enableFullscreen={true}
            />
          ))}
          
          {Array.from({ length: 2 - remainingImages.slice(currentIndex, currentIndex + 2).length }).map((_, index) => (
            <div key={`emptySlot_${index}`} className="cards__item" />
          ))}
        </ul>
      );
      result.push(groupOf2);

      currentIndex += 2;
    }
  
    return result;
  };
  
  
  return (
    <div className="cards">
      <h1>Recent Posts</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {renderImages()}
        </div>
      </div>
    </div>
  );
}

export default GalleryImages;
