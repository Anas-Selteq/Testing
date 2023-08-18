import Img from "@/Components/Image/Image";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import * as React from "react";
import styled from "styled-components";
import { Button } from "@/styles/Button.style";
import InputField from "@/Components/InputField";
import { useRouter } from "next/router";
import ImageUploadCard from "@/Components/UploadAvatar/UploadAvatar";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { addUserProfile, uploadUserImage } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";

function PersonalInformation() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loader, setLoader] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [checkValue, setCheckValue] = React.useState(false);
  const [value, setValue] = React.useState("female");

  const radioBoxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const router = useRouter();
  const { userId } = router.query || {};

  React.useEffect(() => {
    if (!userId) {
      // router.replace("/auth/signup");
    }
  }, [userId, router]);

  const handleInputChange = (e: any) => {
    const regex = /^[a-zA-Z]+$/;
    const value = e.target.value;
    if (regex.test(value)) {
      setFirstName(value);
      setLastName(value);
    } else {
      setFirstName("");
      setLastName("");
    }
    // if (regex.test(value)) {
    //   setFirstName(value);
    //   console.log("===========>", firstName);
    // }
  };
  const handleInputChangetwo = (e: any) => {
    const regex = /^[a-zA-Z]+$/;
    const value = e.target.value;
    if (regex.test(value)) {
      setLastName(value);
    } else {
      setLastName("");
    }
    // if (regex.test(value)) {
    //   setFirstName(value);
    //   console.log("===========>", firstName);
    // }
  };

  const genderId = 1;
  const imagePath = "";
  const modifiedBy = 0;
  const handleClick = (e: any) => {
    e.preventDefault();
    if (checkValue == false) {
      setErrorMessage({
        type: false,
        message: "Please select the agreement of expert.",
      });
      return;
    }
    setLoader(true);
    addUserProfile({
      userId: Number(userId),
      firstName,
      lastName,
      genderId,
      imagePath: imageUrl,
      modifiedBy,
    })
      .then((result) => {
        if (result?.code === 0) {
          router.push({ pathname: "/auth/add_email", query: { userId } });
        } else {
          setErrorMessage({ type: false, message: result?.message });
        }
      })
      .catch((e) => alert(e))
      .finally(() => setLoader(false));
  };
  const onChangeFile = (e: any) => {
    e.preventDefault();
    uploadUserImage(userId, e.target.files[0], "preprod")
      .then((result: any) => {
        if (result?.code === 0) {
          setImageUrl(
            "https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/" +
              result?.result?.imageURL
          );
        } else {
          setErrorMessage({ type: false, message: result?.message });
        }
      })
      .catch((e) => alert(e))
      .finally(() => setLoader(false));
  };

  const handleLinkClick = (e: any) => {
    e.preventDefault();
    window.open(e.currentTarget.href, "_blank");
  };

  const submitButton =
    firstName && lastName && checkValue ? (
      <Button type="submit" width="340px" style={{ marginTop: "4rem" }}>
        Confirm
      </Button>
    ) : (
      <Button
        type="submit"
        width="340px"
        disabled
        style={{ backgroundColor: "#e17375", marginTop: "4rem" }}
      >
        Confirm
      </Button>
    );

  return (
    <div className="container mt-5 mb-4 text-center">
      <div className="backgroundsignup">
        <div className="row">
          <div className="col-md-4 bg_image_signup bg-light">
            <div className="text-center background_image_new d-flex align-items-center  h-100 justify-content-center">
              <Image
                className="img-fluid img_width_signup"
                src="/assets/Images/logoOnbanner.png"
                alt="Logo"
                height={249.19}
                width={156.02}
              />
            </div>
          </div>
          <div
            className="col-md-8 mx-auto d-flex flex-column align-items-center"
            style={{ backgroundColor: "#f8fafc" }}
          >
            {/* <div className="col-md-12 text-end px-3 py-3">
              <button className="btn btn-light btn-sm rounded-pill color_light_font">
                Skip
              </button>
            </div> */}
            <div className="m-auto">
              <form onSubmit={handleClick}>
                <h3
                  style={{
                    margin: " 0 0 4% 0",
                    fontFamily: "Roboto",
                    fontSize: "30px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#22272e",
                  }}
                >
                  Profile <span style={{ color: "#dc0000" }}>Informations</span>
                </h3>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#6c6c6c",
                  }}
                >
                  Dear user please add your personal information to
                  <br />
                  complete Registration
                </p>
                <InputField
                  indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/person.svg"
                  placeholder="Enter first name"
                  label="Enter First Name"
                  passwordLabel=""
                  type="text"
                  required={true}
                  onChange={handleInputChange}
                />
                <InputField
                  indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/person.svg"
                  placeholder="Enter last name"
                  label="Enter Last Name"
                  passwordLabel=""
                  type="text"
                  required={true}
                  onChange={handleInputChangetwo}
                />
                {/* <div className="col-md-12 text-center py-2 ">
                  {!(firstName && lastName) ? (
                    <span className="incorrect_format">
                      ❌ Don&#39;t include special character or number in First
                      name & Last name.
                    </span>
                  ) : (
                    <span className="correct_format">
                      ✔️ This is correct format
                    </span>
                  )}
                </div> */}

                {/* <FormControl
                  style={{
                    width: "340px",
                    margin: "auto",
                    display: "block",
                  }}
                >
                </FormControl> */}
                {/* <div className="col-md-12 mt-2">
                  <input
                    checked={checkValue}
                    type="checkbox"
                    onChange={() => setCheckValue(!checkValue)}
                    style={{
                      accentColor: "red",
                      marginTop: "1rem",
                    }}
                  />
                  <p style={{ marginLeft: "0.5rem", textAlign: "left" }}>
                    <span style={{ color: "#6c6c6c", fontSize: "10px" }}>
                      I agree to the Expert
                    </span>
                    <Link
                      href="/terms_and_conditions"
                      onClick={handleLinkClick}
                      style={{
                        fontWeight: "bold",
                        color: "#444444",
                        textDecoration: "none",
                        fontSize: "10px",
                      }}
                    >
                      <strong>
                        Terms of <br /> Services{" "}
                      </strong>
                    </Link>
                    <span style={{ fontSize: "10px" }}>and</span>&nbsp;
                    <Link
                      style={{
                        fontWeight: "bold",
                        color: "#444444",
                        textDecoration: "none",
                        fontSize: "10px",
                      }}
                      href="/privacy_policy"
                    >
                      <strong>Privacy Policy</strong>
                    </Link>
                  </p>
                </div> */}
                <div className="row px-5 pt-2 ">
                  <div className="form-check form-check-inline d-flex ">
                    &nbsp;&nbsp;&nbsp;
                    <input
                      className="form-check-input check_padding "
                      type="checkbox"
                      onChange={() => setCheckValue(!checkValue)}
                      id="inlineCheckbox1"
                      defaultValue="option1"
                    />
                    &nbsp;&nbsp;
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      {/* <span style={{ color: "#6c6c6c", fontSize: "10px" }}>
                      I agree to the Expert
                    </span>
                    <Link
                      href="/terms_and_conditions"
                      onClick={handleLinkClick}
                      style={{
                        fontWeight: "bold",
                        color: "#444444",
                        textDecoration: "none",
                        fontSize: "10px",
                      }}
                    >
                      <strong>
                        Terms of <br /> Services{" "}
                      </strong>
                    </Link>
                    <span style={{ fontSize: "10px" }}>and</span>&nbsp;
                    <Link
                      style={{
                        fontWeight: "bold",
                        color: "#444444",
                        textDecoration: "none",
                        fontSize: "10px",
                      }}
                      href="/privacy_policy"
                    >
                      <strong>Privacy Policy</strong>
                    </Link> */}
                      <span style={{ color: "#6c6c6c", fontSize: "12px" }}>
                        I agree to the Expert
                      </span>{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#444444",
                          textDecoration: "none",
                          fontSize: "12px",
                        }}
                      >
                        Terms of Service&nbsp;
                      </span>
                      <span style={{ color: "#6c6c6c", fontSize: "12px" }}>
                        and&nbsp;
                      </span>
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#444444",
                          textDecoration: "none",
                          fontSize: "12px",
                        }}
                      >
                        Privacy Policy.
                      </span>
                    </label>
                  </div>
                </div>

                {loader ? <Loader style={{}} status={loader} /> : submitButton}
                {errorMessage.message === "" ? null : (
                  <Message type={errorMessage.type}>
                    {errorMessage.message}
                  </Message>
                )}
              </form>
            </div>
            <div className="text-center">
              <hr />
              <p className="font_set_terms_conditions m-0 p-0">
                Terms & Conditions • Privacy Policy • Copyright • Cookies Policy
                • Help
              </p>
              <p className="m-0 p-0 font_set_terms_conditions1">
                © 2022 Selteq Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
