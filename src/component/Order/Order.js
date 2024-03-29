import React, { useEffect, useState } from "react";
import Spiner2 from "../../Spiner/Spiner2";
import { motion } from "framer-motion";
import { Footer } from "../Footer/Footer";
import { useStateValue } from "../../Context/StateProvider";
import  emptyCart from '../../Image/emptyCart.png'

export const Order = () => {
  const [{ cartItems, totalPrice, user }] = useStateValue();

  const [orderId, setOrderId]= useState(0)

  // Loader Animation
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    //set Order Id randomly
    setOrderId(Math.floor(Date.now() / 1000000)) 
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  

  return (
    <>
      {loading ? (
        <Spiner2 />
      ) : (
        <section>
          {cartItems && cartItems.length > 0 ? (
            <div className="py-28 px-4 md:px-6 2xl:px-20 2xl:mx-auto bg-black text-white">
              <div className="flex justify-start item-start space-y-2 flex-col rounded-lg bg-dark border border-gray py-6 px-8 ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
                  Order #{orderId}
                </h1>
                <p className="text-base font-medium leading-6 text-gray-600">
                  21st Mar 2023 at 10:34 PM
                </p>
              </div>

              <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  {cartItems &&
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-dark rounded-lg border border-gray flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
                      >
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                          Customer’s Cart
                        </p>
                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                          <div className="pb-4 md:pb-8 w-full md:w-40">
                            <img
                              className="w-full hidden md:block"
                              src={item.imageURL}
                              alt="imageURL"
                            />
                            <img
                              className="w-full md:hidden"
                              src={item.imageURL}
                              alt="imageURL"
                            />
                          </div>
                          <div className="md:flex-row flex-col flex justify-between items-start w-full pb-4 space-y-4 md:space-y-0">
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                              <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-green">
                                {item.title}
                              </h3>
                              <div className="flex justify-start items-start flex-col space-y-2">
                                <p className="text-sm leading-none text-gray">
                                  <span className="text-gray">Quentity: </span>{" "}
                                  {item.qty}
                                </p>
                                <p className="text-sm leading-none text-gray">
                                  <span className="text-gray">Size: </span>{" "}
                                  Small
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                              <p className="text-base xl:text-lg leading-6">
                                {item.price}
                                <span className="text-gray line-through">
                                  {parseFloat(item.price) + 5}
                                </span>
                              </p>
                              <p className="text-base xl:text-lg leading-6 text-gray">
                                {item.qty}
                              </p>
                              <p className="text-base xl:text-lg font-semibold leading-6 text-gray">
                                {item.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                      <h3 className="text-xl font-semibold leading-5 text-gray-800">
                        Summary
                      </h3>
                      <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                        <div className="flex justify-between  w-full">
                          <p className="text-base leading-4 text-gray-800">
                            Subtotal
                          </p>
                          <p className="text-base leading-4 text-gray-600">
                            ${totalPrice}
                          </p>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base leading-4 text-gray-800">
                            Discount{" "}
                            <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                              STUDENT
                            </span>
                          </p>
                          <p className="text-base leading-4 text-gray-600">
                            -$28.00 (50%)
                          </p>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base leading-4 text-gray-800">
                            Shipping
                          </p>
                          <p className="text-base leading-4 text-gray-600">
                            $10.00
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base font-semibold leading-4 text-gray-800">
                          Total
                        </p>
                        <p className="text-base font-semibold leading-4 text-gray-600">
                          ${totalPrice + 10 }
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                      <h3 className="text-xl font-semibold leading-5 text-gray-800">
                        Shipping
                      </h3>
                      <div className="flex justify-between items-start w-full">
                        <div className="flex justify-center items-center space-x-4">
                          <div class="w-8 h-8">
                            <img
                              class="w-full h-full"
                              alt="logo"
                              src="https://i.ibb.co/L8KSdNQ/image-3.png"
                            />
                          </div>
                          <div className="flex flex-col justify-start items-center">
                            <p className="text-lg leading-6 font-semibold text-gray-800">
                              DPD Delivery
                              <br />
                              <span className="font-normal">
                                Delivery with 24 Hours
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="text-lg font-semibold leading-6 text-gray-800">
                          $10.00
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="rounded-lg focus:outline-none py-5 w-96 md:w-full bg-green text-base font-medium leading-4 text-white"
                        >
                          View Carrier Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-dark rounded-lg w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Customer
                  </h3>
                  <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                      <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8">
                        {/* user Avatar */}
                        <img
                          src={user.photoURL}
                          alt="avatar"
                        />
                        <div className=" flex justify-start items-start flex-col space-y-2">
                          <p className="text-base font-semibold leading-4 text-left text-gray">
                            {user.displayName}
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            10 Previous Orders
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center md:justify-start items-center w-full">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="gray"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 7L12 13L21 7"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="cursor-pointer text-sm leading-5 text-gray px-2">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                      <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                        <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                          <p className="text-base font-semibold leading-4 text-center md:text-left text-gray">
                            Shipping Address
                          </p>
                          <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray">
                            180 North King Street, Northhampton MA 1060
                          </p>
                        </div>
                        <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                          <p className="text-base font-semibold leading-4 text-center md:text-left text-gray">
                            Billing Address
                          </p>
                          <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray">
                            180 North King Street, Northhampton MA 1060
                          </p>
                        </div>
                      </div>
                      <div className=" mt-4 flex w-full justify-center items-center md:justify-start md:items-start">
                        <button className=" rounded-lg mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                          Edit Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" py-4 px-8 flex justify-center items-center w-full h-screen bg-black">
              <img src={emptyCart} alt=""/>
            </div>
          )}
        </section>
      )}
      <Footer />
    </>
  );
};
