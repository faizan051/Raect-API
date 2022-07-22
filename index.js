const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./route/user");
const authRoute = require("./route/auth");
const productRoute = require("./route/prodcut");
const cartRoute = require("./route/cart");
const orderRoute = require("./route/order");
const stripeRoute = require("./route/stripe");
const cors = require("cors")


dotenv.config();

mongoose.connect(process.env.URL_MONGO).then(()=>console.log("DB Connection Sucess")).catch((error)=>{
    console.log(error)
});


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute );
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);





app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running")
})











