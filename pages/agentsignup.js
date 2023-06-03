import Head from 'next/head'
import React from 'react'
import AgentSignup from '../components/Signup/AgentSignUp/AgentSignUp'
const agentsignup = () => {
  return (
    <>
    <Head>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <title>Ghuronti</title>
    </Head>
    <AgentSignup />
</>
  )
}

export default agentsignup
