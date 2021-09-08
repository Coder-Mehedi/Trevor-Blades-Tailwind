import { FC, HTMLProps } from 'react';

export const Container: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
