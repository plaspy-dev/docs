---
slug: /navtelekom/s_2422/configuration
id: s_2422-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2422 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Navtelekom СМАРТ S-2422 e integración con Plaspy pasos prácticos y ajustes de servidor
keywords:
  - Configuración Navtelekom СМАРТ S-2422
  - Configuración S-2422 Navtelekom
  - Integración СМАРТ S-2422 con Plaspy
  - Configuración rastreador GPS Navtelekom
  - Configuración servidor S-2422
  - Configuración rastreador GPS para Plaspy
  - Configuración rastreador para seguimiento de vehículos
  - Configuración gestor de flotas rastreador
  - Guía rastreador Navtelekom
  - Configuración telemetría S-2422
---

# Navtelekom - Configuración del СМАРТ S-2422

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom СМАРТ S-2422 con Plaspy. Se centra en los valores de servidor públicos y en el flujo de trabajo práctico que necesita para apuntar el S-2422 al servicio Plaspy y validar la conectividad, de modo que la ubicación y la telemetría del dispositivo aparezcan en los paneles de Plaspy. La orientación aquí se basa en la descripción del equipo y en los ajustes públicos de servidor de Plaspy para integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor, como NTC Configurator o configuradores locales por Bluetooth. Use esta página para preparar el rastreador para Plaspy y confirmar los parámetros de red principales que debe aplicar en el dispositivo.

## Resumen de la configuración

El proceso de configuración prepara el СМАРТ S-2422 para enviar posición y telemetría de sensores a Plaspy usando el endpoint y puerto compartidos de Plaspy. Los objetivos típicos son establecer la dirección del servidor del rastreador, elegir el transporte adecuado, confirmar la conectividad celular y verificar que los reportes sean visibles en la plataforma Plaspy.

- Definir la dirección del servidor del rastreador al endpoint de Plaspy para que los datos lleguen a la plataforma correcta.
- Configurar la opción de transporte a UDP o TCP si el equipo solicita la selección.
- Introducir el puerto de Plaspy para que el S-2422 envíe datos al mismo puerto usado por los dispositivos en Plaspy.
- Validar la conectividad celular y la obtención de posiciones GNSS para que la telemetría y la ubicación se transmitan de forma fiable.
- Confirmar que el dispositivo aparece en Plaspy y que telemetrías como entradas digitales, datos RS-485 y salidas de control son visibles.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el СМАРТ S-2422 en la herramienta del fabricante o en la app de configuración local:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device option
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port so port 8888 is shared across supported trackers

(Conserve exactamente los valores anteriores al aplicar la configuración en la herramienta del fabricante.)

## Requisitos previos habituales

- Asegúrese de que el S-2422 esté instalado y alimentado desde el sistema eléctrico del vehículo ya que no dispone de batería interna.
- Tenga una SIM activa compatible con 2G con un plan de datos si el dispositivo usará la red celular para la telemetría.
- Acceso al método oficial de configuración del fabricante, como NTC Configurator, el configurador local por Bluetooth o la herramienta del proveedor utilizada por su instalador.
- Un entorno GNSS estable para obtener fijaciones GLONASS o GPS durante la validación de la configuración.
- Credenciales o permisos necesarios proporcionados por su instalador o administrador de flota para modificar los ajustes de servidor del dispositivo.
- Un entorno de mantenimiento o vehículo de pruebas donde pueda reiniciar el dispositivo con seguridad si es necesario después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el СМАРТ S-2422 informa coordenadas GNSS y telemetría del vehículo al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes del dispositivo, determina automáticamente el protocolo y pone los datos a disposición en paneles, reportes y reglas de alerta.

- El rastreador envía coordenadas GLONASS y GPS a través del enlace GSM 2G a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- La telemetría de sensores desde interfaces RS-485 y 1-Wire se reenvía a Plaspy para monitorización de combustible y paneles de sensores.
- Los eventos de entradas digitales y las salidas de control configurables se informan para que Plaspy pueda activar reglas y acciones remotas.
- Bluetooth 4.0 puede usarse para configuración local y emparejamiento de accesorios mientras la telemetría fluye por la red celular hacia Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint y puerto compartidos.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante, como NTC Configurator, la interfaz web del dispositivo o el configurador local por Bluetooth que use Navtelekom.
2. Ubique los ajustes de servidor o reporte y escriba el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto en 8888 ya que Plaspy usa este mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie el dispositivo si la herramienta o el firmware requieren un reinicio para que los ajustes tengan efecto.
7. Valide que el S-2422 está reportando a Plaspy comprobando que el dispositivo y la telemetría aparecen en la plataforma y confirmando el flujo de datos GNSS y de sensores.

## Ejemplos de comandos de configuración

No hay comandos crudos de configuración públicos para el СМАРТ S-2422 incluidos en este documento. Los comandos exactos, si se usan, dependen de la herramienta del fabricante, la versión de firmware y el método de configuración local. Los dispositivos Navtelekom suelen configurarse con NTC Configurator o mediante herramientas Bluetooth locales; use esas herramientas oficiales para establecer el servidor a d.plaspy.com o 54.85.159.138 y el puerto 8888, y para elegir UDP o TCP si es necesario.

Si recibe fragmentos de comandos suministrados por Navtelekom o su distribuidor, preserve los marcadores de posición que le proporcionen y siga las instrucciones del proveedor respecto al orden y la sintaxis al aplicar los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los campos disponibles u opciones de transporte en la herramienta de configuración; verifique la versión de firmware del dispositivo antes y después de realizar cambios.
- Elija UDP para menor sobrecarga y TCP cuando se prefiera una sesión más fiable; Plaspy aceptará cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Use las herramientas oficiales de Navtelekom como NTC Configurator para ajustes persistentes y DRC para gestión remota de firmware cuando estén disponibles.
- Las prácticas de instalación y el cableado dependen del vehículo y del tipo de instalación, puesto que el S-2422 es un rastreador cableado de forma permanente sin batería interna.
- Valide cualquier marcador de posición o variable del proveedor en los comandos del fabricante con su distribuidor o con el soporte de Navtelekom antes de desplegar a gran escala.

## Por qué usar Plaspy con esta configuración

Configurar el Navtelekom СМАРТ S-2422 para reportar a Plaspy permite a los gestores de flota consolidar en una sola plataforma la ubicación en tiempo real, los eventos de entradas digitales y la telemetría de sensores externos. Esta combinación facilita la monitorización operativa, el análisis de combustible y sensores, y las acciones de control remoto, aprovechando la capacidad GLONASS GPS del equipo y sus interfaces de I/O para vehículos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles más recientes sobre configuración específica del dispositivo, notas de firmware y la documentación oficial de Navtelekom, consulte el sitio del fabricante https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con las revisiones de firmware y hardware.
