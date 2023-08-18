import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAllChildServices } from "@/helper";
import { getOrderIdInLocalStorage, setServiceInLocalStorage } from "@/Components/helper";

function Services() {
  const router = useRouter();
  const { id } = router.query;
  const [listOfServices, setListOfServices] = useState<any>([]);

  useEffect(() => {
    if (id) {
      const getServiceByParentServiceId = () => {
        getAllChildServices(id)
          .then((res) => {
            if (res.result?.services === null) {
              alert("services are null");
            } else {
              setListOfServices(res.result?.services);
            }
          })
          .catch((e) => alert(e))
          .finally(() => {});
      };
      getServiceByParentServiceId();
    }
  }, [id]);

  const handlePageHere = (service: any) => {
    if (service?.hasChild === true) {
      router.push(`/services/${service?.serviceId}`);
    } else {
      const orderId = getOrderIdInLocalStorage();
      if(!orderId){
        setServiceInLocalStorage(service);
      }else{
        alert("Already in Pending Purchase Order Please Complete it first");
      }
      router.push("/services/serviceDetail/detail");
    }
  };

  return (
    <div className="p-4">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {listOfServices?.length === 0 ? (
          <div>Record Not Found</div>
        ) : (
          listOfServices?.map((itm: any, index: any) => (
            <div key={index} className="mt-2 text-center ">
              <div className="border_cards" onClick={() => handlePageHere(itm)}>
                <Image
                  src={
                    itm?.serviceImage ??
                    "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg"
                  }
                  alt="industryImage"
                  height={339}
                  width={678}
                />
                <div className="py-3">
                  <p className="mb-0" key={index}>
                    {itm?.serviceName}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Services;
