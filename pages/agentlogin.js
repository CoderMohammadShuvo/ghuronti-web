import Head from 'next/head'
import React from 'react'
import AgentLoginMain from '../components/Login/AgentLogin/AgentLogin';
const agentlogin = () => {
  return (
    <div>
    <Head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <title>Ghuronti</title>
    </Head>
    <AgentLoginMain/>
  </div>
  )
}

export default agentlogin
