export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function stringToSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
