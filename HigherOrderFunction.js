// Higher order function - one or more function can pass as an argument and return a function as result
// example- Map, filter these are all higher order function

const r = [2, 5, 7, 9];

function area(r) {
  const areaOfCircle = Math.PI * r * r;
  return areaOfCircle;
  // console.log(areaOfCircle);
}
// area(r);

function parameter(r) {
  const parameterOfCircle = 2 * Math.PI * r;
  // console.log(parameterOfCircle);
  return parameterOfCircle;
}
// parameter(r);

// HIGHER ORDER FUNCTION
function calculation(r, fn) {
  // passing radius and function as argument
  const output = []; // empty array initialization
  for (let i = 0; i < r.length; i++) {
    // loop for radius iteration
    output.push(fn(r[i])); //function iterate according to radius and result push to array(output)
  }
  return output;
}
console.log(calculation(r, area));
// function main(){

// }

// Hi All,

// Looking for a job. Being worked with 6 companies having experience of 13 years in QA industry. Have experience in Manual and Automation/ QA Lead. Lost my job since 6 months and starving with salary and monetary.

// Any reference or help will always be appreciated. An empty pocket, full of responsibilities and EMIs of Home Loan teaches me a lesson of struggling life.

// Now pursuing a 6Sigma Certificate from Simplilearn to enrich my skills and move ahead with full confidence in industry.
