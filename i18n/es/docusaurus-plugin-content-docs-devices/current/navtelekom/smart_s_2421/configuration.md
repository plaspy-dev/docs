---
slug: /navtelekom/smart_s_2421/configuration
id: smart_s_2421-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2421 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom SMART S-2421 con ajustes de servidor y pasos para integrar con Plaspy
keywords:
  - Navtelekom SMART S-2421
  - configuración SMART S-2421
  - instalación rastreador Navtelekom
  - configuración Plaspy
  - integración rastreador GPS
  - configuración rastreador de vehículo
  - rastreador para gestión de flotas
  - guía NTC Configurator
  - gestión de dispositivos DRC
  - integración sensor 1-Wire
---

# Navtelekom - Configuración del SMART S-2421

Esta página ofrece contexto público de configuración para usar el rastreador Navtelekom SMART S-2421 con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, y describe las interfaces y herramientas de gestión relevantes para instalaciones típicas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por lo tanto, utilice esta guía junto con la documentación de Navtelekom y los procedimientos de su instalador.

## Resumen de la configuración

El objetivo es preparar el SMART S-2421 para que comunique de forma fiable con la plataforma Plaspy y así mostrar la ubicación en tiempo real y la telemetría en su cuenta. La configuración se centra en apuntar el rastreador al endpoint de Plaspy, elegir el transporte adecuado y confirmar que la telemetría y los eventos de entradas/salidas se entregan correctamente.

- Configure el rastreador para que reporte al endpoint del servidor de Plaspy y confirme la conectividad.
- Seleccione el transporte y los parámetros de puerto para que el dispositivo envíe datos GNSS y telemetría a Plaspy.
- Verifique que las entradas, salidas e interfaces de sensores reporten como se espera en la plataforma.
- Utilice herramientas del fabricante como NTC Configurator o DRC para configuración persistente y gestión de firmware.
- Valide el reporte de estado del dispositivo, incluyendo respaldo de batería y eventos de alimentación, para que Plaspy muestre un estado confiable.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la instalación

- Confirme que el SMART S-2421 esté alimentado y accesible según la guía del instalador y que la batería interna esté cargada si es necesario.
- Asegúrese de contar con una SIM compatible y conectividad móvil si la instalación requiere datos celulares y de que haya cobertura en la zona.
- Obtenga acceso al método de configuración oficial del fabricante o al software como NTC Configurator o la plataforma de gestión remota DRC.
- Tenga a mano el IMEI o identificador del dispositivo para coincidir el rastreador en Plaspy una vez que empiece a reportar.
- Prepare una lista básica de entradas, salidas y sensores conectados para validar los canales de telemetría en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el SMART S-2421 envía fijaciones GNSS y telemetría al endpoint compartido de Plaspy para que los operadores puedan ver posiciones en vivo y eventos del dispositivo. El equipo utiliza su módem celular para entregar ubicación, eventos de entradas y salidas y datos de sensores a Plaspy por el transporte y puerto configurados.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- El transporte puede configurarse como UDP o TCP según el firmware del dispositivo y la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo usado por el rastreador y procesa la telemetría entrante en consecuencia.  
- La telemetría del dispositivo incluye actualizaciones de posición GNSS, estado de alimentación y batería, y eventos de entradas/salidas como encendido o inmovilizador.  
- Los datos de sensores conectados vía 1-Wire o Bluetooth al S-2421 se reenvían a Plaspy cuando esas interfaces están configuradas.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software como NTC Configurator o la plataforma de gestión remota DRC.  
2. En la configuración del dispositivo, introduzca el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.  
3. Establezca el puerto del servidor en 8888 en la configuración del rastreador.  
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte.  
5. Aplique o guarde la configuración y confirme que los ajustes se hayan escrito en el dispositivo.  
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para activar los nuevos ajustes de servidor.  
7. Valide que el dispositivo reporte a Plaspy revisando la telemetría entrante y el estado del equipo en la plataforma.

## Ejemplos de comandos de configuración

El SMART S-2421 puede configurarse usando las herramientas de Navtelekom o sistemas de gestión remota. Los comandos exactos y el formato para establecer servidor y transporte dependen de la herramienta del fabricante y de la versión de firmware. Consulte la documentación de NTC Configurator o DRC para la sintaxis exacta de comandos y los pasos de la interfaz de usuario. Habitualmente, la configuración se realiza mediante una aplicación de escritorio configuradora o a través del servidor de gestión del dispositivo y no requiere entrada directa por línea de comandos.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden cambiar los nombres de menú exactos o la sintaxis de comandos utilizada para establecer dominio servidor IP transporte y puerto. Revise siempre las notas de la versión del firmware.  
- TCP y UDP funcionan con Plaspy en el puerto 8888; elija el transporte que se alinee con sus necesidades de red y confiabilidad.  
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente los protocolos, enfoque su verificación en asegurar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Use NTC Configurator para ajustes locales y DRC para gestión centralizada y actualizaciones de firmware cuando administre flotas.  
- Verifique el mapeo de entradas, salidas y canales de sensores después de la configuración para que Plaspy reciba la telemetría esperada desde 1‑Wire y sensores Bluetooth.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2421 con Plaspy ofrece una vía práctica para lograr visibilidad centralizada de la flota, reporte de eventos y monitoreo de salud del dispositivo. El rastreador aporta telemetría central y múltiples interfaces de sensores que Plaspy puede ingerir para construir historial de ubicaciones, generar alertas e informes operativos para vehículos y activos.

Para saber más sobre Plaspy y cómo integrarlo con el SMART S-2421 visite https://www.plaspy.com. Para obtener los métodos de configuración específicos más recientes notas de firmware y detalles del fabricante verifique la información en el sitio web de Navtelekom https://www.navtelecom.ru/
