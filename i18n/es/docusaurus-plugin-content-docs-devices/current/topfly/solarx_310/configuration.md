---
slug: /topfly/solarx_310/configuration
id: solarx_310-configuration
sidebar_label: Configuration
title: TopFly - SolarX 310 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly SolarX 310 para conectarlo a Plaspy con ajustes de servidor compartidos y comandos SMS de ejemplo
keywords:
  - Configuración TopFly SolarX 310
  - Configuración TopFly SolarX 310 Plaspy
  - Configuración servidor SolarX 310
  - Configuración rastreador GPS SolarX 310
  - Configuración rastreador Plaspy
  - Configuración SMS SolarX 310
  - Configuración rastreador de activos TopFly
  - Configuración APN SolarX 310
  - Rastreo de flotas SolarX 310
  - Configuración servidor GPRS SolarX 310
---

# TopFly - SolarX 310 — Configuración

Esta página documenta el contexto público de configuración para usar el TopFly SolarX 310 con Plaspy. Se enfoca en los ajustes compartidos del servidor Plaspy, pasos prácticos de instalación y los comandos SMS de ejemplo publicados para la configuración básica del dispositivo. Utilice esta guía para preparar el equipo para que reporte a Plaspy y para validar la conectividad antes de añadir el dispositivo a su cuenta Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SolarX 310 ofrece opciones de configuración por SMS y GPRS en su documentación pública; los comandos SMS de ejemplo y los valores por defecto que se muestran a continuación se incluyen por conveniencia y provienen de las notas públicas de configuración del dispositivo.

## Resumen de configuración

El proceso de configuración prepara al SolarX 310 para comunicarse con Plaspy, garantiza una ruta válida por datos celulares o SMS y habilita reportes oportunos de ubicación y eventos. En términos prácticos, el objetivo es establecer el acceso a la red (APN), apuntar el rastreador al endpoint de Plaspy, definir los intervalos de reporte y confirmar que el dispositivo sea visible en la plataforma.

- Configure el APN del equipo y las credenciales para que pueda enviar datos por GPRS.
- Apunte el SolarX 310 a Plaspy usando el endpoint y puerto compartido del servidor.
- Defina los intervalos de reporte para que las actualizaciones de ubicación se ajusten a sus necesidades operativas.
- Valide la conectividad y confirme que el dispositivo aparezca en Plaspy tras la configuración.
- Conserve la contraseña del equipo y registre las acciones del instalador para mantenimiento futuro.

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos previos típicos antes de la configuración

- Una unidad SolarX 310 cargada y funcional con acceso a la ranura SIM o a la interfaz SMS para configuración.
- Una SIM celular con datos activos o capacidad SMS y la información APN correcta del operador.
- La contraseña del dispositivo si es necesaria para los comandos; el ejemplo público usa la contraseña por defecto 0000.
- Acceso al método de configuración del fabricante, como comandos SMS, la herramienta de configuración TopFly o interfaz USB.
- Un teléfono o pasarela SMS fiable capaz de enviar los mensajes de configuración si utiliza configuración por SMS.
- Conocimientos básicos sobre si el dispositivo usará transporte UDP o TCP para seleccionar la opción correcta en caso de ser necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el SolarX 310 envía posición y telemetría al endpoint y puerto compartido del servidor Plaspy. Plaspy ingiere los mensajes entrantes del dispositivo, los asocia con el equipo registrado y ofrece visibilidad, alertas y reproducción histórica en la plataforma.

