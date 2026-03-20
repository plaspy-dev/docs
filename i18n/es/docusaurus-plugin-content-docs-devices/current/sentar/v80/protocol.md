---
slug: /sentar/v80/protocol
id: v80-protocol
sidebar_label: Protocol
title: Sentar - V80 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del reloj GPS infantil Sentar V80 y cómo se comunica con los servidores de Plaspy para ubicación y alertas
keywords:
  - Protocolo Sentar V80
  - protocolo GPS Sentar V80
  - protocolo de rastreo Sentar V80
  - comunicación Sentar V80
  - Sentar V80 Plaspy
  - protocolo reloj GPS infantil Sentar
  - compatibilidad rastreador V80
  - protocolo rastreador V80
  - protocolo rastreador Sentar
  - protocolo rastreador GPS Plaspy
---

# Sentar - Protocolo V80

Esta página describe el contexto público del protocolo para usar el rastreador Sentar V80 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales con los servidores de Plaspy y qué considerar al configurar el reloj para que reporte ubicación y eventos. La guía está pensada para usuarios técnicos que necesiten comprender el papel de comunicación del dispositivo sin exponer detalles sensibles de parsers o firmware.

El reloj GPS infantil Sentar V80 versión 1.22 utiliza múltiples tecnologías de localización como GPS, AGPS, LBS y WiFi, y soporta funciones como alertas SOS, voz bidireccional y geocercas. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre unidades V80 o después de actualizaciones de firmware.

## Resumen del protocolo

El protocolo del dispositivo define cómo el V80 informa identidad, posición, estado y eventos a un servidor remoto, y cómo se intercambian comandos remotos o acuses de recibo cuando están soportados. Para la integración con Plaspy, comprender el protocolo a alto nivel ayuda a asegurar que el dispositivo esté configurado para enviar datos útiles que Plaspy pueda procesar y mostrar.

- El protocolo establece la secuencia y los tipos de mensajes que el reloj envía para reportes periódicos de ubicación, eventos SOS y señalización de llamadas bidireccionales.
- Transporta información identificativa para que Plaspy asocie los mensajes entrantes con una cuenta de dispositivo específica.
- Los datos de ubicación de GPS, AGPS, LBS y WiFi se transmiten a través del protocolo para que Plaspy pueda resolver posiciones en mapas y en el historial.
- Banderas de evento como SOS, batería baja o cruces de geocerca se envían junto con la información de ubicación para permitir alertas y reglas.
- Los detalles de transporte (TCP o UDP) y la configuración del endpoint determinan cómo el dispositivo alcanza los servidores de Plaspy, mientras que el protocolo define la semántica de los mensajes.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir reportes de rastreadores en un endpoint compartido y detectar automáticamente el protocolo del dispositivo, por lo que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de la plataforma. La configuración correcta del dispositivo para que reporte a Plaspy suele ser el único requisito para que la detección automática funcione.

- Plaspy escucha en un único endpoint compartido para los dispositivos soportados, de modo que una sola configuración suele ser suficiente.
- El endpoint del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y también es accesible en la IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy, por lo que raramente es necesario seleccionar el protocolo manualmente.
- Asegúrese de que el dispositivo esté configurado para reportar al endpoint de Plaspy y que cualquier ajuste de red requerido en el dispositivo sea correcto para que éste pueda alcanzar el servidor.

## Transporte y configuración de conexión

Los ajustes de transporte y conexión básicos determinan cómo el V80 envía mensajes al servicio de Plaspy. El reloj puede soportar diferentes opciones de transporte y configuraciones de operador; elegir el transporte y el endpoint correctos es necesario para una comunicación confiable.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138; ambos resuelven al mismo endpoint de reporte de Plaspy.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, así que debe establecerse el mismo puerto saliente en el rastreador.
- Elementos de la red como NAT del operador móvil, cortafuegos o restricciones de APN pueden afectar la conectividad y deben permitir tráfico saliente hacia el endpoint de Plaspy en el puerto 8888.
- Confirme que el rastreador tiene una conexión de datos activa en la SIM y los ajustes de APN correctos cuando se requiera reporte por celular.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar cómo el V80 formatea o secuencia los mensajes; verifique la compatibilidad tras cualquier actualización de firmware.
- Las revisiones de hardware o los modelos variantes pueden implementar conjuntos de mensajes o funciones opcionales ligeramente distintos; compruebe el identificador específico del modelo.
- Las opciones de configuración del fabricante, como la selección de transporte (TCP vs UDP) y los intervalos de reporte, afectan cómo Plaspy recibe e interpreta los datos.
- Algunas funciones como la voz bidireccional o la localización asistida por WiFi pueden requerir configuración adicional o permisos del operador móvil.
- Valide que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar que Plaspy pueda recibir los datos.
- En caso de duda, consulte la documentación del fabricante y confirme que el dispositivo está enviando reportes regulares a Plaspy antes de asumir paridad total de funciones.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del V80 ayuda a asegurar un funcionamiento fiable, facilita la resolución de problemas y mejora la disponibilidad a largo plazo de los datos de ubicación y eventos en Plaspy.

- Ajustes correctos de endpoint y transporte reducen el tiempo de incorporación y evitan reportes perdidos.
- Conocer las diferencias de firmware y hardware ayuda a diagnosticar por qué un dispositivo puede no reportar ciertos eventos.
- Entender cómo se combinan las fuentes de ubicación aclara las expectativas de precisión en distintos entornos.
- Conocer los intervalos de reporte y los disparadores de eventos permite ajustar el equilibrio entre autonomía de batería y frecuencia de actualizaciones.
- Reconocer el papel de la configuración celular y de red evita sorpresas de conectividad cuando los dispositivos se trasladan entre operadores o regiones.

## Por qué usar Plaspy con este protocolo

Usar el Sentar V80 con Plaspy ofrece a organizaciones y cuidadores un lugar unificado para ver posiciones en tiempo real, historial y alertas de eventos de relojes GPS infantiles junto con otros activos rastreados. La detección automática de protocolo de Plaspy y su modelo de reporte en un solo puerto simplifican la incorporación del dispositivo, de modo que el V80 puede comenzar a enviar ubicación y eventos SOS con una configuración mínima cuando se apunta el rastreador al endpoint de Plaspy.

Para obtener más información sobre Plaspy y cómo maneja el reporte de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo y firmware específica del dispositivo con el fabricante en http://www.sentarsmart.com/
