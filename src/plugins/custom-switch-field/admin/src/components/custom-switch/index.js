import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@strapi/design-system';

import { SwitchContent, SwitchButton } from './style';


export const Switch = React.forwardRef(
    ({ label, onChange, onLabel, offLabel, selected, visibleLabels, ...props }, ref) => {
      return (
        <SwitchButton
          ref={ref}
          role="switch"
          aria-checked={selected}
          aria-label={label}
          onClick={onChange}
          visibleLabels={visibleLabels}
          type="button"
          {...props}
        >
          <Flex>
            <SwitchContent>
              <span>{onLabel}</span>
              <span>{offLabel}</span>
            </SwitchContent>
  
            {visibleLabels && (
              <Box as="span" aria-hidden paddingLeft={2} color={selected ? 'success600' : 'danger600'}>
                {selected ? onLabel : offLabel}
              </Box>
            )}
          </Flex>
        </SwitchButton>
      );
    },
  );


Switch.defaultProps = {
    onLabel: 'Habilitado',
    offLabel: 'Deshabilitado',
    visibleLabels: false,
  };
  
  Switch.propTypes = {
    label: PropTypes.string.isRequired,
    offLabel: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onLabel: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    visibleLabels: PropTypes.bool,
  };
  
  Switch.displayName = 'Switch';