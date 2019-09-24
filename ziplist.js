const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(list1, list2) {
  const zipL = [];
  if (list1.length === list2.length) {
    let i = 0;
    while (i < list1.length) {
      zipL.push(list1[i]);
      zipL.push(list2[i]);
      i++;
    }
  }
  return zipL;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  const list = _.zip(list1, list2);
  return _.flatten(list);
}

console.log(zipListTheSimpleWay(test1, test2));
