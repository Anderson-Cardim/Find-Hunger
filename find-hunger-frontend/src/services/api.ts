import axios from "axios";

export const baseURL = "http://localhost:3000";

export const api = axios.create({
	baseURL: baseURL,
	headers: { "Content-Type": "application/json" },
});
