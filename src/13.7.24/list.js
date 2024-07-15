export const Food=()=>{
    const Foodtwo =
    [
      {
        "id": 1,
        "name": "Classic Margherita Pizza",
        "ingredients": [
          "Pizza dough",
          "Tomato sauce",
          "Fresh mozzarella cheese",
         
        ],
        "instructions": [
          "Preheat the oven to 475°F (245°C).",
          "Roll out the pizza dough and spread tomato sauce evenly.",
          "Top with slices of fresh mozzarella and fresh basil leaves.",
         
        ],
        
        "tags": [
          "Pizza",
          "Italian"
        ],
        "userId": 166,
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "rating": 4.6,
        "reviewCount": 98,
        "mealType": [
          "Dinner"
        ]
      },
      {
        "id": 2,
        "name": "Vegetarian Stir-Fry",
        "ingredients": [
          "Tofu, cubed",
          "Broccoli florets",
          "Carrots, sliced",
          "Bell peppers, sliced",
         
        ],
        "instructions": [
          "In a wok, heat sesame oil over medium-high heat.",
          "Add minced ginger and garlic, sauté until fragrant.",
          "Add cubed tofu and stir-fry until golden brown.",
         
        ],
       
        "tags": [
          "Vegetarian",
          "Stir-fry",
          "Asian"
        ],
        "userId": 143,
        "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
        "rating": 4.7,
        "reviewCount": 26,
        "mealType": [
          "Lunch"
        ]
      },
      {
        "id": 3,
        "name": "Chocolate Chip Cookies",
        "ingredients": [
          "All-purpose flour",
          "Butter, softened",
          "Brown sugar",
          "White sugar",
          "Eggs",

        ],
        "instructions": [
          "Preheat the oven to 350°F (175°C).",
          "In a bowl, cream together softened butter, brown sugar, and white sugar.",
         
        ],
        
        "tags": [
          "Cookies",
          "Dessert",
          "Baking"
        ],
        "userId": 34,
        "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
        "rating": 4.9,
        "reviewCount": 13,
        "mealType": [
          "Snack",
          "Dessert"
        ]
      },
      {
        "id": 4,
        "name": "Chicken Alfredo Pasta",
        "ingredients": [
          "Fettuccine pasta",
          "Chicken breast, sliced",
          "Heavy cream",
          "Parmesan cheese, grated",
          
        ],
        "instructions": [
          "Cook fettuccine pasta according to package instructions.",
          "In a pan, sauté sliced chicken in butter until fully cooked.",
         
        ],
       
        "tags": [
          "Pasta",
          "Chicken"
        ],
        "userId": 136,
        "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
        "rating": 4.9,
        "reviewCount": 82,
        "mealType": [
          "Lunch",
          "Dinner"
        ]
      },
      {
        "id": 5,
        "name": "Mango Salsa Chicken",
        "ingredients": [
          "Chicken thighs",
          "Mango, diced",
          "Red onion, finely chopped",
          "Cilantro, chopped",
          "Lime juice",
         
        ],
        "instructions": [
          "Season chicken thighs with salt and pepper.",
          "Grill or bake chicken until fully cooked.",
          "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
         
        ],
       
        "tags": [
          "Chicken",
          "Salsa"
        ],
        "userId": 26,
        "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
        "rating": 4.9,
        "reviewCount": 63,
        "mealType": [
          "Dinner"
        ]
      },
      {
        "id": 6,
        "name": "Quinoa Salad with Avocado",
        "ingredients": [
          "Quinoa, cooked",
          "Avocado, diced",
          "Cherry tomatoes, halved",
          "Cucumber, diced",
          "Red bell pepper, diced",

        ],
        "instructions": [
          "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
         
        ],
       
        "tags": [
          "Salad",
          "Quinoa"
        ],
        "userId": 197,
        "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
        "rating": 4.4,
        "reviewCount": 59,
        "mealType": [
          "Lunch",
          "Side Dish"
        ]
      },
    ]
    return(
        <div className="cardsname2">
        {
        Foodtwo.map((eachfood)=>(
      
          <div  key={eachfood.name} className="imag2">
         
      <img src={eachfood.image} alt={eachfood.name} width={325} height={300} className="card-image"/>
      
            <p className="card-title2">ingredients={eachfood.ingredients}</p>
            <p className="card-price2">instructions= {eachfood.instructions}</p>
            <p className="card-category2">tags= {eachfood.tags}</p>
            <p className="card-category2">rating= {eachfood.rating}    
          </p>
          <p className="card-category2">reviewCount= {eachfood.reviewCount}</p>
      
      
      
            
      
      </div>
        ))
        }
          </div>
      
        
      
      )
      
      
       
    
}
