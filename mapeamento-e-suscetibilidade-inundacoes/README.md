# 🌊 Mapeamento de Suscetibilidade a Inundações com Google Earth Engine

## 📦 Assets públicos utilizados no GEE

Os seguintes assets foram utilizados e estão disponíveis publicamente:

- 🗺️ **Municípios do Brasil - IBGE 2024**  
  `users/malu_de_souza/BR_Municipios_2024`

- 🛣️ **Estradas - OpenStreetMap (Sul do Brasil)**  
  `users/malu_de_souza/sul-latest-free-roads`

> ⚠️ Caso deseje reproduzir este projeto, certifique-se de importar esses assets ou substituí-los por equivalentes públicos na sua conta GEE.

---

## 🧾 Resumo do Projeto

Este trabalho apresenta uma metodologia para o **mapeamento da suscetibilidade a inundações** utilizando o **Google Earth Engine (GEE)**.  
A análise considera diversos fatores de suscetibilidade:

- Índice Topográfico de Umidade (TWI)  
- Elevação  
- Uso e cobertura da terra (LULC)  
- Declividade  
- Precipitação  
- Densidade de drenagem  
- Índice de Vegetação por Diferença Normalizada (NDVI)  
- Distância de rios e estradas  
- Tipo de solo  

A ponderação da importância de cada fator foi realizada através do método do **Processo Analítico Hierárquico (AHP)**.  

O objetivo principal é **identificar e classificar áreas de acordo com o seu grau de risco de inundação**, fornecendo subsídios para o **planejamento e a gestão territorial**.  

A implementação no GEE permitiu a análise eficiente de grandes volumes de dados geoespaciais, resultando na geração de um **mapa de suscetibilidade com diferentes níveis de risco**.

---

## 🗺️ Resultado

![Mapa final](results/mapa_final.png)

📄 [Relatório completo (PDF)](docs/relatorio.pdf)  
💻 [Script principal (main.js)](main.js)

---

## 🧠 Palavras-chave

> **Suscetibilidade a Inundações · Google Earth Engine · Sensoriamento Remoto · Processo Analítico Hierárquico · AHP**

---

## 📍 Autora

**Malu de Souza Bittencourt**  
Desenvolvedora Júnior | Estudante de Análise e Desenvolvimento de Sistemas  
[LinkedIn](https://www.linkedin.com/in/malu-de-souza-5b718625a)

---

## 📌 Observações

- O repositório **não contém arquivos de dados pesados** (>100 MB) devido às limitações do GitHub.  
- Para reproduzir totalmente os resultados, é necessário importar os assets indicados para sua conta do GEE.  
- Apenas o **script principal (`main.js`)** foi disponibilizado neste repositório para fins de portfólio.  
