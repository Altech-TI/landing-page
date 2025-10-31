import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Term = () => {
  return (
    <Container>
      <ScrollToTop />
      <h1>Política de Privacidade</h1>
      <p>A Altech valoriza a privacidade de seus usuários. Esta política explica como coletamos, usamos e protegemos as informações fornecidas por meio de nossos serviços, incluindo integrações com o WhatsApp Business API.</p>
      <p>Os dados coletados são utilizados apenas para fins operacionais e não são compartilhados com terceiros sem autorização prévia.</p>
      <p>Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail: contato@altech.inf.br.</p>
      <p>Última atualização: Outubro de 2025.</p>
    </Container>
  );
};

export default Term;
