import { Checkbox } from "@mantine/core";

const InstructorData = [
  "Md Foysal Ahammed",
  "Dr. Emily Johnson",
  "John Smith",
  "Dr. Michael Brown",
  "Sarah Johnson",
  "Dr. Christopher Lee",
  "Alex Turner",
  "Dr. Sophia Rodriguez",
  "Mark Thompson",
  "Dr. Rachel Williams",
  "James Carter",
  "Anna Davis",
  "David Wilson",
];
const FilterByInstructor = () => {
  return (
    <div className=" bg-gray-100 p-3 rounded-lg my-10">
      <h1 className="text-xl poppins-semibold mb-5 text-[#001D25]">
        Filter by Instructor
      </h1>
      <div>
        {InstructorData.map((instructor, index) => (
          <div key={index} className="mb-2 poppins-regular ">
            <Checkbox
              label={instructor}
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

export default FilterByInstructor;
