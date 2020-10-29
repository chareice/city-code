# city-code
parse city code


## usage

```js
const cityCode = new CityCode(); 
cityCode.parse("361125");

expect(cityCode.getProvinceName()).toBe('江西省');
expect(cityCode.getCityName()).toBe('上饶市');
expect(cityCode.getAreaName()).toBe('横峰县');

cityCode.parse("440106");

expect(cityCode.getProvinceName()).toBe('广东省');
expect(cityCode.getCityName()).toBe('广州市');
expect(cityCode.getAreaName()).toBe('天河区');
```
