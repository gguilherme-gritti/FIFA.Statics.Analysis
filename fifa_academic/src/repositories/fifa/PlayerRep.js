import { search, searchFile, path, headers } from "../Base";

const fullPath = `${path}/players`;

export async function find(page = 0) {
  headers.append("content-type", "application/json");

  return search(`${fullPath}${page ? `?page=${page}` : ""}`, "GET", headers);
}

export async function playerImage(id) {
  headers.append("content-type", "image/png");

  return await searchFile(`${fullPath}/${id}/image`, "GET", headers);
}
