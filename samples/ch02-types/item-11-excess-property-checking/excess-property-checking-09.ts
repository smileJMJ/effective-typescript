interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o: Options = { darkmode: true };  // OK
const ot: Options = { a: null }; // darkmode는 없지만 정상임! (darkmode는 있어도 되고 없어도 되고)

interface Options2 {
  darkMode: boolean;
  [otherOptions: string]: unknown;
}
const oo: Options2 = { darkMode: true };
const ooo: Options2 = { a: null }; // Property 'darkMode' is missing in type '{ a: null; }' but required in type 'Options2'.