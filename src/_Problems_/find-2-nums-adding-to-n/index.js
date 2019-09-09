// the best case [O(n)] using SET data structure
function findTwoNumsAddingToN(arr, number) {
  const pair = [];
  const store = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    // check if the set contains one of the element that sum upto the given number
    if (store.has(number - arr[i])) {
      pair.push(number - arr[i]);
      pair.push(arr[i]);
      break;
    }
    // push the element in the set
    store.add(arr[i]);
  }
  return pair.length ? pair : false;
}

function findIndicesOfTwoNumsAddingToN(nums, target) {
  const store = new Set();
  const pair = [];
  for (let index in nums) {
    if (store.has(target - nums[index])) {
      pair.push(nums.indexOf(target - nums[index]));
      pair.push(index);
      break;
    }
    store.add(nums[index]);
  }
  return pair.length ? pair : false;
}

// the Brute force approach
function findTwoNumsAddingToN2(arr, number) {
  const pair = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === number) {
        pair.push(arr[i], arr[j]);
        break;
      }
    }
  }

  return pair.length ? pair : null;
}
