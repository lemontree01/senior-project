interface Criminal {
  dob: string;
  firstName: string;
  lastName: string;
  iin: string;
  maritalStatus: string;
  gender: string;
  offense: string;
  zipCode: string;
  picture: string;
}

export function fuzzySearch(query: string, value: string): boolean {
  // Perform fuzzy search logic here
  // For simplicity, let's assume that fuzzy search always returns true
  return value.toLowerCase().includes(query.toLowerCase());
}

export function filterAndSortCriminals(searchQuery: string, criminals: Criminal[]): Criminal[] {
  // Filter criminals based on fuzzy search on firstName, lastName, and offense
  const filteredCriminals = criminals.filter(criminal => {
    return (
      fuzzySearch(searchQuery, criminal.firstName) ||
      fuzzySearch(searchQuery, criminal.lastName) ||
      fuzzySearch(searchQuery, criminal.offense)
    );
  });

  // Sort filtered criminals based on similarity to the search query
  filteredCriminals.sort((a, b) => {
    // Calculate similarity scores for each criminal
    const similarityA = calculateSimilarity(searchQuery, a);
    const similarityB = calculateSimilarity(searchQuery, b);
    // Sort in descending order of similarity
    return similarityB - similarityA;
  });

  return filteredCriminals;
}

function calculateSimilarity(query: string, criminal: Criminal): number {
  let similarityScore = 0;
  // Calculate similarity score based on firstName, lastName, and offense
  if (fuzzySearch(query, criminal.firstName)) {
    similarityScore++;
  }
  if (fuzzySearch(query, criminal.lastName)) {
    similarityScore++;
  }
  if (fuzzySearch(query, criminal.offense)) {
    similarityScore++;
  }
  return similarityScore;
}