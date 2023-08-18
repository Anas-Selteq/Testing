import { useState } from "react";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import Image from "next/image";

type HandleTokenFunction = (token: any) => void;
const ReusableAuthPage = ({
  form = <></>,
  handleToken,
}: {
  form?: JSX.Element;
  handleToken: HandleTokenFunction;
}) => {
  const updateAuthToken = (token: any) => {
    handleToken(token);
  };

  return (
    <>
      {/* {!authToken && <GoogleReCaptcha onVerify={handleToken} />} */}
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
            <div className="col-md-8 mx-auto background_grid_auth d-flex flex-column align-items-center">
              <div className="m-auto">{form}</div>
              <div className="text-center">
                <hr />
                <p className="font_set_terms_conditions m-0 p-0">
                  Terms & Conditions • Privacy Policy • Copyright • Cookies
                  Policy • Help
                </p>
                <p className="m-0 p-0 font_set_terms_conditions1">
                  © 2022 Selteq Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusableAuthPage;
