export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function stringToSlug(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove all non-word chars except for hyphen
    .trim() // Trim spaces from start and end
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}
