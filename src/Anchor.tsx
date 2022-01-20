import * as React from "react";
import { wmkClass } from "./logic";

export interface CssStyles {
  [StandardLonghandProperties: string]: string | number | {};
}

type anchorProps = {
  onClick?: React.MouseEventHandler;
  to: string;
  id?: string;
  className?: string;
  target?: string;
  children?: React.ReactNode;
  style?: CssStyles;
  speed?: number;
  mailto?: boolean;
  tel?: boolean;
  animate?: boolean;
  rel?: string;
  label?: string;
};

export const Anchor = React.forwardRef<HTMLAnchorElement>(
  (
    {
      onClick,
      to,
      id,
      className,
      target,
      children,
      style,
      speed = 0.3,
      mailto,
      tel,
      animate,
      rel,
      label
    }: anchorProps,
    ref
  ) => {
    const _style = animate
      ? { ...style, transition: `all ${speed}s ease` }
      : style;
    const _target = target ? "_" + target.replace("_", "") : null;
    const _rel = _target === "_blank" ? "noopener noreferrer" : rel;
    const prefix = tel ? "tel:" : mailto ? "mailto:" : "";
    const _to = tel ? to.replace(/\D/g, "") : to;
    const _link = tel ? "tel" : mailto ? "mailto" : "anchor";
    return (
      <a
        href={prefix + _to}
        id={id ? id : undefined}
        className={wmkClass(_link, "link", className)}
        target={_target}
        rel={_rel}
        ref={ref}
        style={_style}
        aria-label={label}
        onClick={onClick}>
        {children}
      </a>
    );
  }
);
