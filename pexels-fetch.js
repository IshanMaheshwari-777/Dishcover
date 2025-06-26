import axios from "axios";
import fs from "fs";

const API_KEY = "867N761Lk24wnUJNYjviNy8brkW4C7dlwTfLIu26VwoC2YmGa4CJPBLA";
const queries = [
    "Palak Paneer", "Chole Bhature", "Vegetable Pulao", "Paneer Butter Masala",
    "Aloo Gobi", "Veg Biryani", "Rajma Chawal", "Kadhi Pakora", "Baingan Bharta",
    "Matar Paneer", "Stuffed Capsicum", "Dal Tadka", "Mix Veg Curry", "Vegetable Korma",
    "Masala Dosa", "Idli Sambar", "Pav Bhaji", "Dhokla", "Sev Tamatar", "Tandoori Mushroom",
    "Veg Frankie", "Rava Upma", "Kathi Roll", "Corn Chaat", "Tandoori Aloo", "Butter Chicken",
    "Chicken Biryani", "Grilled Fish Tikka", "Egg Curry", "Tandoori Chicken", "Fish Curry",
    "Chicken Korma", "Egg Biryani", "Prawn Masala", "Chicken 65", "Fish Fry", "Keema Matar",
    "Chicken Tikka", "Egg Bhurji", "Prawn Biryani", "Chicken Shawarma", "Tuna Sandwich",
    "Crab Curry", "Chicken Pakora", "Fish Pulusu", "Egg Roll", "Chicken Noodles", "Fish Moilee",
    "Omelette Curry", "Chicken Soup", "Spaghetti Aglio e Olio", "Chickpea Salad Bowl", "Paneer Tikka Wrap"
  ];

const fetchImage = async (query) => {
  try {
    const response = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const photos = response.data.photos;
    return photos.length > 0 ? photos[0].src.medium : "https://via.placeholder.com/600?text=No+Image";
  } catch (error) {
    console.error(`Error fetching image for ${query}:`, error.message);
    return "https://via.placeholder.com/600?text=No+Image";
  }
};

const main = async () => {
  const results = [];
  for (const query of queries) {
    const url = await fetchImage(query);
    results.push({ title: query, image: url });
    console.log(`${query} → ${url}`);
  }

  fs.writeFileSync("output.json", JSON.stringify(results, null, 2));
};

main();
