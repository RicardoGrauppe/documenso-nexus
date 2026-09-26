import { cn } from '@documenso/ui/lib/utils';
import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Logo da Nexus Creative Studio (fork da Documenso).
 *
 * Mantém a assinatura de props do componente original (SVGAttributes) para não
 * mexer nos lugares que o usam: o className (tamanho e visibilidade) vai no
 * wrapper, e dentro dele a versão colorida aparece no tema claro e a branca no
 * escuro.
 */
export const BrandingLogo = ({ className }: LogoProps) => {
  return (
    <span className={cn('inline-block', className)} style={{ lineHeight: 0 }}>
      <img
        src="/static/nexus-logo.png"
        alt="Nexus Creative Studio"
        className="h-full max-h-[inherit] w-auto dark:hidden"
      />
      <img
        src="/static/nexus-logo-white.png"
        alt="Nexus Creative Studio"
        className="hidden h-full max-h-[inherit] w-auto dark:block"
      />
    </span>
  );
};
