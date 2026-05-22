export const checkAccess = (code: string) => {
  const target = [122, 130, 128, 117, 127, 124, 124, 122]; 
  if (code.length !== target.length) return false;
  for (let i = 0; i < code.length; i++) {
    if (code.charCodeAt(i) + 13 !== target[i]) return false;
  }
  return true;
};
