import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <div className="font-ranga text-4xl">404 - page not found</div>
            <div className="font-roboto text-2xl">Go back to the <Link className="link" href="/">Home</Link></div>
        </div>
    );
}