import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export function NotificationSelect({ value, onValueChange, options }) {
  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <RadixSelect.Trigger
        className="w-[200px] rounded-md bg-gray-100 px-6 py-3 text-lg font-semibold text-gray-500 outline-none border-none text-right flex items-center justify-between gap-2 shadow-none focus:ring-2 focus:ring-purple-400"
        aria-label="Notification preference"
      >
        <RadixSelect.Value />
        <RadixSelect.Icon>
          <ChevronDown size={20} className="text-gray-400 ml-2" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="z-[10010] w-[200px] rounded-md bg-white shadow-lg border border-gray-200 mt-1">
          <RadixSelect.Viewport>
            {options.map(opt => (
              <RadixSelect.Item
                key={opt}
                value={opt}
                className="px-6 py-2 text-lg text-gray-700 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none select-none"
              >
                <RadixSelect.ItemText>{opt}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
} 