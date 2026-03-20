---
slug: /lk_gps/lk109/configuration
id: lk109-configuration
sidebar_label: Configuration
title: LK-GPS - LK109 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK-GPS LK109 y conectarlo con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración LK-GPS LK109
  - Instalación LK-GPS LK109
  - Configuración LK109 para Plaspy
  - Configuración de servidor LK109
  - Configuración rastreador GPS LK109
  - Rastreador LK-GPS para Plaspy
  - Configuración software de seguimiento LK109
  - Seguimiento de vehículos LK109
  - Configuración rastreador personal LK109
  - Configuración de firmware LK109
---

# LK-GPS - Configuración del LK109

Esta página describe el contexto público de configuración para usar el rastreador personal LK-GPS LK109 con Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy, pasos prácticos para apuntar un LK109 al endpoint de Plaspy y las acciones típicas de verificación para confirmar que el dispositivo está reportando correctamente. Esta guía está pensada para instaladores, responsables de flotas y usuarios técnicos que preparan unidades LK109 para integrarlas con Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y realiza detección automática del protocolo, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware del LK109, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LK109 soporta configuración por SMS y funciones de consulta, además de seguimiento por aplicación móvil, por lo que puede configurarlo con la herramienta oficial del fabricante, mediante comandos SMS o una utilidad de configuración según su dispositivo y firmware.

## Resumen de configuración

Configurar el LK109 para Plaspy se centra en preparar el dispositivo para que se comunique de forma fiable con el servidor de Plaspy y aparezca en la plataforma. La siguiente lista resume los objetivos prácticos del proceso de configuración.

- Apuntar el LK109 al endpoint del servidor de Plaspy para que los datos de ubicación y eventos se envíen a Plaspy.
- Elegir el modo de transporte que requiera su firmware (UDP o TCP) y establecer el puerto que usa Plaspy.
- Validar la conectividad de red y que el dispositivo pueda registrarse en la red celular si es necesario.
- Guardar y aplicar los ajustes en el LK109 y confirmar que el dispositivo aparece como activo en Plaspy.
- Usar consultas por SMS o el software del fabricante disponible para verificar los ajustes del dispositivo si el firmware lo permite.

## Ajustes del servidor de Plaspy

Utilice los siguientes ajustes públicos del servidor al configurar el LK109 para Plaspy. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la instalación

- Un dispositivo LK109 alimentado y funcional, con batería cargada o alimentación externa conectada.
- Acceso al método o software de configuración oficial del fabricante para el LK109.
- Una SIM con datos instalada y activa si la unidad requiere conectividad celular.
- Herramientas básicas de verificación de conectividad como acceso por SMS o un cable serial/utilidad de configuración si lo requiere el fabricante.
- Conocimiento del IMEI o identificador del dispositivo que Plaspy utilizará para emparejar la unidad en la plataforma.
- Una cuenta de Plaspy y acceso a la plataforma para confirmar que el dispositivo aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El LK109 se configura para enviar sus reportes de posición y eventos a Plaspy usando el endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes entrantes y determina automáticamente el protocolo del rastreador, por lo que no es necesario especificar el protocolo en la plataforma.

- El dispositivo envía actualizaciones de ubicación a d.plaspy.com en el puerto 8888 (o directamente a 54.85.159.138 en el puerto 8888 si prefiere usar IP).
- Puede elegir transporte UDP o TCP en el LK109 según el soporte del firmware y las condiciones de red.
- Plaspy detectará automáticamente el protocolo del rastreador y procesará posiciones y alarmas del LK109.
- Eventos como SOS, alarma por caída, entradas o salidas de geocerca y posiciones periódicas se reenvían a la plataforma Plaspy para visualización y alertas.
- La verificación del reporte se realiza confirmando que el dispositivo es visible y que envía mensajes recientes en Plaspy.

## Flujo típico de configuración

Siga esta secuencia práctica para configurar el LK109 con Plaspy. Los pasos exactos pueden variar según la utilidad del fabricante, el conjunto de comandos SMS o la versión de firmware.

1. Acceda al método o software de configuración oficial del LK109 proporcionado por el fabricante.
2. En los ajustes de servidor del dispositivo, introduzca la dirección de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del dispositivo a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según su preferencia de red.
5. Aplique o guarde la configuración en la herramienta del dispositivo o mediante comando SMS.
6. Reinicie el LK109 si las instrucciones del fabricante requieren reinicio para aplicar los cambios.
7. Valide que el LK109 reporta a Plaspy comprobando el estado del dispositivo y las posiciones recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El LK109 soporta ajustes por SMS y funciones de consulta según la descripción del dispositivo, y muchos instaladores usan SMS o la herramienta oficial del fabricante para configurar servidor y puerto. Los comandos y la sintaxis exacta pueden variar según el firmware y las herramientas del proveedor, por lo que consulte el manual de su dispositivo para la sintaxis canónica.

Si utiliza SMS para la configuración, los fabricantes suelen proveer comandos SMS para establecer servidor, puerto, transporte y para consultar ajustes actuales. Dado que los conjuntos de comandos varían y no se ofrecen comandos públicos específicos aquí, utilice la documentación oficial del LK109 o la utilidad de configuración del fabricante para la sintaxis exacta.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús o la sintaxis de comandos SMS para ajustes de servidor y transporte.
- Elegir UDP o TCP puede afectar la fiabilidad en algunas redes; seleccione el transporte recomendado por su instalación y firmware.
- La configuración por SMS suele ser compatible con unidades LK109; verifique el formato SMS exacto en el manual oficial del LK109 antes de enviar comandos.
- Siempre guarde o aplique los ajustes y reinicie el dispositivo si es necesario para asegurar que los nuevos parámetros entren en vigor.
- Confirme la identidad del dispositivo (IMEI o ID de dispositivo) para que la unidad pueda emparejarse correctamente dentro de Plaspy cuando comience a reportar.

## Por qué usar Plaspy con esta configuración

Usar el LK109 con Plaspy ofrece una forma sencilla de centralizar los reportes de ubicación y alarmas para seguridad personal o el seguimiento de flotas pequeñas. Apuntar el LK109 al endpoint y puerto compartidos de Plaspy permite que la plataforma detecte automáticamente el protocolo del dispositivo y muestre posiciones, alarmas y eventos de geocerca en la plataforma para monitoreo y respuesta.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos como el LK109, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, la sintaxis de comandos SMS, el comportamiento de firmware y detalles del fabricante, consulte la documentación oficial en https://www.lk-gps.com.
