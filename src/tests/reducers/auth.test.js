import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';

test('should set user id for login', () => {
    const uid = 'abc123';
    const action = {
      type: 'LOGIN',
      uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should remove user id for logout', ()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything'},action);
    expect(state).toEqual({});
});
