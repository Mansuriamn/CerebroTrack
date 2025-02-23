const express=require("express")
const cors=require("cors")
const path=require("path")
require('dotenv').config();


const app=express();
const _dirname=path.resolve();



app.use(express.json());
app.use(cors());
app.use(express.static(path.join(_dirname,"frontend/dist")))




app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


const PORT=process.env.PORT || 1000;

app.listen(PORT,()=>{
         console.log(`Server running at http://localhost:${PORT}`);
})