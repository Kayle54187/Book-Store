import { Router } from "express";
import BookController from "../controllers/book.controller";

class BookRoutes {
  router = Router();
  controller = new BookController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new Book
    this.router.post("/", this.controller.create);

    // Retrieve all Books
    this.router.get("/", this.controller.findAll);

    // Retrieve a single Book with id
    this.router.get("/:id", this.controller.findOne);

    // Update a Book with id
    this.router.put("/:id", this.controller.update);

    // Delete a Book with id
    this.router.delete("/:id", this.controller.delete);

    // Delete all Books
    this.router.delete("/", this.controller.deleteAll);
  }
}

export default new BookRoutes().router;
