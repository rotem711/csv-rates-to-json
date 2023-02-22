# csv-rates-to-json
Convert CSV Rate Charts to JSON

**Step 1**

Create a Node.js command line script that turns CSVs into JSON objects.

- The script will read a directory, "rates/csvs" that will have N number of CSV files
- The script will output .json files to "rates/json"
- You should be able to run the script via the NPM command line, "npm run update-rates"
- The script will read N number of CSV files and create N number of JSON files (though based on specs below, there will almost always be less JSON files than CSV files, because 2 CSVs can become 1 JSON file)
- Any time the script is run, it should rewrite every file in the JSON directory

The CSV file naming convention will be as follows:

- company-name_parcel.csv
- company-name_small-parcel.csv

The characters preceding the _ in the CSV are the company name. The characters after the _ are the shipping service.

The above exmample would be merged into 1 json file.

- Anything before the _ in the CSV file name is the name of the JSON file
- Anything after the _ in the CSV file name will be a top level property name in the JSON structure.

For example:

`company-name.json`

```
{
  "parcel": {...},
  "small-parcel: {...}
}
```

The CSVs represent shipping rates, with column "A" representing the weight of a shipment, and columns B, C, D, etc. representing the zone of a shipment. 

You can see an example of the example CSVs attached.

A shipment rate can be looked up as follows:

```
companyJSON[service][zone][weight]
```

See the examples below.

CSVs:

```
usps_fcps-cpp.csv
usps_priority-cpp.csv
example-customer_parcel.csv
example-customer_small-parcel.csv
```

`usps.json`

```
{
  "fcps-cpp": {
    "1": {
      "1": 3.59,
      "2": 3.64,
      "3": 3.66,
      "4": 3.75
    },
    "2": {
      "1": 3.59
    }
  },
  "priority-cpp": {
    "1": {
      "1": 7.64,
      "2": 7.78
    }
  }
}
```

`example-customer.json`

```
{
 "parcel": {
    "1": {
      "1": 5.913,
      "2": 9.537
    }
  },
  "small-parcel": {
    "1": {
      "1": 5.913,
      "2": 5.913,
      "3": 5.934,
      "4": 5.934
    },
    "2": {
      "1": 5.913
    }
  }
}
```

**Step 2**
- Create a new js file and name it `rate-test.js`
- This script should be run by `npm run rate-test`
- It should only work once the JSON files have been generated
- In this new file, import the newly created JSON files. The following expressions should return TRUE

NOTE: Below is just Sudo Code. 

```
 const uspsRates = require(rates/json/usps.json)
 const exampleCustomerRates = require(rates/json/example-customer.json)
 
 console.log(uspsRates["priority-cpp"]["4"]["6"] === 16.01)
 console.log(uspsRates["fcps-cpp"]["13"]["8"] === 6.78)
 console.log(exampleCustomerRates["parcel"]["13"]["8"] === 30.246)
 console.log(exampleCustomerRates["small-parcel"]["4"]["6"] === 6.531)

```

**Step 3**
- The deliverable is a functioning NodeJS script. I'm using Node v 17.0.1
- Use Import, Export, etc. rather than require. I typically set this up with babel. 
- Use TypeScript only if you really feel you need to. I understand its better, but I don't fully understand TypeScript and I'll be merging this into another codebase and I want to be able to do so easily



