export const searchByStateUrl =
  "https://api.documenu.com/v2/restaurants/search/fields?exact=true&state=";
export const searchByNameUrl =
  "https://api.documenu.com/v2/restaurants/search/fields?exact=true&restaurant_name=";
export const searchByIdUrl = "https://api.documenu.com/v2/restaurant/";
let requestHeader = new Headers();
requestHeader.append("x-api-key", "a04299b47166e37b5ddca7c872807ec0");
export const requestOptions = {
  method: "GET",
  headers: requestHeader,
};
