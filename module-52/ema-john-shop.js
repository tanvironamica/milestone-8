const pages = Math.ceil(count/10);
setPageCount(pages);
})
}, [])

// useEffect( () =>{
//     const storedCart = getStoredCart();
//     const savedCart = [];
//     for(const id in storedCart){
//         const addedProduct = products.find(product => product._id === id);
//         if(addedProduct){
//             const quantity = storedCart[id];
//             addedProduct.quantity = quantity;
//             savedCart.push(addedProduct);
//         }
//     }
//     setCart(savedCart);
// }, [products])