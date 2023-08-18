import { createAddress, updateAddress } from "@/helper";
import { Button } from "@/styles/Button.style";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../Loaders/Loader";

interface Location {
  line1: string;
  line2: string;
  addressName: string;
  state: string;
  townCity: string;
  postalCode: string;
  addressNote: string;
  userId: number;
  countryId: number;
  latitude: number;
  longitude: number;
  isResidentialAddress: boolean;
  radius: number;
  addressTypeValue: number;
  createdBy: number;
}

interface Props {
  location: Location;
  cancelingCreateAddress: any;
  isAddressUpdate: any;
}

const CreateAndUpdateAddress = ({
  location,
  cancelingCreateAddress,
  isAddressUpdate,
}: Props) => {
  const [addLocation, setAddLocation] = useState<Location>(location);
  const [isLoading, setIsLoading] = useState(false);
  const [userorderid, setorderID] =useState<any>()
  const router = useRouter();

  const onClickHandler = async (e: any) => {
    e.preventDefault();
    if (isAddressUpdate) {
      setIsLoading(true);
      updateAddress(addLocation)
        .then((res) => {
          cancelingCreateAddress(addLocation, true, location);
        })
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(true);
      createAddress(addLocation)
        .then(async (response) => {
          cancelingCreateAddress(addLocation);
        })
        .finally(() => setIsLoading(false));
    }
  };


  const onClickHandler2 = async (e: any) => {
    e.preventDefault();
    if (isAddressUpdate) {
      setIsLoading(true);
      updateAddress(addLocation)
        .then((res) => {
          cancelingCreateAddress(addLocation, true, location);
        })
        .catch((e) => alert(e))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(true);
      createAddress(addLocation)
        .then(async (response) => {
          cancelingCreateAddress(addLocation);
          router.push("/flowManagementPages/expert_address");
        })
        .finally(() => setIsLoading(false));
    }
  };




  useEffect(() => {
    const orderId = localStorage.getItem("orderId");
    setorderID(orderId)
  }, [])
  
 
  


  return (
    <>
     
    <div className=" px-md-3 mt-4 mb-5">
      <div className="row">
      <div
         className="col-md-12"
      
      >
        <div className="col-md-12 border_for_all_pages" 
        >
        <div
        className="label_address_font_pixl"
        >
          Address Name
        </div>
        <input
          type="text"
          className="border border-0 font_for_address_inputs"
          value={addLocation.addressName}
          onChange={(e) =>
            setAddLocation((prevItem) => ({
              ...prevItem,
              addressName: e.target.value,
            }))
          }
          placeholder="Address Name"
        />
        </div>
      </div>


      <div
         className="col-md-12"
      
      >
        <div className="col-md-12 border_for_all_pages mt-3" 
        >
        <div
         className="label_address_font_pixl"
        >
          Address Name
        </div>
        <input
          type="text"
          className="border border-0 font_for_address_inputs"
          value={addLocation.line1}
          onChange={(e) =>
            setAddLocation((prevItem) => ({
              ...prevItem,
              line1: e.target.value,
            }))
          }
          placeholder="Home"
        />
        </div>
      </div>
        <div
          className="col-md-6"
       
        >
          <div className="col-md-12 border_for_all_pages mt-3" >
          <div
            className="label_address_font_pixl"
          >
            Flat & Building Number
          </div>
          <input
            type="text"
            className="border border-0 font_for_address_inputs"
            value={addLocation.line2}
            onChange={(e) =>
              setAddLocation((prevItem) => ({
                ...prevItem,
                line2: e.target.value,
              }))
            }
            placeholder="Flat & Building"
          />
          </div>
        </div>
        <div
           className="col-md-6 mt-3"
       
        >
          <div className="col-md-12 border_for_all_pages"
          >
          <div
           className="label_address_font_pixl"
          >
            Street Address
          </div>
          <input
            type="text"
            className="border border-0 font_for_address_inputs"
            value={addLocation.state}
            onChange={(e) =>
              setAddLocation((prevItem) => ({
                ...prevItem,
                state: e.target.value,
              }))
            }
            placeholder="342 Ed Edward Road"
          />
          </div>
        </div>
        <div
        className="col-md-6"
          >
          <div className="col-md-12 border_for_all_pages mt-3" >
          <div
          className="label_address_font_pixl"
          >
            City
          </div>
          <input
            type="text"
            className="border border-0 font_for_address_inputs"
            value={addLocation.townCity}
            onChange={(e) =>
              setAddLocation((prevItem) => ({
                ...prevItem,
                townCity: e.target.value,
              }))
            }
            placeholder="New Island"
          />
          </div>
        </div>
        <div
          className="col-md-6"
       
        >
          <div className="col-md-12 border_for_all_pages mt-3"
          >
          <div
           className="label_address_font_pixl"
          >
            Postal Code
          </div>
          <input
            type="text"
            className="border border-0 font_for_address_inputs"
            value={addLocation.postalCode}
            onChange={(e) =>
              setAddLocation((prevItem) => ({
                ...prevItem,
                postalCode: e.target.value,
              }))
            }
            placeholder="004488"
          />
          </div>
        </div>
      <div
       className="col-md-12"
       
      >
        <div className="col-md-12 border_for_all_pages mt-3" 
        >
        <div
          className="label_address_font_pixl"
        >
          Address Note
        </div>
        <input
          type="text"
          className="border border-0 font_for_address_inputs"
          value={addLocation.addressNote}
          onChange={(e) =>
            setAddLocation((prevItem) => ({
              ...prevItem,
              addressNote: e.target.value,
            }))
          }
          placeholder="My House is away from bridge..."
        />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end mt-5 pt-5">
        <div className="d-flex align-items-center ">
          <button
            className="bg-danger bg-opacity-25 text-danger border-0 rounded px-4 py-2"
            onClick={cancelingCreateAddress}
          >
            Cancel
          </button>
          {isLoading ? (
            <Loader
              status={isLoading}
              style={{
                margin: "0 0 0 0.5rem",
              }}
            />
          ) : (
            <>
            {userorderid ? <button
              className="btn btn-danger"
              style={{
                margin: "0 0 0 0.5rem",
                padding: "0.5rem 1.5rem",
              }}
              onClick={onClickHandler2}
            >
              Save
            </button> :
            <button
              className="btn btn-danger"
              style={{
                margin: "0 0 0 0.5rem",
                padding: "0.5rem 1.5rem",
              }}
              onClick={onClickHandler}
            >
              Save
            </button>
            }
            </>
          )}
        </div>
      </div>
      </div>
    </div>
    </>
  );
};
export default CreateAndUpdateAddress;
