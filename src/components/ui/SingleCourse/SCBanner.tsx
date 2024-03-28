import { Globe, Star, UsersRound } from "lucide-react";
import Container from "../../../utils/Container";
import Styles from "../../../styles/SCBanner.module.css"

export default function SCBanner() {
  return (
    <div className=" bg-[#F5F9FA] py-16">
      <Container>
        <div className=" relative">
          <h1 className={`text-3xl lg:text-4xl poppins-bold text-[#001D25] ${Styles.SCBTitle}`}>
            Starting SEO as your Home Based Business
          </h1>
        </div>
        <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between  mt-12">
          <div className="flex items-center">
            <UsersRound color="#FC4F4F" size={20} />
            <p className="text-lg poppins-regular ml-2">by Jane Seymour</p>
          </div>
          <div className="flex items-center my-2 lg:my-0">
            <Globe color="#FC4F4F" size={20} />
            <p className="text-lg poppins-regular ml-2">English</p>
          </div>
          <div className=" flex items-center">
            <Star color="#F8B81F" />
            <Star color="#F8B81F" />
            <Star color="#F8B81F" />
            <Star color="#F8B81F" />
            <p className="text-lg poppins-regular ml-2">(8 Rating)</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
