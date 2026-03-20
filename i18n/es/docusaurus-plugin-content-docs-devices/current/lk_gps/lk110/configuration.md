---
slug: /lk_gps/lk110/configuration
id: lk110-configuration
sidebar_label: Configuration
title: LK-GPS - LK110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK110 con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - configuración LK GPS LK110
  - configuración LK110 Plaspy
  - configuración rastreador LK GPS
  - configuración rastreador GPS LK110
  - configuración servidor LK110
  - integración LK GPS Plaspy
  - configuración software seguimiento LK110
  - configuración plataforma GPS LK110
  - configuración rastreador GPS bicicleta
  - configuración rastreador e-bike
---

# LK-GPS - Configuración del LK110

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK110 con Plaspy. Explica los ajustes de servidor de Plaspy que debe aplicar en el dispositivo o mediante las herramientas oficiales de configuración de LK-GPS para que el LK110 reporte ubicación y eventos a la plataforma Plaspy. El contenido se centra en los valores públicos y el flujo práctico necesario para registrar el dispositivo en Plaspy y validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para entender el proceso de configuración común y los valores requeridos, y siempre verifique los pasos específicos del dispositivo con la documentación de LK-GPS o las instrucciones del proveedor.

## Resumen de configuración

Esta sección explica el propósito práctico de configurar un LK110 para Plaspy y qué se espera lograr con una configuración típica.

- Preparar el LK110 para que envíe datos de ubicación y alarmas al punto final del servidor Plaspy.
- Ingresar el dominio o la IP del servidor Plaspy y configurar el transporte y puerto que usa la plataforma.
- Validar que el dispositivo esté en línea y reportando al backend de Plaspy para que aparezca en la interfaz de la plataforma.
- Confirmar que los comportamientos de alarmas y reportes, como detección por vibración o alarma por desplazamiento, funcionen según lo esperado tras la configuración.
- Asegurarse de guardar el dispositivo, reiniciarlo si es necesario y monitorear su operación estable con Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy exactamente cuando configure el LK110 para la integración con Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device if a transport selection is required
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

Estos valores son el endpoint y puerto canónico que Plaspy utiliza para conexiones entrantes de rastreadores. Ingrese el dominio d.plaspy.com o la IP 54.85.159.138 y configure el puerto 8888 en la configuración de su LK110.

## Requisitos típicos antes de la configuración

- Un rastreador LK110 con alimentación y accesible para la configuración o instalado en el vehículo/activo.
- Una SIM 4G activa y conectividad celular en el dispositivo si va a usar reporte por datos móviles.
- Acceso al método oficial de configuración LK-GPS para el LK110 (herramienta web, software del proveedor, comandos SMS o consola).
- Conocimiento del IMEI del dispositivo o identificador único para identificar el rastreador en Plaspy.
- Definir el transporte preferido UDP o TCP si el dispositivo solicita elegir transporte.
- Herramientas básicas de prueba como la capacidad de reiniciar el dispositivo y monitorear los reportes entrantes en la plataforma Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el LK110 envía sus reportes periódicos de ubicación y alarmas al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión y utiliza detección automática de protocolo para interpretar los mensajes del rastreador y presentar los datos en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP como transporte en el dispositivo si la herramienta del fabricante exige elegir uno.
- El rastreador transmite actualizaciones de posición según la frecuencia de subida configurada para que Plaspy pueda mostrar movimiento y estado.
- Alarmas como vibración, batería baja, desplazamiento y eventos de geocerca se reenvían a Plaspy para alertas en tiempo real e historial.
- La detección automática de protocolo de Plaspy interpreta los mensajes del LK110, por lo que no es necesario seleccionar un protocolo por dispositivo en la plataforma.

## Flujo de configuración habitual

Siga estos pasos prácticos al preparar un LK110 para su uso con Plaspy:

1. Acceda al método oficial de configuración LK-GPS para el LK110 (herramienta web del fabricante, utilidad del proveedor, comandos SMS u otro método soportado).
2. En los ajustes de servidor del dispositivo, ingrese el dominio d.plaspy.com o la IP del servidor 54.85.159.138 como endpoint de reporte.
3. Configure el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según sus preferencias de instalación o la fiabilidad de la red.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie o haga reboot del LK110 si la herramienta lo solicita o después de guardar para asegurar que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy verificando la lista de dispositivos y los datos entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el LK110 dependen de las herramientas del fabricante y del firmware en uso. Los dispositivos LK-GPS suelen soportar configuración mediante su software oficial, aplicación móvil o comandos SMS. Como los conjuntos de comandos del fabricante varían según firmware y proveedor, consulte la guía de configuración de LK-GPS para formatos de comando específicos.

Si su firmware LK110 admite configuración por SMS y prefiere ese método, los flujos típicos por SMS implican enviar una cadena de configuración específica al IMEI o número del dispositivo para actualizar valores de servidor y puerto. Use la referencia de comandos oficial de LK-GPS para la sintaxis exacta y los marcadores de posición.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos y las opciones disponibles. Confirme los comandos según la revisión de firmware del LK110.
- Elija UDP cuando la menor sobrecarga y la latencia reducida sean importantes; elija TCP en redes donde la fiabilidad y el estado de conexión ayudan a garantizar la entrega.
- La configuración por SMS suele estar disponible en rastreadores LK-GPS y puede ser útil cuando no es posible el acceso directo por software; siga el formato de comandos SMS documentado por el fabricante.
- Las prácticas de instalador pueden variar según la región y el proveedor. Algunos instaladores prefieren ingresar el dominio d.plaspy.com mientras que otros usan la IP 54.85.159.138; Plaspy acepta ambas.
- Siempre guarde y, cuando sea necesario, reinicie el dispositivo para que el nuevo servidor d.plaspy.com y el puerto 8888 se apliquen y comiencen a reportar.

## Por qué usar Plaspy con esta configuración

Utilizar el LK-GPS LK110 con Plaspy brinda a las organizaciones una vía sencilla para obtener visibilidad de vehículos y activos. Las capacidades de reporte y alarma del LK110 encajan bien con las funcionalidades de la plataforma Plaspy, permitiendo a flotas, servicios de alquiler y propietarios individuales monitorear ubicación, recibir alertas y analizar patrones de movimiento mediante un único endpoint compartido.

Para conocer más sobre Plaspy y cómo muestra los datos del LK110 en la plataforma, visite https://www.plaspy.com. Para instrucciones de configuración más actuales y específicas del dispositivo, incluyendo sintaxis de comandos y notas de firmware, verifique la documentación del LK110 en https://www.lk-gps.com. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que siempre confirme los detalles con los recursos oficiales de LK-GPS.
