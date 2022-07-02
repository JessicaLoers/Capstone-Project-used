function searchFunction(array, property, searchWord) {
  const sortedEntries = array.sort((a, b) => {
    if (a[property] < b[property]) return -1;
    return 1;
  });

  const searchedTerm = sortedEntries.filter((item) =>
    searchWord !== '' && item[property]
      ? item[property].toLowerCase().includes(searchWord.toLowerCase())
      : true
  );
  return searchedTerm;
}

export { searchFunction };
