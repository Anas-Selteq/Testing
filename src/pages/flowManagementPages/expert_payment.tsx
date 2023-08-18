import {
  getOrderIdInLocalStorage,
  removeOrderIdInLocalStorage,
  removeServiceFromLocalStorage,
} from "@/Components/helper";
import CreditCard from "@/Components/payment/credit_card";
import {
  addCart,
  getAllListOfPayments,
  getPurchaseOrderWithId,
  patchPurchaseOrder,
} from "@/helper";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BiChevronRight, BiCreditCard } from "react-icons/bi";
import PurchaseSummary from "@/Components/flow_management/purchase_summary";
import Layout2 from "@/Components/Layout2/Layout2";
import Image from "next/image";
import Link from "next/link";

const ExpertPayment = () => {
  const router = useRouter();
  const { profile } = useSelector((state: any) => state);
  const [defaultPayment, setDefaultPayment] = useState<any>(null);
  const [purchaseOrder, setPurchaseOrder] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  /* --------------------------- Get Purchase Order --------------------------- */
  useEffect(() => {
    const getPurchaseOrder = () => {
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
    };
    getPurchaseOrder();
  }, [router]);
  useEffect(() => {
    if (profile.userId !== undefined) {
      getAllListOfPayments(profile.userId)
        .then((res) => {
          if (res.paymentList === null) {
            alert("No Payment Method Added");
          } else {
            for (let i = 0; i < res.paymentList.data.length; i++) {
              if (res.paymentList.data[i].defaultPaymentMethod === true) {
                setDefaultPayment(res.paymentList.data[i]);
              }
            }
          }
        })
        .catch((e) => {
          alert(e);
        });
    }
  }, [profile]);

  const savePaymentMethodId = () => {
    const OrderId = parseInt(getOrderIdInLocalStorage());
    const cartData = {
      currency: purchaseOrder?.data?.servicePayload?.currency,
      userId: purchaseOrder?.data?.customerId,
      countryId: purchaseOrder?.data?.countryId,
      qunatity: 1,
      amount: purchaseOrder?.data?.servicePayload?.actualPrice,
      createdBy: 0,
      serviceSKU: purchaseOrder?.data?.servicePayload?.serviceSKU,
      purchaseOrderId: OrderId,
    };
    addCart(cartData)
      .then((res) => {
        const cartId = res?.result?.cartId;
        const data = {
          purchaseOrderId: OrderId,
          paymentMethodId: defaultPayment?.id,
          submitPurchaseOrder: true,
          currentStep: purchaseOrder?.data?.totalStep,
          cartId: cartId,
        };
        return patchPurchaseOrder(data);
      })
      .then((res) => {
        router.replace("/verifying_Slots");
      })
      .catch((e) => console.error(e));
  };

  return (
    <Layout2>
    <div className="margin_bottom_new">
      <>
        <div
          style={{
            width: "100%",
            fontSize: "120%",
            backgroundColor: "white",
            padding: "0 0 0 1rem",
            borderTop: "1px solid lightgray",
            borderBottom: "1px solid lightgray",
            paddingTop: "0.5%",
            paddingBottom: "0.5%",
            color: "gray",
          }}
          className="px-5"
        >
          <div className="row py-1">
            <div className="col-md-6 col-6">
              {" "}
              <span>Payment Method</span>
            </div>
            <div className="col-md-6 col-6 text-end">
              <button
                className="btn btn-danger"
                onClick={() => router.push("/userProfile/payment")}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div className="px-md-5 px-3 mb-5">
          <PurchaseSummary purchaseOrder={purchaseOrder} />
          <div className="p-4 bg-white border rounded">
            <Link className="style_a_tag" href="/flowManagementPages/payment-seperate">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex ">
                <div className="text-danger bg-danger bg-opacity-10 rounded-circle p-4 me-4">
                  <BiCreditCard size={40} />
                </div>
                <div className="d-flex flex-column justify-content-evenly">
                  <span className="fs-5 fw-bold">Payment Method</span>
                  <span className="text-secondary label_text">
                    Select Your Card
                  </span>
                </div>
              </div>
              <div className="text-secondary">
              <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
              </div>
            </div>
            </Link>
            {/* {defaultPayment === null ? null : (
              <div className="col-md-12 ">
              <div className="row">
                <div className="col-md-4 mt-3">
                <CreditCard
                  defaultBtn={defaultPayment?.defaultPaymentMethod}
                  cardProvider={defaultPayment?.card.brand}
                  lastFourDigits={defaultPayment?.card.last4}
                  expireMonth={defaultPayment?.card.exp_month}
                  expireYear={defaultPayment?.card.exp_year}
                  onDeleteClickHandler={() => {}}
                  setAsDefaultHandler={() => {}}
                  paymentMethodId={defaultPayment?.id}
                ></CreditCard>
                </div>
                </div>
                <div className="col-md-12 text-end">
                <button
                  className="btn btn-danger"
                  onClick={savePaymentMethodId}
                >
                  Save and Continue
                </button>
                </div>
            </div>
            )} */}
          </div>
        </div>
      </>
    </div>
    </Layout2>
  );
};
export default ExpertPayment;
