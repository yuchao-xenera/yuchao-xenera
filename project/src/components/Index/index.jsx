import React from 'react'
import { Layout } from 'antd';

import SideBar from '../SideBar';
import Main from '../Main';


export default function Index() {
  return (
    <>
      <Layout>
        <SideBar/>
        <Main/>
      </Layout>
    </>
  )
}
