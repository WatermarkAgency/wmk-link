import * as React from "react";
import { wmkClass } from "./logic";
import CSS from "csstype";

export interface AnchorProps {
  onClick?: React.MouseEventHandler;
  to: string;
  id?: string;
  className?: string;
  target?: string;
  children?: React.ReactNode;
  style?: CSS.Properties;
  speed?: number;
  mailto?: boolean;
  tel?: boolean;
  animate?: boolean;
  rel?: string;
  label?: string;
  title?: string;
}

export const Anchor = ({
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
  label,
  title
}: AnchorProps) => {
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
      style={_style}
      aria-label={label}
      onClick={onClick}
      title={title}>
      {children}
    </a>
  );
};
