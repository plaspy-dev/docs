---
slug: /reachfar/rf_v03_sos/protocol
id: rf_v03_sos-protocol
sidebar_label: Protocol
title: Reachfar - RF-V03-SOS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GPS Reachfar RF-V03-SOS y su comunicación con Plaspy para rastreo y alertas
keywords:
  - Protocolo Reachfar RF-V03-SOS
  - Protocolo GPS Reachfar RF-V03-SOS
  - Compatibilidad RF-V03-SOS Plaspy
  - Protocolo tracker Reachfar
  - Protocolo rastreador GPS vehicular
  - Protocolo dispositivo Plaspy
  - Rastreo de flotas Reachfar
  - Comunicación RF V03 SOS
  - Integración rastreador GPS
  - Buenas prácticas protocolo rastreo
---

# Reachfar - Protocolo RF-V03-SOS

Esta página explica el contexto público del protocolo para usar el rastreador Reachfar RF-V03-SOS con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy en términos generales y no sensibles, para que gerentes de flota e integradores entiendan las expectativas de conexión, las opciones de transporte y el papel del protocolo al reportar ubicación, eventos y telemetría.

Plaspy acepta datos de dispositivos compatibles usando configuraciones compartidas de conexión. Para Plaspy el endpoint del servidor es d.plaspy.com y la IP del servidor es 54.85.159.138 usando el puerto 8888. Los equipos pueden configurarse para reportar por UDP o TCP al puerto 8888. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene consultar al proveedor del dispositivo para detalles específicos del firmware.

## Resumen del protocolo

El protocolo de comunicación define cómo el RF-V03-SOS envía posición, estado, eventos y alarmas a un backend como Plaspy. En términos generales, el protocolo permite que el rastreador se identifique, transmita telemetría que Plaspy pueda interpretar y reporte eventos como SOS, estado de ignición y alarmas por vibración.

- Permite actualizaciones de ubicación periódicas y por eventos desde el dispositivo hacia Plaspy para seguimiento en tiempo real y registro histórico.
- Transmite la identidad y el estado del equipo para que Plaspy asocie los mensajes entrantes con el activo correcto y los campos de telemetría.
- Entrega señales de eventos como pulsaciones de SOS, alertas por vibración y estado remoto del motor, que Plaspy muestra como alertas y desencadenadores en flujos de trabajo.
- Soporta la subida de datos almacenados cuando se restablece la conectividad, de modo que los puntos guardados en zonas sin cobertura lleguen a Plaspy para reproducción histórica.
- Opera sobre transporte celular estándar para que Plaspy pueda mostrar ubicación, alertas y telemetría sin requerir cambios en aplicaciones específicas del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de muchos rastreadores en un punto común y detectar automáticamente el protocolo del emisor. Cuando un RF-V03-SOS se configura para reportar al endpoint de Plaspy, la plataforma empata las sesiones entrantes con el manejador de protocolo correspondiente sin que normalmente sea necesaria una selección manual.

- Los equipos deben apuntar a d.plaspy.com o a la IP del servidor 54.85.159.138 y usar el puerto 8888 para alcanzar Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración e incorporación de equipos.
- La detección automática del protocolo ocurre cuando el dispositivo reporta al endpoint, por lo que seleccionar manualmente el protocolo suele ser innecesario.
- Es necesario configurar correctamente el equipo en el lado del rastreador para que la detección automática tenga éxito.
- Si el comportamiento difiere después de la configuración, comprobar la versión de firmware y el transporte del dispositivo (UDP o TCP) es un buen primer paso diagnóstico.

## Contexto de transporte y conexión

Este apartado cubre los transportes de red y los ajustes de endpoint que el RF-V03-SOS puede usar para comunicarse con Plaspy. El dispositivo soporta reportes por celular y almacena datos localmente cuando se pierde cobertura, subiendo los puntos en búfer cuando regresa la conectividad.

- El rastreador puede configurarse para enviar datos por UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los equipos pueden apuntar al dominio d.plaspy.com o usar la dirección IP 54.85.159.138 al configurar el endpoint del servidor.
- Plaspy escucha en el mismo puerto 8888 para todos los dispositivos compatibles, lo que facilita la integración.
- Elija UDP cuando se prefiera un reporte ligero y de baja latencia y el firmware del dispositivo lo soporte; elija TCP cuando la entrega confiable y la persistencia de sesión sean importantes.
- Asegúrese de que el proveedor celular y cualquier firewall intermedio permitan tráfico saliente hacia el endpoint y puerto de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de los mensajes o las funciones habilitadas; verifique el firmware del rastreador antes de desplegar.
- Las variantes regionales del fabricante y los tipos de módulo radio pueden afectar los transportes soportados y las funciones disponibles, por ejemplo la disponibilidad de monitoreo de voz en ciertas variantes.
- La elección entre UDP y TCP puede estar limitada por el firmware del dispositivo o por el comportamiento de la red del proveedor de SIM.
- El comportamiento de almacenamiento en zonas sin cobertura y la cantidad máxima de puntos en búfer dependen de la configuración y el firmware del dispositivo.
- Dado que el RF-V03-SOS ha sido listado como fuera de producción por el fabricante, confirme disponibilidad y alternativas recomendadas con el proveedor.
- Valide la compatibilidad comparando las notas de versión del fabricante con los requisitos de incorporación de Plaspy para una integración confiable.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a asegurar una configuración correcta, acelerar la resolución de problemas y garantizar un comportamiento predecible a largo plazo al integrar el RF-V03-SOS con Plaspy. Tener expectativas claras sobre transporte, endpoints y reporte de eventos reduce tiempos de inactividad y mejora la fidelidad de las alertas.

- Permite confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que los datos lleguen de forma confiable.
- Facilita el diagnóstico de problemas como telemetría faltante, eventos incompletos o subidas en búfer demoradas.
- Apoya decisiones informadas sobre la elección de transporte y las actualizaciones de firmware que afectan funcionalidades como monitoreo de voz o corte de motor.
- Ayuda a los equipos operativos a alinear el comportamiento del dispositivo con las necesidades de alertas e informes de Plaspy para seguridad y cumplimiento.
- Reduce sorpresas al migrar dispositivos o actualizar firmware de flota al anticipar cambios relacionados con el protocolo.

## Por qué usar Plaspy con este protocolo

Combinar el RF-V03-SOS con Plaspy ofrece visibilidad centralizada para flotas y propietarios de activos que requieren ubicación en tiempo real confiable, alertas y reproducción histórica. Plaspy recibe la telemetría del rastreador y muestra estado de ignición, eventos SOS, alarmas de movimiento e historial almacenado en paneles que apoyan la toma de decisiones operativas y la respuesta a incidentes.

Para saber más sobre cómo Plaspy trabaja con una amplia gama de rastreadores y las capacidades disponibles para el monitoreo de flotas, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y disponibilidad más recientes, verifique la documentación del fabricante en https://www.reachfargps.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme la guía más reciente del fabricante al planificar despliegues.
