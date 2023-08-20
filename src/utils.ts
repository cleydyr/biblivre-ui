type RecordIndexant = string | number | symbol;

export function groupBy<
  T extends Record<RecordIndexant, RecordIndexant>,
  K extends keyof T
>(
  property: K
): (
  acc: Record<RecordIndexant, Array<T>>,
  item: T
) => Record<RecordIndexant, Array<T>> {
  return (acc, item) => {
    const key = item[property];

    return {
      ...acc,
      [key]: [...(acc[key] ?? []), item],
    };
  };
}
