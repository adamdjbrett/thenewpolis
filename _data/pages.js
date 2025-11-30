import wordpressData from "./wordpress.js";
export default async function() {
    const data = await wordpressData();
    return data.pages || [];
};