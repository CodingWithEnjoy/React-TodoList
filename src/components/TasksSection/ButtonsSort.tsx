import React from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const sortValues = [
  { value: "order-added", title: "اضافه شدن" },
  { value: "min-date", title: "زودتر" },
  { value: "max-date", title: "دیرتر" },
  { value: "completed-first", title: "انجام شده ها" },
  { value: "uncompleted-first", title: "انجام نشده ها" },
];

const ButtonsSort: React.FC<{
  isListInView1: boolean;
  sortedBy: string;
  setSortedBy: (option: string) => void;
  setIsListInView1: (status: boolean) => void;
}> = ({ isListInView1, setIsListInView1, sortedBy, setSortedBy }) => {
  return (
    <div className="flex children-styles">
      <button onClick={() => setIsListInView1(true)} title="view in list">
        <IconView1 className={isListInView1 ? "text-violet-600" : ""} />
      </button>
      <button onClick={() => setIsListInView1(false)} title="view in grid">
        <IconView2 className={!isListInView1 ? "text-violet-600" : ""} />
      </button>
      <select
        className="ml-auto inputStyles"
        value={sortedBy}
        onChange={({ target }) => setSortedBy(target.value)}
      >
        <option value="" disabled>
          مرتب سازی
        </option>
        {sortValues.map((val) => (
          <option
            key={val.value}
            value={val.value}
            className="bg-slate-100 dark:bg-slate-800"
          >
            {val.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonsSort;
