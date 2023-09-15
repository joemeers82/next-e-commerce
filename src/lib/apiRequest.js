export default async function apiRequest(requestUrl) {
  let url = requestUrl;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const resJSON = await res.json();
  return resJSON;
}
