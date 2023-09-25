import { usePathname } from 'next/navigation'
import { useMemo } from 'react';

const useActiveURL = (href: string = "") => {
    const pathname = usePathname();

    return useMemo(() => {
        return pathname.indexOf(href) != -1 ? 'active' : ''
    }, [pathname, href])
}

export default useActiveURL;