import * as React from "react";
import { Link } from "gatsby";
import { Anchor, AnchorReferrerPolicy, AnchorRel } from "./Anchor";

//type LinkProps = React.HTMLProps<HTMLDivElement>

export type LinkTarget =
  | "_blank"
  | "blank"
  | "_parent"
  | "parent"
  | "_self"
  | "self"
  | "_top"
  | "top";

export interface WmkLinkProps {
  to?: string;
  target?: LinkTarget;
  children: React.ReactNode;
  mailto?: boolean;
  tel?: boolean;
  className?: string;
  label?: string;
  style?: React.CSSProperties;
  title?: string;
  wrapperStyle?: React.CSSProperties;
  role?: React.AriaRole;
  rel?: AnchorRel[];
  download?: true;
  hreflang?: string;
  referrerpolicy?: AnchorReferrerPolicy;
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
      title,
      wrapperStyle,
      role = "link",
      rel,
      download,
      hreflang,
      referrerpolicy
    }: WmkLinkProps,
    ref
  ) => {
    const mailToText = to || children;
    const _telText = to || children || "";
    const telText =
      typeof _telText === "string" ? _telText.replace(/\D/g, "") : _telText;
    return (
      <div ref={ref} style={{ display: `inline`, ...wrapperStyle }}>
        {target || mailto || tel ? (
          <Anchor
            style={style}
            to={mailto ? `mailto:${mailToText}` : tel ? `tel:${telText}` : to}
            target={target}
            className={className}
            label={label}
            title={title}
            role={role}
            rel={rel}
            download={download}
            hreflang={hreflang}
            referrerpolicy={referrerpolicy}>
            {children}
          </Anchor>
        ) : (
          <Link
            to={to}
            style={style}
            className={className}
            aria-label={label}
            title={title}
            role={role}>
            {children}
          </Link>
        )}
      </div>
    );
  }
);
