/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styles from './PageButton.module.scss';

type PageButtonProps = {
  href: string,
  children: ReactNode,
}
const PageButton = ({ href, children }: PageButtonProps) => {
  const { asPath } = useRouter();

  return (
    <div className={classNames(styles.button, { [styles.active]: asPath === href })}>
      <Link href={href}>
        <a>
          <div>
            {children}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PageButton;
