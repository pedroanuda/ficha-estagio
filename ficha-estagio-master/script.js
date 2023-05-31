const tabelaASerPreenchida = document.querySelector(".tabela_presenca tbody");
const anoAtual = new Date().getFullYear();

function gerarFileiraFrequencia() {
    let retorno = "";

    for (let i = 1; i <= 31; i++) {
        retorno += `
        <div class="freq_box">
            <span>${i}</span>
            <select>
                <option value=""></option>
                <option value="c">C</option>
                <option value="f">F</option>
                <option value="x">X</option>
                <option value="l">L</option>
                <option value="r">R</option>
            </select>
        </div>
        `
    }

    return retorno;
}

for (let i = 0; i < 12; i++) {
    tabelaASerPreenchida.innerHTML += `
    <tr>
        <td>
            <select class="campo_tabela">
                <option value=""></option>
                <option value="janeiro">Janeiro</option>
                <option value="fevereiro">Fevereiro</option>
                <option value="marco">Março</option>
                <option value="abril">Abril</option>
                <option value="maio">Maio</option>
                <option value="junho">Junho</option>
                <option value="julho">Julho</option>
                <option value="agosto">Agosto</option>
                <option value="setembro">Setembro</option>
                <option value="outubro">Outubro</option>
                <option value="novembro">Novembro</option>
                <option value="dezembro">Dezembro</option>
            </select>
        </td>
        <td>
            <input class="campo_tabela" type="number" min="1980" max="${anoAtual}">
        </td>
        <td class="freq_fileira">
            ${gerarFileiraFrequencia()}
        </td>
        <td>
            <input class="campo_tabela dias_uteis" type="number" min="0" max="31">
        </td>
        <td>
            <input class="campo_tabela presenca" type="number" min="0" max="31">
        </td>
        <td>
            <input class="campo_tabela horas">
        </td>
    </tr>
    `
}

const diasUteis = document.querySelectorAll(".dias_uteis");
const presencas = document.querySelectorAll(".presenca");
const horas = document.querySelectorAll(".horas");
const totalDiasUteis = document.querySelector("#total_diasuteis input");
const totalPresencas = document.querySelector("#total_presencas input");
const totalHoras = document.querySelector("#total_horas input");

function converterNumero(num) {
    let out = parseInt(num);
    if (!isNaN(out)) return out;
    
    return 0;
}

function somaValores(valores) {
    switch (valores) {
        case "diasUteis":
            let diasUteisSoma = 0;
            diasUteis.forEach(dias => diasUteisSoma += converterNumero(dias.value));
            totalDiasUteis.value = diasUteisSoma ? diasUteisSoma : "";
            break;
        case "presenca":
            let presencaSoma = 0;
            presencas.forEach(presenca => presencaSoma += converterNumero(presenca.value));
            totalPresencas.value = presencaSoma ? presencaSoma : "";
            break;
        case "horas":
            let horasSoma = 0;
            horas.forEach(hora => horasSoma += converterNumero(hora.value));
            totalHoras.value = horasSoma ? horasSoma : "";
            break;
        default:
            break;
    }
}

diasUteis.forEach(campo => campo.addEventListener("change", e => somaValores("diasUteis")));
presencas.forEach(campo => campo.addEventListener("change", e => somaValores("presenca")));
horas.forEach(campo => campo.addEventListener("change", e => somaValores("horas")));