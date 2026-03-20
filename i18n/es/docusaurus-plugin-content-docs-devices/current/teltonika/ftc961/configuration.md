---
slug: /teltonika/ftc961/configuration
id: ftc961-configuration
sidebar_label: Configuration
title: Teltonika - FTC961 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para conectar el Teltonika FTC961 a Plaspy con ajustes de servidor y ejemplo de comando SMS
keywords:
  - Configuración Teltonika FTC961
  - Instalación Teltonika FTC961
  - Configuración de servidor Teltonika FTC961
  - Configuración FTC961 en Plaspy
  - Configuración del rastreador GPS FTC961
  - Configuración de software de rastreo FTC961
  - Rastreador GPS Teltonika Plaspy
  - Configuración de gestión de flotas FTC961
  - Configuración de telemetría FTC961
  - Configuración de rastreadores Plaspy
---

# Teltonika - Configuración del FTC961

Esta página documenta el contexto de configuración pública para usar el Teltonika FTC961 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, muestra un ejemplo de comando de configuración (SMS o lote) para apuntar un FTC961 a Plaspy y proporciona un flujo de trabajo práctico para validar la conectividad y garantizar que los dispositivos aparezcan en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de Teltonika que utilice. El ejemplo de comando que se muestra abajo ilustra un lote de parámetros común para establecer APN y valores del servidor; aplíquelo según el método de configuración Teltonika que prefiera.

## Resumen de configuración

Esta configuración prepara el FTC961 para reportar ubicación y telemetría a Plaspy usando el endpoint y puerto compartido de la plataforma. El objetivo es asegurar que el rastreador pueda establecer una conexión estable con Plaspy y que el dispositivo aparezca correctamente en la interfaz.

- Apunte el dispositivo al servidor de Plaspy (dominio o IP) y use el puerto compartido que Plaspy espera.
- Configure las credenciales APN de datos móviles para que el FTC961 tenga conectividad celular.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo requiere elección.
- Guarde y aplique la configuración; reinicie el dispositivo si el firmware lo solicita.
- Valide que el rastreador informe a Plaspy y que posiciones y eventos aparezcan en la plataforma.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Dispositivo encendido y accesible en el vehículo o activo con el cableado necesario completado.
- Tarjeta SIM activa con plan de datos y credenciales APN correctas para la red celular.
- Acceso a los métodos de configuración Teltonika que vaya a usar, como comandos SMS, software de configuración de Teltonika o herramientas de la plataforma FT/FOTA.
- Un medio para recibir retroalimentación del dispositivo tras la configuración (registros del dispositivo, respuestas SMS o reportes en la plataforma).
- Conocimiento de la versión de firmware del dispositivo y de los índices de parámetros específicos del proveedor usados para servidor y APN.
- Cobertura de red en la ubicación de instalación para que el rastreador pueda conectarse a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El FTC961 se configura para enviar posición y telemetría al endpoint y puerto compartido de Plaspy para que la plataforma ingiera la telemetría y ofrezca monitoreo en tiempo real y reproducción histórica.

- El rastreador envía datos GNSS y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Use UDP o TCP según el firmware del dispositivo y las necesidades de red; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo y procesa los mensajes entrantes del dispositivo.
- Una vez activo el reporte, Plaspy mostrará actualizaciones de ubicación en vivo, notificaciones de eventos y el estado del dispositivo en la plataforma.
- Validar la conectividad confirma que el dispositivo es visible y que la telemetría es aceptada por Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración Teltonika que prefiera (configuración por SMS, software de Teltonika o la plataforma FT).
2. Ingrese el servidor como d.plaspy.com o, si requiere IP, use 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto de destino en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el dispositivo solicita elegir un protocolo de transporte.
5. Configure los parámetros APN de la SIM del dispositivo proporcionando APN, nombre de usuario y contraseña según sea necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o la herramienta lo recomiendan.
7. Valide que el dispositivo reporte a Plaspy revisando los datos entrantes en la plataforma y confirmando las actualizaciones de posición.

## Ejemplo de comandos de configuración

A continuación se muestra el comando de lote público común en dispositivos Teltonika para establecer APN y parámetros de servidor. Este ejemplo conserva marcadores para sus valores de APN y apunta el dispositivo a Plaspy.

- SMS o ejemplo de comando por lote

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre marcadores y campos
- [apn] — cadena APN de su operador (requerida para datos móviles).
- [apnu] — nombre de usuario APN si su operador requiere autenticación (deje vacío si no aplica).
- [apnp] — contraseña APN si su operador la requiere.
- 2004 configura la dirección del servidor a d.plaspy.com para Plaspy.
- 2005 establece el puerto en 8888 usado por Plaspy para todos los dispositivos.
- 2006 es un parámetro de control de transporte en este ejemplo; consulte la documentación de Teltonika para los mapeos exactos de valores para TCP frente a UDP según su firmware.

Envíe este comando usando el método de configuración SMS de Teltonika al número del dispositivo o aplique los ajustes equivalentes mediante las herramientas de configuración de Teltonika o la plataforma FT. Confirme siempre la sintaxis del comando y los índices de parámetros para su versión de firmware.

## Notas de configuración

- Las versiones de firmware de Teltonika y los índices de parámetros pueden cambiar; confirme los números de parámetro y los valores aceptables para su firmware exacto antes de aplicar comandos.
- Elija UDP o TCP de acuerdo con la confiabilidad de la red y sus necesidades de infraestructura; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- La configuración por SMS es una opción habitual y se muestra arriba, pero también puede usar el software de configuración de Teltonika o FOTA WEB cuando estén disponibles.
- Si usa la IP del servidor en lugar del dominio, emplee 54.85.159.138 como dirección de destino para Plaspy.
- Mantenga un registro de la configuración aplicada y verifique la conectividad en Plaspy para asegurar la visibilidad del dispositivo y el flujo correcto de telemetría.

## Por qué usar Plaspy con esta configuración

Usar el FTC961 con Plaspy permite a administradores de flotas y activos centralizar ubicación en tiempo real, notificaciones de eventos y estado de dispositivos en una única plataforma. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la incorporación de dispositivos, ya que la plataforma utiliza el mismo puerto y enfoque de enrutamiento para todos los rastreadores compatibles.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de rastreadores visite https://www.plaspy.com. Para las referencias más recientes de parámetros de dispositivos Teltonika, notas de firmware y herramientas de configuración, confirme los detalles en el sitio oficial de Teltonika https://www.teltonika-gps.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
