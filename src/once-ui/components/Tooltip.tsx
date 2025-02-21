'use client';

import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';

// Ensure these are correctly implemented or replace with <div> and <span>
import { Flex, Text, Icon } from '.';
import { SpacingToken } from '../types';

type TooltipProps = {
  label: string;
  prefixIcon?: string;
  suffixIcon?: string;
  className?: string;
  minWidth?: number;
  fillHeight?: boolean;
  height?: number;
  children: React.ReactNode; // Tooltip trigger (e.g., button, icon)
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      label,
      prefixIcon,
      suffixIcon,
      className,
      children,
      minWidth,
      fillHeight = false,
      height,
      ...rest
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    const parseDimension = (
      value: number | SpacingToken | undefined,
      type: 'width' | 'height'
    ): string | undefined => {
      if (value === undefined) return undefined;
      if (typeof value === 'number') return `${value}rem`;
      if (
        [
          '0',
          '1',
          '2',
          '4',
          '8',
          '12',
          '16',
          '20',
          '24',
          '32',
          '40',
          '48',
          '56',
          '64',
          '80',
          '104',
          '128',
          '160',
        ].includes(value)
      ) {
        return `var(--static-space-${value})`;
      }
      if (['xs', 's', 'm', 'l', 'xl'].includes(value)) {
        return `var(--responsive-${type}-${value})`;
      }
      return undefined;
    };

    return (
      <Flex
        className="relative"
        style={{
          minWidth: parseDimension(minWidth, 'width'),
          height: fillHeight ? '100%' : parseDimension(height, 'height'),
        }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        {...rest}
      >
        {children} {/* The element triggering the tooltip */}
        {true && (
          <Flex
            ref={ref}
            className={classNames(
              'absolute top-full left-1/2 transform -translate-x-1/2 mt-2 shadow-lg bg-white text-black p-2 rounded z-50',
              className
            )}
            style={{
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
            gap="4"
            paddingY="4"
            paddingX="8"
            radius="s"
            border="neutral-medium"
            borderStyle="solid-1"
            alignItems="center"
            role="tooltip"
          >
            {prefixIcon && <Icon name={prefixIcon} size="xs" />}
            <Flex paddingX="2">
              <Text
                as="span"
                variant="body-default-xs"
                onBackground="neutral-strong"
              >
                {label}
              </Text>
            </Flex>
            {suffixIcon && <Icon name={suffixIcon} size="xs" />}
          </Flex>
        )}
      </Flex>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };
