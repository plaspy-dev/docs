---
slug: /gosafe/g777/protocol
id: g777-protocol
sidebar_label: Protocol
title: Gosafe - G777 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Gosafe G777 y cómo se comunica con Plaspy para seguimiento vehicular e integración confiables
keywords:
  - Protocolo Gosafe G777
  - Protocolo GPS Gosafe G777
  - Protocolo Gosafe G777 para Plaspy
  - Protocolo de comunicación Gosafe G777
  - Protocolo de rastreo Gosafe G777
  - Integración rastreador Gosafe G777
  - Rastreador OBD II Gosafe
  - Protocolo de rastreo vehicular
  - Compatibilidad de rastreadores Plaspy
  - Protocolo GPS para gestión de flotas
---

# Gosafe - G777 Protocolo

Esta página explica el contexto público del protocolo para usar el rastreador OBD II Gosafe G777 con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué papel cumple el protocolo de reporte para entregar telemetría y alertas útiles, y cómo Plaspy encaja en ese flujo de comunicación. El contenido está pensado para ayudar a usuarios técnicos e integradores a comprender consideraciones de compatibilidad sin exponer detalles sensibles o propietarios.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo para el G777 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto general de conexión y compatibilidad más que los detalles internos del dispositivo.

## Visión general del protocolo

El protocolo G777 define cómo el rastreador informa posición, estado del vehículo y notificaciones de eventos a un servidor remoto y cómo recibe comandos de configuración o gestión si esa funcionalidad está disponible. Para un rastreador OBD II como el G777, el protocolo sirve para transformar datos del vehículo y diagnósticos en un flujo transportable que Plaspy puede ingerir e interpretar.

- Transporta datos de posición GPS y movimiento junto con estados del vehículo y señales de diagnóstico derivadas del OBD II
- Envía alertas basadas en eventos e informes de excepción según umbrales configurados en el dispositivo
- Identifica el dispositivo para asociar los reportes con el registro vehicular correcto en Plaspy
- Permite actualizaciones periódicas y cambios de estado para que Plaspy presente datos de ubicación en tiempo real e históricos
- Proporciona la información necesaria para alertas basadas en reglas y monitoreo a nivel de flota sin requerir configuraciones específicas de la plataforma en el dispositivo

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador según el comportamiento del flujo de reporte del dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el rastreador está correctamente configurado para reportar hacia Plaspy.

- Plaspy escucha en un único puerto común para todos los dispositivos soportados, lo que simplifica la configuración del equipo
- Cuando el G777 apunta al endpoint de Plaspy y comienza a reportar, Plaspy inspecciona el flujo de datos entrante para identificar el formato de reporte del rastreador
- Normalmente los usuarios configuran el dispositivo para enviar datos a Plaspy y no necesitan elegir un protocolo en la plataforma
- La detección automática reduce la fricción en la puesta en marcha y facilita el soporte de flotas mixtas con equipos de distintos fabricantes
- Si la detección automática no resulta suficiente, el equipo de soporte de Plaspy puede ayudar con orientación de configuración específica por dispositivo

## Transporte y contexto de conexión

El G777 puede enviar datos mediante protocolos de transporte comunes según el firmware y la configuración del dispositivo. Para alcanzar Plaspy, configure el rastreador para que reporte al servidor de Plaspy usando las configuraciones de conexión compartidas documentadas aquí.

- Los dispositivos pueden configurarse para apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el transporte elegido
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que por lo general basta con un único puerto saliente desde el dispositivo
- En muchas implementaciones la elección entre UDP y TCP se determina por las necesidades de confiabilidad y por lo que soporte el firmware del equipo
- Confirme la configuración de transporte y servidor en el equipo antes de desplegar a gran escala

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el G777 reporta campos o eventos específicos; verifique siempre la versión de firmware al solucionar problemas
- Revisiones de hardware o adaptadores OBD II opcionales pueden alterar la telemetría disponible o la denominación de valores de diagnóstico
- Las interfaces de configuración del fabricante a veces ofrecen opciones de selección de transporte que afectan cómo el dispositivo se conecta a Plaspy
- Factores de red como el comportamiento del operador SIM, la configuración del APN y reglas de firewall pueden afectar la entrega al endpoint de Plaspy
- Valide la compatibilidad probando una unidad contra Plaspy en un entorno controlado antes de un despliegue amplio
- Consulte las notas de versión oficiales del fabricante para cambios de firmware que puedan afectar el comportamiento del protocolo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que usa el G777 ayuda a asegurar una instalación fluida, reportes confiables y una resolución efectiva de problemas al integrar con Plaspy. Saber cómo el dispositivo reporta eventos y estado permite a los administradores alinear las reglas del equipo con las alertas y flujos operativos de la plataforma.

- Ayuda a verificar que el dispositivo esté enviando la telemetría y datos OBD II esperados a Plaspy
- Acelera el análisis de causa raíz cuando faltan datos o los eventos no aparecen en la plataforma
- Permite tomar decisiones informadas sobre la selección de transporte y direccionamiento del servidor según restricciones de red
- Orienta las pruebas de actualizaciones de firmware y cambios de configuración antes de aplicarlos a toda la flota
- Facilita la interpretación correcta de alertas a nivel de dispositivo y su mapeo a reglas y notificaciones en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Gosafe G777 con Plaspy ofrece una vía práctica para organizaciones que necesitan visibilidad vehicular, alertas basadas en telemática y supervisión operativa. La integración OBD II del G777 y sus reglas flexibles de eventos se complementan con las capacidades de la plataforma Plaspy para ofrecer seguimiento de posición, monitoreo de estado y alertas útiles para gestión de flotas y seguridad vehicular.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el Gosafe G777, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y guía del fabricante, verifique la información en el sitio oficial de Gosafe en https://gosafesystem.com/ . El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante garantiza que cuente con los detalles más actuales.
