import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper' style={{minHeight: window.innerHeight - 101}}>
      {props.children}
    </div>
    <Footer />
    <Messages />
  </div>
)