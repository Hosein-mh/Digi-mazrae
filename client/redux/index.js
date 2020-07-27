import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '../components/Loader/LoadingAnimation';

export default function ReduxProvider(props) {
  return (
    <Provider store={configureStore().store}>
      <PersistGate loading={<Loading loading={true}/>} persistor={configureStore().persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}