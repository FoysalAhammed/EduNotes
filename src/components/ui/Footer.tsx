import Styles from "../../styles/Footer.module.css";
import Container from "../../utils/Container";
import FooterInfo from "./Footer/FooterInfo";
import FooterUsefulLinks from "./Footer/FooterUsefulLinks";
import FooterLinks from "./Footer/FooterLinks";
import FooterInput from "./Footer/FooterInput";
import CopyrightInfo from "./Footer/CopyrightInfo";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-20">
      <div className={`${Styles.FooterContainer} py-10`}>
        <Container>
          <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <FooterInfo />
            <FooterUsefulLinks />
            <FooterLinks />
            <FooterInput />
          </div>
          <CopyrightInfo />
        </Container>
      </div>
    </div>
  );
};

export default Footer;
