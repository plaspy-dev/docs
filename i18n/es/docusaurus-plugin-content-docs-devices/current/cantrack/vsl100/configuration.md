---
slug: /cantrack/vsl100/configuration
id: vsl100-configuration
sidebar_label: Configuration
title: CanTrack - VSL100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CanTrack VSL100 con Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - Configuración CanTrack VSL100
  - Configuración VSL100 para Plaspy
  - Configuración rastreador GPS CanTrack
  - Configuración de servidor VSL100
  - Configuración software de rastreo VSL100
  - Guía de instalación CanTrack
  - Configuración de gestión de flotas VSL100
  - Configuración GPRS VSL100
  - Configuración limitador de velocidad GPS
  - Integración de dispositivo Plaspy
---

# CanTrack - Configuración del VSL100

Esta página explica cómo configurar públicamente el rastreador CanTrack VSL100 para su uso con Plaspy. Reúne los ajustes de servidor públicos y las pautas prácticas necesarias para apuntar un dispositivo VSL100 a Plaspy, de modo que el equipo envíe ubicación, eventos del control de velocidad, alertas por manipulación y otra telemetría a la plataforma para monitoreo y generación de informes.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para conocer los valores que requiere Plaspy y el flujo general de configuración, y consulte la documentación de CanTrack para comandos específicos del dispositivo y el comportamiento de firmware más reciente.

## Resumen de la configuración

El objetivo es preparar el VSL100 para comunicarse de forma fiable con Plaspy y garantizar que los operadores de flota reciban telemetría continua de ubicación y eventos. La configuración suele abarcar el endpoint del servidor, la selección de transporte y cualquier ajuste de APN o SIM necesario para la conectividad GPRS.

- Apunte el VSL100 al endpoint de Plaspy usando el nombre de dominio o la dirección IP pública proporcionada.
- Configure el puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- Seleccione UDP o TCP en el equipo si el fabricante exige elegir un tipo de transporte.
- Aplique y guarde los ajustes mediante la herramienta de PC de CanTrack, por GPRS o por SMS según el dispositivo instalado y su flujo de trabajo.
- Verifique la conectividad asegurándose de que el dispositivo aparezca y reporte en la plataforma Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el VSL100:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos

Proporcione el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo y establezca el puerto 8888. Si el firmware del dispositivo exige elegir entre UDP o TCP, seleccione el transporte preferido y guarde el cambio. Plaspy detectará el protocolo del rastreador automáticamente una vez que el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Alimentación física al VSL100 y verificación de una batería de respaldo en buen estado si está instalada
- SIM activa con datos habilitados y el APN correcto configurado si va a usar conectividad GPRS
- Antenas GSM y GNSS externas conectadas cuando la instalación lo requiera
- Acceso a las herramientas o métodos de configuración de CanTrack, como la utilidad de PC, configuración por SMS o configuración remota por GPRS
- Acceso a su cuenta Plaspy y a las herramientas de administración de flota para verificar la visibilidad del dispositivo tras la configuración
- Conocimiento básico del número de serie o identificador del equipo usado para enlazar registros en Plaspy

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el VSL100 envía ubicación, eventos del control de velocidad, alertas por manipulación, alarmas anti-jammer y otra telemetría a Plaspy a través de su enlace GPRS. Plaspy ingiere estos mensajes en el endpoint y puerto compartidos y los muestra en la plataforma para monitoreo e informes.

- El equipo reporta periódicamente y ante eventos al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede usar UDP o TCP según la configuración del dispositivo; Plaspy detectará el protocolo automáticamente
- Las violaciones de límite de velocidad, alertas por manipulación y alarmas anti-jammer se transmiten como eventos y se registran en Plaspy
- Los datos históricos pueden permanecer en el dispositivo y subirse o descargarse según los métodos de CanTrack, mientras que la telemetría en tiempo real alimenta los paneles de Plaspy
- Una configuración exitosa hace que el VSL100 sea visible en Plaspy para seguimiento en vivo y generación de informes de auditoría

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración CanTrack para el VSL100: herramienta de PC, configuración remota por GPRS o comandos SMS.
2. Ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Configure el puerto del dispositivo en 8888; recuerde que Plaspy usa este mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el firmware del VSL100 solicita seleccionar el transporte.
5. Aplique o guarde la configuración mediante la herramienta o método del fabricante elegido.
6. Reinicie el dispositivo si la documentación del fabricante o el firmware indican que es necesario tras aplicar cambios.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado del equipo y los eventos recientes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El VSL100 permite configuración vía herramienta de PC, GPRS y SMS. Los formatos y secuencias exactas de comandos varían entre versiones de firmware y utilidades de CanTrack. Dado que los comandos de fabricante y las sintaxis SMS las suministra y mantiene CanTrack, consulte el manual oficial de configuración del VSL100 o la utilidad de configuración de PC para obtener los comandos y parámetros exactos para establecer host del servidor, IP, puerto y transporte. Las acciones generales que realizará son:

- Establecer el host del servidor a d.plaspy.com o 54.85.159.138
- Configurar el puerto del servidor en 8888
- Seleccionar UDP o TCP como transporte si se requiere
- Guardar y reiniciar el equipo si es necesario

Si prefiere ejemplos concretos a nivel de comandos o sintaxis SMS, consulte la guía de configuración del CanTrack VSL100 del fabricante para las cadenas precisas y cualquier comando de verificación disponible.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menú, sintaxis de SMS o el comportamiento de la herramienta de PC; siempre verifique la versión de firmware antes de aplicar cambios.
- Elija UDP o TCP según las condiciones de su red y las instrucciones específicas del manual de CanTrack; Plaspy detectará el protocolo de forma automática.
- Verifique la configuración del APN del operador móvil y que la SIM tenga datos GPRS habilitados cuando use conectividad celular.
- Para instalaciones que usan SMS para configurar, asegúrese de conocer y proteger el número de teléfono de control y las contraseñas SMS.
- Conserve los identificadores del dispositivo como el IMEI para poder relacionar la unidad física con el registro en Plaspy tras la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el VSL100 para reportar a Plaspy centraliza ubicación, eventos de control de velocidad, alertas por manipulación y notificaciones anti-jammer en una sola interfaz de gestión de flotas. Esta integración facilita que los operadores supervisen el cumplimiento, respondan rápidamente a incidentes y mantengan registros auditables de infracciones de velocidad y eventos de seguridad.

Para conocer más sobre Plaspy y cómo se integra con dispositivos compatibles visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware e instrucciones de instalación vigentes, verifique los detalles actuales en el sitio de CanTrack https://www.cantrackgps.com/.
