import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import {
  Root,
  Label,
  FloatButton,
} from './style';
import {Photo} from '../style';
import { updateProductGallery, getProductGallery, deleteFromProductGallery } from '../../../../utils/api-helpers/product';
import GalleryUploader from './GalleryUploader';
import Loader from '../../../Loader';
import { size } from '../../../../style/custom-query';

export default function index({ productId }) {
  const [photoLoading, setPhotoLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [itemToShow, setItemToShow] = useState(1);
  const userState = useSelector(state => state.user);
  const { _id: userId } = userState.data;

  const fetchGallery = async () => {
    setPhotoLoading(true);
    const resp = await getProductGallery(productId);
    if ( resp.ok && resp.status == 200 ) {
      setGallery(resp.data.gallery);
      setPhotoLoading(false);
    };
  };
  
  useEffect(() => {
    if (typeof window != undefined) {
      window.screen.width >= size.tabletMin &&
      setItemToShow(2);
    };
  }, [])

  useEffect(() => {
    // fetch gallery
    fetchGallery();
  }, [productId]);

  const changePhotoTrigger = (pastPhotoSrc) => async (e) => {
    setPhotoLoading(true);

    let photoData = new FormData();
    photoData.append('photo', e.target.files[0]);
    photoData.append('pastPhoto', pastPhotoSrc);

    const galleryFetchResp = await updateProductGallery(userId, productId, photoData);
    if (galleryFetchResp.ok && galleryFetchResp.status == 200) {
      // should set new gallery
      setGallery(galleryFetchResp.data.data.gallery);
      setPhotoLoading(false);
    };
  };

  const removePhotoTrigger = (photoSrc) => async (e) => {
    setPhotoLoading(true);
    const galleryFetchResp = await deleteFromProductGallery(userId, productId, photoSrc);
    if (galleryFetchResp.ok && galleryFetchResp.status == 200) {
      setGallery(galleryFetchResp.data.data.gallery);
      setPhotoLoading(false);
    };
  };

  return (
    <Root>
    {
      photoLoading ? 
      <Loader loading={photoLoading} /> :
      <Carousel
        itemsToShow={itemToShow}
        showArrows={false}
        enableAutoPlay={false}
        enableTilt={false}
        isRTL={true}
      >
        {
          gallery.map((photoSrc, index) => <Photo key={index}>
              <GalleryUploader 
                changeTrigger={changePhotoTrigger} 
                removeTrigger={removePhotoTrigger}
                photoSrc={photoSrc} />
            </Photo>)
        }
      </Carousel>
    }
      <FloatButton>
          <input type="file" id="newPhotoToGallery" style={{display: 'none'}} 
            onChange={changePhotoTrigger('')}
          />
          <Label htmlFor="newPhotoToGallery">
           +
          </Label>
      </FloatButton>
    </Root>
  )
}
