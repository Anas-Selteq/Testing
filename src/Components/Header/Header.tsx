import { Logo, StyledHeader } from "@/styles/Header.styled";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";
import { removeCookie } from "@/utils/utils";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout3 from "../Layoutforheader/Layoutforheader";

export default function Header(props: any) {
  const [tabbar1, settabbar1] = useState(false);
  const [notificationpannel, setNotoficationpannel] = useState<any>(false)
  console.log(props);
  const router = useRouter();
  const currentURL = router.asPath;
  const endURL = currentURL.split("/").pop();
  console.log("sdsdsdsdsdsd", endURL);
  const dispatch = useDispatch();
  const tabbarone = () => {
    settabbar1(!tabbar1);
  };
  const opennotification = () => {
    setNotoficationpannel(!notificationpannel);
  }
  return (
    <Layout3>
    <div>
      {/* old navigation top  */}
      {/* <div className="navigation_pc">
        {props.profile?.firstName ? (
          <div className="col-md-12 background_color_navigation_two py-2">
            <div className="col-md-12 px-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-3">
                      <Image
                        className="img-fluid logo_width_image"
                        src="/assets/Images/navexp.png"
                        alt="navexp"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="col-md-9 m-auto">
                      <span className="font_exp">Become an expert</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="font_exp">Help</span>&nbsp;&nbsp;&nbsp;
                      <span className="font_exp">Contact</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 m-auto">
                  <div className="row">
                    <div className="col-md-9 text-end m-auto text-end ">
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="/imagess/avatar.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="/imagess/avatar.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="/imagess/avatar.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="/imagess/avatar.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid downn"
                          src="/imagess/avatar.png"
                        />
                      </span>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <img
                            className="img-fluid img_ava"
                            src={
                              props?.profile?.imageURL || "/imagess/avatar.png"
                            }
                          />
                        </div>
                        <div className="col-md-6 px-0">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="white"
                              id="dropdown-basicc"
                            >
                              <p className="guest_hello mb-0 pb-0 ">
                                {" "}
                                {props.profile?.firstName || "No Name"}{" "}
                              </p>
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="new_drop">
                              <div className="col-md-12 px-3">
                                <div className="text-center pt-2">
                                  <img
                                    className="img-fluid img_ava1"
                                    src={
                                      props?.profile?.imageURL ||
                                      "/imagess/avatar.png"
                                    }
                                  />
                                  <p className="text-color-black mb-0">
                                    <b>
                                      {" "}
                                      {props.profile?.firstName ||
                                        "No Name"}{" "}
                                      {props.profile?.lastName || "No Name"}
                                    </b>
                                  </p>
                                  <p className="color_email">
                                    {props.profile?.primaryEmail || "No Email"}
                                  </p>
                                </div>
                              </div>
                              <hr />
                              <div className="col-md-12 px-4">
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <Link
                                    href="/userProfile/profile/"
                                    className="style_a_tag"
                                  >
                                    <p className="mb-0 pb-0 text_icon_all">
                                      <img
                                        className="img-fluid img_width_all_icons"
                                        src="/assets/Images/user.png"
                                      />{" "}
                                      &nbsp; Manage Account
                                    </p>
                                  </Link>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../../assets/Images/shield.png"
                                    />{" "}
                                    &nbsp; File Manager
                                  </p>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../../assets/Images/news.png"
                                    />{" "}
                                    &nbsp; Terms of Use
                                  </p>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../../assets/Images/question.png"
                                    />{" "}
                                    &nbsp; Help & Support
                                  </p>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../../assets/Images/userstar.png"
                                    />{" "}
                                    &nbsp; Rate Us
                                  </p>
                                </div>
                                <hr />
                                <div
                                  onClick={(e) => {
                                    dispatch({ type: AUTH_ACTIONS.LOGOUT });
                                    removeCookie && removeCookie("profile");
                                    localStorage.removeItem("jwtToken");
                                    localStorage.removeItem("jwtRefreshToken");
                                    localStorage.removeItem("_grecaptcha");
                                  }}
                                  className="col-md-12 px-2 mb-0 pb-0 pb-2"
                                >
                                  <Link href="/" className="style_a_tag">
                                    <p className="mb-0 pb-0 text_icon_all">
                                      <img
                                        className="img-fluid img_width_all_icons"
                                        src="../../assets/Images/logout.png"
                                      />{" "}
                                      &nbsp; Logout
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="col-md-12 background_color_navigation_one">
              <div className="container py-1">
                <div className="row">
                  <div className="col-md-2 display_image_header_icons">
                    {[
                      "facebook",
                      "twitter",
                      "linkedin",
                      "insta",
                      "pintrist",
                      "youtube",
                    ].map((icon, index) => (
                      <span key={index}>
                        <Image
                          className="img-fluid header_nav_icons_width"
                          src={`/assets/Images/${icon}.png`}
                          alt={icon}
                          height={14.94}
                          width={14.94}
                        />
                        {"  "}
                      </span>
                    ))}
                  </div>
                  <div className="col-md-3 justify-content-">
                    <span className="d-inline-block me-3 font_new_one_header">
                      About
                    </span>
                    &nbsp;
                    <span className="d-inline-block me-3 font_new_one_header">
                      Blog
                    </span>
                    &nbsp;
                    <span className="d-inline-block me-3 font_new_one_header">
                      Help
                    </span>
                    &nbsp;
                    <span className="d-inline-block me-3 font_new_one_header">
                      FAQs
                    </span>
                  </div>
                  <div className="col-md-7 text-end">
                    <Link href="/services/" style={{ textDecoration: "none" }}>
                      <span className=" d-inline-block me-3 font_new_one_header1">
                        All Services
                      </span>
                    </Link>
                    <span className=" d-inline-block me-3 font_new_one_header1">
                      Become an Expert
                    </span>
                    <span className=" d-inline-block me-3 font_new_one_header1">
                      Offers
                    </span>
                    <span className=" d-inline-block me-3 font_new_one_header1">
                      Refer & Earn
                    </span>
                    <span className=" d-inline-block me-3 font_new_one_header1">
                      24/7 Customer Care
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 background_color_navigation_two">
              <div className="container py-1">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <Image
                      className="img-fluid logo_width_image"
                      src="/assets/Images/navexp.png"
                      alt="NavExp"
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      className="form-control input_form_search"
                      type="text"
                      placeholder="I'm searching for..."
                    />
                  </div>
                  <div className="col-md-6 m-auto">
                    <div className="row ">
                      <div className="col-md-7  text-end">
                        <span>
                          <button className="btn btn-light px-0 background_button_nav background_button_light">
                            <Image
                              className="img-fluid img_tag"
                              src="/assets/Images/tag.png"
                              alt="Tag"
                              height={21}
                              width={21}
                            />
                          </button>
                        </span>
                        &nbsp;&nbsp;
                        <span>
                          <button className="btn btn-light px-2 background_button_nav background_button_light">
                            <Image
                              className="img-fluid img_cart"
                              src="/assets/Images/cart.png"
                              alt="Cart"
                              height={25}
                              width={25}
                            />{" "}
                            &nbsp;
                            <span className="fontcart">Cart</span>
                          </button>
                        </span>
                        <span>
                          <button className="btn btn-light px-2 background_button_nav_lang background_button_light">
                            <p className="fontcartlang mb-0 pb-0">EN</p>
                            <Image
                              className="img-fluid img_globe"
                              src="/assets/Images/globe.png"
                              alt="globe"
                              height={16}
                              width={16}
                            />
                          </button>
                        </span>
                      </div>
                      <div className="col-md-5 border_left_new text-left m-auto display_but">
                        <Image
                          className="img-fluid img_avatar"
                          src="/assets/Images/avatar.png"
                          alt="Avatar"
                          height={50}
                          width={50}
                        />
                        <Dropdown>
                          <Dropdown.Toggle variant="white" id="dropdown-basic">
                            <Link
                              href="/auth/signup"
                              style={{ textDecoration: "none" }}
                            >
                              <h6 className="guest mb-0">
                                {" "}
                                {props.profile?.firstName || "Guest"}
                              </h6>
                              <h6 className="loginreg mb-0">
                                {props.profile?.firstName
                                  ? "Logged In"
                                  : "Login & Register"}
                              </h6>
                            </Link>
                          </Dropdown.Toggle>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <hr /> */}

      {/* new navigation for pc updated  */}
      <div className="col-md-12 background_color_navigation_two display_none_on_mobile py-3">
        <div className="col-md-12 px-4">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2">
                  {endURL === "" ? (
                    <img
                      className="img-fluid width_ll"
                      src="/imagess/expertll.png"
                    />
                  ) : (
                    <img
                      className="img-fluid width_ll"
                      src="/imagess/expertll.png"
                    />
                  )}
                </div>
                <div className="col-md-10 m-auto">
                  {endURL === "" ? (
                    <p className="m-0 pt-2 color_of_becoming">
                      &nbsp;&nbsp; Become an expert
                    </p>
                  ) : (
                    <input
                      className="form-control form-control-sm input_width"
                      placeholder="Search"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 m-auto px-3">
              <div className="d-flex justify-content-end">
                <div className="col-md-6 text-end border_right px-2">
                  <img
                  onClick={opennotification}
                    className="img-fluid width_row_header"
                    src="/imagess/otherr.png"
                  />
                </div>
                {notificationpannel === true ? 
              <div className=" position_set_notifcation">sdsdsd</div>  :
              null
              }
                <div className="d-flex px-2 justify-content-between">
                  &nbsp;
                  {props.profile?.firstName ? (
                    <>
                      <img
                        className="img-fluid img_height_width_profile"
                        src={`https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/${props.profile?.imageURL ? props.profile?.imageURL :"/imagess/redicons/cam.png"}`}
                      />

                      <Dropdown>
                        <Dropdown.Toggle variant="white" id="dropdown-basicc">
                          <p className="m-0 pt-1 text_user_profile">
                            &nbsp;&nbsp;Hello,{" "}
                            {props.profile?.firstName || "No Name"}{" "}
                            <i className="fas fa-angle-down"></i>
                          </p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="new_drop">
                          <div className="col-md-12 px-3">
                            <div className="text-center pt-2">
                              <img
                                className="img-fluid img_ava1 rounded-circle border border-danger border-3"
                                // src={
                                //   props?.profile?.imageURL ||
                                //   "/imagess/userp.jpg"
                                // }
                                src={`https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/${props.profile?.imageURL ? props.profile?.imageURL :"/imagess/redicons/cam.png"}`}
                              />
                              <p className="text-color-black mb-0">
                                <b>
                                  {" "}
                                  {props.profile?.firstName || "No Name"}{" "}
                                  {props.profile?.lastName || "No Name"}
                                </b>
                              </p>
                              <p className="color_email">
                                {props.profile?.primaryEmail || "No Email"}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="col-md-12 px-4">
                            <div className="col-md-12 px-2 mb-0 pb-0">
                              <Link
                                href="/userProfile/profile/"
                                className="style_a_tag"
                              >
                                <p className="mb-0 pb-0 text_icon_all">
                                  <img
                                    className="img-fluid img_width_all_icons"
                                    src="/assets/Images/user.png"
                                  />{" "}
                                  &nbsp; Manage Account
                                </p>
                              </Link>
                            </div>
                            <hr />
                            <div className="col-md-12 px-2 mb-0 pb-0">
                              <p className="mb-0 pb-0 text_icon_all">
                                <img
                                  className="img-fluid img_width_all_icons"
                                  src="../../assets/Images/shield.png"
                                />{" "}
                                &nbsp; File Manager
                              </p>
                            </div>
                            <hr />
                            <div className="col-md-12 px-2 mb-0 pb-0">
                              <p className="mb-0 pb-0 text_icon_all">
                                <img
                                  className="img-fluid img_width_all_icons"
                                  src="../../assets/Images/news.png"
                                />{" "}
                                &nbsp; Terms of Use
                              </p>
                            </div>
                            <hr />
                            <div className="col-md-12 px-2 mb-0 pb-0">
                              <p className="mb-0 pb-0 text_icon_all">
                                <img
                                  className="img-fluid img_width_all_icons"
                                  src="../../assets/Images/question.png"
                                />{" "}
                                &nbsp; Help & Support
                              </p>
                            </div>
                            <hr />
                            <div className="col-md-12 px-2 mb-0 pb-0">
                              <p className="mb-0 pb-0 text_icon_all">
                                <img
                                  className="img-fluid img_width_all_icons"
                                  src="../../assets/Images/userstar.png"
                                />{" "}
                                &nbsp; Rate Us
                              </p>
                            </div>
                            <hr />
                            <div
                              onClick={(e) => {
                                dispatch({ type: AUTH_ACTIONS.LOGOUT });
                                removeCookie && removeCookie("profile");
                                localStorage.removeItem("jwtToken");
                                localStorage.removeItem("jwtRefreshToken");
                                localStorage.removeItem("_grecaptcha");
                              }}
                              className="col-md-12 px-2 mb-0 pb-0 pb-2"
                            >
                              <Link href="/" className="style_a_tag">
                                <p className="mb-0 pb-0 text_icon_all">
                                  <img
                                    className="img-fluid img_width_all_icons"
                                    src="../../assets/Images/logout.png"
                                  />{" "}
                                  &nbsp; Logout
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  ) : (
                    <p className="m-auto  text_user_profile">
                      <Link href="/auth/signup" className="login_signup">
                        <button className="btn btn-light font_size_and_style btn-sm">
                          {" "}
                          Signup/ Login{" "}
                        </button>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation mobile  */}
      <div className="navigation_mobile">
        {props.profile?.firstName ? (
          <div className="col-md-12 background_color_navigation_two py-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-6 m-auto">
                 <img className="img-fluid img_logo_mobile_size"  src="/imagess/expertll.png" />
                </div>
                <div className="col-md-6 col-6 text-end">
                  <button className="btn btn-light" onClick={tabbarone}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {tabbar1 ?
              <div className="col-md-12 background_color_navigation_two1">
                {/* Header of mobile Navigation  */}
              <div className="container header_bottom pt-2">
                            <div className="row">
                              <div className="col-md-6 col-6 m-auto">
                              <img className="img-fluid img_logo_mobile_size"  src="/imagess/expertll.png" />
                              </div>
                              <div className="col-md-6 col-6 text-end">
                                <button className="btn btn-light" onClick={tabbarone}>
                                  <i className="fas fa-bars"></i>
                                </button>
                              </div>
                            </div>
                      </div>
                      <div className="container pt-3">
                        {/* profile information show  */}
                        <div className="col-md-12 border_white_mobile_navigaton px-2 py-2">
                        <div className="row">
                          <div className="col-md-6 col-3">
                          <img
                                className="img-fluid mobile_img_adj"
                               src={`https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/${props.profile?.imageURL ? props.profile?.imageURL :"/imagess/redicons/cam.png"}`}
                              />
                          </div>
                          <div className="col-md-6 col-9 color_text_mobile m-auto">
                            <p className="m-0 p-0"><b>Hi,&nbsp;
                            {props.profile?.firstName || "No Name"}{" "}
                                  {props.profile?.lastName || "No Name"}
                              </b></p>
                            <p className="m-0 p-0">{props.profile?.primaryEmail || "No Email"}</p>
                          </div>
                        </div>
                        </div>
                        {/* Other buttons  */}
                        <div className="col-md-12">
                        <Link
                                href="/userProfile/profile/"
                                className="style_a_tag"
                              >
                          <button className="btn btn-outline-light mt-2 w-100 py-2">Manage Account</button>
                          </Link>
                          <button className="btn btn-outline-light mt-2 w-100 py-2">File Manager</button>
                          <button className="btn btn-outline-light mt-2 w-100 py-2">Terms of use</button>
                          <button className="btn btn-outline-light mt-2 w-100 py-2">Help & Support</button>
                          <button className="btn btn-outline-light mt-2 w-100 py-2">Rate Us</button>
                          <button className="btn btn-outline-light mt-2 w-100 py-2">Logout</button>
                        </div>
                        </div>
              </div>
            : null}
            </div>
        ) : (
          <>
           {/* Navigation Number 2  */}
           <div className="col-md-12 background_color_navigation_two py-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-6 m-auto">
                 <img className="img-fluid img_logo_mobile_size"  src="/imagess/expertll.png" />
                </div>
                <div className="col-md-6 col-6 text-end">
                  <button className="btn btn-light" onClick={tabbarone}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {tabbar1 ?
              <div className="col-md-12 background_color_navigation_two1">
                {/* Header of mobile Navigation  */}
              <div className="container header_bottom pt-2">
                            <div className="row">
                              <div className="col-md-6 col-6 m-auto">
                              <img className="img-fluid img_logo_mobile_size"  src="/imagess/expertll.png" />
                              </div>
                              <div className="col-md-6 col-6 text-end">
                                <button className="btn btn-light" onClick={tabbarone}>
                                  <i className="fas fa-bars"></i>
                                </button>
                              </div>
                            </div>
                      </div>
                          <div className="container pt-3">
                          <div className="col-md-12">
                          <Link href="/auth/signup" className="login_signup">
                          <button className="btn btn-outline-light mt-2 w-100 py-2">Signup/ Login</button>
                          </Link>
                        </div>
                        </div>
              </div>
            : null}
            </div>
          </>
        )}
      </div>
    </div>
    </Layout3>
  );
}
