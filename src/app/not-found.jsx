import Link from "next/link";

const notFound = () => {
    return (
        <div>
            <h3>Page not found</h3>
            <p>Please return to the <Link href={'/'} className={'text-red-500 underline'}>Home Page</Link></p>
        </div>
    );
};

export default notFound;
