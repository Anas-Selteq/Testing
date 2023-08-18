import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import style from "../styles/stylescss/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import { IoIosArrowForward } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Dashboard from "@/Components/Layout/Dashboard";
import { GoPrimitiveDot } from "react-icons/go";
import { useRouter } from "next/router";
import {
  updateUserImage,
  getUserDetail,
  uploadUserImage,
  VerifyUserEmailAction,
} from "@/helper";
import ImageUploadCard from "@/Components/UploadAvatar/UploadAvatar";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";
import { formatDate, removeCookie } from "@/utils/utils";
import CustomInput from "@/Components/Input/input_field";
import SideBar from "@/Components/components/sidebar";
import { BiDotsVertical } from "react-icons/bi";
import axios from "axios";

const Profile_page = () => {
  const router = useRouter();
  const { profile } = useSelector((state: any) => state);
  const [profileData, setProfileData] = useState<any>([]);
  const [loader, setLoader] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [jwtToken, setJwtToken] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [userId, setUserId] = useState<any>(1);
  const [imageurlupload, setImageurlupload] = useState<any>("")
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [userprofileres, setUserprofileres] = useState<any>("")
  const [updatedimageloader, setupdatedimageloader]= useState<any>(true);
  const [updatedImageLoader, setUpdatedImageLoader] = useState<boolean>(false);

  // upload image api /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  useEffect(() => {
    setJwtToken(localStorage?.getItem("jwtToken"));

  }, [jwtToken])
  

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };


  const uploadImage = async () => {
    const isToken = jwtToken !== null;
    
    const headers = {
      Authorization: isToken ? `Bearer ${jwtToken}` : undefined,
      'Content-Type': 'multipart/form-data',
    };

    try {
      setupdatedimageloader(false);
      const formData = new FormData();
     
      formData.append('AllFilesToUpload', file);

      console.log('formData:', formData);

      const response = await axios.post(`https://expertgateway-staging.findanexpert.net/signup_svc/pv/users/addUserImage?userId=${userId}&environment=dev`, formData, { headers });

      // Handle the response as needed
      console.log('Upload successful:', response.data?.result?.imageURL);
      setImageurlupload(response.data?.result?.imageURL);
      setupdatedimageloader(false);
    } catch (error) {
      // Handle errors
      console.error('Upload error:', error);
      setupdatedimageloader(true);
    }
  };

  const uploadImageprofile = async () => {
    const isToken = jwtToken !== null;
    
    const headers = {
      Authorization: isToken ? `Bearer ${jwtToken}` : undefined,
      'Content-Type': 'application/json',
    };

    try {
      const data = {
        userId: profile?.userId,
        firstName: profile?.firstName,
        lastName: profile?.lastName,
        imagePath: imageurlupload,
        modifiedBy: profile?.userId
      }
      const response = await axios.post(`https://expertgateway-staging.findanexpert.net/signup_svc/pv/users/addUserProfile`, data, { headers });

      // Handle the response as needed
      console.log('Upload successful:------------------------------', response.data);
      setupdatedimageloader(true);
      setUpdatedImageLoader(prevState => !prevState);
      // setImageurlupload(response.data);
    } catch (error) {
      // Handle errors
      console.error('Upload error:', error);
    }
  };





  // Automatically upload the image when the file state changes
  useEffect(() => {
    if (file) {
      uploadImage();
    }
  }, [file]);

  useEffect(() => {
    if(imageurlupload){
    uploadImageprofile()
  }
  }, [imageurlupload])
  


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // get user profile by if -------------------------------------------------------------------------------------

  useEffect(() => {
    let isMounted = true; // Flag to track component mount state
      const fetchData = async () => {
        const isToken = jwtToken !== null;
        const headers = {
          Authorization: isToken ? `Bearer ${jwtToken}` : undefined,
          'Content-Type': 'application/json',
        };
  
        try {
          const response = await axios.get(`https://expertgateway-staging.findanexpert.net/signup_svc/pv/users/getUserById?id=${profile?.userId}`, { headers });
          if (isMounted) { // Only update state if the component is still mounted
            setData(response.data);
            console.log("profileeee", response.data);
            setUserprofileres(response.data?.result?.user);
            dispatch({
              type: AUTH_ACTIONS.LOGIN_SUCCESS,
              payload: response.data?.result?.user,
            });
          }
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, [profile?.userId, updatedImageLoader]);


  // get user profile by if -------------------------------------------------------------------------------------




  const businessID =
    typeof window !== "undefined" && localStorage.getItem("businessId");
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  function BasicInfo() {
    router.push("/edit-personal-information");
    // window.open('/', '_blank');
  }
  // function ContactInfo() {
  //   router.push('/');
  // }
  function Phone() {
    router.push("/phone-number-update");
    // window.open('/', '_blank');
  }
  function Password() {
    router.push("/update-password");
    // window.open('/', '_blank');
  }
  function PersonalDocuments() {
    router.push("/personal-docs");
    // window.open('/', '_blank');
  }
  function editEmail(email: any) {
    router.push({
      pathname: "/edit-email",
      query: { email: email, userId: 8 },
      // window.open('/', '_blank');
    });
  }

  useEffect(() => {
    getUserDetail(8).then((res) => {
      setProfileData(res?.result);
    });
  }, []);

  const handleEmailClick = () => {
    // if profile.email is verified --> just go
    // : send otp sms and on success --> go to otp page:
    VerifyUserEmailAction({ userId: profile.userId, type: 1 }).then((resp) => {
      console.log("---- response send email otp ---------");
      dispatch({
        type: AUTH_ACTIONS.UPDATE_PRIMARY_EMAIL,
        payload: { primaryEmail: true },
      });
      console.log(resp);
      console.log("---- response send email otp ---------");
      router.push("/email-verification-code");
    });
  };

  const [buttonColorOnHover, setButtonColorOnHover] = useState("white");
  const [buttonHoverCursor, setButtonHoverCursor] = useState("auto");

  const onChangeFile = async (e: any) => {
    e.preventDefault();
    try {
      console.log("UPLOADING IMAGEEEEEEEEEEEEEEEEEEE");
      let result = await uploadUserImage(
        profile?.userId,
        e.target.files[0],
        "dev"
      );
      let imageurl =
        result?.code === 0
          ? "https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/" +
            result.result?.imageURL
          : null;
      console.log("IMAGE", imageurl);
      let changedUserImage = await updateUserImage(profile.userId, imageurl);
      setImageUrl(
        "https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/" +
          result.result?.imageURL
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <SideBar activeIndex={0}>
      <div
        style={{
          width: "100%",
          fontSize: "18px",
          backgroundColor: "white",
          borderTop: "1px solid lightgray",
          borderBottom: "0.7px solid #dcdcdc",
          fontFamily: "Roboto",
          fontWeight: "800",
          fontStyle: "normal",
          letterSpacing: "normal",
          color: "#404145",
          position: "relative",
          zIndex: "1",
        }}
        className="px-4"
      >
        <div className="row py-2">
          <div className="col-md-6">
            {" "}
            <span>Manage Profile</span>
          </div>
        </div>
      </div>
      {userprofileres ?
      <div className="w-100">
        <div
          className="px-md-5 pb-4 px-3 border_profile mb-5 pb-5 "
          style={{ borderRadius: "8px" }}
        >
          {/* image show section for pc  */}
          <div className="col-md-12 border_for_all_pages1 mt-4">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2  text-end">
                   {userprofileres && (
                      <img
                        className="img-fluid img_rounded_circle_new"
                        src={`https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/${userprofileres?.imageURL ? userprofileres?.imageURL :"/imagess/redicons/cam.png"}`}
                        alt="User Profile"
                      />
                    )}
                    <label htmlFor="file">
                      {updatedimageloader === true ?
                    <img className="img-fluid button_style" src="/imagess/redicons/cam.png" /> :
                    <div className="spinner-grow text-danger spinner-border-sm button_style1" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                    } 
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                        name="image"
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                        data-original-title="upload photos"
                      />
                    </label>
                  </div>
                  <div className="col-md-10 px-4 text-left m-auto">
                    <p className="heading_name_profile mb-0 pb-1 ">
                      Hi, {userprofileres?.firstName} {userprofileres?.lastName}
                    </p>
                    <p className="subheading_profile m-0 pt-1">
                      Personal Account
                    </p>
                    <p className="subheading_profile pt-0 mb-0 p-0">{`ID ${userprofileres?.userId}`}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-end m-auto">
                <Link
                  href="/userProfile/profile/switch_account"
                  className="style_a_tag"
                >
                  <BiDotsVertical className="icon_color_every" />
                </Link>
              </div>
            </div>
          </div>

          {/* image show section for mobile  */}
            <div className="row pt-4 hide_onpc">
              <div className="col-md-12 col-11 text-center positon_relative_sett" >
                <img className="img-fluid img_profile_mobile_setting" src={`https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/${userprofileres?.imageURL ? userprofileres?.imageURL :"/imagess/redicons/cam.png"}`} />
                {/* <img className="img-fluid " src="/imagess/redicons/cam.png" /> */}
                <label htmlFor="file">
                      {updatedimageloader === true ?
                    <img className="img-fluid img_mobile_cam" src="/imagess/redicons/cam.png" /> :
                    <div className="spinner-grow text-danger spinner-border-sm button_style1" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                    } 
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                        name="image"
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                        data-original-title="upload photos"
                      />
                    </label>
                <p className="heading_name_profile mb-0 pb-1 pt-3 ">
                     <strong>Hi, {userprofileres?.firstName} {userprofileres?.lastName}</strong> 
                    </p>
                    <p className="subheading_profile m-0 pt-1">
                      Personal Account
                    </p>
                    <p className="subheading_profile pt-0 mb-0 p-0">{`ID ${userprofileres?.userId}`}</p>
              </div>
              <div className="position_set_icons_dots">
              <Link
                  href="/userProfile/profile/switch_account"
                  className="style_a_tag"
                >
                  <BiDotsVertical className="icon_color_every" />
                </Link>
              </div>
            </div>







            
          {/* First/LastName section  */}
          <div className="pt-4">
            <p className="basic_text">
              <img className="img-fluid" src="/svgicons/person.svg" /> Name
            </p>
          </div>
          <div className="border_for_all_pages">
            <Link
              href={{
                pathname: "/userProfile/profile/update_name",
                query: {
                  data: true,
                },
              }}
              className="style_a_tag"
            >
              <CustomInput
                label="First Name"
                inputValue={userprofileres?.firstName}
                showIcon={true}
              />
            </Link>
            <hr className="background_line" />
            <Link
              href={{
                pathname: "/userProfile/profile/update_name",
                query: {},
              }}
              className="style_a_tag"
            >
              <CustomInput
                label="Last Name"
                inputValue={userprofileres?.lastName}
                showIcon={true}
              />
            </Link>
          </div>

          {/* Show Email Section  */}
          <div className="pb-4 ">
            <div className="pt-4">
              <p className="basic_text">
                {" "}
                <img className="img-fluid" src="/imagess/msg.png" /> Email
              </p>
            </div>
            <div className="border_for_all_pages">
              <Link
                href="/userProfile/profile/manage_email"
                className="style_a_tag"
              >
                <CustomInput
                  label="Primary Email"
                  inputValue={userprofileres?.primaryEmail}
                  showIcon={true}
                  showVerify={true}
                  verifiedOrNot={userprofileres?.primaryEmailVerify}
                />
              </Link>
              <hr className="background_line" />
              <Link
                href="/userProfile/profile/manage_email"
                className="style_a_tag"
              >
                {userprofileres?.secondaryEmail?.length === 0 ? 
                <>
                <div
                style={{
                  fontFamily: "Roboto",
                  fontSize: "10px",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: "#aaa",
                }}
              >
                Secondary Email
              </div>
               <div
               className="pt-1"
               style={{
                 fontFamily: "Roboto",
                 fontSize: "14px",
                 fontWeight: "normal",
                 fontStretch: "normal",
                 fontStyle: "normal",
                 lineHeight: "normal",
                 letterSpacing: "normal",
                 textAlign: "left",
                 color: "#000",
               }}
             >
              Add Secondary Email
              </div>
              </>
              :  
              <CustomInput
              label="Secondary Email"
              inputValue={userprofileres?.secondaryEmail}
              showIcon={true}
              showVerify={true}
              verifiedOrNot={userprofileres?.secondaryEmailVerify}
            />
              }
                
              </Link>
            </div>
          </div>

          {/* Mobile Show section   */}
          <div className="pb-4">
            <div className="pt-1">
              <p className="basic_text">
                {" "}
                <img className="img-fluid" src="/imagess/mobb.png" /> Mobile
              </p>
            </div>
            <div className="border_for_all_pages">
              <Link
                href="/userProfile/profile/manage_mobiles"
                className="style_a_tag"
              >
                <CustomInput
                  label="Primary Number"
                  inputValue={userprofileres?.primaryMobile}
                  showIcon={true}
                  showVerify={true}
                  verifiedOrNot={userprofileres?.primaryMobileVerify}
                />
              </Link>
              <hr className="background_line" />
             
                   <>
                   {userprofileres?.secondaryMobile?.length === 0 ?
                   <>
                    <Link
                      href="/userProfile/profile/manage_mobiles"
                      className="style_a_tag"
                    >
                    <div
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "10px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      letterSpacing: "normal",
                      textAlign: "left",
                      color: "#aaa",
                    }}
                  >
                    Secondary Mobile
                  </div>
                  <div
                  className="pt-1"
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  Add Secondary Mobile
                  </div>
                  </Link>
                  </>
                  :
                  <Link
                      href="/userProfile/profile/manage_mobiles"
                      className="style_a_tag"
                    >
                  <CustomInput
                  label="Secondary Number"
                  inputValue={userprofileres?.secondaryMobile}
                  showIcon={true}
                  showVerify={true}
                  verifiedOrNot={userprofileres?.secondaryMobileVerify}
                />
                </Link>
                }
                  </>
               
            </div>
          </div>

          {/* Additional info section  */}
          <div className="pb-4">
            <div className="pt-1 pb-3 ">
              <span className="basic_text">
                {" "}
                <img className="img-fluid " src="/imagess/info.png" />
                &nbsp;
              </span><span className="img_small basic_text">Additional Info</span>
            </div>
            <div className="border_for_all_pages">
              <Link
                href="/userProfile/profile/update_gender"
                className="style_a_tag"
              >
                <CustomInput
                  label="Gender"
                  inputValue={
                    userprofileres?.genderId === 1
                      ? "Male"
                      : userprofileres?.genderId === 2
                      ? "Female" : 
                      userprofileres?.genderId === 3 ?
                      "Other":null
                  }
                  showIcon={true}
                />
              </Link>
              <hr className="background_line" />
              <Link
                href="/userProfile/profile/update_dob"
                className="style_a_tag"
              >
                <CustomInput
                  label="Date of Birth"
                  inputValue={formatDate(userprofileres?.dob)}
                  showIcon={true}
                />
              </Link>
            </div>
          </div>

          {/* Cards section  */}
          <div className="row px-2 px-md-0">
            <div className="col-md col-3 px-md-3 px-1 mt-2">
              <div className="col-md-12 profile_cards">
                <Link href="/userProfile/addresses/" className="style_a_tag">
                  <img className="img-fluid pb-3 icon_size_cards_in_mobile " src="/imagess/loc.png" />
                  <div>Addresses</div>
                </Link>
              </div>
            </div>
            <div className="col-md col-3 px-md-3 px-1 mt-2">
              <div className="col-md-12 profile_cards">
                <img className="img-fluid pb-3  icon_size_cards_in_mobile" src="/imagess/cart.png" />
                <Link
                  href="/userProfile/bookings/bookings"
                  className="style_a_tag"
                >
                  <div>Orders</div>
                </Link>
              </div>
            </div>
            <div className="col-md col-3 px-md-3 px-1 mt-2">
              <div className="col-md-12 profile_cards">
                <img className="img-fluid pb-3  icon_size_cards_in_mobile" src="/imagess/clip.png" />
                <Link
                  href="/userProfile/bookings/bookings"
                  className="style_a_tag"
                >
                  <div>Bookings</div>
                </Link>
              </div>
            </div>
            <div className="col-md col-3  px-md-3 px-1 mt-2">
              <div className="col-md-12 profile_cards">
                <img className="img-fluid pb-3  icon_size_cards_in_mobile" src="/imagess/set.png" />
                <Link
                  href="/userProfile/settings/settings"
                  className="style_a_tag"
                >
                  <div>Settings</div>
                </Link>
              </div>
            </div>
            <div className="col-md col-3  px-md-3 px-1 mt-2 ">
              {/* <div className="col-md-12 profile_cards">
                <img className="img-fluid pb-3  icon_size_cards_in_mobile" src="/imagess/set.png" />
                <Link
                  href="/userProfile/settings/settings"
                  className="style_a_tag"
                >
                  <div>Settings</div>
                </Link>
              </div> */}
            </div>
            {/* <div className="col-md col- mt-2"></div> */}
          </div>
          {/* Login security and Signout section buttons s */}
          <div
            style={{
              backgroundColor: "#f5f6f7",
              margin: "2rem 0 1rem 0",
              padding: "20px",
            }}
          >
            <div className="col-md-12 border_for_all_pages">
              <div className="row">
                <div className="col-md-6 col-9 m-auto">
                  <div className="login_text_profile">
                    <img className="img-fluid " src="/imagess/security.png" />{" "}
                    &nbsp;&nbsp;Login and Security
                  </div>
                </div>
                <div className="col-md-6 col-3 text-end">
                  <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
                </div>
              </div>
            </div>
            <div
              onMouseEnter={(e: any) => {
                setButtonColorOnHover("lightgrey");
                setButtonHoverCursor("pointer");
              }}
              onMouseLeave={(e: any) => {
                setButtonColorOnHover("white");
                setButtonHoverCursor("auto");
              }}
              onClick={(e: any) => {
                dispatch({ type: AUTH_ACTIONS.LOGOUT });
                removeCookie && removeCookie("profile");
              }}
              className="col-md-12 border_for_all_pages mt-2"
            >
              <div className="row">
                <div className="col-md-6 col-6 m-auto">
                  {" "}
                  <div className="login_text_profile">
                    {" "}
                    <img
                      className="img-fluid"
                      src="/svgicons/sign-out.svg"
                    />{" "}
                    &nbsp;Sign out
                  </div>
                </div>
                <div className="col-md-6 col-6 text-end">
                  <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
      </div>
      : <>loading </>}
    </SideBar>
  );
};

export default Profile_page;

{
  /* <div className="col-md-12 pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="basic_text1 mb-0 pb-0">Gender</p>
                  </div>
                  <div className="col-md-6 text-end"> */
}
{
  /* <p className="basic_text2 mb-0 pb-0">
                      Male &nbsp;
                      <img
                        className="img-fluid right_icon_style"
                        src="../assets/images/rightt.png"
                      />{" "}
                    </p> */
}

{
  /* {profile?.genderId === 0 ? (
                      <Link
                        href="/addusergender"
                        className="text_style_profile"
                      >
                        <span>
                          Select &nbsp;
                          <img
                            className="img-fluid right_icon_style"
                            src="../assets/images/rightt.png"
                          />
                        </span>
                      </Link>
                    ) : profile?.genderId === 1003 ? (
                      <p className="basic_text2 mb-0 pb-0">Male</p>
                    ) : profile?.genderId === 1004 ? (
                      <p className="basic_text2 mb-0 pb-0">Female</p>
                    ) : profile?.genderId === 1005 ? (
                      <p className="basic_text2 mb-0 pb-0">Other</p>
                    ) : null}
                  </div>
                </div>
                <hr className="background_line" />
              </div>

              <div className="col-md-12 pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="basic_text1 mb-0 pb-0">Date of Birth</p>
                  </div>
                  <div className="col-md-6 text-end">
                    {profile?.dob ? (
                      <p className="basic_text2">
                        <Moment format="DD/MM/YYYY">{profile?.dob}</Moment>
                      </p>
                    ) : (
                      <Link href="/adduseredob" className="text_style_profile">
                        <span>
                          Select &nbsp;
                          <img
                            className="img-fluid right_icon_style"
                            src="../assets/images/rightt.png"
                          />
                        </span>
                      </Link>
                    )}{" "}
                  </div>
                </div>
                <hr className="background_line" />
              </div>
            </div> */
}

{
  /* Contact info section  */
}
// <div
//   className="col-md-12 px-5  pb-4 border_profile mt-4"
//   style={{ borderRadius: "8px" }}
// >
//   <div className="col-md-12 pt-4">
//     <p className="basic_text">Contact info</p>
//   </div>
//   <div className="col-md-12 pt-3">
//     {/* <Link href="/edit-email-profile" className="style_a_tag"> */}
//     <div className="row">
//       <div className="col-md-6 m-auto   ">
//         <p className="basic_text1 mb-0 pb-0 ">Emails</p>
//       </div>
//       <div className="col-md-6 text-end">
//         {/* <p className="basic_text2 mb-0 pb-0">dummy@gmail.com</p>
//         <p className="basic_text2 mb-0 pb-0">dummy1@gmail.com</p> */}
//         {/* <Link> */}
//         <Link href="/email-details" className="style_a_tag">
//           <p className="basic_text2 mb-0 pb-0">
//             {profile?.primaryEmailVerify ? (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/verified.png"
//               />
//             ) : (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/unverified.png"
//               />
//             )}{" "}
//             &nbsp;
//             {profile?.primaryEmail}{" "}
//             <img
//               className="img-fluid right_icon_style"
//               src="../assets/images/rightt.png"
//             />
//           </p>
//           <p className="basic_text2 mb-0 pb-0">
//             {profile?.secondaryEmailVerify ? (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/verified.png"
//               />
//             ) : (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/unverified.png"
//               />
//             )}{" "}
//             &nbsp;
//             {profile?.secondaryEmail}{" "}
//             <img
//               className="img-fluid right_icon_style"
//               src="../assets/images/rightt.png"
//             />
//           </p>
//         </Link>
//         {/* </Link> */}
//       </div>
//     </div>
//     {/* </Link> */}
//     <hr className="background_line" />
//   </div>
//   <div className="col-md-12 pt-3">
//     <div className="row">
//       <div className="col-md-6">
//         <p className="basic_text1 mb-0 pb-0">Phone</p>
//       </div>
//       <div className="col-md-6 text-end">
//         <Link href="/mobile-details-login" className="style_a_tag">
//           <p className="basic_text2 mb-0 pb-0">
//             {profile?.primaryMobileVerify ? (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/verified.png"
//               />
//             ) : (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/unverified.png"
//               />
//             )}{" "}
//             &nbsp;
//             {profile?.primaryMobile} &nbsp;
//             <img
//               className="img-fluid right_icon_style"
//               src="../assets/images/rightt.png"
//             />{" "}
//           </p>
//           <p className="basic_text2 mb-0 pb-0">
//             {profile?.secondaryMobileVerify ? (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/verified.png"
//               />
//             ) : (
//               <img
//                 className="img-fluid img_width_verified"
//                 src="../assets/images/unverified.png"
//               />
//             )}{" "}
//             &nbsp;{" "}
//             {profile?.secondaryMobile ? <span>+</span> : null}{" "}
//             {profile?.secondaryMobile} &nbsp;
//             <img
//               className="img-fluid right_icon_style"
//               src="../assets/images/rightt.png"
//             />{" "}
//           </p>
//         </Link>
//       </div>
//     </div>
//     <hr className="background_line" />
//   </div>
// </div>

{
  /* Password section  */
}
{
  /* <div
              className="col-md-12 px-5  pb-4 border_profile mt-4"
              style={{ borderRadius: "8px" }}
            >
              <div className="col-md-12 pt-4">
                <p className="basic_text">Password</p>
              </div>

              <div className="col-md-12 pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="basic_text1 mb-0 pb-0">Last changed Oct 19</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p className="basic_text2 mb-0 pb-0">
                      .............
                      <img
                        className="img-fluid right_icon_style"
                        src="../assets/images/rightt.png"
                      />{" "}
                    </p>
                  </div>
                </div>
                <hr className="background_line" />
              </div>
            </div> */
}

{
  /* Personal documents section  */
}
{
  /* <div
              className="col-md-12 px-5  pb-4 border_profile mt-4"
              style={{ borderRadius: "8px" }}
            >
              <div className="col-md-12 pt-4">
                <p className="basic_text">Personal Documents</p>
              </div>
              <div className="col-md-12 pt-3">
                <div className="row">
                  <div className="col-md-6 m-auto   ">
                    <p className="basic_text1 mb-0 pb-0 ">
                      National Identity Card
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p className="basic_text2 mb-0 pb-0">Muhammad</p>
                  </div>
                </div>
                <hr className="background_line" />
              </div>
              <div className="col-md-12 pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="basic_text1 mb-0 pb-0">
                      Educational documents
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p className="basic_text2 mb-0 pb-0">
                      Zeeshan &nbsp;
                      <img
                        className="img-fluid right_icon_style"
                        src="../assets/images/rightt.png"
                      />{" "}
                    </p>
                  </div>
                </div>
                <hr className="background_line" />
              </div>
              <div className="col-md-12 pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="basic_text1 mb-0 pb-0">Medical documents</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p className="basic_text2 mb-0 pb-0">
                      Male &nbsp;
                      <img
                        className="img-fluid right_icon_style"
                        src="../assets/images/rightt.png"
                      />{" "}
                    </p>
                  </div>
                </div>
                <hr className="background_line" />
              </div>
            </div> */
}