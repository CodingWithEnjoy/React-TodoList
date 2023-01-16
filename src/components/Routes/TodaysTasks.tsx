import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("کار ها امروز", "کار ها امروز");

  return (
    <LayoutRoutes title="کار ها امروز" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
