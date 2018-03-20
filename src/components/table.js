import React from 'react';

const JsonTable = require('ts-react-json-table');


var items = [
    {"id": 75950,"name": "Louella Wallace","age": 24,"phone": "+44 (0)203 437 7302","color": "green"},
    {"id": 80616,"name": "Hanson Perry","age": 36,"phone": "+44 (0)203 279 3708","color": "brown"},
    {"id": 77621,"name": "Brandi Long","age": 20,"phone": "+44 (0)203 319 4880","color": "pink"},
    {"id": 81299,"name": "Tonia Sykes","age": 38,"phone": "+44 (0)208 328 3671","color": "blue"},
    {"id": 14225,"name": "Leach Durham","age": 23,"phone": "+44 (0)208 280 9572","color": "green"}
  ];
  
  var data1 = [
    {
      "component": {
        "id": 428437,
        "name": "API Integration",
        "handle": null,
        "pricing_scheme": null,
        "unit_name": "on/off",
        "unit_price": "49.0",
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "on_off_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business #type=apiintegration",
        "default_price_point_id": 151773,
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428437/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428438,
        "name": "Campaigns",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "campaign",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "Campaigns #product=business #type=campaign",
        "default_price_point_id": 151774,
        "prices": [
          {
            "id": 682214,
            "component_id": 428438,
            "starting_quantity": 1,
            "ending_quantity": 4,
            "unit_price": "0.0",
            "price_point_id": 151774,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682215,
            "component_id": 428438,
            "starting_quantity": 5,
            "ending_quantity": null,
            "unit_price": "15.0",
            "price_point_id": 151774,
            "formatted_unit_price": "€15.00"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428438/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428439,
        "name": "Clicks",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "click",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "clicks #product=business #type=click ",
        "default_price_point_id": 151775,
        "prices": [
          {
            "id": 682216,
            "component_id": 428439,
            "starting_quantity": 1,
            "ending_quantity": 5000,
            "unit_price": "0.0",
            "price_point_id": 151775,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682217,
            "component_id": 428439,
            "starting_quantity": 5001,
            "ending_quantity": null,
            "unit_price": "0.015",
            "price_point_id": 151775,
            "formatted_unit_price": "€0.015"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428439/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428452,
        "name": "CRM Contacts",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "contact",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "quantity_based_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business",
        "default_price_point_id": 151788,
        "prices": [
          {
            "id": 682237,
            "component_id": 428452,
            "starting_quantity": 1,
            "ending_quantity": 5000,
            "unit_price": "0.0",
            "price_point_id": 151788,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682238,
            "component_id": 428452,
            "starting_quantity": 5001,
            "ending_quantity": null,
            "unit_price": "0.01",
            "price_point_id": 151788,
            "formatted_unit_price": "€0.01"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428452/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428441,
        "name": "Email",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "email",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "Email #product=business #type=email",
        "default_price_point_id": 151777,
        "prices": [
          {
            "id": 682220,
            "component_id": 428441,
            "starting_quantity": 1,
            "ending_quantity": 5000,
            "unit_price": "0.0",
            "price_point_id": 151777,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682221,
            "component_id": 428441,
            "starting_quantity": 5001,
            "ending_quantity": null,
            "unit_price": "0.004",
            "price_point_id": 151777,
            "formatted_unit_price": "€0.004"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428441/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428442,
        "name": "Facebook",
        "handle": null,
        "pricing_scheme": "per_unit",
        "unit_name": "facebook",
        "unit_price": "0.0",
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business",
        "default_price_point_id": 151778,
        "prices": [
          {
            "id": 682222,
            "component_id": 428442,
            "starting_quantity": 1,
            "ending_quantity": null,
            "unit_price": "0.0",
            "price_point_id": 151778,
            "formatted_unit_price": "€0.00"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428442/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428443,
        "name": "International SMS",
        "handle": null,
        "pricing_scheme": "per_unit",
        "unit_name": "international sms",
        "unit_price": "0.1",
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "Int'l SMS #product=business #type=sms",
        "default_price_point_id": 151779,
        "prices": [
          {
            "id": 682223,
            "component_id": 428443,
            "starting_quantity": 1,
            "ending_quantity": null,
            "unit_price": "0.1",
            "price_point_id": 151779,
            "formatted_unit_price": "€0.10"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428443/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428444,
        "name": "LinkedIn",
        "handle": null,
        "pricing_scheme": "per_unit",
        "unit_name": "linkedin",
        "unit_price": "0.0",
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business",
        "default_price_point_id": 151780,
        "prices": [
          {
            "id": 682224,
            "component_id": 428444,
            "starting_quantity": 1,
            "ending_quantity": null,
            "unit_price": "0.0",
            "price_point_id": 151780,
            "formatted_unit_price": "€0.00"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428444/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428447,
        "name": "Local SMS",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "local sms",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "Local SMS #product=business #type=sms ",
        "default_price_point_id": 151783,
        "prices": [
          {
            "id": 682229,
            "component_id": 428447,
            "starting_quantity": 1,
            "ending_quantity": 100,
            "unit_price": "0.0",
            "price_point_id": 151783,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682230,
            "component_id": 428447,
            "starting_quantity": 101,
            "ending_quantity": null,
            "unit_price": "0.1",
            "price_point_id": 151783,
            "formatted_unit_price": "€0.10"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428447/price_points",
        "tax_code": ""
      }
    },
    {
      "component": {
        "id": 428445,
        "name": "Mobile Notifications",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "mobile notification",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "Mobile Notifications #product=business #type=mobilenotification",
        "default_price_point_id": 151781,
        "prices": [
          {
            "id": 682225,
            "component_id": 428445,
            "starting_quantity": 1,
            "ending_quantity": 100,
            "unit_price": "0.0",
            "price_point_id": 151781,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682226,
            "component_id": 428445,
            "starting_quantity": 101,
            "ending_quantity": null,
            "unit_price": "0.03",
            "price_point_id": 151781,
            "formatted_unit_price": "€0.03"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428445/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428446,
        "name": "Mobile Notifications (demo)",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "demo mobile notification",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "Mobile Notifications (demo) #product=business #type=mobilenotificationdemo",
        "default_price_point_id": 151782,
        "prices": [
          {
            "id": 682227,
            "component_id": 428446,
            "starting_quantity": 1,
            "ending_quantity": 20,
            "unit_price": "0.0",
            "price_point_id": 151782,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682228,
            "component_id": 428446,
            "starting_quantity": 21,
            "ending_quantity": null,
            "unit_price": "0.03",
            "price_point_id": 151782,
            "formatted_unit_price": "€0.03"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428446/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428448,
        "name": "QR Codes",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "qrcode",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "QR-Codes #product=business #type=qrcode",
        "default_price_point_id": 151784,
        "prices": [
          {
            "id": 682231,
            "component_id": 428448,
            "starting_quantity": 1,
            "ending_quantity": 2,
            "unit_price": "0.0",
            "price_point_id": 151784,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682232,
            "component_id": 428448,
            "starting_quantity": 3,
            "ending_quantity": null,
            "unit_price": "1.0",
            "price_point_id": 151784,
            "formatted_unit_price": "€1.00"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428448/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428449,
        "name": "SMS unique url",
        "handle": null,
        "pricing_scheme": "tiered",
        "unit_name": "unique url",
        "unit_price": null,
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business #type=uniqueurl",
        "default_price_point_id": 151785,
        "prices": [
          {
            "id": 682233,
            "component_id": 428449,
            "starting_quantity": 1,
            "ending_quantity": 100,
            "unit_price": "0.0",
            "price_point_id": 151785,
            "formatted_unit_price": "€0.00"
          },
          {
            "id": 682234,
            "component_id": 428449,
            "starting_quantity": 101,
            "ending_quantity": null,
            "unit_price": "0.02",
            "price_point_id": 151785,
            "formatted_unit_price": "€0.02"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428449/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428450,
        "name": "Twitter",
        "handle": null,
        "pricing_scheme": "per_unit",
        "unit_name": "tweet",
        "unit_price": "0.0",
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "metered_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business #type=twitter",
        "default_price_point_id": 151786,
        "prices": [
          {
            "id": 682235,
            "component_id": 428450,
            "starting_quantity": 1,
            "ending_quantity": null,
            "unit_price": "0.0",
            "price_point_id": 151786,
            "formatted_unit_price": "€0.00"
          }
        ],
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428450/price_points",
        "tax_code": null
      }
    },
    {
      "component": {
        "id": 428451,
        "name": "Unique IP Address",
        "handle": null,
        "pricing_scheme": null,
        "unit_name": "on/off",
        "unit_price": "45.0",
        "product_family_id": 1027457,
        "price_per_unit_in_cents": null,
        "kind": "on_off_component",
        "archived": false,
        "taxable": false,
        "description": "#product=business\n#type=uniqueip\n",
        "default_price_point_id": 151787,
        "price_point_count": 1,
        "price_points_url": "https://non-eu-europe.chargify.com/components/428451/price_points",
        "tax_code": null
      }
    }
  ];
  
  var columns = [
      'component.name',
      'component.id',
      {key: 'age', label: 'Age'},
      {key: 'phone', label: 'Phone'},
      {key: 'color', label: 'Colourful', cell: function( row, columnKey ){
          return <span style={{color: row.color}}>{row.color}</span>;
      }}
  ];
  
  var data = "{}";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://non-eu-europe.chargify.com/product_families/1027458/components.json");
  xhr.setRequestHeader("authorization", "Basic WjdkYk03eVlxa3lZWHhUMEYyMHFXQ2VXQzZNQ2Zma1Q0SEFkelJYdEU6");

  xhr.send(data);

  function render() {
    return <JsonTable className="table table-striped" rows = {data1} columns={columns} / >
  }  


  export default function(props) {
    return render.apply({props: props});
}