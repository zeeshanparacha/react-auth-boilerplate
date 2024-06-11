import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000",
});

const validateToken = async (token) => {
    try {
        const response = await axios.post("/validate-token", { token });
        return response.data.valid;
    } catch (error) {
        return false;
    }
};

// List of routes that don't require token validation
const excludedRoutes = ['/sign-in', '/sign-up'];

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");

        if (excludedRoutes.some(route => config.url.includes(route))) {
            return config;
        }

        if (token) {
            const isValidToken = await validateToken(token);
            if (isValidToken) {
                config.headers["Authorization"] = `Bearer ${token}`;
            } else {
                alert("Token validation failed, Please login again.");
                window.location.href = "/";
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
