import axios from "axios";

const API_KEY = process.env.API_KEY;

export const instance = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
  headers: {'x-api-key': API_KEY},
})