import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getIndustryById } from "@/helper";

function ChildIndustry() {
  const router = useRouter();
  const { id } = router.query;
  const [listOfIndustries, setListOfIndustries] = useState<any>([]);

  useEffect(() => {
    if (id) {
      const getIndustryByParentIndustryId = () => {
        getIndustryById(id)
          .then((res) => {
            if (res.result.industries) {
              setListOfIndustries(res.result.industries[0].childIndustries);
            }
          })
          .catch((e) => alert(e))
          .finally(() => {});
      };
      getIndustryByParentIndustryId();
    }
  }, [id]);

  const handlePageHere = (industry: any) => {
    if (industry.hasChild === true) {
      router.push(`/industries/${industry.industryId}`);
    } else {
      router.push(`/services/servicesByIndustryId/${industry.industryId}`);
    }
  };

  return (
    <div className="p-4">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {listOfIndustries.length === 0 ? <div>Record Not Found</div> : listOfIndustries?.map((itm: any, index: any) => (
          <div key={index} className="mt-2 text-center">
            <div className="border_cards" onClick={() => handlePageHere(itm)}>
              <Image
                src={itm.industryimageUrl}
                alt="industryImage"
                height={339}
                width={678}
              />
              <div className="py-3">
                <p className="mb-0" key={index}>
                  {itm.industryName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChildIndustry;
