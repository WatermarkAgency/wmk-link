import { Link as GatsbyLink } from "gatsby";
import type { GatsbyLinkProps } from "gatsby";

// This is coming from Gatsby's internals: https://github.com/gatsbyjs/gatsby/blob/2975c4d1271e3da52b531ad2f49261c362e5ae13/packages/gatsby-link/src/index.js#L42-L46.
const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

export default function Link<TState>({
  children,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>>) {
  if (props.target === "_blank") {
    return (
      <a {...props} href={props.to} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  if (isExternalLink(props.to)) {
    return (
      <a {...props} href={props.to}>
        {children}
      </a>
    );
  }

  return <GatsbyLink<TState> {...props}>{children}</GatsbyLink>;
}
