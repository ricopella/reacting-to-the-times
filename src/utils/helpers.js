import axios from "axios";

const helpers = {

    runQuery: (search) => {

        console.log(search);

        // Figure out the geolocation
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff5954" +
                "7cd47b931d8cbc56b:0:74623931&q=" + search;

        return axios
            .get(queryURL)
            .then((response) => {

                console.log(response);
                return response.data.results[0].formatted;
            });

    }
};

export default helpers;