import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify 2.0 Clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Spotify 2.0 Clone App</h1>

      <main className="">
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
