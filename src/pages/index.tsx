import * as React from 'react'
import { Helmet } from 'react-helmet'
import { DefaultLayout } from 'src/components/layouts/default'
import { Head } from 'src/components/home/Head'
import { Section1 } from 'src/components/home/Section1'
import { Section2 } from 'src/components/home/Section2'
import { Pricing } from 'src/components/home/Pricing'
import { Footer } from 'src/components/home/Footer'

const Home = () => {
  return (
    <DefaultLayout>
      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <title>Landie - Homepage</title>
        <meta name="description" content="Landie - A Simple Landing Page Developed for Learning/Showcasing Purposes" />
      </Helmet>
      <Head />
      <Section1 />
      <Section2 />
      <Pricing />
      <Footer />
    </DefaultLayout>
  )
}

export default Home
