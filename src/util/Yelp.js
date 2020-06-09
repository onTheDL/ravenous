


/*

Client ID:  8ZVwtVTwQ4dgBUaY8ixw7A

API Key:
8KI5nwqH9CNpHiPA6gjnxgIwEdMWHGj7RHIlUsvWVQ8mObV1Ukb9nJP1zgsBSjqZDAJz-aOBoK-Uw_ISpXx8RkbFlEEJiWO68_GNw2TmSMO1SfHdU0b47BmmYgnDXnYx

*/

const apiKey = '8KI5nwqH9CNpHiPA6gjnxgIwEdMWHGj7RHIlUsvWVQ8mObV1Ukb9nJP1zgsBSjqZDAJz-aOBoK-Uw_ISpXx8RkbFlEEJiWO68_GNw2TmSMO1SfHdU0b47BmmYgnDXnYx';

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,

      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
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
        
        });
      }
      throw new Error('Request failed');
    })
  }
};

