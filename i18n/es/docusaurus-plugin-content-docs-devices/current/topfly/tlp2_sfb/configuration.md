---
slug: /topfly/tlp2_sfb/configuration
id: tlp2_sfb-configuration
sidebar_label: Configuration
title: TopFly - TLP2-SFB Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración TopFly TLP2-SFB para compatibilidad con Plaspy, ejemplos de servidor y comandos SMS
keywords:
  - Configuración TopFly TLP2-SFB
  - Instalación TopFly TLP2-SFB para Plaspy
  - Configuración rastreador GPS TopFly
  - Configuración de servidor TLP2-SFB
  - Comandos SMS TLP2-SFB
  - Integración de rastreadores con Plaspy
  - Ajustes de servidor Plaspy
  - Configuración de rastreadores de activos
  - Configuración plataforma GPS
  - Monitoreo remoto de activos
---

# TopFly - Configuración TLP2-SFB

Esta página documenta el contexto público de configuración para usar el rastreador TopFly TLP2-SFB con Plaspy. Se centra en los ajustes prácticos del servidor, los requisitos habituales y los comandos SMS públicos que se usan comúnmente para apuntar el dispositivo a Plaspy y permitir la ingestión de telemetría. Use esta guía junto con el manual del dispositivo y las herramientas del proveedor para completar la puesta en marcha.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos a la plataforma. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir la documentación del fabricante cuando los detalles difieran de los ejemplos mostrados aquí.

## Visión general de la configuración

Preparar el TLP2-SFB para Plaspy implica configurar el dispositivo para que reporte al endpoint de Plaspy y confirmar el flujo de datos desde el rastreador hacia la plataforma. La configuración típica garantiza que el rastreador pueda usar la conectividad celular para enviar ubicación y telemetría, y que los intervalos de reporte y el comportamiento de almacenamiento cumplan sus necesidades operativas.

- Configure el rastreador para usar el endpoint y el puerto de servidor de Plaspy para que los datos se enruten a los paneles de Plaspy.
- Establezca el APN del dispositivo y verifique la conectividad celular para que el rastreador pueda subir historial almacenado y puntos en tiempo real.
- Seleccione el protocolo de transporte si el rastreador requiere elegir entre UDP o TCP antes de enviar datos.
- Ajuste los intervalos de reporte y el almacenamiento en buffer para que el rastreador preserve el historial durante huecos de cobertura y sincronice con Plaspy al reconectarse.
- Valide que el dispositivo sea visible en Plaspy y que la telemetría y los eventos lleguen como se espera.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y que la selección entre UDP o TCP se realiza en el lado del dispositivo si es necesario.

## Requisitos típicos antes de configurar

- Una unidad TLP2-SFB encendida y accesible, con batería suficiente y cualquier configuración solar finalizada.
- Una tarjeta SIM activa y acceso a datos móviles compatible con el dispositivo y la región si usa transporte GPRS o LTE.
- Acceso al método de configuración del fabricante, como comandos SMS, aplicación del proveedor o herramienta de configuración.
- La contraseña SMS por defecto del dispositivo si usará comandos SMS; el ejemplo público aquí muestra la contraseña 0000.
- Los datos APN del operador móvil para completar los campos del comando APN.
- Acceso a una cuenta o espacio de trabajo en Plaspy para validar que el dispositivo aparezca y reporte tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El TLP2-SFB se configura para enviar ubicación y telemetría al endpoint y puerto compartidos de Plaspy. Cuando el rastreador transmite por el transporte seleccionado, Plaspy ingiere los datos, los relaciona con el registro del dispositivo y pone la ubicación y los sensores a disposición en mapas, alertas e informes.

- El rastreador envía GPS y telemetría a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección en el equipo; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo desde la plataforma.
- Los puntos almacenados en buffer en el dispositivo se suben a Plaspy cuando se restablece la conectividad para preservar el historial de viajes.
- Los datos de sensores BLE y los mensajes de eventos que reenvía el rastreador llegan a Plaspy junto con las actualizaciones de ubicación.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software del TLP2-SFB, por ejemplo la configuración por SMS o la herramienta del proveedor.
2. Ingrese el endpoint del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Seleccione el protocolo de transporte UDP o TCP en el dispositivo si requiere elegir uno.
5. Configure el APN y otros parámetros del operador para que el rastreador pueda establecer conexión de datos móviles.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y la telemetría reciente en su espacio de trabajo de Plaspy.

Si usa comandos SMS para la configuración inicial, incluya la contraseña del dispositivo en cada comando y siga el orden indicado por el fabricante cuando sea necesario.

## Ejemplo de comandos de configuración

El TLP2-SFB soporta configuración mediante SMS. Los comandos públicos de ejemplo abajo muestran los mensajes SMS comúnmente usados y emplean la contraseña por defecto 0000 indicada en el contenido público. Envíe cada línea como un SMS separado al número del dispositivo.

1. Establecer la zona horaria a UTC 0
```sms
GMT,0000,0#
```

2. Configurar el APN del operador
```sms
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} es el nombre del APN del operador
- {{apnu}} es el usuario del APN si el operador lo requiere
- {{apnp}} es la contraseña del APN si el operador la requiere

3. Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```sms
IP,0000,54.85.159.138 8888#
```
Este comando apunta el rastreador a Plaspy usando la IP y el puerto proporcionados. Alternativamente puede usar el dominio d.plaspy.com en interfaces del dispositivo que acepten un nombre de host.

4. Establecer el intervalo de actualización de posición a 60 segundos
```sms
TIMER,0000,60:60:0:0#
```
Este ejemplo configura los intervalos de reporte y puede adaptarse a sus requerimientos operativos.

Notas importantes sobre los comandos
- Los comandos SMS de ejemplo usan la contraseña por defecto 0000 indicada en el contenido público. Si la contraseña de su dispositivo fue cambiada, use la contraseña actual en los comandos.
- Mantenga el orden de los comandos si la documentación del dispositivo exige una secuencia específica durante la configuración inicial.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones soportadas. Verifique los comandos frente al manual del dispositivo para la versión de firmware exacta de su unidad.
- La configuración por SMS se presenta en los ejemplos públicos, pero las herramientas del fabricante o la configuración OTA también pueden estar disponibles para despliegues masivos.
- Cuando una interfaz del dispositivo acepte tanto un dominio como una dirección IP, usar d.plaspy.com puede simplificar futuras actualizaciones del servidor, mientras que usar la IP 54.85.159.138 es una opción directa válida indicada en los comandos públicos.
- Elija UDP o TCP en el dispositivo según la preferencia del instalador o los requisitos de la red; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Mantenga un registro de las contraseñas y los ajustes modificados para tareas de mantenimiento y soporte.

## Por qué usar Plaspy con esta configuración

Usar el TopFly TLP2-SFB con Plaspy ofrece una manera práctica de centralizar la ubicación, los eventos y la telemetría de sensores de activos exteriores en una sola plataforma. Las capacidades de almacenamiento en buffer del dispositivo y el reporte de alta frecuencia lo hacen adecuado para escenarios donde la visibilidad continua y la reconstrucción histórica son importantes, y Plaspy procesa esas actualizaciones para mapas, alertas e informes.

Para saber más sobre cómo funciona Plaspy con rastreadores compatibles visite https://www.plaspy.com. Para obtener instrucciones específicas del dispositivo, notas de firmware y documentación oficial consulte el sitio del fabricante https://www.topflytech.com/
