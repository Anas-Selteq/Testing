import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiCalendarAlt, BiChevronRight, BiLocationPlus } from "react-icons/bi";
import moment from "moment";
import { patchPurchaseOrder } from "@/helper";
import { ServicePageMovement } from "../service_page_movement";
import Moment from "react-moment";

const PurchaseSummary = ({ purchaseOrder }: { purchaseOrder: any }) => {
  const router = useRouter();
  const [selectedslots, setSelectedslots] = useState<any>("");
  useEffect(() => {
    const storedDataString = localStorage.getItem('Slots_Selected');
    const jsonselectedslots = JSON.parse(storedDataString);
    setSelectedslots(jsonselectedslots);
  }, [])

  console.log("selectedslots",selectedslots)
  
  const handlePageMovement = (selectedOption: any) => {
    const nextScreen = purchaseOrder.purchaseOrderFlow[0].screens.find(
      (screen: any) => screen.screenName === selectedOption
    );
    if (nextScreen) {
      const data = {
        purchaseOrderId: purchaseOrder.data.purchaseOrderId,
        currentStep: nextScreen.position - 1,
      };
      patchPurchaseOrder(data)
        .then((res) => {
          const returnedPage = ServicePageMovement(nextScreen.screenName);
          router.replace(`/${returnedPage}`);
        })
        .catch((e) => alert(e));
    }
  };
  return (
    <div className="col-md-12 border_newwww my-4  bg-white px-2 py-2 rounded cursor_property">
      <div className="d_flex_expert_address py-2 px-2">
        <div>
          <img
            src={
              purchaseOrder?.data?.servicePayload?.serviceUrl ??
              "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"
            }
            className="img-fluid circle_rad"
            alt="providerPhoto"
          />
        </div>
        <div className="px-2">
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              color: "#000000",
              paddingLeft:"3px",
            }}
          >
            {purchaseOrder?.data?.servicePayload?.serviceName}
          </h1>

          {/* <div className="d-flex align-items-center">
            <div className="btn btn-light back_light_button1 btn-sm   rounded text-light">
              -
            </div>
            <div className="px-2 text_show">1</div>
            <div className="btn btn-light back_light_button btn-sm px-2 rounded text-light">
              +
            </div>
          </div> */}
          <div >
            <img className="img-fluid img_width_set_1" src="/imagess/add.png" />
          </div>
        </div>
      </div>
      {purchaseOrder?.data?.bookingDate === null &&
      purchaseOrder?.data?.timeFrom === "" ? null : (
        <>
          <div
            className="d-flex justify-content-between align-items-center mt-3"
            onClick={() => handlePageMovement("ExpertSlots")}
          >
            <div style={{ fontSize: "85%", color: "black" }}>
              <div className=" label_text pb-2">Appointment</div>
              <BiCalendarAlt className="text-danger mb-1 me-2" />{" "}
              {`${moment(purchaseOrder?.data?.bookingDate).format(
                "Do MMM"
              )} - ${moment(purchaseOrder?.data?.timeFrom, "HH:mm:ss").format(
                "h:mm A"
              )}`}
            </div>
            <div>
              <BiChevronRight />
            </div>
          </div>
          <hr className="bg_hr_line " />
        </>
      )}
      {purchaseOrder?.address?.pickupAddress ? (
        <>
          <hr className="bg_hr_line mt-1 mb-0" />
          <div
            className="d-flex justify-content-between align-items-center mt-2 px-3"
            onClick={() => handlePageMovement("ExpertAddress")}
          >
            <div style={{ fontSize: "85%", color: "black" }}>
              <p className="label_text m-0 p-0 ">Address</p>
              <p className="provider_summmary_des m-0 p-0"><BiLocationPlus className="text-danger " /> {`${purchaseOrder?.address?.pickupAddress[0]?.addressName}`}</p>
            </div>
            <div>
            <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
            </div>
          </div>
          
          {/* <hr className="bg_hr_line" /> */}
        </>
      ) : null}
      {purchaseOrder?.data?.isNotes ? (
        <>
        <hr className="bg_hr_line mb-2 mt-0" />
          <div
            className="d-flex justify-content-between align-items-center px-3 mb-2"
            onClick={() => handlePageMovement("ExpertNotes")}
          >
            <div style={{ fontSize: "85%", color: "black" }}>
              <div className="label_text pb-2">Notes</div>
              <BiCalendarAlt className="text-danger " /> {"Click Here to See"}
            </div>
            <div>
            <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
            </div>
          </div>
          
          {selectedslots ? 
          <>
          <hr className="bg_hr_line" />
          <div
            className="d-flex justify-content-between align-items-center px-3 mb-2"
            // onClick={() => handlePageMovement("ExpertNotes")}
          >
            <div style={{ fontSize: "85%", color: "black" }}>
              <div className="label_text pb-2">Slotes Selected</div>
              <BiCalendarAlt className="text-danger me-2" />
              <Moment format="DD MMM, YYYY">
              {selectedslots[0]?.bookingDate}
              </Moment> - 
              &nbsp;
              {selectedslots[0]?.timeFrom} to {selectedslots[0]?.timeTo}
            </div>
            <div>
            <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
            </div>
          </div>
          <hr className="bg_hr_line" />
          <div
            className="d-flex justify-content-between align-items-center px-3 mb-2"
            // onClick={() => handlePageMovement("ExpertNotes")}
          >
            <div style={{ fontSize: "85%", color: "black" }}>
              <div className="label_text pb-2">Provider</div>
              <BiCalendarAlt className="text-danger me-2" /> Soolmaz Farad
            </div>
            <div>
            <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
            </div>
          </div>
          </>
          : null}
        </>
      ) : null}
      {purchaseOrder?.data?.bookingType !== null ? (
        <>
          {/* // <div
        //   className="d-flex justify-content-between align-items-center"
        //   onClick={() => handlePageMovement("ExpertVenue")}
        // >
        //   <div className="bg_hr_line pt-3">
        //     <div className="m-0 p-0 label_text pb-2">Booking Type</div>

        //     <div className="pt-1" style={{ fontSize: "85%", color: "black" }}>
        //       <i
        //         className="fas fa-calendar-check"
        //         style={{ color: "rgb(236, 30, 39)" }}
        //       ></i>{" "}
        //       &nbsp;&nbsp;
        //       {`${purchaseOrder?.data?.bookingType}`}
        //     </div>
        //   </div>
        //   <div>
        //     <BiChevronRight />
        //   </div>
        // </div> */}
        </>
      ) : null}
    </div>
  );
};
export default PurchaseSummary;
