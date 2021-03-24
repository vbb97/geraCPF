export default class ValidaCPF{
    constructor(cpf){
        this.cpf = cpf;
    }
    static valida() {
        const cpfLimpo = this.cpf.replace(/\D+/g, '');
        if(this.isSequencia(cpfLimpo)) {
            return 'é sequência';
        }
        const cpfParcial = this.tiraDigito(cpfLimpo);
        const digito1 = this.cpfDigito(cpfParcial);
        const digito2 = this.cpfDigito(cpfParcial + digito1);
        return (cpfParcial + digito1 + digito2) === cpfLimpo;
        
    }

    static isSequencia(cpfLimpo) {
        return cpfLimpo === cpfLimpo[0].repeat(cpfLimpo.length);
    }

    static tiraDigito(cpfLimpo) {
        return cpfLimpo.slice(0, -2);
    }

    static cpfLista(cpfParcial) {
        return Array.from(cpfParcial);
    }

    static cpfSoma(cpfArray) {
        let regressivo = cpfArray.length + 1;
        const soma = cpfArray.reduce((ac, valor) => {
            ac += (regressivo * Number(valor));
            regressivo--;
            return ac;
        },0)
        return soma;
    }

    static cpfDigito(cpfParcial) {
        const cpfArray = this.cpfLista(cpfParcial);
        const valor = this.cpfSoma(cpfArray);
        const digito = 11 - (valor % 11);
        return (digito > 9 ? 0 : digito)
    }
}