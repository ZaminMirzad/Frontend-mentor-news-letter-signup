import { FC } from 'react';
import NewsLetterSignUp from './components/news-letter-signup';

import './style.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <NewsLetterSignUp />
    </div>
  );
};
