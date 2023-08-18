import MyCalendar from "@/Components/components/calendar";
import SideBar from "@/Components/components/sidebar";
import { formatDate } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useSelector } from "react-redux";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { Router, useRouter } from "next/router";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const UpdateDOB = () => {
  
  const { profile } = useSelector((state: any) => state);
  const [value, onChange] = useState<any>(new Date());
  const [newdateee, setNewdateee] = useState<any>("");
  const [jwtToken, setJwtToken] = useState<any>(null);
  const [activealert, setActivealert]=useState<any>(false);
  const [activealertmsg, setActivealertmsg]=useState<any>("");
  const router = useRouter();
  useEffect(() => {
    setJwtToken(localStorage?.getItem("jwtToken"));

  }, [jwtToken])
  useEffect(() => {
  const inputDateStr = value;
  const inputDate = inputDateStr ? new Date(inputDateStr) : null;
  if (inputDate) {
    const convertedDateStr = inputDate.toISOString();
    setNewdateee(convertedDateStr);
    console.log("Converted date:", convertedDateStr);
  } else {
    console.log("Invalid input date.");
  }
  }, [value]);




  const uploadImageprofile = async () => {
    const isToken = jwtToken !== null;
    
    const headers = {
      Authorization: isToken ? `Bearer ${jwtToken}` : undefined,
      'Content-Type': 'application/json',
    };

    try {
      const data = {
        userId: profile?.userId,
        dob: newdateee,
        modifiedBy : profile?.userId
      }
      const response = await axios.post(`https://expertgateway-staging.findanexpert.net/signup_svc/pv/users/addUserDob`, data, { headers });

      // Handle the response as needed
      console.log('Upload successful:------------------------------', response.data);
      if (response.data.code === -1){
        setActivealert(true);
        setActivealertmsg(response.data.message);
      } 
      router.push("/userProfile/profile/") 
      // setImageurlupload(response.data);
    } catch (error) {
      // Handle errors
      console.error('Upload error:', error);
    }
  };


  

  console.log("valuwwww",newdateee)
  
  return (
    <SideBar activeIndex={0}>
      <div className="px-3 ">
        {activealert === true ? 
      <div className="alert alert-danger mt-4" role="alert">
         {activealertmsg}
        </div> : 
        null
        }
        <div className="col-md-12 mt-4">
          <div className="border_for_all_pages">
            <div
              className="d-flex flex-column"
              style={{
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "grey",
                  fontSize: "10px",
                }}
              >
                Date of Birth
              </div>
              <div
               className="input_profile_all_dob"
              >
                {formatDate(profile?.dob)}
              </div>
            </div>
          </div>
          {/* <MyCalendar /> */}
          {/* <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 500,
              margin: "50px",
            }}
      /> */}
      <div className="row mt-3">
     
        <div className="col-md-4"></div>
          <div className="col-md-4">
          <Calendar onChange={onChange} value={value} />
          </div>
       <div className="col-md-4"></div>
       </div>
          <div className="d-flex justify-content-end button_size_fixed2">
            <button className="btn btn-danger" onClick={uploadImageprofile}>Save Changes</button>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default UpdateDOB;
