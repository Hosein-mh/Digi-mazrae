import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  Tank,
  StatusLight,
  ProductPhoto,
  ProductName,
  RateAndPrice,
  RateAndPriceBg,
  ProductPrice,
  ActionGroup,
} from './style';
import TrashModal from '../../../Modal/TrashModal';
import EditIcon from '../../../icons/EditIcon';

export default function index({ product }) {
  return (
    <Card>
      <Tank>{product.tank} کیلو</Tank>
      <StatusLight active={product.tank > 0 ? true : false} />
      <ProductPhoto src={"/" + product.photo} alt="product photo" />
      <ProductName>{product.name}</ProductName>
      <RateAndPrice>
        <ProductPrice>{product.price} تومان</ProductPrice>
        <RateAndPriceBg />
      </RateAndPrice>
      <ActionGroup>
        <TrashModal />
        <Link to={`/dashbord/products/edit/${product._id}`} >
          <EditIcon />
        </Link>
      </ActionGroup>
    </Card>
  )
};

index.propTypes = {
  product: {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    tank: PropTypes.number.isRequired,
  },
};
