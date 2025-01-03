export async function getGoogleReviews() {
  if (!process.env.GOOGLE_PLACE_ID) {
    throw new Error("GOOGLE_PLACE_ID is not defined");
  }

  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY is not defined");
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews(author_name,profile_photo_url,rating,relative_time_description,text,time)&key=${process.env.GOOGLE_API_KEY}`
    );

    const data = await response.json();

    if (data.error_message) {
      console.error('Error fetching reviews:', data.error_message);
      return [];
    }

    if (data.result?.reviews) {
      return data.result.reviews;
    }

    return [];
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
}