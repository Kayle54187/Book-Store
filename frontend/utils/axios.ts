import { userStore } from "@/store/users";
import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

const baseInstance = axios.create({
	baseURL: "http://localhost:3000",
});

function baseRequestInterceptor(config: InternalAxiosRequestConfig) {
	const token = localStorage.getItem("authorization");
	// const token = userStore((state) => state.token);

	config.headers["Accept-Language"] = localStorage.getItem("lang") ?? "en";
	if (!config.url?.includes("auth/login")) {
		config.headers["Authorization"] = token ? `Bearer ${token}` : undefined;
	}
	return config;
}
function baseRequestSuccessResponseInterceptor(response: AxiosResponse) {
	return response;
}

function baseRequestErrorResponseInterceptor(error: AxiosError) {
	const status = error.response?.status;
	const url = error.request.responseURL;

	const logOut = userStore((state) => state.logOut);
	if (status === 401) {
		console.log("401", url);
		// if this is not a login request
		logOut();
		if (!url?.includes("users/signin")) {
			localStorage.removeItem("authorization");
			// window.location.href = "/sign-in";
		}
	}
	return Promise.reject(error);
}

baseInstance.interceptors.request.use(baseRequestInterceptor);
baseInstance.interceptors.response.use(
	baseRequestSuccessResponseInterceptor,
	baseRequestErrorResponseInterceptor
);

export { baseInstance };
