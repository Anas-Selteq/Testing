import React, { useState, useEffect } from "react";
import {
  Calendar,
  DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { ServicePageMovement } from "@/Components/service_page_movement";
import { getOrderIdInLocalStorage } from "@/Components/helper";
import {
  getPurchaseOrderWithId,
  getAllProviderIds,
  getTimeSlots,
  patchPurchaseOrder,
} from "@/helper";
import PurchaseSummary from "@/Components/flow_management/purchase_summary";
import Layout2 from "@/Components/Layout2/Layout2";

const ExpertDateTime = () => {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [slotsList, setSlotsList] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [providerIdList, setProviderIdList] = useState<number[]>([]);
  const [actualProviderIdList, setActualProviderIdList] = useState<any>([]);
  const [purchaseOrder, setPurchaseOrder] = useState<any>({});
  const [date, setDate] = useState<DayValue>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  /* ------------------------- Flow and Purchase Order ------------------------ */
  const flowAndPurchaseOrderHandler = () => {
    const purchaseCurrentStep = parseInt(purchaseOrder.currentStep);
    const data = {
      purchaseOrderId: purchaseOrder?.data.purchaseOrderId,
      currentStep: purchaseCurrentStep + 1,
      providersList: actualProviderIdList,
      providerName: "Nothing here",
      dateJson : [{
        bookingDate: `${date?.year}-${date?.month
          .toString()
          .padStart(2, "0")}-${date?.day.toString().padStart(2, "0")}`,
        timeFrom: slotsList[selectedIndex].from,
        timeTo: slotsList[selectedIndex].endTo,
         slotCaptured :false
    },]
    };
    const dataString = JSON.stringify(data?.dateJson);
    localStorage.setItem('Slots_Selected', dataString);
    // console.log(";;;;;;;;;;;;;;",data)
    // return;
    patchPurchaseOrder(data)
      .then((res) => {
        if (
          purchaseCurrentStep + 1 ===
          purchaseOrder.purchaseOrderFlow[0].screens.length
        ) {
          router.replace("/");
        } else {
          const returnedPage = ServicePageMovement(
            purchaseOrder.purchaseOrderFlow[0].screens[purchaseCurrentStep]
              .actionId
          );
          router.replace(`/${returnedPage}`);
        }
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };

  /* --------------------------- Get Purchase Order --------------------------- */
  useEffect(() => {
    const getPurchaseOrder = () => {
      const purchaseOrderId = parseInt(getOrderIdInLocalStorage());
      if (isNaN(purchaseOrderId)) {
        router.replace("/");
      } else {
        setIsLoading(true);
        getPurchaseOrderWithId(purchaseOrderId)
          .then((res) => {
            setPurchaseOrder(res?.result);
            if (
              res?.result?.address?.pickupAddress[0] &&
              res?.result?.data?.serviceSKU
            ) {
              return getAllProviderIds(
                res?.result?.address?.pickupAddress[0]?.longitude,
                res?.result?.address?.pickupAddress[0]?.latitude,
                1,
                res?.result?.data?.serviceSKU
              );
            } else {
              throw new Error(
                "Missing billing address or service SKU in purchase order."
              );
            }
          })
          .then((res) => {
            if (res?.result?.providers?.length !== 0) {
              setProviderIdList(
                res?.result?.providers?.map(
                  (res: { providerId: any }) => res?.providerId
                )
              );
              setActualProviderIdList(res?.result?.providers);
            } else {
              alert("provider List is Empty Coming");
            }
          })
          .catch((e) => alert(e))
          .finally(() => setIsLoading(false));
      }
    };
    getPurchaseOrder();
  }, [router]);

  /* ----------------------------- Get Time Slots ----------------------------- */
  useEffect(() => {
    const gettingSlots = () => {
      if (providerIdList?.length !== 0) {
        setIsLoading(true);
        getTimeSlots({
          date: `${date?.year}-${date?.month
            .toString()
            .padStart(2, "0")}-${date?.day.toString().padStart(2, "0")}`,
          providerId: providerIdList, // [2, 3],
          slotDuration: purchaseOrder?.data?.servicePayload?.duration,
        })
          .then((res) => {
            if (res?.result?.providerList?.length === 0) {
              alert("No Slots Found");
            }
            setSlotsList(res?.result?.providerList ?? []);
            setSelectedIndex(-1);
          })
          .catch((e) => alert(e))
          .finally(() => setIsLoading(false));
      }
    };
    gettingSlots();
  }, [providerIdList, date, purchaseOrder]);

  // Setting Month Name
  const monthName = (month: number) => {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      default:
        return "Dec";
    }
  };
  const month = monthName(date?.month ?? 1);

  if (isLoading) {
    return (
      <div className="col-md-12 text-center py-5">
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Layout2>
    <div className="margin_bottom_new mb-md-5 pb-md-5" >
      <div className="mx-md-5 mx-3 my-3">
        <PurchaseSummary purchaseOrder={purchaseOrder} />
        <div className="col-md-12 ">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12">
                <h5 className="font-family-poppins font-size-20">
                  Choose Appointment
                </h5>
                <h6 className="font-roboto font-size-24 pb-2">
                  <span className="fa fa-calendar-o"></span>
                  {/* {"  " + date.toDateString().slice(4, 15)} */}
                  {` ${month} ${date?.day} ${date?.year}`}
                </h6>
                <Calendar
                  value={date}
                  onChange={setDate}
                  colorPrimary="#EC1E27" // added this
                  colorPrimaryLight="##EC1E27"
                  shouldHighlightWeekends
                />
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="font-family-poppins px-3 font-size-20">
                Choose Slots
              </h5>
              <h6 className="font-roboto font-size-24 px-3 pb-2">
                <span className="fa fa-calendar-o"></span>
                All Slots
              </h6>
              <div className="col-md-12 px-3 new_height " id="style-2">
                {slotsList?.length === 0 ? (
                  <div>
                    <h1>No Slots Found</h1>
                  </div>
                ) : (
                  <div className="row">
                    {slotsList?.map((item: any, index: number) => (
                      <div key={index} className="col-md-6 px-2 text-center">
                        <div
                          className={`col-md-12 bg-white mb-2 px-4 py-2 rounded border ${
                            selectedIndex === index && "bg-success text-danger"
                          }`}
                          onClick={() => setSelectedIndex(index)}
                        >
                          <p className="fonts_slots m-0 p-0">
                            {item["from"]} - {item["endTo"]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12 mt-3 mb-3">
              {selectedIndex >= 0 ? (
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={flowAndPurchaseOrderHandler}
                  >
                    Save & Continue
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout2>
  );
};

export default ExpertDateTime;
