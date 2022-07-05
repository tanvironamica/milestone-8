// use local storage to manage cart data
const addToDb = id =>{
    // let shoppingCart = {};
    let shoppingCart;




    // const quantity = localStorage.getItem(id);

    // get the shopping cart
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
    shoppingCart = JSON.parse(storedCart);
}
else{
    shoppingCart = {};
}


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        
        // const newQuantity = parseInt(quantity) + 1;
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
       shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
}

export {addToDb}