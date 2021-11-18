export function searchResponse(
  path,
  method = "GET",
  myHeaders = new Headers(),
  myBody = null
) {
  // TODO confirmar se não dá erro no body vazio
  let myInit = {
    method: method,
    headers: myHeaders,
    mode: "cors",
    body: myBody ? JSON.stringify(myBody) : myBody,
    "Content-Type": "application/json",
    Accept: "application/json",
    // cache: "default",
  };

  return fetch(path, myInit);
}

// Foi o primeiro a ser criado, por isso está com o nome de search.
// Não foi mudado para searchJSON para não dar erro nos métodos que já utilizam
export function search(
  path,
  method = "GET",
  myHeaders = new Headers(),
  myBody = null
) {
  return searchResponse(path, method, myHeaders, myBody)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);

      return { success: false, mensagem: error };
    });
}

export function searchText(
  path,
  method = "GET",
  myHeaders = new Headers(),
  myBody = null
) {
  return searchResponse(path, method, myHeaders, myBody)
    .then((response) => {
      return response.text();
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export function searchFile(
  path,
  method = "GET",
  myHeaders = new Headers(),
  myBody = null
) {
  return searchResponse(path, method, myHeaders, myBody)
    .then((response) => {
      return response.blob();
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export const path = "https://futdb.app/api";

export const headers = new Headers();

headers.append("X-AUTH-TOKEN", "987a457a-b369-43e6-84c2-70d78d68cdf7");
// 987a457a-b369-43e6-84c2-70d78d68cdf7
// 3074d774-6705-4c27-8207-b37cc1ae2dbf
