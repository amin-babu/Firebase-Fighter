import React from "react";
import { toast } from "react-toastify";

const Homepage = () => {

  const handleNotify = () => {
    toast.success("🎉 You’ll be notified when the homepage is ready!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-[calc(100vh-57px)] flex flex-col justify-center items-center bg-gradient-to-br from-[#012169] via-[#003087] to-[#009CDE] text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
        🚀 Homepage is Coming Soon
      </h1>

      <p className="mt-5 text-lg text-white/90 animate-pulse">
        Stay tuned! We’re crafting something amazing for you ✨
      </p>

      <div className="mt-10">
        <button
          onClick={handleNotify}
          className="btn border-[#06aff7] border bg-gradient-to-br from-[#012169] via-[#003087] to-[#009CDE] "
        >
          Notify Me
        </button>
      </div>

      <div className="absolute bottom-6 text-white text-sm">
        Developed by <span className="font-bold">Amin Babu 💎</span>
      </div>
    </div>
  );
};

export default Homepage;