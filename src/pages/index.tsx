import Home from '@/views/Home/Home';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/Layout/Layout';
import type { ReactElement } from 'react';

const HomePage: NextPageWithLayout = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
