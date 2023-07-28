
import React from 'react'
import Banner from './components/Banner'
import FeaturedProducts from './components/FeaturedProducts'
import FeaturedCategories from './components/FeaturedCategories'
import { IProduct } from '@/config/type'

interface Props {
    products: IProduct[];
}

const Home = ({ products }: Props) => {
    return (
        <>
            <Banner />
            <FeaturedProducts />
            <FeaturedCategories />
        </>
    )
}

export default Home