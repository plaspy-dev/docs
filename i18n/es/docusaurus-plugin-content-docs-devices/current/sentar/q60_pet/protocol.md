---
slug: /sentar/q60_pet/protocol
id: q60_pet-protocol
sidebar_label: Protocol
title: Sentar - Q60 Pet Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Sentar Q60 Pet y cómo se comunica con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - protocolo Sentar Q60 Pet
  - protocolo GPS Sentar Q60 Pet
  - protocolo Sentar Q60 Pet para Plaspy
  - protocolo de comunicación Sentar Q60 Pet
  - protocolo de rastreo Sentar Q60 Pet
  - protocolo rastreador GPS Sentar
  - protocolo de dispositivos Plaspy
  - protocolo rastreador de mascotas
  - protocolo MTK2503
  - compatibilidad rastreador GPS para mascotas
---

# Sentar - Protocolo Q60 Pet

Esta página ofrece una visión pública y de alto nivel sobre el contexto de comunicación al usar el rastreador Sentar Q60 Pet con la plataforma Plaspy. Resume cómo el dispositivo reporta ubicación y telemetría básica a Plaspy, las opciones de transporte comúnmente usadas y consideraciones prácticas de compatibilidad basadas en la descripción del equipo. El objetivo es explicar el contexto del protocolo en términos seguros y no sensibles para que pueda alinear la configuración del dispositivo con las expectativas de Plaspy.

El Q60 Pet es un rastreador compacto para mascotas basado en el chipset MTK2503, con posicionamiento multimodal (GPS, BDS, LBS y WiFi) y enlace GSM/GPRS mediante una tarjeta Micro SIM. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto de reporte puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí se centra en el contexto general del protocolo público más que en detalles específicos de firmware.

## Visión general del protocolo

A grandes rasgos, el protocolo del dispositivo define cómo el Q60 Pet envía información de ubicación, batería y estado básico desde el rastreador hacia Plaspy, de modo que la plataforma pueda presentar mapas, alertas y telemetría. El propósito del protocolo es transformar los datos de sensores y radio en un uplink coherente que el servidor pueda interpretar y registrar, al tiempo que permite al rastreador identificarse e indicar estados clave como el tipo de fijado GPS y el nivel de batería.

- Permite que el rastreador reporte fijados de ubicación (GPS y modos asistidos) y telemetría básica a Plaspy para visualización en mapas y generación de alertas.
- Transporte de identificación del dispositivo e información de estado para que Plaspy asocie los reportes con el registro de activo correspondiente.
- Soporta contexto de posicionamiento multimodal para que Plaspy muestre si la ubicación provino de GPS, BDS, LBS o asistencia WiFi.
- Ofrece telemetría compacta adecuada para monitoreo continuo de mascotas, donde la energía y el ancho de banda son limitados.
- Funciona sobre datos celulares estándar para que el rastreador pueda alcanzar Plaspy desde una amplia cobertura geográfica.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de dispositivos en un endpoint público compartido y determinar automáticamente el protocolo entrante cuando un dispositivo correctamente configurado se conecta. En la mayoría de los casos no será necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el rastreador esté apuntando al endpoint de Plaspy y utilice los ajustes de transporte esperados.

- Plaspy recibe uplinks de rastreadores en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de servidor y Plaspy detecta automáticamente el protocolo del rastreador.
- Cuando un Q60 Pet está configurado para reportar al endpoint de Plaspy, la plataforma asociará los reportes entrantes con el registro del dispositivo e interpretará la telemetría.
- La configuración típica requiere apuntar el dispositivo a Plaspy y confirmar los ajustes de transporte; la selección manual del protocolo dentro de Plaspy por lo general no es necesaria.
- Si los reportes del dispositivo no aparecen, verificar el enrutamiento de red, los datos de la SIM y la configuración del endpoint son pasos prácticos iniciales.

## Transporte y contexto de conexión

El Q60 Pet se comunica mediante GSM/GPRS para el uplink al servidor, y la configuración del dispositivo puede permitir transporte UDP o TCP. Plaspy acepta ambos tipos de transporte en el puerto compartido para que usted pueda elegir el modo que coincida con el firmware del dispositivo y el entorno de la red.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el comportamiento del operador.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, por lo que se emplea el mismo puerto en toda la plataforma.
- Los rastreadores deben apuntar al endpoint d.plaspy.com o directamente a la IP del servidor 54.85.159.138 si el DNS está restringido.
- La selección del transporte (UDP vs TCP) puede afectar la entrega en redes con mala cobertura; elija la opción recomendada por el fabricante o su operador.
- Asegúrese de que el APN y los ajustes de datos del dispositivo sean correctos para que el rastreador pueda establecer conectividad GPRS hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las opciones de firmware y configuración en el Q60 Pet pueden cambiar cómo y cuándo el dispositivo reporta posición y telemetría al servidor.
- Revisiones de hardware o diferentes lotes de producción que usen el chipset MTK2503 pueden tener pequeñas diferencias en funciones disponibles o en la configuración por defecto.
- Los comandos de configuración y los métodos de aprovisionamiento varían según el fabricante; consulte la documentación de Sentar al habilitar o modificar el comportamiento de uplink.
- La elección entre UDP o TCP puede estar limitada por el NAT del operador o por las opciones por defecto del firmware; verifique qué transporte soporta su equipo.
- El puerto compartido de Plaspy y la detección automática de protocolos simplifican la configuración del servidor, pero no sustituyen la verificación de los parámetros de reporte en el dispositivo.
- Siempre valide el comportamiento real del dispositivo después de configurarlo confirmando que aparecen reportes en vivo en Plaspy e incluyen los campos de telemetría esperados.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a garantizar una configuración precisa, acelerar la resolución de problemas y asegurar un seguimiento confiable a largo plazo. Aunque Plaspy detecta automáticamente los protocolos entrantes, entender el transporte y el comportamiento de reporte del Q60 Pet reduce la fricción en la puesta en marcha y agiliza la solución de incidentes.

- Ayuda a confirmar que el dispositivo está correctamente apuntado a d.plaspy.com o a 54.85.159.138 y usa el puerto 8888.
- Facilita el diagnóstico de reportes faltantes revisando el APN, los datos de la SIM y si se está usando UDP o TCP.
- Informa sobre la frecuencia esperada de envíos del rastreador y qué campos de telemetría deberían aparecer.
- Orienta decisiones sobre gestión de batería e intervalos de reporte para equilibrar tiempo de uso y frescura de los datos.
- Sirve como referencia para futuras investigaciones cuando actualizaciones de firmware o revisiones de hardware cambien el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Sentar Q60 Pet con Plaspy ofrece a los propietarios de mascotas una forma sencilla de centralizar información de ubicación, batería y estado en una sola plataforma para visibilidad en tiempo real. El posicionamiento multimodal del dispositivo (GPS, BDS, LBS, WiFi) y su diseño compacto lo hacen adecuado para el monitoreo diario de mascotas, mientras que Plaspy se encarga del lado servidor de recibir, normalizar y presentar los datos para alertas, zonas seguras e historial.

Si desea conocer más sobre cómo Plaspy funciona con rastreadores como el Q60 Pet, visite https://www.plaspy.com para información de la plataforma y guías de despliegue. Para detalles específicos del protocolo del dispositivo, notas de versión de firmware y las últimas instrucciones del fabricante, verifique la información actual en el sitio de Sentar en http://www.sentarsmart.com/. El soporte de protocolo y el comportamiento del firmware pueden evolucionar con el tiempo, por lo que consultar la documentación del fabricante garantiza que tenga la orientación más precisa para su equipo.
