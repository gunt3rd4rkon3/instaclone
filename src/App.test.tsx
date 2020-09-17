/* import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App history={{}} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
import createHistory from 'history/createBrowserHistory'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
const history = createHistory()
it('render without crashing', () => {
  const div = window.document.createElement('div');
  ReactDOM.render(<App history={history}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});