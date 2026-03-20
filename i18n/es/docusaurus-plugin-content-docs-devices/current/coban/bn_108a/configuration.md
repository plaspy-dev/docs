---
slug: /coban/bn_108a/configuration
id: bn_108a-configuration
sidebar_label: Configuration
title: Coban - BN-108A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban BN-108A con Plaspy, incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración Coban BN-108A
  - Instalación Coban BN-108A
  - BN-108A con Plaspy
  - Configuración servidor BN-108A
  - Configuración rastreador GPS Coban
  - Configuración rastreador GPS Plaspy
  - Rastreo de vehículos Coban
  - Comandos SMS BN-108A
  - Configuración gestión de flotas
  - Integración rastreador GPS Plaspy
---

# Coban - BN-108A Configuración

Esta página reúne la información pública para configurar el Coban BN-108A con Plaspy. Contiene los ajustes de servidor de Plaspy, un flujo de trabajo práctico y los comandos SMS públicos que muchos dispositivos BN-108A usan para apuntar el equipo a Plaspy y así habilitar el seguimiento en tiempo real y la ingestión de telemetría.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía como punto de partida práctico y verifique el comportamiento específico del dispositivo en la documentación de Coban cuando sea necesario.

## Descripción general de la configuración

Este proceso prepara un BN-108A para comunicarse con Plaspy, de modo que el dispositivo aparezca en la plataforma y reporte datos de ubicación y eventos de forma fiable. Cuando está soportado, el BN-108A acepta comandos SMS para establecer APN, servidor, transporte y cadencia de reporte. Los comandos que se muestran a continuación reflejan los formatos públicos y frecuentemente publicados.

- Configure el APN y los ajustes GPRS del equipo para que use datos móviles y alcance Plaspy
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para reportes TCP o UDP
- Establezca intervalos y modos de reporte para controlar las actualizaciones en tiempo real y el consumo de energía
- Valide la conectividad desde el dispositivo hacia Plaspy y confirme que el equipo sea visible en la plataforma
- Opcionalmente active opciones de protocolo del fabricante para mejorar el reporte de sensores o alarmas

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con datos móviles y los parámetros APN correctos del operador
- Carga de batería suficiente o alimentación externa para realizar la configuración y los reportes iniciales
- Acceso al método oficial de configuración del fabricante, como comandos SMS o una herramienta del proveedor
- Conocimiento de la contraseña del dispositivo para configuración por SMS; la contraseña por defecto en comandos públicos suele ser 123456
- Forma de enviar y recibir SMS desde el equipo durante la configuración si va a usar la configuración por SMS
- Acceso a los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y puerto 8888 para ingresarlos en el dispositivo

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el BN-108A envía posiciones GNSS, alarmas y telemetría al endpoint y puerto compartidos de Plaspy usando el transporte seleccionado durante la configuración. Plaspy ingiere estos mensajes, detecta automáticamente el protocolo del rastreador y hace que el dispositivo sea visible en los paneles y herramientas de reporte.

- El rastreador se apunta al dominio o IP y puerto de Plaspy para que los paquetes salientes TCP o UDP alcancen la plataforma
- La telemetría y las alarmas del dispositivo se envían por GSM GPRS al endpoint configurado de Plaspy
- Plaspy detecta automáticamente el protocolo conectado y parsea los mensajes entrantes
- Los eventos de estado y alarma reportados por el BN-108A aparecen en Plaspy para alertas y reproducción histórica
- La configuración por SMS puede usarse para establecer APN, servidor, transporte e intervalo de reporte antes de validar el envío de datos

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Coban para su BN-108A, ya sea por comandos SMS o por herramientas del proveedor
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 cuando el dispositivo solicite una dirección de servidor
3. Establezca el puerto 8888 en los ajustes de servidor del dispositivo
4. Elija UDP o TCP como transporte si el equipo requiere seleccionar transporte
5. Configure el APN del operador y, opcionalmente, el usuario y contraseña del APN para que el dispositivo use datos móviles
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante lo requieren
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, y confirme que las posiciones GPS y las alarmas se registren correctamente

## Ejemplos de comandos de configuración

A continuación se muestran los comandos SMS públicos más comunes para el BN-108A en el orden en que suelen aplicarse. Los comandos de ejemplo usan la contraseña por defecto 123456 cuando es necesario. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores de su operador.

1. Comando opcional de restauración de fábrica
```text
begin123456
```
2. Establecer la zona horaria a UTC 0
```text
time zone123456 0
```
3. Establecer el APN del operador
```text
apn123456 {{apn}}
```
- {{apn}} es la cadena APN de datos móviles proporcionada por su operador

4. Establecer usuario y contraseña del APN si el operador los requiere
```text
up123456 {{apnu}} {{apnp}}
```
- {{apnu}} y {{apnp}} son marcadores para el usuario y la contraseña del APN respectivamente; muchos operadores no requieren estos valores

5. Configurar el servidor GPRS a Plaspy por IP y puerto
```text
adminip123456 54.85.159.138 8888
```
- Este ejemplo usa la IP y puerto del servidor Plaspy. Alternativamente puede usar el dominio d.plaspy.com si el dispositivo soporta nombres de host.

6. Establecer un intervalo de actualización de posición (ejemplo)
```text
fix060s060s***n123456
```
- Este comando corresponde al formato publicado para la cadencia de reporte del BN-108A. Mantenga el formato exacto que requiere su firmware.

7. Cambiar a modo GPRS y seleccionar UDP o TCP
```text
gprs123456,1,1
```
o, según el firmware
```text
gprs123456
```
- Use la variante que espere su firmware. La primera forma selecciona explícitamente GPRS y parámetros de transporte.

8. Consultar los ajustes actuales
```text
check123456
```

9. Habilitar reporte de protocolo mejorado para sensores digitales o estado de combustible cuando esté soportado
```text
protocol123456 18
```
- Este comando se utiliza en conjuntos de comandos publicados del BN-108A para cambiar el formato de reporte y añadir información de sensores

Nota sobre contraseñas
- Los comandos de ejemplo usan la contraseña por defecto 123456 según la documentación pública. Reemplace o cambie la contraseña del dispositivo siguiendo las instrucciones del fabricante cuando corresponda.

## Notas de configuración

- La configuración por SMS es comúnmente soportada por el BN-108A y se refleja en los comandos de ejemplo; algunos instaladores usan software del proveedor según las herramientas disponibles
- Las revisiones de firmware pueden cambiar formatos de comando o parámetros soportados; siempre verifique la sintaxis del comando contra el manual del dispositivo para su versión de firmware
- Elija UDP o TCP según sus necesidades operativas y la guía del proveedor; Plaspy soporta ambos y detectará el protocolo automáticamente
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que debe apuntar el BN-108A al puerto 8888 al configurar la dirección del servidor
- Tenga cuidado con los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y sustitúyalos exactamente por los valores que le proporcione su operador móvil

## Por qué usar Plaspy con esta configuración

Usar el BN-108A con Plaspy ofrece una vía práctica para obtener actualizaciones continuas de posición, enrutamiento de alarmas y seguimiento histórico para la gestión de flotas y activos. La larga duración de batería del BN-108A, su montaje magnético, funciones de inducción Bluetooth y soporte para TCP UDP y SMS lo convierten en una opción versátil para implementaciones que requieren telemetría fiable y alertas antirobo integradas en una plataforma única.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, detalles de firmware y orientación del fabricante verifique la información más reciente en el sitio de Coban https://www.coban.net/ ya que las especificaciones del fabricante y los formatos de comando pueden cambiar con el tiempo.
