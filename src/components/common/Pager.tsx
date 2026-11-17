import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PAGE_SIZE = 50;

export function usePaged<T>(items: T[], resetKey: unknown) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  useEffect(() => setPage(1), [resetKey]);
  const current = Math.min(page, pages);
  const slice = items.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  return { page: current, pages, setPage, slice, total: items.length };
}

export function Pager({ page, pages, setPage, total }: { page: number; pages: number; setPage: (n: number) => void; total: number }) {
  if (total <= PAGE_SIZE) return null;
  const start = (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, total);
  return (
    <div className="flex items-center justify-between gap-2 p-3 border-t">
      <p className="text-xs text-muted-foreground">{start}–{end} of {total}</p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <span className="text-xs text-muted-foreground">Page {page} of {pages}</span>
        <Button variant="outline" size="sm" disabled={page >= pages} onClick={() => setPage(page + 1)}>
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
