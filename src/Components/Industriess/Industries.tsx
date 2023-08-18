import React, { useEffect, useState } from "react";
import Styles from "../../styles/Landingpagemodules/Industries.module.css";
import Heading from "../Reusable/Heading";
import CategoryItem from "../Reusable/CategoryItem";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

interface IndustriesProps {
  data: {
    textValue: string;
    sectionnew: {
      imageUrl: string;
      name: string;
    }[];
  };
}

const Industries: React.FC<IndustriesProps> = ({ data }) => {
  const [pairs, setPairs] = useState<any[]>();
  const [name, setName] = useState<string>();

  function convertToPairs(arr: any[]) {
    const pairData: any[] = [];
    for (let i = 0; i < arr?.length; i += 2) {
      if (i + 1 < arr?.length) {
        pairData.push([arr[i], arr[i + 1]]);
      } else {
        pairData.push([arr[i]]);
      }
    }

    setPairs(pairData);
  }

  useEffect(() => {
    convertToPairs(data?.sectionnew);
    setName(data?.textValue);
  }, [data]);

  return (
    <div>
      <div className="padding_custom_industries pt-5">
        <Heading text={name} />
      </div>
    <div className="display_pc">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          nextEl: null,
          prevEl: null,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className={`mySwiper ${Styles.boxAlign} slider2`}
      >
        {pairs?.map((item, index) => {
          console.log(item);
          return (
            <SwiperSlide key={index}> 
            <div className={Styles.itemContainerBox} > 
                <CategoryItem data={item[0]} />
                
                <CategoryItem data={item[1]} />
            
            
            </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
      <div className="col-md-12 display_mob">
        <div className="row px-5">
       
          {pairs?.map((item, index) => {
          console.log(item);
          return ( 
            <div className="col-md col-4 text-center">
                <CategoryItem data={item[0]} />
                
                <CategoryItem data={item[1]} />
            
            
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
