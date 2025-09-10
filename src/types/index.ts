import { UrlObject } from "url";

export type TypedRoute =
  | __next_route_internal_types__.RouteImpl<string>
  | UrlObject;
