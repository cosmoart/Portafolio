export function orderArray (array) {
	// [1, 2, 3, 4, 5, 6, 7] => [7, 5, 3, 1, 2, 4, 6]
	return array.sort((a, b) => a - b)
		.reduce((result, value, index) => {
			index % 2 === 0 ? result.unshift(value) : result.push(value)
			return result
		}, [])
}
