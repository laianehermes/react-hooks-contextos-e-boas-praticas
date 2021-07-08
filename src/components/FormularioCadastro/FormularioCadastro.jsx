import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(() => {
    if (etapaAtual === formulario.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant='h5'>Obrigado pelo Cadastro!</Typography>,
  ];

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo(dados) {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
  {formulario[etapaAtual]}
  </>;
}

export default FormularioCadastro;
