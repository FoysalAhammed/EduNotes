import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "@mantine/core/styles.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
