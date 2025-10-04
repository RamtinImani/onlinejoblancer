import http from "./httpService";

//! get categories option from server
export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
