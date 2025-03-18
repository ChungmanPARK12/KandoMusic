import Link from 'next/link';
import Player from './player';
import { RECORDS_MAP } from './data';

export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { id } = params;
    const { title } = RECORDS_MAP[id];

    return { title: `${title} - David Kando`};
}

export default function Page({ params }) {
  const { id } = params;

  // Safeguard to avoid undefined record
  const record = RECORDS_MAP[id];
  if (!record) {
    return <div>Record not found</div>;
  }

  const { date, blurb, Embed } = record;

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div className="text-sm text-slate-600">Release date: {date}</div>
      <div className="font-ranga flex justify-between w-[170px] text-1xl m-2 gap-3">
        <Link className="link" href={`/record/${id}/lyrics`}>Lyrics</Link>
        <Link href={`/record/${id}/gear`} className="whitespace-nowrap link">GearUsed</Link>
      </div>
      {Embed ? <Player embed={<Embed />} /> : <div>Embed not available</div>}
    </>
  );
}
