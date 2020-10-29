const cityData = require('china-division/dist/cities.json');
const provinceData = require('china-division/dist/provinces.json');
const areaData = require('china-division/dist/areas.json');

function arrayToObject(array) {
  return array.reduce((carry, item) => {
    carry[item.code] =  {
      ...item,
    };

    return carry;
  }, {});
}

module.exports = {
  city: arrayToObject(cityData),
  province: arrayToObject(provinceData),
  area: arrayToObject(areaData),
}