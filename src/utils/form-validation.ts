export function isEmail(text: string) {
  const isEmailRegex = /.+@.+\..+/;
  return isEmailRegex.test(text);
}
