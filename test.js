let arr = [{points:['a','b','d','e']},{points:['a','b','c']}]

arr.sort(function(a, b) {
  return b.points.length - a.points.length
})

console.log(arr);