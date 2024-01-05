import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import './GalleryImages.css';
import './Cards.css';
import request from 'graphql-request';
import LoadingIcon from './LoadingIcon';

function GalleryImages() {
  const [images, setImages] = useState(null);
  const [filteredImages, setFilteredImages] = useState(null);
  const [selectedArmy, setSelectedArmy] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 922);

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
      setFilteredImages(images); // Initialize filteredImages with all images
    };
    fetchImages();

    // Check screen size on mount and on resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 922);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(isSmallScreen)
    };
  }, []);

  const handleFilterButtonClick = (army) => {
    // Update the selectedArmy state and filter the images based on the selected army
    setSelectedArmy(army);
    console.log(army)
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Update filteredImages whenever images or selectedArmy changes
    const newFilteredImages = selectedArmy
      ? images.filter(image => image.army === selectedArmy)
      : images;
    setFilteredImages(newFilteredImages);
  }, [images, selectedArmy]);

  const renderImages = () => {
    const sourceImages = filteredImages || images;

    if (!sourceImages) {
      return Array.from({ length: 6 }, (_, index) => <LoadingIcon key={index} />);
    }

    const result = [];
    let currentIndex = 0;

    const priorityImages = selectedArmy
      ? []
      : sourceImages.filter((image) => image.priority);
    const remainingImages = selectedArmy
      ? sourceImages.filter((image) => image.army === selectedArmy)
      : sourceImages.filter((image) => !image.priority);

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

      currentIndex += 2; // Increment by 2 for the priority group
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

      currentIndex += 3; // Increment by 3 for the non-priority group
    }

    return result;
  };

  return (
    <div className="cards">
      <h1 className='Title'>Gallery</h1>
      {isSmallScreen ? (
        // Render dropdown for small screens

        <div className="filter-dropdown">
          <button onClick={toggleDropdown}>
            Filter
          </button>
          <div className="filter-images">
            {isDropdownOpen && (
              <>
                {selectedArmy && (
                  <div className={`filter-item ${selectedArmy === null ? 'selected' : ''} remove-filter`} onClick={() => handleFilterButtonClick(null)}>
                    <span>X</span>
                    <span>Remove Filter</span>
                  </div>
                )}
                <div className="filter-item" onClick={() => handleFilterButtonClick('Chaos_Daemons')}>
                  <img src="./images/P1020222-2.jpg" alt="Chaos Daemons" />
                  <span>Chaos Daemons</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterButtonClick('Death_Korps_Of_Krieg')}>
                  <img src="./images/P1020221.jpg" alt="Death Korps Of Krieg" />
                  <span>Death Korps Of Krieg</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterButtonClick('Genestealer_Cults')}>
                  <img src="./images/P1020221.jpg" alt="Genestealer Cults" />
                  <span>Genestealer Cults</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterButtonClick('Project_Leviathan')}>
                  <img src="./images/P1020222-2.jpg" alt="Project Leviathan" />
                  <span>Project Leviathan</span>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        // Render regular filter images for larger screens
        <div className="filter-images">
          {selectedArmy && (
            <div className={`filter-item ${selectedArmy === null ? 'selected' : ''} remove-filter`} onClick={() => handleFilterButtonClick(null)}>
              <span>X</span>
              <span>Remove Filter</span>
            </div>
          )}
          <div className="filter-item" onClick={() => handleFilterButtonClick('Chaos_Daemons')}>
            <img src="./images/P1020221.jpg" alt="Chaos Daemons" />
            <span>Chaos Daemons</span>
          </div>
          <div className="filter-item" onClick={() => handleFilterButtonClick('Death_Korps_Of_Krieg')}>
            <img src="./images/P1020221.jpg" alt="Death Korps Of Krieg" />
            <span>Death Korps Of Krieg</span>
          </div>
          <div className="filter-item" onClick={() => handleFilterButtonClick('Genestealer_Cults')}>
            <img src="./images/P1020221.jpg" alt="Genestealer Cults" />
            <span>Genestealer Cults</span>
          </div>
          <div className="filter-item" onClick={() => handleFilterButtonClick('Project_Leviathan')}>
            <img src="./images/P1020221.jpg" alt="Project Leviathan" />
            <span>Project Leviathan</span>
          </div>
        </div>
      )}
      <h2>{selectedArmy ? `${selectedArmy.replace(/_/g, ' ')}` : 'All Posts'}</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          {renderImages()}
        </div>
      </div>
    </div>
  );
}

export default GalleryImages;
