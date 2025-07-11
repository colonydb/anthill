export const clampHeadingLevel = (level: number) => Math.min(Math.max(level, 1), 6) as 1 | 2 | 3 | 4 | 5 | 6;
