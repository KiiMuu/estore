// * `forEach` instead of `map` as I don't care about returned value
cart.forEach((product, i) => {
    if (product._id === c._id) {
        cart[i].color = val;
    }
});

// * for performance of array, you have to set before your loop
let i = 0;
let cartLength = cart.length;
for (; i < cartLength; i++) {
    // 
}

// * at least {} in put request
const { data } = await axios.put('/api/user/cart', {}, config);

// * use routes
// ? => instead of get & use routes one by one
fs.readdirSync('./routes').map(route => {
    // ! didn't work, as app.use don't accept a promise
    // app.use('/api', import(`./routes/${route}`));
    // * THIS WORKS!!
    import(`./routes/${route}`).then(r => {
        app.use('/api', r.default);
    });
});



// app road
// * user authentication with firebase
// * send emails to complete registeration and reset password
// * custom react hooks
// * Redux / Redux-thunk - actions, reducers and constants
// * Categories CRUD
// * Sub-categoires CRUD
// * Used 3rd party image optimizer to host products images -> Cloudinary
// * Products CRUD
// * Custimoized Rating system with Stars and Description
// * Comprehensive filering system for products by Price, Categories, Rating, Sub Categories
// * Brand, Color and more
// * Wishlist
// * Payment process with Stripe
// * Cash On Delivery