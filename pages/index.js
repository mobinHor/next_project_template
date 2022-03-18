import Head from 'next/head'
import HomePage from '../cotainers/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>آریل - سبدگردانی</title>
        <meta name="description" content="سبدگرانی آریل" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </div>
  )
}
