import Layout from '@/components/Layout/Layout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { GetServerSideProps } from 'next';

type PageProps = {
    categoryQuery: string;
}

const CategoryBasePage: NextPageWithLayout<PageProps> = ({ categoryQuery }) => {
    console.log(categoryQuery);
    return (
        <main>

        </main>
    );
};

export default CategoryBasePage;

CategoryBasePage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { search } = context.query; // Get the searchId from the query parameters

    return {
        props: {
            categoryQuery: search,
        },
    };
};

// export const getStaticProps: GetStaticProps<{
//   products: IProduct[]
// }> = async () => {

//   // products data fetching
//   const resP = await fetch('https://pc-craft-server.vercel.app/api/v1/products')
//   const products = await resP.json();

//   // categories data fetching
//   const resC = await fetch('https://pc-craft-server.vercel.app/api/v1/categories')
//   const categories = await resC.json();

//   return {
//     props: {
//       products: products.data,
//       categories: categories.data,
//     }
//   }
// }