---
slug: /arknav/rx_12/protocol
id: rx_12-protocol
sidebar_label: Protocol
title: ArkNav - RX-12 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para conectar el rastreador ArkNav RX-12 a Plaspy con ajustes compartidos y contexto de transporte
keywords:
  - protocolo ArkNav RX-12
  - protocolo GPS ArkNav RX-12
  - protocolo de comunicación ArkNav RX-12
  - protocolo de seguimiento ArkNav RX-12
  - rastreador GPS ArkNav
  - compatibilidad RX-12 con Plaspy
  - protocolo de dispositivo Plaspy
  - protocolo de seguimiento de vehículos
  - rastreador GPS LTE-M
  - rastreador para gestión de flotas
---

# ArkNav - Protocolo RX-12

Esta página describe el contexto público del protocolo para usar el rastreador ArkNav RX-12 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos no sensibles y neutrales respecto a la implementación, de modo que integradores y operadores de flota comprendan la conexión, el transporte y las consideraciones de compatibilidad necesarias para despliegues confiables.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware del RX-12, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general e invita a verificar con las hojas de datos y el firmware de ArkNav.

## Visión general del protocolo

El protocolo de reporte del RX-12 es el mecanismo mediante el cual el rastreador se identifica, informa posición GNSS y telemetría, y entrega actualizaciones basadas en eventos a un backend como Plaspy. Para la compatibilidad con Plaspy, el contexto público se enfoca en los tipos de datos enviados y en cómo se establece la conexión, más que en detalles de formato binario de bajo nivel.

- Permite al RX-12 enviar posiciones GNSS, eventos del acelerómetro, estados de entradas/salidas y telemetría básica a Plaspy.
- Transporta reportes por eventos relacionados con velocidad, movimiento e ignición para reducir tiempo aire y conservar energía, manteniendo actualizaciones oportunas.
- Incluye identificadores e información de estado para que Plaspy pueda correlacionar mensajes entrantes con un rastreador registrado.
- Admite disparadores de gestión remota como configuración OTA y notificaciones de actualización de firmware que se manejan a través del flujo del fabricante.
- Proporciona un canal predecible para que Plaspy ingiera datos de posición y sensores para paneles, alertas e informes históricos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones en un endpoint común e identifica automáticamente el protocolo del rastreador en función del tráfico entrante y los detalles de registro del dispositivo. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy, siempre que el rastreador esté configurado para enviar datos al endpoint de Plaspy usando el transporte soportado.

- Plaspy escucha en un único puerto usado por todos los dispositivos para simplificar la configuración y las reglas de red.
- Cuando el RX-12 reporta a Plaspy usando los detalles de conexión publicados, Plaspy iguala el flujo entrante con un perfil de protocolo soportado.
- Normalmente los usuarios configuran el equipo para reportar a d.plaspy.com o a la IP del servidor y dejan la detección automática a Plaspy.
- Si un dispositivo no aparece, verifique la configuración de reporte, el APN y la cobertura celular antes de investigar ajustes de protocolo.
- La detección automática reduce pasos de configuración manual pero no reemplaza la verificación de credenciales correctas del dispositivo y la configuración del fabricante.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el RX-12 llega a Plaspy, más que el enmarcado interno de mensajes. El RX-12 soporta transportes celulares comunes y puede configurarse para usar UDP o TCP para comunicarse con el listener de Plaspy según la configuración del dispositivo y los requisitos de red.

- Los dispositivos pueden configurarse para enviar datos por UDP o TCP en el puerto 8888 según las necesidades del despliegue.
- Plaspy acepta conexiones dirigidas al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y NAT para implementaciones de flota.
- La selección de transporte puede afectar el comportamiento de entrega en áreas con cobertura deficiente; elija UDP por menor overhead y TCP cuando la fiabilidad de entrega sea prioritaria.
- Asegúrese de que el APN y el plan de servicio de la SIM permitan el transporte elegido y que el dispositivo esté configurado para apuntar al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware en unidades RX-12 pueden cambiar las opciones de reporte disponibles y la lógica de disparo de eventos; verifique la versión de firmware al validar el comportamiento.
- Revisiones de hardware o variantes regionales pueden modificar las bandas celulares soportadas o los accesorios de protección de potencia, y afectar el flujo de actualizaciones OTA.
- La configuración del lado del fabricante o el comportamiento de redes específicas de los operadores pueden influir en la rapidez con que los mensajes llegan a Plaspy.
- La elección del transporte importa para la semántica de entrega; pruebe UDP y TCP en su entorno para confirmar el comportamiento esperado.
- Valide los identificadores del dispositivo y cualquier paso de registro requerido para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Compare siempre el comportamiento observado con la hoja de datos de ArkNav y las notas de la versión de firmware para detalles específicos del modelo.

## Por qué es importante comprender el protocolo

Comprender de manera práctica el protocolo de comunicación del RX-12 ayuda a asegurar una configuración correcta, una resolución de problemas eficiente y una operación consistente a largo plazo con Plaspy. Conocer el papel del transporte, los disparadores de reporte y las variantes de firmware reduce el tiempo de integración y mejora el tiempo de actividad de los servicios de flota.

- Acelera el onboarding inicial del dispositivo al alinear la configuración de reporte con las expectativas del endpoint de Plaspy.
- Ayuda a priorizar pasos diagnósticos cuando un rastreador deja de reportar, como desajustes de transporte, problemas de APN o regresiones de firmware.
- Guía las pruebas de reporte por eventos para balancear actualizaciones oportunas y uso de datos para controlar costos de flota.
- Informa la decisión de usar TCP o UDP según la fiabilidad de la red y las necesidades de la aplicación.
- Apoya la planificación de flujos OTA y el seguimiento de compatibilidad de firmware en una flota heterogénea.

## Por qué usar Plaspy con este protocolo

Usar el RX-12 con Plaspy ofrece una combinación práctica de hardware robusto orientado a eventos y una plataforma en la nube que acepta un endpoint compartido para muchos tipos de dispositivos. Las organizaciones se benefician de ubicación en tiempo real, alertas por eventos y la ingesta de telemetría sin necesidad de gestionar la selección de protocolo en la mayoría de los casos, ya que Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.

Para saber más sobre Plaspy y cómo puede integrarse con dispositivos ArkNav, incluido el RX-12, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware y revisiones de hardware, revise la documentación oficial de ArkNav en https://www.arknavgps.com.tw/ para confirmar el comportamiento según su firmware y despliegue.
