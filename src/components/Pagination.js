import Link from 'next/link';
import Router from 'next/router';
import { BLOG_COUNT } from '@/config/index';

export default function Pagination({ pagination }) {
  return (
    <div className="flex items-center gap-x-[3.2rem]">
      {(pagination.page > 1 || pagination.page === 1) && (
        <button
          className="h-[4rem] px-[1.6rem] rounded-[.4rem] cursor-pointer text-white font"
          onClick={() => Router.push(`/blog?page=${pagination.page - 1}`)}
          disabled={pagination.page <= 1}
        >
          <svg className="w-[2.4rem] h-[2.4rem] fill-green  hover:fill-purple rotate-180">
            <use href="/images/sprite.svg#icon-chevron" />
          </svg>
        </button>
      )}
      <p className="font-bold">{pagination.page}</p>
      {(pagination.page < pagination.total || pagination.page === pagination.total) && (
        <button
          className="h-[4.8rem] px-[1.6rem] rounded-[.4rem] cursor-pointer text-white"
          onClick={() => Router.push(`/blog?page=${pagination.page + 1}`)}
          disabled={pagination.pageSize === pagination.total}
        >
          <svg className="w-[2.4rem] h-[2.4rem] fill-green hover:fill-purple">
            <use href="/images/sprite.svg#icon-chevron" />
          </svg>
        </button>
      )}
    </div>
  );
}
