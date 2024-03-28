import { Checkbox } from "@mantine/core";

const languageData = ["Bangla", "English", "Arabic", "Hindi", "Urdu"];

const FilterByLanguage = () => {
  return (
    <div className=" bg-gray-100 p-3 rounded-lg my-10">
      <h1 className="text-xl poppins-semibold mb-5 text-[#001D25]">
        Filter by Language
      </h1>
      <div>
        {languageData.map((language, index) => (
          <div key={index} className="mb-2 poppins-regular ">
            <Checkbox
              label={language}
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

export default FilterByLanguage;
