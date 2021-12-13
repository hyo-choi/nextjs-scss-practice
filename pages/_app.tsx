/* eslint-disable react/jsx-props-no-spreading */
import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: any) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
