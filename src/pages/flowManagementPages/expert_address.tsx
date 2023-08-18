import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ServicePageMovement } from "../../Components/service_page_movement";
import { getOrderIdInLocalStorage } from "../../Components/helper";
import {
  getAddresses,
  getPurchaseOrderWithId,
  patchPurchaseOrder,
} from "@/helper";
import PurchaseSummary from "@/Components/flow_management/purchase_summary";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import Layout2 from "@/Components/Layout2/Layout2";

const ExpertAddresses = () => {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  const { profile } = useSelector((state: any) => state);
  const [addresses, setAddresses] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [purchaseOrder, setPurchaseOrder] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  /* ----------------------------- Fetch Addresses ---------------------------- */
  const fetchAddresses = useCallback(() => {
    getAddresses(profile?.userId).then((response: any) => {
      if (response && response?.result?.addresses) {
        setAddresses(response?.result?.addresses);
      }
    });
  }, [profile?.userId]);

  /* --------------------------- Get Purchase Order --------------------------- */
  const getPurchaseOrder = useCallback(() => {
    const purchaseOrderId = parseInt(getOrderIdInLocalStorage());
    if (isNaN(purchaseOrderId)) {
      router.replace("/");
    } else {
      setIsLoading(true);
      getPurchaseOrderWithId(purchaseOrderId)
        .then((res) => setPurchaseOrder(res.result))
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    }
  }, [router]);

  /* -------------------------------- UseEffect ------------------------------- */
  useEffect(() => {
    getPurchaseOrder();
    if (profile?.userId) {
      fetchAddresses();
    }
  }, [getPurchaseOrder, fetchAddresses, profile.userId]);

  /* ------------------------- Flow And Purchase Order ------------------------ */
  const flowAndPurchaseOrderHandler = () => {
    const purchaseCurrentStep = parseInt(purchaseOrder.currentStep);
    const data = {
      purchaseOrderId: purchaseOrder?.data.purchaseOrderId,
      quantity: 1,
      pickupAddress: [addresses[selectedIndex]],
      dropOffAddress: [addresses[selectedIndex]],
      currentStep: purchaseCurrentStep + 1,
    };
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
  console.log("new address", addresses?.length);
  return (
    <Layout2>
      
    <div className="page_scroll">
    <div
        className="row px-md-5 mx-0"
        style={{
          width: "100%",
          fontSize: "18px",
          backgroundColor: "white",
          padding: "0 0 0 1rem",
          borderTop: "1px solid #dcdcdc",
          borderBottom: "1px solid #dcdcdc",
          paddingTop: "0.5%",
          paddingBottom: "0.5%",
          color: "#404145",
          lineHeight: "16px",
          fontWeight: "900",
          fontFamily: "Roboto",
        }}
      >
        <div className="col-md-6 col-6 m-auto">
        <span className="">Manage Address</span>
        </div>
        <div className="col-md-6 col-6 text-secondary text-end">
          <span className="mx-3">
            <span style={{ color: "lightgray", fontSize: "20px" }}>
              <BiSearch />
            </span>
            &nbsp; <span className="search_new">Search</span>
          </span>{" "}
          &nbsp;
          <button
            className="btn btn-danger color_danger px-4 py-1"
            onClick={() => router.push("/userProfile/addresses")}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="mx-md-5 mx-3">
        <PurchaseSummary purchaseOrder={purchaseOrder} />
        {addresses?.length === 0 ? (
          <div className="col-md-12 text-center">
            <img className="img-fluid loading_giff" src="/imagess/box.gif" />
            <h6>No Address Found</h6>
          </div>
        ) : (
          addresses?.map((address: any, index: number) => {
            if (selectedIndex === index) {
              return (
                <div
                  key={index}
                  className="rounded bg-white mb-2  border_newwww "
                >
                  <div
                    className="d-flex justify-content-between"
                    style={{ cursor: "default" }}
                    onClick={() => setSelectedIndex(-1)}
                  >
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <span className="label_text">Address Name</span>
                      <span className="description_text">
                        {address.addressName}
                      </span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={true}
                        style={{
                          accentColor: "red",
                        }}
                      />
                    </div>
                  </div>
                  <hr className="bg_hr_line" />
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <span className="label_text">Flat & Building</span>
                    <span className="description_text">{address.line2}</span>
                  </div>
                  <hr className="bg_hr_line" />
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <span className="label_text">Street Address</span>
                    <span className="description_text">{address.state}</span>
                  </div>
                  <hr className="bg_hr_line" />
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <span className="label_text">Postal Code</span>
                    <span className="description_text">
                      {address.postalCode}
                    </span>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="rounded border_newwww bg-white d-flex justify-content-between mt-3"
                  style={{ cursor: "default" }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <span className="label_text">Office</span>
                    <span className="description_text">
                      {address.addressName}
                    </span>
                  </div>
                  <div>
                    <input type="checkbox" />
                  </div>
                </div>
              );
            }
          })
        )}
        {selectedIndex >= 0 ? (
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-danger color_danger mt-4 px-4 py-1"
              onClick={flowAndPurchaseOrderHandler}
            >
              Save Changes
            </button>
          </div>
        ) : null}
      </div>
    </div>
    </Layout2>
  );
};

export default ExpertAddresses;
