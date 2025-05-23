import Link from 'next/link';

export default function SegmentsBreadcrumbs({ segments, startingSegment, segmentTitlesMap }) {
    return (
        <>
        {
          segments.map((segment, i) => {
            const href = `${startingSegment}/${segments.slice(0, i+1).join('/')}`;
            const isLastSegment = i === segments.length - 1;

            return (
                <span key={segment}>
                    {
                        isLastSegment ? segmentTitlesMap[segment] : (
                            <>
                              <Link href={href} className='link'>
                                 {segmentTitlesMap[segment]}
                              </Link>
                              <span>{' > '}</span>
                            </>
                            
                        )
                    }
                </span>
            ) 
          })
        }
        </>
    )
}