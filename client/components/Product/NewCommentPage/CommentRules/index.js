import React from 'react';
import PropTypes from 'prop-types';
// styled components
import {
  Root,
} from './style';

const propTypes = {};

const defaultProps = {};

const index = () => {
  return <Root>
    <h3>دیگران را با نوشتن نظرات خود، برای انتخاب این محصول راهنمایی کنید.</h3>
    <p><span style={{"color":"#2980b9"}}><strong>لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:</strong></span></p>
    <ul>
      <li>لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با بیانی رسمی و عاری از لحن تند، تمسخرو توهین باشد.</li>
      <li>از ارسال لینک‌های سایت‌های دیگر و ارایه‌ی اطلاعات شخصی خودتان مثل شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.</li>
      <li><strong>در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی اطلاعات مشخص و دقیق برای راهنمایی سایر کاربران در فرآیند خرید یک محصول توسط ایشان است.</strong></li>
      <li>با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست راهنمایی در این بخش خودداری کرده و سوالات خود را در بخش «پرسش و پاسخ» مطرح کنید.</li>
    </ul>
  </Root>;
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default index;