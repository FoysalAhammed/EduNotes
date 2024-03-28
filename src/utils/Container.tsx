import { TContainerProps } from "../types/global.types";

const Container = ({ children }: TContainerProps) => {
  return <div className="w-full max-w-[1280px] px-5 mx-auto">{children}</div>;
};

export default Container;
