import React, { useState, useEffect } from 'react';
import customMedia, { size } from '../../style/custom-query';
import Carousel from 'react-elastic-carousel';
import CategoryBanner from '../CategoryBanner';

export default function index({ categories }) {
  const [itemToSHow, setItemToSHow] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  useEffect(() => {
    if (typeof window != undefined) {
      if (screen.width > size.desktopMin) {
        categories.length > 4 &&
        setShowArrows(true);
        setItemToSHow(4);
      } else if (screen.width > size.mobileMax) {
        setItemToSHow(3);
      };
    }
  }, [categories])
  return (
      <Carousel
        itemsToShow={itemToSHow}
        showArrows={showArrows}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
        enableTilt={false}
        isRTL={true}
      >
        {
          categories.map(category => (
            <CategoryBanner key={category._id} category={category} />
          ))
        }
      </Carousel>
  );
};
