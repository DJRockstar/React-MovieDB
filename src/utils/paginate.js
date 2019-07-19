import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //In order to chain Lodash methods we need to convert items
  //array to a Lodash wrapper
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value(); //.value converts the lodash wrapper to a normal array
}
