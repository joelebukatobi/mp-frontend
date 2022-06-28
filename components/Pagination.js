import Link from 'next/link';
import Router from 'next/router';
import { BLOG_COUNT } from '@/config/index';

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / BLOG_COUNT);
  return (
    <>
      {(page > 1 || page === 1) && (
        <button
          className="h-[4.8rem] px-[1.6rem] bg-green rounded-[.4rem] cursor-pointer text-white font"
          onClick={() => Router.push(`/blog?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
      )}
      <p>{page}</p>
      {(page < lastPage || page === lastPage) && (
        <button
          className="h-[4.8rem] px-[1.6rem] bg-green rounded-[.4rem] cursor-pointer text-white"
          onClick={() => Router.push(`/blog?page=${page + 1}`)}
          disabled={page === lastPage}
        >
          Next
        </button>
      )}
    </>
  );
}
