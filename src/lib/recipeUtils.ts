/**
 * Maps submitter names to their corresponding local image paths.
 * Returns null if no image is available for the submitter.
 */
const imageMap: Record<string, string> = {
  "Om Patel": "/ompatel.webp",
  "Jayani Pitta": "/jayanipitta.jpg",
  "Jhilmil Pitta": "/jhilmilpitta.jpg",
  "Neal Parekh": "/neal.png",
  "Neal Wasudev": "/neal.png",
  "Simeon Sukinder": "/simeonskinder.jpeg",
  "Sofia Khan": "/sofiakhan.png",
};

export function getImageForSubmitter(name: string): string | null {
  // Trim whitespace from the name
  const trimmedName = name.trim();
  return imageMap[trimmedName] ?? null;
}

/**
 * Parses a comma-separated tags string into an array of trimmed tags.
 * Filters out empty strings.
 */
export function parseTags(tagsString: string): string[] {
  if (!tagsString || tagsString.trim() === "") {
    return [];
  }
  return tagsString
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}
