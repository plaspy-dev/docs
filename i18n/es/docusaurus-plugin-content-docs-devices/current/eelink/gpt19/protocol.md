---
slug: /eelink/gpt19/protocol
id: gpt19-protocol
sidebar_label: Protocol
title: EElink - GPT19 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del EElink GPT19 y cómo se comunica con Plaspy para seguimiento GPS fiable
keywords:
  - eelink gpt19 protocolo
  - protocolo gps eelink gpt19
  - protocolo seguimiento eelink gpt19
  - compatibilidad eelink gpt19 plaspy
  - protocolo rastreador gps eelink
  - compatibilidad gps plaspy
  - protocolo dispositivo plaspy
  - integración rastreador gpt19
  - integración dispositivo eelink
  - rastreo vehicular eelink
---

# EElink - Protocolo GPT19

Esta página describe el contexto del protocolo público para usar el rastreador EElink GPT19 con Plaspy. Se centra en cómo el dispositivo informa posición y estado a la plataforma Plaspy y qué ajustes y expectativas generales se requieren para un funcionamiento confiable. La variante GPT19-H es un rastreador GPS de larga duración pensado para alquiler de vehículos, logística, protección de activos y aplicaciones IoT; ofrece resistencia IP67, montaje magnético y batería reemplazable de larga vida.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Además, el GPT19 es compatible con el protocolo de integración EELINK 2.0, que puede emplearse para integraciones del lado del servidor y configuración remota según el firmware del equipo.

## Visión general del protocolo

El protocolo define cómo el GPT19 informa posición, movimiento y datos de estado a un servidor remoto, y cómo se activan la configuración remota y las notificaciones desde el servidor. En la práctica, el protocolo permite que el rastreador se identifique, transmita ubicación y telemetría, reciba cambios de configuración permitidos y soporte el reporte de geocercas y alertas a una plataforma de flotas como Plaspy.

- Permite al rastreador enviar ubicación, estado de batería, movimiento y eventos de alarma a Plaspy.
- Permite que el dispositivo se identifique y asocie mensajes con un único registro de dispositivo en el servidor.
- Soporta configuración remota y notificaciones entregadas desde el servidor al equipo.
- Funciona con funciones del rastreador como AGPS y asistencia LBS para obtener fijaciones más rápidas y reducir el consumo de energía.
- Puede implementarse junto con el protocolo de integración EELINK 2.0 según el firmware del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un único endpoint compartido y determina automáticamente qué protocolo soportado está en uso, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo. Cuando el GPT19 se configura para reportar a Plaspy usando los ajustes de conexión de la plataforma, Plaspy asociará los mensajes entrantes con el dispositivo y analizará los campos disponibles para seguimiento y alertas.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138. El puerto es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes desde dispositivos compatibles.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el lado del rastreador.
- Si el GPT19 está configurado para reportar al endpoint de Plaspy, la plataforma analizará los informes entrantes y los mapeará al registro del dispositivo.
- Usted normalmente solo necesita configurar el servidor de reporte y el transporte en el equipo, no el tipo de parser, siempre que el dispositivo sea compatible y esté correctamente configurado.

## Transporte y contexto de conexión

El GPT19 puede configurarse para enviar datos mediante los protocolos de transporte estándar que soporta el dispositivo y el firmware del fabricante. En el lado de Plaspy, el servicio escucha en un único puerto común y acepta conexiones usando los modos de transporte estándar que el rastreador soporte.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como dirección del servidor de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita despliegues masivos y el aprovisionamiento.
- Elija UDP o TCP en el rastreador conforme a la documentación del dispositivo y al comportamiento esperado para acuses de recibo y retransmisiones.
- Las condiciones de red, el comportamiento de NAT del operador y la configuración del APN pueden influir en si UDP o TCP es preferible para un despliegue específico.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensajes, comandos soportados y el comportamiento temporal; siempre consulte las notas de la versión del firmware.
- Las revisiones de hardware pueden afectar sensores disponibles, reporte de batería y la gestión de energía incluso cuando el protocolo sea en gran medida similar.
- Variaciones por parte del fabricante en EELINK 2.0 o personalizaciones del firmware del proveedor pueden introducir diferencias de compatibilidad entre unidades.
- La selección de transporte (UDP frente a TCP) puede verse limitada por el comportamiento del operador de red o las opciones de configuración del equipo.
- Valide que el rastreador esté programado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que llegue al endpoint de Plaspy.
- Confirme procedimientos de configuración y activación como la creación de geocercas, modos de reporte y configuración remota con la documentación oficial del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que los dispositivos estén configurados correctamente, reporten de forma fiable y se integren de forma limpia en Plaspy para monitoreo y alertas. Una comprensión básica de los roles del protocolo reduce el tiempo de resolución de problemas y favorece un comportamiento predecible del dispositivo en campo.

- Asegura que se use la dirección de servidor y el transporte correctos para que el dispositivo alcance Plaspy.
- Ayuda a diagnosticar problemas como informes perdidos, identificación incorrecta del dispositivo o campos de datos inesperados.
- Orienta las decisiones sobre intervalos de reporte y gestión de energía para cumplir objetivos de vida útil de batería en dispositivos de larga espera.
- Apoya la configuración de geocercas, alarmas y flujos de configuración remota según las capacidades del equipo.
- Mejora la preparación operativa al alinear las funcionalidades del firmware con las expectativas de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el EElink GPT19 con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación y estado desde rastreadores robustos y de larga duración, y centralizar el monitoreo, las alertas y los reportes históricos. La clasificación IP67 del GPT19, su montaje magnético, batería reemplazable y la asistencia AGPS/LBS lo hacen ideal para seguimiento de activos y escenarios logísticos donde la larga espera y la instalación discreta son importantes.

Para saber más sobre Plaspy y cómo soporta despliegues multi dispositivo y detección de protocolos, visite https://www.plaspy.com. Para la documentación más reciente específica del dispositivo, notas de firmware y guía técnica del fabricante, verifique los detalles en el sitio oficial de EElink https://www.eelink.com.cn/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda revisar la documentación del fabricante para confirmar el comportamiento actual.
