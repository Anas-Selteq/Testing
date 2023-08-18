import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "@/Components/components/sidebar";
import { useRouter } from "next/router";
import Moment from "react-moment";
import Link from "next/link";
import { getPurchaseOrderWithId } from "@/helper";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";

function Service() {
  const [tabswitch, setTabswitch] = useState(0);
  const dispatch = useDispatch();
  const [purchaseOrderId, setPurschaseOrderId] = useState<any>(null);
  const [buttonsData] = useState([
    { id: 1, date: "1 Feb", unreadCount: 1 },
    { id: 2, date: "1 March", unreadCount: 4 },
    { id: 3, date: "1 Apr", unreadCount: 1 },
    { id: 4, date: "1 May", unreadCount: 4 },
    // Add more button data as needed
  ]);
  const [selectedValues, setSelectedValues] = useState<number[]>([
    buttonsData[2].id,
  ]);
  const [newid, setNewid] = useState("");
  const [newidlocal, setNewidlocal] = useState<any>("");
  const [bookingbyid, setBookingbyid] = useState<any>([]);
  const [addresss, setAddress] = useState<any>([]);
  const [datee, setDate] = useState<any>([]);
  const router = useRouter();
  const { bookingDetail } = useSelector((state: any) => state);
  // console.log("Sssssssssssssssssssssssssssssss", bookingDetail);
  const { id } = router.query;

  const handleClickbookings = () => {
    // console.log("sdsds", purchaseOrderId);
    const nabu = router.push(
      `/userProfile/bookings/Editbooking/${purchaseOrderId}`
    );
  };
  const storedId: string | null =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("purchaseorderId") as string)
      : null;

  useEffect(() => {
    if (storedId) {
      allpurchaseorder(parseInt(storedId));
    }
  }, [storedId]);

  // Api Applied In In-complete Section --------------------------------------------------------
  async function allpurchaseorder(storedId: any) {
    getPurchaseOrderWithId(storedId)
      .then((res) => {
        setBookingbyid(res?.result?.data);
        setPurschaseOrderId(res?.result?.data?.purchaseOrderId);
        setAddress(res?.result?.address?.dropOffAddress)
        localStorage.setItem("selected_address", JSON.stringify(res?.result?.address?.dropOffAddress[0]?.addressName));
      })
      .catch((e) => alert(e));
  }

  console.log("<><><><><><><><responseData<><><><>><>", bookingbyid);

  useEffect(() => {
    const arrayOfProviders = bookingbyid?.providersList?.map(
      (item: any) => item?.providerId
    );
    const jsonString = JSON.stringify(arrayOfProviders);
    console.log("data}}}}}}}}}", jsonString);
    localStorage.setItem("providerArray", jsonString);
  }, [bookingbyid]);

  useEffect(() => {
    const formattedCreatedAt = new Date(bookingbyid?.createdDateTimeUTC?.replace('Z', '')).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    });
    setDate(formattedCreatedAt);
  }, [bookingbyid?.createdDateTimeUTC])

  const setorderId = (item: any) => {
  //  console.log("./////////////////", item);
  localStorage.setItem('orderId', item);
  router.replace("/flowManagementPages/Notesedit")
  }
  
 console.log("mmmmmmmmm",bookingbyid?.createdDateTimeUTC)

  return (
    <SideBar activeIndex={3}>
      {bookingbyid ? (
        <>
          <div className="side_nav_1_right">
            {/* sub header ------------------------------  */}
            <div className="col-md-12 background_sidenav_one ">
              <div className="col-md-12 bg-white border_of_subheader px-3 ">
                <div className="col-md-12 m-auto">
                  <h5 className="color_bookings pt-2 pt-3 pb-2">
                    Bookings Detail
                  </h5>
                </div>
              </div>
              <div className="col-md-12 padding_left_right mt-4 margin_set_bottom">
                <div className="col-md-12 background_card_color">
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <img
                        className="img-fluid width_services"
                        src="/imagess/avatar.png"
                      />
                    </div>
                    <div className="col-md-10 px-md-0 m-auto text_center_for_mob">
                      <h5 className="mb-1 color_microlaser1">
                        {bookingbyid?.customerName}{" "}
                        {bookingbyid?.servicePayload?.isCompleted === true ? (
                          <span className="badge badge-sm font_badge_success">
                            <i className="far fa-check-circle"></i> Completed
                          </span>
                        ) : (
                          <>
                            <span className="badge badge-warning font_badge_success_w">
                              <i className="far fa-check-circle"></i> Pending
                            </span>
                          </>
                        )}
                      </h5>
                      <p className="mb-2 london_text">
                        Service : {bookingbyid?.servicePayload?.serviceName}
                      </p>
                      <h5 className="mb-0 ">£{bookingbyid?.totalPrice}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 background_card_color padding_manage_service mt-4">
                  <div className="row border_bottom_services pb-2 pt-2">
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">Booking ID</p>
                        <p className="mb-0 heading_service_mod_sub">
                          {bookingbyid?.bookingId}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">Service Time</p>
                        <p className="mb-0 heading_service_mod_sub">
                          {bookingbyid?.dateJson?.map((item: any,index: any)=>
                          {
                            return(
                            <>{item?.timeFrom} to {item?.timeTo}</>  
                            )
                          }
                          )}
                          {/* {bookingbyid?.timeFrom} to {bookingbyid?.timeTo} */}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">
                          Booking Created
                        </p>
                        <p className="mb-0 heading_service_mod_sub">
                        {datee}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row border_bottom_services pb-2 pt-2">
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">Appointment</p>
                        <p className="mb-0 heading_service_mod_sub">
                        {datee}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">Address</p>
                        <p className="mb-0 heading_service_mod_sub">
                        {addresss?.map((item: any,index: any)=>
                          {
                            return(
                            <>{item?.addressName}</>  
                            )
                          }
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">Clinic</p>
                        <p className="mb-0 heading_service_mod_sub">
                          {bookingbyid?.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row  pb-2 pt-2">
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">Service Type</p>
                        <p className="mb-0 heading_service_mod_sub">
                          {bookingbyid?.serviceType?.length === 0 ? (
                            <>
                              <>No Data Avaliable</>
                            </>
                          ) : (
                            <>{bookingbyid?.serviceName}</>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="col-md-12">
                        <p className="mb-1 heading_service_mod">
                          Service Quantity
                        </p>
                        <p className="mb-0 heading_service_mod_sub">
                          {bookingbyid?.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 m-auto">
                      {/* <div className="col-md-12">
                        <div className="col-md-12">
                          {buttonsData.map((button, index) => (
                            <button
                              key={index}
                              type="button"
                              // onClick={() => handleClick(button.id)}
                              // className="btn btn-light background_bdg btn-sm position-relative mt-2 px-1 mx-1"
                              className={` ${
                                selectedValues.includes(button.id)
                                  ? " btn btn-light background_bdg_active btn-sm position-relative mt-2 px-1 mx-1"
                                  : "btn btn-light background_bdg btn-sm position-relative mt-2 px-1 mx-1"
                              }`}
                            >
                              <span
                                className={` ${
                                  selectedValues.includes(button.id)
                                    ? "font_size_new_active text"
                                    : " font_size_new text "
                                }`}
                              >
                                {button.date}
                              </span>
                              <span
                                className={` ${
                                  selectedValues.includes(button.id)
                                    ? "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    : " position-absolute top-0 start-100 translate-middle badge rounded-pill background_badge"
                                }`}
                              >
                                {button.unreadCount}
                                <span className="visually-hidden">
                                  unread messages
                                </span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="flex_of_cards">
                    {/* <div className="cards1">
                      <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/clipboard.png"
                      />
                      <p className="mb-0 font_cards_width">Booking</p>
                    </div>
                    <div className="cards1">
                      <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/chat.png"
                      />
                      <p className="mb-0 font_cards_width">Chat</p>
                    </div>
                    <div className="cards1">
                      <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/form.png"
                      />
                      <p className="mb-0 font_cards_width">Form</p>
                    </div> */}
                    <div className="cards1" onClick={handleClickbookings}>
                      <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/edit.png"
                      />
                      <p className="mb-0 font_cards_width">Edit</p>
                    </div>
                    {/* <div className="cards1">
                      <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/bin.png"
                      />
                      <p className="mb-0 font_cards_width">Delete</p>
                    </div> */}
                    <div className="cards1" onClick={() => setorderId(bookingbyid?.purchaseOrderId)}>
                    <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/document.png"
                      />
                      <p className="mb-0 font_cards_width">Notes</p>
                    </div>
                    {/* <div className="cards1">
                      <img
                        className="img-fluid img_width_cards pb-3"
                        src="/imagess/file.png"
                      />
                      <p className="mb-0 font_cards_width">Documents</p>
                    </div> */}
                  </div>
                </div>

                {newid ? (
                  <div className="col-md-12 text-end mt-3">
                    <button className="btn btn-danger button_style_danger">
                      Continue
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </SideBar>
  );
}

export default Service;
