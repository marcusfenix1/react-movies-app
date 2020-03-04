import queryString from "querystring";

export default function getQueryParams(string) {
  return queryString.parse(string);
}
