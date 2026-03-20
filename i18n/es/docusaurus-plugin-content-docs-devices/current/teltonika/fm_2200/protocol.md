---
slug: /teltonika/fm_2200/protocol
id: fm_2200-protocol
sidebar_label: Protocol
title: Teltonika - FM 2200 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Teltonika FM 2200 con Plaspy y lograr rastreo confiable de vehículos y activos
keywords:
  - protocolo Teltonika FM 2200
  - Teltonika FM 2200 GPS
  - protocolo de rastreo FM2200
  - comunicación Teltonika
  - compatibilidad FM 2200 Plaspy
  - protocolo de rastreador GPS
  - rastreo de vehículos Teltonika
  - gestión de flotas FM2200
  - protocolo de rastreador Teltonika
  - compatibilidad de dispositivos Plaspy
---

# Teltonika - Protocolo FM 2200

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FM 2200 con la plataforma Plaspy. Se enfoca en cómo el equipo se comunica a través de redes móviles para entregar ubicación y telemetría a Plaspy, y qué aspectos considerar al configurar el FM 2200 para un reporte confiable. El contenido está pensado para usuarios técnicos que integran el FM 2200 con Plaspy o que evalúan compatibilidad y comportamiento de comunicación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las características disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto general de cara al público, no detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte es el conjunto de comportamientos en la red y patrones de mensajes que permiten al FM 2200 enviar posición, sensores y estados a Plaspy. Con soporte para transporte TCP o UDP, el FM 2200 transmite datos sobre la red GSM hacia un servidor remoto donde Plaspy recibe e interpreta la información para seguimiento y monitoreo.

- El protocolo define cómo el rastreador abre conexiones, envía telemetría y se identifica ante el servidor para que Plaspy asocie los datos al dispositivo correcto.
- Permite la entrega de coordenadas GPS, eventos de sensores de movimiento, estados de entradas y salidas y otra telemetría recopilada por el FM 2200.
- La elección del transporte (TCP frente a UDP) afecta garantías de entrega y comportamiento de reconexión; el FM 2200 soporta ambos según la configuración.
- Los intervalos de reporte, eventos de geocerca y el agrupamiento de datos están controlados por la configuración del dispositivo y determinan con qué frecuencia Plaspy recibe actualizaciones.
- Interfaces locales como la salida USB NMEA del FM 2200 son útiles para configuración y diagnóstico, pero están separadas del protocolo de reporte en red usado para comunicarse con Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint público compartido y determina automáticamente el protocolo del rastreador que reporta. En la mayoría de los casos, cuando el FM 2200 se configura para reportar al endpoint de Plaspy, no se requiere seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138 en el puerto de servidor configurado.
- Plaspy utiliza un único puerto consistente para todos los dispositivos soportados y detecta automáticamente el protocolo empleado por cada equipo.
- Los dispositivos que envían datos de reporte válidos al endpoint de Plaspy son identificados y asociados automáticamente por la plataforma.
- Los pasos típicos para el usuario se limitan a configurar el FM 2200 para apuntar al endpoint de Plaspy y confirmar transporte y credenciales cuando corresponda.
- Si un dispositivo reporta pero parece estar mapeado incorrectamente, revisar la configuración del equipo y la versión de firmware es un paso de solución de problemas recomendado.

## Contexto de transporte y conexiones

El FM 2200 soporta transporte TCP/IP y UDP/IP sobre GPRS, y la elección entre UDP y TCP se establece en la configuración del equipo. Plaspy ofrece un destino estable para estas conexiones y acepta el mismo puerto para todos los dispositivos para simplificar la configuración.

- El dominio del servidor de Plaspy para reporte es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce diferencias de configuración entre modelos.
- Apuntar el FM 2200 al dominio de Plaspy o a la dirección IP son opciones válidas según su red y el comportamiento del operador móvil.
- La confiabilidad de la red, la configuración del APN y las limitaciones del operador pueden influir en si TCP o UDP es la mejor elección para un despliegue determinado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los campos de telemetría soportados o los comandos de configuración; confirme siempre el nivel de firmware del FM 2200 al validar el comportamiento.
- Las revisiones de hardware y los módulos opcionales pueden modificar las entradas, salidas y sensores disponibles que se reportan a la plataforma.
- Las opciones de configuración del fabricante, como intervalo de reporte, ajustes de geocerca y números autorizados, afectan lo que el rastreador envía a Plaspy.
- Seleccionar TCP o UDP impacta la retransmisión y el estado de la conexión; elija el transporte que mejor se adapte a sus necesidades de confiabilidad y latencia.
- Interfaces locales como la salida USB NMEA del FM 2200 y la configuración en el dispositivo son útiles para la puesta en marcha, pero no sustituyen la verificación del comportamiento de reporte en red.
- Valide compatibilidad y disponibilidad de funciones contra la documentación oficial del fabricante para comportamientos específicos del dispositivo y actualizaciones.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FM 2200 ayuda a asegurar reportes confiables, agilizar la resolución de problemas y mejorar la operación a largo plazo dentro de Plaspy. Conocer el contexto de conexión y protocolo reduce el tiempo de integración y permite anticipar comportamientos ante actualizaciones de firmware o cambios en la red.

- La dirección correcta del servidor y la selección del transporte previenen problemas comunes de conectividad durante el despliegue inicial.
- Estar al tanto de comportamientos dependientes del firmware ayuda a interpretar diferencias en telemetría o en el reporte de eventos.
- Entender intervalos de reporte y agrupamiento de datos orienta las expectativas sobre la frescura de la ubicación y la disponibilidad de datos históricos.
- Configurar adecuadamente entradas, salidas y opciones de geocerca garantiza que alertas y controles remotos funcionen como se espera.
- Conocer rutas locales de configuración como USB NMEA y herramientas del fabricante acelera el diagnóstico cuando se requiere acceso directo al equipo.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FM 2200 con Plaspy brinda a las organizaciones una vía directa para recolectar datos GPS y telemetría de vehículos y activos, apoyándose en una plataforma que detecta automáticamente protocolos de rastreadores y acepta ajustes de conexión consistentes. Las opciones I/O flexibles del FM 2200, su reporte configurable y el soporte para TCP y UDP lo convierten en una opción versátil para monitoreo de flotas y activos cuando se integra con una plataforma como Plaspy.

Para conocer más sobre Plaspy y cómo puede integrarse con dispositivos como el FM 2200, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de implementación del FM 2200, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
