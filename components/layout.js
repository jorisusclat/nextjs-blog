import Head from 'next/head';
import Image from 'next/image';
import scss from '../scss/layout.module.scss';
import utilscss from '../scss/utils.module.scss';
import Link from 'next/link';

const name = 'Joris USCLAT';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={scss.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={scss.header}>
        {home ? (
          <>
            <Image
              priority /* LCP, nextjs prioritize the image for loading */
              src="/images/profile.jpg"
              className={utilscss.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilscss.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority /* LCP, nextjs prioritize the image for loading */
                  src="/images/profile.jpg"
                  className={utilscss.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilscss.headingLg}>
              <Link href="/">
                <a className={utilscss.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={scss.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
