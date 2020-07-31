import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const CustomRoute = props => {
  const { isLoggedIn, protectedPath, requireAdmin, path, user, ...rest } = props;

  if (requireAdmin && !user.admin) {
    return (
      <Redirect 
        to={{
          pathname: "/",
          state: { from: props.path },
        }}
      />
    )
  } else if (protectedPath && !isLoggedIn) {
    return (
      <Redirect 
        to={{
          pathname: "/signin",
          state: { from: props.path },
        }}
      />
    )
  } else {
    return(
      <Route {...rest} />
    )
  }
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.succeed,
  user: state.user.data || { admin: false },
});

export default connect(
  mapStateToProps,
)(CustomRoute);