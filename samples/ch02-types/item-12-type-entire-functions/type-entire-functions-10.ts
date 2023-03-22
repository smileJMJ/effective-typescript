// const checkedFetch: typeof fetch = async (input, init) => {
//   //  ~~~~~~~~~~~~   Type 'Promise<Response | HTTPError>'
//   //                     is not assignable to type 'Promise<Response>'
//   //                   Type 'Response | HTTPError' is not assignable
//   //                       to type 'Response'
//   const response = await fetch(input, init);
//   if (!response.ok) {
//     return new Error('Request failed: ' + response.status);
//   }
//   return response;
// }

type T = number & number[];
type A = number & string;
type B = number & string[];
type C = string & string[];
const a: T = Object.assign(4, [0]); 
const b: B = Object.assign(4, ['a']);
const c: C = Object.assign('a', ['b'], 3, null);
console.log('a', a);