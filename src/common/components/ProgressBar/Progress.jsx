import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, useColorModeValue } from '@chakra-ui/react';
import MotionBox from '../MotionBox';

const Progress = ({
  percents,
  duration,
  delay,
  easing,
  barHeight,
  progressColor,
  baseColor,
  borderRadius,
}) => {
  const [barWidth, setBarWidth] = useState(0);
  const [initialized, setInitialized] = useState(false);

  useLayoutEffect(() => {
    const progressClass = document.querySelector('.progress-bar');
    setBarWidth(progressClass.scrollWidth);
    setTimeout(() => {
      setInitialized(true);
    }, 600);
  }, []);

  const percentsOffset = (percents - 100) * (barWidth / 100);

  const transition = {
    duration,
    delay,
    ease: easing,
  };

  const variants = {
    enter: {
      opacity: 0,
      x: -barWidth,
    },
    animate: {
      opacity: 1,
      x: percentsOffset,
      transition,
    },
  };

  const progressColorDefault = useColorModeValue('blue.default', 'blue.200');
  const baseColorDefault = useColorModeValue('gray.100', 'whiteAlpha.300');

  return (
    <Box className="progress-bar" width="100%" overflow="hidden" position="relative" borderRadius={borderRadius} height={barHeight} bg={baseColor || baseColorDefault}>
      <MotionBox
        variants={variants}
        initial="enter"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        animate={initialized ? 'animate' : 'enter'}
        exit="enter"
        bg={progressColor || progressColorDefault}
      />
    </Box>
  );
};

Progress.propTypes = {
  percents: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.string,
  barHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  progressColor: PropTypes.string,
  baseColor: PropTypes.string,
  borderRadius: PropTypes.string,
};
Progress.defaultProps = {
  percents: 0,
  duration: 2,
  delay: 0.5,
  easing: 'easeInOut',
  barHeight: '4px',
  progressColor: '',
  baseColor: '',
  borderRadius: '2px',
};

export default Progress;
