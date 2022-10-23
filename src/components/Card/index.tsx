import PropTypes from 'prop-types';

export default function Card({ text }: { text: string }) {
  return (
    <div className="flex bg-footer rounded-lg text-text font-bold text-sm items-center justify-center h-auto max-w-[8.5rem] w-auto py-1">
      <h1>{text}</h1>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
};
