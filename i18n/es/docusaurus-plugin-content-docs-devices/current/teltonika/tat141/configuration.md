---
slug: /teltonika/tat141/configuration
id: tat141-configuration
sidebar_label: Configuration
title: Teltonika - TAT141 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika TAT141 con Plaspy usando servidor compartido y comandos prácticos
keywords:
  - configuración Teltonika TAT141
  - configuración TAT141 Plaspy
  - configuración servidor Teltonika TAT141
  - configuración rastreador GPS TAT141
  - configuración rastreador de activos Teltonika
  - integración TAT141 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración seguimiento TAT141
  - guía Teltonika TAT141
  - configuración dispositivo TAT141
---

# Teltonika - Configuración del TAT141

En esta página se describe el contexto público de configuración para usar el rastreador de activos con batería Teltonika TAT141 con Plaspy. Se explican los ajustes de servidor compartido que exige Plaspy, los pasos prácticos habituales para apuntar un TAT141 al endpoint de Plaspy y el patrón de comandos públicos disponible para una configuración básica de parámetros.

Plaspy utiliza ajustes de servidor compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar la incorporación. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de Teltonika que utilice. Use la información aquí como punto de partida práctico y confirme siempre el comportamiento específico del dispositivo con la documentación oficial de Teltonika.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TAT141 para que se comunique de forma fiable con Plaspy y así los reportes de ubicación y la telemetría lleguen a la plataforma. Los pasos se centran en configurar el APN del dispositivo y el endpoint del servidor, seleccionar el transporte cuando aplique, y validar que los reportes lleguen al servidor de Plaspy.

- Configure el APN del dispositivo y los valores de autenticación necesarios para que el rastreador acceda a la red celular.
- Apunte el rastreador al servidor de Plaspy d.plaspy.com (o use la IP de Plaspy) y establezca el puerto compartido 8888.
- Seleccione UDP o TCP como transporte si el dispositivo necesita una selección explícita.
- Aplique la configuración y reinicie el rastreador según lo requiera el equipo.
- Valide que el dispositivo sea visible y esté reportando en Plaspy; Plaspy detectará automáticamente el protocolo del dispositivo una vez que lleguen los datos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores exactos son los que usa Plaspy para todos los dispositivos compatibles y son los detalles públicos del endpoint que debe configurar en el TAT141.

## Requisitos típicos antes de la configuración

- Un equipo TAT141 con batería cargada y accesible para su configuración.
- Una suscripción celular activa compatible con LTE Cat M1 o NB IoT y los datos de APN proporcionados por su operador.
- Acceso al método de configuración de Teltonika que prefiera, como comandos SMS o las herramientas de software oficiales del fabricante.
- Los valores de APN, nombre de usuario APN y contraseña APN para completar los campos en los comandos de configuración.
- Cobertura de red en la ubicación de instalación para LTE Cat M1 o NB IoT según aplique.
- Acceso a una cuenta de Plaspy o a una instancia de la plataforma para verificar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TAT141 envía reportes periódicos de ubicación y telemetría al endpoint del servidor Plaspy usando el servidor y puerto compartidos. Plaspy ingiere esos reportes, determina automáticamente el protocolo del rastreador y muestra la ubicación y la telemetría del dispositivo en los paneles y flujos de trabajo de Plaspy.

- El dispositivo se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según el firmware del dispositivo o la preferencia.
- Plaspy detecta automáticamente el protocolo entrante una vez que los datos llegan al servidor.
- Los reportes se muestran en Plaspy para monitoreo, alertas y reproducción histórica.
- Reportes periódicos y mensajes de eventos permiten un monitoreo centralizado del estado y la operación del dispositivo.

## Flujo común de configuración

1. Acceda al método oficial de configuración de Teltonika para el TAT141, ya sea las herramientas del fabricante o los comandos SMS soportados.
2. Ingrese la dirección del servidor d.plaspy.com o use la IP del servidor Plaspy 54.85.159.138 en el campo de configuración del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración.
5. Aplique o guarde la configuración usando la herramienta de Teltonika o enviando el comando soportado al dispositivo.
6. Reinicie o aplique un ciclo de energía al rastreador si el dispositivo lo requiere para que los cambios entren en vigor.
7. Verifique que el dispositivo esté reportando a Plaspy y que la plataforma muestre datos entrantes; Plaspy detectará el protocolo automáticamente.

## Comandos de configuración de ejemplo

Para configurar los parámetros básicos en su dispositivo Teltonika, use el siguiente patrón de comando público. Este comando incluye marcadores de APN que debe reemplazar por los datos de su operador:

- Los marcadores:
  - [apn] es la cadena APN proporcionada por su operador móvil.
  - [apnu] es el nombre de usuario APN si su operador lo requiere.
  - [apnp] es la contraseña APN si su operador la requiere.

Envíe o aplique este comando usando el método soportado por el fabricante (SMS o la herramienta de Teltonika):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando:
- Los campos establecen los parámetros APN del dispositivo y el endpoint y puerto del servidor Plaspy.
- Mantenga los marcadores y sustitúyalos por sus credenciales reales del APN antes de enviar.
- El formato del comando anterior es el ejemplo público para una configuración básica. Consulte la documentación de Teltonika para el mapeo preciso de parámetros y el significado del valor de transporte 2006 si necesita una selección de transporte específica.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los IDs de parámetros y el formato exacto del comando; verifique siempre el mapeo de parámetros con la documentación actual de Teltonika para el TAT141.
- Elija UDP o TCP según la fiabilidad de la red y sus propios requisitos; ambos son soportados por Plaspy en el puerto 8888.
- El comando de ejemplo admite flujos de trabajo de configuración por SMS o por herramienta según lo indique el fabricante; use el método que confíe y que sea compatible en su región.
- Confirme las credenciales APN con su operador móvil antes de aplicar la configuración para evitar problemas de conectividad.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que una vez que el rastreador pueda alcanzar d.plaspy.com en el puerto 8888 la plataforma debería comenzar a procesar los mensajes entrantes.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika TAT141 con Plaspy ofrece un camino sencillo hacia la visibilidad centralizada de activos, telemetría a largo plazo y monitoreo basado en eventos con mínimo mantenimiento. El diseño de bajo consumo del TAT141 y sus intervalos de reporte configurables, combinados con los ajustes de servidor compartido y la detección automática de protocolos de Plaspy, reducen la complejidad de incorporación y ayudan a mantener reportes fiables desde los dispositivos.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores compatibles como el TAT141, visite https://www.plaspy.com. Para los detalles más actuales sobre configuración específica del dispositivo, comportamiento de firmware y métodos de configuración, verifique la documentación oficial de Teltonika en https://www.teltonika-gps.com/ antes de desplegar a gran escala.
