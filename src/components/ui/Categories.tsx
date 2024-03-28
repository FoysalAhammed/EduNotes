import CategoryCard from "../../libs/CategoryCard";
import Container from "../../utils/Container";
import artAndDesign from "../../assets/icons/art-and-design.png";
import businessManagement from "../../assets/icons/business-management.png";
import computerAndScience from "../../assets/icons/computer-and-science.png";
import dataScience from "../../assets/icons/data-science.png";
import financeManagement from "../../assets/icons/finance-management.png";
import healthAndFitness from "../../assets/icons/health-and-fitness.png";
import marketing from "../../assets/icons/marketing.png";
import personalDevelopment from "../../assets/icons/personal-development.png";
import videoAndPhotography from "../../assets/icons/video-and-photography.png";

const categoryData = [
  {
    id: "1",
    name: "Personal Development",
    image: personalDevelopment,
  },
  {
    id: "2",
    name: "Arts & Design",
    image: artAndDesign,
  },
  {
    id: "3",
    name: "Data Science",
    image: dataScience,
  },
  {
    id: "4",
    name: "Businees Management",
    image: businessManagement,
  },
  {
    id: "5",
    name: "Health & Fitness",
    image: healthAndFitness,
  },
  {
    id: "6",
    name: "Marketing",
    image: marketing,
  },
  {
    id: "7",
    name: "Computer Science",
    image: computerAndScience,
  },
  {
    id: "8",
    name: "Video & Photography",
    image: videoAndPhotography,
  },
  {
    id: "9",
    name: "Finance Management",
    image: financeManagement,
  },
];

export type TCategory = {
  id: string;
  name: string;
  image: string;
};

const Categories = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-xl poppins-regular text-[#fc4f4f]">
            Top Categories
          </h1>
          <p className="text-4xl poppins-semibold text-[#001D25]">
            Online <span className="text-[#fc4f4f]">Classes</span> For Remote Learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {categoryData.map((category: TCategory, index: number) => (
            <CategoryCard category={category} key={category.id} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
