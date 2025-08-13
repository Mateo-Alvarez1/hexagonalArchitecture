# 🛡️ Hexagonal Architecture

Este repositorio documenta mi proceso de aprendizaje sobre la **Arquitectura Hexagonal** (Ports and Adapters).  
Aquí encontrarás conceptos clave, ventajas y recursos para profundizar en este patrón de diseño.

## 📑 Índice

- [🛡️ Hexagonal Architecture](#️-hexagonal-architecture)
  - [📑 Índice](#-índice)
  - [🏛️ ¿Qué es la Arquitectura Hexagonal?](#️-qué-es-la-arquitectura-hexagonal)
  - [🧩 Conceptos Clave](#-conceptos-clave)
  - [💡 Ventajas](#-ventajas)
  - [📚 Recursos de Aprendizaje](#-recursos-de-aprendizaje)
  - [📊 Diagrama de la Arquitectura](#-diagrama-de-la-arquitectura)

## 🏛️ ¿Qué es la Arquitectura Hexagonal?

La arquitectura hexagonal es un patrón de diseño que separa claramente el **núcleo de la aplicación** de sus mecanismos de entrada/salida (bases de datos, interfaces de usuario, APIs, etc.), lo que facilita la **mantenibilidad** y la **escalabilidad**.

## 🧩 Conceptos Clave

- **Dominio**: ❤️ El corazón de la lógica de negocio.
- **Puertos**: 🔌 Interfaces que definen cómo interactuar con el dominio.
- **Adaptadores**: 🛠️ Implementaciones concretas de los puertos para tecnologías específicas.
- **Independencia de frameworks**: 🚀 El dominio no depende de detalles técnicos externos.

## 💡 Ventajas

- ✅ Facilita testing unitario.
- ✅ Hace que el dominio sea independiente de frameworks y librerías.
- ✅ Permite cambiar adaptadores (DB, UI, APIs) sin tocar la lógica de negocio.
- ✅ Mejora mantenibilidad y escalabilidad.

## 📚 Recursos de Aprendizaje

- [Artículo: Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Curso: Clean Architecture con ejemplos](https://www.youtube.com/watch?v=6SGIFVJ5Izs)
- Libros, blogs y repositorios con ejemplos prácticos en distintos lenguajes.

## 📊 Diagrama de la Arquitectura

      +-------------------+    +--------------------+    +--------------------+
      |    Adaptadores    |    | Puertos,interfaces |    |     Dominio        |
      |                   + -> +  de comunicacion   + -> + Logica de negocio  +
      | (UI, DB, APIs…)   |    | con el dominio     |    |                    |
      +---------+---------+    +--------------------+    +--------------------+
