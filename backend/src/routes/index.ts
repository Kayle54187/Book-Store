import { Application } from "express";
import homeRoutes from "./home.routes";
import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/v1/users", userRoutes);
    app.use("/api/v1/books", bookRoutes);
  }
}
