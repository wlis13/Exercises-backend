const print = (arr) => {
  const buildArr = arr.map((item) => {
    const test = `${ item.id } ${ item.name }`;
    return test;
  });
  return buildArr;
};

module.exports =
{
  print,
}