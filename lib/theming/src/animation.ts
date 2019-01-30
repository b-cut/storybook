import { css, keyframes } from '@emotion/core';
import { color } from './base';

export const easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)',
};

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

const float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`;

const jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`;

const inlineGlow = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  background: ${color.border};
  color: transparent;
  cursor: progress;
`;

export const animation = {
  rotate360,
  glow,
  float,
  jiggle,
  inlineGlow,
};