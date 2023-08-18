import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { render } from "react-dom";

function Productsforyouu() {
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating: any) => {
    setRating(newRating);
  };
  return (
    <div>
      <div className="using_flex">
        <div>
          <div className="card_width_further">
            <div className=" bottom_card_inf11">
              <div className="text-end ">
                {/* <i className="fas fa-arrow-right"></i> */}
                <ReactStars
                  count={1}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={rating} // Pass the current rating as the value
                />
              </div>
            </div>
          </div>
          <p className="m-0  card_heading_text pt-3 pb-2">HOME CLEANING</p>
          <p className="m-0  card_heading_text2">Including Kitchen</p>
          <p className="m-0 pt-2">
            <span className="text_50">50$</span>
            <span className="text_15 px-1">15%</span>
            <span className="text_15">OFF</span>
          </p>
        </div>

        <div>
          <div className="card_width_further">
            <div className=" bottom_card_inf11">
              <div className="text-end ">
                {/* <i className="fas fa-arrow-right"></i> */}
                <ReactStars
                  count={1}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={rating} // Pass the current rating as the value
                />
              </div>
            </div>
          </div>
          <p className="m-0  card_heading_text pt-3 pb-2">HOME CLEANING</p>
          <p className="m-0  card_heading_text2">Including Kitchen</p>
          <p className="m-0 pt-2">
            <span className="text_50">50$</span>
            <span className="text_15 px-1">15%</span>
            <span className="text_15">OFF</span>
          </p>
        </div>

        <div>
          <div className="card_width_further">
            <div className=" bottom_card_inf11">
              <div className="text-end ">
                {/* <i className="fas fa-arrow-right"></i> */}
                <ReactStars
                  count={1}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={rating} // Pass the current rating as the value
                />
              </div>
            </div>
          </div>
          <p className="m-0  card_heading_text pt-3 pb-2">HOME CLEANING</p>
          <p className="m-0  card_heading_text2">Including Kitchen</p>
          <p className="m-0 pt-2">
            <span className="text_50">50$</span>
            <span className="text_15 px-1">15%</span>
            <span className="text_15">OFF</span>
          </p>
        </div>

        <div>
          <div className="card_width_further">
            <div className=" bottom_card_inf11">
              <div className="text-end ">
                {/* <i className="fas fa-arrow-right"></i> */}
                <ReactStars
                  count={1}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={rating} // Pass the current rating as the value
                />
              </div>
            </div>
          </div>
          <p className="m-0  card_heading_text pt-3 pb-2">HOME CLEANING</p>
          <p className="m-0  card_heading_text2">Including Kitchen</p>
          <p className="m-0 pt-2">
            <span className="text_50">50$</span>
            <span className="text_15 px-1">15%</span>
            <span className="text_15">OFF</span>
          </p>
        </div>

        <div>
          <div className="card_width_further">
            <div className=" bottom_card_inf11">
              <div className="text-end ">
                {/* <i className="fas fa-arrow-right"></i> */}
                <ReactStars
                  count={1}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={rating} // Pass the current rating as the value
                />
              </div>
            </div>
          </div>
          <p className="m-0  card_heading_text pt-3 pb-2">HOME CLEANING</p>
          <p className="m-0  card_heading_text2">Including Kitchen</p>
          <p className="m-0 pt-2">
            <span className="text_50">50$</span>
            <span className="text_15 px-1">15%</span>
            <span className="text_15">OFF</span>
          </p>
        </div>
      </div>
      <div className="col-md-12 text-end pt-5">
        <span className="btn btn-danger active_ind mx-2">01</span>
        <span className="btn btn-light btn-sm  unselected_numbers mx-2">
          02
        </span>
        <span className="btn btn-light btn-sm unselected_numbers mx-2">03</span>
        <span className="btn btn-light btn-sm unselected_numbers mx-2">04</span>
        <span className="btn btn-light btn-sm unselected_numbers mx-2">05</span>
        <span className="btn btn-light background_view_all ">View All</span>
      </div>
    </div>
  );
}

export default Productsforyouu;
