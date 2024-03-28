import { Play } from "lucide-react";
import posterImg from "../../../assets/images/cybersecurity.jpg";
import { Modal } from "@mantine/core";
import { useState } from "react";
const SCVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className=" relative">
        <img className=" rounded-md" src={posterImg} alt="" />
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className=" bg-[#fc4f4f] p-3 rounded-full mx-auto cursor-pointer"
        >
          <Play color="#fff" />
        </button>
      </div>
      <div className="">
        <Modal.Root opened={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <Modal.Overlay backgroundOpacity={0.4} blur={3} />
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>
                <p className="text-md poppins-regular text-[#FC4F4F]">
                  {" "}
                  Mastering API Testing and Environment Management on Postman{" "}
                </p>
              </Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              <div>
                {" "}
                <iframe
                  className="w-[420px] h-[300px] md:w-[590px] md:h-[350px] rounded-lg lg:w-[590px] lg:h-[350px]"
                  src="https://www.youtube-nocookie.com/embed/GRhVP1-VRrM?si=tY0DaQ44qN9TfVN8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      </div>
    </div>
  );
};

export default SCVideo;