- El rastreador envía mensajes por GPRS o SMS dirigidos al endpoint y puerto del servidor Plaspy.
- Los reportes incluyen actualizaciones de ubicación y eventos del dispositivo que Plaspy usa para seguimiento en tiempo real y alertas.
- Los puntos almacenados en buffer por el dispositivo se reenvían a Plaspy cuando se restablece la conectividad.
- Plaspy utiliza el puerto compartido y la detección automática de protocolo para que el rastreador pueda usar UDP o TCP sin cambios de puerto por dispositivo.
- Una vez que el equipo se comunique correctamente con d.plaspy.com o 54.85.159.138 en el puerto 8888, será visible en Plaspy para monitoreo y reportes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración TopFly para el SolarX 310 (comandos SMS, herramienta USB o software del proveedor) según la documentación del fabricante.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según el formato de comando que admita el dispositivo.
3. Ajuste el puerto del servidor a 8888 (Plaspy usa este mismo puerto para todos los dispositivos compatibles).
4. Seleccione el transporte UDP o TCP si el dispositivo le solicita elegir un protocolo de transporte.
5. Configure el APN del dispositivo y las credenciales necesarias para que los datos GPRS puedan enviarse al servidor.
6. Aplique o guarde la configuración y reinicie el equipo si el dispositivo o el flujo de trabajo requieren un reinicio.
7. Valide que el SolarX 310 reporte a Plaspy y aparezca en los paneles y flujos de telemetría de la plataforma.

## Ejemplos de comandos de configuración

El SolarX 310 puede configurarse usando comandos SMS. Los siguientes comandos de ejemplo públicos provienen de las notas de configuración del dispositivo. El ejemplo asume que la contraseña del equipo es la por defecto 0000. Envíe cada comando como un SMS independiente al dispositivo.

- Establecer la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Configurar el APN y las credenciales del operador
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el nombre del APN del operador, [apnu] es el usuario del APN si se requiere y [apnp] es la contraseña del APN si se requiere. Deje los campos vacíos según lo exija su operador.

- Configurar el servidor GPRS a la IP y puerto de Plaspy
```text
IP,0000,54.85.159.138 8888#
```
Nota: Este comando usa la IP y el puerto del servidor como se muestra en la configuración pública. Plaspy también acepta el dominio d.plaspy.com pero utilice el formato SMS exacto soportado por su dispositivo.

- Establecer el intervalo de actualización de posición a 60 segundos
```text
TIMER,0000,60:60:0:0#
```
Explicación: Este ejemplo configura los intervalos de reporte con el formato del comando TIMER del dispositivo. Ajuste los valores según las necesidades operativas y la documentación del dispositivo.

Notas importantes sobre los comandos:
- La configuración de ejemplo usa la contraseña por defecto del dispositivo 0000 según la configuración pública. Si la contraseña de su equipo ha sido cambiada, reemplace 0000 por la contraseña correspondiente.
- Mantenga el orden de los comandos si su flujo de trabajo requiere configurar APN y servidor antes de habilitar reportes frecuentes.
- Si su herramienta de instalación acepta nombres de dominio en lugar de direcciones IP, puede configurar d.plaspy.com cuando lo soporte la herramienta TopFly o el firmware.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; siempre consulte la documentación TopFly correspondiente a la revisión de firmware de su dispositivo.
- El SolarX 310 admite configuración tanto por SMS como por GPRS; elija el método que se ajuste a sus restricciones operativas y al flujo de trabajo del instalador.
- Cuando el dispositivo requiera selección de transporte, tanto UDP como TCP son compatibles; Plaspy detecta automáticamente el protocolo del equipo y usa el mismo puerto para todos los dispositivos.
- Como buena práctica de instalación, pruebe la conectividad en un entorno de pruebas y confirme que el equipo aparece en Plaspy antes del despliegue a producción.
- Lleve un registro de cualquier cambio de contraseña y de las credenciales APN utilizadas durante la configuración para la gestión continua del dispositivo.

## Por qué usar Plaspy con esta configuración

Utilizar el SolarX 310 con Plaspy proporciona a las organizaciones visibilidad remota resiliente con telemetría centralizada, reportes en buffer y alertas por eventos. La combinación del almacenamiento en buffer del SolarX 310 y la ingestión de Plaspy ayuda a preservar el historial de recorridos tras pérdidas de conectividad y ofrece alertas oportunas por manipulación o eventos de sensores para que los equipos operativos puedan actuar con rapidez.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and official SolarX 310 documentation, verify current information at the manufacturer site https://www.topflytech.com/ as device setup methods and firmware behavior can change over time.
