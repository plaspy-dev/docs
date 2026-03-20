---
slug: /queclink/gl300/protocol
id: gl300-protocol
sidebar_label: Protocol
title: QuecLink - GL300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo QuecLink GL300 para comunicar el rastreador con Plaspy y parámetros comunes de conexión
keywords:
  - protocolo QuecLink GL300
  - protocolo GPS QuecLink GL300
  - compatibilidad GL300 Plaspy
  - protocolo de rastreo GL300
  - protocolo de comunicación GL300
  - protocolo dispositivo GPS QuecLink
  - QuecLink GL300 Plaspy
  - guía protocolo dispositivo GL300
  - telemetría QuecLink GL300
  - integración QuecLink GL300
---

# QuecLink - GL300 Protocolo

Esta página presenta el contexto público del protocolo para usar el rastreador QuecLink GL300 con Plaspy. Describe cómo el GL300, un localizador GNSS compacto y resistente al agua con soporte GPS y GLONASS, interactúa con Plaspy a alto nivel para entregar posición y telemetría a paneles, alertas y reproducción histórica. El objetivo es ofrecer información útil y no sensible sobre el protocolo que facilite la integración y la resolución de problemas, remitiendo a la documentación del fabricante para detalles específicos del dispositivo.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste reporta a la plataforma. El GL300 es compatible con Plaspy, pero el comportamiento preciso del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para la conexión, Plaspy acepta informes de dispositivos en el endpoint d.plaspy.com (IP 54.85.159.138) en el puerto 8888; los dispositivos pueden configurarse para usar UDP o TCP en ese mismo puerto. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma intentará la detección automática del protocolo para rastreadores configurados correctamente.

## Descripción general del protocolo

El protocolo de comunicación del GL300 define cómo el rastreador se identifica, reporta posiciones GNSS y envía telemetría a un servidor remoto como Plaspy. Esta visión general pública se centra en el papel del protocolo para permitir actualizaciones de ubicación confiables y oportunas y el reporte de estado, sin entrar en detalles de implementación que varían según el firmware.

- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar cada informe con la instancia de rastreador correcta.
- Envía fijaciones GNSS y telemetría básica que Plaspy usa en mapas en vivo, geocercas y reproducción histórica de rutas.
- Permite que el rastreador envíe actualizaciones periódicas o por eventos, lo que ayuda a Plaspy a mantener conciencia situacional sobre personas o activos.
- Funciona sobre transportes de red estándar para que el GL300 pueda reportar a Plaspy usando redes de los operadores y endpoints configurados.
- Se integra con las opciones de configuración del GL300 para controlar intervalos de reporte, comportamiento de activación y consumo de energía según lo que permita el hardware y el firmware.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar informes de muchos modelos de rastreadores y detectar automáticamente el protocolo usado por un dispositivo entrante cuando éste está configurado para reportar al endpoint de Plaspy. Esto reduce la necesidad de seleccionar el protocolo manualmente dentro de la plataforma en la mayoría de los despliegues.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 para que Plaspy reciba los datos entrantes.
- Todos los dispositivos de Plaspy usan el mismo puerto de servidor, 8888, lo que simplifica la configuración entre distintos modelos.
- Plaspy soporta tanto UDP como TCP en el puerto 8888; use el modo de transporte que el firmware del GL300 y el despliegue requieran.
- Cuando un GL300 configurado correctamente envía datos a Plaspy, la plataforma intenta identificar automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo manualmente.
- Si un dispositivo no parece comunicarse, confirme el endpoint, el transporte y la configuración de firmware del equipo antes de contactar al soporte de la plataforma.

## Contexto de transporte y conexión

El contexto de conexión aborda cómo el GL300 llega a Plaspy a través de la red y qué endpoints y transportes se utilizan comúnmente. Tenga en cuenta que las opciones exactas disponibles pueden depender del firmware del dispositivo y de las utilidades de configuración que proporcione el fabricante.

- El GL300 puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y los compromisos deseados entre confiabilidad y latencia.
- Plaspy acepta informes entrantes en el dominio d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Dado que Plaspy utiliza un único puerto para todos los dispositivos, configurar el GL300 para reportar al endpoint de Plaspy con el transporte correcto suele ser suficiente para que la plataforma reciba los datos.
- Entornos de red con NAT, firewalls o restricciones del operador pueden requerir configuración adicional para permitir conexiones salientes del rastreador hacia el endpoint de Plaspy.
- Verifique que el firmware del GL300 permita el modo de transporte elegido y que cualquier APN o perfil de SIM en el dispositivo permita conexiones a endpoints externos.

## Notas sobre compatibilidad del protocolo

- El GL300 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, pero la disponibilidad de funciones puede variar según las revisiones de firmware.
- Las revisiones de hardware y las configuraciones opcionales del GL300 pueden afectar qué campos de telemetría están presentes o con qué frecuencia el dispositivo reporta.
- La selección del modo de transporte (UDP vs TCP) es una elección de configuración del dispositivo que puede impactar el comportamiento de entrega según las condiciones de red.
- Las configuraciones del lado del fabricante, como intervalos de reporte predeterminados o modos de sueño, influyen en lo que envía el protocolo; consulte las herramientas de configuración del dispositivo para realizar ajustes.
- Siempre valide la compatibilidad para la versión de firmware específica instalada en el GL300 respecto a sus necesidades de integración.
- Consulte la documentación oficial de QuecLink para comandos de configuración por modelo, notas de versión de firmware y diferencias de comportamiento conocidas.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del GL300 ayuda a lograr una configuración exitosa, un comportamiento predecible en campo y una resolución de problemas más rápida cuando los informes de ubicación no aparecen como se espera. Conocer el contexto de conexión y las variables comunes reduce la fricción en la integración y facilita las operaciones continuas.

- Asegura la correcta configuración de endpoint y transporte para que el rastreador llegue a la plataforma Plaspy de forma fiable.
- Ayuda a interpretar qué campos de telemetría se deben esperar y cuáles pueden faltar debido a diferencias de firmware o hardware.
- Facilita la resolución de problemas al acotar si un problema es de red, de configuración o del propio dispositivo.
- Apoya decisiones sobre frecuencia de reporte, consumo de energía y compensaciones operativas para despliegues a largo plazo.
- Hace más sencilla la planificación de escalabilidad al desplegar muchos dispositivos GL300 que alimenten el sistema Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL300 con Plaspy ofrece un camino directo para incorporar rastreo GNSS resistente y resistente al agua en un entorno unificado de monitoreo y reporte. Las organizaciones que requieren monitoreo de seguridad del personal, supervisión de eventos o visibilidad de activos remotos pueden beneficiarse del diseño robusto del GL300 combinado con las capacidades de ingestión centralizada y mapeo de Plaspy.

La detección automática de protocolos de Plaspy y su estrategia de puerto único reducen la complejidad de configuración en despliegues que incluyen muchos modelos de rastreadores. Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para detalles más recientes sobre protocolos específicos de dispositivo y firmware, verifique la información actual con el fabricante en https://www.queclink.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable consultar la documentación del fabricante al planificar o solucionar integraciones.
