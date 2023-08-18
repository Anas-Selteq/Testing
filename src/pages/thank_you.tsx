import SideBar from "@/Components/components/sidebar";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const ThankYou = () => {
  const { message, loading, profile } = useSelector((state: any) => state);
  const router = useRouter();
  const removeAllVariables = () => {
    router.replace("/");
    localStorage.removeItem("selectedService");
  };
  return (
    <>
    
     {profile?.firstName ? (
      <SideBar  activeIndex={0}>
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
            <span>Thankyou</span>
          </div>
        </div>
      </div>
      <div className="px-md-5 px-3   col-md-12 pt-3 mt-1 margin_bottom_new">
        <div className="col-md-12 p-4 text-center bg_color_white_thankyou">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 py-1">
              <img className="img-fluid" src="/imagess/thankyou.png" />
              <h2 className="pt-4">Thankyou for booking!</h2>
              <h6 className="pt-1 label_text">
                Thankyou so much for choosing to book with us through our
                website, We are thrilled to have successfully processed your
                booking and are grateful for the opportunity to serve you. Your
                trust in our online platform means a lot to us, and we are
                committed to delivering a seamless and enjoyable experience.
              </h6>
              <button
                className="btn btn-danger mt-2 py-1 px-4"
                onClick={removeAllVariables}
              >
                Back to home page
              </button>
              <div className="bg-white p-2 text-center mt-auto pt-3">
                <p>
                  Want to book another service?{" "}
                  <span onClick={removeAllVariables}>
                    Click here to book another service
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      </SideBar>
      )
      :
      <div className="px-md-5 px-3 col-md-12 pt-3 mt-3">
      <div className="col-md-12 p-4 text-center bg_color_white_thankyou">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 py-1">
            <img className="img-fluid" src="/imagess/thankyou.png" />
            <h2 className="pt-4">Thankyou for booking!</h2>
            <h6 className="pt-1 label_text">
              Thankyou so much for choosing to book with us through our
              website, We are thrilled to have successfully processed your
              booking and are grateful for the opportunity to serve you. Your
              trust in our online platform means a lot to us, and we are
              committed to delivering a seamless and enjoyable experience.
            </h6>
            <button
              className="btn btn-danger mt-2 py-1 px-4"
              onClick={removeAllVariables}
            >
              Back to home page
            </button>
            <div className="bg-white p-2 text-center mt-auto pt-3">
              <p>
                Want to book another service?{" "}
                <span onClick={removeAllVariables}>
                  Click here to book another service
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
}
    </>
  );
};
export default ThankYou;
