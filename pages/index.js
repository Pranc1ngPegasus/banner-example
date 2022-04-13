import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Banner Example</title>
        <meta name="description" content="Generated Banner Image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          バナー画像生成さん
        </h1>

        <p className={styles.description}>
          フォームにテキストを入力するとバナー画像が生成されます。
        </p>

        <div className={styles.grid}>
          <form action="/api/banner" method="post">
            <label htmlFor="text">Text: </label>
            <input type="text" id="text" name="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
