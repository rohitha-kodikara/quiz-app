export function getRandomQuestionIndexes(currentIndex, arrayLength) {
  const middleIndex = Math.floor(arrayLength / 2)

  const firstArrayStart = 0
  const firstArrayEnd = middleIndex - 1

  const secondArrayStart = middleIndex
  const secondArrayEnd = arrayLength - 1

  const firstArrayMiddle = Math.floor(
    (firstArrayStart + firstArrayEnd) / 2
  )

  const secondArrayMiddle = Math.floor(
    (secondArrayStart + secondArrayEnd) / 2
  )

  const firstArrayIndexes = [
    firstArrayStart,
    firstArrayMiddle,
    firstArrayEnd,
  ]

  const secondArrayIndexes = [
    secondArrayStart,
    secondArrayMiddle,
    secondArrayEnd,
  ]

  if (currentIndex < middleIndex) {
    return secondArrayIndexes
  }

  return firstArrayIndexes
}
