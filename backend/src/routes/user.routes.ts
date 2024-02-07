import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes {
  router = Router();
  controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Create a new User
    this.router.post("/sign-up", this.controller.create);

    // Login
    this.router.post("/login", this.controller.login);

    // Retrieve all Users
    this.router.get("/", this.controller.findAll);

    // Retrieve a single User with id
    this.router.get("/:id", this.controller.findOne);

    // Update a User with id
    this.router.put("/:id", this.controller.update);

    // Delete a User with id
    this.router.delete("/:id", this.controller.delete);

    // Delete all Users
    this.router.delete("/", this.controller.deleteAll);
  }
}

export default new UserRoutes().router;
