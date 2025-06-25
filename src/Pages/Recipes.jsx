import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import RecipesHero from '../Components/RecipesHero/RecipesHero.jsx'
import RecipesCarousel from '../Components/RecipesCarousel/RecipesCarousel.jsx'
import RecipeDetail from '../Components/RecipeDetail/RecipeDetail.jsx'
import FAQSection from '../Components/FAQSection/FAQSection.jsx'
import { useState } from 'react'
const Recipes = () => {

  
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <div>
      <Navbar/>
      
      <RecipesHero />
      <RecipesCarousel onSelect={setSelectedRecipe} />
      <RecipeDetail recipe={selectedRecipe} />
      <FAQSection />
    
      <Footer/>
    </div>
  )
}

export default Recipes
