let clickedEl = null;

document.addEventListener(
	"contextmenu",
	(event) => {
		clickedEl = event.target;
	},
	true,
);

const fillInputs = (parent) => {
	function geraNumeroCartao() {
		let numCartao = "";
		for (let i = 0; i < 16; i++) {
			numCartao += Math.floor(Math.random() * 10);
		}
		return numCartao;
	}

	function geraValidade() {
		const mes = `0${Math.floor(Math.random() * 12 + 1)}`.slice(-2);
		const ano = new Date().getFullYear() + Math.floor(Math.random() * 6) + 1;
		return `${mes}/${ano.toString().slice(-2)}`;
	}

	function geraCVV() {
		return Math.floor(100 + Math.random() * 900).toString();
	}

	function geraNome() {
		const nomes = [
			"Conan",
			"Thiago",
			"João",
			"Silva",
			"Maria",
			"Souza",
			"Pedro",
			"Costa",
			"Ana",
			"Oliveira",
			"Lucas",
			"Pereira",
			"Bjorn",
		];

		function getNomeAleatorio() {
			return nomes[Math.floor(Math.random() * nomes.length)];
		}

		const nomeCompleto = `${getNomeAleatorio()} ${getNomeAleatorio()}`;
		return nomeCompleto;
	}

	function geraBandeira() {
		const bandeiras = [
			"Visa",
			"MasterCard",
			"American Express",
			"Discover",
			"Elo",
			"Hipercard",
		];
		return bandeiras[Math.floor(Math.random() * bandeiras.length)];
	}

	function geraParcelas() {
		return Math.floor(Math.random() * 12 + 1).toString();
	}

	function geraMes() {
		const mesAtual = new Date().getMonth() + 1;
		return `0${mesAtual}`.slice(-2);
	}

	function geraAno() {
		const anoAtual = new Date().getFullYear();
		return (anoAtual + 1).toString();
	}

	function geraEmail() {
		const dominios = [
			"example.com",
			"email.com",
			"test.com",
			"site.com",
			"mail.com",
			"dominio.com",
			"brasil.com",
		];
		const nome = geraNome().toLowerCase().replace(" ", ".");
		const dominio = dominios[Math.floor(Math.random() * dominios.length)];
		return `${nome}@${dominio}`;
	}

	function geraSenha() {
		const caracteres =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
		let senha = "";
		for (let i = 0; i < 10; i++) {
			senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
		}
		return senha;
	}

	function geraQuantidade(input) {
		if (Number.isNaN(input) || input <= 0) {
			return Math.floor(Math.random() * 100).toString();
		}

		return Math.floor(Math.random() * input + 1).toString();
	}

	function geraData() {
		const dia = `0${Math.floor(Math.random() * 28 + 1)}`.slice(-2);
		const mes = `0${Math.floor(Math.random() * 12 + 1)}`.slice(-2);
		const ano = new Date().getFullYear();
		return `${ano}-${mes}-${dia}`;
	}

	function geraTelefone() {
		const ddd = Math.floor(Math.random() * 90 + 10).toString();
		const numero = Math.floor(Math.random() * 900000000 + 100000000).toString();
		return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
	}

	function geraURL() {
		const sites = [
			"www.example.com",
			"www.test.com",
			"www.site.com",
			"www.mail.com",
			"www.dominio.com",
			"www.brasil.com",
		];
		return sites[Math.floor(Math.random() * sites.length)];
	}

	function geraRange(min, max) {
		if (Number.isNaN(min) || Number.isNaN(max) || min >= max) {
			return Math.floor(Math.random() * 10).toString();
		}

		return Math.floor(Math.random() * (max - min + 1) + min).toString();
	}

	function geraCor() {
		return `#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")}`;
	}

	function geraCEP() {
		return `${Math.floor(Math.random() * 90000 + 10000)}-${Math.floor(
			Math.random() * 900 + 100,
		)}`;
	}

	function geraCPF() {
		let cpf = "";
		for (let i = 0; i < 9; i++) {
			cpf += Math.floor(Math.random() * 10);
		}
		let d1 = 0;
		let d2 = 0;
		for (let i = 0; i < 9; i++) {
			d1 += cpf[i] * (10 - i);
			d2 += cpf[i] * (11 - i);
		}
		d1 = 11 - (d1 % 11);
		d1 = d1 >= 10 ? 0 : d1;
		d2 += d1 * 2;
		d2 = 11 - (d2 % 11);
		d2 = d2 >= 10 ? 0 : d2;
		return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
			6,
			9,
		)}-${d1}${d2}`;
	}

	function geraCNPJ() {
		let cnpj = "";
		for (let i = 0; i < 12; i++) {
			cnpj += Math.floor(Math.random() * 10);
		}
		let d1 = 0;
		let d2 = 0;
		let peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		for (let i = 0; i < 12; i++) {
			d1 += cnpj[i] * peso[i];
		}
		d1 = 11 - (d1 % 11);
		d1 = d1 >= 10 ? 0 : d1;
		peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		for (let i = 0; i < 12; i++) {
			d2 += cnpj[i] * peso[i + 1];
		}
		d2 += d1 * peso[0];
		d2 = 11 - (d2 % 11);
		d2 = d2 >= 10 ? 0 : d2;
		return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(
			5,
			8,
		)}/${cnpj.slice(8, 12)}-${d1}${d2}`;
	}

	function geraRG() {
		let rg = "";
		for (let i = 0; i < 9; i++) {
			rg += Math.floor(Math.random() * 10);
		}
		return `${rg.slice(0, 2)}.${rg.slice(2, 5)}.${rg.slice(5, 8)}-${rg.slice(
			8,
			9,
		)}`;
	}

	function geraEstado() {
		const estados = [
			"AC",
			"AL",
			"AP",
			"AM",
			"BA",
			"CE",
			"DF",
			"ES",
			"GO",
			"MA",
			"MT",
			"MS",
			"MG",
			"PA",
			"PB",
			"PR",
			"PE",
			"PI",
			"RJ",
			"RN",
			"RS",
			"RO",
			"RR",
			"SC",
			"SP",
			"SE",
			"TO",
		];
		return estados[Math.floor(Math.random() * estados.length)];
	}

	function geraTexto() {
		const palavras = [
			"lorem",
			"ipsum",
			"dolor",
			"sit",
			"amet",
			"consectetur",
			"adipiscing",
			"elit",
		];

		function palavraAleatoria() {
			return palavras[Math.floor(Math.random() * palavras.length)];
		}

		return [palavraAleatoria(), palavraAleatoria()].join(" ");
	}

	const inputs = parent.querySelectorAll("input");
	const selects = parent.querySelectorAll("select");

	for (const select of selects) {
		if (select.options.length > 0) {
			const randomIndex = Math.floor(Math.random() * select.options.length);
			select.selectedIndex = randomIndex;
		}
	}

	function matchAny(str, terms) {
		return terms.some((term) => str.toLowerCase().includes(term));
	}

	for (const input of inputs) {
		const id = input.id.toLowerCase();
		const name = input.name.toLowerCase();
		const placeholder = input.placeholder.toLowerCase();
		const inputType = input.type.toLowerCase();

		const cardTerms = ["cartao", "card"];
		const numberTerms = ["numero", "number"];
		const validityTerms = ["validade", "validity"];
		const cvvTerms = ["cvv", "csc"];
		const nameTerms = ["nome", "name"];
		const flagTerms = ["bandeira", "flag"];
		const installmentsTerms = ["parcelas", "installments"];
		const monthTerms = ["mes", "month"];
		const yearTerms = ["ano", "year"];
		const emailTerms = ["email"];
		const passwordTerms = ["senha", "password"];
		const quantityTerms = [
			"quantidade",
			"amount",
			"qtd",
			"quantity",
			"numero",
			"number",
		];
		const dateTerms = ["date", "data"];
		const phoneTerms = ["telefone", "tel"];
		const urlTerms = ["url", "link"];
		const checkboxTerms = ["checkbox"];
		const radioTerms = ["radio"];
		const rangeTerms = ["range"];
		const colorTerms = ["color", "cor"];
		const zipTerms = ["cep", "zip", "postal"];
		const cpfTerms = ["cpf"];
		const cnpjTerms = ["cnpj"];
		const rgTerms = ["rg"];
		const stateTerms = ["estado", "uf", "state"];

		if (
			matchAny(id, cardTerms) ||
			matchAny(name, cardTerms) ||
			matchAny(placeholder, cardTerms)
		) {
			if (
				matchAny(id, numberTerms) ||
				matchAny(name, numberTerms) ||
				matchAny(placeholder, numberTerms)
			) {
				input.value = geraNumeroCartao();
			} else if (
				matchAny(id, validityTerms) ||
				matchAny(name, validityTerms) ||
				matchAny(placeholder, validityTerms)
			) {
				input.value = geraValidade();
			} else if (
				matchAny(id, cvvTerms) ||
				matchAny(name, cvvTerms) ||
				matchAny(placeholder, cvvTerms)
			) {
				input.value = geraCVV();
			} else if (
				matchAny(id, nameTerms) ||
				matchAny(name, nameTerms) ||
				matchAny(placeholder, nameTerms)
			) {
				input.value = geraNome();
			} else if (
				matchAny(id, flagTerms) ||
				matchAny(name, flagTerms) ||
				matchAny(placeholder, flagTerms)
			) {
				input.value = geraBandeira();
			} else if (
				matchAny(id, installmentsTerms) ||
				matchAny(name, installmentsTerms) ||
				matchAny(placeholder, installmentsTerms)
			) {
				input.value = geraParcelas();
			} else if (
				matchAny(id, monthTerms) ||
				matchAny(name, monthTerms) ||
				matchAny(placeholder, monthTerms)
			) {
				input.value = geraMes();
			} else if (
				matchAny(id, yearTerms) ||
				matchAny(name, yearTerms) ||
				matchAny(placeholder, yearTerms)
			) {
				input.value = geraAno();
			}
		} else if (
			matchAny(id, emailTerms) ||
			matchAny(name, emailTerms) ||
			matchAny(placeholder, emailTerms) ||
			inputType === "email"
		) {
			input.value = geraEmail();
		} else if (
			matchAny(id, passwordTerms) ||
			matchAny(name, passwordTerms) ||
			matchAny(placeholder, passwordTerms) ||
			inputType === "password"
		) {
			input.value = geraSenha();
		} else if (
			matchAny(id, quantityTerms) ||
			matchAny(name, quantityTerms) ||
			matchAny(placeholder, quantityTerms) ||
			inputType === "number"
		) {
			input.value = geraQuantidade(input.maxLength);
		} else if (
			matchAny(id, dateTerms) ||
			matchAny(name, dateTerms) ||
			matchAny(placeholder, dateTerms) ||
			inputType === "date"
		) {
			input.value = geraData();
		} else if (
			matchAny(id, phoneTerms) ||
			matchAny(name, phoneTerms) ||
			matchAny(placeholder, phoneTerms) ||
			inputType === "tel"
		) {
			input.value = geraTelefone();
		} else if (
			matchAny(id, urlTerms) ||
			matchAny(name, urlTerms) ||
			matchAny(placeholder, urlTerms) ||
			inputType === "url"
		) {
			input.value = geraURL();
		} else if (
			matchAny(id, checkboxTerms) ||
			matchAny(name, checkboxTerms) ||
			matchAny(placeholder, checkboxTerms) ||
			inputType === "checkbox"
		) {
			input.checked = true;
		} else if (
			matchAny(id, radioTerms) ||
			matchAny(name, radioTerms) ||
			matchAny(placeholder, radioTerms) ||
			inputType === "radio"
		) {
			input.checked = true;
		} else if (
			matchAny(id, rangeTerms) ||
			matchAny(name, rangeTerms) ||
			matchAny(placeholder, rangeTerms) ||
			inputType === "range"
		) {
			input.value = geraRange(
				Number.parseFloat(input.min),
				Number.parseFloat(input.max),
			);
		} else if (
			matchAny(id, colorTerms) ||
			matchAny(name, colorTerms) ||
			matchAny(placeholder, colorTerms) ||
			inputType === "color"
		) {
			input.value = geraCor();
		} else if (inputType === "text") {
			if (
				matchAny(id, zipTerms) ||
				matchAny(name, zipTerms) ||
				matchAny(placeholder, zipTerms)
			) {
				input.value = geraCEP();
			} else if (
				matchAny(id, cpfTerms) ||
				matchAny(name, cpfTerms) ||
				matchAny(placeholder, cpfTerms)
			) {
				input.value = geraCPF();
			} else if (
				matchAny(id, cnpjTerms) ||
				matchAny(name, cnpjTerms) ||
				matchAny(placeholder, cnpjTerms)
			) {
				input.value = geraCNPJ();
			} else if (
				matchAny(id, rgTerms) ||
				matchAny(name, rgTerms) ||
				matchAny(placeholder, rgTerms)
			) {
				input.value = geraRG();
			} else if (
				matchAny(id, stateTerms) ||
				matchAny(name, stateTerms) ||
				matchAny(placeholder, stateTerms)
			) {
				input.value = geraEstado();
			} else {
				input.value = geraTexto();
			}
		} else {
			input.value = geraTexto();
		}
	}
};

function getFormFromElement(element) {
	let parent = element;
	while (parent) {
		if (parent.tagName === "FORM") {
			return parent;
		}
		parent = parent.parentElement;
	}
	return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request === "generateFormValues") {
		const form = getFormFromElement(clickedEl);
		if (!form) {
			return;
		}

		fillInputs(form);
		sendResponse();
	}
});
