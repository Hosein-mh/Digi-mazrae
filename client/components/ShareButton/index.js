import React, { useState } from 'react';
import { ShareModal, TriggerButton } from './style';
import {
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import ShareIcon from '../icons/Share.icon';
import CloseModal from '../user/Login/CloseModal';
import { useRouteMatch } from 'react-router';

export default function ShareButton() {
  const [openModal, setOpenModal] = useState(false);
  const { url } = useRouteMatch();
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <TriggerButton onClick={handleModal} id="triggerBUtton">
        <ShareIcon />
      </TriggerButton>
      <ShareModal isOpen={openModal} className={openModal && 'open'}>
        <CloseModal closeHandler={closeModalHandler} />
        <WhatsappShareButton url={`digimazrae.com${url}`}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </ShareModal>
    </>
  )
}
