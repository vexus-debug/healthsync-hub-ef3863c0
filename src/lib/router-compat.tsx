// Compatibility layer: lets the imported pages keep their react-router-style API on TanStack Router.
import * as React from "react";
import {
  Link as TLink,
  useNavigate as tUseNavigate,
  useParams as tUseParams,
  useLocation as tUseLocation,
  useRouter,
} from "@tanstack/react-router";

type To = string;

export const Link = React.forwardRef<HTMLAnchorElement, any>(function Link(
  { to, replace, state: _s, ...props },
  ref,
) {
  return <TLink ref={ref} to={to as any} replace={replace} {...props} />;
});

export interface NavLinkProps {
  to: To;
  end?: boolean;
  replace?: boolean;
  className?: string | ((s: { isActive: boolean; isPending: boolean }) => string | undefined);
  children?: React.ReactNode | ((s: { isActive: boolean; isPending: boolean }) => React.ReactNode);
  [key: string]: any;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { to, end, className, children, style, ...props },
  ref,
) {
  const { pathname } = tUseLocation();
  const target = String(to).split(/[?#]/)[0].replace(/\/$/, "") || "/";
  const cur = pathname.replace(/\/$/, "") || "/";
  const isActive = end || target === "/" ? cur === target : cur === target || cur.startsWith(target + "/");
  const s = { isActive, isPending: false };
  return (
    <TLink
      ref={ref}
      to={to as any}
      className={typeof className === "function" ? className(s) : className}
      style={typeof style === "function" ? style(s) : style}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {typeof children === "function" ? children(s) : children}
    </TLink>
  );
});

export function useNavigate() {
  const navigate = tUseNavigate();
  const router = useRouter();
  return React.useCallback(
    (to: To | number, opts?: { replace?: boolean; state?: unknown }) => {
      if (typeof to === "number") return router.history.go(to);
      if (/[?#]/.test(to)) return opts?.replace ? router.history.replace(to) : router.history.push(to);
      return navigate({ to: to as any, replace: opts?.replace });
    },
    [navigate, router],
  );
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>() {
  return (tUseParams as any)({ strict: false }) as T;
}

export function useLocation() {
  const loc = tUseLocation();
  return {
    pathname: loc.pathname,
    search: loc.searchStr ?? "",
    hash: loc.hash ? `#${loc.hash}` : "",
    state: (loc.state as any) ?? null,
    key: (loc.state as any)?.key ?? "default",
  };
}

export function useSearchParams() {
  const loc = tUseLocation();
  const router = useRouter();
  const params = React.useMemo(() => new URLSearchParams(loc.searchStr ?? ""), [loc.searchStr]);
  const setParams = React.useCallback(
    (
      next: URLSearchParams | Record<string, string> | ((p: URLSearchParams) => URLSearchParams | Record<string, string>),
      opts?: { replace?: boolean },
    ) => {
      const v = typeof next === "function" ? next(new URLSearchParams(loc.searchStr ?? "")) : next;
      const sp = v instanceof URLSearchParams ? v : new URLSearchParams(v);
      const qs = sp.toString();
      const href = loc.pathname + (qs ? `?${qs}` : "");
      opts?.replace ? router.history.replace(href) : router.history.push(href);
    },
    [loc.pathname, loc.searchStr, router],
  );
  return [params, setParams] as const;
}

export function Navigate({ to, replace }: { to: To; replace?: boolean }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(to, { replace });
  }, [to, replace, navigate]);
  return null;
}
