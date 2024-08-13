// @ts-nocheck

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
    The isObject function is a utility function that checks if a given item is an object. 
    It takes a single parameter item of type unknown and returns a boolean. 
    The function first checks if the item is truthy (not null or undefined). 
    Then, it verifies that the item is of type 'object' and is not an array. 
    This ensures that the function correctly identifies plain objects while excluding arrays and other non-object types.

*/

export function isObject(item: unknown): boolean {
    return item && typeof item === 'object' && !Array.isArray(item)
  }
  
  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
  export default function deepMerge<T, R>(target: T, source: R): T {
    const output = { ...target }
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] })
          } else {
            output[key] = deepMerge(target[key], source[key])
          }
        } else {
          Object.assign(output, { [key]: source[key] })
        }
      })
    }
  
    return output
  }