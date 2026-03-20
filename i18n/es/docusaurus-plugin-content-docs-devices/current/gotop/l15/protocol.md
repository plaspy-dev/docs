---
slug: /gotop/l15/protocol
id: l15-protocol
sidebar_label: Protocol
title: GOTOP - L15 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GOTOP L15 y cómo comunica SOS y telemetría con Plaspy
keywords:
  - protocolo GOTOP L15
  - protocolo GPS GOTOP L15
  - protocolo de seguimiento GOTOP L15
  - compatibilidad GOTOP L15 con Plaspy
  - protocolo de comunicación GOTOP L15
  - rastreador GPS GOTOP L15
  - rastreador SOS GOTOP L15
  - GOTOP L15 GPS vestible
  - protocolo de dispositivo Plaspy
  - compatibilidad de rastreadores Plaspy
---

# GOTOP - Protocolo L15

Esta página describe el contexto público del protocolo para usar el rastreador GPS vestible GOTOP L15 con Plaspy. Explica el papel del protocolo de reporte del dispositivo en la entrega de ubicación, alertas SOS y telemetría básica a Plaspy, y resume los ajustes de conexión que Plaspy expone para la integración pública y la configuración del equipo.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información a continuación debe entenderse como una cobertura general de cómo el L15 intercambia datos utilizables con Plaspy, no como un manual paso a paso del protocolo.

## Resumen del protocolo

El L15 utiliza su módem celular, receptor GNSS y sensores complementarios para reportar ubicación y eventos a un endpoint remoto. El protocolo del dispositivo define cómo se empaquetan esos reportes, cómo se indican eventos como la pulsación de SOS y qué campos de telemetría están disponibles para que Plaspy los ingiera.

- Permite la transmisión de coordenadas GPS y entradas de ubicación híbrida como BLE, Wi‑Fi y LBS hacia la nube.
- Comunica eventos del dispositivo, incluidas alertas SOS, estado de batería, eventos de movimiento o actividad y reportes periódicos de estado.
- Transporta telemetría básica que Plaspy mapea en marcadores del panel, alertas e historial para cuidadores y administradores.
- Identifica el dispositivo ante la plataforma para que Plaspy pueda asociar los reportes entrantes con el activo y el perfil de usuario correctos.
- Soporta modos de reporte en tiempo real y periódicos según la configuración del dispositivo y las políticas de gestión de batería.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint compartido y determina automáticamente el protocolo entrante, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de Plaspy. La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para que la detección automática funcione.

- Plaspy escucha en un único endpoint público para reportes de dispositivos y detecta automáticamente el protocolo del rastreador.
- El dominio público del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para configuraciones directas que requieran una IP.
- Plaspy utiliza el puerto 8888 para reportes de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto para mantener consistencia.
- Si el L15 está configurado para reportar al endpoint de Plaspy, la selección de protocolo en la interfaz de Plaspy suele ser innecesaria.
- Asegúrese de que el IMEI o identificador único del dispositivo esté aprovisionado o reconocido por Plaspy para permitir el mapeo correcto del activo una vez que empiecen los reportes iniciales.

## Transporte y contexto de conexión

La configuración de la conexión es un detalle de transporte que opera por debajo del protocolo del rastreador. En el caso del L15, el dispositivo puede apuntar al endpoint de Plaspy usando los transportes de red estándar que el firmware y el operador celular admitan.

- El L15 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y las decisiones de configuración.
- Los dispositivos pueden configurarse para enviar reportes al dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando se requiera una dirección IP.
- Plaspy usa el mismo puerto 8888 para todos los rastreadores soportados, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Elija UDP para reportes de menor sobrecarga cuando el firmware lo soporte, o TCP cuando se prefiera entrega fiable o comportamiento de sesión según la configuración del dispositivo.
- Verifique el plan de datos del operador y la configuración APN en el L15 para que el dispositivo pueda establecer conectividad celular con el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos de telemetría disponibles y los transportes soportados; confirme la versión de firmware del dispositivo al validar su comportamiento.
- Las revisiones de hardware pueden alterar el rendimiento del GNSS, BLE o de otros sensores, lo que afecta el tipo y la frecuencia de los datos reportados.
- Las opciones de configuración por parte del fabricante pueden habilitar o desactivar ciertos reportes, como confirmaciones de SOS, detección de caídas o resúmenes de actividad.
- La selección de transporte influye en el comportamiento de la red y la vida útil de la batería; UDP y TCP son compatibles según las capacidades del firmware del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador entrante, pero se requiere un endpoint correcto y un identificador de dispositivo para la asociación automática.
- Consulte la documentación y las notas de versión del fabricante para confirmar modos de reporte específicos de firmware que puedan afectar la integración.

## Por qué es importante entender el protocolo

Comprender cómo el L15 se comunica con Plaspy facilita una configuración fiable, una resolución de problemas más ágil y una operación predecible a largo plazo. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer el contexto de comunicación acelera la resolución de problemas comunes de conectividad y mapeo de datos.

- Acelera el aprovisionamiento inicial asegurando que el dispositivo apunte a d.plaspy.com o 54.85.159.138 y utilice el puerto 8888.
- Simplifica la configuración de firewall y red al utilizar un puerto conocido y único para todos los dispositivos en Plaspy.
- Mejora la resolución de problemas cuando falta telemetría o eventos, al acotar las comprobaciones a transporte, APN y ajustes de firmware.
- Ayuda a optimizar la vida útil de la batería y la cadencia de reportes al elegir transporte y intervalos de reporte adecuados en la configuración del dispositivo.
- Permite establecer expectativas claras para cuidadores y administradores sobre qué tipos de datos y disparadores de eventos estarán disponibles en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP L15 con Plaspy ofrece a programas de cuidado y equipos de seguridad una forma práctica de centralizar ubicación, eventos SOS y telemetría básica de bienestar en una sola plataforma. El L15 combina conectividad 4G, GNSS, BLE y sensores opcionales para ofrecer ubicación híbrida y alertas de emergencia, mientras Plaspy mapea esas entradas a vistas de monitoreo, flujos de alerta e historial.

Si desea conocer más sobre Plaspy y cómo se integra con dispositivos como el GOTOP L15, visite https://www.plaspy.com. Para obtener la información más actual y específica del dispositivo sobre protocolo, comportamiento de firmware e implementación, verifique los detalles más recientes en el sitio del fabricante https://www.gotop.cc/ ya que la información puede cambiar con el tiempo.
