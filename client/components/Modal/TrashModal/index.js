import React, { useState } from 'react'
import TrashIcon from '../../icons/Trash.icon';
import { 
  ModalTrigger,
  Root,
  Modal,
  ModalTitle,
  ActionGroup,
  ApproveButton,
  CancleButton,
  Item,
} from './style';

export default function TrashModal({ itemName, removeTrigger }) {

  const [open, setOpen] = useState(false);

  const handleTrigger = () => {
    setOpen(true);
  }

  const handleApprove = () => {
    // delete trigger
    removeTrigger();
    setOpen(false);
  }
  const handleCancle = () => {
    setOpen(false);
  }

  return (
    <Root>
      <ModalTrigger onClick={handleTrigger}>
        <TrashIcon />
      </ModalTrigger>
      {
        open &&
        <Modal>
          <ModalTitle>آیا مطمئنید که میخواهید <Item>{ itemName }</Item>  را حذف کنید؟</ModalTitle>
          <ActionGroup>
            <ApproveButton onClick={handleApprove}>بله</ApproveButton>
            <CancleButton onClick={handleCancle}>خیر</CancleButton>
          </ActionGroup>
        </Modal>
      }
    </Root>
  )
};

TrashModal.defaultProps = {
  itemName: 'آیتم',
  removeTrigger: function() {
    console.log('remove trigger not passed as props')
  }
}
