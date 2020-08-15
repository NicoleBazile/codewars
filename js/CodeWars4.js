//Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    if (args.length === 1) {
      return args[0];
    }
    var smallestInt = args[0];
    for (var i = 0; i < args.length; i++) {
      if (smallestInt > args[i]) {
        smallestInt = args[i];
      }
    }
    return smallestInt;
  }
}
