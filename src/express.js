import express from "express"
import bodyParser from "body-parser";
import {tasks} from "./data.js"
const app = express();
// const port = 3000;
app.use(bodyParser.json());

app.get("/tasks", async(req, res)=> {
    res.json(tasks);
});

app.post("/tasks", async(req,res)=>{
    const data = req.body;

    console.log("Tasks data: ", data);

    tasks.push(data);

    res.json(data);
});

app.get("/tasks/:id", async(req, res)=>{
    const params = req.params;
    const id = params.id;
    console.log("Get tasks by id: ", id);
    const task = tasks.find((item) => item.id === id);

    res.json({
        task,
    });
});

app.delete("/tasks/:id", async(req,res)=>{
    const params = req.params;
    const id = params.id;
    console.log("Delete tasks by id: ", id);
    const tasks = tasks.filter((item) => item.id !== id);

    res.json({
        status:true,
    });
});
app.listen(3000, ()=>{
    console.log("ExpressJS Server is running on port 3000");
});


