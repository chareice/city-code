const data = require("./data");

class CityCode {
  code;
  cityCode;
  provinceCode;

  parse(code) {
    if (code.length !== 6) {
      throw Error("无效的区域代码")
    }

    this.code = code;

    this.provinceCode = code.substring(0, 2);
    this.cityCode = code.substring(0, 4);
  }

  getProvinceName() {
    return data.province[this.provinceCode]['name'];
  }

  getCityName() {
    return data.city[this.cityCode]['name'];
  }

  getAreaName() {
    return data.area[this.code]['name'];
  }

  getFullName() {
    return `${this.getProvinceName()}${this.getCityName()}${this.getAreaName()}`;
  }
}

module.exports = CityCode;