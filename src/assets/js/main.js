import '../css/style.css';
import GeraCPF from './modules/GeraCPF';


(function(){
    const resultado = document.querySelector('.resultado');
    resultado.innerText = GeraCPF.geraNovoCpf();
}())
