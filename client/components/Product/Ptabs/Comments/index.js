import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Imports styled components
import {
  Root,
  CommentSummery,
  CommentSummeryNote,
  LinkHover,
} from './style';
//Import Icons
import AddCommentIcon from '../../../icons/AddComment.icon';

const propTypes = {
  productId: PropTypes.string.isRequired,
};

const defaultProps = {};

const index = ({ productId }) => {

  return (
    <Root>
      <CommentSummery>
        <CommentSummeryNote>
          <span>شما هم می‌توانید در مورد این کالا نظر بدهید.</span>
          <p>
            برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این محصول را قبلا از دیجی‌مزرعه خریده باشید،
                نظر
                شما به عنوان مالک محصول ثبت خواهد شد.
          </p>
          <Link to={'/product/comment/' + productId } title="ثبت نظر جدید">
            <LinkHover>
              <AddCommentIcon />
            </LinkHover>
            افزودن نظر جدید
          </Link>
        </CommentSummeryNote>
      </CommentSummery>
    </Root>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default index;