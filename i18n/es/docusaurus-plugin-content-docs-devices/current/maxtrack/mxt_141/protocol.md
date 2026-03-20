---
slug: /maxtrack/mxt_141/protocol
id: mxt_141-protocol
sidebar_label: Protocol
title: Maxtrack - MXT-141 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del Maxtrack MXT-141 con la plataforma Plaspy
keywords:
  - Protocolo Maxtrack MXT-141
  - Protocolo GPS Maxtrack MXT-141
  - Protocolo de comunicación MXT-141
  - Protocolo de rastreo MXT-141
  - Compatibilidad tracker Maxtrack Plaspy
  - Guía de protocolo Maxtrack
  - Rastreo vehicular MXT-141
  - Rastreador GPS MXT-141
  - Protocolo de dispositivo Plaspy
  - Integración protocolo Maxtrack
---

# Maxtrack - Protocolo MXT-141

Esta página describe el contexto público del protocolo para el uso del Maxtrack MXT-141 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica en términos generales y no sensibles, y en cómo esas comunicaciones se mapean a los ajustes de conexión compartidos por Plaspy. El MXT-141 combina seguimiento GNSS con un circuito inalámbrico accesorio integrado, una red secundaria de 2.4 GHz, entradas de RPM y odómetro, y un acelerómetro para detectar movimiento y paradas, todo lo cual aporta telemetría que puede enviarse a un backend como Plaspy.

Plaspy utiliza ajustes de conexión unificados para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa correctamente a la plataforma. En implementaciones con MXT-141 esto significa que los dispositivos deben configurarse para reportar al endpoint de Plaspy; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validarlo con la documentación de Maxtrack cuando sea necesario. La información pública del endpoint de Plaspy usado para el reporte de dispositivos es d.plaspy.com y la IP del servidor 54.85.159.138 en el puerto 8888. El equipo puede configurarse usando UDP o TCP en el puerto 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos.

## Resumen del protocolo

El protocolo de rastreo del MXT-141 (tal como lo implementa el firmware del dispositivo) es el mecanismo por el cual la unidad reporta posición, entradas, eventos de movimiento y el estado de accesorios a un servidor backend como Plaspy. El protocolo define cómo el rastreador se identifica, cómo se empaqueta la telemetría y las alarmas, y cómo se pueden intercambiar ocasionalmente acuses de recibo o comandos sobre el enlace de red.

- Proporciona un canal estructurado para que el rastreador informe posición GNSS, entradas de odómetro y RPM, y eventos del acelerómetro.
- Transmite información de estado y diagnóstico que Plaspy puede usar para presentar el estado operativo y alertas.
- Incluye identificadores que permiten a Plaspy asociar los mensajes entrantes con un dispositivo y cuenta específicos.
- Soporta transporte sobre protocolos IP comunes, de modo que el MXT-141 puede reportar a Plaspy usando el endpoint de la plataforma.
- Permite que los datos de accesorios y de la red secundaria se reflejen en el procesamiento de eventos de mayor nivel cuando el firmware expone esa información.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint consistente y usa esa entrada para determinar el manejo de protocolo adecuado para cada equipo. En la mayoría de los casos no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el MXT-141 está configurado para apuntar al endpoint y puerto correctos.

- Plaspy escucha los reportes de dispositivos en d.plaspy.com y en la IP pública del servidor 54.85.159.138 en el puerto 8888.
- La plataforma acepta conexiones de dispositivos por TCP o UDP en el puerto 8888 y utiliza los datos entrantes para determinar la compatibilidad del protocolo.
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reportan al puerto compartido de Plaspy, reduciendo la necesidad de configuraciones manuales.
- Una identificación correcta del dispositivo en los mensajes iniciales ayuda a Plaspy a asociar la unidad con la cuenta y el modelo de datos adecuados.
- Si un rastreador no se detecta automáticamente, verifique que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 y que esté usando el puerto 8888 con un transporte soportado.

## Transporte y contexto de conexión

Los ajustes de conexión son una parte fundamental de la integración, pero no exponen los formatos internos de los mensajes. El MXT-141 puede configurarse para usar distintos transportes de red según el firmware y las decisiones de despliegue. Entender el contexto de transporte ayuda a garantizar la entrega confiable de telemetría a Plaspy.

- El rastreador puede configurarse para enviar datos por UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones de configuración.
- Los dispositivos pueden apuntar al hostname de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 como endpoint de reporte.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, por lo que la misma configuración de puerto saliente en el equipo simplifica despliegues a nivel de flota.
- Consideraciones de red como NAT, firewalls y comportamiento del operador móvil pueden afectar si UDP o TCP resulta más apropiado para una instalación determinada.
- Confirme que el firewall del dispositivo y la configuración del APN permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes o los campos de telemetría disponibles; siempre confirme la versión de firmware del MXT-141 al validar el comportamiento.
- El MXT-141 comparte linaje de plataforma con el MXT-151, por lo que muchas características son similares, pero funciones específicas del modelo como el circuito secundario de 2.4 GHz y entradas adicionales pueden afectar los datos reportados.
- La red de accesorios integrada a 2.4 GHz está pensada principalmente para comunicación local con accesorios y puede no formar parte del protocolo de reporte por WAN hacia Plaspy.
- Revisiones de hardware o módulos accesorios opcionales pueden alterar las E/S disponibles y el comportamiento de reporte de eventos.
- La elección de UDP frente a TCP en el dispositivo puede cambiar las garantías de entrega y debe seleccionarse según la fiabilidad de la red y pruebas punto a punto.
- Valide la compatibilidad contra la documentación oficial de Maxtrack y las notas de versión para detalles específicos del dispositivo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del MXT-141 facilita la configuración, el reporte confiable y la resolución operativa de problemas cuando los dispositivos se usan con Plaspy. Saber qué informa el rastreador y cómo se conecta simplifica la incorporación y reduce el tiempo de despliegue.

- Asegura que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte previsto.
- Ayuda a interpretar la telemetría reportada, como GPS, RPM, odómetro y eventos del acelerómetro, en los paneles de Plaspy.
- Facilita la resolución de problemas de conectividad relacionados con transporte, firewall o ajustes de APN.
- Orienta las decisiones sobre actualizaciones de firmware y habilitación de funciones que afectan el comportamiento de reporte.
- Apoya la planificación para la integración de accesorios que utilicen el circuito de comunicación secundario del MXT-141.

## Por qué usar Plaspy con este protocolo

Usar el MXT-141 con Plaspy ofrece un camino directo para capturar la telemetría del dispositivo y sus capacidades relacionadas con accesorios en un único backend. La detección automática de protocolos de Plaspy y su enfoque de puerto único simplifican la integración de flotas para que usted pueda concentrarse en obtener información operativa en lugar de configurar dispositivo por dispositivo.

Para conocer más sobre Plaspy y cómo soporta integraciones de dispositivos como el Maxtrack MXT-141, visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware e información de hardware, verifique la documentación oficial de Maxtrack en https://maxtrack.com.br. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar los recursos del fabricante para requisitos de integración precisos.
