import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('actions', () => {
  test('addToCart', () => {
    const payload = ProductMock;
    const expectedAction = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expectedAction);
  });

  test('removeFromCart', () => {
    const payload = ProductMock;
    const expectedAction = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expectedAction);
  });
});
