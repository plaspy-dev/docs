---
slug: /tzone/tz_bc06/protocol
id: tz_bc06-protocol
sidebar_label: Protocol
title: TZone - TZ-BC06 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador TZone TZ-BC06 con Plaspy
keywords:
  - protocolo TZone TZ BC06
  - protocolo GPS TZ BC06
  - rastreador TZone iBeacon
  - compatibilidad TZ BC06 Plaspy
  - protocolo Bluetooth TZone
  - protocolo de comunicación TZ BC06
  - protocolo de rastreo TZone
  - integración de dispositivos Plaspy
  - reporte de proximidad Bluetooth
  - resumen del protocolo del rastreador
---

# TZone - TZ-BC06 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador TZone TZ-BC06 con Plaspy. Explica, en términos generales, cómo el dispositivo puede comunicarse con la plataforma Plaspy y qué aspectos considerar al conectar el rastreador para que su ubicación y estado sean utilizables en Plaspy, sin revelar detalles privados de implementación.

El TZ-BC06 es un rastreador compacto basado en Bluetooth que se comercializa con capacidades de rastreo por GPS y utiliza el protocolo iBeacon de iPhone sobre Bluetooth 4.0 para emisiones de proximidad. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que la configuración final puede diferir entre unidades.

## Resumen del protocolo

El protocolo del TZ-BC06 define cómo el dispositivo se identifica y reporta su presencia o datos relacionados con la ubicación a los sistemas que recogen y reenvían esas emisiones. En muchos casos, los datos de los beacons Bluetooth aparecen primero localmente en teléfonos inteligentes, gateways u otros recolectores, que luego retransmiten esa información a plataformas en la nube como Plaspy.

- Las emisiones basadas en iBeacon proporcionan datos de identificación y proximidad que los sistemas posteriores pueden interpretar y reenviar.
- El protocolo permite que el rastreador presente un identificador estable y metadatos opcionales para que un gateway o una app móvil reconozca el dispositivo.
- El reporte a Plaspy depende de un componente intermediario que convierte las observaciones Bluetooth locales en informes de red dirigidos al endpoint de Plaspy.
- Aspectos del protocolo como el intervalo de emisión y la potencia de transmisión afectan el alcance de detección y la vida útil de la batería, y típicamente son configurables en el dispositivo.
- Funciones de seguridad, como conexiones protegidas por contraseña a nivel Bluetooth, forman parte de las capacidades del dispositivo pero no sustituyen el transporte de red seguro hacia Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe informes de dispositivos en un único endpoint compartido y emplea metadatos del flujo para detectar automáticamente qué protocolo de rastreador está utilizando el dispositivo que reporta. En la mayoría de los casos, cuando un TZ-BC06 o su gateway está configurado correctamente para reportar a Plaspy, no se requiere selección manual del protocolo dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la plataforma también acepta informes hacia la dirección IP mapeada 54.85.159.138.
- Plaspy usa el puerto 8888 como el puerto único de entrada para informes de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos o gateways pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar informes a Plaspy.
- Cuando un gateway o app configurada correctamente reenvía observaciones del TZ-BC06 a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y procesa los datos entrantes.
- Normalmente, los usuarios solo necesitan asegurarse de que su dispositivo o gateway de reenvío apunte al endpoint de Plaspy para habilitar la detección automática.

## Transporte y contexto de conexión

El TZ-BC06 utiliza Bluetooth para emisiones locales, y el transporte de red hacia Plaspy lo maneja un componente de reenvío como una app móvil o un gateway. Ese transporte de red puede usar protocolos IP estándar para alcanzar los servidores de Plaspy.

- El dispositivo puede usarse con software u hardware de reenvío que apunte a d.plaspy.com o a la dirección IP 54.85.159.138.
- Los informes de red a Plaspy se envían por el puerto 8888; el dispositivo o gateway puede usar UDP o TCP en ese puerto según su configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de firewall y NAT para el envío de informes.
- La elección del transporte (UDP vs TCP) la determina el componente de reenvío y las condiciones de red donde opera el dispositivo.
- Asegúrese de que los firewalls y el NAT permitan tráfico saliente hacia d.plaspy.com en el puerto 8888 para que los informes reenviados lleguen a la plataforma.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de la carga útil de las emisiones, las opciones de intervalo y los ajustes de seguridad compatibles; verifique la versión de firmware al solucionar problemas.
- Revisiones de hardware o variantes regionales del TZ-BC06 pueden alterar el comportamiento Bluetooth o los comandos de configuración disponibles.
- La integración con Plaspy requiere un componente de reenvío que convierta las observaciones Bluetooth locales en informes de red dirigidos a Plaspy.
- Seleccionar UDP o TCP para el reenvío afecta la semántica de entrega; elija el transporte soportado por su gateway o solución móvil de reenvío.
- Las herramientas de configuración del fabricante y las apps móviles suelen exponer ajustes de intervalo y potencia de transmisión que influyen en cómo detectan los gateways al rastreador.
- Siempre valide el comportamiento del dispositivo con la documentación más reciente del fabricante antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación y cómo el TZ-BC06 reporta datos ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y garantizar una operación predecible a largo plazo cuando se utiliza con Plaspy.

- Permite configurar correctamente cualquier gateway o app móvil que reenvíe las emisiones del rastreador a Plaspy.
- Ayuda a interpretar por qué un rastreador podría no aparecer en Plaspy debido a configuraciones de intervalo de emisión, nivel de potencia o diferencias de firmware.
- Orienta las decisiones sobre la colocación y el rango de detección esperado según la potencia de transmisión y el intervalo de emisión.
- Simplifica la configuración de firewalls y redes al saber que todos los dispositivos Plaspy usan el mismo puerto y endpoint.
- Reduce el tiempo para resolver incidencias al alinear el firmware del dispositivo y los ajustes de reenvío con los requisitos de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TZ-BC06 en combinación con Plaspy ofrece una ruta práctica para convertir señales locales de proximidad basadas en Bluetooth en información de rastreo accesible en la nube. Para organizaciones que necesitan visibilidad de activos, eventos de geocercas o monitoreo de presencia, Plaspy acepta informes reenviados desde gateways y aplicaciones móviles y los procesa sin requerir selección manual del protocolo.

Si desea obtener más información sobre Plaspy, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo y deben verificarse con el fabricante en http://www.tzonedigital.com/ para obtener la información más actualizada sobre el dispositivo.
