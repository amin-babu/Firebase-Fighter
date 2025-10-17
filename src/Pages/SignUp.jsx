import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../components/MyContainer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleSignup = event => {
    event.preventDefault();

    const email = event.target.email?.value;
    const password = event.target.password?.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`]).{8,}$/;

    if (!regExp.test(password)) {
      toast.error('Password must have 8+ chars, upper, lower, number & special symbol.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result);
        toast.success('Signup Successfull!');
      })
      .catch(e => {
        console.log(e.code);
        if (e.code === "auth/email-already-in-use") {
          toast.error("Email already in use!");
        }
        else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email address!");
        }
        else if (e.code === "auth/operation-not-allowed") {
          toast.error("This sign-in method is disabled!");
        }
        else if (e.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters!");
        }
        else if (e.code === "auth/user-disabled") {
          toast.error("This account has been disabled!");
        }
        else if (e.code === "auth/user-not-found") {
          toast.error("No user found with this email!");
        }
        else if (e.code === "auth/wrong-password") {
          toast.error("Incorrect password!");
        }
        else if (e.code === "auth/missing-password") {
          toast.error("Please enter your password!");
        }
        else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts! Try again later.");
        }
        else if (e.code === "auth/network-request-failed") {
          toast.error("Network error! Check your connection.");
        }
        else if (e.code === "auth/popup-closed-by-user") {
          toast.error("Popup closed before signing in!");
        }
        else if (e.code === "auth/cancelled-popup-request") {
          toast.error("Cancelled popup request.");
        }
        else {
          toast.error(e.message || "Something went wrong. Please try again!");
        }
      })

    event.target.reset();

  };

  return (
    <div className="min-h-[calc(100vh-57px)] flex items-center justify-center bg-gradient-to-br from-[#012169] via-[#003087] to-[#009CDE] relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-[#009CDE90] rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-[#009CDE90] rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#012169]"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#012169]"
                />
                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                  {
                    show ? <IoEyeOff /> : <FaEye />
                  }
                </span>
              </div>

              <button
                type="submit"
                className="my-btn"
              >
                Sign Up
              </button>


              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className=" hover:text-white font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;