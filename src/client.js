// // Connecting with the sanity client

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// // To KEEP ALL OF THE DATA SAFE WE NEED TO CREATE A LOCAL ENV VAR RIGHT IN THE ROOT OF OUR FRONT-end REACT

// // whenever we are working with images in sanity we need to include this
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// // Done : Now we can use this sanity Client to fetch real data from the sanity dashboard
