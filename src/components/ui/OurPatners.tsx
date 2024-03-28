import Container from "../../utils/Container";
import pHeroImg from "../../assets/icons/programminghero.jpg";
import lwsImg from "../../assets/icons/LWS.png";
import SLImg from "../../assets/icons/StackLearner.png";
import procoderImg from "../../assets/icons/ProcoderBD.jpg";
import jsMasteryImg from "../../assets/icons/JSMastery.png";
import progWithImg from "../../assets/icons/ProgrammingWithMosh.jpg";
import acImg from "../../assets/icons/ApnaCollege.png";
import thapaTechnical from "../../assets/icons/ThapaTechnical.jpg";
import { Tooltip } from "@mantine/core";

const OurPatnersData = [
  {
    id: "1",
    title: "Programming Hero",
    image: pHeroImg,
  },
  {
    id: "2",
    title: "Learn With Sumit (LWS)",
    image: lwsImg,
  },
  {
    id: "3",
    title: "Stack Learner",
    image: SLImg,
  },
  {
    id: "4",
    title: "ProcoderBD",
    image: procoderImg,
  },
  {
    id: "5",
    title: "JavaScript Mastery",
    image: jsMasteryImg,
  },
  {
    id: "6",
    title: "Programming With Mosh",
    image: progWithImg,
  },
  {
    id: "7",
    title: "Apna College",
    image: acImg,
  },
  {
    id: "8",
    title: "Thapa Technical",
    image: thapaTechnical,
  },
];

const OurPatners = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <Container>
        <div className="flex items-center justify-center lg:justify-between flex-wrap">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
            <h1 className="text-xl poppins-regular text-[#fc4f4f]">
              Our Partners
            </h1>
            <p className="text-3xl lg:text-5xl poppins-semibold text-[#001D25]">
              Learn with Our <span className=" text-[#FC4F4F]">Partners </span>
              Course
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5 lg:flex-1">
            {OurPatnersData.map((opd) => (
              <div key={opd.id}>
                <Tooltip
                  transitionProps={{ transition: "scale-x", duration: 500 }}
                  color="#FC4F4F"
                  position="top"
                  offset={4}
                  arrowOffset={11}
                  arrowSize={5}
                  withArrow
                  label={opd.title}
                >
                  <img
                    className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]  object-cover rounded-full cursor-pointer border border-gray-200"
                    src={opd.image}
                    alt=""
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurPatners;
