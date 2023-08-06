import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList.js';

test('відображає компонент TodoList', () => {
  render(<TodoList />);

  const inputElement = screen.getByRole('textbox');
  const addButtonElement = screen.getByText('Add Todo');

  expect(inputElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();
});

test('додає завдання після натискання кнопки', () => {
  render(<TodoList />);

  const inputElement = screen.getByRole('textbox');
  const addButtonElement = screen.getByText('Add Todo');

  const todoText = 'Test Todo';

  fireEvent.change(inputElement, { target: { value: todoText } });
  fireEvent.click(addButtonElement);

  const addedTodoElement = screen.getByText(todoText);

  expect(addedTodoElement).toBeInTheDocument();
});

test('не додає завдання при порожньому полі вводу', () => {
  render(<TodoList />);

  const inputElement = screen.getByRole('textbox');
  const addButtonElement = screen.getByText('Add Todo');

  fireEvent.click(addButtonElement);

  const addedTodoElement = screen.queryByText('Test Todo');

  expect(addedTodoElement).toBeNull();
});