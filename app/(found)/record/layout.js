'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP } from './[id]/data';
import LayoutStructure from 'components/layout-structure';
import SegmentsBreadcrumbs from 'components/segment-breadcrumbs';

export default function Layout({ children }) {
    const pathname = usePathname();
    const segments = useSelectedLayoutSegments();
    const id = findIdByPathname(pathname);
    const { background } = RECORDS_MAP[id];
    
    return (
        <LayoutStructure 
          title={<SegmentsBreadcrumbs segments={segments} 
          startingSegment="/record" 
          segmentTitlesMap={SEGMENT_TITLES_MAP} />} 
          background={background}>
            <div className="flex flex-col items-center">{children}</div>
        </LayoutStructure>
    )
}