const weatherApiKey = "751df905239a68ec1a42a2efa599ebbf";
const newsApiKey = "0a222557032842f4a8818949bd5a6c0f";
const youtubeApi = "AIzaSyCIWHDUPz2FVufBz_NXByCTCXZ5XiJJOzg";

module.exports.topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&pageSize=8&apiKey=${newsApiKey}`;

module.exports.searchNewsUrl = term => {
    return `https://newsapi.org/v2/top-headlines?q=${term}&sortBy=publishedAt&pageSize=20&apiKey=${newsApiKey}`;
};

module.exports.generalNewsUrl = `https://newsapi.org/v2/top-headlines?category=politics&country=us&sortBy=relevancy&pageSize=40&apiKey=${newsApiKey}`;

module.exports.fashionNewsUrl = `https://newsapi.org/v2/top-headlines?category=entertainment&country=us&sortBy=relevancy&pageSize=40&apiKey=${newsApiKey}`;

module.exports.businessNewsUrl = `https://newsapi.org/v2/top-headlines?category=business&country=us&sortBy=relevancy&pageSize=40&apiKey=${newsApiKey}`;

module.exports.sportsNewsUrl = `https://newsapi.org/v2/top-headlines?category=sports&country=us&sortBy=relevancy&pageSize=40&apiKey=${newsApiKey}`;

module.exports.healthNewsUrl = `https://newsapi.org/v2/top-headlines?category=health&country=us&sortBy=relevancy&pageSize=40&apiKey=${newsApiKey}`;

module.exports.technologyNewsUrl = `https://newsapi.org/v2/top-headlines?sources=Engadget&pageSize=9&apiKey=${newsApiKey}`;

module.exports.weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=London&apikey=${weatherApiKey}`;

module.exports.youtubeTrendingUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=25&key=${youtubeApi}`;
