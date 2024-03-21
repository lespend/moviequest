import axios from "axios";

const API_KEY = process.env.API_KEY;

export const instance = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/',
  headers: {'x-api-key': API_KEY},
})