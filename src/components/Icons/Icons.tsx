import ICONS from './Icons.data';
import type { TIconType } from './Icons.data';
import React from 'react';
import cn from 'classnames';

interface IconsProps {
  className?: string | string[];
  icon: TIconType;
}

const Icon: React.FC<IconsProps> = ({ className = '', icon }) => {
  return (
    <svg className={cn('icon', className)} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
