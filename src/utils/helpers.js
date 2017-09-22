import axios from "axios";

const helpers = {

    runQuery: (search) => {
        // Figure out the geolocation
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3a19633d5de74f6" +
                "d88ecfd10d844e151&q=" + search;

        return axios.get(queryURL)

    },
    saveArticle: (articleData) => {
        console.log("saving?");
        return axios.post("/api/saved", articleData);
    }
};

export default helpers;