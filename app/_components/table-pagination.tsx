"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from "react";

type Props = {
  total: number;
}

const TablePagination = ({total}: Props) => {
  // const pathname = usePathname();
  // const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 2;

  const [page, setPage] = useState(currentPage);
  const totalPages = total / pageSize
  const handleClick = (newPage:number) => {
    setPage(newPage);
  };

  return <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={() => handleClick(page - 1)} href={`/?page=${page - 1}`} />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext onClick={() => handleClick(page + 1)} href={`/?page=${page + 1}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
}

export default TablePagination