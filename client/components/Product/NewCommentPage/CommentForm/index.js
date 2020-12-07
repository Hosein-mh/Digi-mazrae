import React, { useState } from 'react';
import PropTypes from 'prop-types';
// styled components
import {
  Root,
  InputsArea,
  CommentRow,
  CommentCol,
  CommentTitle,
  InputLabel,
  InputField,
  TextArea,
  CommentSubmitButton,
  ValidationError,
} from './style';
// other components
import CommentRules from '../CommentRules';

const propTypes = {
  commentState: PropTypes.object,
  commentStateTrigger: PropTypes.func,
};

const defaultProps = {};

const index = ({ commentState, commentStateTrigger }) => {
  const [isAllValid, setIsAllValid] = useState(false);

  const renderValidationError = () => {
    return (
    commentState.text.length < 1 
    ? <ValidationError>وارد کردن این فیلد الزامی است!</ValidationError> :
    (commentState.text.length < 5) ?
    <ValidationError>متن نظر نمیتواند کمتر از 5 کاراکتر باشد</ValidationError> :
    (commentState.text.length > 1000) &&
    <ValidationError>متن نظر نمیتواند بیشتر از 1000 کاراکتر باشد</ValidationError>
    )
  }

  const changeHandler = (name) => e => {
    5 < commentState.text.length < 1000 ? setIsAllValid(true) : setIsAllValid(false);
    commentStateTrigger([name], e.target.value);
  }

  return (
    <Root>
      <InputsArea>
        <CommentRow>
          <CommentCol>
            <CommentTitle>عنوان نظر شما</CommentTitle>
            <InputLabel>
              <InputField type="text" name="commentTitle" placeholder="عنوان نظر خود را وارد نمایید"
                onChange={changeHandler('title')}
              />
            </InputLabel>
          </CommentCol>
        </CommentRow>
        <CommentRow>
          <CommentCol>
            <CommentTitle className="p-strength">نقات قوت</CommentTitle>
            <InputLabel>
              <InputField type="text" name="strengthPoints"
                onChange={changeHandler('StrenghtPoints')}
              />
            </InputLabel>
          </CommentCol>
        </CommentRow>
        <CommentRow>
          <CommentCol>
            <CommentTitle className="p-leak">نقاط ضعف</CommentTitle>
            <InputLabel>
              <InputField type="text" name="leakPoints"
                onChange={changeHandler('leakPoints')}
              />
            </InputLabel>
          </CommentCol>
        </CommentRow>
        <CommentRow>
          <CommentCol>
            <CommentTitle>متن نظر شما (اجباری)</CommentTitle>
            <InputLabel>
              <TextArea 
                name="commentText" 
                placeholder="متن نظر خود را وارد نمایید"
                onChange={changeHandler('text')}
              >
              </TextArea>
              {
                renderValidationError()
              }
            </InputLabel>
          </CommentCol>
        </CommentRow>
        <CommentSubmitButton onClick={() => console.log('submit comment')}>ثبت نظر</CommentSubmitButton>
      </InputsArea>
      <CommentRules />
    </Root>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default index;