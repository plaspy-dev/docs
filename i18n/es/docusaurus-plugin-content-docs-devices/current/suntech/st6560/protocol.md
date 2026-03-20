---
slug: /suntech/st6560/protocol
id: st6560-protocol
sidebar_label: Protocol
title: Suntech - ST6560 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Suntech ST6560 y su comunicación con Plaspy en entornos de flotas
keywords:
  - Suntech ST6560
  - protocolo ST6560
  - protocolo rastreador GPS Suntech
  - compatibilidad ST6560 Plaspy
  - protocolo rastreador OBD II
  - protocolo de rastreo de vehículos
  - rastreador para gestión de flotas
  - protocolo de comunicación ST6560
  - protocolo de telemetría GPS
  - telemetría OBD II
---

# Suntech - Protocolo ST6560

Esta página documenta el contexto público del protocolo para usar el rastreador OBD II Suntech ST6560 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy y qué esperar durante la configuración y operación, sin exponer detalles de implementación sensibles. El objetivo es ayudar a administradores de flotas, integradores y usuarios técnicos a comprender el papel de comunicación del ST6560 cuando se conecta a Plaspy.

El ST6560 es un rastreador OBD II plug and play con telemetría avanzada, como GNSS multiconstellation, dead reckoning, soporte BLE para sensores y acceso profundo a OBD II y J1939. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como orientación sobre el protocolo y consulte la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

El protocolo de comunicación del dispositivo define cómo el ST6560 informa posición, telemetría del vehículo, diagnósticos y eventos a un servidor remoto. Para la integración con Plaspy, la función del protocolo es asegurar que el rastreador pueda identificarse, transmitir actualizaciones de ubicación y diagnósticos oportunos, y entregar eventos que Plaspy pueda mapear en paneles y alertas.

- Permite transmisiones periódicas y por eventos de ubicación GPS y telemetría OBD II hacia el backend.
- Transporta identificadores del vehículo para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Transmite diagnósticos, códigos DTC y señales del motor que Plaspy utiliza en reglas de mantenimiento y alertas.
- Soporta transporte sobre redes celulares para que los dispositivos reporten a un endpoint central de Plaspy.
- Proporciona un mecanismo para que el rastreador envíe eventos de geocerca, reportes de movimiento y lecturas de sensores BLE a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de dispositivos en un único endpoint compartido y reconocer automáticamente el protocolo del rastreador según el flujo de datos entrante y los identificadores del dispositivo. En la mayoría de las implementaciones, el usuario no necesita seleccionar un protocolo dentro de Plaspy si el ST6560 está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un endpoint y puerto comunes y realiza detección automática del protocolo.
- Los usuarios configuran el dispositivo para que informe al endpoint de Plaspy y generalmente no necesitan establecer una opción de protocolo manualmente.
- Identificadores de dispositivo correctos y intervalos de reporte consistentes mejoran la detección y el onboarding.
- Si un dispositivo usa servidores por defecto del fabricante, cambie su host de reporte al endpoint de Plaspy para habilitar la detección automática.

## Transporte y contexto de conexión

La configuración de la conexión es una parte práctica de la integración exitosa. El ST6560 puede configurarse para usar UDP o TCP para enviar datos a Plaspy, y Plaspy acepta conexiones en un solo puerto soportado para todos los dispositivos para simplificar el despliegue.

- Los dispositivos pueden configurarse para apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- El servicio de Plaspy acepta los reportes de dispositivo en el puerto 8888 y todos los dispositivos soportados usan el mismo puerto.
- El ST6560 puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y el comportamiento de la red.
- Usar el nombre de dominio de Plaspy simplifica cambios de operador y balanceo de carga, mientras que la IP es útil para resolución de problemas.
- Verifique el aprovisionamiento del dispositivo para asegurarse de que el transporte activo y el host coincidan con la configuración de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden introducir variaciones en qué campos de telemetría se reportan y con qué frecuencia se envían los mensajes.
- Revisiones de hardware o variantes regionales pueden soportar diferentes bandas celulares u opciones de interfaz como J1939.
- La selección de transporte entre UDP y TCP puede afectar la confiabilidad de los mensajes y el comportamiento de red; elija el que mejor se adapte a sus necesidades operativas.
- Los servidores por defecto del fabricante o servicios en la nube deben cambiarse al endpoint de Plaspy para el reporte directo a Plaspy.
- Verifique que el uso de sensores BLE y los conjuntos de PID OBD II requeridos por su flujo de trabajo estén soportados por el firmware del dispositivo que piensa desplegar.
- Siempre valide la compatibilidad contra la documentación más reciente de Suntech para conocer limitaciones específicas del dispositivo o funciones opcionales.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el ST6560 ayuda a optimizar la configuración, mejorar la confiabilidad y acelerar la resolución de problemas al integrar con Plaspy. Tener una visión clara de las expectativas de comunicación reduce el tiempo de incorporación y mejora la estabilidad operativa a largo plazo.

- Asegura un aprovisionamiento correcto del dispositivo para que Plaspy pueda detectar y mapear automáticamente los datos entrantes.
- Ayuda a identificar problemas de conectividad relacionados con el transporte, la configuración del host o el comportamiento del operador.
- Orienta las decisiones de gestión de firmware cuando se publican nuevos campos de telemetría o correcciones de errores.
- Mejora la afinación de eventos para geocercas, detección de movimiento e intervalos de sondeo OBD II para reducir el ruido.
- Permite decisiones informadas sobre el uso de TCP frente a UDP según su flota y condiciones de red.

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST6560 con Plaspy ofrece un camino sencillo para combinar diagnósticos a nivel de vehículo e informes de posición en una sola plataforma. El acceso OBD II del ST6560, el soporte J1939 para vehículos pesados, la integración de sensores BLE y su diseño celular multinetwork lo convierten en una opción práctica para visibilidad de flotas, flujos de trabajo de mantenimiento preventivo y monitoreo antirrobo cuando se integra con Plaspy.

Para obtener más información sobre Plaspy y cómo se integra este rastreador en la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y firmware específico del dispositivo en el sitio oficial de Suntech http://www.suntechint.com/.
