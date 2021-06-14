const phH = (num: number) => {
  return -Math.log10(num);
};

const phOH = (num: number) => {
  return 14 + Math.log10(num);
};

const pohOH = (num: number) => {
  return phH(num);
};

const pohH = (num: number) => {
  return phOH(num);
};

const phToH = (num: number) => {
  return 10 ** -num;
};

const finalH = (i: number, constant: number) => {
  return Math.sqrt(i * constant);
};

// console.log(phH(0.003), pohH(0.003));
// console.log(phOH(0.003), pohOH(0.003));
// console.log(phOH(0.000187), pohOH(0.000187));
// console.log(phH(0.00000187), pohH(0.00000187));
// console.log(phOH(0.0000000871), pohOH(0.0000000871));
// console.log(phH(0.000000000523), pohH(0.000000000523));
// console.log(phOH(0.0000000000256), pohOH(0.0000000000256));

// console.log();
// console.log(phToH(4.7));

// console.log();
// console.log(phH(0.02));

// console.log();
// console.log(phToH(3.87));

// console.log();
// console.log(finalH(0.025, 0.000013));

console.log(phOH(0.2));
console.log(phOH(0.24));
