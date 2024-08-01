document
  .getElementById("meuBotao")
  .addEventListener("click", async function () {
    const fillInputs = () => {
      const inputs = document.querySelectorAll("input");
      const selects = document.querySelectorAll("select");

      selects.forEach((select) => {
        if (select.options.length > 0) {
          select.selectedIndex = 0;
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
            input.value = "1234 5678 1234 5678";
            //TODO geraNumeroCartao();
          } else if (
            input.id.toLowerCase().includes("validade") ||
            input.id.toLowerCase().includes("validity") ||
            input.name.toLowerCase().includes("validade") ||
            input.name.toLowerCase().includes("validity") ||
            input.placeholder.toLowerCase().includes("validade") ||
            input.placeholder.toLowerCase().includes("validity")
          ) {
            input.value = "12/23";
            // TODO geraValidade();
          } else if (
            input.id.toLowerCase().includes("cvv") ||
            input.name.toLowerCase().includes("cvv") ||
            input.placeholder.toLowerCase().includes("cvv")
          ) {
            input.value = "123";
            // TODO geraCVV();
          } else if (
            input.id.toLowerCase().includes("nome") ||
            input.id.toLowerCase().includes("name") ||
            input.name.toLowerCase().includes("nome") ||
            input.name.toLowerCase().includes("name") ||
            input.placeholder.toLowerCase().includes("nome") ||
            input.placeholder.toLowerCase().includes("name")
          ) {
            input.value = "Fulano de Tal";
            // TODO geraNome();
          } else if (
            input.id.toLowerCase().includes("bandeira") ||
            input.id.toLowerCase().includes("flag") ||
            input.name.toLowerCase().includes("bandeira") ||
            input.name.toLowerCase().includes("flag") ||
            input.placeholder.toLowerCase().includes("bandeira") ||
            input.placeholder.toLowerCase().includes("flag")
          ) {
            input.value = "Visa";
            // TODO geraBandeira();
          } else if (
            input.id.toLowerCase().includes("parcelas") ||
            input.id.toLowerCase().includes("installments") ||
            input.name.toLowerCase().includes("parcelas") ||
            input.name.toLowerCase().includes("installments") ||
            input.placeholder.toLowerCase().includes("parcelas") ||
            input.placeholder.toLowerCase().includes("installments")
          ) {
            input.value = 12;
            // TODO geraParcelas();
          } else if (
            input.id.toLowerCase().includes("cvv") ||
            input.name.toLowerCase().includes("cvv") ||
            input.placeholder.toLowerCase().includes("cvv")
          ) {
            input.value = "123";
            // TODO geraCVV();
          }
        } else if (
          input.id.toLowerCase().includes("email") ||
          input.name.toLowerCase().includes("email") ||
          input.placeholder.toLowerCase().includes("email") ||
          input.type === "email"
        ) {
          input.value = "exemplo@dominio.com";
          // TODO geraEmail();
        } else if (
          input.id.toLowerCase().includes("senha") ||
          input.id.toLowerCase().includes("password") ||
          input.name.toLowerCase().includes("senha") ||
          input.name.toLowerCase().includes("password") ||
          input.placeholder.toLowerCase().includes("senha") ||
          input.placeholder.toLowerCase().includes("password") ||
          input.type === "password"
        ) {
          input.value = "senha123";
          // TODO geraSenha();
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
          input.value = 123;
          // TODO geraQuantidade(input.maxLength)
        } else if (
          input.id.toLowerCase().includes("date") ||
          input.id.toLowerCase().includes("data") ||
          input.name.toLowerCase().includes("date") ||
          input.name.toLowerCase().includes("data") ||
          input.placeholder.toLowerCase().includes("date") ||
          input.placeholder.toLowerCase().includes("data") ||
          input.type === "date"
        ) {
          input.value = "2023-01-01";
          // TODO geraData();
        } else if (
          input.id.toLowerCase().includes("telefone") ||
          input.id.toLowerCase().includes("tel") ||
          input.name.toLowerCase().includes("telefone") ||
          input.name.toLowerCase().includes("tel") ||
          input.placeholder.toLowerCase().includes("telefone") ||
          input.placeholder.toLowerCase().includes("tel") ||
          input.type === "tel"
        ) {
          input.value = "+55 11 1234-5678";
          // TODO geraTelefone();
        } else if (
          input.id.toLowerCase().includes("url") ||
          input.id.toLowerCase().includes("link") ||
          input.name.toLowerCase().includes("url") ||
          input.name.toLowerCase().includes("link") ||
          input.placeholder.toLowerCase().includes("url") ||
          input.placeholder.toLowerCase().includes("link") ||
          input.type === "url"
        ) {
          input.value = "https://www.exemplo.com";
          // TODO geraURL();
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
          input.value = 50;
          // TODO geraRange(input.max, input.min);
        } else if (
          input.id.toLowerCase().includes("color") ||
          input.id.toLowerCase().includes("cor") ||
          input.name.toLowerCase().includes("color") ||
          input.name.toLowerCase().includes("cor") ||
          input.placeholder.toLowerCase().includes("color") ||
          input.placeholder.toLowerCase().includes("cor") ||
          input.type === "color"
        ) {
          input.value = "#ff0000";
          // TODO geraCor();
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
            input.value = "88070-150";
            // TODO geraCEP();
          } else if (
            input.id.toLowerCase().includes("cpf") ||
            input.name.toLowerCase().includes("cpf") ||
            input.placeholder.toLowerCase().includes("cpf")
          ) {
            input.value = "123.456.789-09";
            // TODO geraCPF();
          } else if (
            input.id.toLowerCase().includes("cnpj") ||
            input.name.toLowerCase().includes("cnpj") ||
            input.placeholder.toLowerCase().includes("cnpj")
          ) {
            input.value = "12.345.678/0001-01";
            // TODO geraCNPJ();
          } else if (
            input.id.toLowerCase().includes("rg") ||
            input.name.toLowerCase().includes("rg") ||
            input.placeholder.toLowerCase().includes("rg")
          ) {
            input.value = "12.345.678-9";
            // TODO geraRG();
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
            input.value = "SC";
            // TODO geraEstado();
          } else {
            input.value = "lorem ipsum";
            // TODO geraNumero();
          }
        } else {
          input.value = "Se ta lendo isso é pq deu merda, arruma ai";
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
