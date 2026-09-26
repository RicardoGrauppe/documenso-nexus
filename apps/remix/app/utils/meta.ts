import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

// Fork Nexus: título, descrição e prévia de link com a marca da Nexus. A prévia
// é o que aparece quando o link de assinatura é mandado pelo WhatsApp.
const BRAND = 'Nexus Creative Studio';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description = 'Review and sign documents securely with Nexus Creative Studio.';

  return [
    {
      title: title ? `${i18n._(title)} - ${BRAND}` : BRAND,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'author',
      content: BRAND,
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
    {
      property: 'og:title',
      content: BRAND,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg?v=nexus1`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg?v=nexus1`,
    },
  ];
};
