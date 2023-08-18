/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Hero from "@/Components/Hero/Hero";
import Industries from "@/Components/Industriess/Industries";
import Trending from "../Components/Trending/Trending";
// import Foryou from "../Components/Foryou/Foryou";
import ServicesListing from "@/Components/ServicesListing/ServicesListing";
import Products from "@/Components/Products/Products";
import Stories from "@/Components/Stories/Stories";
import { getAllSectionsDetails } from "@/helper";
import TrendingLand from "@/Components/Landingpagecomponents/TrendingLand";
import Justforyou from "@/Components/Landingpagecomponents/Justforyou";
import Foryou from "@/Components/Landingpagecomponents/Foryou";
import Productsforyouu from "@/Components/Landingpagecomponents/Productsforyouu";
import Justforyou2 from "@/Components/Landingpagecomponents/Justforyou2";
import { useRouter } from "next/router";
import Layout2 from "@/Components/Layout2/Layout2";
import SStories from "@/Components/Landingpagecomponents/SStories";

export default function Home() {
  const Main = styled.main``;
  const [data, setData] = useState<any>();
  const [components, setComponents] = useState<any>([]);
  const [allresponselanding, setLandingres] = useState<any>("");

  const apiCall = () => {
    getAllSectionsDetails()
      .then((res: any) => {
        setLandingres(res?.result);
        const componentsToRender = res?.result?.sectionsDetails?.map(
          (item: any) => {
            if (item?.name === "Trending") {
              var position = parseInt(item?.positionNo);
              console.log("view_large", item)
              return {
                // component: <Trending data={item} />,
                component: <TrendingLand data={item} />,
                positionNo: position,
              };
            }
            // else if (
            //   item?.sectionVariationName === "Vertical View All Services"
            // ) {
            //   var position = parseInt(item?.positionNo);

            //   return {
            //     component: <Products data={item} />,
            //     pos: position,
            //   };
            // }
            else if (item?.sectionVariationName === "Industry Grid View") {
              var position = parseInt(item?.positionNo);
              return {
                component: <Industries data={item} />,
                pos: position,
              };
           
            }  else if(item?.name === "Banner")
            {
              var position = parseInt(item?.positionNo);
              console.log("itemmmmmmmmmmmmmmmm", item);
              return {
                component:  <Justforyou data={item} />,
                pos: position,
              };
            }else if(item?.name === "stories")
            {
              var position = parseInt(item?.positionNo);
              // console.log("itemmmmmmmmmmmmmmmm", item);
              // return;
              return {
                // component:  <Foryou data={item} />,
                component:  <SStories data={item} />,
                pos: position,
              };
            }  else if(item?.name === "banner2")
            {
              var position = parseInt(item?.positionNo);
              console.log("itemmmmmmmmmmmmmmmm", item);
              return {
                component:  <Justforyou data={item} />,
                pos: position,
              };
            } else  if (item?.name === "recommender") {
              var position = parseInt(item?.positionNo);
              console.log("view_large", item)
              return {
                // component: <Trending data={item} />,
                component: <TrendingLand data={item} />,
                positionNo: position,
              };
            } else  if (item?.name === "services") {
              var position = parseInt(item?.positionNo);
              console.log("view_large", item)
              return {
                // component: <Trending data={item} />,
                component: <TrendingLand data={item} />,
                positionNo: position,
              };
            } else  if (item?.name === "offers") {
              var position = parseInt(item?.positionNo);
              console.log("view_large", item)
              return {
                // component: <Trending data={item} />,
                component: <TrendingLand data={item} />,
                positionNo: position,
              };
            }
            else  if (item?.name === "All services") {
              var position = parseInt(item?.positionNo);
              console.log("view_large", item)
              return {
                // component: <Trending data={item} />,
                component: <TrendingLand data={item} />,
                positionNo: position,
              };
            }
            // else if(item?.sectionVariationName === "Horizontal View Large")
            // {
            //   var position = parseInt(item?.positionNo);
            //   console.log("jijijijij", item);
            //   return;
            //   return {
            //     component:  <TrendingLand data={item} />,
            //     pos: position,
            //   };
            // }
            // else if (item?.sectionVariationName === "2 X 2 Grid") {
            //   var position = parseInt(item?.positionNo);
            //   return {
            //     component: <ServicesListing data={item} />,
            //     pos: position,
            //   };
            // } else if (
            //   item?.sectionVariationName === "Banner Horizontal View"
            // ) {
            //   var position = parseInt(item?.positionNo);
            //   return {
            //     component: <Foryou data={item} />,
            //     pos: position,
            //   };
            // } else if (
            //   item?.sectionVariationName === "Small Horizontal View Circle"
            // ) {
            //   var position = parseInt(item?.positionNo);
            //   return {
            //     component: <Stories data={item} />,
            //     pos: position,
            //   };
            // }

            return null;
          }
        );

        let sortedComponents = componentsToRender
          .filter((component: any) => component !== null)
          .sort((a: any, b: any) => a?.pos - b?.pos);

        setComponents(sortedComponents);
      })
      .catch((err) => alert(err));
  };

  console.log("landing", allresponselanding);
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <Layout2>
    <div
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
        height: "100vh",
        paddingBottom: "10%",
      }}
    >
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <Main>
        {/* <Text>
          <button onClick={()=>{
            const data = getPaymentFromLocalStorage();
            const data1 = getServiceFromLocalStorage();
            console.log(data,data1);
          }}>Click here to move signup</button>
        </Text> */}
        <div style={{ marginBottom: "30px" }}>
          <Hero />
          {components?.map((component: any, index: any) => (
            <React.Fragment key={index}>{component?.component}</React.Fragment>
          ))}
        </div>

        {/* <div className="custom_padding1">
          <TrendingLand />
        </div> */}
        {/* <div className="custom_padding1 pt-5">
          <Justforyou2 />
        </div> */}
        {/* {allresponselanding ? (
          <>
            {allresponselanding?.sectionsDetails[2]?.name ===
            "Small Horizontal View Circle" ? (
              <div className="custom_padding1 pt-5">
                <Foryou dataa={allresponselanding?.sectionsDetails[2]} />
              </div>
            ) : (
              <div className="custom_padding1 pt-5">
              <p>No Record Found</p>
              </div>
            )}
          </>
        ) : (
          <div className="custom_padding1 pt-5 text-center">
           <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
            </div>
        )} */}

        {/* <div className="custom_padding1 pt-5">
         
        </div> */}
        {/* <div className="pt-5"> */}
          {/* <Productsforyouu /> */}
          {/* {allresponselanding ? (
            <>
              {allresponselanding?.sectionsDetails[4]?.name ===
              "Recommended 2 X 2 grid" ? (
                <div className="custom_padding1 pt-5">
                  <Foryou dataa={allresponselanding?.sectionsDetails[4]} />
                </div>
              ) : (
                <div className="custom_padding1 pt-5">
                <p>No Record Found</p>
                </div>
              )}
            </>
          ) : (
            <div className="custom_padding1 pt-5 text-center">
            <div className="spinner-border text-danger " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
            </div>
          )} */}
        {/* </div> */}
      </Main>
    </div>
    </Layout2>
  );
}
