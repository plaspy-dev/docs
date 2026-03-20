---
slug: /cantrack/tk100/protocol
id: tk100-protocol
sidebar_label: Protocol
title: CanTrack - TK100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack TK100 y cómo se comunica con Plaspy para un rastreo de flotas confiable
keywords:
  - Protocolo CanTrack TK100
  - Protocolo GPS CanTrack TK100
  - CanTrack TK100 Plaspy
  - Protocolo de rastreo TK100
  - Protocolo de comunicación TK100
  - Protocolo de rastreador GPS CanTrack
  - Rastreadores compatibles con Plaspy
  - Protocolo de rastreo de vehículos TK100
  - Protocolo GPS para gestión de flotas
  - Reporte GPRS TK100
---

# CanTrack - Protocolo TK100

Esta página ofrece un panorama público del protocolo utilizado por el rastreador CanTrack TK100 cuando se integra con Plaspy. Su objetivo es explicar cómo el TK100 transmite posiciones, estados y eventos de alarma a Plaspy sin entrar en detalles de implementación sensible. Use esta guía para entender las expectativas de conexión y el papel del protocolo de reporte del dispositivo al incorporar TK100 en una implementación de Plaspy.

El TK100 es un rastreador vehicular cableado que utiliza GSM/GPRS y GPS para informar ubicación, velocidad, estado de ignición y eventos de alarma. Plaspy es compatible con el TK100 desde el primer momento. Plaspy emplea configuraciones de conexión compartidas entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante —por lo que siempre conviene consultar la documentación oficial de CanTrack para detalles específicos del dispositivo.

## Visión general del protocolo

A grandes rasgos, el protocolo de reporte del TK100 permite al dispositivo identificarse ante un servidor remoto, enviar telemetría periódica y por eventos, y comunicar condiciones de alarma o manipulación para una respuesta oportuna. El protocolo es el mecanismo mediante el cual el rastreador convierte lecturas de sensores y GNSS en mensajes que una plataforma de flotas como Plaspy puede procesar y presentar.

- Transporta coordenadas, sello de tiempo, velocidad y rumbo para visualización en tiempo real y reproducción histórica.
- Reporta entradas digitales y cambios de estado como ignición (ACC), corte de alimentación, SOS y exceso de velocidad para soportar alertas y reglas.
- Permite reportes basados en eventos para entradas/salidas de geocercas, manipulación de alimentación y pulsado del botón SOS sin requerir sondeo constante.
- Lleva telemetría útil para paneles operativos, por ejemplo estado de respaldo de batería e indicadores de salud del equipo.
- Proporciona el canal para comandos remotos cuando el dispositivo lo soporta, típicamente vía SMS o funciones de gestión por GPRS.
- Permite que Plaspy correlacione la telemetría entrante con registros de la flota y flujos de alertas para uso operativo.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de muchos modelos en un mismo endpoint y puerto compartido y realiza detección automática de protocolo, por lo que normalmente no es necesario que usted seleccione manualmente un protocolo. Si un TK100 está configurado para reportar a Plaspy, será reconocido e ingestado siempre que el dispositivo apunte al endpoint de Plaspy y use un transporte soportado.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 con puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según capacidades del equipo y transporte elegido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Cuando un TK100 reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia la telemetría al perfil de dispositivo correcto.
- Usualmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el rastreador está configurado para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si un dispositivo no aparece en Plaspy, verifique primero la configuración de reporte y el endpoint del servidor antes de indagar en detalles del protocolo.

## Transporte y contexto de conexión

El TK100 puede enviar telemetría por GPRS (TCP/IP) y también es capaz de usar mensajes SMS para alertas o control remoto. Para reportes IP, el dispositivo puede usar TCP o UDP para comunicarse con Plaspy según el firmware y las opciones de configuración.

- El TK100 puede configurarse para usar UDP o TCP en el puerto 8888 para alcanzar el endpoint de Plaspy.
- Configure el dispositivo apuntando al dominio del servidor Plaspy d.plaspy.com o directamente a 54.85.159.138 cuando se requiera direccionamiento estático.
- Plaspy utiliza el puerto 8888 para todos los rastreadores soportados, lo que reduce la variación en la configuración entre equipos.
- El reporte por IP GPRS es la vía principal para telemetría en tiempo real y cargas históricas; SMS permanece disponible como respaldo para comandos y notificaciones.
- Las condiciones de red y el comportamiento del operador pueden afectar la entrega de paquetes; elegir el transporte adecuado (TCP para mayor confiabilidad, UDP cuando el dispositivo lo soporte) depende de las capacidades del firmware.
- Asegúrese de que el APN y la configuración GPRS en el TK100 estén correctos para la SIM y el operador utilizado para que pueda alcanzar d.plaspy.com o 54.85.159.138.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles o comportamientos opcionales; confirme siempre las notas de la versión del firmware del TK100 que haya instalado.
- Las revisiones de hardware y las variantes regionales a veces modifican los transportes soportados o los valores por defecto de reporte; verifique la etiqueta del dispositivo y la documentación.
- El TK100 soporta reportes tanto por GPRS como por SMS; la selección del transporte influye en la rapidez con que los mensajes llegan a Plaspy y en las funciones disponibles.
- Las funciones de gestión remota, como el control del inmovilizador, suelen implementarse vía SMS o comandos autenticados al servidor; los detalles de implementación varían según el firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, pero la detección confiable depende de que el dispositivo alcance correctamente el endpoint de Plaspy y use ajustes de reporte compatibles.
- Valide APN, activación de SIM y la instalación de antenas durante la puesta en marcha para descartar problemas de conectividad no relacionados con el análisis del protocolo.
- Para obtener la guía de compatibilidad más actualizada consulte la documentación y las notas de firmware de CanTrack específicas para el modelo TK100.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del TK100 ayuda a instaladores, gestores de flotas e integradores a garantizar reportes fiables, solucionar problemas de conectividad y planear el mantenimiento a largo plazo de los dispositivos. Tener claro cómo y cuándo el equipo envía datos reduce el tiempo de diagnóstico y mejora la disponibilidad operativa de la flota.

- Confirma la correcta configuración del endpoint y del transporte para que los dispositivos lleguen a Plaspy de forma confiable.
- Guía la resolución de problemas cuando faltan eventos o telemetría, aislando problemas de red, transporte o configuración.
- Ayuda a decidir cuándo usar SMS como alternativa o canal de comandos remotos cuando el GPRS sea poco fiable.
- Facilita la planificación de actualizaciones de firmware, ya que los cambios relacionados con el protocolo pueden venir con nuevas versiones.
- Permite una integración predecible de alarmas y entradas digitales en los flujos de alertas y operación de Plaspy.
- Ayuda a validar que funciones antirrobo como inmovilizador y SOS operen como se espera en el entorno de despliegue.

## Por qué usar Plaspy con este protocolo

Combinar el CanTrack TK100 con Plaspy ofrece a las organizaciones una vía práctica para lograr visibilidad centralizada de vehículos, alertas de eventos y análisis histórico. El diseño cableado del TK100 y su soporte para reportes por GPRS y SMS lo convierten en una opción versátil para flotas, servicios y casos de uso antirrobo, mientras que Plaspy transforma la telemetría entrante en mapas, alertas e informes para la toma de decisiones operativas.

Si desea saber más sobre cómo Plaspy gestiona integraciones de rastreadores y compatibilidad de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y orientación del fabricante sobre el TK100, consulte https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
