import React from 'react';

interface ISubmitButtonProps {
  onClick: () => void;
  label: string;
}

export default function SubmitButton({ onClick, label }: ISubmitButtonProps) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="w-full bg-black text-white text-18 text-semibold py-16 rounded-8 mt-70"
      >
        {label}
      </button>
    </>
  );
}
