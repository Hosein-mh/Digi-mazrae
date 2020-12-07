import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Imports Styled components
import {
  GroupBar,
  Row,
  EachRate,
  ParamTitle
} from './style';

// Imports external components
import RateBar from '../../RateBar';

const propTypes = {
  rateTrigger: PropTypes.func,
  curruntState: PropTypes.number,
};

const defaultProps = {};

const index = ({ rateTrigger, curruntState }) => {

  return (
    <GroupBar>
      <Row>
        <EachRate>
          <ParamTitle>ارزش غذایی</ParamTitle>
          <RateBar rate={curruntState.nutritionalRate} rateHandler={(index) => rateTrigger('nutritionalRate', index)} />
        </EachRate>
        <EachRate>
          <ParamTitle>تازگی</ParamTitle>
          <RateBar rate={curruntState.freshRate} rateHandler={(index) => rateTrigger('freshRate', index)} />
        </EachRate>
      </Row>
      <Row>
        <EachRate>
          <ParamTitle>بسته بندی</ParamTitle>
          <RateBar rate={curruntState.packingRate} rateHandler={(index) => rateTrigger('packingRate', index)}/>
        </EachRate>
        <EachRate>
          <ParamTitle>کیفیت</ParamTitle>
          <RateBar rate={curruntState.qualityRate} rateHandler={(index) => rateTrigger('qualityRate', index)}/>
        </EachRate>
      </Row>
    </GroupBar>
  )
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default index;