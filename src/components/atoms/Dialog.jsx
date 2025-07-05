import * as RadixDialog from '@radix-ui/react-dialog';
import React from 'react';

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

export function DialogContent({ children, className = '', ...props }) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm" />
      <RadixDialog.Content
        className={`fixed z-[10000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 flex flex-col ${className}`}
        {...props}
      >
        {children}
        <RadixDialog.Close asChild>
          <button
            className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

export function DialogHeader({ children, className = '' }) {
  return <div className={`mb-6 text-center ${className}`}>{children}</div>;
}

export function DialogFooter({ children, className = '' }) {
  return <div className={`mt-6 flex flex-col items-center ${className}`}>{children}</div>;
}

export const DialogTitle = RadixDialog.Title;
export const DialogDescription = RadixDialog.Description; 