// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_LOCALE = 'en';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace(`/${DEFAULT_LOCALE}`);
    }, [router]);

    return (
        <noscript>
            <meta httpEquiv="refresh" content={`0;url=/${DEFAULT_LOCALE}`} />
        </noscript>
    );
}