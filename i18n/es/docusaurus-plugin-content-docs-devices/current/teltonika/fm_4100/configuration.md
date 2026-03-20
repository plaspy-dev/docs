---
slug: /teltonika/fm_4100/configuration
id: fm_4100-configuration
sidebar_label: Configuration
title: Teltonika - FM 4100 Configuration
sidebar_class_name: menu_item_tracker
description: Configure un Teltonika FM 4100 para usar con Plaspy, incluyendo ajustes de servidor y ejemplo de comando SMS
keywords:
  - Configuración Teltonika FM 4100
  - Instalación Teltonika FM 4100
  - FM 4100 Plaspy
  - Configuración rastreador FM 4100
  - Configuración GPS Teltonika
  - Configuración rastreo de vehículos
  - Configuración rastreador GPS
  - Configuración servidor Plaspy
  - Configuración rastreo de flotas
  - Ajustes servidor FM 4100
---

# Teltonika - Configuración del FM 4100

Esta página documenta el contexto público de configuración para usar el Teltonika FM 4100 con Plaspy. Reúne los valores prácticos a nivel de plataforma y muestra ejemplos de comandos que se usan comúnmente para apuntar un equipo a Plaspy, de modo que el rastreador pueda enviar ubicación y datos de E/S a través de la red móvil. Las indicaciones aquí se centran en las opciones que Plaspy requiere y en cómo aplicarlas con comandos de estilo fabricante disponibles públicamente.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FM 4100 admite transportes basados en GSM como GPRS y SMS, por lo que la configuración puede realizarse vía SMS o con las herramientas del fabricante según su flujo de trabajo.

## Resumen de configuración

Configurar el FM 4100 para Plaspy prepara el dispositivo para enviar su ubicación y eventos al endpoint y puerto compartidos de Plaspy. El objetivo es establecer el APN y los valores del servidor, seleccionar el transporte si es necesario, guardar los ajustes y verificar que el rastreador aparezca en la plataforma Plaspy.

- Ingresar o confirmar las credenciales APN para que el equipo use el canal de datos móviles
- Apuntar el rastreador a Plaspy usando el endpoint y puerto compartidos
- Seleccionar UDP o TCP en el dispositivo si la herramienta de configuración lo requiere
- Aplicar y guardar los ajustes y reiniciar el equipo según sea necesario para activar la conexión
- Validar que el dispositivo reporte a Plaspy y sea visible en la plataforma

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para la recolección de datos

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible para configuración, ya sea en el vehículo o en banco de pruebas
- SIM operativa con plan de datos y credenciales APN válidas para la red objetivo
- Acceso al método de configuración Teltonika que planea usar, como comandos SMS o la herramienta de configuración del fabricante
- Información básica para la verificación de la cuenta Plaspy para confirmar que el dispositivo aparece en la plataforma tras la configuración
- Medio para reiniciar el equipo después de aplicar los nuevos ajustes
- Si usa configuración por SMS, asegúrese de que el número desde el que envía pueda comunicarse con el dispositivo

## Cómo se conecta este rastreador a Plaspy

Cuando se configura correctamente, el FM 4100 envía su ubicación y datos de eventos al endpoint compartido de Plaspy en d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888. Plaspy recibe las conexiones en el mismo puerto para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador, lo que simplifica la incorporación de dispositivos.

- El dispositivo usa datos GSM (GPRS) para abrir una sesión TCP o UDP hacia Plaspy en d.plaspy.com puerto 8888
- El rastreador transmite reportes de posición y mensajes de eventos configurados al endpoint de Plaspy
- Plaspy detecta el protocolo automáticamente cuando el dispositivo se conecta al puerto 8888
- Una vez conectado, el equipo queda visible y reportable dentro de Plaspy para monitoreo y alertas
- SMS puede utilizarse para enviar comandos de configuración al FM 4100 cuando su flujo de trabajo lo permita

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Teltonika o al software que prefiera, por ejemplo SMS, herramientas de configuración FMB o las aplicaciones configuradoras de Teltonika.
2. Ingrese el servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 — Plaspy usa el mismo puerto para todos los equipos.
4. Seleccione UDP o TCP si su dispositivo requiere elegir un protocolo de transporte.
5. Proporcione las credenciales APN usando el parámetro o campo correspondiente para que el rastreador pueda usar GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante así lo solicita.
7. Verifique que el FM 4100 esté reportando a Plaspy y sea visible en su cuenta o lista de dispositivos Plaspy.

## Ejemplos de comandos de configuración

Para configurar los parámetros básicos de su Teltonika FM 4100 por SMS, utilice el comando setparam de estilo fabricante. Este ejemplo público establece los parámetros APN y apunta el dispositivo a Plaspy.

- Comando SMS de ejemplo para configurar APN y valores del servidor Plaspy

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre los marcadores y valores del ejemplo anterior
  - {{apn}} debe reemplazarse por el nombre APN de su operador móvil
  - {{apnu}} debe reemplazarse por el usuario APN si su operador lo requiere
  - {{apnp}} debe reemplazarse por la clave APN si su operador lo requiere
  - 2004 está establecido en d.plaspy.com para apuntar el dispositivo al servidor Plaspy
  - 2005 está establecido en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos
  - El ejemplo incluye el parámetro 2006; consulte la documentación de Teltonika para la correspondencia exacta de parámetros relacionados con transporte o selección de modo si es necesario

Si utiliza el software de Teltonika en lugar de SMS, ingrese los valores equivalentes para APN, dominio del servidor d.plaspy.com (o la IP 54.85.159.138) y puerto 8888 en los campos correspondientes.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los códigos de parámetros o los flujos de configuración; siempre consulte la documentación de Teltonika para los parámetros aplicables a su unidad.
- El FM 4100 admite configuración vía SMS como se muestra arriba, pero muchos operadores prefieren usar las herramientas oficiales de Teltonika para instalaciones masivas o en campo.
- Elija TCP o UDP según sus necesidades operativas; Plaspy acepta ambos protocolos en el puerto 8888 y detecta el protocolo automáticamente.
- Confirme las credenciales APN con su operador móvil antes de aplicar los ajustes para garantizar que el dispositivo pueda abrir una sesión GPRS.
- Después de aplicar la configuración, espere a que el equipo se registre en la red móvil y establezca la sesión hacia d.plaspy.com o 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FM 4100 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar ubicación y datos de eventos de vehículos y activos remotos utilizando un endpoint y puerto consistentes. El enfoque de servidor compartido de Plaspy simplifica la incorporación a escala porque todos los dispositivos usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando se establece la conexión.

Para obtener más información sobre Plaspy y cómo incorporar dispositivos a gran escala visite https://www.plaspy.com. Para los parámetros específicos más recientes del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información actual en https://www.teltonika-gps.com/ ya que los métodos de configuración y la correspondencia de parámetros pueden cambiar con el tiempo.
