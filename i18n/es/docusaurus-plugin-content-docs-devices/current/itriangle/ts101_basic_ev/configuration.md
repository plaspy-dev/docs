---
slug: /itriangle/ts101_basic_ev/configuration
id: ts101_basic_ev-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Basic EV Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iTriangle TS101 Basic EV y conectarlo a Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - iTriangle TS101 Basic EV configuración
  - TS101 configuración Plaspy
  - TS101 ajustes servidor
  - TS101 rastreador GPS Plaspy
  - TS101 configuración tracker EV
  - configuración rastreador iTriangle
  - seguimiento de flotas TS101
  - configuración de dispositivo Plaspy
  - guía configuración rastreador GPS
  - telemática vehicular TS101
---

# iTriangle - TS101 Basic EV Configuración

Esta página documenta el contexto público de configuración para usar el iTriangle TS101 Basic EV con Plaspy. Se concentra en los ajustes de servidor y en los pasos prácticos que normalmente se requieren para apuntar el rastreador a Plaspy, de modo que el dispositivo entregue posiciones GNSS, eventos del acelerómetro y telemetría de E/S a la plataforma. La guía está pensada para técnicos e instaladores que preparan el TS101 Basic EV para integrarlo con Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TS101 Basic EV es un rastreador compacto y resistente diseñado para uso en vehículos eléctricos y flotas mixtas, con GNSS multiconstelación, Bluetooth 3.0, conectividad 2G GSM, memoria interna para almacenamiento de eventos y un amplio rango de entrada de 9–90V DC, características que permiten una transmisión fiable a Plaspy cuando se configura correctamente.

## Visión general de la configuración

Este proceso prepara el TS101 Basic EV para comunicarse de forma fiable con la plataforma Plaspy y garantizar que los eventos del dispositivo y los registros almacenados se entreguen a su cuenta. El objetivo principal es configurar el rastreador hacia el endpoint del servidor de Plaspy y verificar la conectividad para que la ubicación, los eventos del acelerómetro y el estado de E/S sean visibles en Plaspy.

- Apuntar el endpoint de envío de red del dispositivo al dominio o IP del servidor Plaspy y usar el puerto compartido de Plaspy.
- Seleccionar el método de transporte que soporte el firmware del dispositivo y, si es necesario, configurar UDP o TCP en el puerto 8888.
- Aplicar y guardar la configuración mediante la herramienta del fabricante que utilice y reiniciar el rastreador si corresponde.
- Verificar el reporte en vivo y permitir que el dispositivo suba los registros almacenados localmente para que Plaspy pueda reconciliar intervalos perdidos.
- Confirmar que los eventos del acelerómetro y de E/S se reciben en Plaspy para que las alertas y los paneles reflejen el estado del dispositivo.

## Ajustes de servidor de Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el TS101 Basic EV:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888 depending on device firmware
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la detección automática de protocolo elimina la necesidad de seleccionar manualmente una cadena de protocolo en muchos casos.

## Requisitos típicos antes de la configuración

- Un TS101 Basic EV alimentado con la batería de respaldo necesaria instalada y conectado a la alimentación del vehículo.
- Una SIM celular compatible con plan de datos activo si va a usar reporte por 2G GSM, y la confirmación de que el dispositivo está registrado en la red.
- Acceso al método oficial de configuración de iTriangle para su unidad, como USB, SMS, Bluetooth o herramientas de software del proveedor.
- Tener disponibles los ajustes del servidor Plaspy indicados más arriba para ingresarlos en la configuración del dispositivo.
- Una cuenta técnica o flujo de trabajo para verificar el reporte del dispositivo dentro de la plataforma Plaspy después de la configuración.
- Herramientas básicas para monitorear registros del dispositivo o ver la respuesta durante la configuración si la herramienta del fabricante lo permite.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TS101 Basic EV envía posiciones GNSS y telemetría de eventos al endpoint y puerto compartidos de Plaspy para que los datos de ubicación y eventos aparezcan en la plataforma. El dispositivo usa su conexión de datos 2G GSM como transporte para reportes TCP/IP, y el almacenamiento local garantiza que los eventos se guarden durante interrupciones y se envíen cuando la conectividad se restablece.

- El dispositivo reporta posiciones GNSS y telemetría de eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El reporte puede usar UDP o TCP en el puerto 8888 según las opciones de firmware; Plaspy aceptará y detectará automáticamente el protocolo.
- Los registros en búfer almacenados en la memoria interna se suben cuando la conexión de red se restablece.
- Los cambios de estado del acelerómetro, manipulación y E/S se transmiten a Plaspy como eventos para alertas e informes históricos.
- Los canales de configuración por Bluetooth o USB permanecen disponibles para la puesta en servicio local sin afectar el reporte al servidor.

## Flujo de configuración común

1. Acceda al método oficial de configuración de iTriangle para el TS101 Basic EV usando el software del fabricante, la herramienta SMS, la conexión USB o la herramienta de comisionado por Bluetooth.
2. Ingrese el servidor de Plaspy como endpoint de reporte especificando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los equipos.
4. Seleccione UDP o TCP como transporte si el firmware requiere seleccionar explícitamente el transporte.
5. Guarde o aplique la configuración en la herramienta del fabricante y empuje los cambios al dispositivo.
6. Reinicie el rastreador si el dispositivo o la herramienta indica hacerlo para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de posición en vivo y confirmando que los registros en búfer se hayan subido.

## Ejemplos de comandos de configuración

No se proporcionaron comandos públicos del dispositivo en la configuración modelo para esta página. Los comandos exactos de configuración y la sintaxis para SMS o configuración serial varían según el firmware y la herramienta de configuración del fabricante. Los métodos típicos incluyen:

- Usar la utilidad de configuración iTriangle por USB o Bluetooth para establecer los campos de servidor y puerto.
- Enviar comandos de configuración por SMS si el firmware admite configuración vía SMS.
- Actualizar ajustes por una interfaz serial o de consola cuando el dispositivo lo soporte.

Consulte el manual de configuración de iTriangle para el TS101 Basic EV para comandos exactos y ejemplos específicos de la revisión de firmware que tenga.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la secuencia exacta o los nombres de las opciones en las herramientas del fabricante. Confirme siempre que los comandos sean correctos para su compilación de firmware.
- Elija UDP o TCP según la capacidad del dispositivo y la fiabilidad de la red; Plaspy acepta cualquiera de los dos en el puerto 8888 y detectará automáticamente el protocolo activo.
- La configuración por SMS suele estar disponible para ajustes en campo, mientras que las herramientas USB o Bluetooth son útiles para comisionados controlados en taller.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos, enfóquese en el host del servidor y la selección del transporte en lugar de buscar diferentes números de puerto.
- Mantenga una copia de la configuración aplicada y registre el IMEI o el número de serie del dispositivo para que pueda emparejar el rastreador con la entrada correcta de la cuenta Plaspy durante el alta.

## Por qué usar Plaspy con esta configuración

Usar el TS101 Basic EV con Plaspy ofrece una vía sencilla hacia la visibilidad centralizada de la flota, monitoreo de eventos y paneles telemáticos básicos. El diseño del dispositivo —amplio rango de tensión, almacenamiento en búfer interno y eventos por acelerómetro— favorece reportes fiables en Plaspy para casos de uso en flotas EV y mixtas donde la continuidad, la captura de eventos y la telemetría de sensores simples son importantes.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer commands consult the iTriangle documentation at https://www.itriangle.net/ as manufacturer specifications and setup methods can change over time.
