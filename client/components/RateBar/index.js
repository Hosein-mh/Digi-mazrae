import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Imports Styled Components
import { 
  Bar, 
  Root, 
  TargetTitle,
  CircleStep,
  RateIndicator,
} from './style';

const propTypes = {
  rate: PropTypes.number.isRequired,
  rateHandler: PropTypes.func.isRequired,
};

const defaultProps = {
  rate: 0,
};

const index = ({ rate, rateHandler }) => {
  // Constants
  const titleArray = ['خیلی بد', 'بد','معمولی','خوب','عالی'];
  // States
  const [targetTitle, setTargetTitle] = useState(titleArray[rate]);

  // handlers
  const handleRate = (index) => {
    rateHandler(index);
    setTargetTitle(titleArray[index]);
  }

  return (
    <Root>
      <Bar>
        <CircleStep index={1} rate={rate} onClick={() => handleRate(0)} />
        <CircleStep index={2} rate={rate} onClick={() => handleRate(1)} />
        <CircleStep index={3} rate={rate} onClick={() => handleRate(2)} />
        <CircleStep index={4} rate={rate} onClick={() => handleRate(3)} />
        <CircleStep index={5} rate={rate} onClick={() => handleRate(4)} />
        <RateIndicator rate={rate}/>
      </Bar>
      <TargetTitle>{targetTitle}</TargetTitle>
    </Root>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default index;