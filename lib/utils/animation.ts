/**
 * Animation utility functions and constants
 */

export const ANIMATION_DELAYS = {
  fast: 100,
  normal: 200,
  slow: 300,
  verySlow: 500,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 500,
  normal: 1000,
  slow: 1500,
} as const;

/**
 * Generate stagger animation delay for grid items
 */
export function getStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay;
}

/**
 * Animation delay for multiple elements
 */
export function getAnimationDelay(index: number, multiplier: number = 100): string {
  return `${index * multiplier}ms`;
}
