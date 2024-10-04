import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Para,
  Large,
  Chat,
  Language,
} from "./styles";


const Footer = ({ t }: { t: TFunction }) => {
  
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contato")}</Language>
              <Large to="/">{t("Fale conosco")}</Large>
              <Para>
                {t(`Tem alguma dúvida? Sinta-se à vontade para entrar em contato.`)}
              </Para>
              <a href="mailto:suporte@altech.inf.br">
                <Chat>{t(`Vamos conversar`)}</Chat>
              </a>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
