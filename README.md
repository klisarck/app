# Plataforma de Capacitación Integral y Control de Estudios de Cadetes

Aplicación web automatizada y protegida diseñada para la gestión del plan de estudios y el progreso de conocimientos militares.

## 1. Paridad de Entornos
Las variables de entorno necesarias para levantar el proyecto de forma local se detallan en el archivo `.env.example`. Las credenciales reales de conexión con el proveedor Cloud se encuentran protegidas.

## 2. Arquitectura del Sistema (Doc-as-Code)
A continuación se presenta el flujo interactivo de la aplicación renderizado nativamente mediante Mermaid.js:

```mermaid
graph TD
    User((Usuario / Administrador)) -->|Interactúa| FE[Frontend: React + Vite + TypeScript]
    FE -->|Rastrea Estados| State[Gestión de Estado Local]
    FE -->|Consultas Seguras API| SB[(Cloud Backend: Supabase)]
    SB -->|Módulo 1| DB1[Autenticación de Cadetes]
    SB -->|Módulo 2| DB2[Base de Datos: Plan de Estudios]
    SB -->|Módulo 3| DB3[Bitácora de Progreso y Notas] lll
