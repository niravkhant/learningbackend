import app from "../app.js";

const homepageRoute = app.get("/", (req, res)=>{
    res.send("<h1>Server running.... and this is homepage of server </h1>")
})

export {homepageRoute};