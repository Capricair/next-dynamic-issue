import dynamic from "next/dynamic"
import Head from "next/head"

const Test = dynamic(() => import("/components/test"))

function Homepage() {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <style jsx>{`
          body {
            margin: 0;
            background: #ccc;
          }
        `}</style>
      </Head>
      <div>
        <Test />
      </div>
    </>
  )
}

export default Homepage
