import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { BiChevronRight } from "react-icons/bi";

function ManageEmail({
  verifyHandler,
}: {
  verifyHandler: (isPrimary?: boolean, isSecondary?: boolean) => void;
}) {
  const { profile } = useSelector((state: any) => state);
  return (
    <>
      {" "}
      <div className="col-md-12 px-0 border_for_all_pages">
        <InputFields
          label="Primary Email"
          value={profile.primaryEmail ?? "Selteq.net"}
          isVerify={profile.primaryEmailVerify ?? false}
          onClickHandler={() => verifyHandler(true, false)}
        />
        <hr className="background_line my-2" />
        <InputFields
          label="Secondary Email"
          value={profile.secondaryEmail ?? "Selteq.net"}
          isVerify={profile.secondaryEmailVerify ?? false}
          onClickHandler={() => verifyHandler(false, true)}
        />
        <hr className="background_line my-2" />
        <InputFields
          label="Invoice Email"
          isVerify={false}
          value={"Selteq.net"}
          onClickHandler={() => verifyHandler(false, false)}
        />
      </div>
      <div className="col-md-12 text-end">
        <button
          className="btn btn-danger button_for_email_page"
          onClick={
            () => {}
            // isPrimaryEmailUpdate || isSecondaryEmailUpdate || isInvoiceEmailUpdate ? onVerifyEmailHandler:onPrimaryClickHandler
          }
        >
          Save & Continue
        </button>
      </div>
    </>
  );
}

export default ManageEmail;

const InputFields = ({
  label,
  value,
  isVerify,
  onClickHandler,
}: {
  label: any;
  value: any;
  isVerify: any;
  onClickHandler: any;
}) => {
  return (
    <div className="row px-md-3 px-3">
      <div className="col-md-12">
      <div
          style={{
            color: "grey",
            fontSize: "14px",
          }}
        >
          {label}
        </div>
      </div>
      <div className="col-md-6 col-8 m-auto">
       
        <div
          className="font_normal_email_fields"
        >
          {value}
        </div>
      </div>
      <div className="col-md-6 col-4 text-end m-auto">
        
        {isVerify ? (
          <Image
          src="/assets/images/verified.png"
          alt="verify"
          height={15}
          width={55}
        />
        ) : (
          <span
            className="fw-bold text-danger  verify_now"
            onClick={onClickHandler}
          >
            Verify Now  &nbsp;<Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.08}
                    width={6.33}
                  />
          </span>
        )}
      </div>
    </div>
  );
};
