import React, { useState } from "react";
import SideBar from "@/Components/components/sidebar";
import PaymentList from "@/Components/payment/payment_list";
import PaymentBox from "@/Components/payment/payment_box";
import AddPayment from "@/Components/payment/add_payment";

const PaymentModule = () => {
  const [isAddPaymentPage, setIsAddPaymentPage] = useState<any>(false);
  const openAddpayment = () =>
  {
    setIsAddPaymentPage(!isAddPaymentPage)
  }
  return (
    <SideBar activeIndex={5}>
      {/* <PaymentBox /> */}
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
            <span>Payment Methods</span>
          </div>
          {isAddPaymentPage === true ? (null):
          (
            <div className="col-md-6 text-end">
            <button
              className="btn btn-danger button_danger_one "
              onClick={openAddpayment}
            >
              Add New
            </button>
            </div>
          )}
       
        </div>
      </div>
      <div className="px-md-5 px-3 ">
      <div className="">
        {isAddPaymentPage ? (
          <AddPayment onClickHandler={() => setIsAddPaymentPage(false)} />
        ) : (
          <div className="col-md-12 ">
          <PaymentList onClickHandler={() => setIsAddPaymentPage(true)} />
          </div>
        )}
      </div>
      </div>
    </SideBar>
  );
};

export default PaymentModule;
