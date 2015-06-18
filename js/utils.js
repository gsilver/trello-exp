var getAppInfoAjax = function() {
  var url = '/trello-conf.json';
  var promise = $.ajax({
    url: url,
    type: "GET",
    async: false,
    dataType: "json"
  }).done(function(data) {}).fail(function(data) {});
  return promise;
};