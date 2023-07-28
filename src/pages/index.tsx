import Home from '@/views/Home/Home';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/Layout/Layout';
import type { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { IProduct } from '@/config/type';

type PageProps = {
  products: IProduct[];
}

const HomePage: NextPageWithLayout<PageProps> = ({ products }) => {
  return (
    <main>
      <Home products={products} />
    </main>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps<{
  products: IProduct[]
}> = async () => {
  const res = await fetch('https://pc-craft-server.vercel.app/api/v1/products')
  const data = await res.json();
  return { props: { products: data.data } }
}