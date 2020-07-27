import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from "@emotion/core";
import PropTypes from 'prop-types';
import { Root, Message } from './style';

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Loader({ loading, loadingMessage }) {
  return (
    <Root>
      <PuffLoader
        css={override}
        size={150}
        color={"#000"}
        loading={loading}
      />
      <Message>{loadingMessage}</Message>
    </Root>
  )
}

Loader.prototype = {
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
};
Loader.defaultProps = {
  loading: false,
}

