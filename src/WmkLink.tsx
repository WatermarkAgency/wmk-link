import * as React from "react";
import { Link } from "gatsby";
import { Anchor } from "./Anchor";
import { CssStyles } from "./Anchor";

type wmkLinkProps = {
  to?: string;
  target?: string;
  children: React.ReactNode;
  mailto?: boolean;
  tel?: boolean;
  className?: string;
  label?: string;
  style?: CssStyles;
};

export const WmkLink = React.forwardRef(
  (
    {
      to,
      target,
      children,
      mailto,
      tel,
      style,
      className,
      label
    }: wmkLinkProps,
    ref
  ) => {
    if (target || mailto || tel) {
      return (
        <Anchor
          style={style}
          ref={ref}
          to={
            mailto
              ? `mailto:${to || children}`
              : tel
              ? `tel:${to || children}`
              : to
          }
          target={target}
          className={className}
          label={label}>
          {children}
        </Anchor>
      );
    } else {
      return (
        <Link
          ref={ref}
          to={to}
          style={style}
          className={className}
          aria-label={label}>
          {children}
        </Link>
      );
    }
  }
);
