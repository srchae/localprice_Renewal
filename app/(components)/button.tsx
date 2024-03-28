import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center border-2 border-#5A28EC px-4 text-sm font-medium text-#5A28EC',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ColorButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center bg-#5A28EC px-4 text-sm font-medium text-white',
        className,
      )}
    >
      {children}
    </button>
  );
}
