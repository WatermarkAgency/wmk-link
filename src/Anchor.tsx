import * as React from "react";
import { wmkClass } from "./logic";
import { LinkTarget } from "./WmkLink";

export type AnchorRel =
  | "alternate"
  | "author"
  | "bookmark"
  | "external"
  | "help"
  | "license"
  | "next"
  | "nofollow"
  | "noreferrer"
  | "noopener"
  | "prev"
  | "search"
  | "tag";

export type AnchorReferrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

export interface AnchorProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  to: string;
  id?: string;
  className?: string;
  target?: LinkTarget;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  speed?: number;
  mailto?: boolean;
  tel?: boolean;
  animate?: boolean;
  rel?: AnchorRel[];
  label?: string;
  title?: string;
  role?: React.AriaRole;
  download?: true;
  hreflang?: string;
  referrerpolicy?: AnchorReferrerPolicy;
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
  animate = true,
  rel,
  label,
  title,
  role,
  download,
  hreflang,
  referrerpolicy
}: AnchorProps) => {
  const _style = animate
    ? { transition: `all ${speed}s ease`, textDecoration: "none", ...style }
    : style;
  const _target = target ? "_" + target.replace("_", "") : undefined;
  const _rel =
    !rel && _target === "_blank"
      ? "noopener noreferrer"
      : Array.isArray(rel)
      ? rel.join(" ")
      : "";
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
      title={title}
      role={role}
      download={download ? download : undefined}
      hrefLang={hreflang}
      referrerPolicy={referrerpolicy}>
      {children}
    </a>
  );
};
