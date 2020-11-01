import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import { Item } from 'semantic-ui-react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render((
    <StaticRouter>
          <App />
    </StaticRouter>
  ), div);

  ReactDom.unmountComponentAtNode(div);
});



/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
