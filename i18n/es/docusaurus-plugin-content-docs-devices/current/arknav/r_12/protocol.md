---
slug: /arknav/r_12/protocol
id: r_12-protocol
sidebar_label: Protocol
title: ArkNav - R-12 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador ArkNav R-12 y cómo se comunica con Plaspy para seguimiento fiable de flotas
keywords:
  - protocolo ArkNav R-12
  - protocolo GPS ArkNav R-12
  - compatibilidad ArkNav R-12 Plaspy
  - protocolo rastreador R-12
  - protocolo de comunicación R-12
  - integración rastreador ArkNav para vehículos
  - protocolo de dispositivo Plaspy
  - seguimiento de flotas ArkNav
  - protocolo de telemetría vehicular
  - rastreador R-12 LTE M
---

# ArkNav - Protocolo R-12

Esta página describe el contexto público del protocolo para usar el rastreador GPS ArkNav R-12 con Plaspy. Se centra en los aspectos de comunicación relevantes cuando el R-12 informa ubicación, estado y eventos al endpoint de Plaspy, y explica cómo esos mensajes alimentan la monitorización en tiempo real, las alertas y los flujos básicos de gestión de dispositivos.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y no sensible, recomendando siempre la verificación con la documentación del fabricante.

## Resumen del protocolo

El protocolo del ArkNav R-12 define cómo el dispositivo formatea y transmite posiciones GNSS, actualizaciones de estado y mensajes de evento a un servidor remoto. En una implementación con Plaspy, el resultado práctico es que el R-12 entrega ubicaciones y telemetría utilizables que Plaspy geolocaliza, marca con hora y presenta a los usuarios para monitoreo e informes.

- Envía reportes de posición periódicos para que Plaspy muestre la ubicación en mapas y calcule el historial de viajes
- Genera mensajes por evento, como estado de ignición, detección de movimiento y velocidad, que activan alertas y la lógica de trayectos
- Transmite estado del dispositivo y telemetría para la supervisión de salud, como estado de alimentación y datos de conmutación de conectividad
- Permite configuración remota y actualizaciones OTA cuando el dispositivo y el aprovisionamiento del fabricante admiten gestión remota
- Soporta entrega fiable en redes celulares para que los datos posicionales lleguen a Plaspy y sean utilizables casi en tiempo real

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente qué protocolo aplicar. En la mayoría de instalaciones no es necesario seleccionar manualmente el protocolo en Plaspy cuando el R-12 está configurado para reportar al servidor de Plaspy con los ajustes estándar de conexión.

- Los dispositivos deben estar configurados para reportar a d.plaspy.com o 54.85.159.138 usando el puerto 8888
- Plaspy acepta conexiones de dispositivos en el mismo puerto para todos los modelos compatibles y aplica detección automática del protocolo
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según la configuración del R-12 y las condiciones de la red
- Cuando el R-12 apunta correctamente al endpoint de Plaspy, normalmente no es necesario que el usuario seleccione un protocolo dentro de Plaspy
- Asegúrese de que el dispositivo esté aprovisionado con una SIM celular funcional y la configuración del operador para que pueda alcanzar el endpoint de Plaspy

## Transporte y contexto de conexión

El transporte de conexión es un detalle operativo que determina cómo el R-12 entrega sus mensajes a Plaspy. El R-12 soporta conectividad celular y utilizará el transporte configurado que mejor se adapte al firmware y al entorno de red.

- Los dispositivos R-12 pueden configurarse para usar UDP o TCP en el puerto 8888 para el reporte
- Plaspy escucha en el puerto 8888 para todas las conexiones de dispositivos, por lo que se usa el mismo puerto en distintos modelos de rastreadores
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o directamente a la IP 54.85.159.138
- Las conmutaciones de red celular, como LTE M primario y EGPRS como fallback, afectan la fiabilidad del enlace pero no el endpoint ni el puerto usados para reportar a Plaspy
- Consideraciones a nivel de red como APN del operador, reglas de firewall y NAT pueden afectar la conectividad al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes envía el R-12 y cómo se codifican los eventos; siempre verifique la versión de firmware al solucionar problemas
- Las revisiones de hardware y módulos opcionales pueden modificar entradas y salidas disponibles, por ejemplo control de inmovilizador o comportamiento de protección contra sobretensiones
- Las configuraciones del fabricante pueden cambiar la preferencia de transporte, por lo que confirme si sus unidades están configuradas para reportar por TCP o UDP
- Funciones como actualizaciones OTA o configuración remota requieren firmware compatible y pueden depender del aprovisionamiento del fabricante
- Valide los flujos de trabajo planificados contra la documentación del fabricante para confirmar que el R-12 expone los eventos y la telemetría que su aplicación requiere
- En despliegues a gran escala, pruebe una unidad de muestra de extremo a extremo con Plaspy para confirmar el comportamiento antes del despliegue masivo

## Por qué es importante entender el protocolo

Comprender cómo se comunica el R-12 ayuda a configurar correctamente los dispositivos, acelerar la resolución de problemas y asegurar operaciones más confiables a largo plazo cuando el rastreador se utiliza con Plaspy. Saber cómo informa el equipo y qué espera la plataforma reduce fricciones de integración y sorpresas operativas.

- Asegura que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y use el transporte previsto
- Ayuda a diagnosticar problemas de conectividad causados por configuración celular, ajustes de APN o reglas de firewall
- Aclara qué eventos y telemetría están disponibles para mapeo, alertas y automatizaciones en Plaspy
- Orienta la planificación de actualizaciones de firmware para que los cambios OTA y de configuración no interrumpan el reporte
- Mejora la respuesta ante incidentes al correlacionar los estados reportados por el dispositivo con las alertas y registros de Plaspy

## Ventajas de usar Plaspy con este protocolo

Usar el ArkNav R-12 con Plaspy ofrece a los gestores de flotas e integradores de sistemas visibilidad y telemetría fiable para vehículos y maquinaria pesada. La combinación de conectividad LTE M con fallback EGPRS, protección de alimentación de grado vehicular y reportes ricos en eventos hace que el R-12 sea adecuado para seguimiento con detección de ignición, flujos anti robo y monitoreo operativo, mientras Plaspy ingiere esos datos para ofrecer mapas, alertas e informes.

Para conocer más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y revisiones de hardware consulte el sitio del fabricante https://www.arknavgps.com.tw/ donde se encuentra la documentación técnica y la información de firmware definitiva.
