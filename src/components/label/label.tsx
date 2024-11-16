import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { stylesMode, varAlpha } from 'src/theme/styles';

import { labelClasses } from './classes';

import type { LabelProps } from './types';

// ----------------------------------------------------------------------

export const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, className }, ref) => {
    const theme = useTheme();

    const iconStyles = {
      width: 16,
      height: 16,
      '& svg, img': {
        width: 1,
        height: 1,
        objectFit: 'cover',
      },
    };

    const defaultColor = {
      ...(color === 'default' && {
        /**
         * @variant filled
         */
        ...(variant === 'filled' && {
          color: theme.vars.palette.common.white,
          backgroundColor: theme.vars.palette.text.primary,
          [stylesMode.dark]: { color: theme.vars.palette.grey[800] },
        }),
        /**
         * @variant outlined
         */
        ...(variant === 'outlined' && {
          backgroundColor: 'transparent',
          color: theme.vars.palette.text.primary,
          border: `2px solid ${theme.vars.palette.text.primary}`,
        }),
        /**
         * @variant soft
         */
        ...(variant === 'soft' && {
          color: theme.vars.palette.text.secondary,
          backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
        }),
        /**
         * @variant inverted
         */
        ...(variant === 'inverted' && {
          color: theme.vars.palette.grey[800],
          backgroundColor: theme.vars.palette.grey[300],
        }),
      }),
    };

    const styleColors = {
      ...(color !== 'default' && {
        /**
         * @variant filled
         */
        ...(variant === 'filled' && {
          color: theme.vars.palette[color].contrastText,
          backgroundColor: theme.vars.palette[color].main,
        }),
        /**
         * @variant outlined
         */
        ...(variant === 'outlined' && {
          backgroundColor: 'transparent',
          color: theme.vars.palette[color].main,
          border: `2px solid ${theme.vars.palette[color].main}`,
        }),
        /**
         * @variant soft
         */
        ...(variant === 'soft' && {
          color: theme.vars.palette[color].dark,
          backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.16),
          [stylesMode.dark]: { color: theme.vars.palette[color].light },
        }),
        /**
         * @variant inverted
         */
        ...(variant === 'inverted' && {
          color: theme.vars.palette[color].darker,
          backgroundColor: theme.vars.palette[color].lighter,
        }),
      }),
    };

    return (
      <Box
        ref={ref}
        component="span"
        className={labelClasses.root.concat(className ? ` ${className}` : '')}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          height: 24,
          minWidth: 24,
          lineHeight: 0,
          cursor: 'default',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          padding: theme.spacing(0, 0.75),
          fontSize: theme.typography.pxToRem(12),
          fontWeight: theme.typography.fontWeightBold,
          borderRadius: theme.shape.borderRadius * 0.75,
          transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.shorter,
          }),
          ...sx,
          ...defaultColor,
          ...styleColors,
        }}
      >
        {startIcon && (
          <Box component="span" className={labelClasses.icon} sx={{ mr: 0.75, ...iconStyles }}>
            {startIcon}
          </Box>
        )}

        {typeof children === 'string' ? sentenceCase(children) : children}

        {endIcon && (
          <Box component="span" className={labelClasses.icon} sx={{ ml: 0.75, ...iconStyles }}>
            {endIcon}
          </Box>
        )}
      </Box>
    );
  }
);

// ----------------------------------------------------------------------

function sentenceCase(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
