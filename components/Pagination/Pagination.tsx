import styles from './Pagination.module.scss';
import PageButton from './PageButton/PageButton';

type PaginationProps = {
  path: string,
  start: number,
  end: number,
  prev?: boolean,
  next?: boolean,
};

const Pagination = ({
  path, start, end, prev, next,
}: PaginationProps) => {
  const pages = Array(end - start + 1).fill(start).map((value, idx) => value + idx);
  return (
    <div className={styles.pagination}>
      {prev && <PageButton href={`${path}/${start - 1}`}>PREV</PageButton>}
      {pages.map((page) => <PageButton key={page} href={`${path}/${page}`}>{page}</PageButton>)}
      {next && <PageButton href={`${path}/${end + 1}`}>NEXT</PageButton>}
    </div>
  );
};

Pagination.defaultProps = {
  prev: false,
  next: false,
};

export default Pagination;
