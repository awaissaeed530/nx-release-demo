import { createStateMachine } from './state-machine';

describe('state machine', () => {
  it('should return message', () => {
    const message = createStateMachine();
    expect(message).toBeTypeOf('string');
  });
});
