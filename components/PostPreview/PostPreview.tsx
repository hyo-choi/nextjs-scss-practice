/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './PostPreview.module.scss';

type PostPreviewProps = {
  title: string,
  body: string,
  href: string,
  imgSrc?: string,
  inPost?: boolean,
};

const PostPreview = ({
  title, body, href, imgSrc, inPost,
}: PostPreviewProps) => (
  <article className={styles.preview}>
    <Link href={href}>
      <a>
        <div className={classNames(styles.content, {
          [styles.withImage]: imgSrc, [styles.inPost]: inPost,
        })}
        >
          {inPost ? <h3>{title}</h3> : <h2>{title}</h2>}
          <p>{body}</p>
        </div>
        {imgSrc && <div className={styles.image}><Image src={imgSrc} alt={title} width="100" height="100" /></div>}
      </a>
    </Link>
  </article>
);

PostPreview.defaultProps = {
  imgSrc: null,
  inPost: false,
};

export default PostPreview;
