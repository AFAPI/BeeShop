$(document).ready(function() {
    var delayInSeconds = 10;
    function openDialog() {
      $("#advertisement").dialog({
        modal: true,
        buttons: {
            "Подробнее": function() {
              $(this).dialog("open");
              window.location.href = "https://google.com";
            },
            "Закрыть": function() {
                $(this).dialog("close");
          }
        }
      });
    }
    setTimeout(openDialog, delayInSeconds * 1000);
  });