import { useState } from "react";
import Map from "../map";
import SearchBar from "../map/search";
import axios from "axios";
import { Button } from "@/styles/Button.style";
import { BiFullscreen } from "react-icons/bi";

const defaultLocation = {
  annotations: {
    DMS: {
      lat: "31° 33' 56.45592'' N",
      lng: "74° 18' 51.05844'' E",
    },
    MGRS: "43RDQ3491692500",
    Maidenhead: "MM71dn75qs",
    Mercator: {
      x: 8272616.999,
      y: 3684068.846,
    },
    OSM: {
      edit_url:
        "https://www.openstreetmap.org/edit?node=1886594378#map=16/31.56568/74.31418",
      note_url:
        "https://www.openstreetmap.org/note/new#map=16/31.56568/74.31418&layers=N",
      url:
        "https://www.openstreetmap.org/?mlat=31.56568&mlon=74.31418#map=16/31.56568/74.31418",
    },
    UN_M49: {
      regions: {
        ASIA: "142",
        PK: "586",
        SOUTHERN_ASIA: "034",
        WORLD: "001",
      },
      statistical_groupings: ["LEDC"],
    },
    callingcode: 92,
    currency: {
      alternate_symbols: ["Rs"],
      decimal_mark: ".",
      disambiguate_symbol: "PKR",
      html_entity: "&#x20A8;",
      iso_code: "PKR",
      iso_numeric: "586",
      name: "Pakistani Rupee",
      smallest_denomination: 100,
      subunit: "Paisa",
      subunit_to_unit: 100,
      symbol: "₨",
      symbol_first: 1,
      thousands_separator: ",",
    },
    flag: "🇵🇰",
    geohash: "ttsge43gmvxhc1pgkyw1",
    qibla: 260.26,
    roadinfo: {
      drive_on: "left",
      speed_in: "km/h",
    },
    sun: {
      rise: {
        apparent: 1686009540,
        astronomical: 1686003660,
        civil: 1686007860,
        nautical: 1686005880,
      },
      set: {
        apparent: 1685973840,
        astronomical: 1685979660,
        civil: 1685975460,
        nautical: 1685977500,
      },
    },
    timezone: {
      name: "Asia/Karachi",
      now_in_dst: 0,
      offset_sec: 18000,
      offset_string: "+0500",
      short_name: "PKT",
    },
    what3words: {
      words: "mailings.recitals.plugs",
    },
    wikidata: "Q11739",
  },
  bounds: {
    northeast: {
      lat: 31.7256822,
      lng: 74.4741829,
    },
    southwest: {
      lat: 31.4056822,
      lng: 74.1541829,
    },
  },
  components: {
    "ISO_3166-1_alpha-2": "PK",
    "ISO_3166-1_alpha-3": "PAK",
    "ISO_3166-2": ["PK-PB"],
    _category: "place",
    _type: "neighbourhood",
    city: "Lahore",
    continent: "Asia",
    country: "Pakistan",
    country_code: "pk",
    postcode: "54010",
    state: "Punjab",
    state_code: "PB",
    subdistrict: "Lahore Cantonment Tehsil",
  },
  confidence: 3,
  formatted: "Lahore Cantonment Tehsil, Lahore 54010, Pakistan",
  geometry: {
    lat: 31.5656822,
    lng: 74.3141829,
  },
};

const AddLocation = ({
  createAddressHandler,
  showMap,
}: {
  createAddressHandler: any;
  showMap: boolean;
}) => {
  const APIKEY = "1a12e15218234ec6838a401380c55b08";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<any>(
    defaultLocation
  );

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          e.target.value
        )}&key=${APIKEY}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Searched error: ", error);
    }
  };

  const handleResultClick = (result: any) => {
    setSelectedLocation(result);
    setSearchTerm(result.formatted);
    setSearchResults([]);
  };

  const selectedLocationHandlers = async (location: any) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          location.lat
        )}+${encodeURIComponent(location.lng)}&key=${APIKEY}`
      );
      setSearchTerm(response.data.results[0].formatted);
      setSelectedLocation(response.data.results[0]);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const createAndSaveAddress = () => {
    createAddressHandler(selectedLocation);
  };

  return (
    <main>
      <div id="map" className="position-relative mt-4">
        <SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          searchResults={searchResults}
          handleResultClick={handleResultClick}
        />
        <Map
          isFullScreen={showMap}
          center={[
            selectedLocation.geometry?.lat || defaultLocation.geometry.lat,
            selectedLocation.geometry?.lng || defaultLocation.geometry.lng,
          ]}
          defaultGeometry={{
            lat: 33.6938882232111,
            lng: 73.0651304125786,
          }}
          zoom={17}
          selectedLocationHandler={selectedLocationHandlers}
        />
      </div>
      {selectedLocation !== defaultLocation && (
        <button
          className="btn btn-danger px-5"
          style={{
            marginTop: "1rem",
            float: "right",
          }}
          onClick={createAndSaveAddress}
        >
          Continue
        </button>
      )}
      {/* <BiFullscreen size="2rem" /> */}
    </main>
  );
};
export default AddLocation;
