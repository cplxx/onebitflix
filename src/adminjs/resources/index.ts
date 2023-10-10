import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOptions } from "./category";

export const AdminJSResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  }
]