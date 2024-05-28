import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div className=" flex flex-col h-screen w-screen items-center justify-center text-gray-800">
      <div className="flex flex-col items-center justify-center select-none">
        <span className="text-4xl font-semibold">⚠️ Not Found ⚠️</span>
        <span className="text-8xl font-black">404</span>
      </div>
    </div>
  );
};

export default NotFound;
