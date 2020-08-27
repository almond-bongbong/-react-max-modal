export const mergeClassNames = (
  ...classNames: (string | undefined | false | null)[]
): string => classNames.filter(Boolean).join(' ');
