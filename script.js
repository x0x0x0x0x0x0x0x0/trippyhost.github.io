document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const input = document.getElementById('imageInput');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageContainer = document.getElementById('imageContainer');
      const img = document.createElement('img');
      img.src = e.target.result;
      imageContainer.innerHTML = ''; // clear old img
      imageContainer.appendChild(img);

      // share link
      const link = document.createElement('a');
      link.href = e.target.result;
      link.textContent = "Shareable Link";
      link.target = "_blank";
      link.style.display = "block";
      link.style.marginTop = "1rem";
      imageContainer.appendChild(link);
    };
    reader.readAsDataURL(file);
  }
});
