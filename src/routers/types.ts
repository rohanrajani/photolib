import { ComponentType } from "react";

export interface Page {
  path: string;
  comp: ComponentType<Object> | any;
}
