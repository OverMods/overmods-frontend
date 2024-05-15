import axios from "axios";

export const BASE_PATH = "http://192.168.100.4:31337";
export const API_PATH = `${BASE_PATH}/api`
export const UPLOAD_PATH = `${BASE_PATH}/data`;

export const HTTP = axios.create({
   baseURL: API_PATH
});

export function getUploadUrl(filename) {
   return `${UPLOAD_PATH}/${filename}`;
}