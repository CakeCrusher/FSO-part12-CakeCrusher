import { render, screen } from '@testing-library/react';
import App from './App';
import Todo from './Todos/Todo';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders todo text', () => {
  render(<Todo todo={{text:'testing',done:true}}/>)
  const textElement = screen.getByText(/testing/i);
})