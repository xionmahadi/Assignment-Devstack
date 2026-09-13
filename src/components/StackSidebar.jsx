import React from 'react';
import StackItem from './StackItem';

export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm sticky top-28">
      
      {/* Heading */}
      <h2 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
        Your Stack
      </h2>

      {/* Selected Count / Subtitle */}
      <p className="text-sm text-slate-400 mt-1">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {/* Stack Content: Empty State vs Stack Items List */}
      <div className="mt-5">
        {count === 0 ? (
          /* Empty State matching Figma */
          <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 text-center text-slate-400 text-sm">
            Your stack is empty.
          </div>
        ) : (
          /* List of Selected Items */
          <div>
            <div className="space-y-1">
              {stack.map((item) => (
                <StackItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                />
              ))}
            </div>

            {/* Remove All Button */}
            <button
              onClick={onRemoveAll}
              className="w-full bg-white border border-red-200 text-[#E11D48] hover:bg-rose-50 font-bold py-3 rounded-xl text-sm text-center mt-4 transition-colors"
            >
              Remove All
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
