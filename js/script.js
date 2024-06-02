// Cover 
function closeCover() {
  const coverModal = document.getElementById('cover-modal');
  const mainContent = document.getElementById('main-content');
  
  coverModal.classList.add('slide-up');
  coverModal.addEventListener('transitionend', () => {
      coverModal.classList.add('hidden');
      mainContent.classList.remove('hidden');
      setTimeout(() => {
          mainContent.classList.add('fade-in');
      }, 10);  // Small delay to ensure 'hidden' class is applied before fade-in
  }, { once: true });
  audio.play();
}

function playMusic() {
  const audio = document.getElementById('audio');
  const rotateButton = document.getElementById('rotateButton');

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      rotateButton.classList.add('spin');
    } else {
      audio.pause();
      rotateButton.classList.remove('spin');
    } 
  }

  rotateButton.addEventListener('click', toggleAudio);

  // Tambahkan event listener untuk mematikan musik
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      audio.pause();
      rotateButton.classList.remove('spin');
    }
  });
}

// Panggil fungsi playMusic ketika dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
  playMusic();
});


//fungsi untuk scroll fade
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//modal galery
function openModal(imageSrc) {
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('imageModal').classList.add('hidden');
}

//button angpao digital
function toggleGift() {
  const textElement = document.getElementById('hiddenText');
  const buttonElement = document.getElementById('toggleButton');
  if (textElement.classList.contains('hidden')) {
    textElement.classList.remove('hidden');
    buttonElement.textContent = 'Sembunyikan';
  } else {
    textElement.classList.add('hidden');
    buttonElement.textContent = 'Tampilkan';
  }
}

//Clipboard
function copyToClipboard(button) {
  const textElement = button.previousElementSibling;
  const textToCopy = textElement.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
      button.innerHTML = 'Teks Disalin!';
      setTimeout(() => {
          button.innerHTML = '<i class="fi fi-ss-copy-alt"></i> ' + button.dataset.originalText;
      }, 2000);
  }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
  });
}


