import React from "react";
import { Layout } from "@/Components/Layout/Layout";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { store } from "../Redux/Store";
import "bootstrap/dist/css/bootstrap.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleReCaptchaProvider
        // for local recaptcha
        // reCaptchaKey={"6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK"}
        // for expert
        reCaptchaKey={"6LffzzMnAAAAAIOuYfOmigFsikdPKR0VOhxv1nZl"}
        // for newexpert-preprod
        // reCaptchaKey={"6LdV2TInAAAAAOobs8XYZoA1hC67kC2Sj7qIlgdB"}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleReCaptchaProvider>
    </Provider>
  );
}
