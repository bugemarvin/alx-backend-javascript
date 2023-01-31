/*
 * File: 7-has_array_values.js
 * Auth: Ukonu Divine Chisom
 */

/**
 * hasValuesFromArray - Checks if each element in a set is present in an array.
 * @set: A set - Collection of unique items.
 * @array: An array of items.
 * Return: A boolean if all the elements in the array exist within the set.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((item) => set.has(item));
}
