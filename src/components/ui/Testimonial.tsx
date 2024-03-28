import Container from "../../utils/Container";
import TestimonialImg from "../../assets/images/TestimonialImg.jpg";
import getAllTestimonial from "../../data/TestimonialData";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = getAllTestimonial();

  return (
    <div className="mt-16 lg:mt-24">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-xl poppins-regular text-[#fc4f4f]">
            Testimonials
          </h1>
          <p className="text-4xl poppins-semibold text-[#001D25]">
            What Our <span className=" text-[#FC4F4F]">Students</span> Have To
            Say
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
          <div className=" rounded-lg p-2">
            <img
              className="h-[300px] w-full object-cover"
              src={TestimonialImg}
              alt=""
            />
          </div>
          <div>
            <SwiperComponent
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              modules={[EffectFlip, Pagination]}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <SwiperSlide key={testimonial.id}>
                    <div className="border border-gray-200 rounded-lg p-8 flex items-center justify-center flex-col shadow-xl cursor-pointer">
                      <div>
                        <img
                          className="w-[100px] h-[100px] rounded-full border object-cover"
                          src={testimonial.image}
                          alt=""
                        />
                      </div>
                      <h1 className="text-md poppins-regular text-center my-4">
                        {testimonial.review}
                      </h1>
                      <div className="text-center">
                        <h1 className="text-xl poppins-semibold">
                          {testimonial.name}
                        </h1>
                        <p className="text-md poppins-light">
                          {testimonial.occupation}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </SwiperComponent>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
