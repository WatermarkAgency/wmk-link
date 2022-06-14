import * as React from "react";
import { GatsbyLinkProps, Link } from "gatsby";
import { Anchor, AnchorReferrerPolicy, AnchorRel } from "./Anchor";
import { GtmDataLayer, ToGtmDataLayer } from ".";

declare global {
  interface Window {
    dataLayer: GtmDataLayer;
  }
}

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
  id?: string;
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
  toDataLayer?: ToGtmDataLayer;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * Handles links to other pages within an app,
 * external links, or links to files.
 */
export const WmkLink = React.forwardRef<HTMLAnchorElement, WmkLinkProps>(
  (
    {
      onClick,
      to,
      target,
      children,
      mailto,
      tel,
      style,
      className,
      label,
      title,
      role = "link",
      rel,
      download,
      hreflang,
      referrerpolicy,
      toDataLayer,
      id
    }: WmkLinkProps,
    ref
  ) => {
    const [dataLayer, setDataLayer] = React.useState<GtmDataLayer>();
    const mailToText = to || children;
    const _telText = to || children || "";
    const telText =
      typeof _telText === "string" ? _telText.replace(/\D/g, "") : _telText;

    React.useEffect(() => {
      const currentDataLayer = window && window.dataLayer;
      if (toDataLayer && currentDataLayer) {
        setDataLayer(currentDataLayer);
      }
    }, [toDataLayer]);
    return target || mailto || tel ? (
      <Anchor
        id={id}
        ref={ref}
        onClick={
          onClick
            ? onClick
            : toDataLayer && dataLayer
            ? () => {
                dataLayer.push({
                  event: toDataLayer.event,
                  ...toDataLayer.params
                });
              }
            : undefined
        }
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
      <CustomGatsbyLink
        ref={ref}
        id={id}
        onClick={
          onClick
            ? onClick
            : toDataLayer && dataLayer
            ? () => {
                dataLayer.push({
                  event: toDataLayer.event,
                  ...toDataLayer.params
                });
              }
            : undefined
        }
        to={to}
        style={style}
        className={className}
        aria-label={label}
        title={title}
        role={role}>
        {children}
      </CustomGatsbyLink>
    );
  }
);

function CustomGatsbyLink(
  props: GatsbyLinkProps<Record<string, unknown>> & HTMLAnchorElement
) {
  return <Link {...props}>{props.children}</Link>;
}
