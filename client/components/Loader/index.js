import React from 'react';
import { Root, DarkBehindModal, Modal } from './style';
import LoadingAnimation from './LoadingAnimation';
import CheckAnimation from './CheckAnimation';
import FailedAnimation from './FailedAnimation';

export default function Loader({
  loading, completed, error,
  loadingMessage, failureMessage,
  refreshStateTrigger, succeedMessage,
  afterSucceedTrigger,
}) {
  return (
    <Root>
      <DarkBehindModal>
        <Modal>
          {loading && <LoadingAnimation loading={loading} message={loadingMessage} />}
          {completed && <CheckAnimation completed={completed} message={succeedMessage} afterSucceedTrigger={afterSucceedTrigger} />}
          {error && <FailedAnimation message={failureMessage} refreshStateTrigger={refreshStateTrigger} />}
        </Modal>
      </DarkBehindModal>
    </Root>
  )
}

Loader.defaultProps = {
  loading: false,
  completed: false,
  error: false,
  refreshStateTrigger: function() {
    return;
  },
  afterSucceedTrigger: function() {
    return;
  },
  loadingMessage: 'لطفا منتظر بمانید',
  failureMessage: 'مشکلی پیش آمد، لطفا مجدد امتحان بفرمایید',
  succeedMessage: 'عملیات مورد نظر با موفقیت انجام شد',
};
