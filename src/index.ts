import express, { Request, Response } from "express";
import { setupPostHTTPModule } from "modules/posts/module";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/v1", setupPostHTTPModule());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
