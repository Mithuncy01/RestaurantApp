import "./Header.css";
import { useState } from "react";
import cyLogo from "../../Image/CyFood2.png";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosAdd, IoIosLogOut } from "react-icons/io";
import { motion } from "framer-motion";
import { actionType } from "../../Context/Reducer";
import { useStateValue } from "../../Context/StateProvider";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CartContainer } from "../CartContainer/CartContainer";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  //Header Scrollbar function
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [Menu, setMenu] = useState(false);

  // Google Auth provider
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //custom hook from State Provider
  const [{ user, foodCart, cartItems }, dispatch] = useStateValue();
  //Google Auth function
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else{
      setMenu(!Menu)
    }
  };

 
  // LogOut Function
  const logOut = () => {
    setMenu(false);
    localStorage.removeItem('user');

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  //Show cart Function
  const showCart = () => {
    dispatch({
      type: actionType.SET_FOOD_CART,
      foodCart: !foodCart,
    });
  };

  return (
    <div>
      <div
        className={
          mobileMenu
            ? "sm:w-64 md:w-80 lg:hidden h-screen pt-6 sm:px-[20px] lg:px-[70px] left-0 top-0 bg-black z-[9999] fixed"
            : "sm:hidden"
        }
      >
        {/* Humbarger Icon for mobile menu open & close*/}
        <AiOutlineClose
          onClick={() => setMobileMenu(false)}
          className="text-green text-2xl absolute sm:left-52 md:left-64 -mt-1 cursor-pointer"
        />
        <img className="w-24 mb-5 relative" src={cyLogo} alt="logo"></img>
        {/* Mobile menu */}
        <ul
          onClick={() => setMobileMenu(false)}
          className="flex flex-col justify-center "
        >
          <NavLink className="text-white" activeclassname="active" to="/home">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-semibold cursor-pointer text-[16px] py-4 transition-all duration-75 hover:text-green"
            >
              Home
            </motion.li>
          </NavLink>
          <NavLink className="text-white" activeclassname="active" to="/about">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-semibold cursor-pointer text-[16px] py-4 transition-all duration-75 hover:text-green"
            >
              About Us
            </motion.li>
          </NavLink>
          <NavLink className="text-white" activeclassname="active" to="/order">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-semibold cursor-pointer text-[16px] py-4 transition-all duration-75 hover:text-green"
            >
              Orders
            </motion.li>
          </NavLink>
          <NavLink
            className="text-white"
            activeclassname="active"
            to="/contact"
          >
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-semibold cursor-pointer text-[16px] py-4 transition-all duration-75 hover:text-green"
            >
              Contact
            </motion.li>
          </NavLink>
        </ul>
      </div>

      <div
        className={`flex w-full lg:h-[90px] sm:h-[70px] fixed top-0 left-0 z-[999]
        shadow-white ${
          isScrolled ? "bg-gray-dark" : ""
        } bg-opacity-90 items-center sm:px-[20px] lg:px-[70px] justify-center  md:justify-between 
        sm:justify-between font-[poppins]`}
      >
        {/* Humbarger Icon for mobile menu open*/}
        <AiOutlineMenu
          onClick={() => setMobileMenu(true)}
          className="text-white text-2xl lg:hidden sm:block cursor-pointer"
        />

        {/* Desktop menu */}
        <div className="">
          <NavLink to="/">
            {/* Logo  */}
            <img
              className="sm:w-24 sm:hidden lg:block lg:w-40"
              src={cyLogo}
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <div className="mx-auto lg:block md:hidden sm:hidden">
          <ul className="flex items-center justify-center gap-[60px] ml-20">
            <NavLink className="text-white" activeclassname="active" to="/home">
              <motion.li
                whileTap={{ scale: 0.7 }}
                className="font-semibold cursor-pointer transition-all duration-75 hover:text-green"
              >
                Home
              </motion.li>
            </NavLink>
            <NavLink
              className="text-white "
              activeclassname="active"
              to="/about"
            >
              <motion.li
                whileTap={{ scale: 0.7 }}
                className="font-semibold cursor-pointer transition-all duration-75 hover:text-green"
              >
                About Us
              </motion.li>
            </NavLink>
            <NavLink
              className="text-white "
              activeclassname="active"
              to="/order"
            >
              <motion.li
                whileTap={{ scale: 0.7 }}
                className="font-semibold cursor-pointer transition-all duration-75 hover:text-green"
              >
                Orders
              </motion.li>
            </NavLink>
            <NavLink
              className="text-white "
              activeclassname="active"
              to="/contact"
            >
              <motion.li
                whileTap={{ scale: 0.7 }}
                className="font-semibold cursor-pointer transition-all duration-75 hover:text-green"
              >
                Contact
              </motion.li>
            </NavLink>
          </ul>
        </div>

        {/* Icon and user section*/}
        <motion.div
          onClick={showCart}
          whileTap={{ scale: 0.8 }}
          className="relative sm:ml-20 md:-ml-40 lg:ml-5  z-[99999]"
        >
          {/* shopping Icon */}
          <HiShoppingBag
            className="text-[25px] text-white cursor-pointer"
          />
          {/* Cart value */}
          {cartItems && cartItems.length > 0 && (
            <div
              className="absolute w-6 h-6 bg-green rounded-full text-white
            flex justify-center items-center -top-2.5 left-3.5"
            >
              {cartItems.length}
            </div>
          )}
        </motion.div>

        {/* User and Login section */}
        <div onClick={() => setMobileMenu(false)}>
          <div className="w-24 ml-12" onClick={login} >
            {user ? (
              <motion.img
                
                whileTap={{ scale: 0.7 }}
                className="relative w-[35px] h-[35px] ml-12 cursor-pointer rounded-full"
                src={user.photoURL}
                alt="profile"
              />
            ) : (
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="lg:py-2 lg:px-6 sm:py-1 sm:px-3 sm:ml-3 bg-green text-white font-medium rounded-md"
              >
                SignIn
              </motion.button>
              
            )}

            {Menu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" absolute bg-dark rounded-md flex flex-col w-[220px] mt-6 sm:-ml-[98px] lg:-ml-[135px] justify-center"
              >
                {user && user.email === "rajcy1@gmail.com" && (
                  <Link to="/createitems">
                    {/* New Items add section */}
                    <motion.p
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setMenu(false)}
                      className="flex rounded-t-md text-white text-[14px] font-semibold px-4 py-2 cursor-pointer bg-green transition-all duration-100"
                    >
                      Create Item
                      <IoIosAdd className="text-white text-[22px] ml-1 " />
                    </motion.p>
                  </Link>
                )}
                {/* User and Admin Name display */}
                <div className="py-2 flex items-center text-green pl-4 font-medium bg-black text-lg">
                  <FaUserCircle />
                  {user.email === "rajcy1@gmail.com" ? (
                    <p className="text-sm ml-1">
                      Admin :
                      <span className="text-gray ml-2 font-semibold">
                        {user.displayName}
                      </span>
                    </p>
                  ) : (
                    <p className="text-[17px] ml-2 text-gray ">
                      {user.displayName}
                    </p>
                  )}
                </div>
                {/* Display User Email  */}
                <h1 className="flex items-center bg-black pl-4 py-2 border-t border-dark text-gray text-[13px]">
                  <MdEmail className="text-gray text-lg mr-1" />
                  {user.email}
                </h1>

                {/* Sign Out Section */}
                <div>
                  <motion.p
                    whileTap={{ scale: 0.9 }}
                    onClick={logOut}
                    className="flex rounded-b-lg text-white text-[14px] font-semibold px-4 py-2 cursor-pointer bg-gray-dark"
                  >
                    Sign Out
                    <IoIosLogOut className="text-red text-[19px] ml-2" />
                  </motion.p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {foodCart && <CartContainer/>}
    </div>
  );
};
