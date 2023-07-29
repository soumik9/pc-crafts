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