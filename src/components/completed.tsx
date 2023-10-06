import './completed.scss';
import chech from '../assets/images/icon-success.svg';
import { Dispatch, SetStateAction } from 'react';

interface CompletedProps {
  email: string;
  dismiss: Dispatch<SetStateAction<boolean>>;
}

export default function Completed({ email, dismiss }: CompletedProps) {
  return (
    <div className="completed">
      <img src={chech} alt="check" />
      <h1 className="heading">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong> Please
        open it and click the button to confirm your subscription
      </p>
      <button onClick={() => dismiss(false)}>Dismiss message</button>
    </div>
  );
}
