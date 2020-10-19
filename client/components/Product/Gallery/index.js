import React, { useState } from 'react'
import {
  ExtraOptions,
  Root, SelectedViewer, Thumb,
} from './style';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import AddToLikes from '../Store/AddToLikes';

export default function Gallery({ gallery }) {
  const [selected, setSelected] = useState(0)
  return (
    <Root>
      <SelectedViewer imageSrc={gallery[selected]} />
      <Carousel
        itemsToShow={3}
        showArrows={false}
        isRTL={true}
      >
        {
          gallery.map((photo, index) => (
            <Thumb key={index}
              imageSrc={photo} 
              onClick={() => setSelected(index)}
              isSelected={index == selected }
            />
          ))
        }
      </Carousel>
      <ExtraOptions>
        <AddToLikes />
      </ExtraOptions>
    </Root>
  )
}

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string),
};
