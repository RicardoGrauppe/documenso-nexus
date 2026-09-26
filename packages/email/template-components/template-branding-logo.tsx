import { Img, Link } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

export type TemplateBrandingLogoProps = {
  assetBaseUrl: string;
  className?: string;
};

/**
 * Renders the email logo.
 *
 * - When custom branding is enabled with a logo, the branding logo is shown.
 *   If a safe (http/https) Brand Website is configured, the logo links to it.
 * - Otherwise the Nexus logo (static/logo.png) is shown.
 *
 * Fork Nexus: os templates pedem h-6 (24 px), pequeno demais pra logo da Nexus;
 * aqui a altura sobe pra h-12 (48 px) sem precisar mexer nos 26 templates.
 */
export const TemplateBrandingLogo = ({ assetBaseUrl, className: rawClassName = 'mb-4 h-12' }: TemplateBrandingLogoProps) => {
  const branding = useBranding();

  const className = rawClassName.replace(/\bh-6\b/, 'h-12');

  const hasCustomBrandingLogo = branding.brandingEnabled && Boolean(branding.brandingLogo);

  if (!hasCustomBrandingLogo) {
    const documensoLogoUrl = new URL('/static/logo.png', assetBaseUrl).toString();

    return <Img src={documensoLogoUrl} alt="Nexus Creative Studio" className={className} />;
  }

  const brandingLogo = <Img src={branding.brandingLogo} alt="Nexus Creative Studio" className={className} />;

  const safeBrandingUrl = getSafeBrandingUrl(branding.brandingUrl);

  if (!safeBrandingUrl) {
    return brandingLogo;
  }

  return (
    <Link href={safeBrandingUrl} target="_blank">
      {brandingLogo}
    </Link>
  );
};

export default TemplateBrandingLogo;
