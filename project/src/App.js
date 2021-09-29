import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import MyHeader from './components/Header'
import Index from './components/Index'
import { Provider } from 'react-redux'
import store from './redux/store';


export default function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <MyHeader />
          <Index />
        </Layout>
      </Provider>
    </>
  )
}
