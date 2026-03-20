---
slug: /goome/gmobd/configuration
id: gmobd-configuration
sidebar_label: Configuration
title: Goome - GMOBD Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Goome GMOBD y reportarlo a Plaspy con comandos SMS y parámetros de servidor
keywords:
  - Configuración Goome GMOBD
  - Configuración GMOBD
  - Configuración servidor GMOBD
  - Configuración GMOBD Plaspy
  - Configuración rastreador OBD2 Goome
  - Ajustes servidor rastreador GPS
  - Seguimiento de flotas GMOBD
  - Configuración SMS GMOBD
  - Configuración plataforma seguimiento vehicular
  - Configuración rastreador Plaspy
---

# Goome - Configuración GMOBD

Esta página documenta el contexto público de configuración para usar el rastreador OBD2 Goome GMOBD con Plaspy. Resume los pasos prácticos y los comandos SMS públicos empleados para apuntar el equipo a Plaspy, explica los requisitos previos necesarios y muestra cómo el dispositivo reporta a la plataforma. La información aquí se basa en la descripción del dispositivo y en los comandos públicos disponibles para los flujos de configuración más comunes.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El GMOBD soporta configuración por SMS y reporte por GPRS mediante su módulo GSM integrado, por lo que esta guía se centra en los comandos SMS públicos y los parámetros de servidor que puede usar para conectar el rastreador a Plaspy.

## Resumen de la configuración

El objetivo del proceso es preparar el GMOBD para comunicarse de forma fiable con Plaspy, de modo que la ubicación del vehículo, las alertas y los eventos derivados del OBD sean visibles en la plataforma. Para dispositivos GMOBD que admiten configuración por SMS y GPRS, enviar la secuencia correcta de comandos SMS configura el APN y el servidor GPRS y valida la conectividad.

- Apuntar el rastreador a Plaspy usando el endpoint de servidor compartido o la IP y el puerto común que utiliza la plataforma.
- Configurar el APN del equipo para que el módulo GSM integrado pueda establecer datos GPRS.
- Definir los parámetros del servidor GPRS para que el rastreador informe posición y eventos a Plaspy.
- Ajustar el intervalo de reporte (por ejemplo un temporizador de 60 segundos) para controlar la frecuencia de actualización en monitoreo en tiempo real.
- Verificar los ajustes y el estado del dispositivo usando los comandos SMS de verificación disponibles.

## Ajustes de servidor de Plaspy

- Dominio de servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al servidor

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional instalada en el GMOBD con un plan de datos activo y el APN correcto del operador móvil.
- Acceso al dispositivo para configuración por SMS o a la herramienta de configuración oficial del fabricante cuando aplique.
- El equipo con alimentación y correctamente conectado al puerto OBD2 del vehículo para que tenga energía estable durante la configuración.
- Conocimiento de las credenciales APN requeridas por el operador de la SIM; puede usar marcadores de posición en los comandos para usuario y contraseña.
- Capacidad para recibir y verificar respuestas SMS del rastreador para confirmar que los comandos se aplicaron.
- Acceso administrativo a Plaspy para confirmar que el dispositivo aparece y envía telemetría tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El GMOBD usa su capacidad GSM/GPRS para enviar datos de ubicación y eventos al endpoint y puerto del servidor Plaspy indicados más arriba. Una vez configurado, el rastreador reporta posición, alarmas y actualizaciones de estado para que el dispositivo sea visible y gestionable en Plaspy.

- El dispositivo se configura para usar el endpoint del servidor Plaspy (dominio o IP) y el puerto 8888 para reporte por GPRS.
- El transporte puede configurarse en UDP o TCP según las opciones del firmware del dispositivo.
- Plaspy recibe el protocolo entrante y detecta automáticamente el protocolo del rastreador para su análisis.
- Los reportes regulares de posición y eventos permiten a Plaspy presentar seguimiento en tiempo real y reproducción de trayectos.
- Existen comandos de verificación para solicitar por SMS el estado actual del servidor y del dispositivo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el GMOBD (comandos SMS o herramienta del proveedor) tal como se describe en la documentación del dispositivo.
2. Configure el APN del equipo usando el comando APN e incluya usuario y contraseña si su operador los requiere.
3. Ingrese la información del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 como servidor GPRS.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el equipo; en configuraciones por SMS esto suele implicar enviar el comando SMS y esperar una respuesta de éxito.
6. Reinicie o desconecte y vuelva a conectar la energía del dispositivo si el firmware lo requiere para aplicar los cambios de red.
7. Valide que el dispositivo esté reportando a Plaspy revisando las respuestas de estado del equipo y confirmando su visibilidad en Plaspy.

## Ejemplos de comandos de configuración

El GMOBD puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos se encuentran en la documentación del equipo. Conserve los marcadores de posición y envíe los comandos en el orden sugerido para la configuración inicial.

1. Restauración de fábrica opcional (solo si necesita reiniciar la configuración del dispositivo)
```
FACTORY#
```
2. Establecer el APN del operador. Reemplace {{apn}} por el APN de su operador. Si es necesario, incluya {{apnu}} y {{apnp}} para usuario y contraseña del APN.
```
APN,{{apn}}
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Use la segunda forma si su APN requiere usuario y contraseña. Mantenga los marcadores de posición tal como aparecen y sustituya por las credenciales del operador.)

3. Configurar el servidor GPRS a Plaspy usando la IP y el puerto proporcionados (esto apunta el dispositivo a Plaspy).
```
GPRSSET,54.85.159.138,8888#
```
4. Establecer el intervalo de actualización de posición (ejemplo: cada 60 segundos)
```
TIMER,60#
```
5. Para consultar los ajustes actuales del servidor GPRS en el dispositivo
```
GPRSSET#
```
6. Para consultar el estado general del dispositivo
```
STATUS#
```

Nota: Estos comandos son las opciones públicas de configuración por SMS suministradas en la documentación del dispositivo. Use las respuestas del equipo para confirmar que cada paso fue aceptado.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando o las funciones disponibles; siempre confirme que su dispositivo acepta los comandos mostrados aquí.
- El GMOBD soporta configuración por SMS según los comandos públicos anteriores; algunas implementaciones pueden preferir las herramientas del proveedor o actualizaciones por aire.
- Elija UDP o TCP según las opciones del firmware y la confiabilidad de la red; Plaspy soporta ambos transportes en el puerto 8888.
- Asegúrese de reemplazar los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} con las credenciales del operador, o use la forma corta de APN si no se requiere usuario ni contraseña.
- Si los comandos fallan, verifique la conectividad de la SIM, la intensidad de la señal y que el rastreador tenga energía estable antes de reintentar.

## Por qué usar Plaspy con esta configuración

Configurar el Goome GMOBD para reportar a Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real del vehículo, monitoreo de eventos y reproducción de ubicaciones para casos de uso en flotas o alquileres. El endpoint compartido de servidor de Plaspy y la detección automática de protocolo simplifican la integración porque la plataforma acepta reportes de rastreadores compatibles sin necesidad de asignaciones de servidor específicas por dispositivo.

Para conocer más sobre Plaspy y cómo comenzar con el seguimiento de flotas, visite https://www.plaspy.com. Para obtener las instrucciones específicas más recientes del fabricante, notas de firmware y detalles del equipo, verifique la documentación actual en http://www.goomegpstracker.com. Los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo, así que siempre contraste los comandos y procedimientos con la documentación oficial de Goome.
