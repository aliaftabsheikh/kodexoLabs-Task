import Card from 'components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './Home.scss';
import data from 'dummy-data';

// var username = '';
//     var password = '000000'

//     const token = `${username}:${password}`;
//     // const encodedToken = Buffer.from(token).toString('base64');
//     const session_url = 'https://api.simplyrets.com/properties';

const API_URL = `https://api.simplyrets.com/properties`;

const username = 'simplyrets';
const password = 'simplyrets';

// axios.interceptors.request.use(
//   config=>{
//     config.headers.authorization = `${username}:${password}`;
//     return config;
//   },
//   error =>{
//     return Promise.reject(error)
//   }
// )

const Home = () => {
  const [results, setResults] = useState([]);

  const homeDetails = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Accept: '*/*',
          // 'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
          Authorization: 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz',
        },
      });
      const data = await response.data;
      setResults(data);
      console.log(data);

      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };
  //   "Accept": "*/*",
  //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //   "Authorization": "Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz"
  //  }

  //  let reqOptions = {
  //    url: "https://api.simplyrets.com/properties",
  //    method: "GET",
  //    headers: headersList,
  //  }

  //  axios.request(reqOptions).then(function (response) {
  //    console.log(response.data);
  //  })

  useEffect(() => {
    homeDetails()
  }, []);


  const prop1 = {
    "privateRemarks": "This property is a trial property to test the SimplyRETS. Private agent remarks will be included in this field for use in the SimplyRETS REST API. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "showingContactName": null,
    "property": {
        "roof": "Tile",
        "cooling": null,
        "style": "Traditional",
        "area": 1043,
        "bathsFull": 5,
        "bathsHalf": 6,
        "stories": 3,
        "fireplaces": 1,
        "flooring": null,
        "heating": "Radiant Heat",
        "bathrooms": null,
        "foundation": "Slab",
        "laundryFeatures": "Area,Electric Dryer Hookup,Individual Room,Washer Hookup",
        "occupantName": null,
        "ownerName": null,
        "lotDescription": "Private Backyard",
        "pool": "Association,Private,In Ground",
        "subType": null,
        "bedrooms": 2,
        "interiorFeatures": "Drapes/Curtains/Window Cover, Fire/Smoke Alarm, High Ceiling, Island Kitchen",
        "lotSize": "127X146",
        "areaSource": "Floorplans",
        "maintenanceExpense": null,
        "additionalRooms": "Recreation,Master Bedroom,See Remarks",
        "exteriorFeatures": "Back Yard Fenced, Covered Patio/Deck, Patio/Deck",
        "water": null,
        "view": "Golf Course",
        "lotSizeArea": null,
        "subdivision": "Waterstone Springs",
        "construction": "In Kitchen,Stackable,Washer Included",
        "parking": {
            "leased": null,
            "spaces": 6,
            "description": "Garage Door Opener,Public,Garage,Side by Side"
        },
        "lotSizeAreaUnits": null,
        "type": "RES",
        "garageSpaces": 8.74556425245327,
        "bathsThreeQuarter": null,
        "accessibility": "Manned Gate",
        "acres": null,
        "occupantType": null,
        "subTypeText": null,
        "yearBuilt": 1998
    },
    "mlsId": 1005192,
    "showingContactPhone": null,
    "terms": "Conventional",
    "showingInstructions": "The showing instructions for this trial property are brought to you by the SimplyRETS team. This field will include any showing remarks for the given listing in your RETS feed. Enjoy!",
    "office": {
        "contact": {
            "email": "info-office@example.com",
            "office": "(582) 242-9591",
            "cell": null
        },
        "name": null,
        "servingName": null,
        "brokerid": null
    },
    "leaseTerm": null,
    "disclaimer": "This information is believed to be accurate, but without warranty.",
    "specialListingConditions": null,
    "originalListPrice": null,
    "address": {
        "crossStreet": "Dunne Ave",
        "state": "Texas",
        "country": "United States",
        "postalCode": "77096",
        "streetName": "East Sweet Bottom Br",
        "streetNumberText": "74434",
        "city": "Houston",
        "streetNumber": 74434,
        "full": "74434 East Sweet Bottom Br #18393",
        "unit": "18393"
    },
    "agreement": "Purchaser Exemptions",
    "listDate": "2011-05-23T18:50:30.184391Z",
    "agent": {
        "officeMlsId": null,
        "lastName": "Phelps",
        "contact": {
            "email": "agent@example.com",
            "office": "(825) 907-4024",
            "cell": null
        },
        "address": null,
        "modified": null,
        "firstName": "Shoshana",
        "id": "sphelps"
    },
    "modified": "2015-11-14T17:57:26.262392Z",
    "school": {
        "middleSchool": "FALCON PASS",
        "highSchool": "Cy Creek",
        "elementarySchool": "HAYES",
        "district": null
    },
    "photos": [
        "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg",
        "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg"
    ],
    "listPrice": 20714261,
    "internetAddressDisplay": null,
    "listingId": "49699701",
    "mls": {
        "status": "Active",
        "area": "Spring/Klein",
        "daysOnMarket": 862,
        "originalEntryTimestamp": null,
        "originatingSystemName": null,
        "statusText": "½~Yi",
        "areaMinor": null
    },
    "internetEntireListingDisplay": null,
    "geo": {
        "county": "North",
        "lat": 29.689418,
        "lng": -95.474464,
        "marketArea": "Spring/Klein",
        "directions": "From 290 exit Barker Cypress to left on Tuckerton, right on Danbury Bridge, right on Bending Post, right on Driftwood Prairie"
    },
    "tax": {
        "taxYear": 1981,
        "taxAnnualAmount": 3180,
        "id": "593-723-781-8056"
    },
    "coAgent": {
        "officeMlsId": null,
        "lastName": null,
        "contact": {
            "email": "coagent@example.com",
            "office": "(556) 750-9377",
            "cell": null
        },
        "address": null,
        "modified": null,
        "firstName": null,
        "id": "ACME12"
    },
    "sales": {
        "closeDate": "1996-10-21T15:15:54.171139Z",
        "office": {
            "contact": null,
            "name": "Acme Brokerage",
            "servingName": "Acme Brokerage",
            "brokerid": "ACME12"
        },
        "closePrice": 17946033,
        "agent": {
            "officeMlsId": "ACME12",
            "lastName": "Long",
            "contact": null,
            "address": null,
            "modified": null,
            "firstName": "Buffy",
            "id": "blong"
        },
        "contractDate": null
    },
    "ownership": null,
    "leaseType": "FullServ",
    "virtualTourUrl": null,
    "remarks": "This property is a trial property to test the SimplyRETS. This field will include remarks or descriptions from your RETS feed intended for public view. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "association": {
        "frequency": null,
        "fee": 1000,
        "name": "SimplyRETS Home Owners Association",
        "amenities": "Club House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub"
    },
}

  return (
    <div className="check">
    {/* //   <div className="check1">
    //   <h1>{prop1.property.bedrooms}</h1>
    //   <p>{prop1.property.bathsFull}</p>|<p>{ prop1.property.bathsHalf}</p>
    //   <p>{prop1.property.area}</p>
    //   <h2>{prop1.listPrice}</h2>
    //   <h1>{prop1.address.streetName}</h1>
    //   <p>{prop1.listDate.slice(0,10)}</p>
    //   <p>{prop1.mlsId}</p>
    //   <img src={prop1.photos[0]} alt="" />
      
    //   </div> */}
      {/* <Card prop={prop1}/>
      <Card prop={prop1}/>
      <Card prop={prop1}/> */}
      {results.map((data)=>(
        <Card key={data.mlsId} prop={data}/>
      ))}
    </div>
  );
};

export default Home;
