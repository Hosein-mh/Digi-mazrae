import React from 'react';
import { useSelector } from 'react-redux';
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
import { removeProduct } from '../../../../utils/api-helpers/product';

export default function index({ product }) {
  const userState = useSelector(state => state.user);
  const { _id: userId } = userState.data;

  const handleDelete = async () => {
    await removeProduct(userId, product._id);
  }

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
        <TrashModal removeTrigger={handleDelete} />
        <Link to={`/dashbord/products/edit/${product._id}`} >
          <EditIcon />
        </Link>
      </ActionGroup>
    </Card>
  )
};

index.propTypes = {
  product: PropTypes.object.isRequired,
};
