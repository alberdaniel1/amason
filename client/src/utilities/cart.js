export const addToCart = async (product) => {
    // Add thing to check for user log in and store for them in db
    if (localStorage.getItem('cart') == null) {
        const cart = [{
            id: product,
            qty: 1
        }]
        localStorage.setItem('cart', JSON.stringify(cart))
        return console.log('this works')
    } else {
        const cart = await JSON.parse(localStorage.getItem('cart'))

        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === product) {
                cart[i].qty += 1;
                return localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
        const addItem = {
            id: product,
            qty: 1
        }
        cart.push(addItem)
        return localStorage.setItem('cart', JSON.stringify(cart))
         
    }
    console.log('potato')
};
export const removeFromCart = (product) => {

};
export const seeCart = () => {
    if (localStorage.getItem('cart') == null){
        return
    }
    return localStorage.getItem('cart')
};

// export default { addToCart, removeFromCart, seeCart}