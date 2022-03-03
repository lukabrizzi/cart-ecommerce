export const countDuplicatesItemArray = (value, array) => {
    let count = 0

    array.forEach(arrayCalue => {
        if (arrayCalue == value) {
            count++
        }
    })
    return count
}

export const removeArrayDuplicates = (array) => {
    return Array.from(new Set(array))
}

export const removeItemArray = (array, item) => {
    const index = array.indexOf(item)

    if (index > -1) {
        array.splice(index, 1)
    }
    return array
}