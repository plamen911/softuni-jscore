function mapSort(map, sortFn) {
    // return new Map([...map.entries()].sort((a, b) => a[0] > b[0]));
    return new Map([...map.entries()].sort(sortFn));
}

module.exports = mapSort;

