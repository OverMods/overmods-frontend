import axios from "axios";

export const API_PATH = "http://localhost/overmods";
export const UPLOAD_DIR = "overmods-data";

export const HTTP = axios.create({
   baseURL: API_PATH
});

export function getUploadUrl(filename) {
   return `${API_PATH}/${UPLOAD_DIR}/${filename}`;
}