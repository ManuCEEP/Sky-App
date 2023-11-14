import logo from '../../assets/logoSky.png';

import cadeiraDeRodas from '../../assets/frutas/cadeira_de_rodas.png';
import aparelhoAuditivo from '../../assets/frutas/aparelho_auditivo.png';
import pernaMecanica from '../../assets/frutas/perna_mecanica.png';
import oculosFalante from '../../assets/frutas/oculos_falante.png';
import canetFalante from '../../assets/frutas/caneta_falante.png';
import guardaChuva from '../../assets/frutas/guarda-chuva-para-cadeira-de-rodas.png';
import mesinhaPortatil from '../../assets/frutas/mesinhaPortatil.png';
import cestaAdaptada from '../../assets/frutas/cestaAdaptada.png';
import guinchoEletrico from '../../assets/frutas/guinchoElevadorEletrico.png';
import almofadaErgonomica from '../../assets/frutas/almofadaErgonomica.png';

const cesta = {
  topo: {
    titulo: "Detalhes dos aparelhos",
  },
  detalhes: {
    nome: "Carrinho",
    logoFazenda: logo,
    nomeFazenda: "SKY The Tecnology of Heaven",
    descricao: "Aparelhos para pessoas com deficiências, com tecnologia avançada, para seu melhor conforto",
    preco: "R$ 13.015,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens do carrinho",
    lista: [
      {
        nome: "Cadeira de rodas             R$2300,00",
        imagem: cadeiraDeRodas,
      },
      {
        nome: "Aparelho Auditivo            R$8450,00",
        imagem: aparelhoAuditivo,
      },
      {
        nome: "Perna Mecânica               R$450,00",
        imagem: pernaMecanica,
      },
      {
        nome: "Óculos Falante                 R$240,00",
        imagem: oculosFalante,
      },
      {
        nome: "Caneta Falante                 R$110,00",
        imagem: canetFalante,
      },
      {
        nome: "Guarda Chuva                   R$25,00 ",
        imagem: guardaChuva,
      },
      {
        nome: "Mesinha Portátil               R$30,00",
        imagem: mesinhaPortatil,
      },
      {
        nome: "Cesta Frontal                    R$35,00",
        imagem: cestaAdaptada,
      },
      {
        nome: "Guincho Elétrico               R$1360,00",
        imagem: guinchoEletrico,
      },
      {
        nome: "Almofada Ergonômica      R$15,00",
        imagem: almofadaErgonomica,
      },
    ]
  }
}

export default cesta;