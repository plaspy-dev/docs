---
slug: /gotop/vt360/protocol
id: vt360-protocol
sidebar_label: Protocol
title: GOTOP - VT360 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo GOTOP VT360 para integración con Plaspy y ajustes de conexión compartidos
keywords:
  - protocolo GOTOP VT360
  - protocolo GPS GOTOP VT360
  - compatibilidad GOTOP VT360 Plaspy
  - protocolo de rastreo GOTOP VT360
  - integración rastreador GPS con Plaspy
  - protocolo de rastreo de vehículos
  - protocolo para gestión de flotas
  - protocolo de dispositivo Plaspy
  - integración rastreo en tiempo real
  - protocolo de telemetría GPS
---

# GOTOP - Protocolo VT360

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador GOTOP VT360 con Plaspy. Explica cómo el VT360 informa ubicaciones y eventos a Plaspy mediante canales habituales como GPRS y SMS, y destaca el papel del protocolo del rastreador para habilitar visibilidad en tiempo real, alarmas y telemetría dentro de Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en el contexto del protocolo público y en consideraciones prácticas de integración en lugar de entrar en detalles de firmware o paquetes a bajo nivel.

## Resumen del protocolo

El protocolo de comunicación del VT360 define cómo el rastreador codifica y entrega posiciones, actualizaciones de estado, alarmas y señales de sensores a un servidor remoto. Para la integración con Plaspy, la función pública del protocolo es empaquetar mensajes de telemetría y eventos legibles que Plaspy pueda ingerir y mapear al estado del vehículo, alertas y recorridos históricos.

- Permite la transmisión de posiciones periódicas o activadas por eventos para que Plaspy muestre ubicación en tiempo real e historial.
- Transporta estados de alarmas y entradas como SOS, geocerca, exceso de velocidad, batería baja y eventos de inmovilizador para alertas y automatizaciones.
- Transmite telemetría auxiliar, por ejemplo lecturas analógicas de combustible o temperatura, para que Plaspy presente tendencias de telemetría.
- Soporta distintas opciones de transporte para que los dispositivos envíen mensajes por GPRS celular o por SMS como respaldo hacia el endpoint de Plaspy.
- Permite comandos remotos y configuración cuando el fabricante soporta el reenvío de mensajes de control o comandos por SMS.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar muchos formatos comunes de reporte de rastreadores sin que usted tenga que seleccionar el protocolo manualmente cuando un dispositivo apunta al endpoint de Plaspy. Al configurar un VT360 para reportar a Plaspy, la plataforma determinará automáticamente el tratamiento apropiado de los mensajes entrantes y los asociará con los registros de vehículo y eventos.

- Plaspy usa un endpoint de ingestión compartido y un único puerto para todos los dispositivos soportados con el fin de simplificar la configuración.
- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto utilizado por Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos correctamente configurados para reportar al endpoint de Plaspy normalmente no requieren selección manual de protocolo dentro de la plataforma.
- La detección automática reduce pasos de configuración para dispositivos comunes, sin impedir verificar el comportamiento frente a la documentación del dispositivo cuando sea necesario.

## Transporte y contexto de conexión

El VT360 puede enviar datos usando GPRS celular como transporte principal y SMS como canal complementario. Para reportes basados en IP hacia Plaspy, el dispositivo puede configurarse para usar UDP o TCP según el soporte del equipo y las preferencias locales de configuración.

- Los dispositivos pueden apuntar al dominio de reporte de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para conectividad.
- El puerto de reporte de Plaspy para todos los dispositivos es 8888 y el rastreador puede configurarse para usar UDP o TCP en ese puerto.
- GPRS es el transporte principal para posición y telemetría en tiempo real; SMS puede emplearse para enlaces, mensajes de respaldo o flujos de comandos específicos si el dispositivo lo soporta.
- Asegúrese de que el APN y la configuración de red de la SIM sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy por datos celulares.
- La fiabilidad de la red y las diferencias entre operadores regionales pueden influir en qué transporte funciona mejor en una implementación concreta.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y los intervalos de reporte; confirme el comportamiento frente a la versión de firmware en uso.
- Las revisiones de hardware y accesorios opcionales (por ejemplo sensores analógicos o antenas externas) pueden afectar qué campos de telemetría están disponibles para Plaspy.
- La configuración por parte del fabricante puede ofrecer múltiples formatos de reporte o conjuntos de comandos; elija el formato que mejor coincida con la ingestión de Plaspy si existen opciones.
- Seleccionar UDP frente a TCP en el rastreador puede modificar las características de entrega; verifique que el dispositivo soporte ambos transportes si necesita uno en particular.
- Valide siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Al integrar muchos dispositivos, mantener configuraciones y versiones de firmware consistentes reduce la variabilidad y simplifica el soporte.

## Por qué es importante conocer el protocolo

Comprender las características del protocolo de comunicación ayuda a asegurar la entrega fiable de datos de ubicación y eventos a Plaspy, acelera la resolución de problemas y favorece la estabilidad operativa a largo plazo. Aunque Plaspy detecta automáticamente muchos protocolos, conocer cómo reporta el VT360 y qué transportes utiliza mejora la configuración y el mantenimiento.

- Facilita confirmar que el rastreador está enviando los campos esperados para que Plaspy pueda completar los widgets de ubicación, alarma y sensores.
- Acelera el diagnóstico cuando los dispositivos no aparecen, enfocando las revisiones en APN, transporte, host del endpoint y configuración de puerto.
- Ayuda a decidir entre usar GPRS o SMS en regiones con cobertura de datos intermitente o como estrategia de respaldo.
- Permite planificar actualizaciones de firmware y cambios masivos de configuración en una flota.
- Mejora la comunicación con el soporte del fabricante usando términos comunes de protocolo y transporte.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el GOTOP VT360 ofrece a las organizaciones seguimiento en tiempo real consolidado, alertas de eventos y reportes históricos en una plataforma única. El soporte del VT360 para reporte de posición, entradas de alarma, telemetría analógica y funciones de control remoto encaja bien con los flujos de trabajo habituales de Plaspy para monitoreo de flotas, antirobo y reportes operativos.

Plaspy simplifica la incorporación de dispositivos exponiendo un endpoint y un puerto compartidos, además de detectar automáticamente muchos protocolos de rastreadores cuando los equipos apuntan al endpoint de Plaspy. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener detalles específicos más actualizados del protocolo del dispositivo, comportamiento de firmware y documentación del fabricante, verifique la información en el sitio de GOTOP en https://www.gotop.cc/
