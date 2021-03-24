import ValidaCPF from './ValidaCPF';
import Rand from './Rand';



export default class GeraCPF {
    static geraNovoCpf() {
        const cpfaleatorio = String(Rand(100000000, 999999998));
        const digito1 = ValidaCPF.cpfDigito(cpfaleatorio);
        const digito2 = ValidaCPF.cpfDigito(cpfaleatorio + digito1);
        const novoCpf = cpfaleatorio + digito1 + digito2;
        return this.formata(novoCpf);
    }

    static formata(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
}