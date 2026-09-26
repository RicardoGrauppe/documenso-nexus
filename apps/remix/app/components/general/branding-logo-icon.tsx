import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/** Ícone da Nexus Creative Studio (mascote), no lugar do ícone da Documenso. */
export const BrandingLogoIcon = ({ className }: LogoProps) => {
  return <img src="/static/nexus-icon.png" alt="Nexus Creative Studio" className={className} />;
};
