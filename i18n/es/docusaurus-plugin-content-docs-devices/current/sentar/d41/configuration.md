---
slug: /sentar/d41/configuration
id: d41-configuration
sidebar_label: Configuration
title: Sentar - D41 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para el smartwatch Sentar D41 compatible con Plaspy
keywords:
  - Sentar D41
  - configuración Sentar D41
  - instalación Sentar D41
  - rastreador GPS Sentar
  - configuración smartwatch D41
  - compatibilidad Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - rastreo smartwatch infantil
  - configuración servidor de dispositivo
---

# Sentar - Configuración D41

Esta página documenta el contexto público de configuración para usar el smartwatch Sentar D41 con Plaspy. Reúne los ajustes prácticos de servidor, pasos de verificación y los comandos SMS públicos que normalmente se utilizan para preparar un D41 y que reporte ubicación y estado a Plaspy. Use esta guía para comprender los valores estándar que Plaspy espera y cómo aparecen en el flujo de configuración del D41.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El D41 es un smartwatch infantil 4G compatible con Plaspy que ofrece posicionamiento por GPS, LBS y WiFi; esta guía incluye los comandos SMS publicados para el D41 y explica cómo se corresponden con los valores de servidor de Plaspy.

## Resumen de configuración

El objetivo al configurar un Sentar D41 para Plaspy es apuntar el dispositivo al endpoint compartido del servidor de Plaspy y confirmar que los mensajes de ubicación y estado llegan a la plataforma. La configuración pública típica usa comandos SMS o la herramienta del fabricante para establecer la zona horaria, el APN y el servidor GPRS del dispositivo, permitiendo que el reloj envíe actualizaciones periódicas.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así Plaspy pueda recibir posición y telemetría.
- Establezca el APN correcto y verifique el registro móvil para que los datos GPRS estén disponibles desde el reloj.
- Aplique los ajustes de endpoint y puerto del servidor que coincidan con Plaspy para que los mensajes se enruten a la plataforma.
- Valide el reporte del dispositivo y revise la configuración para confirmar visibilidad en los paneles y herramientas de Plaspy.
- Opcionalmente realice un reinicio de fábrica o ajuste de zona horaria durante el despliegue inicial como parte del aprovisionamiento estándar.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

## Requisitos típicos antes de la configuración

- Un equipo D41 cargado con una tarjeta SIM funcional y un plan de datos activo adecuado para su región.
- Capacidad para enviar comandos SMS desde un teléfono de configuración o acceso a la herramienta de configuración del fabricante.
- El APN del operador, nombre de usuario y contraseña requeridos por la red móvil (se incluyen marcadores de posición en los comandos más abajo).
- Conocimiento de la contraseña predeterminada del dispositivo si es necesaria para la configuración por SMS; en los comandos públicos para el D41 la contraseña de ejemplo es 123456.
- Acceso a la documentación del fabricante o a las herramientas del proveedor para confirmar la sintaxis de comandos específica del firmware.

## Cómo se conecta este rastreador a Plaspy

El Sentar D41 se configura para enviar ubicación y estado del dispositivo al endpoint y puerto compartidos del servidor Plaspy, de modo que Plaspy pueda ingerir y procesar los datos automáticamente. Normalmente el dispositivo usa datos celulares (GPRS/4G) para abrir una conexión al endpoint de Plaspy y luego transmite actualizaciones periódicas que Plaspy relaciona con un registro de dispositivo.

- El reloj reporta actualizaciones de posición basadas en GPS, LBS y WiFi a Plaspy tras el registro GPRS.
- Eventos del botón SOS y cambios de estado se entregan a Plaspy como alertas cuando están configurados.
- El dispositivo se apunta al dominio o IP del servidor Plaspy y al puerto compartido para que los mensajes lleguen a la plataforma.
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que normalmente solo necesita proporcionar el servidor y el puerto.
- La selección de transporte (UDP o TCP) se ajusta en el lado del dispositivo si el firmware requiere una elección explícita.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Sentar para el D41, como comandos SMS o la herramienta de aprovisionamiento del fabricante.
2. Ingrese el endpoint del servidor de Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir un protocolo de transporte.
5. Configure el APN del operador, nombre de usuario y contraseña usando los marcadores de posición proporcionados por el operador.
6. Aplique o guarde la configuración y, si se recomienda, reinicie el dispositivo.
7. Valide que el dispositivo reporte a Plaspy comprobando el último visto, las actualizaciones de posición o usando el comando de verificación de estado del dispositivo.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración para el D41 usan comandos SMS. Los comandos abajo se presentan en el mismo orden que la guía pública y conservan los marcadores de posición. Note que la contraseña de ejemplo usada en estos comandos públicos es 123456. Si su dispositivo utiliza una contraseña distinta, sustitúyala según corresponda.

- Reinicio de fábrica (opcional en la configuración inicial)
```text
pw,123456,factory#
```

- Establecer la zona horaria UTC+0
```text
pw,123456,lz,0,0#
```

- Comprobar MCC y MNC (identificadores del operador de red)
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde xxx es MCC y yy es MNC
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explicación: {{apn}} es el APN del operador, {{apnu}} es el nombre de usuario del APN y {{apnp}} es la contraseña del APN. Reemplace xxxyy por la concatenación del MCC y MNC del operador cuando sea necesario.

- Establecer servidor GPRS para apuntar el dispositivo a Plaspy (ejemplo público)
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: Este comando se proporciona en el ejemplo público tal como se muestra; algunas variantes de firmware usan un separador distinto o un parámetro "ip" explícito. Verifique la sintaxis exacta para su firmware.

- Establecer intervalo de actualización a 300 segundos (5 minutos)
```text
pw123456,upload,300#
```
Nota: El formato del comando varía entre versiones de firmware. Si su dispositivo requiere una coma después de la contraseña, use la sintaxis documentada por el fabricante.

- Verificar configuración actual
```text
pw,123456,ts#
```

## Notas de configuración

- La sintaxis de comandos del fabricante y los separadores pueden variar entre versiones de firmware; confirme siempre el formato SMS exacto con la documentación de Sentar.
- El D41 admite aprovisionamiento por SMS como se muestra en los comandos públicos; si el proveedor ofrece una herramienta de software o web para aprovisionamiento, prefiera esa herramienta para despliegues masivos.
- Elija UDP o TCP según la fiabilidad de la red y el soporte del firmware del dispositivo; Plaspy acepta cualquiera de los dos transportes en el puerto compartido y detecta el protocolo automáticamente.
- Plaspy utiliza el mismo puerto (8888) para todos los dispositivos soportados, por lo que confirmar el valor del puerto es crítico durante la configuración.
- Cuando aparezcan marcadores de posición como {{apn}}, {{apnu}} y {{apnp}}, reemplácelos por los valores de su operador; una configuración APN incorrecta impedirá el registro GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D41 para que reporte a Plaspy ofrece visibilidad centralizada de la ubicación, alertas SOS y el estado del dispositivo para supervisores o responsables. Al apuntar el reloj al endpoint compartido del servidor de Plaspy y confirmar el APN y la conectividad, las organizaciones obtienen actualizaciones de ubicación continuas e informes de eventos que se integran con los paneles y flujos de trabajo de Plaspy.

Learn more about Plaspy and platform features at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and exact setup methods can change; verify the latest device-specific configuration details on the official Sentar site http://www.sentarsmart.com/ before wide rollout.
