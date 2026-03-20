---
slug: /teltonika/fmm920/protocol
id: fmm920-protocol
sidebar_label: Protocol
title: Teltonika - FMM920 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del Teltonika FMM920 y su comunicación con Plaspy para rastreo y telemetría confiables
keywords:
  - Teltonika FMM920
  - Protocolo FMM920
  - Protocolo GPS FMM920
  - Teltonika FMM920 Plaspy
  - Comunicación FMM920
  - Protocolo de rastreo FMM920
  - Rastreador GPS FMM920
  - Seguimiento de flotas Teltonika FMM920
  - Sensores BLE FMM920
  - Protocolo de rastreador Teltonika
---

# Teltonika - Protocolo FMM920

Esta página resume el contexto público del protocolo para usar el rastreador Teltonika FMM920 con Plaspy. Se enfoca en los detalles de comunicación y conexión relevantes para la integración y solución de problemas, sin entrar en internos del dispositivo ni en aspectos sensibles de implementación. Use esto como referencia sobre cómo el FMM920 comunica normalmente con Plaspy y qué verificar durante la configuración.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, variantes regionales del dispositivo y las prácticas de configuración del fabricante. Para tramas de protocolo específicas por dispositivo y cambios de firmware, consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo del FMM920 define cómo el rastreador informa posición, telemetría y eventos a un servidor remoto para que Plaspy pueda recibir y presentar esos datos. En términos generales, el protocolo abarca el intercambio de identidad, reportes periódicos o por evento y cargas de telemetría que transportan ubicación, lecturas de sensores y estado del dispositivo al endpoint en la nube.

- Permite que el rastreador reporte posición GNSS, lecturas de sensores BLE y actualizaciones de estado del dispositivo a Plaspy para monitoreo en tiempo real.
- Proporciona un canal consistente para alertas y notificaciones de eventos como pérdida de alimentación, manipulación y estado de la batería de respaldo.
- Posibilita acciones de control remoto iniciadas desde una plataforma de gestión cuando las funciones del fabricante lo permitan.
- Transporta información de identificación y estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Opera junto con la conectividad celular y el firmware del dispositivo para determinar intervalos de reporte y condiciones de transmisión de datos.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos las conexiones entrantes de los dispositivos y utiliza la información presente en esas conexiones para identificar el protocolo del rastreador. Cuando un Teltonika FMM920 apunta al endpoint de Plaspy y envía su tráfico de reporte, Plaspy reconocerá el protocolo y gestionará los mensajes apropiadamente sin necesidad de seleccionar el protocolo manualmente en la mayoría de los casos.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para reporte de dispositivos.
- El puerto que usa Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración de la red.
- Cuando un dispositivo apunta correctamente a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy detecta automáticamente el protocolo del rastreador.
- La configuración típica no requiere seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento forman parte del contexto público de integración para el FMM920. El rastreador utiliza redes celulares para alcanzar Plaspy y puede configurarse para usar transporte UDP o TCP hacia el endpoint de Plaspy. Entender qué transporte se usa ayuda a garantizar que las reglas de red y firewall permitan la comunicación adecuada del dispositivo.

- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El transporte soportado para reportar a Plaspy es UDP o TCP en el puerto 8888, según la configuración del dispositivo y los requisitos de la red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles para simplificar despliegues y la configuración de firewalls.
- Elija UDP cuando se priorice menor sobrecarga y menor latencia, o TCP cuando se prefiera un handshake de transporte confiable, de acuerdo con la capacidad del dispositivo y la política del operador.
- Asegúrese de que las reglas del operador y los firewalls locales permitan conexiones salientes desde los dispositivos hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de compatibilidad del protocolo

- La versión de firmware y la configuración del dispositivo pueden cambiar cuándo y cómo se reporta la telemetría; siempre verifique el comportamiento para su revisión de firmware.
- Las variantes de hardware regionales o diferencias en las bandas de radio no modifican el endpoint público de reporte, pero pueden afectar la conectividad en áreas específicas.
- La selección de transporte entre UDP y TCP es una opción de configuración en el dispositivo y puede influir en las características de entrega.
- Funciones del lado del fabricante como soporte de sensores BLE y acciones remotas dependen del firmware del dispositivo y de las opciones de hardware disponibles.
- Valide la compatibilidad probando un número reducido de dispositivos en su red antes de un despliegue masivo.
- Consulte la documentación oficial de Teltonika para detalles específicos de firmware y características soportadas en su revisión de hardware exacta.

## Por qué es importante entender el protocolo

Comprender cómo el FMM920 se comunica con Plaspy ayuda a garantizar una incorporación de dispositivos fiable, la ingestión precisa de telemetría y una solución de problemas eficiente cuando las redes o los dispositivos se comportan de forma inesperada. Conocer el protocolo público y el contexto de conexión reduce el tiempo de configuración y mejora la confianza operativa.

- Ayuda a confirmar que los dispositivos apuntan al endpoint correcto de Plaspy y utilizan el transporte soportado.
- Simplifica la configuración de firewalls y operadores al usar el dominio y puerto conocidos de Plaspy.
- Facilita el diagnóstico de conectividad intermitente al aclarar si los problemas son de red, transporte o configuración del dispositivo.
- Asegura que los sensores BLE y los canales de telemetría se mapeen correctamente en Plaspy para reportes precisos.
- Favorece una escalabilidad predecible de la flota al estandarizar el endpoint y puerto compartidos de Plaspy entre los dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM920 con Plaspy ofrece un camino directo hacia un rastreo centralizado, agregación de telemetría y visibilidad operativa. La forma compacta del FMM920, su soporte de sensores BLE, el reporte de batería de respaldo y las opciones celulares lo hacen adecuado para flujos de trabajo contra robos en flota, programas de vehículos compartidos y monitoreo de cargas basado en sensores cuando se integra con una plataforma en la nube que acepta reportes estándar de dispositivos.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen los pasos de configuración necesarios para incorporar dispositivos FMM920. Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles y puede aceptar tanto UDP como TCP en el puerto 8888, el despliegue y la planificación de firewalls se simplifican para los operadores de flota.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device protocol details, firmware behavior, and manufacturer notes, verify information with Teltonika at https://www.teltonika-gps.com/ since firmware updates and device variants can change protocol behavior over time.
