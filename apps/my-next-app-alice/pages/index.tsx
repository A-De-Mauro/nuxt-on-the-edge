import type { NextPage, GetServerSideProps } from 'next'

import PageFooter from '../components/PageFooter'
import PageHead from '../components/PageHead'

import styles from '../styles/Home.module.css'
const Home: NextPage = ({ country }: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('alice-example', 'example of local storage')
  }

  return (
    <div className={styles.container}>
      <PageHead title={'Middleware and Serverless'} />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!!</h1>
        <h3 className={styles.description}>
          Your country is <strong>{country || 'localhost'}</strong>
        </h3>
        <h3>
          This is your ENV variable:{' '}
          <b>{process.env.NEXT_PUBLIC_ALICE_VARIABLE}</b>
        </h3>
        <div style={{ marginTop: 20 }}>
          {process.env.NEXT_PUBLIC_SHOW_LIST === 'yes' && (
            <form action="#">
              <input type="checkbox" id="ssr" name="ssr" value="ssr" />
              <label> Server-Side Rendering</label>
              <br />

              <input type="checkbox" id="ssg" name="ssg" value="ssg" />
              <label> Static-Site Generation</label>
              <br />

              <input type="checkbox" id="csr" name="csr" value="csr" />
              <label> Client-Side Rendering</label>
              <br />

              <input type="checkbox" id="isr" name="isr" value="isr" />
              <label> Incremental Static Generation</label>
              <br />

              <input type="checkbox" id="od-isr" name="od-isr" value="od-isr" />
              <label> On-Demand Incremental Static Generation</label>
              <br />

              <input type="submit" value="Submit" />
            </form>
          )}
        </div>
      </main>
      <PageFooter />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      country: context.query.country,
    },
  }
}

export default Home
