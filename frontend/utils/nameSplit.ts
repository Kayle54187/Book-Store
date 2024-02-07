export default function nameSplit(userName: string | undefined) {
  if (userName) {
    // Split the name by spaces, handling any number of spaces
    const nameParts = userName.trim().split(/\s+/);

    // Extract the first character of each name part, ensuring uppercase
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
    return initials;
  }
}
