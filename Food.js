class Food
{
    constructor(){
        this.foodStock = null
        this.lastFed = null
        this.image = loadImage("images/Milk.png")
    }

    display(){
        if(Dog.x > 745){
        image(image,500,500,50,50)
        }
    }

    getFoodStock(){
        var Food = database.ref('/');
        Food.on("value",(data)=>{
          Food = data.val();
        })
      }
    
      updateFood(Food){
        database.ref('/').update({
          Food: Food
        });
      }
}