import { ReactNode } from 'react';
import CommonHead from '../CommonHead';
import Nav from '../Nav/Nav';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <CommonHead />
    <Nav />
    <main className={styles.main}>
      {children}
    </main>
  </>
);

export default Layout;
