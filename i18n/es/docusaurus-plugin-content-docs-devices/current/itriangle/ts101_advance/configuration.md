---
slug: /itriangle/ts101_advance/configuration
id: ts101_advance-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Advance Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del iTriangle TS101 Advance para integrarlo con Plaspy
keywords:
  - configuración iTriangle TS101 Advance
  - configuración TS101 Advance Plaspy
  - configuración rastreador GPS iTriangle
  - configuración servidor TS101 Advance
  - guía de instalación TS101 Advance
  - configuración rastreador Plaspy
  - instalación seguimiento vehicular TS101
  - gestión de flotas TS101 Advance
  - configuración TCP UDP TS101 Advance
  - integración rastreador GPS Plaspy
---

# iTriangle - Configuración del TS101 Advance

Esta página describe el contexto público de configuración para usar el rastreador iTriangle TS101 Advance con la plataforma Plaspy. Incluye los valores de servidor esenciales, requisitos comunes y el flujo práctico para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda transmitir ubicación y telemetría para la gestión de flotas y la monitorización de seguridad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Utilice la información a continuación para preparar el TS101 Advance para su integración con Plaspy y consulte la documentación de iTriangle para comandos y flujos de IU específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el TS101 Advance para enviar posiciones GNSS, eventos de sensores y el estado de entradas/salidas a Plaspy, de forma que el dispositivo resulte visible y operativo en la plataforma. Se enfoca en aplicar el endpoint y los ajustes de transporte de Plaspy, validar la conectividad y confirmar que el dispositivo reporta correctamente.

- Configure el rastreador para que reporte al endpoint y puerto de Plaspy, de modo que los datos de posición y eventos lleguen a la plataforma.
- Valide la conectividad de red y la provisión del APN o la SIM para que el dispositivo pueda establecer el enlace celular.
- Elija el modo de transporte requerido (UDP o TCP) en el dispositivo si la interfaz del fabricante lo solicita.
- Aplique y guarde los ajustes, luego reinicie el rastreador cuando sea necesario para comenzar a reportar.
- Verifique que el dispositivo aparezca en Plaspy y que la telemetría, el estado de encendido y las entradas se reporten correctamente.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Un TS101 Advance alimentado y en funcionamiento con acceso de configuración disponible vía SMS, USB, TCP/IP o Bluetooth según lo provea iTriangle.
- Una tarjeta SIM activa con plan de datos y los ajustes APN correctos para la red celular de la región donde hará la implementación.
- Acceso al método o software oficial de configuración de iTriangle para el TS101 Advance (comandos SMS, herramienta USB, app Bluetooth o configuración TCP/IP).
- Conocimiento del IMEI del equipo o identificador único para el registro y mapeo del dispositivo en Plaspy.
- Una cuenta en Plaspy y la capacidad de registrar o vincular el dispositivo dentro de su instancia de Plaspy si su operador lo requiere.
- Firmware actualizado a una versión soportada cuando el fabricante lo recomiende para mejorar la compatibilidad.

## Cómo se conecta este rastreador a Plaspy

El TS101 Advance se configura para enviar su flujo de datos al endpoint y puerto compartido de Plaspy. Una vez configurado, el dispositivo transmite posiciones GNSS, eventos de sensores de movimiento y cambios en E/S mediante un enlace celular TCP/IP o el transporte seleccionado.

- Los reportes del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- La selección de transporte puede ser UDP o TCP según la interfaz de configuración; el TS101 Advance admite ambos modos de reporte.
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma procesa los mensajes entrantes en el mismo puerto usado por todos los dispositivos compatibles.
- Posición, eventos de acelerómetro/giroscopio, estado del encendido y entradas digitales/analógicas se transmiten a Plaspy para mapeo en tiempo real y tratamiento de eventos.
- Una vez que el dispositivo transmite correctamente, el rastreador aparece en Plaspy y puede utilizarse para monitoreo, alertas e informes.

## Flujo de configuración típico

1. Acceda al método o software oficial de iTriangle para configurar el TS101 Advance (conjunto de comandos SMS, herramienta USB, app Bluetooth o consola TCP/IP).
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 como puerto de destino para la telemetría.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
5. Configure los parámetros necesarios de APN o SIM para que el rastreador pueda establecer la conexión de datos celulares.
6. Aplique o guarde la configuración en el dispositivo y realice un reinicio si el procedimiento o la herramienta lo aconsejan.
7. Valide que el dispositivo reporte a Plaspy verificando la presencia del equipo y la telemetría inicial en su cuenta o vista de la plataforma Plaspy.

## Ejemplos de comandos de configuración

El TS101 Advance soporta múltiples canales de configuración provistos por iTriangle, incluyendo SMS, USB, TCP/IP y Bluetooth. Los comandos exactos y la sintaxis de cada canal varían según el firmware y la herramienta del fabricante. Para cadenas de comando específicas del dispositivo, plantillas SMS o pasos con la herramienta USB consulte la guía oficial de configuración de iTriangle para el TS101 Advance o la utilidad de configuración incluida con el producto. Plaspy requiere que la dirección del servidor (d.plaspy.com o 54.85.159.138) y el puerto 8888 estén configurados en el dispositivo, y que se seleccione el transporte si aplica.

## Notas de configuración

- Diferencias de firmware y herramientas: los conjuntos de comandos y las opciones de IU de iTriangle pueden variar entre versiones de firmware y revisiones de hardware. Confirme la sintaxis exacta para su unidad.
- La elección del transporte importa: TCP y UDP se comportan de forma distinta en redes con pérdida de paquetes. Seleccione el transporte recomendado por su instalador o por iTriangle según su caso de uso.
- Uso de un solo puerto: Plaspy escucha en el puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo entrante.
- Múltiples canales de configuración: el TS101 Advance admite SMS, USB, TCP/IP y Bluetooth para la puesta a punto. Use el método más apropiado según el entorno de instalación y los requerimientos de seguridad.
- APN y disponibilidad de la SIM: asegúrese de que la SIM esté provisionada y que el APN esté correctamente configurado antes de probar la conectividad hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Configurar el TS101 Advance para reportar a Plaspy proporciona a las organizaciones visibilidad fiable de la ubicación de los vehículos, eventos de sensores y el estado de E/S para operaciones de flota, seguridad y diagnóstico remoto. El diseño robusto del dispositivo y sus sensores integrados, junto con los ajustes de servidor compartidos de Plaspy, facilitan la integración de telemetría en tiempo real en flujos de trabajo de despacho, alertas e informes.

Para saber más sobre Plaspy y cómo gestiona las integraciones de dispositivos visite https://www.plaspy.com. Para obtener los comandos específicos más actuales, notas de firmware y herramientas de configuración para el TS101 Advance, verifique la documentación más reciente del fabricante en https://www.itriangle.net/
