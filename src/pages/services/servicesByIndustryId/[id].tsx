import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getIndustryServiceByIndustryId } from "@/helper";
import {
  getOrderIdInLocalStorage,
  setServiceInLocalStorage,
} from "@/Components/helper";
import { useSelector } from "react-redux";
import SideBar from "@/Components/components/sidebar";
import Layout2 from "@/Components/Layout2/Layout2";

const ServicesByIndustryId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [listOfServices, setListOfServices] = useState([]);
  const { message, loading, profile } = useSelector((state: any) => state);
  useEffect(() => {
    if (id) {
      const requestAllServices = () => {
        getIndustryServiceByIndustryId(parseInt(id as string))
          .then((res) => {
            console.log(res);
            setListOfServices(res.result.services);
          })
          .catch((e) => alert(e));
      };
      requestAllServices();
    }
  }, [id]);

  const handleChildServices = (service: any) => {
    if (service.hasChild === true) {
      // console.log("haschild", service.hasChild);
      router.push(`/services/${service.serviceId}`);
    } else {
      const orderId = getOrderIdInLocalStorage();
      if (!orderId) {
        setServiceInLocalStorage(service);
      }
      // router.push(`/services/serviceDetail/detail`);
      router.push(`/flowManagementPages/content-page`);
    }
  };

  return (
    <Layout2>
    <>
    
      {profile?.firstName ? (
        // if user is logged in
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
            <span>Sub Industry</span>
          </div>
        </div>
      </div>
          <div className="col-md-12 custom_padding_services_pages">
            <div className="row">
              {listOfServices.length === 0 ? (
                <div>No Record Found</div>
              ) : (
                listOfServices?.map((itm: any, index: any) => (
                  <div
                    key={index}
                    className="col-md-3  "
                    onClick={() => handleChildServices(itm)}
                  >
                    <div className="card_serices_by_industry_id mt-4 mt-md-0">
                    <div>
                      <img
                        src={
                          itm.serviceUrl ??
                          "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg"
                        }
                        alt="serviceImage"
                        className="img-fluid img_border"
                      />
                    </div>
                    <div className="py-3 px-2">
                      <p className="mb-0 title_text_services" key={index}>
                        {itm.serviceName}
                      </p>
                    </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </SideBar>
      ) : (
        // if user is not login section
        <div className="col-md-12 custom_padding_services_pages">
          <div className="row">
            {listOfServices.length === 0 ? (
              <div>No Record Found</div>
            ) : (
              listOfServices?.map((itm: any, index: any) => (
                <div
                  key={index}
                  className="col-md-3"
                  onClick={() => handleChildServices(itm)}
                >
                  <div className="card_serices_by_industry_id px-0">
                  <div>
                    <img
                      src={
                        itm.serviceUrl ??
                        "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg"
                      }
                      alt="serviceImage"
                      className="img-fluid img_border"
                    />
                  </div>
                  <div className="py-3 px-2">
                    <p className="mb-0 title_text_services" key={index}>
                      {itm.serviceName}
                    </p>
                  </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
    </Layout2>
  );
};

export default ServicesByIndustryId;
