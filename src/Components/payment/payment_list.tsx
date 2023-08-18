import React, { useEffect, useState } from "react";
import CreditCard from "./credit_card";
import { BiSearch } from "react-icons/bi";
import {
  addDefaultPaymentMethod,
  deletePaymentMethod,
  getAllListOfPayments,
} from "@/helper";
import { useSelector } from "react-redux";
import Loader from "../Loaders/Loader";
import { setPaymentInLocalStorage } from "../helper";

const PaymentList = ({ onClickHandler }: { onClickHandler: any }) => {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  const { profile } = useSelector((state: any) => state);
  const [listOfPaymentMethod, setListOfPaymentMethod] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setIsLoading(true);
    if (profile?.userId !== undefined) {
      getAllListOfPayments(profile?.userId)
        .then((res) => {
          setListOfPaymentMethod(res?.paymentList?.data ?? []);
        })
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    }
  }, [profile.userId]);

  const deletePaymentMethodHandler = (selectedPaymentMethodId: any) => {
    setIsLoading(true);
    deletePaymentMethod(profile?.userId, selectedPaymentMethodId)
      .then((res) => {
        setListOfPaymentMethod((prev: any) =>
          prev.filter((item: any) => item.id !== selectedPaymentMethodId)
        );
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };

  const setAsDefaultHandler = (selectedPaymentMethodId: any) => {
    setIsLoading(true);
    addDefaultPaymentMethod(profile?.userId, selectedPaymentMethodId)
      .then((res) => {
        setPaymentInLocalStorage(selectedPaymentMethodId);
        setListOfPaymentMethod((prevList: any) => {
          const updatedList = prevList.map((paymentMethod: any) => {
            if (paymentMethod.id === selectedPaymentMethodId) {
              return { ...paymentMethod, defaultPaymentMethod: true };
            } else {
              return { ...paymentMethod, defaultPaymentMethod:false };
            }
          });
          return updatedList;
        });
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {/* <div className="col-md-12 mb-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 ">
            <div className="row text-end">
              <div className="col-md-1"></div>
              <div className="col-md-6">
            <div
              className="d-flex align-items-center rounded-pill border border-primary-subtle"
              style={{
                padding: "0.3rem 1rem",
              }}
            >
              <BiSearch />
              <input
                type="text"
                className="border border-0 form-control form-control-sm "
                style={{
                  marginLeft: "0.5rem",
                  outline: "none",
                }}
                disabled={isLoading}
                placeholder="Search"
              />
              
            </div>
            </div>
            <div className="col-md-5 m-md-auto mt-2">
            <span>
            {isLoading ? (
          <Loader style={{}} status={isLoading} />
        ) : (
          <button
            className="btn btn-danger rounded-pill w-100"
            onClick={onClickHandler}
          >
            Add Payment Method
          </button>
        )}
            </span>
            </div>
            
            </div>
           
          </div>
      
       
        </div>
      </div> */}
      <div className="col-md-12 mb-5 pb-5 mt-4 ">
        <div className="row">
        {isLoading ? (
          <Loader style={{}} status={isLoading} />
        ) : (
          <>
        {listOfPaymentMethod?.length === 0? <>No Payment Method</> : listOfPaymentMethod.map((item: any, index: any) => {
          return (
            <div className=" col-sm-6 col-lg-4 ">
            <CreditCard
              key={index}
              defaultBtn={item.defaultPaymentMethod}
              cardProvider={item.card.brand}
              lastFourDigits={item.card.last4}
              expireMonth={item.card.exp_month}
              expireYear={item.card.exp_year}
              onDeleteClickHandler={deletePaymentMethodHandler}
              setAsDefaultHandler={setAsDefaultHandler}
              paymentMethodId={item.id}
            />
            </div>
          );
        })}
        </>
        )}
        </div>
      </div>
    </>
  );
};

export default PaymentList;
