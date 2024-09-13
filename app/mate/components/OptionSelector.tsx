import React from 'react';

interface IOptionSelectorProps {
  options: string[];
  selectedOptions: string[];
  onSelect: (option: string) => void;
}

export default function OptionSelector({
  options,
  selectedOptions,
  onSelect,
}: IOptionSelectorProps) {
  return (
    <div>
      <label className="block text-16 font-semibold mb-16">매칭 옵션</label>
      <div className="flex overflow-x-auto gap-8">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`px-14 py-4 border border-mediumGray text-16 font-normal whitespace-nowrap ${
              selectedOptions.includes(option)
                ? 'bg-black text-white'
                : 'bg-white border-mediumGray'
            }`}
            onClick={() => onSelect(option)}
            style={{ borderRadius: '30px' }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
