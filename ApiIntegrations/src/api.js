import axios from "axios";

export async function fetchUnsplashData(value) {
  const url = "https://api.unsplash.com/search/photos";

  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID m-5rQps33ub2hBln-7lTRJJNP4eaICVe_iHd6AMRsag",
    },
    params: { query: value },
  });

  return response.data.results
}
