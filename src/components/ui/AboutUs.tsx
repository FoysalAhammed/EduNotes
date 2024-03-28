import Container from "../../utils/Container";
import ImgOne from "../../assets/images/BImgOne.jpg";
import ImgTwo from "../../assets/images/BImgTwo.jpg";
import { CheckSquare, Play } from "lucide-react";
import { useState } from "react";
import { Modal } from "@mantine/core";

const AboutUs = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mt-32 lg:mt-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto">
          <div className=" relative">
            <img
              className=" relative w-[450px] h-[400px] object-cover rounded-xl opacity-85"
              src={ImgOne}
              alt=""
            />
            <div className=" absolute top-[-60px] right-[20px] lg:top-[-60px] lg:right-[50px]  shadow-lg p-2 bg-green-100 rounded-lg">
              <img
                className="w-[200px] h-[150px] object-cover rounded-lg opacity-75"
                src={ImgTwo}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                className=" bg-[#fc4f4f] p-3 rounded-full mx-auto cursor-pointer"
              >
                <Play color="#fff" onClick={() => setOpened(true)} />
              </div>
            </div>
            {opened && (
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                centered
                size="sm"
                overlayProps={{
                  backgroundOpacity: 0.55,
                  blur: 3,
                }}
              >
                <div>
                  <iframe
                    width="350"
                    height="300"
                    src="https://www.youtube.com/embed/gazPXi8IMg4?si=MdA8aJlWuG9gTR2j"
                    title="Programming Crear"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </Modal>
            )}
          </div>
          <div className=" mt-10 lg:mt-0">
            <div className="mb-5">
              <h1 className="text-xl poppins-regular text-[#fc4f4f] mb-2">
                About Us
              </h1>
              <p className="text-4xl poppins-semibold text-[#001D25]">
                Learn & Grow Your Skills From{" "}
                <span className="text-[#fc4f4f]">Anywhere.</span>
              </p>
            </div>
            <div>
              <p className=" text-md poppins-light pr-8">
                Learning and growing your skills is vital for personal and
                professional advancement. It involves continuous improvement
                through acquiring new knowledge, honing existing abilities, and
                adapting to change. Embracing a mindset of lifelong learning
                enables individuals to stay relevant, innovate, and achieve
                their goals.
              </p>
            </div>
            <div className="mt-5">
              <div className="flex items-center mb-3">
                <CheckSquare size={20} color="#fc4f4f" />
                <p className=" text-md poppins-light ml-2">Expert Trainers</p>
              </div>
              <div className="flex items-center mb-3">
                <CheckSquare size={20} color="#fc4f4f" />
                <p className=" text-md poppins-light ml-2">
                  Online Remote Learning
                </p>
              </div>
              <div className="flex items-center">
                <CheckSquare size={20} color="#fc4f4f" />
                <p className=" text-md poppins-light ml-2">Lifetime Access</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
