import React from 'react'
import { useSession } from 'next-auth/react';

type Props = {}

const ProtectedRoute = (props: Props) => {

    const { data: session } = useSession();

    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute