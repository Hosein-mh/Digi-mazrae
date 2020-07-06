import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from "@emotion/core";
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Loader({ loading }) {
  return (
    <Fragment>
      <PuffLoader
        css={override}
        size={150}
        color={"#000"}
        loading={loading}
      />
    </Fragment>
  )
}

Loader.prototype = {
  loading: PropTypes.bool
}
Loader.defaultProps = {
  loading: false
}

