

class FormatNumber {

    static toBRLCurrency(value) {
       return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
}

export default FormatNumber;