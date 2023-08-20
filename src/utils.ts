type RecordIndexing = string | number | symbol;

type RecordWithIndexing<T extends Record<RecordIndexing, any>> = {
  [K in keyof T]: T[K] extends RecordIndexing ? T[K] : never;
};

export function groupBy<
  T extends Record<RecordIndexing, any>,
  K extends keyof RecordWithIndexing<T>
>(
  property: K
): (acc: Record<T[K], Array<T>>, item: T) => Record<T[K], Array<T>> {
  return (acc, item) => {
    const propertyValue = item[property];

    if (propertyValue in acc) {
      acc[propertyValue].push(item);
    } else {
      acc[propertyValue] = [item];
    }

    return acc;
  };
}

export function indexBy<
  T extends Record<RecordIndexing, any>,
  K extends keyof RecordWithIndexing<T>
>(
  property: T[K] extends string | number | symbol ? K : never
): (acc: Record<T[K], T>, item: T) => Record<T[K], T> {
  return (acc, item) => ({
    ...acc,
    [item[property]]: item,
  });
}
