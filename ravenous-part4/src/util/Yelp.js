// Client ID
// yS2uDryu4FQ2RLXGi3zbyg
// API Key
// SKBGUMVWMCur3lZRP4RQXRNm241jgjghoZfvbsA0jgC4HqXVuBYT7tUpGaWS5I0egQo0mZje-Psv6HHzkpdeY0ILsoEjTCli-V5YbTODLaNg89C7TTwtwk_mNespX3Yx

const apiKey = "SKBGUMVWMCur3lZRP4RQXRNm241jgjghoZfvbsA0jgC4HqXVuBYT7tUpGaWS5I0egQo0mZje-Psv6HHzkpdeY0ILsoEjTCli-V5YbTODLaNg89C7TTwtwk_mNespX3Yx"

let Yelp = {
    search: function (term, location, sortBy) {
        let endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        return fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Request failed!')
        }, networkError => {
            console.log(networkError.message)
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                // see https://www.yelp.com/developers/documentation/v3/business_search
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp