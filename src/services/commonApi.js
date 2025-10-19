import axios from "axios";

// common API handler
const commonApi = async (method, url, reqBody) => {
  try {
    const response = await axios({
      method,
      url,
      data: reqBody,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default commonApi;
