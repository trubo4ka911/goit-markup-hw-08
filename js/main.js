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
		if (document.getElementById("subscribe-checkbox-agree").checked) {
			document.getElementById("subscribe-form-submit").classList.remove("subscribe-form-button-disabled");
		}
	});
	document.getElementById("subscribe-checkbox-agree").addEventListener("change", offButtton);
	function offButtton() {
		if (document.getElementById("subscribe-checkbox-agree").checked) {
			document.getElementById("subscribe-form-submit").classList.remove("subscribe-form-button-disabled");
		} else {
			document.getElementById("subscribe-form-submit").classList.add("subscribe-form-button-disabled");
		}
	}
})();