import http from "./httpService";

//! get OTP from server and send it to the user phoneNumber(data)
export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
//! check OTP based on phoneNumber and OTP input value
export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
//! complete profile
export function completeProfile(data) {
  return http.post("/user/complete-profile", data).then(({ data }) => data.data);
}
//! get user profile data
export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
