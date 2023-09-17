export function transformArrayObjectToMap<ItemType>(
  items: ItemType[],
  keyProp: keyof ItemType,
): Record<string, Partial<ItemType>>;
export function transformArrayObjectToMap<
  ValueMapType = string,
  ItemType extends object = {},
  KeyProp1 extends keyof ItemType = keyof ItemType,
  KeyProp2 extends keyof ItemType = keyof ItemType,
>(
  items: ItemType[],
  keyProp: KeyProp1,
  targetProp: KeyProp2,
): Record<string, ValueMapType>;
export function transformArrayObjectToMap<ValueMapType, ItemType>(
  items: ItemType[],
  keyProp: keyof ItemType,
  data: ValueMapType,
  isData: true,
): Record<string, ValueMapType>;
export function transformArrayObjectToMap(
  items: any[],
  keyProp: string,
  dataOrTargetProp?: any,
  isData?: boolean,
) {
  const result: Record<string, unknown> = {};
  items?.forEach((item) => {
    if (isData) result[`${item[keyProp]}`] = dataOrTargetProp;
    else
      result[`${item[keyProp]}`] = dataOrTargetProp
        ? item[dataOrTargetProp]
        : item;
  });

  return result;
}
