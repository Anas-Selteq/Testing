import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { resendOTPCode, VerificationAction } from "@/helper";
import ReusableAuthPage from "@/Components/reusable_auth_page";
import VerifyManagedMobile from "@/Components/auth/verify_mobile";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

function MobileVerification() {
  const router = useRouter();
  const query = router.query;
  const { userId, priamryMobile, recreatePassword } = query || {};
  const [loader, setLoader] = useState(false);
  const [loadToken, setLoadToken] = useState(false);
  const [otp, setOTP] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [success, setSuccess] = useState<any>(false);
  const [resend, Setresend] = useState<any>(true);
  const [errorMessage, setErrorMessage] = useState({
    type: false,
    message: "",
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoader(true);
    setErrorMessage({ type: false, message: "" });
    VerificationAction(Number(userId), otp, priamryMobile)
      .then((result) => {
        if (result?.statusCode === 0 && recreatePassword) {
          router.push({
            pathname: "/auth/create_forget_password",
            query: { ...query, userOTP: otp, userId, recreatePassword },
          });
        } else if (result?.statusCode === 0 && !recreatePassword) {
          router.push({
            pathname: "/auth/create_password",
            query: { userOTP: otp, userId, recreatePassword },
          });
        } else {
          setErrorMessage({ type: false, message: result?.message });
        }
      })
      .catch((e) => alert(e))
      .finally(() => setLoader(false));
  };

  React.useEffect(() => {
    if (!priamryMobile || !userId) {
      // router.replace("/auth/signup");
    }
  }, [priamryMobile, router, userId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => {
        const newSeconds = seconds - 1;
        if (newSeconds <= 0) {
          setSuccess(false);
          Setresend(true);
          setSeconds(60);
          return 0;
        }
        return newSeconds;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const resendHandler = () => {
    setLoader(true);
    resendOTPCode(userId, authToken)
      .then((result) => {
        Setresend(false);
        setErrorMessage({
          type: true,
          message:
            result?.message == "Successfully"
              ? "Code Sent! Please check your mobile."
              : result?.message,
        });
        setSuccess(true);
      })
      .catch((e) => alert(e))
      .finally(() => setLoader(false));
  };

  // /////////////////////////  functions
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadToken(!loadToken);
    }, 20000);
    return () => clearInterval(interval);
  }, [loadToken]);

  const handleToken = React.useCallback((token: any) => {
    setAuthToken(token);
    return token;
  }, []);
  return (
    <ReusableAuthPage
      form={
        <>
          {!authToken && <GoogleReCaptcha onVerify={handleToken} />}
          <VerifyManagedMobile
            handleClick={handleClick}
            primaryMobile={priamryMobile}
            setOTP={setOTP}
            resend={resend}
            resendHandler={resendHandler}
            success={success}
            seconds={seconds}
            loader={loader}
            errorMessage={errorMessage}
            otp={otp}
          />
        </>
      }
      handleToken={handleToken}
    />
  );
}

export default MobileVerification;
