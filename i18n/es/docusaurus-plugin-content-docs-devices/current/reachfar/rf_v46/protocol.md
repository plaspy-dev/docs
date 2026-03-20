---
slug: /reachfar/rf_v46/protocol
id: rf_v46-protocol
sidebar_label: Protocol
title: Reachfar - RF-V46 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del reloj GPS Reachfar RF V46 y su comunicación con Plaspy para seguimiento y telemetría
keywords:
  - protocolo Reachfar RF V46
  - protocolo GPS Reachfar RF V46
  - protocolo Reachfar RF V46 para Plaspy
  - protocolo de comunicación Reachfar RF V46
  - protocolo de seguimiento Reachfar RF V46
  - rastreador GPS portátil Reachfar
  - protocolo de dispositivo Plaspy
  - compatibilidad de rastreadores Plaspy
  - protocolo de reloj para seguimiento personal
  - documentación de protocolo para rastreadores GPS
---

# Reachfar - Protocolo RF-V46

Esta página explica, en términos públicos y no sensibles, el contexto del protocolo para usar el reloj video-telefonía GPS portátil Reachfar RF-V46 con Plaspy. El objetivo es describir cómo el dispositivo se comunica con Plaspy de forma general para que implementadores e integradores comprendan el comportamiento de reporte del dispositivo cuando se emplea en seguimiento personal, monitoreo por cuidadores e ingestión de telemetría.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del RF-V46, la revisión de hardware y la implementación del fabricante; por eso esta página describe el contexto general del protocolo y del transporte más que formatos de paquetes específicos de firmware.

## Resumen del protocolo

El protocolo del RF-V46 describe cómo el dispositivo portátil informa ubicación, telemetría biométrica básica e información de estado a una plataforma en la nube como Plaspy. Define cómo se identifica el reloj, cómo se empaquetan los datos de posición y sensores, y cómo el servidor y el dispositivo intercambian mensajes operativos necesarios para un monitoreo confiable.

- Permite reportes de ubicación periódicos para que Plaspy muestre la posición en mapas y registre el historial.
- Transmite telemetría biométrica básica como frecuencia cardíaca y presión arterial junto con la ubicación para aportar contexto situacional.
- Incluye identificación del dispositivo e información de estado para que Plaspy asocie los datos entrantes con una cuenta y un registro de dispositivo.
- Soporta comunicación bidireccional y señales relacionadas con voz en la medida en que el dispositivo y la red móvil lo permitan, habilitando llamadas de cuidadores y video opcional cuando esté disponible.
- Permite que la plataforma en la nube reciba alertas y eventos para que Plaspy pueda activar notificaciones, registros y flujos de escalamiento.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos configurados para reportar al endpoint de Plaspy. En la práctica esto significa que si el RF-V46 está apuntando su tráfico de reporte a Plaspy usando los ajustes de servidor y puerto compartidos, Plaspy identificará el tráfico entrante y lo procesará sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Asegúrese de que el dispositivo apunte al servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 para alcanzar la ingestión de Plaspy.
- Configure el transporte del RF-V46 para usar el transporte soportado (UDP o TCP) y el puerto compartido de Plaspy.
- Cuando el dispositivo reporte al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador y asociará los mensajes con el registro correcto del dispositivo.
- Los usuarios por lo general no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Si un dispositivo no parece reportar correctamente, verifique la dirección del servidor, la selección de transporte y que la SIM del dispositivo tenga una conexión de datos móvil funcional.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el RF-V46 llega a Plaspy a través de la red móvil más que los formatos de paquete de bajo nivel. El RF-V46 usa 4G para voz y datos; cuando se configura para reportar a Plaspy puede usar UDP o TCP en el puerto compartido de Plaspy según soporte y ajustes del dispositivo.

- El RF-V46 puede configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Los dispositivos reportan al punto de ingestión de Plaspy en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Dependiendo del firmware y la configuración del dispositivo, se puede seleccionar UDP o TCP como protocolo de transporte al apuntar el dispositivo a Plaspy.
- Confirme que la SIM del dispositivo tenga un plan de datos activo y que las condiciones de la red del operador permitan conexiones salientes hacia el servidor elegido.
- Asegúrese de que cualquier firewall de red o reglas NAT en la ruta local o del operador permitan conexiones salientes hacia el servidor y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware entre unidades RF-V46 pueden añadir o cambiar funciones como la frecuencia de telemetría, señales opcionales de video o los modos de transporte soportados.
- Revisiones de hardware y variantes regionales pueden afectar qué sensores o funciones de voz/video están presentes y cómo se reportan.
- La elección entre UDP y TCP puede afectar las características de entrega; use el transporte que el firmware de su dispositivo soporte y pruebe la confiabilidad en su despliegue.
- Los valores por defecto de configuración del fabricante pueden diferir entre unidades; verifique explícitamente la dirección del servidor y el transporte en los dispositivos destinados a Plaspy.
- Valide la compatibilidad contra la documentación actual y las notas de la versión del fabricante antes de un despliegue a gran escala.
- Probar un pequeño lote de unidades en campo antes del despliegue masivo ayuda a confirmar que la combinación de firmware, operador y ajustes de Plaspy se comporta como se espera.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del RF-V46 y cómo interactúa con Plaspy ayuda a garantizar un seguimiento confiable, alertas oportunas y una resolución de problemas eficiente durante el despliegue y la operación. Conocer el comportamiento esperado de reporte y el contexto de transporte reduce el tiempo de configuración y mejora la fiabilidad a largo plazo.

- Acelera la configuración inicial al indicar la dirección del servidor y la configuración de transporte correctas para el dispositivo.
- Mejora la resolución de problemas cuando los mensajes se retrasan o faltan, al acotar posibles causas a transporte, ajustes del servidor o conectividad de la SIM.
- Ayuda a planificar actualizaciones de firmware y cambios de funciones que puedan afectar la telemetría o la frecuencia de reporte.
- Permite tomar decisiones informadas sobre la escala de despliegue, uso de datos y compensaciones en la vida útil de la batería.
- Facilita planes de validación y pruebas claros antes de integrar dispositivos en flujos de trabajo activos de cuidadores.

## Por qué usar Plaspy con este protocolo

Combinar el Reachfar RF-V46 con Plaspy ofrece a cuidadores y organizaciones un modo unificado de recibir ubicación, telemetría biométrica básica y eventos de comunicación desde un reloj GPS 4G de muñeca. Plaspy ingiere los reportes del dispositivo y brinda mapas, alertas y vistas históricas que respaldan el monitoreo diario y la respuesta a incidentes sin que los usuarios deban manejar detalles de protocolo de bajo nivel.

Si está evaluando el RF-V46 para cuidado de personas mayores, seguridad infantil o protección personal, Plaspy puede actuar como la capa de plataforma que recoge el tráfico de reporte del RF-V46, muestra la posición y la telemetría en tiempo real, y dispara notificaciones basadas en umbrales o eventos de geocerca. Learn more about Plaspy at https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer site https://www.reachfargps.com/ as protocol support and device behavior can change over time.
