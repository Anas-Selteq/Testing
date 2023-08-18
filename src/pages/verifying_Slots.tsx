import { getOrderIdInLocalStorage } from "@/Components/helper";
import { ServicePageMovement } from "@/Components/service_page_movement";
import {
  getPurchaseOrderWithId,
  patchPurchaseOrder,
  verifyDispatchment,
} from "@/helper";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const VerifyingSlots = () => {
  const router = useRouter();
  const [customerId, setCustomerId] = useState<any>("")
  const [customerdata, setCustomerdata] = useState<any>("")
  const getPurchaseOrder = useCallback(() => {
    const purchaseOrderId = parseInt(getOrderIdInLocalStorage());
    if (isNaN(purchaseOrderId)) {
      router.replace("/");
    } else {
      getPurchaseOrderWithId(purchaseOrderId).then((response) => {
        console.log("new resssssssssssssssssss", response?.result?.data)
        // setCustomerId(response?.result?.data?.customerId);
    //     const data = {  data: [
    //       {
    //       date: response?.result?.data?.bookingDate,
    //       timeFrom: response?.result?.data?.timeFrom,
    //       timeTo: response?.result?.data?.timeTo,
    //       customer: response?.result?.data?.customerId,
    //     }
    //   ]
    // };
      const dataa = response?.result?.data?.dateJson.map((item: any) => (
        { 
          date: item.bookingDate,
          timeFrom: item.timeFrom,
          timeTo: item.timeTo,
          customer: response?.result?.data?.customerId
         }
        ))

      const data = {
        data: dataa
      } 
  
   
    
    // const data = {  data: response?.result?.data?.dateJson}
        verifyDispatchment(data)
        
          .then((res) => {
            console.log("CALLED VERIFY DISPACHMENT");
            if (res?.response?.data?.statusCode === 1) {
              const nextScreen = response?.result?.purchaseOrderFlow[0]?.screens.find(
                (screen: any) => screen.screenName === "ExpertSlots"
              );
              if (nextScreen) {
                const data = {
                  purchaseOrderId: response?.result?.data?.purchaseOrderId,
                  currentStep: nextScreen.position - 1,
                };
                patchPurchaseOrder(data)
                  .then((res) => {
                    const returnedPage = ServicePageMovement(
                      nextScreen.screenName
                    );
                    router.replace(`/${returnedPage}`);
                  })
                  .catch((e) => alert(e));
              }
            } else {
              router.replace("/checking_payments");
            }
          })
          .catch((e) => alert(e));
      });
    }
  }, [router]);
  useEffect(() => {
    getPurchaseOrder();
  }, [getPurchaseOrder]);

  return (
    <div
      className="px-md-5 px-3 col-md-12 pt-4 margin_bottom_new"
    >
      <div className="col-md-12 p-5 text-center bg_color_white_thankyou">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 py-5">
            <img className="img-fluid" src="/imagess/slots.png" />
            <h2 className="pt-4">Rechecking Slots</h2>
            <h6 className="pt-1 label_text">
              Thankyou so much for choosing to book with us through our website,
              We are thrilled to have successfully processed your booking and
              are grateful for the opportunity to serve you. Your trust in our
              online platform means a lot to us, and we are committed to
              delivering a seamless and enjoyable experience.
            </h6>
            <div className="spinner-border mt-4 text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};
export default VerifyingSlots;
