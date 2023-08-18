import Layout2 from '@/Components/Layout2/Layout2'
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ServicePageMovement } from "@/Components/service_page_movement";
import {
  getOrderIdInLocalStorage,
  getPaymentFromLocalStorage,
  getServiceFromLocalStorage,
  setOrderIdInLocalStorage,
} from "@/Components/helper";
import Image from "next/image";
import {
  getFlowManagementBySKU,
  getPurchaseOrderWithId,
  postPurchaseOrder,
} from "@/helper";
import { useSelector } from "react-redux";
import axios from 'axios';

function Contentpage() {
    /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  const [object, setObject] = useState<any>();
  const { profile } = useSelector((state: any) => state);
  const [jwtToken, setJwtToken] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  /* -------------------------- Create Purchase Order ------------------------- */
  const handleFlowScreen = () => {
    const service = getServiceFromLocalStorage();
    const orderId = getOrderIdInLocalStorage();
    if (service === null || !profile.userId) {
      alert("Please Select Service or Login");
      router.replace("/auth/signup");
    } else {
      if (object && object.result?.bookingFlow?.length === 0) {
        alert("No Flow Found Please Select Another Service");
      } else {
        if (!orderId || orderId === undefined) {
          const bookingFlow = object && object.result?.bookingFlow;
          const object1 = {
            currentStep: 0,
            totalStep: bookingFlow && bookingFlow[0]?.screens.length,
            customerId: profile?.userId,
            customerName: profile?.firstName + profile?.lastName ?? "UNKNOWN",
            customerEmail: profile?.primaryEmail ?? "UNKNOWN@EMAIL.COM",
            customerNumber: profile?.primaryMobile ?? "0987654321",
            customerGender: profile?.genderId ?? "1001",
            bookingFlow: bookingFlow,
            serviceId: service?.serviceId,
            servicePayload: service,
            serviceSKU: service?.serviceSKU,
            totalPrice: service?.actualPrice,
            totalAmount: service?.actualPrice,
            currency: service?.currency,
            returnUrl: "https://newexpert-preprod.findanexpert.net/",
          };
          postPurchaseOrder(object1)
            .then((res) => {
              const importantData = bookingFlow && bookingFlow[0]?.screens;
              const returnedData = ServicePageMovement(
                importantData && importantData[0]?.screenName
              );
              if (returnedData !== "/") {
                setOrderIdInLocalStorage(res?.result?.purchaseOrderId);
                router.push(`/${returnedData}`);
              }
            })
            .catch((e) => alert(e))
            .finally(() => {});
        } else {
          getPurchaseOrderWithId(parseInt(orderId))
            .then((res) => {
              if (parseInt(res?.result?.currentStep) === 0) {
                const returnedData = ServicePageMovement(
                  res?.result?.purchaseOrderFlow[0]?.screens[0]?.screenName
                );
                if (returnedData !== "/") {
                  router.push(`/${returnedData}`);
                }
              }
              if (
                parseInt(res?.result?.currentStep) ===
                parseInt(res?.result?.data?.totalStep)
              ) {
                alert("Payment method is in pending ");
                router.push("/flowManagementPages/expert_payment");
              } else {
                alert("Already a Purchase Order is in Pending");
                const currentStep = res?.result?.currentStep;
                const returnedData = ServicePageMovement(
                  res?.result?.purchaseOrderFlow[0]?.screens[currentStep - 1]
                    ?.actionId
                );
                if (returnedData !== "/") {
                  router.push(`/${returnedData}`);
                }
              }
            })
            .catch((e) => alert(e));
        }
      }
    }
  };

  useEffect(() => {
    function fetchFlowData() {
      const service = getServiceFromLocalStorage();
      getFlowManagementBySKU(service?.serviceSKU)
        .then((res) => {
          if (res.result?.bookingFlow?.length === 0) {
            alert("No Flow Found");
          } else {
            setObject(res);
          }
        })
        .catch((e) => alert(e));
    }
    fetchFlowData();
  }, []);

  // get content page content api 


  useEffect(() => {
    setJwtToken(localStorage?.getItem("jwtToken"));

  }, [jwtToken])

  useEffect(() => {
    const service = getServiceFromLocalStorage();
    let isMounted = true; // Flag to track component mount state
      const fetchData = async () => {
        const isToken = jwtToken !== null;
        const headers = {
          Authorization: isToken ? `Bearer ${jwtToken}` : undefined,
          'Content-Type': 'application/json',
        };
  
        try {
          const response = await axios.get(`http://77.68.73.28:8084/serviceinventory_svc/pb/ContentPages/GetContentPageByServiceSKU?serviceSKU=${service?.serviceSKU}`, { headers });
          if (isMounted) { // Only update state if the component is still mounted
            setData(response.data);
            console.log("content page data", response.data);
          }
        } catch (error) {
          // setError(error);
          console.log("error", error)
        }
      };
      fetchData();
    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, []);



  return (
    <Layout2>
    <div className='col-md-12 page_scroll '>
      {/* sec 1 ----------------------------  */}
     <div className='col-md-12 background_color_sec_1 '>
        <div className='col-md-12 custom_padding_contentpage padding_top_custon_sec1'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='h1_sec1_landingpage'>Laser Hair Removal</h1>
                    <p className='p_sec2_landing'>Ditch the Razor and embrace the Laser!
                        Silky smooth hair free skin with Laser Hair Removal. You can now book your Laser Hair Removal treatments instantly on Expert App. All Expert clinics are dr led clinics with over 20 years experience so you're in safe hands. We use the best medical laser technology and make each treatment bespoke ensuring you get results from your first session.</p>
                    <p className='p_sec2_landing'>From <strong className='strong_tag'>£6</strong></p>
                    <button  onClick={handleFlowScreen} className='btn btn-danger background_color_button mt-3'><i className="fas fa-calendar-alt"></i>&nbsp;&nbsp;Booking your Appointment</button>
                </div>
                <div className='col-md-6'>
                  <div className='col-md-12 text-center'>
                  <img className='img-fluid width_img_contet' src='/imagess/redicons/doctor.png' />
                  </div>
                </div>
            </div>
        </div>
     </div>

     {/* sec 2 ----------------------------  */}
     <div className='col-md-12 custom_padding_contentpage '>
      <div className='row'>
        <div className='col-md-7 '>
      <div className='col-md-12 bg-white px-4 py-4 box_shadow_card'>
        <div className='row'>
          <div className='col-md-6 font_color_set m-auto'>
          Want all the Services at our fingertips ? <span className='font_color_red'>Download</span> the <span className='font_color_red'>Expert</span> app Now
          </div>
          <div className='col-md-2 m-auto'>
           <span><img className='img-fluid' src='/imagess/redicons/google.svg' /></span>
          </div>
          <div className='col-md-2 m-auto'>
           <span><img className='img-fluid' src='/imagess/redicons/google.svg' /></span>
          </div>
          <div className='col-md-2 position_relative'>
           <span><img className='img-fluid position_aa' src='/imagess/redicons/mob.svg' /></span>
          </div>
        </div>
      </div>
      </div>
      </div>
     </div>

     {/* sec 3 ----------------------------  */}
     <div className='col-md-12 mb-3 custom_padding_contentpage mt-3'>
      <div className='row'>
        <div className='col-md-4'>
          <img className='img-fluid' src='/imagess/redicons/machine.png' />
        </div>
        <div className='col-md-8'>
          <p className='m-0 p-0 get_a_text'>Get a</p>
          <p className='m-0 p-0 head_free_body'><b>Hair Free Body</b></p>
          <p className='mt-3 p-0 p_tag_service '>
          Laser Hair Removal can benefit everyone Male Female Transgender light to dark skin. At Expert, we use the latest medical grade ND:Yag and Alexandrite lasers that give gold standard results. We've developed our own bespoke protocols and tailor each treatment according to hair and skin type. The laser energy delivers a short burst of light which penetrates into the skin to the root of the hair. The hair absorbs this energy converting into heat and disabling the hair growth mechanism.
          </p>
          <p className='m-0 p-0 p_tag_service'>
          Laser Hair Removal can benefit everyone Male Female Transgender light to dark skin. At Expert, we use the latest medical grade ND:Yag and Alexandrite lasers that give gold standard results. We've developed our own bespoke protocols and tailor each treatment according to hair and skin type. The laser energy delivers a short burst of light which penetrates into the skin to the root of the hair. The hair absorbs this energy converting into heat and disabling the hair growth mechanism.
          </p>
          <div className='row '>
            <div className='col-md-6 mt-3'>
              <div className='row'>
            <div className='col-md-3'>
              <img className='img-fluid' src='/imagess/redicons/icons.svg' />
            </div>
            <div className='col-md-9 px-0'>
            <p className='m-0 p-0 head_free_body2'><b>Hair Free Body</b></p>
            <p className='m-0 p-0 p_tag_service'>Ingrown hairs will never grow back into the body or curl back into the skin again with this treatment.</p>
            </div>
            </div>
            </div>
            <div className='col-md-6 mt-3'>
              <div className='row'>
            <div className='col-md-3'>
              <img className='img-fluid' src='/imagess/redicons/icons.svg' />
            </div>
            <div className='col-md-9 px-0'>
            <p className='m-0 p-0 head_free_body2'><b>Hair Free Body</b></p>
            <p className='m-0 p-0 p_tag_service'>Ingrown hairs will never grow back into the body or curl back into the skin again with this treatment.</p>
            </div>
            </div>
            </div>
            <div className='col-md-6 mt-3'>
              <div className='row'>
            <div className='col-md-3'>
              <img className='img-fluid' src='/imagess/redicons/icons.svg' />
            </div>
            <div className='col-md-9 px-0'>
            <p className='m-0 p-0 head_free_body2'><b>Hair Free Body</b></p>
            <p className='m-0 p-0 p_tag_service'>Ingrown hairs will never grow back into the body or curl back into the skin again with this treatment.</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     </div>

     {/* sec 4 ----------------------------  */}
     <div className='col-md-12 background_color_sec_2 pt-2'>
      <div className='col-md-12 text-center pt-4'>
        <h2 className='head_free_body2'><b>Before & <span className='color_red_new'>After</span></b></h2>
      </div>
      <div className='col-md-12 px-4  pt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <img className='img-fluid w-100' src='/imagess/redicons/beforeafter.png'/>
          </div>
          <div className='col-md-4'>
            <img className='img-fluid w-100' src='/imagess/redicons/beforeafter.png'/>
          </div> <div className='col-md-4'>
            <img className='img-fluid w-100' src='/imagess/redicons/beforeafter.png'/>
          </div>
        </div>
      </div>
      <div className='col-md-12 px-5 pb-4 pt-3'>
        <p className='m-0 p_tag_service'>
          The pigments immerse this particular light in the follicles and results in disabling the hair growth mechanism. The follicles are heated up and damaged without affecting the surrounding areas of the skin. After the initial consultation, the laser practitioner will carry out a patch test. This will help our specialists determine whether your skin is suitable for laser treatment or not.
        </p>
         <p className='m-0 p_tag_service'>
          The pigments immerse this particular light in the follicles and results in disabling the hair growth mechanism. The follicles are heated up and damaged without affecting the surrounding areas of the skin. After the initial consultation, the laser practitioner will carry out a patch test. This will help our specialists determine whether your skin is suitable for laser treatment or not.
        </p>
      </div>
      <div className='col-md-12 text-center pb-5'>
      <button className='btn btn-danger background_color_button mt-3'><i className="fas fa-calendar-alt"></i>&nbsp;&nbsp;Booking your Appointment</button>
      </div>
     </div>

     {/* sec 5 ----------------------------  */}
     <div className='col-md-12 text-center pt-4 custom_padding_contentpage'>
      <p className='m-0 head_free_body2'><b>Why Choose <span className='color_red_new'>Expert?</span></b></p>
      <div className='col-md-12 pt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='col-md-12 bg_gray_back px-4 py-3'>
              <img className='img-fluid' src='/imagess/redicons/instantbookings.png' />
              <p><strong>Instant Booking</strong></p>
              <p className='p_tag_service'>No calling, No waiting, just book the service you want now. Book 24/7 Anytime Anywhere</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='col-md-12 bg_gray_back px-4 py-3'>
              <img className='img-fluid' src='/imagess/redicons/instantbookings.png' />
              <p><strong>Affordable Prices</strong></p>
              <p className='p_tag_service'>Know the exact price before booking. No hidden changes or fees</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='col-md-12 bg_gray_back px-4 py-3'>
              <img className='img-fluid' src='/imagess/redicons/instantbookings.png' />
              <p><strong>Vetted Trusted Experts</strong></p>
              <p className='p_tag_service'>Qualified Experienced Professionals. Guaranteed quality service or your money back</p>
            </div>
          </div>
        </div>
      </div>
     </div>

     {/* sec 6 ----------------------------  */}
     <div className='col-md-12 background_color_sec_2 mt-4'>
      <div className='row'>
      <div className='col-md-6 m-auto'>
        <div className='col-md-12 custom_padding_contentpage1'>
          <p className='main_headingg_new'>Do You Need All <span className='color_red_new'>Services</span> at your <span className='color_red_new'>Fingertips</span></p>
          <p className='m-0  pb-2 p_tag_service1'>Download the <span className='color_red_new'>Expert App</span> Now!</p>
          <div className='flex_for_images'>
            <img className='img-fluid' src='/imagess/redicons/googlesquare.png' />
            <img className='img-fluid px-2' src='/imagess/redicons/applesquare.png' />
          </div>
        </div>
      </div>
      <div className='col-md-6 text-end'>
        <img className='img-fluid img_width_mobile' src='/imagess/redicons/mobilee.png' />
      </div>
      </div>
     </div>

     {/* sec 7 ----------------------------  */}
     <div className='col-md-12 custom_padding_contentpage pt-4'>
      <div className='row'>
        <div className='col-md-6 m-auto' style={{lineHeight:"200%", color:"#565656"}}>
        <ul>
        <li>You can now book Laser Hair Removal treatment instantly</li>
        <li>Manage your appointemtn , edit and cancel anytime you want</li>
        <li>Rest assured you'll book with the best clinics and Expert</li>
        <li>Most affordable Laser Hair Removal Prices</li>
        <li>Suitable for Men, Women, all skin and Hair Types</li>
        <li>Reduction of ingrown Hairs, pigment spots, shavng bumps</li>
        </ul>
        </div>
        <div className='col-md-6 text-center'>
          <img className='img-fluid img_width_monitor' src='/imagess/redicons/monitor.png' />
        </div>
      </div>
     </div>
    </div>
    </Layout2>
  )
}

export default Contentpage
