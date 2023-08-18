import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TrendingLand(data: any) {
  console.log("./././././.",data?.data)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="custom_padding1 pt-5">
      <p className="m-0 pb-3 heading_landing_page">{data?.data?.name}</p>
      <Carousel
        responsive={responsive}
        draggable={true}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
      >
        {data?.data?.sectionnew?.map((item: any, index: any)=> {
          return(
            <div >
            <div className="col-md-12 bg_card_ground px-2 ">
             <img className="img-fluid w-100 img_rad" src={item?.imageUrl} />
            </div>
            <div className="col-md-12 px-2 margin_top_negg">
            <div className="bg_set_new px-2">
            <p className="m-0 p-0">{item?.name}</p>
                <p className="m-0 pt-1 pb-2 description_of_card">
                  We provide an extensive range of electrical services like
                  installation, repairs & maintenance, to make sure your house is
                  electrically insulated & safe.
                </p>
            </div>
            </div>
            {/* <div className="col-md-12 bottom_card_inf bg-white">
                <p className="m-0 p-0">ELECTRICIAN</p>
                <p className="m-0 pt-1 pb-2 description_of_card">
                  We provide an extensive range of electrical services like
                  installation, repairs & maintenance, to make sure your house is
                  electrically insulated & safe.
                </p>
                <div className="text-end px-3">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div> */}
          </div>
          )
        })}
      
      </Carousel>
    </div>
  );
}

export default TrendingLand;
