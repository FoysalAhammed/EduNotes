import { Link } from "react-router-dom";
import logoImg from "../../assets/images/Logo.png";
import { AlignJustify } from "lucide-react";
import { Drawer } from "@mantine/core";
import { useState } from "react";
import Container from "../../utils/Container";

export default function Nabvar() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-green-100 shadow">
      <Container>
        <div className="flex items-center justify-between p-3">
          <Link to="/" className="flex items-center">
            <img
              className="w-[40px] h-[40px] object-cover"
              src={logoImg}
              alt="Website Logo"
            />
            <h1 className="text-xl ml-1 poppins-regular">EduNotes</h1>
          </Link>
          <div className="flex items-center justify-between">
            <div className="hidden md:block lg:block">
              <Link
                className="text-lg poppins-light mr-[5rem] cursor-pointer hover:text-[#F56565]"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-lg poppins-light mr-[5rem] cursor-pointer hover:text-[#F56565]"
                to="/courses"
              >
                Courses
              </Link>
              <Link
                className="text-lg poppins-light mr-[5rem] cursor-pointer hover:text-[#F56565]"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-lg poppins-light mr-[5rem] cursor-pointer hover:text-[#F56565]"
                to="/contact-us"
              >
                Contact Us
              </Link>
              <Link
                className="text-lg poppins-light mr-[5rem] cursor-pointer border p-3 bg-[#F56565] text-white rounded-lg"
                to="/sign-in"
              >
                Register
              </Link>
            </div>
            <div className=" block lg:hidden md:hidden">
              <Drawer.Root
                opened={opened}
                onClose={() => setOpened(false)}
                position="right"
                size="xs"
              >
                <Drawer.Overlay backgroundOpacity={0.2} blur={2} />
                <Drawer.Content>
                  <Drawer.Header>
                    <div className=" border-b-2 w-full flex items-center pb-2 border-green-50">
                      <Drawer.Title>
                        <div className="flex items-center">
                          <img
                            className="w-[30px] h-[30px] object-cover"
                            src={logoImg}
                            alt="Website Logo"
                          />
                          <h1 className="text-lg poppins-regular ml-1">
                            EduNotes
                          </h1>
                        </div>
                      </Drawer.Title>
                      <Drawer.CloseButton />
                    </div>
                  </Drawer.Header>
                  <Drawer.Body>
                    {" "}
                    <div>
                      <Link
                        className="text-lg poppins-light cursor-pointer hover:text-[#F56565] block"
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="text-lg poppins-light mt-1 cursor-pointer hover:text-[#F56565] block"
                        to="/courses"
                      >
                        Courses
                      </Link>
                      <Link
                        className="text-lg poppins-light mt-1 cursor-pointer hover:text-[#F56565] block"
                        to="/blogs"
                      >
                        Blogs
                      </Link>
                      <Link
                        className="text-lg poppins-light mt-1 cursor-pointer hover:text-[#F56565] block"
                        to="/contact-us"
                      >
                        Contact Us
                      </Link>
                      <hr className="my-3 border border-gray-100" />
                      <Link
                        className="text-lg poppins-light cursor-pointer border p-2 text-center bg-[#F56565] text-white rounded-lg block"
                        to="/sign-in"
                      >
                        Register
                      </Link>
                    </div>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Root>

              <button onClick={() => setOpened(true)}>
                <AlignJustify size={20} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
