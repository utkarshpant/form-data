export const getObjectFromFormData = (formData: FormData) => {
  if (!(formData instanceof FormData)) {
    throw Error('Expected argument of type FormData, received argument of different type.');
  }
  const result = {};
  for (const entry of formData.entries()) {
    const key = entry[0];
    const value = formData.getAll(key);
    Object.assign(result, {
      [key]: value.length > 1 ? value : value[0],
    });
  }
  return result;
}
