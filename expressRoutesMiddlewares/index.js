export function log(request, resolve, next) {
  console.log("Logging...");
  next();
}
