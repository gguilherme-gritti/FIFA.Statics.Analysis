import { search, searchFile, path, headers } from "../Base";

const fullPath = `${path}/players`;

export async function find(param, value) {
  headers.append("content-type", "application/json");

  return search(
    `${fullPath}?${param ? param + "=" : ""}${param ? "'" + value + "'" : ""}`,
    "GET",
    headers
  );
}
