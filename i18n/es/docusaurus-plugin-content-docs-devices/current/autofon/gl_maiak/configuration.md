---
slug: /autofon/gl_maiak/configuration
id: gl_maiak-configuration
sidebar_label: Configuration
title: AutoFon - GL-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon GL-Маяк con Plaspy incluyendo ajustes de servidor y flujo de instalación
keywords:
  - Configuración AutoFon GL-Маяк
  - Instalación AutoFon GL-Маяк
  - Compatibilidad GL-Маяк Plaspy
  - Configuración rastreador GL-Beacon
  - Configuración servidor rastreador GPS
  - Configuración de dispositivo Plaspy
  - Configuración de rastreo de vehículos
  - Guía de instalación rastreador de activos
  - Integración plataforma GPS
  - Configuración remota de rastreador
---

# AutoFon - Configuración GL-Маяк

Esta página describe el contexto público de configuración para utilizar el AutoFon GL-Маяк (GL-Beacon) con Plaspy. Explica los ajustes compartidos del servidor Plaspy, los pasos prácticos que realizará del lado del fabricante y las comprobaciones habituales necesarias para confirmar que el dispositivo es visible en Plaspy. Use esta guía junto con la documentación del equipo y sus procedimientos de instalación.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los procedimientos específicos con la documentación de AutoFon cuando sea necesario.

## Visión general de la configuración

El objetivo de la configuración es preparar el GL-Маяк para comunicarse de forma fiable con Plaspy, validar la conectividad y asegurarse de que el rastreador aparezca en la plataforma Plaspy para monitoreo y alertas. Siga la ruta de configuración del fabricante para apuntar el dispositivo a Plaspy y confirmar el envío de eventos y posiciones.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy para que los paquetes GPRS lleguen a la plataforma.
- Seleccione la opción de transporte adecuada en el dispositivo si el firmware lo requiere, normalmente UDP o TCP.
- Guarde y aplique la configuración y reinicie el equipo si la herramienta del fabricante lo exige.
- Valide que los mensajes de posición, latido y alarma aparezcan en Plaspy después de la configuración.
- Utilice la alternativa por SMS o comandos de verificación del fabricante si no es posible probar GPRS durante la instalación.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de conexión de Plaspy al configurar el GL-Маяк. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: choose UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la instalación

- Confirme que el GL-Маяк tiene alimentación y está en un estado listo para configuración con baterías instaladas o alimentación externa conectada.
- Asegúrese de contar con una tarjeta SIM válida con datos GPRS habilitados y saldo suficiente si el dispositivo usará reporte por GPRS.
- Tenga acceso al método oficial de configuración de AutoFon o al software que aplique los ajustes de servidor y transporte.
- Conozca el identificador del dispositivo requerido por Plaspy para el alta, como el IMEI o el ID que reporte el rastreador.
- Confirme que el firmware esté actualizado cuando sea posible y registre la versión de firmware por si los procedimientos del fabricante difieren.
- Si va a usar comandos SMS como parte de la configuración o verificación, asegúrese de tener un número autorizado y el formato correcto de comandos SMS.

## Cómo se conecta este rastreador a Plaspy

El GL-Маяк envía datos de posición y eventos por GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma proporcione visibilidad en tiempo real, alertas y reproducción histórica. Plaspy recibe datos en el mismo puerto de escucha para todos los dispositivos y determina el protocolo de forma automática.

- El dispositivo transmite paquetes GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP dependiendo del firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría y los mensajes de evento.
- Los eventos de alarma y los disparos SOS se reenvían a Plaspy para notificación inmediata y gestión de flujos de trabajo.
- SMS está disponible como canal de respaldo para alertas críticas o configuración remota cuando el dispositivo lo soporta.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de AutoFon correspondiente al firmware del GL-Маяк que tenga.
2. Ubique la sección de ajustes de servidor o configuración GPRS en la herramienta del fabricante.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP como opción de transporte si el equipo requiere selección de transporte.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
7. Reinicie el dispositivo si el firmware necesita un reboot para aplicar los ajustes de red.
8. Valide que el equipo reporte a Plaspy comprobando la llegada de telemetría y eventos de alarma en la plataforma.

## Ejemplos de comandos de configuración

Los métodos de configuración del modelo GL-Маяк pueden variar según el firmware y las herramientas del proveedor. Dado que los comandos y formatos SMS específicos del fabricante no se incluyen aquí, consulte el manual de configuración oficial de AutoFon para la sintaxis exacta y ejemplos. La configuración típica se realiza con la utilidad de configuración del fabricante o mediante comandos SMS documentados por AutoFon.

Si dispone del conjunto de comandos de AutoFon según la documentación oficial, aplique la secuencia que escriba el dominio o IP del servidor, ajuste el puerto a 8888, seleccione UDP o TCP si corresponde y guarde los parámetros. Si se usa configuración por SMS, siga exactamente el formato de comandos proporcionado por AutoFon y conserve los marcadores de posición como parámetros APN cuando estén presentes.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús, los campos obligatorios y la ubicación exacta de los ajustes de servidor en el software del fabricante.
- Cuando exista la opción, UDP suele consumir menos recursos de red, pero TCP ofrece confirmación de conexión; elija según la política del instalador y las condiciones de la red.
- La configuración por SMS es útil para dispositivos remotos o de difícil acceso, pero verifique que los comandos SMS estén habilitados y que el módem los soporte.
- Mantenga un registro del IMEI y de la configuración aplicada durante la instalación para resolución de problemas y para dar de alta los equipos en Plaspy.
- Confirme los ajustes GPRS del operador móvil local, como el APN, al configurar el dispositivo; los detalles de APN los suministra el operador de la SIM y la documentación de AutoFon cuando sea necesario.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon GL-Маяк con Plaspy ofrece una combinación práctica para monitoreo de activos a largo plazo, despliegues discretos y manejo robusto de alarmas. Plaspy recibe la telemetría del GL-Маяк en un endpoint y puerto compartidos y consistentes, lo que simplifica el despliegue y permite que la plataforma presente ubicación en tiempo real, alertas y reproducción histórica para supervisión operativa.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para conocer los métodos de configuración específicos más recientes, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de AutoFon https://www.autofon.ru/ ya que las especificaciones y los procedimientos de configuración pueden cambiar con el tiempo.
