/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="/"><a className={styles.title}>Blog</a></Link>
    <ul>
      <li><Link href="/list/1"><a>Posts</a></Link></li>
      <li><Link href="/"><a>menu</a></Link></li>
      <li><Link href="/"><a>menu</a></Link></li>
    </ul>
  </nav>
);

export default Nav;
