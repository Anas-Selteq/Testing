import { addNewPaymentMethod } from "../../helper";
import { useEffect, useState } from "react";
import { number, expirationDate, cvv } from "card-validator";
import creditCardType from "credit-card-type";
import Loader from "../Loaders/Loader";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const AddPayment = ({ onClickHandler }: { onClickHandler: any }) => {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardHolderName, setCardHolderName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardLabel, setCardLabel] = useState("Visa");
  const [isCardValid, setIsCardValid] = useState(true);
  const [address, setAddress] = useState({
    flatBuildingNumber: "",
    streetAddress: "",
    country: "",
    city: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { profile } = useSelector((state: any) => state);
  const [userorderid, setorderID] =useState<any>()
  const router = useRouter();

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const paymentObject = {
      email: profile?.primaryEmail,
      userId: profile?.userId,
      cardOwnerName: cardHolderName,
      cardNumber: cardNumbers?.join(""),
      expirationYear: selectedYear,
      expirationMonth: selectedMonth,
      cvv: cvc,
      billingAddress: {
        city: address?.city,
        country: address?.country,
        line1: address?.flatBuildingNumber,
        line2: address?.streetAddress,
        state: "tes",
        postalCode: "47000",
      },
    };
    addNewPaymentMethod(paymentObject)
      .then((res) => {
        onClickHandler();
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };


  const handleSubmit2 = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const paymentObject = {
      email: profile?.primaryEmail,
      userId: profile?.userId,
      cardOwnerName: cardHolderName,
      cardNumber: cardNumbers?.join(""),
      expirationYear: selectedYear,
      expirationMonth: selectedMonth,
      cvv: cvc,
      billingAddress: {
        city: address?.city,
        country: address?.country,
        line1: address?.flatBuildingNumber,
        line2: address?.streetAddress,
        state: "tes",
        postalCode: "47000",
      },
    };
    addNewPaymentMethod(paymentObject)
      .then((res) => {
        router.push("/flowManagementPages/expert_payment");
        onClickHandler();
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };



  const checkValidation = () => {
    const countryValidation = /^[A-Z]{2}$/.test(address.country);
    const isFormValid =
      countryValidation &&
      isCardValid &&
      address.flatBuildingNumber !== "" &&
      address.streetAddress !== "" &&
      address.city !== "";
    return !isFormValid;
  };

  useEffect(() => {
    const isCardNumberValid = number(cardNumbers.join("")).isValid;
    const isExpirationDateValid = expirationDate({
      month: selectedMonth,
      year: selectedYear,
    }).isValid;
    const isCvvValid = cvv(cvc).isValid;
    const dataValid = isCardNumberValid && isExpirationDateValid && isCvvValid;
    const cardTypeResult = creditCardType(cardNumbers.join(""));
    const cardTypeLabel =
      cardTypeResult && cardTypeResult[0]
        ? cardTypeResult[0].niceType
        : "Unknown";
    setCardLabel(cardTypeLabel);
    setIsCardValid(dataValid);
  }, [cardNumbers, selectedMonth, selectedYear, cvc]);

  useEffect(() => {
    const orderId = localStorage.getItem("orderId");
    setorderID(orderId)
  }, [])

  const today = new Date();
  const currentYear = today.getFullYear();
  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const monthValue = (index + 1).toString().padStart(2, "0");
    return (
      <option key={monthValue} value={monthValue}>
        {monthValue}
      </option>
    );
  });

  const yearOptions = Array.from({ length: 10 }, (_, index) => {
    const yearValue = (currentYear + index).toString();
    return (
      <option key={yearValue} value={yearValue}>
        {yearValue}
      </option>
    );
  });

  const handleCardNumberChange = (index: number, value: string) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value;
    setCardNumbers(newCardNumbers);
  };
  const handleCvcValue = (e: any) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\D/g, "");
    const trimmedValue = sanitizedValue.slice(0, 3);
    console.log(typeof trimmedValue);
    if (trimmedValue.length >= 4) {
    } else {
      setCvc(trimmedValue);
    }
  };
  const handleCardHolderNameChange = (e: any) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^A-Za-z\s]/g, ""); // Remove non-alphabetic and non-space characters
    setCardHolderName(sanitizedValue);
  };

  return (
    <div className="margin_set_bottom pb-5 mt-4">
      <div className="row">
        <div className="col-md-4 px-md-2">
        <div
        className={`bg-white rounded border ${
          isCardValid ? "" : "border-danger"
        } p-3`}
      >
        <div className="">
          <span className="card_number_text">Card Number</span>
          <div className="">
            <div className="card-number-input">
              {cardNumbers.map((number, index) => (
                <input
                  key={index}
                  type="tel"
                  maxLength={4}
                  name="cardNumber"
                  placeholder="0000"
                  className="border border-0 border-bottom me-3 card_placeholder"
                  style={{
                    width: "15%",
                  }}
                  onKeyPress={(e) => {
                    if (e.which < 48 || e.which > 57) e.preventDefault(); // Prevent entering non-digit characters
                  }}
                  value={number}
                  onChange={(e) =>
                    handleCardNumberChange(index, e.target.value)
                  }
                  required
                />
              ))}
            </div>
          </div>
        </div>
        <label htmlFor="Name" className="card_number_text pt-3 ">
          Card Holder Name
        </label>
        <div>
          <input
            type="text"
            id="Name"
            className="form-control card-input-field"
            value={cardHolderName}
            placeholder="Card Holder Name"
            onChange={handleCardHolderNameChange}
          />
        </div>
        <div className="row pt-3 ">
          <div className="col-md-6">
          <div >
            <label htmlFor="expiry" className="card_number_text">
              Expire Date
            </label>
            <div className="d-flex">
              <select
              className="form-control border_removal"
                id="expiry"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {monthOptions}
              </select>&nbsp;&nbsp;
              <select
              className="form-control border_removal"
                id="expiry-year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {yearOptions}
              </select>
            </div>
          </div>
          </div>
          <div className="col-md-6">
          <div>
            <label htmlFor="cvc" className="card_number_text px-3">
              CVC
            </label>
            <div>
              <input
                type="number"
                id="cvc"
                value={cvc}
                onChange={handleCvcValue}
                maxLength={3}
                min="0"
                max="999"
                pattern="[0-9]*" // Allow only digits on mobile devices
                inputMode="numeric" // Show numeric keyboard on mobile devices
                placeholder="000"
                className=" border border-0 border-bottom card_placeholder1 form-control"
                onKeyPress={(e) => {
                  if (e.which < 48 || e.which > 57) e.preventDefault(); // Prevent entering non-digit characters
                }}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    
      {isCardValid ? null : (
        <p className="text-danger pt-2 m-0 pb-0 font_size_card_not_valid">This Card is not valid</p>
      )}
     <div className="col-md-12">
      <div className="row">
        <div className="col-md-12 px-md-2 mt-3">
        <div className="rounded outline_of_input">
        <div
            className="input_font_header"
            >
            Flat & Building Number
            </div>
            <input
              type="text"
              className="border border-0 input_field_text"
              style={{
                outline: "none",
                width: "100%",
              }}
              placeholder="Flat & Building Number"
              name="flatBuildingNumber"
              value={address.flatBuildingNumber}
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </div>
          </div>
      
        <div className="mt-3 px-md-2">
        <div className="rounded outline_of_input ">
            <div
            className="input_font_header"
            >
              Street Address
            </div>
            <input
              type="text"
              style={{
                outline: "none",
                width: "100%",
              }}
              className="border border-0 input_field_text"
              placeholder="Street Address"
              name="streetAddress"
              value={address.streetAddress}
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6 px-md-2 mt-3">
        <div className="rounded outline_of_input">
            <div
            className="input_font_header"
            >
             Country
            </div>
            <input
              type="text"
              className="border border-0 input_field_text "
              style={{
                outline: "none",
                width: "100%",
              }}
              placeholder="Select Country"
              name="country"
              value={address.country}
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6 px-md-2 mt-3">
        <div className="rounded outline_of_input">
            <div
             className="input_font_header"
            >
             City
            </div>
            <input
              type="text"
              className="border border-0 input_field_text"
              style={{
                outline: "none",
                width: "100%",
              }}
              placeholder="Select City"
              name="city"
              value={address.city}
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      </div>
      {/* <div className="d-flex my-4">
        <input
       
        />
        <input
          type="text"
          placeholder="Street Address"
          className="rounded border border-primary-subtle px-3 py-2"
          name="streetAddress"
          value={address.streetAddress}
          disabled={isLoading}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="text"
        placeholder="UK"
        className="rounded border border-primary-subtle px-3 py-2 me-4"
        name="country"
        value={address.country}
        disabled={isLoading}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="City"
        className="rounded border border-primary-subtle px-3 py-2"
        name="city"
        value={address.city}
        disabled={isLoading}
        onChange={handleInputChange}
      /> */}
      <div className="d-flex justify-content-end mt-4 pt-3">
        <button
          className="bg-danger bg-opacity-25 border-0 rounded text-danger me-4 px-5 py-2"
          disabled={isLoading}
          onClick={onClickHandler}
        >
          Cancel
        </button>
        {isLoading ? (
          <Loader status={isLoading} style={{}} />
        ) : (
          <>
          { checkValidation() ?
        <button
        type="submit"
        className="btn btn-light background_disabled_button px-5"
        disabled={checkValidation()}
        onClick={handleSubmit}
      >
        Add Now
      </button>:
      <>
      {userorderid ?
    <button
    className="btn btn-danger px-5"
    type="submit"
    onClick={handleSubmit2}
  >
    Add Now
  </button>   :
  <button
  className="btn btn-danger px-5"
  type="submit"
  onClick={handleSubmit}
>
  Add Now
</button> 
    }
       
    </>
        }
          </>
          
        )}
      </div>
    </div>
  );
};

export default AddPayment;
