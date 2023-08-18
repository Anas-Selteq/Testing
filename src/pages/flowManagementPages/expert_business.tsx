import Layout2 from "@/Components/Layout2/Layout2";
import PurchaseSummary from "@/Components/flow_management/purchase_summary";
import {
  getOrderIdInLocalStorage,
  removeOrderIdInLocalStorage,
} from "@/Components/helper";
import { ServicePageMovement } from "@/Components/service_page_movement";
import {
  getAddresses,
  getAllBusinessList,
  getProviderAvailability,
  getPurchaseOrderWithId,
  patchPurchaseOrder,
} from "@/helper";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  BiChevronDown,
  BiChevronRight,
  BiDirections,
  BiLocationPlus,
} from "react-icons/bi";
import { useSelector } from "react-redux";

const ExpertBusiness = () => {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  const { profile } = useSelector((state: any) => state);
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isBusiness, setIsBusiness] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [listOfAddresses, setListOfAddresses] = useState<any>([]);
  const [purchaseOrder, setPurchaseOrder] = useState<any>({});
  const [businessList, setBusinessList] = useState<any>([]);
  const [selectedLocation, setSelectedLocation] = useState({
    id: 10,
    userId: 101,
    addressName: "selteq solutions",
    line1: "wqwqq",
    line2: "87",
    townCity: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    postalCode: "wqwqwq",
    state: "demo",
    countryId: 0,
    latitude: 6.44394063949585,
    longitude: 3.454303741455078,
    addressnotes: ",nsdajdkasdkahbdas",
    isResidentialAddress: true,
    radius: 5,
    addressTypeValue: 1,
    createdBy: 10,
    createdOn: "2023-05-05T01:49:33.013",
    modifiedBy: null,
    modifiedOn: null,
  });

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
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
            console.log("resssssssssssss",res?.result)
            setPurchaseOrder(res?.result);
          })
          .catch((e) => alert(e))
          .finally(() => setIsLoading(false));
      }
    };
    getPurchaseOrder();
  }, [router]);

  /* ---------------------- Fetch Business List/Staff List ---------------------- */
  useEffect(() => {
    if (
      !purchaseOrder?.data?.providersList ||
      purchaseOrder?.data?.providersList.length === 0
    ) {
      return;
    }
    const fetchBusinessList = () => {
      setIsLoading(true);
      const providerList = purchaseOrder?.data?.providersList.map(
        (res: { providerId: any }) => res.providerId
      );
      console.log("listtttttttttttttttttt", providerList)
      if (purchaseOrder?.data?.servicePayload?.isInClinic === false) {
       
        // Expert Center selected, so show their branches (businessList)
        getAllBusinessList(providerList)
          .then((res) => {
            if (res?.result?.partners.length === 0) {
              alert("No Partner Found");
              setMessage("No Partner Found");
            } else {
              setMessage("");
              setIsBusiness(true);
              setBusinessList(res?.result?.partners);
            }
          })
          .catch((e) => alert(e))
          .finally(() => setIsLoading(false));
      } else {
        // Expert providers should be shown (staffList)
        const data = {
          ids: providerList,
          source: 1
        }
        getProviderAvailability(data)
          .then((res) => {
            if (res?.result?.list?.length === 0) {
              alert("No Staff Found");
              setMessage("No Staff Found");
            } else {
              setMessage("");
              setIsBusiness(false);
              setBusinessList(res?.result?.list);
            }
          })
          .catch((e) => alert(e))
          .finally(() => setIsLoading(false));
      }
    };
    fetchBusinessList();
  }, [purchaseOrder]);

  /* ------------------------------ Get Addresses ----------------------------- */
  useEffect(() => {
    const fetchAddresses = () => {
      getAddresses(profile?.userId)
        .then((res) => {
          setListOfAddresses(res?.result?.addresses);
        })
        .catch((e) => alert(e));
    };
    if (profile?.userId) {
      fetchAddresses();
    }
  }, [profile?.userId]);

  /* ------------------------------- Verify Slot ------------------------------ */
  const verifySlotsHandler = (data: any) => {
    let patchedData = {};
    if (isBusiness) {
      alert("bus");
      // patchedData = {
      //   purchaseOrderId: purchaseOrder?.data?.purchaseOrderId,
      //   currentStep: purchaseOrder?.data?.totalStep,
      //   businessId: data?.id,
      //   businessName: data?.businessName,
      // };
      
    } else {
    
    patchedData = {
      purchaseOrderId: purchaseOrder?.data?.purchaseOrderId,
      currentStep: purchaseOrder?.data?.totalStep,
      providerId: data?.providerId,
      providerName: data?.providerName,
    };
    console.log("///////////////////",patchedData)
    }
    
    // no neeed 
    // const patchedData = {
    //     purchaseOrderId: purchaseOrder?.data?.purchaseOrderId,
    //     currentStep: purchaseOrder?.data?.totalStep,
    // };

    patchPurchaseOrder(patchedData)
      .then((result) => {
        router.replace("/flowManagementPages/expert_payment");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Layout2>
    <div className="margin_bottom_new mb-md-5 pb-md-5" >
      <div className="mx-md-5 mx-3 mb-5" >
        <PurchaseSummary purchaseOrder={purchaseOrder} />
        <div className=" d-flex justify-content-between align-items-center text-secondary">
          <div className="d-flex align-items-center ">
            <p className="m-0 color_distance p-0">
              <i className="fas fa-directions"></i>&nbsp;
              <span>Distance from</span>
            </p>
            <div className="position-relative">
              <div
                className=" dropdown ms-2 d-flex text-primary color_drop align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropDown(!showDropDown);
                }}
              >
                <span>{listOfAddresses[0]?.addressName}</span>
                <BiChevronDown />
              </div>
              <ul
                className={`dropdown-menu ${
                  showDropDown ? "d-block" : ""
                } position-absolute p-2 mt-1 overflow-auto`}
                style={{
                  maxHeight: "25vh",
                  maxWidth: "25vw",
                }}
              >
                {listOfAddresses?.map((address: any, index: number) => (
                  <li
                    key={index}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedLocation(address);
                      setShowDropDown(false);
                    }}
                  >
                    {address?.addressName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" ">
          <select id="disabledSelect" className="form-select bg-light border rounded-pill px-4 pt-2 text-secondary width_dropdown">
            <option>20 KM</option>
            <option>30 KM</option>
          </select>
        </div>

          {/* <div className="">
            <span className="me-5 ps-2 pe-4">20KM</span>
            <BiChevronDown />
          </div> */}
        </div>
        <div>
          {/* new cards list --------------------------------------------------------------------------------------------------------   */}
          {businessList?.length === 0 ? (
            <>{message}</>
          ) : (
            businessList?.map((item: any, index: number) => {
              console.log("incard---------------------------", item);
              return (
                <div className="px-1" key={index}>
                  <div className="col-md-12  mt-3 card_design_provider py-3">
                    <div className="padding_set_left_provider">
                        <img
                          className="img-fluid img-sizig"
                          src="/imagess/london.png"
                        />
                      <div className="w-100 ">
                        <div className="row">
                          <div className="col-md-6 padding_set_left_provider2">
                            <p className="m-0 p-0 font_one_p">
                              {isBusiness
                                ? `${item.businessName}`
                                : `${item.providerName}`}
                                {/* {item?.providerId} */}
                            </p>
                            <p className="m-0 p-0">
                              <i id="new_star" className="fas fa-star"></i>
                              <i id="new_star" className="fas fa-star"></i>
                              <i id="new_star" className="fas fa-star"></i>
                              <i id="new_star" className="fas fa-star"></i>
                              <i id="new_star" className="fas fa-star"></i>
                              &nbsp;
                              <span>5.0</span>
                              <span className="font_small_p">(53+)</span>
                            </p>
                            <p className="m-0 pt-1 font_one_p1">
                              {item.line1}, {item.line2}, {item.city}
                            </p>
                            <p className="m-0 p-0 font_one_p"> + $30</p>
                          </div>
                          <div className="col-md-6 padding_set_left_provider3 text-end">
                            <p className="m-0 pb-0 px-1">
                            <Image
                              src="/assets/images/rightt.png"
                              alt="keyright"
                              height={11.19}
                              width={6.33}
                            />
                            </p>
                            <p className="font_one_p1 py-1 m-0 pb-1">
                              4.3 Km &nbsp;
                              <img
                              className="img-fluid"
                              src="/imagess/redicons/location.png"
                              alt="keyright"
                            />
                            </p>
                            <button
                              className="btn btn-danger px-5 py-1 mt-2"
                              onClick={() => verifySlotsHandler(item)}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
    </Layout2>
  );
};
export default ExpertBusiness;
