import sanityClient from "./sanity/node_modules/@sanity/client"

const client = sanityClient({
    projectId:"sef5iisg",
    dataset: "production",
    useCdn:true,
    apiVersion: "2021-10-21"
});

export default client ;