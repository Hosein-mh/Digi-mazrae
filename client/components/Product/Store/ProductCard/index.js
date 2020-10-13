import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel';
import { toFarsiNumber } from '../../../../utils/globalHelpers';
import AddToCartButton from '../AddToCartButton';
import AddToLikes from '../AddToLikes';
import {
  Root,
  ProductGallery,
  ProductImg,
  ProductTitle,
  ProductPrice,
  Like,
} from './style';


export default function ProductCard({ product, cartAmount }) {
  const [values, setValues] = useState({
    gallery: [],
  });

  useEffect(() => {
    setValues({ ...values, gallery: [ product.photo, ...product.gallery ]});
  }, [product])

  return (
    <Root>
      <Like>
        <AddToLikes />
      </Like>
      <ProductGallery>
        <Carousel
          showArrows={false}
        >
        {
          values.gallery.map((photo, index) => (
            <ProductImg key={index} src={`/${photo}`} />
          ))
        }
        </Carousel>
      </ProductGallery>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>{/*toFarsiNumber(product.price)*/product.price} تومان</ProductPrice>
      <AddToCartButton product={product} cartAmount={cartAmount} />
    </Root>
  )
}
