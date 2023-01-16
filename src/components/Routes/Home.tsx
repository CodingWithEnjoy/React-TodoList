import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("کار هایتان را مدیریت کنید", "تمام کار ها");
  return <LayoutRoutes title="تمام کار ها" tasks={tasks}></LayoutRoutes>;
};

export default Home;
