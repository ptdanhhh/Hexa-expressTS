import { Router } from "express";
// import { TopicHTTPController } from "./infras/controller";
// import { TopicInMemoryRepository } from "./infras/repository";
// import { TopicService } from "./service";

export function setupPostHTTPModule(): Router {
  // setup dependencies
  // const repository = new TopicInMemoryRepository();
  // // const cacheRepository = new CacheTopicRepository(repository);

  // const service = new TopicService(repository);
  const httpController = new TopicHTTPController(service);

  return httpController.getRoute();
}
