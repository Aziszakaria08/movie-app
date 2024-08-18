const apiConfig = {
    //    cara memanggil .env
    api_key: import.meta.env.VITE_REACT_APP_APIKEY,
    baseImageUrl: import.meta.env.VITE_REACT_APP_BASEIMGURL,
    baseurl: import.meta.env.VITE_REACT_APP_BASEURL,
    token: import.meta.env.VITE_REACT_APP_TOKEN,
};

export default apiConfig;
