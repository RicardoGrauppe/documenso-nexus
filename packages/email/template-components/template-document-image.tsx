export interface TemplateDocumentImageProps {
  assetBaseUrl: string;
  className?: string;
}

/**
 * Fork Nexus: a ilustração genérica de documento saiu dos e-mails. Ela não
 * acrescenta nada, o Gmail mostra botão de download em cima dela e imagem
 * decorativa pesa contra na filtragem de spam. Os templates continuam chamando
 * o componente; ele só não renderiza nada.
 */
export const TemplateDocumentImage = (_props: TemplateDocumentImageProps) => {
  return null;
};

export default TemplateDocumentImage;
