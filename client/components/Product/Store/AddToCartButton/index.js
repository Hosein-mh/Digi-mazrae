import React, { useState, useEffect} from 'react';
import { Root, AddButton, SelectItems, SelectItemsContainer, ItemOption } from './style';
import { toFarsiNumber } from '../../../../utils/globalHelpers';

export default function index() {
  const [amountToBuy, setAmountToBuy] = useState(0);
  const [showHowMany, setShowHowMany] = useState(false);
  const handleAmountToBuy = (e) => {
    e.target.value == 0 && setAmountToBuy(0);
    setAmountToBuy(e.target.value);
    setShowHowMany(false);
  };

  return (
    <Root>
      <AddButton haveAmount={amountToBuy} onClick={() => setShowHowMany(true)}>
        {amountToBuy !== 0 ? `${toFarsiNumber(amountToBuy)} کیلو` : "+"}
      </AddButton>
      <SelectItemsContainer show={showHowMany} className={showHowMany && "show"}>
        <SelectItems>
          {
            amountToBuy ? <ItemOption value="0" onClick={handleAmountToBuy}><span>-</span>حذف</ItemOption> : ''
          }
          <ItemOption value="1" onClick={handleAmountToBuy}>1 کیلو</ItemOption>
          <ItemOption value="2" onClick={handleAmountToBuy}>2 کیلو</ItemOption>
          <ItemOption value="3" onClick={handleAmountToBuy}>3 کیلو</ItemOption>
          <ItemOption value="5" onClick={handleAmountToBuy}>5 کیلو</ItemOption>
          <ItemOption value="10" onClick={handleAmountToBuy}>10 کیلو</ItemOption>
        </SelectItems>
      </SelectItemsContainer>
    </Root>
  )
}
