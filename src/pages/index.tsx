import * as React from 'react'
import { Helmet } from 'react-helmet'
import { DefaultLayout } from 'src/components/layouts/default'
import { Head } from 'src/components/home/Head'

const Home = () => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Landie - Homepage</title>
      </Helmet>
      <Head />
    </DefaultLayout>
  )
}

export default Home
