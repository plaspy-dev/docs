---
slug: /xexun/x06/configuration
id: x06-configuration
sidebar_label: Configuration
title: Xexun - X06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Xexun X06 con Plaspy, incluye ajustes de servidor y comandos SMS para integración
keywords:
  - Configuración Xexun X06
  - Configuración X06 Plaspy
  - Configuración rastreador Xexun wearable
  - Configuración servidor X06
  - Configuración GPS X06
  - Configuración dispositivo Plaspy
  - Ajustes APN Xexun X06
  - Configuración SMS X06
  - Rastreo personal X06
  - Geovallas X06
---

# Xexun - Configuración X06

Esta página documenta el contexto de configuración público para usar el Xexun X06 con Plaspy. Se centra en los pasos prácticos y los ajustes de servidor compartido necesarios para apuntar un dispositivo X06 a Plaspy, de modo que las actualizaciones de posición, las alarmas y los mensajes de estado lleguen a la plataforma. Use esta guía junto con el manual del dispositivo y las herramientas del proveedor para completar el aprovisionamiento.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto en los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El X06 puede configurarse mediante comandos SMS como se muestra en los ejemplos a continuación, o mediante el software del fabricante cuando esté disponible.

## Resumen de la configuración

Preparar el X06 para Plaspy significa configurar el dispositivo para que use el endpoint de servidor compartido de la plataforma y confirmar una conectividad celular fiable. El objetivo es garantizar que el identificador wearable informe posición, alarmas y estado a Plaspy en el intervalo deseado y que el dispositivo pueda almacenar en búfer y retransmitir registros si la cobertura se interrumpe.

- Configure el APN y las credenciales para que el rastreador establezca conectividad de datos GPRS.
- Indique al dispositivo que envíe reportes GPRS a Plaspy usando el endpoint de servidor y el puerto compartidos.
- Elija UDP o TCP como transporte en el dispositivo si es necesario y guarde la selección.
- Valide el reporte del dispositivo verificando que el rastreador aparezca en Plaspy y envíe actualizaciones en el intervalo configurado.
- Conserve la información de la contraseña por defecto del dispositivo y utilice los procedimientos del fabricante para cambiarla si así lo desea.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Estos valores son los parámetros públicos de Plaspy que debe usar al configurar el X06 para que el dispositivo reenvíe mensajes de posición y alarma a la plataforma.

## Requisitos habituales antes de la configuración

- Un dispositivo X06 cargado con acceso a su interfaz SMS o al software de configuración del fabricante.
- Una tarjeta SIM activa provisionada para datos celulares domésticos y capaz de recibir comandos SMS si va a usar la configuración por SMS.
- Información del APN, nombre de usuario APN y contraseña APN del operador móvil que vaya a utilizar.
- Conocimiento de la contraseña del dispositivo; los comandos de ejemplo usan la contraseña de fábrica 123456.
- Acceso al manual del proveedor o al software de configuración para confirmar la sintaxis de comandos específica del firmware.

## Cómo se conecta este rastreador a Plaspy

El X06 transmite posición y estado a través de redes celulares al endpoint y puerto del servidor configurados para que Plaspy pueda ingerir y mostrar telemetría, alertas y trayectos históricos. El servidor y la plataforma de Plaspy proporcionan monitoreo en vivo, alertas por geocercas y reproducción histórica para los administradores.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte puede configurarse en UDP o TCP según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos al servidor.
- Las actualizaciones de posición, alarmas SOS y mensajes de estado se reenvían a Plaspy para su visualización y procesamiento por reglas.
- Si la conectividad se pierde temporalmente, el almacenamiento local en el dispositivo permite la retransmisión cuando el servicio vuelve.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS según las instrucciones del proveedor.
2. Ingrese el endpoint del servidor de Plaspy, ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto en 8888 en la configuración de red o del servidor del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere la selección de transporte para reportes GPRS.
5. Configure el APN y, si aplica, el nombre de usuario y contraseña del APN para que el dispositivo pueda abrir la conexión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy observando las actualizaciones entrantes o comprobando la presencia del equipo en la plataforma Plaspy.

Si utiliza comandos SMS para el aprovisionamiento inicial, siga la secuencia de comandos ordenada que proporciona el fabricante y confirme cada paso antes de continuar.

## Comandos de configuración de ejemplo

El fabricante facilita comandos de configuración por SMS para el X06. La secuencia de ejemplo a continuación usa la contraseña de fábrica 123456. Mantenga el orden cuando realice el aprovisionamiento inicial en los pasos indicados. Los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} indican valores específicos del operador que deben reemplazarse.

- Restaurar configuración de fábrica (reinicio inicial opcional)
```text
begin123456
```
- Configurar el APN del operador
```text
apn123456 {{apn}}
```
- Configurar el nombre de usuario del APN (si es necesario)
```text
apnuser123456 {{apnu}}
```
- Configurar la contraseña del APN (si es necesario)
```text
apnpasswd123456 {{apnp}}
```
- Apuntar el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
- Configurar el modo GPRS (use el valor por defecto del dispositivo o el que exija el firmware)
```text
gprsmode123456
```
- Establecer el intervalo de actualización a 60 segundos
```text
t060s***n123456
```

Notas sobre los comandos anteriores:
- El comando begin123456 se usa normalmente para restaurar la configuración de fábrica y es opcional o se emplea solo cuando se parte de un estado de fábrica.
- Reemplace {{apn}} por el valor del APN de su operador móvil. Reemplace {{apnu}} y {{apnp}} por el nombre de usuario y la contraseña del APN si su operador los requiere.
- El comando adminip apunta el dispositivo a Plaspy usando la IP pública 54.85.159.138 y el puerto 8888. Alternativamente, puede introducir el dominio d.plaspy.com si el dispositivo acepta nombres de dominio.
- Mantenga el orden de comandos durante el aprovisionamiento inicial para asegurar que se establezca la conectividad antes de fijar los parámetros de reporte.

## Notas de configuración

- Las versiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre verifique los comandos exactos para la versión de firmware de su dispositivo.
- El X06 admite la configuración por SMS como en los comandos de ejemplo, pero también puede configurarse mediante el software de PC del proveedor o una aplicación según el paquete y el firmware.
- Elija UDP o TCP según las necesidades de la instalación y confirme con soporte de Plaspy o pruebe que las actualizaciones llegan correctamente. Plaspy detectará automáticamente el protocolo del rastreador una vez que los datos alcancen el servidor.
- Confirme las credenciales del APN con el operador móvil antes del aprovisionamiento; una configuración incorrecta del APN es una causa común de fallas de conexión.
- Mantenga control de las contraseñas de dispositivo y cambie las contraseñas de fábrica si su política de seguridad lo requiere.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun X06 para reportar a Plaspy ofrece visibilidad centralizada para casos de uso de localización de personas, como seguridad estudiantil, monitoreo de personas mayores y control de asistencia laboral. Al apuntar el dispositivo al endpoint compartido de Plaspy y usar el puerto requerido por la plataforma, las organizaciones obtienen acceso a ubicación en vivo, reproducción histórica, alertas por geocercas y manejo de eventos SOS dentro de una sola solución.

Para saber más sobre Plaspy y cómo se integra con rastreadores compatibles como el X06, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento del firmware y documentación del fabricante, verifique los detalles con Xexun en https://www.xexun.com/ ya que los procedimientos del proveedor y el firmware pueden cambiar con el tiempo.
