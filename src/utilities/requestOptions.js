export const searchByStateUrl =
  "https://api.documenu.com/v2/restaurants/search/fields?state=";
let requestHeader = new Headers();
requestHeader.append("x-api-key", "a04299b47166e37b5ddca7c872807ec0");
export const requestOptions = {
  method: "GET",
  headers: requestHeader,
};
