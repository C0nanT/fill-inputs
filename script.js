document
  .getElementById("meuBotao")
  .addEventListener("click", async function () {
    const fillInputs = () => {
      function geraNumeroCartao() {
        let numCartao = "";
        for (let i = 0; i < 16; i++) {
          numCartao += Math.floor(Math.random() * 10);
        }
        return numCartao;
      }

      function geraValidade() {
        let mes = ("0" + Math.floor(Math.random() * 12 + 1)).slice(-2);
        let ano = new Date().getFullYear() + Math.floor(Math.random() * 6) + 1;
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
        return ("0" + mesAtual).slice(-2);
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
          senha += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
          );
        }
        return senha;
      }

      function geraQuantidade(input) {
        if (isNaN(input) || input <= 0) {
          return Math.floor(Math.random() * 100).toString();
        } else {
          return Math.floor(Math.random() * input + 1).toString();
        }
      }

      function geraData() {
        const dia = ("0" + Math.floor(Math.random() * 28 + 1)).slice(-2);
        const mes = ("0" + Math.floor(Math.random() * 12 + 1)).slice(-2);
        const ano = new Date().getFullYear();
        return `${ano}-${mes}-${dia}`;
      }

      function geraTelefone() {
        const ddd = Math.floor(Math.random() * 90 + 10).toString();
        const numero = Math.floor(
          Math.random() * 900000000 + 100000000
        ).toString();
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
        min = parseFloat(min);
        max = parseFloat(max);

        if (isNaN(min) || isNaN(max) || min >= max) {
          return Math.floor(Math.random() * 10).toString();
        } else {
          return Math.floor(Math.random() * (max - min + 1) + min).toString();
        }
      }

      function geraCor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")}`;
      }

      function geraCEP() {
        return `${Math.floor(Math.random() * 90000 + 10000)}-${Math.floor(
          Math.random() * 900 + 100
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
          9
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
          8
        )}/${cnpj.slice(8, 12)}-${d1}${d2}`;
      }

      function geraRG() {
        let rg = "";
        for (let i = 0; i < 9; i++) {
          rg += Math.floor(Math.random() * 10);
        }
        return `${rg.slice(0, 2)}.${rg.slice(2, 5)}.${rg.slice(
          5,
          8
        )}-${rg.slice(8, 9)}`;
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

      function geraNumero() {
        return Math.floor(Math.random() * 10000 + 1).toString();
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

      const inputs = document.querySelectorAll("input");
      const selects = document.querySelectorAll("select");

      selects.forEach((select) => {
        if (select.options.length > 0) {
          const randomIndex = Math.floor(Math.random() * select.options.length);
          select.selectedIndex = randomIndex;
        }
      });

      inputs.forEach((input) => {
        if (
          input.id.toLowerCase().includes("cartao") ||
          input.id.toLowerCase().includes("card") ||
          input.name.toLowerCase().includes("cartao") ||
          input.name.toLowerCase().includes("card") ||
          input.placeholder.toLowerCase().includes("cartao") ||
          input.placeholder.toLowerCase().includes("card")
        ) {
          if (
            input.id.toLowerCase().includes("numero") ||
            input.id.toLowerCase().includes("number") ||
            input.name.toLowerCase().includes("numero") ||
            input.name.toLowerCase().includes("number") ||
            input.placeholder.toLowerCase().includes("numero") ||
            input.placeholder.toLowerCase().includes("number")
          ) {
            input.value = geraNumeroCartao();
          } else if (
            input.id.toLowerCase().includes("validade") ||
            input.id.toLowerCase().includes("validity") ||
            input.name.toLowerCase().includes("validade") ||
            input.name.toLowerCase().includes("validity") ||
            input.placeholder.toLowerCase().includes("validade") ||
            input.placeholder.toLowerCase().includes("validity")
          ) {
            input.value = geraValidade();
          } else if (
            input.id.toLowerCase().includes("cvv") ||
            input.name.toLowerCase().includes("cvv") ||
            input.placeholder.toLowerCase().includes("cvv")
          ) {
            input.value = geraCVV();
          } else if (
            input.id.toLowerCase().includes("nome") ||
            input.id.toLowerCase().includes("name") ||
            input.name.toLowerCase().includes("nome") ||
            input.name.toLowerCase().includes("name") ||
            input.placeholder.toLowerCase().includes("nome") ||
            input.placeholder.toLowerCase().includes("name")
          ) {
            input.value = geraNome();
          } else if (
            input.id.toLowerCase().includes("bandeira") ||
            input.id.toLowerCase().includes("flag") ||
            input.name.toLowerCase().includes("bandeira") ||
            input.name.toLowerCase().includes("flag") ||
            input.placeholder.toLowerCase().includes("bandeira") ||
            input.placeholder.toLowerCase().includes("flag")
          ) {
            input.value = geraBandeira();
          } else if (
            input.id.toLowerCase().includes("parcelas") ||
            input.id.toLowerCase().includes("installments") ||
            input.name.toLowerCase().includes("parcelas") ||
            input.name.toLowerCase().includes("installments") ||
            input.placeholder.toLowerCase().includes("parcelas") ||
            input.placeholder.toLowerCase().includes("installments")
          ) {
            input.value = geraParcelas();
          } else if (
            input.id.toLowerCase().includes("cvv") ||
            input.id.toLowerCase().includes("csc") ||
            input.name.toLowerCase().includes("cvv") ||
            input.name.toLowerCase().includes("csc") ||
            input.placeholder.toLowerCase().includes("cvv") ||
            input.placeholder.toLowerCase().includes("csc")
          ) {
            input.value = geraCVV();
          } else if (
            input.id.toLowerCase().includes("mes") ||
            input.id.toLowerCase().includes("month") ||
            input.name.toLowerCase().includes("mes") ||
            input.name.toLowerCase().includes("month") ||
            input.placeholder.toLowerCase().includes("mes") ||
            input.placeholder.toLowerCase().includes("month")
          ) {
            input.value = geraMes();
          } else if (
            input.id.toLowerCase().includes("ano") ||
            input.id.toLowerCase().includes("year") ||
            input.name.toLowerCase().includes("ano") ||
            input.name.toLowerCase().includes("year") ||
            input.placeholder.toLowerCase().includes("ano") ||
            input.placeholder.toLowerCase().includes("year")
          ) {
            input.value = geraAno();
          }
        } else if (
          input.id.toLowerCase().includes("email") ||
          input.name.toLowerCase().includes("email") ||
          input.placeholder.toLowerCase().includes("email") ||
          input.type === "email"
        ) {
          input.value = geraEmail();
        } else if (
          input.id.toLowerCase().includes("senha") ||
          input.id.toLowerCase().includes("password") ||
          input.name.toLowerCase().includes("senha") ||
          input.name.toLowerCase().includes("password") ||
          input.placeholder.toLowerCase().includes("senha") ||
          input.placeholder.toLowerCase().includes("password") ||
          input.type === "password"
        ) {
          input.value = geraSenha();
        } else if (
          input.id.toLowerCase().includes("quantidade") ||
          input.id.toLowerCase().includes("amount") ||
          input.id.toLowerCase().includes("qtd") ||
          input.id.toLowerCase().includes("quantity") ||
          input.id.toLowerCase().includes("numero") ||
          input.id.toLowerCase().includes("number") ||
          input.name.toLowerCase().includes("quantidade") ||
          input.name.toLowerCase().includes("amount") ||
          input.name.toLowerCase().includes("qtd") ||
          input.name.toLowerCase().includes("quantity") ||
          input.name.toLowerCase().includes("numero") ||
          input.name.toLowerCase().includes("number") ||
          input.placeholder.toLowerCase().includes("quantidade") ||
          input.placeholder.toLowerCase().includes("amount") ||
          input.placeholder.toLowerCase().includes("qtd") ||
          input.placeholder.toLowerCase().includes("quantity") ||
          input.placeholder.toLowerCase().includes("numero") ||
          input.placeholder.toLowerCase().includes("number") ||
          input.type === "number"
        ) {
          input.value = geraQuantidade(input.maxLength);
        } else if (
          input.id.toLowerCase().includes("date") ||
          input.id.toLowerCase().includes("data") ||
          input.name.toLowerCase().includes("date") ||
          input.name.toLowerCase().includes("data") ||
          input.placeholder.toLowerCase().includes("date") ||
          input.placeholder.toLowerCase().includes("data") ||
          input.type === "date"
        ) {
          input.value = geraData();
        } else if (
          input.id.toLowerCase().includes("telefone") ||
          input.id.toLowerCase().includes("tel") ||
          input.name.toLowerCase().includes("telefone") ||
          input.name.toLowerCase().includes("tel") ||
          input.placeholder.toLowerCase().includes("telefone") ||
          input.placeholder.toLowerCase().includes("tel") ||
          input.type === "tel"
        ) {
          input.value = geraTelefone();
        } else if (
          input.id.toLowerCase().includes("url") ||
          input.id.toLowerCase().includes("link") ||
          input.name.toLowerCase().includes("url") ||
          input.name.toLowerCase().includes("link") ||
          input.placeholder.toLowerCase().includes("url") ||
          input.placeholder.toLowerCase().includes("link") ||
          input.type === "url"
        ) {
          input.value = geraURL();
        } else if (
          input.id.toLowerCase().includes("checkbox") ||
          input.name.toLowerCase().includes("checkbox") ||
          input.placeholder.toLowerCase().includes("checkbox") ||
          input.type === "checkbox"
        ) {
          input.checked = true;
        } else if (
          input.id.toLowerCase().includes("radio") ||
          input.name.toLowerCase().includes("radio") ||
          input.placeholder.toLowerCase().includes("radio") ||
          input.type === "radio"
        ) {
          input.checked = true;
        } else if (
          input.id.toLowerCase().includes("range") ||
          input.name.toLowerCase().includes("range") ||
          input.placeholder.toLowerCase().includes("range") ||
          input.type === "range"
        ) {
          input.value = geraRange(input.min, input.max);
        } else if (
          input.id.toLowerCase().includes("color") ||
          input.id.toLowerCase().includes("cor") ||
          input.name.toLowerCase().includes("color") ||
          input.name.toLowerCase().includes("cor") ||
          input.placeholder.toLowerCase().includes("color") ||
          input.placeholder.toLowerCase().includes("cor") ||
          input.type === "color"
        ) {
          input.value = geraCor();
        } else if (input.type === "text") {
          if (
            input.id.toLowerCase().includes("cep") ||
            input.id.toLowerCase().includes("zip") ||
            input.id.toLowerCase().includes("postal") ||
            input.name.toLowerCase().includes("cep") ||
            input.name.toLowerCase().includes("zip") ||
            input.name.toLowerCase().includes("postal") ||
            input.placeholder.toLowerCase().includes("cep") ||
            input.placeholder.toLowerCase().includes("zip") ||
            input.placeholder.toLowerCase().includes("postal")
          ) {
            input.value = geraCEP();
          } else if (
            input.id.toLowerCase().includes("cpf") ||
            input.name.toLowerCase().includes("cpf") ||
            input.placeholder.toLowerCase().includes("cpf")
          ) {
            input.value = geraCPF();
          } else if (
            input.id.toLowerCase().includes("cnpj") ||
            input.name.toLowerCase().includes("cnpj") ||
            input.placeholder.toLowerCase().includes("cnpj")
          ) {
            input.value = geraCNPJ();
          } else if (
            input.id.toLowerCase().includes("rg") ||
            input.name.toLowerCase().includes("rg") ||
            input.placeholder.toLowerCase().includes("rg")
          ) {
            input.value = geraRG();
          } else if (
            input.id.toLowerCase().includes("estado") ||
            input.id.toLowerCase().includes("uf") ||
            input.id.toLowerCase().includes("state") ||
            input.name.toLowerCase().includes("estado") ||
            input.name.toLowerCase().includes("uf") ||
            input.name.toLowerCase().includes("state") ||
            input.placeholder.toLowerCase().includes("estado") ||
            input.placeholder.toLowerCase().includes("uf") ||
            input.placeholder.toLowerCase().includes("state")
          ) {
            input.value = geraEstado();
          } else {
            input.value = geraTexto();
          }
        } else {
          input.value = geraTexto();
        }
      });
    };

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fillInputs,
    });
  });
