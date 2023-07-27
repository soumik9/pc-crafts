import Layout from '@/components/Layout/Layout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import PCBuild from '@/views/PCBuild/PCBuild';

const PcBuildPage: NextPageWithLayout = () => {
    return (
        <main>
            <PCBuild />
        </main>
    );
};

PcBuildPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default PcBuildPage;
