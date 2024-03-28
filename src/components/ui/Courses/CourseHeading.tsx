import { Select } from "@mantine/core";
import { Grip, Menu } from "lucide-react";

interface CToggleProps {
  setToggleButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseHeading: React.FC<CToggleProps> = ({ setToggleButton }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-lg poppins-medium">
            <span className="text-[#FC4F4F]">10</span> of{" "}
            <span className="text-[#FC4F4F]">40</span> courses
          </h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <button onClick={() => setToggleButton(false)}>
              {" "}
              <Menu color="#001D25" />
            </button>
            <button onClick={() => setToggleButton(true)} className="ml-2">
              {" "}
              <Grip color="#001D25" />
            </button>
          </div>
          <div className="ml-3">
            <Select
              size="sm"
              placeholder="Filters"
              data={["Low To High", "High To Low"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeading;
