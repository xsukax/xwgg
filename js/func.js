function saveTextAsFile(textToWrite, fileNameToSaveAs) {
   var textFileAsBlob = new Blob([textToWrite], {
      type: 'text/plain'
   });
   var downloadLink = document.createElement("a");
   downloadLink.download = fileNameToSaveAs;
   downloadLink.innerHTML = "Download File";
   if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
   } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
   }

   downloadLink.click();
}

function copy() {
   let textarea = document.getElementById("video0_tags");
   textarea.select();
   document.execCommand("copy");
}

$(document).ready(function () {
   $(".taglist input").click(function () {
      $("#video0_tags").text('');
      $(".taglist :checked").each(function () {
         $("#video0_tags").append($(this).val() + "\n");
      });
   });
});
