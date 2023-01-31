/*
 * File: 5-typed_arrays.js
 * Auth: Ukonu Divine Chisom
 */

/**
 * createInt8TypedArray - Creates Int8 typed array.
 * @length: The length of the buffer.
 * @position: The position to be modified.
 * @value: The value to be stored in the position.
 * Return: A new ArrayBuffer with an Int8 value at a specific position.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
