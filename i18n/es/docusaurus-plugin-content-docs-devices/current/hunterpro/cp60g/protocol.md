---
slug: /hunterpro/cp60g/protocol
id: cp60g-protocol
sidebar_label: Protocol
title: HunterPro - CP60G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador HunterPro CP60G y cómo se comunica con Plaspy para integrarlo
keywords:
  - protocolo HunterPro CP60G
  - rastreador GPS CP60G
  - protocolo GPS HunterPro
  - protocolo de comunicación CP60G
  - compatibilidad rastreador HunterPro Plaspy
  - seguimiento de flotas CP60G
  - protocolo de seguimiento de vehículos
  - compatibilidad de dispositivos Plaspy
  - documentación protocolo HunterPro
  - protocolo rastreador GPS Plaspy
---

# HunterPro - Protocolo CP60G

Esta página ofrece una visión pública del contexto de comunicación del HunterPro CP60G cuando se utiliza con Plaspy. Se centra en información no sensible del protocolo que ayuda a administradores de flotas y dispositivos a comprender cómo el CP60G informa posición y eventos a un backend como Plaspy. El resumen está pensado para usuarios técnicos que necesitan alinear la configuración del equipo y los ajustes de red sin requerir acceso al firmware.

El HunterPro CP60G es un rastreador GPS GSM GPRS diseñado para seguimiento y recuperación de vehículos, con cobertura quadband GSM, batería de respaldo y entradas para ignición, pánico y puertas. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre verifique la documentación específica del dispositivo para conocer los detalles de implementación más recientes.

## Visión general del protocolo

A alto nivel, el CP60G usa su conexión GSM GPRS para enviar datos de GPS y estado a un servidor remoto. El protocolo del dispositivo define cómo el rastreador se identifica, cómo reporta posición y estados de entradas, y cómo comunica condiciones de batería o señal para que la plataforma receptora convierta las transmisiones crudas en registros de ubicación y eventos utilizables.

- El protocolo transporta identificación del dispositivo y telemetría para que Plaspy pueda asociar los mensajes con el activo correcto.
- Datos de posición y marca temporal se transmiten por el enlace móvil al endpoint del servidor configurado.
- El reporte de eventos para entradas como ignición, pánico y sensores de puertas aporta contexto para monitoreo y alertas.
- El protocolo permite reportes periódicos y puede soportar modos de reposo o bajo consumo para ahorrar batería manteniendo actualizaciones esenciales.
- Los ajustes a nivel de transporte determinan si los mensajes llegan por UDP o TCP y cómo el servidor los acepta.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos y protocolos de rastreadores y detectar automáticamente el protocolo entrante cuando los dispositivos están configurados correctamente para reportar al endpoint de Plaspy. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta a los ajustes compartidos del servidor Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La IP del servidor Plaspy es 54.85.159.138, que puede usarse para configuración directa del dispositivo en algunos entornos.
- El puerto es 8888 y es el puerto común en el que Plaspy recibe reportes de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan a la plataforma por el puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la consistencia de la configuración.
- Si un dispositivo está configurado correctamente para reportar al endpoint de Plaspy, normalmente no es necesaria la selección manual del protocolo en la plataforma.

## Transporte y contexto de conexión

Las opciones de transporte y conexión afectan cómo el CP60G llega a Plaspy y pueden influir en características de entrega como latencia y fiabilidad. El CP60G depende de GSM GPRS para datos, y el modo de conexión lo determinan los ajustes del dispositivo y las condiciones de la red.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del soporte del equipo y las preferencias de configuración.
- Comúnmente los dispositivos apuntan al dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando DNS no está disponible.
- El puerto 8888 es el único que Plaspy utiliza para todos los dispositivos soportados, lo que facilita reglas de firewall y NAT.
- TCP ofrece entrega orientada a conexión, mientras que UDP puede emplearse para reportes de menor sobrecarga en algunas configuraciones según el firmware del dispositivo.
- Verifique que la SIM y el plan de datos del operador permitan conexiones GPRS y tráfico saliente hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, las funciones soportadas y los campos opcionales que la plataforma reciba del CP60G.
- Revisiones de hardware o variantes del CP60G pueden exponer diferentes conjuntos de entradas o interfaces de sensores que afectan los eventos reportados.
- Puede ser necesario usar utilidades de configuración del fabricante o comandos SMS para apuntar el dispositivo a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Seleccionar UDP o TCP a nivel de dispositivo puede influir en el comportamiento de entrega y debe coincidir con las capacidades del equipo y el entorno de red.
- La ausencia de memoria interna en el CP60G implica que depende de transmisión GPRS en vivo para reportar en lugar de almacenar y reenviar.
- Valide la compatibilidad contra la documentación de HunterPro y las notas de la versión de firmware antes de implementaciones a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del CP60G ayuda en la configuración, resolución de problemas y en asegurar una operación confiable a largo plazo con Plaspy. Tener claro cómo y cuándo el dispositivo informa facilita diagnosticar problemas de conectividad y confirmar que los datos de evento llegan como se espera.

- Asegura la configuración correcta del dispositivo para que los reportes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a resolver la falta de datos al focalizar en la selección de transporte UDP o TCP, el plan de datos de la SIM y las condiciones de señal.
- Permite ajustar intervalos de reporte y modos de reposo apropiados para equilibrar la vida útil de la batería y los requisitos de seguimiento.
- Facilita la validación del cableado de entradas para ignición, pánico y sensores de puertas, de modo que los eventos reportados reflejen la actividad real.
- Mejora la planificación de actualizaciones de firmware y la verificación de cambios de comportamiento tras actualizaciones del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el HunterPro CP60G con Plaspy ofrece una forma directa de convertir la telemetría del dispositivo en visibilidad operativa para la flota. Para organizaciones como proveedores de seguros, empresas de renta y operadores de flotas, el CP60G brinda una solución rentable para rastrear activos mientras Plaspy se encarga de la detección del protocolo e ingestión de datos en un endpoint común y escalable.

Para obtener más información sobre Plaspy y cómo soporta dispositivos de varios proveedores como el HunterPro CP60G visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente con el fabricante en http://hunterpro.com.tw/.
