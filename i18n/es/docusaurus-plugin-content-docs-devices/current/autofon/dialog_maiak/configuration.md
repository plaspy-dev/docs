---
slug: /autofon/dialog_maiak/configuration
id: dialog_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Диалог-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon Диалог-Маяк para integrarlo con Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - Configuración AutoFon Диалог-Маяк
  - Instalación AutoFon Диалог-Маяк
  - Configuración de servidor AutoFon Диалог-Маяк
  - Configuración de rastreador GPS AutoFon
  - Configuración Diálogo-Mаяк
  - Configuración de Plaspy para trackers
  - Guía de integración Plaspy
  - Configuración de seguimiento vehicular AutoFon
  - Configuración de tracker GPRS SMS
  - Seguimiento de flotas AutoFon
---

# AutoFon - Диалог-Маяк Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon Диалог-Маяк (Dialog-Beacon) con Plaspy. Resume los valores de servidor compartidos y los pasos prácticos que habitualmente se requieren para apuntar el dispositivo a Plaspy, de modo que la plataforma reciba los reportes de ubicación y telemetría enviados por el rastreador vía GPRS o SMS.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para preparar el dispositivo para la integración con Plaspy y consulte la documentación oficial de AutoFon para detalles específicos del dispositivo o del firmware.

## Resumen de configuración

Este proceso de configuración se centra en preparar el Диалог-Маяк para que se comunique de manera confiable con Plaspy, validar la conectividad de red y habilitar la visibilidad de los datos en la plataforma. Los pasos son generales y deben aplicarse con el método de configuración oficial de AutoFon que utilice para su equipo.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los reportes GPRS lleguen a la plataforma.
- Configurar el puerto y el transporte del dispositivo (UDP o TCP) según requiera el firmware.
- Verificar la conectividad celular y los parámetros APN para permitir el reporte por GPRS con el operador.
- Habilitar o confirmar el reporte por SMS si va a usar SMS como canal de respaldo.
- Aplicar y guardar los ajustes en el dispositivo y confirmar que la telemetría aparece en Plaspy.

## Ajustes del servidor Plaspy

Al configurar el AutoFon Диалог-Маяк para Plaspy, utilice los siguientes ajustes públicos documentados de Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la plataforma intentará identificar automáticamente el protocolo del rastreador una vez que el dispositivo reporte al endpoint.

## Requisitos típicos antes de la configuración

- Una unidad Диалог-Маяк con alimentación y funcional, con baterías internas cargadas o alimentación externa conectada.
- Una tarjeta SIM operativa con datos habilitados o capacidad SMS y crédito suficiente para registro y pruebas.
- Datos del APN y la configuración del operador a mano para que se pueda establecer la sesión GPRS.
- Acceso al método de configuración oficial de AutoFon o a la herramienta proporcionada por el proveedor o instalador.
- Un medio para reiniciar o cortar y restaurar la alimentación del dispositivo después de la configuración, si es necesario.
- Credenciales básicas o derechos de acceso a la interfaz de configuración del dispositivo cuando aplique.

## Cómo se conecta este rastreador a Plaspy

El Диалог-Маяк envía ubicación y telemetría de eventos a Plaspy usando reportes GPRS al endpoint de monitoreo configurado, y puede usar SMS como canal secundario cuando se requiera. Configure el dispositivo para que apunte al endpoint compartido de Plaspy para que la plataforma ingiera coordenadas, alarmas y paquetes en búfer.

- El rastreador se apunta a d.plaspy.com o 54.85.159.138 como servidor de monitoreo.
- Los reportes y paquetes se envían al puerto 8888 del servidor Plaspy.
- El transporte puede configurarse en UDP o TCP según las opciones del firmware; cualquiera de los dos es aceptado.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al dispositivo correspondiente.
- El dispositivo puede usar su búfer tipo caja negra para reintentar y entregar paquetes no enviados al endpoint de Plaspy cuando vuelva la cobertura.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de AutoFon para el Диалог-Маяк (herramienta del fabricante, comandos SMS o interfaz de instalador).
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo server/host.
3. Configure el puerto de reporte en 8888 (Plaspy usa el mismo puerto para los dispositivos compatibles).
4. Seleccione la opción de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración mediante la herramienta del dispositivo o a través del método de comandos.
6. Reinicie o realice un ciclo de energía del dispositivo si el método de configuración lo exige para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador aparece en la plataforma y que se recibe telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos y la interfaz de configuración varían según el firmware de AutoFon y la herramienta que utilice. Este resumen de configuración modelo no incluye cadenas de comando específicas del dispositivo. Dependiendo del firmware y de la herramienta del instalador, la configuración se realiza comúnmente por alguno de estos métodos:

- Una utilidad de configuración de escritorio o web del proveedor que expone campos para servidor, puerto, APN y transporte.
- Comandos de configuración por SMS enviados al dispositivo cuando se soporta la configuración por SMS.
- Una interfaz de instalador en el dispositivo que acepta la entrada de parámetros durante la provisión inicial.

Si dispone de ejemplos de comandos específicos del dispositivo en la documentación de AutoFon o proporcionados por su instalador, aplíquelos para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, luego seleccione UDP o TCP según corresponda. Mantenga siempre el orden: configure primero APN y parámetros del operador, luego servidor y puerto, después guarde y reinicie.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles y la sintaxis exacta de los comandos; verifique siempre la versión de firmware antes de aplicar comandos.
- Si el dispositivo soporta ambos reportes, SMS y GPRS, es habitual configurar primero GPRS y mantener SMS como canal de respaldo para alertas críticas.
- Elija UDP o TCP según su práctica de instalación; Plaspy acepta ambos y detecta el protocolo del rastreador automáticamente.
- Las herramientas de instalador y las utilidades del proveedor pueden encapsular los comandos de forma distinta; utilice el método oficial de AutoFon proporcionado para su equipo.
- Confirme los parámetros APN con el operador celular si las sesiones GPRS no se establecen.

## Por qué usar Plaspy con esta configuración

Configurar el AutoFon Диалог-Маяк para que reporte a Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de ubicación, eventos y telemetría para despliegues a largo plazo o encubiertos. El búfer tipo caja negra del dispositivo, las opciones de reporte GPRS y SMS, y la telemetría rica en eventos (SOS, alertas de acelerómetro, entradas de alarma, monitoreo de audio) se integran bien con los flujos de monitoreo y alertas de Plaspy para respuesta ante robos, supervisión de flotas y protección de activos desatendidos.

Para obtener más información sobre Plaspy y las integraciones compatibles visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo, detalles de firmware y orientación de instalación más recientes, verifique la información actual en el sitio oficial de AutoFon https://www.autofon.ru/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que debe confirmar los detalles antes del despliegue final.
