/* eslint-disable jsx-a11y/anchor-is-valid */
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Button from '../../Button/Button';
import styles from './PageButton.module.scss';

type PageButtonProps = {
  href: string,
  children: ReactNode,
}
const PageButton = ({ href, children }: PageButtonProps) => {
  const { asPath } = useRouter();

  return (
    <div className={classnames(styles.button, { [styles.active]: asPath === href })}>
      <Link href={href}>
        <a>
          <Button link>
            {children}
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default PageButton;
