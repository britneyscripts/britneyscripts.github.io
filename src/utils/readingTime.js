/**
 * Calculates the estimated reading time of a markdown body.
 * @param {string} text - The raw markdown body.
 * @returns {number} - Estimated minutes to read.
 */
export function getReadingTime(text) {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / 225); // Standard 225 WPM
  return time > 0 ? time : 1;
}
