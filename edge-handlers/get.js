export function onRequest(event) {
  const { code } = event.request.origin.country;
  console.log(event.request.headers.get('X-NF-Client-Connection-Ip'));
}