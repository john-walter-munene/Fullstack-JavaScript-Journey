function sample() {
    var bestCandidate, bestDistance = 0;
    for (var i = 0; i < numCandidates; ++i) {
      var c = [Math.random() * width, Math.random() * height],
          d = distance(findClosest(samples, c), c);
      if (d > bestDistance) {
        bestDistance = d;
        bestCandidate = c;
      }
    }
    return bestCandidate;
}

function distance(a, b) {
    var dx = a[0] - b[0],
        dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

function sample() {
    return [random() * width, random() * height];
  }

// Shuffling.
function shuffle(array) {
    var n = array.length, t, i;
    while (n) {
      i = Math.random() * n-- | 0; // 0 ≤ i < n
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  }

function quicksort(array, left, right) {
    if (left < right - 1) {
      var pivot = left + right >> 1;
      pivot = partition(array, left, right, pivot);
      quicksort(array, left, pivot);
      quicksort(array, pivot + 1, right);
    }
  }
  
function partition(array, left, right, pivot) {
    var pivotValue = array[pivot];
    swap(array, pivot, --right);
    for (var i = left; i < right; ++i) {
      if (array[i] < pivotValue) {
        swap(array, i, left++);
      }
    }
    swap(array, left, right);
    return left;
  }

function mergesort(array) {
    var n = array.length, a0 = array, a1 = new Array(n);
    for (var m = 1; m < n; m <<= 1) {
      for (var i = 0; i < n; i += m << 1) {
        var left = i,
            right = Math.min(i + m, n),
            end = Math.min(i + (m << 1), n);
        merge(a0, a1, left, right, end);
      }
      i = a0, a0 = a1, a1 = i;
    }
    if (array === a1) {
      for (var i = 0; i < n; ++i) {
        array[i] = a0[i];
      }
    }
  }
  
function merge(a0, a1, left, right, end) {
    for (var i0 = left, i1 = right; left < end; ++left) {
      if (i0 < right && (i1 >= end || a0[i0] <= a0[i1])) {
        a1[left] = a0[i0++];
      } else {
        a1[left] = a0[i1++];
      }
    }
  }