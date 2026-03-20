---
slug: /topten/mt05/protocol
id: mt05-protocol
sidebar_label: Protocol
title: TopTen - MT05 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo TopTen MT05 para compatibilidad con la plataforma de rastreo Plaspy
keywords:
  - protocolo TopTen MT05
  - TopTen MT05 GPS
  - protocolo de rastreo MT05
  - compatibilidad MT05 Plaspy
  - protocolo de comunicación MT05
  - protocolo rastreador GPS TopTen
  - rastreo vehicular MT05
  - integración rastreador GPS Plaspy
  - rastreo de flotas TopTen MT05
  - protocolo telemetría MT05
---

# TopTen - Protocolo MT05

Esta página describe el contexto público del protocolo usado por el rastreador mini GPS TopTen MT05 para integrarse con la plataforma Plaspy. Explica, a nivel general, cómo el MT05 comunica datos de ubicación y estado hacia Plaspy y qué papel juega el protocolo de reporte para que esos datos sean útiles en seguimiento, alertas y monitoreo de vehículos.

Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo cuando un MT05 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles prácticos sobre tiempos de mensaje y soporte de funciones pueden diferir entre unidades.

## Resumen del protocolo

El protocolo del MT05 es el método que el dispositivo usa para empaquetar y enviar telemetría como posición GPS, estado del motor, alarmas e información del odómetro a un servidor remoto. Para la integración con Plaspy, lo relevante es cómo el rastreador reporta los campos de ubicación y estado útiles y cómo esos campos se mapean a las funciones de monitoreo y alertas de la plataforma.

- Transmite la telemetría principal que Plaspy utiliza en mapas y paneles de estado, incluyendo posición y movimiento.
- Envía eventos de alarma y estado que Plaspy puede convertir en notificaciones como exceso de velocidad, movimiento no autorizado o pérdida de alimentación.
- Reporta entradas digitales y estado de motor encendido/apagado que Plaspy interpreta para estado del vehículo y controles remotos.
- Proporciona datos de odómetro y movimiento que Plaspy utiliza para informes de distancia e historial de viajes.
- Permite la configuración del modo de reporte y transporte para que los dispositivos apunten al endpoint de Plaspy y reporten en vivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido y usa el contenido y el comportamiento de conexión para identificar automáticamente el protocolo del dispositivo. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy si el MT05 está configurado para reportar a la dirección de Plaspy.

- El dominio del servidor Plaspy para dispositivos es d.plaspy.com y la IP conocida es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos; todos los equipos soportados usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP según las capacidades del equipo.
- Cuando un MT05 reporta al endpoint de Plaspy, la plataforma detectará y parseará los tipos de mensaje soportados para su visualización y alertas.
- Normalmente, la configuración correcta del dispositivo para apuntar al endpoint de Plaspy es todo lo necesario para la detección automática del protocolo.

## Transporte y contexto de conexión

Las opciones de conexión en el MT05 afectan cómo el dispositivo entrega datos a Plaspy, pero no cambian el propósito general del protocolo. El MT05 puede enviarse configurado para reportar por UDP o TCP al endpoint y puerto de Plaspy, lo que permite un despliegue flexible en distintos entornos de red.

- El MT05 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección IP 54.85.159.138 como destino del servidor.
- Plaspy acepta reportes de dispositivos en el puerto 8888 para todos los trackers soportados, lo que simplifica la puesta en marcha.
- Condiciones de red, firewalls o NAT del operador móvil pueden requerir elegir TCP o UDP en función de la fiabilidad y la latencia.
- Asegúrese de que el rastreador esté configurado para usar el endpoint de Plaspy para que la detección y el parsing automáticos funcionen correctamente.

## Notas sobre compatibilidad del protocolo

- El MT05 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, pero el comportamiento puede variar según la revisión de firmware.
- Revisiones de hardware u opciones presentes en una unidad específica pueden afectar qué eventos y campos se reportan.
- La selección del transporte (UDP vs TCP) es configurable en el dispositivo y puede influir en la fiabilidad en ciertos entornos de red.
- Los valores por defecto del fabricante podrían necesitar ajuste para apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Siempre valide el mapeo de funciones como alarmas, corte de motor y reporte del odómetro con el dispositivo físico que tenga a la mano.
- En caso de dudas, consulte la documentación del fabricante para notas específicas de firmware que afecten el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del MT05 ayuda a asegurar una configuración fluida, un comportamiento predecible en producción y una resolución más rápida de problemas cuando surjan. Tener claridad sobre lo que el rastreador reporta y cómo Plaspy lo recibe mejora la configuración, el monitoreo y la fiabilidad a largo plazo.

- Confirma que el dispositivo apunta al endpoint y puerto correctos de Plaspy para la detección automática.
- Permite una resolución de problemas dirigida cuando eventos esperados como alarmas o estados de motor no aparecen en Plaspy.
- Orienta la decisión entre usar UDP o TCP para equilibrar latencia y fiabilidad según su despliegue.
- Aclara qué campos de telemetría la plataforma puede esperar del dispositivo para informes y alertas.
- Reduce el tiempo hasta la operatividad alineando la configuración del dispositivo con los requisitos de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TopTen MT05 con Plaspy ofrece a las organizaciones una forma directa de convertir la telemetría de GPS, alarmas y estado del motor en seguimiento accionable, notificaciones e informes históricos. La detección automática de protocolos de Plaspy y su endpoint de puerto único reducen la complejidad de la configuración, de modo que flotas y propietarios de vehículos puedan concentrarse en el uso operativo en lugar de en la integración a bajo nivel.

Si desea conocer más sobre las funciones de Plaspy y las integraciones soportadas, visite https://www.plaspy.com. Para notas específicas de protocolo por dispositivo, comportamientos de firmware y documentación del fabricante del MT05, verifique los detalles en el sitio oficial de TopTen http://www.t10.cn ya que las implementaciones y el firmware pueden cambiar con el tiempo.
