---
slug: /meitrack/gt_30/configuration
id: gt_30-configuration
sidebar_label: Configuration
title: Meitrack - GT-30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Meitrack GT-30, incluye ajustes de servidor y comandos SMS necesarios para usar con Plaspy
keywords:
  - Meitrack GT-30 configuración
  - Meitrack GT-30 instalación
  - Meitrack GT-30 Plaspy
  - GT-30 configuración servidor
  - GT-30 comandos SMS
  - GT-30 configuración GPRS
  - Meitrack rastreador GPS
  - GT-30 software de rastreo
  - GT-30 configuración plataforma
  - configuración rastreador personal
---

# Meitrack - Configuración del GT-30

Esta página aborda el contexto de configuración pública para usar el Meitrack GT-30 con la plataforma Plaspy. Reúne los ajustes de servidor de Plaspy que debe aplicar y los pasos prácticos de instalación que suelen emplearse con el GT-30, incluyendo los comandos SMS que muchos instaladores utilizan para apuntar el dispositivo a un servidor backend.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GT-30 soporta comunicación vía SMS y GPRS por TCP o UDP y puede configurarse para reportar a un servidor o a un número móvil, por lo que esta guía se centra en los pasos públicos y prácticos para registrar el dispositivo en Plaspy, a la vez que le recomendamos verificar la documentación del fabricante para comportamientos específicos del firmware.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el GT-30 para que se comunique de forma fiable con Plaspy y aparezca en la plataforma para seguimiento y monitoreo de eventos. Normalmente esto implica establecer el servidor de comunicación del dispositivo, el transporte, los intervalos de reporte y cualquier ajuste de eventos necesario para sus necesidades operativas.

- Configure el GT-30 para usar el endpoint y puerto del servidor de Plaspy para que los datos de ubicación y eventos lleguen a la plataforma.
- Defina los intervalos de reporte y la configuración de eventos para que el dispositivo envíe actualizaciones con la cadencia requerida.
- Use SMS o la herramienta del fabricante para aplicar y verificar los ajustes, incluyendo los placeholders de APN cuando sean necesarios.
- Valide que el dispositivo alcance Plaspy y que la plataforma reciba reportes de posición y eventos.
- Opcionalmente aplique un reinicio de fábrica o un comando de configuración inicial al instalar un dispositivo por primera vez.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos del servidor que debe usar al apuntar un GT-30 a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la plataforma detectará automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Un GT-30 con batería cargada y encendido, con una SIM funcional y capacidad de datos para GPRS y funciones SMS.
- Conocimiento de la contraseña por defecto del dispositivo (la contraseña por defecto usada en estos comandos es 0000).
- Acceso al método oficial de configuración de Meitrack que prefiera (comandos SMS, software del proveedor o una herramienta de configuración).
- Ajustes de APN válidos para el operador de la SIM; se usarán placeholders como {{apn}}, {{apnu}} y {{apnp}} cuando sea necesario.
- Un flujo de prueba para confirmar que el dispositivo alcanza el servidor de Plaspy y reporta ubicación o eventos a la plataforma.

## Cómo se conecta este rastreador a Plaspy

El GT-30 envía datos de ubicación y eventos al endpoint del servidor de Plaspy configurado en el dispositivo. Cuando se configura para usar GPRS, el rastreador establece una sesión TCP o UDP con el servidor de Plaspy y luego transmite reportes periódicos y mensajes de eventos. Si no hay conexión activa, el dispositivo almacena las coordenadas en memoria interna para su posterior envío cuando se restaure la conectividad.

- El GT-30 se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Los reportes se envían por GPRS utilizando UDP o TCP según la configuración.
- El rastreador puede enviar actualizaciones periódicas de posición y mensajes activados por eventos a Plaspy.
- Plaspy recibe esos mensajes y detecta automáticamente el protocolo para parsear los datos del rastreador.
- Si GPRS no está disponible, las ubicaciones almacenadas pueden subirse cuando el dispositivo recupere conectividad.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Meitrack o al software que utilizará para la instalación, como comandos SMS o la herramienta del proveedor.
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 que es el puerto que utiliza Plaspy para todos los dispositivos soportados.
4. Si el dispositivo requiere selección explícita de transporte, elija UDP o TCP según su preferencia o la fiabilidad de la red.
5. Provea los detalles del APN si es necesario usando placeholders como {{apn}} y opcionalmente {{apnu}} y {{apnp}} para las credenciales del APN.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el dispositivo o las instrucciones lo requieren.
7. Valide que el dispositivo reporte a Plaspy verificando que el rastreador aparezca en la plataforma y que se reciban actualizaciones de ubicación o eventos.

## Ejemplos de comandos de configuración

El GT-30 puede configurarse usando comandos SMS. Los siguientes comandos SMS públicos son los más utilizados para la configuración inicial. La contraseña por defecto del dispositivo usada en estos ejemplos es 0000. Si cambia la contraseña, sustituya la nueva contraseña en el mismo lugar.

- Reinicio inicial u opcional a valores de fábrica (usar al preparar un dispositivo para instalación):
```text
0000,F11
```
- Establecer el servidor GPRS para apuntar a Plaspy usando la IP del servidor, puerto y placeholder de APN. Reemplace {{apn}} con el APN de su operador y agregue {{apnu}} y {{apnp}} si el APN requiere usuario o contraseña.
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Nota: Puede usar d.plaspy.com en lugar de la dirección IP cuando el dispositivo acepte un nombre de dominio en el campo de servidor.

- Ajustar la zona horaria a UTC 0 (modifique según su ubicación):
```text
0000,B36,0
```
- Fijar el intervalo de actualización a 1 minuto (comando ejemplo para reportes periódicos):
```text
0000,A12,6,0
```
- Configurar el reporte de eventos (ejemplo para establecer eventos básicos):
```text
0000,C03,0
```

Explicación de los placeholders:
- {{apn}} — APN proporcionado por el operador de la SIM
- {{apnu}} — Nombre de usuario del APN si es requerido
- {{apnp}} — Contraseña del APN si es requerida

Envíe cada comando como SMS al GT-30 desde un número autorizado. Después de aplicar los ajustes de servidor y APN, confirme que el dispositivo establece una sesión GPRS y envía datos a Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos; siempre confirme los comandos con el manual del GT-30 para su versión de firmware.
- El GT-30 admite configuración por SMS así como GPRS por TCP o UDP; elija el transporte que mejor se adapte a su red y necesidades de fiabilidad.
- Plaspy utiliza un único puerto (8888) para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que no necesita asignar un puerto específico por dispositivo.
- Si utiliza el comando de reinicio de fábrica, trátelo como un paso inicial opcional; puede borrar ajustes personalizados incluyendo contraseñas e intervalos de reporte.
- Mantenga los placeholders de APN visibles en los comandos y reemplácelos por los valores de su operador cuando envíe los SMS de configuración.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack GT-30 con Plaspy ofrece una forma sencilla de centralizar los reportes de posición y los mensajes de eventos en una plataforma. El soporte del GT-30 para GPRS TCP/UDP y la configuración por SMS lo hace flexible para desplegar, mientras que la detección automática de protocolo de Plaspy y los ajustes de servidor compartidos simplifican la configuración backend para que dispositivos de distintos modelos se gestionen de manera consistente.

Para saber más sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para obtener los comandos de dispositivo más actuales, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de Meitrack https://www.meitrack.com/ ya que el comportamiento del hardware y del firmware puede cambiar con el tiempo.
