import React from "react";

function Justforyou(data: any) {
  console.log("ijk",data)
  return (
    <div className="custom_padding1 pt-5">
      <div className="col-md-12">
        <img className="img-fluid w-100 img_height_width_set" src={data?.data?.imageUrl} />
        {/* <p className="m-0 pb-3 heading_landing_page">Just for You</p>
        <div className="col-md-12 background_banner_1">
          <div className="row">
            <div className="col-md-6 text-end">
              <img className="img-fluid" src="/imagess/girl2.png" />
            </div>
            <div className="col-md-6 m-auto">
              <p className="m-0 p-0 big_offers_text">Big Offers</p>
              <p className="m-0 pt-2 big_offers_des">
                Get discount on
                <br /> many Services Everyday!
              </p>
              <button className="btn btn-light mt-5 py-2 px-4">
                {" "}
                BOOK NOW{" "}
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Justforyou;
