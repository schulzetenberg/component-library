// https://stackoverflow.com/a/4149393
export const parseCamelCase = (text = ''): string => {
  return text.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {
    return str.toUpperCase();
  });
};

export async function asyncForEach(array: any, callback: Function): Promise<any> {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
};
