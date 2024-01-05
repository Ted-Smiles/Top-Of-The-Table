import React, { useState } from 'react';
import CardItem from './CardItem';
import './BlogSection.css';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterClick = (category) => {
    // Toggle the selected category. If it's already selected, deselect it.
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const renderCardItems = () => {
    // If a category is selected, render only the CardItem for that category
    if (selectedCategory === 'Genestealer Cults') {
      return (
        <CardItem
          src="./images/P1020221.jpg"
          title="Genestealer Cults"
        />
      );
    } else if (selectedCategory === 'Project Leviathan') {
      return (
        <CardItem
          src="./images/P1020222-2.jpg"
          title="Project Leviathan"
        />
      );
    } else if (selectedCategory === 'Death Korps Of Krieg') {
      return (
        <CardItem
          src="./images/P1020221.jpg"
          title="Death Korps Of Krieg"
        />
      );
    } else if (selectedCategory === 'Chaos Daemons') {
      return (
        <CardItem
          src="./images/P1020222-2.jpg"
          title="Chaos Daemons"
        />
      );
    }

    // If no category is selected, render all CardItems
    return (
        <>
        <ul className="cards__items">
                <CardItem
                src="./images/P1020221.jpg"
                title="Genestealer Cults"
                onClick={() => handleFilterClick('Genestealer Cults')}
            />
            <CardItem
                src="./images/P1020222-2.jpg"
                title="Project Leviathan"
                onClick={() => handleFilterClick('Project Leviathan')}
            />
        </ul>
        <ul className="cards__items">
            <CardItem
                src="./images/P1020221.jpg"
                title="Death Korps Of Krieg"
                onClick={() => handleFilterClick('Death Korps Of Krieg')}
            />
            <CardItem
                src="./images/P1020222-2.jpg"
                title="Chaos Daemons"
                onClick={() => handleFilterClick('Chaos Daemons')}
            />
        </ul>
        </>
    );
  };

  return (
    <div className='cards'>
      <h1>Recent Posts</h1>
      <div className="filter-images">
        {/* Add images or buttons for each category */}
        <img
          src="/path/to/genestealer-cult-image.jpg"
          alt="Genestealer Cults"
          onClick={() => handleFilterClick('Genestealer Cults')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src="/path/to/project-leviathan-image.jpg"
          alt="Project Leviathan"
          onClick={() => handleFilterClick('Project Leviathan')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src="/path/to/death-korps-image.jpg"
          alt="Death Korps Of Krieg"
          onClick={() => handleFilterClick('Death Korps Of Krieg')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src="/path/to/chaos-daemons-image.jpg"
          alt="Chaos Daemons"
          onClick={() => handleFilterClick('Chaos Daemons')}
          style={{ cursor: 'pointer' }}
        />
        {/* Add more images for different categories */}
        {selectedCategory && (
          // Add a button or image to remove the filter
          <img
            src="/path/to/remove-filter-image.jpg"
            alt="Remove Filter"
            onClick={() => handleFilterClick(null)}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          {renderCardItems()}
        </div>
      </div>
    </div>
  );
}
