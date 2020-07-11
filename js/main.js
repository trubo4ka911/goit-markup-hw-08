/*modal*/
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
/*checkbox*/
(() => {
	document.querySelector(".js-speaker-form").addEventListener("submit", e => {
		e.preventDefault();

		new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

		e.currentTarget.reset();
		if (document.getElementById("checkbox-agree").checked) {
			document.getElementById("form-submit").classList.remove("form-button-disabled");
		}
	});
	document.getElementById("checkbox-agree").addEventListener("change", offButtton);
	function offButtton() {
		if (document.getElementById("checkbox-agree").checked) {
			document.getElementById("form-submit").classList.remove("form-button-disabled");
		} else {
			document.getElementById("form-submit").classList.add("form-button-disabled");
		}
	}
})();