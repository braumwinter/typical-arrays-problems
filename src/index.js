exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let min = array[0];

    for (let index in array) {
        if (min > array[index]) {
            min = array[index];
        }
    }

    return min;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let max = array[0];

    array.forEach(function (item, index, array) {
        if(max < item){
          max = item;
        }
    });

    return max;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let total = array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });

    let avg = total / array.length;

    return avg;
};
