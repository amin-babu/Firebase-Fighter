import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.webp";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
// import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-br bg-[#012979] border-b py-2 border-b-[#004f70] ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <MyLink to='/'>
            <img src={logo} className="h-8" />
          </MyLink>
        </figure>
        <ul className="flex items-center gap-4">
          <li>
            <MyLink to='/'>Home</MyLink>
          </li>
          <li>
            <MyLink to='/about-us'>About Us</MyLink>
          </li>
          <li>
            <MyLink to='/profile'>Profile</MyLink>
          </li>
        </ul>

        <Link to={"/signin"}>
          <button className="btn border-[#06aff7] border bg-gradient-to-br from-[#012169] via-[#003087] to-[#009CDE]">
            Sign in
          </button>
        </Link>
      </MyContainer>
    </div>
  );
};

export default Navbar;