---
slug: /atrack/as11/protocol
id: as11-protocol
sidebar_label: Protocol
title: ATrack - AS11 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el ATrack AS11 con Plaspy, con contexto de conexión y guía de compatibilidad
keywords:
  - Protocolo ATrack AS11
  - Rastreador GPS AS11
  - ATrack AS11 Plaspy
  - Protocolo de comunicación AS11
  - Protocolo de rastreo AS11
  - Protocolo GPS ATrack
  - Rastreador de activos AS11
  - Telemetría AS11
  - Rastreador compatible Plaspy
  - Rastreo de flotas AS11
---

# ATrack - Protocolo AS11

Esta página presenta una descripción pública del contexto de comunicación para usar el rastreador ATrack AS11 con Plaspy. Explica cómo el dispositivo envía telemetría y eventos a Plaspy y resume las configuraciones de conexión y las consideraciones prácticas de compatibilidad que son relevantes para la integración.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar al endpoint de Plaspy. El comportamiento exacto respecto a intervalos de reporte, tipos de mensajes soportados y otras características dependientes del firmware puede variar según la revisión de hardware, la versión de firmware y la implementación del fabricante, por lo que siempre conviene consultar la documentación del fabricante cuando necesite detalles específicos del equipo.

## Resumen del protocolo

El AS11 emplea sus subsistemas celulares y GNSS integrados para generar mensajes de telemetría y eventos que se envían a un servicio backend. El protocolo del dispositivo define cómo el rastreador empaqueta la ubicación, los sensores y los eventos de entradas/salidas para que un servidor como Plaspy pueda interpretarlos para seguimiento en tiempo real, alertas y registros históricos.

- Permite la transmisión de fixes GNSS y telemetría para que Plaspy muestre ubicación en tiempo real e historial.
- Transporta eventos de entradas y salidas digitales y valores de sensores analógicos para monitoreo de estado e integraciones.
- Soporta almacenamiento en cola y retransmisión para que los datos guardados se suban cuando se restablezca la conectividad.
- Funciona sobre transportes comunes compatibles con Plaspy para que el dispositivo alcance el endpoint en la nube de forma confiable.
- Proporciona mensajes de estado y latido que Plaspy utiliza para supervisar la salud del dispositivo y la continuidad de la conexión.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido para todos los dispositivos compatibles y usa ese punto de entrada para identificar automáticamente el protocolo del rastreador. En la mayoría de las implementaciones, un AS11 configurado correctamente comenzará a reportar sin que sea necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Todos los dispositivos reportan al mismo puerto de Plaspy, lo que simplifica el despliegue y la configuración de red.
- Plaspy escucha en el endpoint público d.plaspy.com y en la dirección de servidor 54.85.159.138 para aceptar reportes de dispositivos.
- El AS11 puede configurarse para usar UDP o TCP al reportar al endpoint de Plaspy en el puerto 8888, según la configuración del dispositivo y los requisitos de la red.
- Cuando un AS11 apunta al endpoint de Plaspy y empieza a enviar telemetría, Plaspy detecta automáticamente el protocolo del dispositivo, por lo que normalmente no se requiere mapeo manual.
- Si un dispositivo está configurado para enviar SMS u otros canales fuera de banda, esas vías son independientes del flujo de reporte por TCP o UDP y se gestionan según las capacidades del operador y del equipo.

## Transporte y contexto de conexión

El comportamiento de conexión del AS11 está regido por las opciones de transporte del dispositivo y por la configuración del servidor Plaspy. El rastreador soporta reporte por TCP y UDP, así como SMS cuando aplica, y Plaspy ofrece un único endpoint accesible para recolectar esos mensajes.

- El AS11 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría y eventos a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección de servidor 54.85.159.138 para llegar a Plaspy.
- Plaspy usa el mismo puerto para todos los rastreadores soportados, lo que reduce la variación en la configuración de firewalls y redes.
- El registro en cola en el AS11 permite salvar redes intermitentes almacenando mensajes hasta que el dispositivo pueda restablecer una sesión con Plaspy.
- Elija TCP cuando necesite entrega ordenada y UDP cuando prefiera menor sobrecarga y latencia, siempre considerando las limitaciones del dispositivo y de la red.

## Notas sobre compatibilidad del protocolo

- La versión de firmware afecta qué tipos de mensajes y opciones de transporte están disponibles; firmware más reciente puede añadir o modificar funciones.
- Las variantes de hardware y las bandas celulares regionales pueden cambiar los transportes soportados o el comportamiento de red entre modelos AS11.
- Las configuraciones por defecto del fabricante pueden variar entre instalaciones; confirme APN y ajustes de transporte saliente antes del despliegue.
- Al usar SMS u otros canales alternativos de reporte, el comportamiento y el costo dependen del operador celular y la configuración de la SIM.
- Siempre valide que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy.
- Si depende de sensores BLE o de antenas externas, confirme que el firmware soporte el envío de esos campos de telemetría a la nube.

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del AS11 ayuda a asegurar una configuración confiable, facilita la resolución eficiente de problemas y garantiza un comportamiento predecible en despliegues de campo con Plaspy. Saber qué enviará el rastreador y cómo se conectará reduce el tiempo de integración y mejora la estabilidad operativa a largo plazo.

- Ayuda a mapear los campos de telemetría del dispositivo a los paneles y alertas de Plaspy para que los datos aparezcan correctamente.
- Simplifica la solución de problemas de conectividad al acotar el alcance a APN, transporte y configuración del endpoint.
- Informa la estrategia de batería y reporte porque el transporte y la retransmisión afectan el consumo energético.
- Colabora en la planificación para escenarios sin conexión, ya que las políticas de registro en cola y retransmisión varían por firmware.
- Soporta una configuración de red segura al asegurar que solo se abran los endpoints y puertos necesarios para el tráfico del rastreador.

## Por qué usar Plaspy con este protocolo

Usar el AS11 con Plaspy ofrece una combinación robusta para el rastreo de activos a largo plazo en entornos exigentes. El AS11 provee fixes GNSS, eventos I/O, telemetría analógica y datos de sensores BLE que Plaspy consume para ofrecer visibilidad de ubicación, alertas y reportes históricos para flotas y flujos de trabajo de activos. Su registro offline y comportamiento de subida en cola son especialmente útiles para activos con conectividad intermitente.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el AS11, visite https://www.plaspy.com. Para detalles específicos del protocolo según el dispositivo, notas de la versión de firmware y guías de configuración más actuales, verifique la información en el sitio del fabricante https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
