import { Pagination } from "@mantine/core";
import { useState } from "react";

const CoursePagination = () => {
  const [activePage, setPage] = useState(1);
  return (
    <div>
      <Pagination
        color="#FC4F4F"
        value={activePage}
        onChange={setPage}
        total={10}
      />
    </div>
  );
};

export default CoursePagination;
