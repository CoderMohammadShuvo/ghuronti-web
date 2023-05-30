import Home from '@/components/Home/Home'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
        <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <title>Ghuronti</title>
        </Head>
        <Home/>
    </>
   
  )
}

export default index
