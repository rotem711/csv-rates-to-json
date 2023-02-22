# csv-rates-to-json
Convert CSV Rate Charts to JSON

I need help creating a Node.js command line script that turns CSVs into JSON objects.

- The script will read a directory, "rates/csvs" that will have N number of csv files
- The script will output .json files to "rates/json"
- You should be able to run the script via the NPM command line, "npm run update-rates"
- The script will read N number of csv files and create N number of JSON files (though based on specs below, there will almost always be less JSON files than CSV because 2 csvs can become 1 JSON file)

The csv file naming convention will be as follows:

- company-name_parcel.csv
- company-name_small-parcel.csv

The above exmample would be merged into 1 json file, ex:

`company-name.json`

```
{
  "parcel": {...},
  "small-parcel: {...}
}
```

You can see an example of the example csvs attached. The csvs represent shipping rates, with "A" column representing the weight of a shipment, and columns B, C, D, etc. representing the Zone of a shipment.

Anything before the _ in the csv file name is the name of the json file
Anything after the _ in the csv file name will be a top level property name in the json structure.

See the examples below.

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
  },
  "parcel": {
    "1": {
      "1": 5.913,
      "2": 9.537
    }
  }
}
```

