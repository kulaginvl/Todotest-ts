import { KeyboardEvent } from 'react';

export const onKeyEnter = (event: KeyboardEvent<HTMLInputElement>, fn: () => void) => {
  if (event.code === 'Enter') {
    fn();
  }
};
