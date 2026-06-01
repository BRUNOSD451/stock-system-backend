import express from "express";
import userRouter from "./routes/userRouter";

const app = express();

app.use(express.json());


app.use("/Users", userRouter);
app.use("/Users/:id" ,userRouter )
app.use("/Users/UserCreate", userRouter)
app.use("/Users/Delete/:id",userRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});