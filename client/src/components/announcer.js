const Announcer = ({ message }) => (
  <div
    role="region"
    aria-live="polite"
    className="visually-hidden"
    data-cy="announcer"
  >
    {message}
  </div>
);

export default Announcer;
