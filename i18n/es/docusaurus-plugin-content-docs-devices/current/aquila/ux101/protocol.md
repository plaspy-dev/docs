---
slug: /aquila/ux101/protocol
id: ux101-protocol
sidebar_label: Protocol
title: Aquila - UX101 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Aquila UX101 y cómo se comunica con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - protocolo Aquila UX101
  - Aquila UX101 GPS
  - Aquila UX101 Plaspy
  - protocolo de rastreo UX101
  - protocolo de rastreador GPS Aquila
  - rastreo de vehículos UX101
  - gestión de flotas UX101
  - compatibilidad de dispositivos Plaspy
  - protocolo de comunicación UX101
  - compatibilidad GPS Aquila
---

# Aquila - Protocolo UX101

Esta página explica el contexto público del protocolo para usar el rastreador Aquila UX101 con Plaspy. Se centra en cómo el dispositivo comunica con los servidores de Plaspy, qué ajustes de conexión se emplean en despliegues habituales y las consideraciones prácticas para obtener reportes y monitoreo fiables sin exponer detalles privados de implementación del fabricante.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía ofrece un contexto general y no sensible para facilitar la integración y resolución de problemas en instalaciones UX101 que reportan a Plaspy.

## Visión general del protocolo

El protocolo de comunicación del UX101 regula cómo el dispositivo envía telemetría, identidad e información de estado a un servidor remoto como Plaspy. En términos prácticos, el protocolo garantiza que el rastreador pueda transmitir posición GPS, señales del vehículo y diagnósticos básicos para que Plaspy presente datos de ubicación y eventos útiles a los usuarios.

- Permite el envío seguro de ubicación, hora, velocidad y estado de encendido del UX101 a un servidor remoto.
- Transporta telemetría de entradas analógicas y digitales, y notificaciones de estado que Plaspy puede mapear a canales del dispositivo.
- Soporta reportes periódicos y actualizaciones por eventos para que la plataforma reciba datos de posición en vivo e históricos.
- Permite que el dispositivo se identifique para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Funciona con las características de hardware del UX101 como GPS interno, antenas GSM y sensores de alimentación y movimiento integrados para ofrecer datos de rastreo significativos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador usado por el dispositivo que reporta. Para la mayoría de usuarios esto significa que el equipo solo necesita configurarse para reportar al endpoint de Plaspy y la plataforma se encargará del resto.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma escucha en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reportan al endpoint, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.
- Cuando un UX101 reporta correctamente al endpoint de Plaspy, la plataforma mapea la telemetría entrante al registro del dispositivo y muestra datos de ubicación y eventos.
- Si un dispositivo utiliza un comportamiento de firmware no estándar, la detección y el mapeo pueden requerir validación frente a la documentación del fabricante.

## Transporte y contexto de conexión

El UX101 puede comunicarse con un servidor backend usando transporte IP estándar y puede configurarse para usar UDP o TCP según la configuración del equipo y el firmware. Plaspy acepta ambos tipos de transporte en un único puerto compartido para simplificar la configuración de los dispositivos.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy escucha y acepta tráfico UDP y TCP en el puerto 8888.
- Todos los dispositivos compatibles con Plaspy usan el mismo valor de puerto para reducir la complejidad de configuración en una flota mixta.
- Elija UDP o TCP en el dispositivo según la capacidad del firmware y el comportamiento deseado respecto a retransmisiones y entrega.
- Los operadores de red deben asegurarse de que el APN de datos móviles y las reglas de puertos salientes permitan tráfico al endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, campos opcionales y comportamiento; confirme la versión de firmware del UX101 al validar compatibilidad.
- Revisiones de hardware o módulos accesorios pueden alterar las entradas disponibles y cómo se reportan esas entradas a Plaspy.
- La elección del transporte entre UDP y TCP puede afectar la confiabilidad y el comportamiento de retransmisión; verifique qué soporta el firmware específico.
- Las herramientas de configuración del fabricante o los SDKs suministrados con el UX101 pueden simplificar apuntar el dispositivo a d.plaspy.com o a la IP del servidor.
- La detección de Plaspy es robusta para comportamientos de reporte comunes, pero variantes inusuales o personalizadas del protocolo por parte del fabricante pueden requerir verificación adicional.
- Valide siempre el reporte del dispositivo en una prueba controlada antes de desplegar a gran escala para asegurarse de que la telemetría esperada llega a Plaspy.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el UX101 ayuda a instaladores y gerentes de flota a configurar los dispositivos correctamente, resolver problemas de conectividad y confirmar que la telemetría relevante llega a Plaspy para monitoreo e informes.

- Agiliza la configuración inicial al asegurar que el dispositivo apunte al endpoint de Plaspy y use el transporte esperado.
- Reduce el tiempo de resolución de problemas al aclarar dónde revisar por fallos de red o de configuración cuando no llegan datos.
- Ayuda a elegir la opción de transporte y el intervalo de reporte adecuados para una flota según necesidades de confiabilidad y consumo de datos.
- Orienta los pasos de validación para actualizaciones de firmware y cambios de hardware que puedan afectar el reporte.
- Asegura que el mapeo de eventos como encendido o estados de entrada sea consistente entre el dispositivo y la plataforma Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Aquila UX101 con Plaspy ofrece una forma sencilla de recopilar datos de ubicación y estado del vehículo con una configuración mínima. El endpoint único de Plaspy y la detección automática de protocolo reducen la carga de configuración por dispositivo para organizaciones que gestionan flotas mixtas o múltiples modelos de hardware.

El enfoque de Plaspy hacia la compatibilidad y la arquitectura de puerto compartido facilita que los despliegues con UX101 sean predecibles y escalables. Para saber más sobre Plaspy y cómo funciona con dispositivos como el Aquila UX101, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación específicos del dispositivo pueden cambiar con el tiempo, así que verifique la documentación y las notas de firmware más recientes con el fabricante en https://www.itriangle.in/.
