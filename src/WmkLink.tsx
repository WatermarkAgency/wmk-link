import * as React from "react";
import { Link } from "gatsby";
import { Anchor } from "./Anchor";
import CSS from "csstype";

export interface WmkLinkProps {
  to?: string;
  target?: string;
  children: React.ReactNode;
  mailto?: boolean;
  tel?: boolean;
  className?: string;
  label?: string;
  style?: CSS.Properties;
  title?: string;
}

export const WmkLink = React.forwardRef<HTMLDivElement>(
  (
    {
      to,
      target,
      children,
      mailto,
      tel,
      style,
      className,
      label,
      title
    }: WmkLinkProps,
    ref
  ) => {
    const InnerJsx =
      target || mailto || tel
        ? () => (
            <Anchor
              style={style}
              to={
                mailto
                  ? `mailto:${to || children}`
                  : tel
                  ? `tel:${to || children}`
                  : to
              }
              target={target}
              className={className}
              label={label}
              title={title}>
              {children}
            </Anchor>
          )
        : () => (
            <Link
              to={to}
              style={style}
              className={className}
              aria-label={label}
              title={title}>
              {children}
            </Link>
          );
    return (
      <div ref={ref}>
        <InnerJsx />
      </div>
    );
  }
);
