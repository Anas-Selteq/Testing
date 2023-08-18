import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

interface ContainerWithInputProps {
  label: string;
  inputValue: any;
  showIcon?: boolean;
  showVerify?: boolean;
  verifiedOrNot?: boolean;
}

const CustomInput: React.FC<ContainerWithInputProps> = ({
  label,
  inputValue,
  showIcon = false,
  showVerify = false,
  verifiedOrNot = false,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center text-start">
      <div>
        <div
          style={{
            fontFamily: "Roboto",
            fontSize: "10px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "left",
            color: "#aaa",
          }}
        >
          {label}
        </div>
        <div
          className="pt-1"
          style={{
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: "left",
            color: "#000",
          }}
        >
          
        
        {inputValue}
        </div>
      </div>
      <div className="d-flex align-items-center">
        {showVerify && verifiedOrNot ? (
          <div className="text-end me-2">
            <Image
              src="/assets/images/verified.png"
              alt="verify"
              height={15}
              width={55}
            />
          </div>
        ) : null}

        {showIcon ? (
          <div>
           <Image
                    src="/assets/images/rightt.png"
                    alt="keyright"
                    height={11.19}
                    width={6.33}
                  />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomInput;
