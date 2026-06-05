import express from "express";
import UserRouter from "./routes/userRouter";
import CategoriesRouter from "./routes/categoriesRouter";
import SupplierRouter from "./routes/suppliersRouter";
import ProductsRouter from "./routes/productsRoutes";
import StockInputRouter from "./routes/stockInputRouter";
import InputItemRouter from "./routes/inputItemRouter";
import StockOutputRouter from "./routes/stockOutputRouter";
import OutputItemRouter from "./routes/outputItemRouter";
const app = express();

app.use(express.json());

app.use("/categories",CategoriesRouter)

app.use("/users", UserRouter);

app.use("/suppliers",SupplierRouter)

app.use("/products",ProductsRouter)

app.use("/stockInputs",StockInputRouter)

app.use("/inputItems",InputItemRouter)

app.use("/stockOutputs",StockOutputRouter)

app.use("/outputItems",OutputItemRouter)

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

