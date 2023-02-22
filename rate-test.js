import uspsRates from "./rates/json/usps.json" assert { type: "json" };
import exampleCustomerRates from "./rates/json/example-customer.json" assert { type: "json" };

console.log(uspsRates["priority-cpp"]["4"]["6"] === 16.01);
console.log(uspsRates["fcps-cpp"]["13"]["8"] === 6.78);
console.log(exampleCustomerRates["parcel"]["13"]["8"] === 30.246);
console.log(exampleCustomerRates["small-parcel"]["4"]["6"] === 6.531);
