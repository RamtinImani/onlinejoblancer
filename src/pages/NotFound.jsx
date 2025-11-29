import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-7xl pt-10">
        <div className="flex flex-col gap-y-6">
          <div>
            <button onClick={moveBack} className="flex items-center gap-x-2">
              <HiArrowRight className="size-6 text-primary-900" />
              <span className="text-secondary-600"> برگشت</span>
            </button>
          </div>
          <h1 className="text-xl font-bold text-secondary-700">
            صفحه ای که دنبالش بودید، پیدا نشد
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
