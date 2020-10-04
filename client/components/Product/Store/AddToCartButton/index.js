import React, { useState, useEffect} from 'react';
import { Root, AddButton, SelectItems, SelectItemsContainer, ItemOption } from './style';
import { toFarsiNumber } from '../../../../utils/globalHelpers';

export default function index() {
  const [amount, setAmount] = useState(0);
  const [showHowMany, setShowHowMany] = useState(false);
  const handleAmountToBuy = (e) => {
    setAmount(e.target.value);
    setShowHowMany(false);
  };

  return (
    <Root>
      <AddButton haveAmount={amount} onClick={() => setShowHowMany(true)}>
        {amount !== 0 ? `${toFarsiNumber(amount)} کیلو` : "+"}
      </AddButton>
      <SelectItemsContainer show={showHowMany} className={showHowMany && "show"}>
        <SelectItems>
          <ItemOption value="0" onClick={handleAmountToBuy}><span>-</span>حذف</ItemOption>
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
