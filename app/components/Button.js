"use client";

import { useRouter } from "next/navigation";

const Button = ({ children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/analytics");
  };
  return (
    <button
      onClick={() => handleClick()}
      className="mt-6 bg-blue-500 px-3 py-2 rounded text-gray-50"
    >
      {children}
    </button>
  );
};

export default Button;
