import { ENV } from "@/utils/env";
import axios from "axios";

const host = ENV.NEXT_PUBLIC_API_HOST;

export function getArticleList(params) {
  return axios.get(`${host}articles`, { params });
}
