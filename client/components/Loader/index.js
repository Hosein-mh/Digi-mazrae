import React from 'react'
import { Root, DarkBehindModal, Modal } from './style';
import LoadingAnimation from './LoadingAnimation';
import CheckAnimation from './CheckAnimation';

export default function Loader({loading, completed, message}) {
  return (
    <Root>
      <DarkBehindModal>
        <Modal>
          {loading && <LoadingAnimation loading={loading} />}
          {completed && <CheckAnimation completed={completed} message={message} />}
        </Modal>
      </DarkBehindModal>
    </Root>
  )
}
