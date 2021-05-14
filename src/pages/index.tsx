import * as React from 'react'
import { Helmet } from 'react-helmet'
import { DefaultLayout } from 'src/components/layouts/default'
import { Head } from 'src/components/home/Head'
import { Section1 } from 'src/components/home/Section1'

const Home = () => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Landie - Homepage</title>
      </Helmet>
      <Head />
      <Section1 />
    </DefaultLayout>
  )
}

export default Home
