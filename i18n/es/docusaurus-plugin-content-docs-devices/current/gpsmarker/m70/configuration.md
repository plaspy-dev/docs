---
slug: /gpsmarker/m70/configuration
id: m70-configuration
sidebar_label: Configuration
title: GPSMarker - M70 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el GPSMarker M70 a Plaspy con ajustes de servidor compartido y pasos prácticos de configuración
keywords:
  - gpsmarker m70 configuración
  - gpsmarker m70 instalación
  - configuración rastreador gps
  - compatibilidad plaspy
  - ajustes servidor plaspy
  - configuración seguimiento de vehículos
  - guía configuración gpsmarker
  - configuración plataforma de seguimiento
  - gpsmarker m70 plataforma gps
  - integración rastreador a plaspy
---

# GPSMarker - Configuración del M70

Esta página documenta el contexto público de configuración para usar el rastreador GPSMarker M70 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y no propietarios, así como el flujo general de instalación que necesitará para apuntar un M70 a Plaspy y validar la conectividad hasta que el dispositivo aparezca en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante para el M70 pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía que aparece a continuación junto con la documentación oficial de GPSMarker al aplicar estos ajustes.

## Visión general de la configuración

Esta sección explica los objetivos prácticos al configurar un M70 para Plaspy. La intención principal es preparar el dispositivo para que transmita su telemetría al servidor de Plaspy y aparezca en la interfaz para monitoreo e informes.

- Configurar el M70 para que reporte al endpoint del servidor de Plaspy y así la ubicación y los eventos lleguen a la plataforma.
- Seleccionar el transporte y el puerto adecuados para que los paquetes del dispositivo sean aceptados por Plaspy.
- Guardar y aplicar la configuración del fabricante para que el dispositivo use de forma persistente los ajustes de Plaspy.
- Validar la conectividad y confirmar que el dispositivo es visible en Plaspy después de que se reinicie o reconecte.
- Utilizar las herramientas y la documentación del fabricante cuando los pasos difieran entre versiones de firmware o variantes regionales.

## Ajustes del servidor Plaspy

Al configurar el GPSMarker M70 para Plaspy, use los siguientes ajustes públicos del servidor exactamente como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy emplea el mismo puerto para todos los dispositivos soportados y que la plataforma detectará el protocolo del rastreador de forma automática.

## Requisitos típicos antes de la configuración

- Asegúrese de que el M70 tenga una fuente de energía operativa y batería suficiente o alimentación externa para la configuración y las pruebas.
- Una tarjeta SIM válida y un plan de datos o SMS activo compatible con el M70 para enviar la configuración y la telemetría, si aplica.
- Acceso al método o software oficial de configuración proporcionado por GPSMarker para el M70.
- Tener a mano el IMEI o número de serie del dispositivo para identificarlo en Plaspy una vez que comience a reportar.
- Una conexión de datos GSM estable para el registro inicial y cualquier actualización de firmware por GPRS.
- Conocer si configurará el dispositivo mediante la app del fabricante, comandos GPRS o SMS según las herramientas M70 que tenga.

## Cómo se conecta este rastreador a Plaspy

El GPSMarker M70 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda mostrar y registrar la actividad del dispositivo. Plaspy recibe los paquetes entrantes en el puerto compartido y se encarga de la detección y el parseo del protocolo.

- El M70 envía telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Puede elegir transporte UDP o TCP al configurar el dispositivo dependiendo de las opciones del M70; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita especificar el tipo de protocolo dentro de la plataforma.
- Una vez que el rastreador reporta con éxito, el dispositivo será visible en Plaspy para el monitoreo de ubicación, eventos y estado.
- Validar el reporte confirma que el IMEI o identificador usado por el M70 coincide con el registro que agregó o espera ver en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del GPSMarker M70 proporcionado por el fabricante.
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de destino en 8888.
4. Elija el transporte UDP o TCP si el dispositivo requiere seleccionar una opción de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o mediante comandos SMS/GPRS.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y que su IMEI o identificador aparezca correctamente en la plataforma.

## Ejemplos de comandos de configuración

El M70 admite múltiples métodos de configuración y los comandos exactos o las acciones en la herramienta dependen del firmware y de las utilidades del fabricante. Dado que los comandos del fabricante pueden variar, consulte la guía oficial de configuración del GPSMarker M70 para obtener las cadenas SMS o comandos GPRS exactos y la sintaxis correcta para el firmware de su dispositivo. Si planea configurar vía SMS o comandos TCP/GPRS, utilice la documentación oficial de GPSMarker o la utilidad de configuración para generar los comandos apropiados.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos disponibles, la disposición de los menús y los transportes soportados. Verifique siempre la versión de firmware del M70 antes de aplicar comandos.
- El M70 soporta actualizaciones por GPRS y una interfaz de comandos según la descripción del fabricante; la configuración por SMS también puede estar disponible según el firmware regional.
- Elegir TCP puede proporcionar semánticas de confirmación de conexión, mientras que UDP suele usarse para telemetría con menor sobrecarga; pruebe ambos si el dispositivo permite seleccionar el transporte.
- Plaspy utiliza el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo, así que enfoque su atención en el endpoint y el puerto correctos en la configuración del dispositivo.
- Mantenga un registro del IMEI o del identificador del dispositivo utilizado durante la configuración para poder localizarlo en Plaspy después de su primer reporte.

## Por qué usar Plaspy con esta configuración

Conectar el GPSMarker M70 a Plaspy ofrece una forma práctica y centralizada de monitorear ubicación, eventos y estado del dispositivo sin necesidad de configurar servidores por dispositivo en el lado de la plataforma. Usar el endpoint y puerto compartidos de Plaspy simplifica el despliegue en múltiples equipos y permite que la plataforma gestione la detección y el parseo de protocolos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la guía de configuración y firmware más reciente en el sitio del fabricante https://gpsmarker.ru/ para asegurarse de contar con los comandos e instrucciones actuales para su modelo M70. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la documentación más reciente antes de realizar despliegues a gran escala.
