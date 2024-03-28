import { Checkbox } from "@mantine/core";

const LevelData = ["Beginner", "Intermediate", "Advanced"];
const FilterByLevel = () => {
  return (
    <div className=" bg-gray-100 p-3 rounded-lg">
      <h1 className="text-xl poppins-semibold mb-5 text-[#001D25]">
        Filter by Level
      </h1>
      <div>
        {LevelData.map((level, index) => (
          <div key={index} className="mb-2 poppins-regular ">
            <Checkbox
              label={level}
              size="md"
              color="#FC4F4F"
              iconColor="#fff"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByLevel;
