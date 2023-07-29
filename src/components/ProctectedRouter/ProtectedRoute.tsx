import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { homeUrl } from '@/config/constants';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {

    // global
    const router = useRouter();
    const { data: session } = useSession();

    // checking is logged?
    useEffect(() => {
        if (!session?.user?.email) {
            router.push(homeUrl)
        }
    }, [session?.user?.email, router]);

    // if not logged
    if (!session?.user?.email) return <div className='flex justify-center items-center h-[150px]'>Loading...</div>

    // if logged
    return children;
}

export default ProtectedRoute