// Deeply serialize an object or array (handles nested values, Buffers, Dates, etc.)
export const deepSerialize = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const replaceMongoIdInArray = (array) => {
  return array.map(item => {
    return {
      id: item._id?.toString(),
      ...deepSerialize({ ...item })
    };
  }).map(({ _id, ...rest }) => rest);
};

export const replaceMongoIdInObject = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;

  const { _id, ...rest } = {
    ...deepSerialize(obj),
    id: obj._id?.toString(),
  };

  return rest;
};
