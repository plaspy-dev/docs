---
slug: /lk_gps/lk960/configuration
id: lk960-configuration
sidebar_label: Configuration
title: LK-GPS - LK960 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK960 con Plaspy, incluye ajustes de servidor y pasos prácticos para la conexión
keywords:
  - configuración LK GPS LK960
  - instalación LK GPS LK960
  - configuración de servidor LK-GPS LK960
  - configuración software de rastreo LK960
  - configuración de plataforma GPS LK960
  - configuración de dispositivo Plaspy
  - integración rastreador vehicular LK960
  - modo plataforma LK960
  - guía de configuración LK-GPS
  - rastreo de flotas LK960
---

# LK-GPS - Configuración del LK960

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK960 con Plaspy. Resume los ajustes de servidor que Plaspy espera, explica el flujo práctico de configuración y señala qué debe confirmar antes de intentar la integración. El contenido se centra en pasos públicos y de uso común, no en herramientas propietarias del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LK960 es un rastreador vehicular por cable con funciones como alarma SOS, corte remoto de combustible y electricidad, alarma por vibración, soporte 2G y 4G, modos SMS y plataforma, e indicadores LED de energía, GPS y GSM, por lo que debe verificar cualquier paso específico del equipo en la documentación oficial del fabricante.

## Resumen de la configuración

Preparar el LK960 para comunicarse con Plaspy implica apuntar el rastreador al endpoint del servidor de Plaspy y comprobar que el dispositivo envía posiciones periódicas y alarmas. El objetivo es asegurarse de que la plataforma reciba los mensajes y que los eventos clave sean visibles en Plaspy.

- Configure la dirección y el puerto del servidor en el dispositivo para que el rastreador entregue mensajes de ubicación y alarma a Plaspy.  
- Verifique la conectividad celular y que la SIM o la conexión de datos del equipo esté activa y sea compatible con las redes soportadas por el rastreador.  
- Valide que el dispositivo reporte actualizaciones periódicas de ubicación y eventos importantes como SOS, vibración y pérdida de energía.  
- Guarde y aplique los cambios de configuración del fabricante y, si es necesario, reinicie el dispositivo para que comience a reportar.  
- Confirme que el dispositivo aparece en Plaspy y que la telemetría y las alarmas son visibles para su monitoreo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on the device side if the device requires a transport choice  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Fuente de alimentación estable y cableado correcto del LK960 antes de realizar la configuración y las pruebas.  
- SIM activa con datos habilitados y un plan de datos compatible con las redes que soporta el rastreador; el LK960 soporta 2G y 4G.  
- Acceso al método de configuración oficial del fabricante, como el conjunto de comandos SMS, herramienta web o utilidad de PC suministrada por LK GPS.  
- Conocimiento del IMEI del equipo o del identificador único que Plaspy solicitará al registrar el rastreador en la plataforma.  
- Forma de observar los indicadores LED del dispositivo para confirmar el estado de GPS y GSM durante la configuración inicial.  
- Confirmación, si es posible, de la versión de firmware para asegurar compatibilidad con los comandos documentados y las instrucciones del fabricante.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura en modo plataforma, el LK960 envía mensajes de posición y de evento al endpoint y puerto compartidos de Plaspy para que el dispositivo pueda ser rastreado y gestionado desde la plataforma. Plaspy recibe los datos y los asocia al dispositivo correcto usando el identificador del equipo y el protocolo que detecta automáticamente.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Alarmas como SOS, vibración, corte de energía y exceso de velocidad se reportan al mismo endpoint de Plaspy para centralizar las alertas.  
- Los eventos y la telemetría se vuelven visibles en Plaspy para su monitoreo, alertas de geocercas y reproducción histórica.  
- El dispositivo puede usar UDP o TCP según lo permita la herramienta del fabricante; Plaspy acepta ambos y detecta automáticamente el protocolo.  
- Usar el endpoint compartido de Plaspy garantiza un manejo consistente de mensajes entre distintos modelos y simplifica la incorporación de flotas.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante LK GPS para el LK960, como comandos SMS o la herramienta de configuración.  
2. Ingrese la dirección del servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en el campo de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888, requerido por Plaspy.  
4. Seleccione el protocolo de transporte UDP o TCP si el equipo exige elegir uno explícitamente.  
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los cambios fueron aceptados.  
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para aplicar los ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y confirmando la recepción de una actualización de ubicación o de un evento.

## Ejemplos de comandos de configuración

Los comandos exactos y las cadenas de configuración para el LK960 dependen del conjunto de comandos SMS del fabricante, la versión de firmware o la utilidad de configuración para PC proporcionada por LK GPS. Dado que los formatos de comando del fabricante varían, consulte la documentación oficial de LK GPS para los comandos SMS precisos o las secuencias de la herramienta de PC para establecer dominio o IP de servidor, puerto, modo de transporte y APN si se requiere. Plaspy acepta que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP.

Si dispone del conjunto de comandos SMS del equipo, los pasos públicos típicos son enviar mensajes SMS de configuración o aplicar los ajustes en la herramienta de PC en el siguiente orden: configurar el APN si es necesario, establecer la dirección del servidor, fijar el puerto, seleccionar el transporte y guardar. Mantenga los marcadores del fabricante como [apn] si aparecen en los comandos oficiales y reemplácelos por los valores de su operador móvil.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware del LK960 pueden usar comandos SMS ligeramente distintos o campos distintos en la herramienta de configuración. Siempre consulte el manual específico del dispositivo.  
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que solo necesita configurar la dirección y el puerto en el equipo.  
- Elija UDP o TCP según las opciones de configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo en uso.  
- La configuración por SMS puede estar disponible para el LK960; si utiliza comandos SMS, asegúrese de que su SIM pueda enviar y recibir SMS y datos según se requiera.  
- Use los indicadores LED del dispositivo para facilitar la resolución de problemas relacionados con la fijación de GPS y el registro GSM durante la configuración y las pruebas iniciales.

## Por qué usar Plaspy con esta configuración

Usar el LK960 con Plaspy ofrece a empresas y propietarios de vehículos una forma práctica de consolidar telemetría, alarmas y seguimiento de ubicación en una sola plataforma. El endpoint compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configuración por dispositivo, facilitando la incorporación de múltiples unidades LK960 y el monitoreo centralizado de alertas SOS, vibración, eventos de energía y actualizaciones de posición rutinarias.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and command references consult the official LK GPS website at https://www.lk-gps.com. Manufacturer specifications and setup methods can change over time so verifying the latest information from the manufacturer is recommended.
