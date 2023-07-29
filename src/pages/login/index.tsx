import Layout from '@/components/Layout/Layout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Login from '@/views/Auth/Login';

const LoginPage: NextPageWithLayout = () => {
    return (
        <main>
            <Login />
        </main>
    );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};