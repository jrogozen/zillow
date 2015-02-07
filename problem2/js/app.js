// script called at end of body, don't need $document.ready();

(function() {

  function sortByMPG(arr) {
    return arr.sort(function(a,b) {
      if (a.mpg > b.mpg) {
        return -1;
      } else if (a.mpg < b.mpg) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }

  function addToDom(data) {
    var el = $('#carList').find('tbody');
    el.append('<tr><td>' + data.mpg + '</td><td>' + data.name + '</td><td>$' + data.price + '</td></tr>');
  }

  $.ajax({
    dataType: "json",
    url: './fixtures/automobiles.json'
  })
    .done(function(data) {
      var sortedArr;
      sortedArr = sortByMPG(data.automobiles);
      
      sortedArr.forEach(function(car) {
        addToDom(car);
      });
    });

})();

