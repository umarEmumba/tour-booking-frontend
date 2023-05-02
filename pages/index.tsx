import Head from 'next/head'
import Header from '@/components/common/Header/Header'
import Container from '@/components/common/Container/Container'
import BackGroundImage from '@/components/common/BackGroundImage/BackGroundImage'
import Filters from '@/components/common/Filters/Filters'
import PopularSearches from '@/components/common/PopularSearches/PopularSearches'
import Tours from '@/components/Tours/Tours'

export default function Home() {
  return (
    <>
      <BackGroundImage />
      <Filters />
      <Container>
        <PopularSearches />
        <Tours />
      </Container>
    </>
  )
}
