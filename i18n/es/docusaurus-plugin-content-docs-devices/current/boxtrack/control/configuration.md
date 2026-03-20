---
slug: /boxtrack/control/configuration
id: control-configuration
sidebar_label: Configuration
title: BoxTrack - Control Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador BoxTrack Control y reportar datos en tiempo real a Plaspy
keywords:
  - Configuración BoxTrack Control
  - Configuración inicial BoxTrack Control
  - Configuración servidor BoxTrack
  - Integración BoxTrack Plaspy
  - Configuración rastreador GPS BoxTrack
  - rastreo de vehículos BoxTrack
  - Configuración SMS tracker Control
  - Parámetros servidor rastreador GPS
  - Configuración plataforma de rastreo
  - Guía configuración rastreador
---

# BoxTrack - Configuración del Control

Esta página describe el contexto de configuración pública para usar el rastreador BoxTrack Anti-Theft Control con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera y muestra los comandos SMS prácticos proporcionados por el fabricante que se usan habitualmente para apuntar el dispositivo al servidor de Plaspy y habilitar el reporte y monitoreo en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use los comandos aquí mostrados como referencia práctica y consulte el manual del equipo para detalles específicos del dispositivo.

## Visión general de la configuración

Este proceso prepara el BoxTrack Control para comunicarse con la plataforma Plaspy y reportar datos de ubicación y eventos de forma confiable. El fabricante facilita comandos SMS de configuración que permiten establecer el APN, el endpoint del servidor, el modo de transporte y los intervalos de reporte.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que los datos se entreguen a la plataforma.
- Configurar el APN y los ajustes GPRS del dispositivo para que el rastreador pueda enviar datos por GPRS.
- Seleccionar UDP o TCP como transporte si el firmware del equipo lo requiere.
- Establecer un intervalo de actualización de posición adecuado según sus necesidades de monitoreo.
- Verificar la configuración con comandos de estado del dispositivo y comprobación de APN/IP.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que la plataforma acepta protocolos compatibles sin registro de protocolo por dispositivo

## Requisitos típicos antes de la configuración

- Acceso al método de configuración SMS del dispositivo o a la herramienta oficial del fabricante
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil
- Energía en el rastreador y disponibilidad para una sesión de configuración
- Conocimiento de la contraseña del equipo si el dispositivo requiere autenticación para comandos SMS
- Herramientas básicas para verificar conectividad, como un segundo teléfono para enviar y recibir SMS durante la verificación
- Consulta del manual del dispositivo o notas del proveedor para comportamientos específicos del firmware

## Cómo se conecta este rastreador a Plaspy

BoxTrack Control se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que la información esté disponible en Plaspy para rastreo, alertas y monitoreo operativo.

- El rastreador usa su conexión GPRS para abrir una sesión TCP o UDP con el servidor de Plaspy
- Los datos del dispositivo se envían a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Plaspy recibe las conexiones entrantes de los rastreadores y detecta automáticamente el protocolo del dispositivo
- Actualizaciones regulares de posición y mensajes de eventos se entregan a Plaspy para visibilidad y registros históricos
- Se pueden usar comandos de verificación vía SMS para comprobar el APN y la configuración del servidor en el dispositivo

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o la herramienta del proveedor descrita por BoxTrack.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 según su preferencia.
3. Establezca el puerto del servidor a 8888 como puerto GPRS del dispositivo.
4. Seleccione UDP o TCP si el firmware del equipo exige elegir el transporte.
5. Configure el APN y cualquier usuario o contraseña de APN requeridos por la SIM.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si lo solicita el fabricante.
7. Valide que el equipo reporte a Plaspy comprobando el estado del dispositivo y confirmando la llegada de datos en la plataforma.

## Comandos de configuración de ejemplo

El BoxTrack Control soporta configuración por SMS. Los siguientes comandos son ejemplos públicos provistos por el fabricante. El ejemplo de dispositivo usa la contraseña por defecto 123456 en estos comandos. Úselos en el orden mostrado para la configuración inicial.

1. Restauración inicial opcional a configuración de fábrica (usar solo cuando sea necesario)
```text
begin123456
```

2. Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

3. Configurar el APN de su operador móvil
```text
apn123456 {{apn}}
```
- {{apn}} es un marcador para la cadena APN de su operador

4. Establecer usuario y contraseña del APN si el operador los requiere
```text
up123456 {{apnu}} {{apnp}}
```
- {{apnu}} es el marcador del usuario APN
- {{apnp}} es el marcador de la contraseña APN

5. Configurar el servidor GPRS a Plaspy usando la IP y el puerto del servidor
```text
adminip123456 54.85.159.138 8888
```
- Esto configura el rastreador para enviar datos GPRS a Plaspy en la IP y el puerto proporcionados

6. Ejemplo de intervalo de GPS arreglo/reporte
```text
fix060s060s***n123456
```
- Esta cadena de ejemplo configura los intervalos de reporte; conserve la cadena exacta tal como la provee el fabricante

7. Cambiar el rastreador a modo GPRS y seleccionar UDP o TCP según lo soporte
```text
gprs123456,1,1
```
o, en algunas variantes de firmware:
```text
gprs123456
```

8. Comandos de verificación para chequear la configuración actual y el estado del dispositivo
```text
APNIP123456
```
```text
check123456
```

Notas sobre los comandos
- La secuencia es importante para la configuración inicial: primero APN, luego ajustes del servidor y finalmente el modo GPRS.
- La contraseña por defecto empleada en los ejemplos es 123456. Cambie la contraseña del equipo siguiendo los procedimientos del fabricante cuando sea posible.
- Mantenga los marcadores como {{apn}}, {{apnu}} y {{apnp}} al sustituirlos por los valores de su operador.

## Notas de configuración

- La configuración por SMS es compatible y se usa con frecuencia para instalaciones remotas o en campo del BoxTrack Control.
- Las versiones de firmware y variantes de herramientas pueden aceptar formatos de comando ligeramente diferentes; consulte el manual del dispositivo si tiene dudas.
- Elija UDP o TCP en función del comportamiento de la red y del firmware; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Confirme las credenciales del APN con su operador móvil antes de aplicarlas al dispositivo.
- Si el equipo incluye un comando de restablecimiento de fábrica, úselo solo cuando sea necesario y después de respaldar la configuración requerida.

## Por qué usar Plaspy con esta configuración

Configurar el BoxTrack Control para que reporte a Plaspy proporciona un endpoint y puerto consistente para todos los dispositivos, lo que simplifica el despliegue y centraliza la visibilidad de los equipos. Usar los ajustes compartidos de Plaspy garantiza que los datos del rastreador lleguen a la plataforma, donde los administradores de flota pueden monitorear ubicaciones, recibir alertas y revisar reportes históricos.

Para más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Los pasos de configuración específicos por equipo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones más recientes en el sitio del fabricante.
