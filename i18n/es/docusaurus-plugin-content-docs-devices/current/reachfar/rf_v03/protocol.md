---
slug: /reachfar/rf_v03/protocol
id: rf_v03-protocol
sidebar_label: Protocol
title: Reachfar - RF-V03 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Reachfar RF V03 y cómo se comunica con Plaspy para seguimiento e integración confiables
keywords:
  - Protocolo Reachfar RF-V03
  - Protocolo GPS Reachfar RF-V03
  - Reachfar RF-V03 Plaspy
  - Protocolo rastreador Reachfar
  - Protocolo rastreo de vehículos
  - Protocolo GPS Reachfar
  - Compatibilidad RF V03 con Plaspy
  - Rastreo de flotas Reachfar RFV03
  - Protocolo de comunicación RF V03
  - Integración de protocolo de rastreador Plaspy
---

# Reachfar - Protocolo RF-V03

Esta página describe el contexto público del protocolo para utilizar el rastreador GPS Reachfar RF-V03 con Plaspy. Se enfoca en detalles prácticos no sensibles sobre cómo el dispositivo se comunica con la plataforma Plaspy y qué aspectos considerar al configurar los reportes para obtener seguimiento y monitoreo confiables.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza el contexto de conexión y compatibilidad más que los detalles internos del dispositivo.

## Resumen del protocolo

El RF-V03 utiliza un protocolo de reporte para enviar información de ubicación, estado y alarmas a un servidor remoto. A alto nivel, el protocolo permite que el rastreador establezca conectividad, se identifique y envíe datos que Plaspy puede usar para seguimiento en tiempo real y visualización histórica de rutas.

- El protocolo transporta telemetría básica como posición, hora y eventos de movimiento que Plaspy convierte en actualizaciones de ubicación útiles.
- La identidad del dispositivo y la información de estado forman parte del flujo de reporte y permiten a Plaspy asociar los mensajes a un rastreador específico.
- El reporte de eventos cubre funciones descritas por el fabricante, tales como alertas de geocerca, alarmas por exceso de velocidad, avisos de manipulación por corte de cable y disparos del sensor G.
- La configuración y envío de comandos entre el servidor y el dispositivo normalmente usan el mismo canal de transporte que los reportes y se seleccionan en el equipo como UDP o TCP.
- Dado que las implementaciones del protocolo pueden diferir entre revisiones de firmware, Plaspy se enfoca en interpretar la telemetría estándar y los tipos de evento, dejando el enmarcado específico del dispositivo a la especificación del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador según el tráfico entrante y la identidad del equipo. En la mayoría de los casos, solo es necesario apuntar el rastreador al endpoint de Plaspy y la plataforma detectará y decodificará los mensajes del dispositivo sin selección manual de protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para configuración directa.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes y configuración.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones de red y el soporte de firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios por lo general no necesitan seleccionar un protocolo en la plataforma cuando el dispositivo está configurado para reportar a Plaspy.
- Asegúrese de que el equipo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir e identificar sus mensajes.

## Transporte y contexto de conexión

Los ajustes de conexión y transporte determinan cómo el RF-V03 se comunica con los servidores de Plaspy a través de la red móvil. El rastreador soporta reporte celular estándar y debe configurarse para usar los parámetros APN del operador para la transmisión de datos. La selección de transporte entre UDP y TCP puede afectar el comportamiento de entrega y debe coincidir con las opciones de configuración del dispositivo.

- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntarse al servidor Plaspy mediante el dominio d.plaspy.com o por la IP 54.85.159.138 cuando no haya resolución DNS disponible.
- Todos los equipos de Plaspy usan el mismo puerto 8888, lo que simplifica la configuración entre distintos modelos.
- Elija UDP para menor sobrecarga cuando sea compatible, o TCP cuando el firmware del dispositivo requiera mayor fiabilidad de sesión.
- Confirme la configuración APN de la red móvil y la conectividad de datos de la SIM antes de intentar registrar el dispositivo en Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de envío de mensajes, los eventos soportados o campos opcionales. Verifique la versión de firmware al validar el comportamiento.
- Diferentes revisiones de hardware o variantes regionales pueden implementar pequeñas diferencias en el comportamiento de reporte; valide con el equipo físico.
- La elección entre UDP y TCP en el dispositivo afecta la fiabilidad del transporte y debe coincidir con lo que el firmware ha sido probado para soportar.
- Las opciones de configuración del fabricante pueden ofrecer múltiples modos de reporte; asegúrese de que el RF-V03 esté en un modo estándar compatible con Plaspy.
- Siempre verifique la compatibilidad con la documentación más reciente del fabricante y las notas de la versión del firmware RF-V03.
- Si el comportamiento difiere de lo esperado, capture los registros de registro del dispositivo y consulte la documentación de Plaspy o al proveedor del dispositivo para aclaraciones.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador le ayuda a configurar los equipos correctamente, solucionar problemas de conectividad y obtener telemetría consistente en Plaspy. Incluso sin analizar tramas de bajo nivel, saber cómo se conecta el dispositivo y qué informa reduce el tiempo de puesta en marcha y mejora la fiabilidad.

- Garantiza que los dispositivos apunten al endpoint correcto de Plaspy para que la plataforma pueda recibir y decodificar los mensajes.
- Ayuda a diagnosticar por qué un rastreador no aparece en Plaspy revisando transporte, APN y ajustes de servidor.
- Aclara qué eventos y alarmas del dispositivo debería esperar Plaspy según las funciones del fabricante como geocerca y corte de cable.
- Facilita la planificación ante actualizaciones de firmware o cambios de hardware que puedan alterar sutilmente el comportamiento de reporte.
- Reduce el ida y vuelta con soporte al centrarse en factores de configuración y red comúnmente involucrados en fallas de conectividad.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V03 con Plaspy ofrece a las organizaciones una forma práctica de convertir los reportes del dispositivo en visibilidad de ubicación, notificaciones de alarma y visualización de rutas históricas. La plataforma de Plaspy acepta la telemetría de rastreadores que reportan al endpoint compartido y la pone a disposición para monitoreo, alertas y flujos operativos.

Si planea desplegar unidades RF-V03 a escala, configurar cada equipo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y seleccionar el transporte apropiado (UDP o TCP) permitirá que Plaspy detecte automáticamente el protocolo del dispositivo y comience a procesar datos de ubicación y eventos. Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique los detalles más recientes del protocolo y firmware en el sitio del fabricante https://www.reachfargps.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que confirme la información vigente con el fabricante antes de realizar despliegues masivos.
