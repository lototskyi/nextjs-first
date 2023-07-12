import Link from 'next/link';

const NewsPage = () => {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/next-js-is-a-great-framework">
                        NextJS IS A Great Framework
                    </Link>
                </li>
                <li>Something Else</li>
            </ul>
        </>
    );
};

export default NewsPage;
