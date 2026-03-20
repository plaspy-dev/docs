---
slug: /thingsys/ts_g17ms/protocol
id: ts_g17ms-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17Ms Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador ThingSys TS-G17Ms y su integración con Plaspy, incluyendo conexión y transporte
keywords:
  - Protocolo ThingSys TS-G17Ms
  - Protocolo GPS ThingSys TS-G17Ms
  - Compatibilidad TS-G17Ms Plaspy
  - Protocolo de comunicación TS-G17Ms
  - Protocolo de rastreo TS-G17Ms
  - Protocolo de rastreador GPS ThingSys
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreo de vehículos
  - Rastreo de flotas TS-G17Ms
  - Protocolo rastreador GPS 2G
---

# ThingSys - Protocolo TS-G17Ms

Esta página describe el contexto público del protocolo para usar el rastreador ThingSys TS-G17Ms con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, cómo Plaspy recibe los datos y en los detalles de transporte y conexión que normalmente necesitará configurar para que el equipo reporte a Plaspy.

El TS-G17Ms es un rastreador compacto 2G quad-band pensado para motocicletas, autos y vehículos comerciales. Soporta seguimiento en tiempo real por GPRS y sondeo por SMS, alertas SOS, monitoreo de voz remoto, alarmas por vibración y exceso de velocidad, detección de ignición ACC y un relé para corte remoto de combustible o alimentación. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo del rastreador es el conjunto de mensajes y comportamientos de reporte que usa el TS-G17Ms para identificarse, enviar datos de ubicación y eventos, y recibir comandos remotos cuando están soportados. En la práctica, este protocolo permite que el dispositivo transmita posiciones GNSS, eventos de alarma y telemetría básica a Plaspy para que la plataforma muestre la ubicación, emita alertas y active flujos de trabajo.

- Permite reportes periódicos o por eventos del TS-G17Ms a un servidor remoto para visualización y registro.
- Transmite eventos de alarma y estado como SOS, exceso de velocidad, vibración y cambios en el estado ACC para que Plaspy genere notificaciones.
- Admite sondeo ligero por SMS como modo alterno de reporte y seguimiento por traza GPRS para monitoreo continuo en línea.
- Proporciona la identificación necesaria del dispositivo para que Plaspy asocie los datos entrantes con el registro de activo correcto.
- Soporta acciones de control remoto simples cuando el firmware y el hardware instalados lo permiten, por ejemplo inmovilización basada en relé.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador. Cuando un TS-G17Ms está configurado correctamente para reportar a Plaspy, la plataforma normalmente identificará el tipo de dispositivo y comenzará a procesar mensajes de ubicación y eventos sin que sea necesaria la selección manual del protocolo en la mayoría de configuraciones.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y también puede usarse cuando se requiere un endpoint numérico.
- El puerto es 8888 y todos los dispositivos Plaspy usan el mismo puerto para reportar.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual dentro de la plataforma normalmente no es necesaria si el dispositivo reporta al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca las opciones de capa de transporte que el TS-G17Ms puede usar para alcanzar Plaspy y los parámetros prácticos que ingresará durante la configuración del equipo. Para este rastreador las opciones comunes son el reporte por GPRS al host de Plaspy o comandos SMS para sondeos ocasionales y configuración cuando no hay GPRS disponible.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o al host numérico 54.85.159.138 al configurar el servidor de reporte.
- El equipo puede ajustarse para usar UDP o TCP en el puerto 8888 según el firmware y la preferencia del instalador.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- El seguimiento por traza GPRS se usa comúnmente para actualizaciones de ubicación continuas, mientras que el sondeo por SMS funciona para consultas puntuales o como respaldo.
- Asegúrese de que el APN y los ajustes de red móvil estén correctamente configurados en el dispositivo para que el reporte por GPRS hacia Plaspy sea fiable.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la temporización de mensajes, los comandos disponibles y los detalles del reporte de eventos; verifique la versión de firmware del equipo al solucionar problemas.
- Las revisiones de hardware y las variantes regionales pueden afectar funciones disponibles como tipos de entradas, soporte de micrófono externo o el cableado del relé.
- La elección de transporte entre TCP y UDP puede influir en el comportamiento de entrega en condiciones de red móvil específicas; elija el transporte soportado y recomendado por el firmware del dispositivo.
- Algunas funciones descritas por el fabricante, como el monitoreo de voz remoto o la inmovilización por relé, requieren cableado correcto y accesorios opcionales instalados.
- Siempre valide la compatibilidad para flujos de trabajo avanzados contra la documentación oficial de ThingSys para la combinación exacta de modelo y firmware.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que los dispositivos reporten de forma fiable a Plaspy, facilita la resolución de problemas y mejora la confiabilidad operativa a largo plazo en instalaciones de flota o vehículos individuales.

- Acelera la configuración inicial asegurando que el equipo apunte al endpoint y a la configuración de transporte correctos en Plaspy.
- Facilita la interpretación del comportamiento del dispositivo cuando las alarmas o la telemetría no aparecen en la plataforma.
- Ayuda a decidir cuándo usar sondeo por SMS frente a seguimiento continuo por traza GPRS según las necesidades operativas.
- Orienta las decisiones sobre actualizaciones de firmware y la gestión de cambios cuando las actualizaciones del fabricante modifican el comportamiento.
- Reduce el tiempo de inactividad al aclarar qué funciones dependen de firmware, cableado o accesorios externos.

## Ventajas de usar Plaspy con este protocolo

Usar el TS-G17Ms con Plaspy ofrece una vía directa hacia localización en tiempo real, alertas de eventos y telemetría básica en vehículos. La combinación del conjunto de funciones del TS-G17Ms y la ingestión y visualización de Plaspy permite a los equipos operativos y a los propietarios monitorear la posición, gestionar condiciones SOS y de alarma, y ejecutar flujos de inmovilización simples cuando corresponda.

Si desea saber más sobre Plaspy y cómo se integra con rastreadores como el TS-G17Ms, visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo, el comportamiento del firmware y la guía de instalación más actual, verifique la información en el sitio del fabricante https://www.thingsys.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
