---
slug: /haicom/hi_602/protocol
id: hi_602-protocol
sidebar_label: Protocol
title: Haicom - HI-602 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el Haicom HI-602 con la plataforma de seguimiento Plaspy
keywords:
  - protocolo Haicom HI-602
  - protocolo GPS Haicom HI-602
  - compatibilidad Haicom HI-602 Plaspy
  - protocolo rastreador Haicom
  - protocolo de comunicación HI-602
  - protocolo de seguimiento HI-602
  - protocolo rastreador GPS Haicom
  - integración Haicom HI 602
  - compatibilidad de dispositivos Plaspy
  - seguimiento vehicular Haicom
---

# Haicom - Protocolo HI-602

Esta página describe el contexto público del protocolo para usar el rastreador Haicom HI-602 con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con la plataforma Plaspy y qué considerar al configurar el rastreador para monitoreo en tiempo real. La información aquí se centra en la conexión y la compatibilidad más que en los detalles técnicos internos del equipo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo comienza a reportar a la plataforma. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y las opciones del fabricante, por lo que esta página ofrece orientación práctica y recomienda validar con la documentación de Haicom.

## Visión general del protocolo

El HI-602 emplea tecnologías celulares y de posicionamiento estándar para reportar ubicación y estado a un servidor remoto. Su protocolo de comunicación es el mecanismo que empaqueta las fijaciones GPS, la telemetría y los indicadores de estado para que Plaspy pueda procesarlos y mostrarlos. El protocolo determina cómo se identifica el rastreador, con qué frecuencia informa y qué campos incluye cada transmisión.

- Permite que el HI-602 transmita coordenadas GPS y estado básico a un endpoint remoto
- Transporta la información de identidad del dispositivo para que Plaspy pueda asociar mensajes con un activo
- Codifica telemetría y mensajes opcionales que Plaspy usa para mapeo y detección de eventos
- Funciona sobre transportes celulares comunes soportados por el rastreador para amplia compatibilidad operativa
- Facilita reportes interoperables para que Plaspy presente ubicación en vivo y trazas históricas

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante de muchos modelos de rastreadores e identifica automáticamente el formato de reporte cuando un dispositivo está configurado para enviar datos al endpoint de Plaspy. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy si el HI-602 apunta al servidor y puerto correctos.

- Plaspy escucha en un único puerto compartido para todos los dispositivos, simplificando la configuración
- Cuando el HI-602 reporta al endpoint de Plaspy, la plataforma intenta detectar automáticamente el formato reportado
- Usualmente usted solo debe configurar el rastreador para que envíe datos al endpoint de Plaspy para iniciar la detección automática
- La detección automática reduce pasos de configuración manual pero no modifica el comportamiento del firmware del dispositivo
- Si la detección falla, se recomienda verificar la configuración del dispositivo y la guía del fabricante

## Transporte y contexto de conexión

El HI-602 puede usar datos celulares o funcionalidades basadas en SMS para brindar seguimiento. Para el reporte de datos en vivo a Plaspy, el dispositivo puede configurarse para enviar datos GPRS al endpoint de Plaspy. Plaspy ofrece un host y puerto estables que están públicamente documentados para la configuración del dispositivo.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- La plataforma escucha en el puerto 8888 para conexiones entrantes de rastreadores
- El HI-602 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el comportamiento de la red
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración del rastreador y la incorporación de flotas

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware de Haicom pueden cambiar los comandos disponibles, los campos de reporte y los comportamientos por defecto
- Las revisiones de hardware u opciones de características del HI-602 pueden afectar qué modos de transporte son compatibles
- Algunas funciones del rastreador como DTMF o seguimiento por SMS quedan fuera de la ruta de reporte GPRS y funcionan de manera distinta
- Elegir UDP frente a TCP puede afectar las características de entrega según la red móvil y el enrutamiento del servidor
- Compare siempre la configuración del dispositivo con la documentación del fabricante y confirme que el equipo apunta a d.plaspy.com o a la IP proporcionada
- Si un dispositivo no aparece en Plaspy después de la configuración, verifique APN, estado de la SIM y compatibilidad de firmware

## Por qué es importante entender el protocolo

Comprender cómo se comunica el HI-602 ayuda a asegurar una instalación confiable, facilitar la resolución de problemas y mantener un funcionamiento predecible a largo plazo en Plaspy. Saber qué enviará el rastreador y cómo la plataforma espera recibirlo reduce fricciones en la integración y facilita el mapeo correcto de eventos del dispositivo a necesidades operativas.

- Acelera la puesta en marcha confirmando que el dispositivo apunta al endpoint correcto de Plaspy
- Ayuda a diagnosticar problemas de conectividad como APN o discrepancias de transporte
- Aclara si un campo faltante se debe a una limitación del dispositivo o a una configuración incorrecta
- Apoya la toma de decisiones sobre selección de transporte e intervalos de reporte para cobertura confiable
- Ayuda a los administradores de flota a planificar actualizaciones de firmware y validar compatibilidad continua

## Por qué usar Plaspy con este protocolo

El Haicom HI-602 ofrece opciones de rastreo flexibles incluyendo GPS, GPRS, SMS y DTMF, que cubren una amplia gama de casos de uso, desde seguimiento personal hasta monitoreo de activos. Cuando el HI-602 reporta vía GPRS al endpoint de Plaspy, las organizaciones obtienen visibilidad centralizada de la ubicación del dispositivo y telemetría básica a través de una única plataforma. La detección automática de protocolo de Plaspy y la configuración consistente de puertos simplifican la incorporación de dispositivos en flotas mixtas.

Para saber más sobre Plaspy y cómo maneja el reporte de dispositivos visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos, notas de firmware e instrucciones de configuración, verifique la información en el sitio oficial de Haicom http://www.haicom.com.tw/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable consultar los recursos del fabricante.
