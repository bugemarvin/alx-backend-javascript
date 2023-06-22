import ClassRoom from './0-classroom';

/**
 * Implementing a function named initializeRooms.
 * @classRoom imported from the classRoom class.
 * @param {initializeRooms} as a the main function.
 * @return {classRoom} from the main function as an array of 3
 */

export default function initializeRooms() {
  const arraysSizes = [19, 20, 34];
  const size = [];

  arraysSizes.forEach((element) => {
    const items = new ClassRoom(element);
    size.push(items);
  });
  return size;
}
