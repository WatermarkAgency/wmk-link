import * as React from "react";
import { Link } from "gatsby";
import { Anchor } from "./Anchor";
import CSS from "csstype";

//type LinkProps = React.HTMLProps<HTMLDivElement>

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

export const WmkLink = React.forwardRef<HTMLDivElement, WmkLinkProps>(
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
    return (
      <div ref={ref}>
        {target || mailto || tel ? (
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
        ) : (
          <Link
            to={to}
            style={style}
            className={className}
            aria-label={label}
            title={title}>
            {children}
          </Link>
        )}
      </div>
    );
  }
);
