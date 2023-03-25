import { getObjectFromFormData } from '../../lib';

test('getObjectFromFormData', () => {
  const testFormData = new FormData();
  testFormData.append('name', 'John');
  testFormData.append('name', 'Appleseed');
  testFormData.append('age', '25');
  testFormData.append('ticket_preference', 'balcony');
  expect(getObjectFromFormData(testFormData)).toMatchObject({
    name: ['John', 'Appleseed'],
    age: '25',
    ticket_preference: 'balcony',
  });
});
