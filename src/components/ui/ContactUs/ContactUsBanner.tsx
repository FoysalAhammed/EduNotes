import Styles from "../../../styles/ContactUsBanner.module.css";
const ContactUsBanner = () => {
  return (
    <div className={`${Styles.CSBannerContainer} p-8 lg:p-12 rounded-lg text-white`}>
      <div className="flex items-center lg:justify-between flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-xl poppins-semibold">Get in Touch:</h1>
          <a
            className="text-md poppins-light"
            href="mailto:hanif.mia2233@gmail.com"
          >
            hanif.mia2233@gmail.com
          </a>
        </div>
        <div className="mt-20 text-center lg:text-left lg:mt-0">
          <h1 className="text-xl poppins-semibold">Call Us Via:</h1>
          <a className="text-md poppins-light" href="tell:+8801778821588">
            (+880) 778821588
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
