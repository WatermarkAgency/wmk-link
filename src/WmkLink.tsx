import * as React from "react";
import Link from './GatsbyLink'
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
      label,
      title
    }: WmkLinkProps,
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
          label={label}
          title={title}>
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
          aria-label={label}
          title={title}>
          {children}
        </Link>
      );
    }
  }
);
