import http from "./httpService";

//! get OTP from server and send it to the user phoneNumber(data)
export function getOtp(data) {
  return http.post("/user/get-otp", data);
}

//! check OTP based on phoneNumber and OTP input value
export function checkOtp(data) {
  return http.post("/user/check-otp", data);
}
