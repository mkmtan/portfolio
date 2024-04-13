function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById("myButton");
if (button.innerHTML === "Light Mode") {
 button.innerHTML = "Dark Mode";
} else {
 button.innerHTML = "Light Mode";
}
 }
 function redirectToAbout() {
     window.location.href = '#about';
     }

     function openPDF() {
       var pdfUrl = 'design/others/MKMT-CV.pdf';
       var pdfIframe = document.getElementById('pdf-iframe');
       var pdfModal = document.getElementById('pdf-modal');

       pdfIframe.src = pdfUrl;
       pdfModal.style.display = 'block';
   }

   function closePDFModal() {
       var pdfModal = document.getElementById('pdf-modal');
       pdfModal.style.display = 'none';
   }