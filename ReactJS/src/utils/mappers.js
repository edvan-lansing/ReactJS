import { onlyNumbers } from "./formatters";

/**
 * Converte data de YYYY-MM-DD para dd-MM-yyyy
 * @param {string} date - Data no formato YYYY-MM-DD
 * @returns {string} Data no formato dd-MM-yyyy
 */
function convertDateFormat(date) {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}

/**
 * Converte dados do formulário (português) para o formato da API (inglês)
 * @param {Object} formData - Dados do formulário com campos em português
 * @returns {Object} Dados no formato esperado pela API
 */
export function mapFormDataToAPI(formData) {
  const payload = {
    name: formData.nome || "",
    birthDate: convertDateFormat(formData.dataNascimento), // Converte YYYY-MM-DD para dd-MM-yyyy
    cpf: formData.cpf ? onlyNumbers(formData.cpf) : "", // Remove máscara
    nickname: formData.apelido || "",
    gender: formData.genero || "",
    email: formData.email || "",
    telephone: formData.telefone ? onlyNumbers(formData.telefone) : "", // Remove máscara
    state: formData.estado || "",
    country: formData.pais || "",
  };
  
  console.log("Mapper - formData recebido:", formData);
  console.log("Mapper - payload gerado:", payload);
  
  return payload;
}

/**
 * Converte dados da API (inglês) para o formato do formulário (português)
 * @param {Object} apiData - Dados da API com campos em inglês
 * @returns {Object} Dados no formato do formulário
 */
export function mapAPIToFormData(apiData) {
  // Converte dd-MM-yyyy para YYYY-MM-DD para o input type="date"
  const convertToInputDate = (date) => {
    if (!date) return "";
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
  };
  
  return {
    nome: apiData.name,
    dataNascimento: convertToInputDate(apiData.birthDate),
    cpf: apiData.cpf,
    apelido: apiData.nickname,
    genero: apiData.gender,
    email: apiData.email,
    telefone: apiData.telephone,
    estado: apiData.state,
    pais: apiData.country,
  };
}
