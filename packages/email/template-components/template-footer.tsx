import { Fragment } from 'react';

import { Link, Section, Text } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

export type TemplateFooterProps = {
  isDocument?: boolean;
  reportUrl?: string;
};

/**
 * Fork Nexus: sem o aviso "Did not expect this email? Click here to report the
 * sender" e sem o "This document was sent using Documenso". O rodapé fica só com
 * os dados da marca. isDocument e reportUrl continuam na assinatura pra não
 * mexer nos templates que passam essas props.
 */
export const TemplateFooter = (_props: TemplateFooterProps) => {
  const branding = useBranding();

  const safeBrandingUrl = branding.brandingEnabled ? getSafeBrandingUrl(branding.brandingUrl) : null;

  return (
    <Section>
      {branding.brandingEnabled && branding.brandingCompanyDetails && (
        <Text className="my-8 text-muted-foreground text-sm">
          {branding.brandingCompanyDetails.split('\n').map((line, idx) => {
            return (
              <Fragment key={idx}>
                {idx > 0 && <br />}
                {line}
              </Fragment>
            );
          })}
        </Text>
      )}

      {branding.brandingEnabled && safeBrandingUrl && (
        <Text className="my-8 text-muted-foreground text-sm">
          <Link href={safeBrandingUrl} target="_blank">
            {safeBrandingUrl}
          </Link>
        </Text>
      )}

      {!branding.brandingEnabled && (
        <Text className="my-8 text-muted-foreground text-sm">
          Nexus Creative Studio
          <br />
          <Link href="https://nexusforyou.com" target="_blank">
            nexusforyou.com
          </Link>
        </Text>
      )}
    </Section>
  );
};

export default TemplateFooter;
