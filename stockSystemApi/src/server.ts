import express from "express";
import UserRouter from "./routes/userRoutes";
import CategoriesRouter from "./routes/categoriesRoutes";
import SupplierRouter from "./routes/suppliersRoutes";
import ProductsRouter from "./routes/productsRoutes";
import StockInputRouter from "./routes/stockInputRoutes";
import InputItemRouter from "./routes/inputItemRoutes";
import StockOutputRouter from "./routes/stockOutputRoutes";
import OutputItemRouter from "./routes/outputItemRoutes";
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

