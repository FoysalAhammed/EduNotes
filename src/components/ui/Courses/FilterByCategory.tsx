import { Checkbox } from "@mantine/core";

const CategoriesData = [
  "Cloud Computing",
  "Marketing",
  "Blockchain",
  "Cybersecurity",
  "Game Development",
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Programming",
];

const FilterByCategory = () => {
  return (
    <div className=" bg-gray-100 p-3 rounded-lg">
      <h1 className="text-xl poppins-semibold mb-5 text-[#001D25]">
        Filter by Categories
      </h1>
      <div>
        {CategoriesData.map((category, index) => (
          <div key={index} className="mb-2 poppins-regular">
            <Checkbox
              label={category}
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

export default FilterByCategory;
