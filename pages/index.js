import Head from "next/head"
import styles from "./index.module.scss"

function Homepage() {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <div className={`${styles.container} container`}>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </div>
    </>
  )
}

export default Homepage
