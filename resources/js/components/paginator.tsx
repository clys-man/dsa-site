import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { LengthAwarePaginator } from "@/types";

interface PaginatorProps {
    paginator: LengthAwarePaginator<any>;
}

export function Paginator({ paginator }: PaginatorProps) {
    const {
        prev_page_url: prevPageUrl,
        next_page_url: nextPageUrl,
        links,
        last_page: lastPage,
        current_page: currentPage
    } = paginator;

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={prevPageUrl || '#'}
                        disabled={!prevPageUrl}
                    />
                </PaginationItem>

                {links.map((link, index) => {
                    if (link.label === 'pagination.previous' || link.label === 'pagination.next') {
                        return null;
                    }

                    const pageNumber = Number(link.label);

                    if (pageNumber === 1 || pageNumber === lastPage) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href={link.url || '#'}
                                    isActive={link.active}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    }

                    if (
                        pageNumber >= currentPage - 2 &&
                        pageNumber <= currentPage + 2
                    ) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href={link.url || '#'}
                                    isActive={link.active}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    }

                    if (pageNumber === 2 && currentPage - 2 > 2) {
                        return <PaginationEllipsis key={index} />;
                    }

                    if (pageNumber === lastPage - 1 && currentPage + 2 < lastPage - 1) {
                        return <PaginationEllipsis key={index} />;
                    }

                    return null;
                })}

                <PaginationItem>
                    <PaginationNext
                        href={nextPageUrl || '#'}
                        disabled={!nextPageUrl}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
