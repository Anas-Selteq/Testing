import {
  getOrderIdInLocalStorage,
  removeOrderIdInLocalStorage,
  removeServiceFromLocalStorage,
} from "@/Components/helper";
import { check3ds, checkPayment, getPurchaseOrderWithId } from "@/helper";
import { Box, Modal } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const CheckingPayments: React.FC = () => {
  const router = useRouter();
  const [purchaseOrder, setPurchaseOrder] = useState<any>({});

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [code, setCode] = useState(0);
  const [basedurl, setBaseUrl] = useState("");
  const [returnUrl, setReturnUrl] = useState("");
  const [parameters, setParameters] = useState<any>({});
  const { transactionId, cartId } = router.query;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const thankYouHandler = useCallback(() => {
    removeOrderIdInLocalStorage();
    removeServiceFromLocalStorage();
    router.replace("/thank_you");
  }, [router]);

  const checkPaymentHandler = useCallback(() => {
    if (!purchaseOrder?.data?.cartId || !purchaseOrder?.data?.transectionId) {
      console.error("Cart ID or Transaction ID is missing.");
      return;
    }
    const {
      cartId,
      transectionId,
      purchaseOrderId,
      customerId,
    } = purchaseOrder?.data;
    const data = {
      cartId: cartId,
      transactionId: transectionId,
      purchaseOrderId: purchaseOrderId,
      userId: customerId,
    };
    checkPayment(data)
      .then((res) => {
        if (res?.code === 0) {
          thankYouHandler();
        }else {
          
        }
      })
      .catch((e) => alert(e));
  }, [purchaseOrder.data, thankYouHandler]);

  const getUrl = useCallback(() => {
    const iframe = iframeRef.current;
    const handleIframeLoad = () => {
      const iframeUrl = iframe && iframe.contentWindow?.location.href;
      // https://newexpert-preprod.findanexpert.net/
      // http://localhost:3000/
      // https://expert.findanexpert.net/
      // https://expertgateway-staging.findanexpert.net/
      if (iframeUrl?.startsWith("http://localhost:3000/")) {
        setOpen(false);
        setUrl(iframeUrl);
        if (purchaseOrder?.data?.cartId || purchaseOrder?.data?.transectionId) {
          // checkPaymentHandler();
          thankYouHandler();
        }
      } else {
        getUrl();
      }
    };

    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, [checkPaymentHandler, purchaseOrder?.data]);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const checkThreddsStaus = useCallback(
    (redirectUrl: string) => {
      if (open) {
        const timer = setTimeout(() => {
          const url = redirectUrl;
          const iframe = iframeRef.current;
          if (iframe) {
            iframe.src = url;
          }
        }, 2000);

        return () => clearTimeout(timer);
      }
    },
    [open]
  );

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        getUrl();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [open, getUrl]);

  useEffect(() => {
    if (url) {
      const [baseUrl, queryParams] = url.split("?");

      // Printing the base URL
      setBaseUrl(baseUrl);
      // console.log("Base URL:", baseUrl);

      // Splitting the query parameters based on the ampersand '&'
      const params = queryParams.split("&");

      // Creating an object to store the key-value pairs of the parameters
      const paramObject: { [key: string]: string } = {};

      // Looping through the params array and splitting each parameter based on the equal sign '='
      params.forEach((param: any) => {
        const [key, value] = param.split("=");
        paramObject[key] = value;
      });

      // Printing the parameter object
      setParameters(paramObject);
    }
  }, [url]);

  const check3dsStatus = useCallback(
    (threedsData: any) => {
      const {
        cartId,
        transectionId,
        purchaseOrderId,
        customerId,
      } = threedsData;
      const data = {
        cartId: cartId,
        transactionId: transectionId, // Use transactionId from purchaseOrder data
        purchaseOrderId: purchaseOrderId,
        userId: customerId,
      };
      check3ds(data)
        .then((res) => {
          if (res?.code === 0) {
            // if (
            //   purchaseOrder?.data?.cartId ||
            //   purchaseOrder?.data?.transectionId
              
            // ) {
            //   checkPaymentHandler();
            // }
            // router.replace("/thank_you")
            thankYouHandler();  
          } else {
            setReturnUrl(res?.returnUrl);
            setOpen(true);
            checkThreddsStaus(res?.redirectUrl);
          }
        })
        .catch((e) => console.error(e));
    },
    [checkPaymentHandler, checkThreddsStaus, purchaseOrder?.data]
  );

  const getPurchaseOrder = useCallback(() => {
    var codeState = 0;
    const purchaseOrderId = parseInt(getOrderIdInLocalStorage());
    if (isNaN(purchaseOrderId)) {
      router.replace("/");
    } else {
      getPurchaseOrderWithId(purchaseOrderId)
        .then((res) => {
          if (
            res?.result?.data?.transectionId !== "" &&
            res?.result?.data?.cartId !== ""
          ) {
            setPurchaseOrder(res?.result);
            check3dsStatus(res?.result?.data);
          } else {
            if (codeState >= 5) {
              alert(
                "Transection Id was not found this is registering to incomplete orders"
              );
              router.replace("/");
            } else {
              codeState = codeState++;
              setTimeout(getPurchaseOrder, 4000);
            }
          }
        })
        .catch((e) => alert(e));
    }
  }, [router, check3dsStatus]);

  useEffect(() => {
    getPurchaseOrder();
  }, [getPurchaseOrder]);

  return (
    <div className="margin_bottom_new" >
      <div className="px-5 col-md-12 pt-4 mt-3">
        <div className="col-md-12 p-4 text-center bg_color_white_thankyou">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 py-5">
              <img className="img-fluid" src="/imagess/payment.png" />
              <h2 className="pt-4">Verfying Payment</h2>
              <h6 className="pt-1 label_text">
                We appreciate your patience as we check the availability of
                slots to accomodate your request. Please bear with us while we
                gather the necessary information. We understand that your time
                is valuable, and we are working diligently to provide you We
                highly recommend enabling 3DS for your card to enhance the
                security of your online purchases. By doing so, you can have
                peace of mind knowing that your transactions are safeguarded
                against fraudulent activities. if you agree to apply 3DS to your
                card, please let us know, and we will guide you through the
                process.
              </h6>
              <div className="spinner-border mt-4 text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            ref={iframeRef}
            width="700"
            height="600"
            title="Payment IFrame"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default CheckingPayments;
