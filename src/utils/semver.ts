export function compareSemver(a: string, b: string): boolean {
  const parseVersion = (version: string):number[] => version.split('.').map(Number);

  const [aMajor, aMinor, aPatch] = parseVersion(a);
  const [bMajor, bMinor, bPatch] = parseVersion(b);

  if (aMajor > bMajor) return true;
  if (aMajor < bMajor) return false;

  if (aMinor > bMinor) return true;
  if (aMinor < bMinor) return false;

  if (aPatch > bPatch) return true;
  if (aPatch < bPatch) return false;

  return false;
}
