import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Step1 } from "../../components/templates/RegisterPageTemplate/step1";
import { Step2 } from "../../components/templates/RegisterPageTemplate/step2";
import { Step3 } from "../../components/templates/RegisterPageTemplate/step3";
import { Step4 } from "../../components/templates/RegisterPageTemplate/step4";
import { createUser } from "../../services/api";
import { mapFormDataToAPI } from "../../utils/mappers";

const initialState = {
  nome: "",
  dataNascimento: "",
  cpf: "",
  apelido: "",
  genero: "",
  email: "",
  telefone: "",
  estado: "",
  pais: ""
};

export const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = mapFormDataToAPI(formData);
      console.log("Payload enviado para API:", payload);
      console.log("FormData original:", formData);
      await createUser(payload);
      alert("Usuário cadastrado com sucesso!");
      setStep(1);
      setFormData(initialState);
      navigate("/users");
    } catch (e) {
      console.error("Erro ao criar usuário:", e);
      setError(e?.message || "Erro ao cadastrar usuário");
      alert(e?.message || "Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} onChange={handleChange} onNext={handleNext} />;
    case 2:
      return <Step2 formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />;
    case 3:
      return <Step3 formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />;
    case 4:
      return <Step4 formData={formData} onChange={handleChange} onBack={handleBack} onSubmit={handleSubmit} loading={loading} error={error} />;
    default:
      return null;
  }
};
