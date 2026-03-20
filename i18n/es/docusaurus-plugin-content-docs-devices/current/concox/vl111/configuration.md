---
slug: /concox/vl111/configuration
id: vl111-configuration
sidebar_label: Configuration
title: Concox - VL111 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Concox VL111 para usarlo con Plaspy mediante ajustes de servidor, comandos SMS y guía práctica de instalación
keywords:
  - Configuración Concox VL111
  - Configuración VL111
  - Configuración VL111 Plaspy
  - Configuración servidor VL111
  - Comandos SMS VL111
  - Ajustes GPRS VL111
  - Configuración rastreador Concox
  - Configuración rastreador GPS vehículo
  - Integración plataforma GPS
  - Configuración seguimiento de flotas
---

# Concox - Configuración VL111

Esta página describe la configuración pública necesaria para usar el rastreador Concox VL111 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos de configuración habituales que publica el fabricante para que el dispositivo envíe ubicación y telemetría a Plaspy. Use esta guía para preparar el equipo y aplicar la configuración compartida de plataforma que permite la visibilidad en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor. El VL111 admite configuración por SMS y ajustes GPRS como parte del flujo típico; siga los comandos indicados y verifique posibles diferencias según la revisión de su dispositivo.

## Resumen de la configuración

El proceso prepara el VL111 para comunicarse de forma fiable con el backend de Plaspy y garantiza que el equipo reporte ubicación y eventos de manera periódica. Normalmente implica definir el APN de datos móviles, direccionar el dispositivo al endpoint de Plaspy y activar el intervalo de reporte de datos.

- Configure el APN y el acceso de red para que el dispositivo pueda usar datos móviles en GPRS o LTE.
- Establezca el servidor GPRS del dispositivo apuntando al endpoint de Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el transporte (UDP o TCP) si es necesario y asigne el puerto compartido que usa Plaspy.
- Configure el reporte periódico (timer) para que el equipo envíe actualizaciones al intervalo deseado.
- Verifique los ajustes con un comando de verificación del fabricante o comprobando la visibilidad del dispositivo en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Una nano SIM válida con datos móviles activados y las credenciales APN correctas para que el dispositivo use GPRS/LTE.
- Acceso a un método para enviar comandos SMS al rastreador o al software de configuración del fabricante (PC/app) según lo admita el VL111.
- Alimentación e instalación básica completada para que el equipo pueda arrancar, registrarse en la red móvil y conectarse.
- Una cuenta en Plaspy y la información de provisión del dispositivo para confirmar que aparece en la plataforma tras la configuración.
- Conocimiento básico de la versión de firmware y la guía del fabricante para notas específicas de la revisión.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el VL111 envía posiciones GNSS, estado y paquetes de eventos al endpoint y puerto compartido de Plaspy. Plaspy recibe estos paquetes periódicos y los asocia con el registro del dispositivo en la plataforma para ofrecer seguimiento en vivo, alertas y reproducción histórica.

- El rastreador se apunta al servidor Plaspy introduciendo d.plaspy.com o la IP proporcionada junto con el puerto de la plataforma.
- El dispositivo usa el transporte seleccionado (UDP o TCP) en el puerto 8888 para enviar paquetes GPRS/LTE a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo dentro de la plataforma.
- Una vez que inicia el reporte, Plaspy muestra en tiempo real la ubicación, telemetría y datos de eventos para la supervisión operativa.
- Use la plataforma para validar que el rastreador está en línea y transmitiendo tras la configuración.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante, como comandos SMS, la herramienta PC del VL111 o la app del proveedor, según lo admita su dispositivo y firmware.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del equipo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección y soporta ambas opciones.
5. Configure el APN y cualquier usuario o contraseña de APN que requiera su operador móvil.
6. Guarde o aplique la configuración y reinicie el equipo si el fabricante lo indica.
7. Valide que el rastreador reporte a Plaspy comprobando la conectividad en el panel de Plaspy o usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

Para configurar el rastreador envíe los siguientes comandos SMS en el orden indicado. Estos comandos son los públicos que proporciona el fabricante para la configuración por SMS. El reset de fábrica es opcional y suele usarse en configuraciones iniciales o para borrar ajustes previos.

1. Reset de fábrica inicial opcional (usar solo si es necesario)
```
FACTORY#
```

2. Ajustar la zona horaria a UTC+0
```
GMT,E,0#
```

3. Establecer el APN del operador
- Reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña de APN, incluya también [apnu] y [apnp] donde corresponda.
```
APN,[apn]
```
o con credenciales (si son necesarias)
```
APN,[apn],[apnu],[apnp]
```

4. Establecer el servidor GPRS para usar el dominio de Plaspy (la selección UDP/TCP se maneja en el dispositivo)
```
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS usando la IP de Plaspy
```
SERVER,0,54.85.159.138,8888,0#
```

5. Fijar el intervalo de actualización cada 60 segundos
- Dos formatos de timer habituales que muestra el fabricante:
```
TIMER,60#
```
o
```
TIMER,60,60#
```

6. Activar modo GPRS
```
GPRSON,1#
```

7. Verificar los parámetros GPRS actuales
```
GPRSSET#
```

Notas sobre los marcadores:
- [apn] es la cadena APN de datos móviles requerida por el proveedor celular.
- [apnu] es el usuario del APN si su proveedor lo solicita.
- [apnp] es la contraseña del APN si su proveedor la solicita.
Mantenga los marcadores tal cual al preparar los SMS y reemplácelos por sus credenciales reales del operador.

## Observaciones de configuración

- La configuración por SMS se muestra porque la documentación del vendedor VL111 incluye comandos SMS; algunos instaladores prefieren la herramienta PC o la app del proveedor dependiendo del firmware.
- Las versiones de firmware y las variantes de hardware (por ejemplo variantes regionales VL111S) pueden añadir o cambiar comandos y su comportamiento; confirme los comandos según el firmware de su dispositivo.
- Elija TCP o UDP según la preferencia del instalador o las opciones del equipo; Plaspy acepta ambos transportes en el puerto compartido y detectará el protocolo automáticamente.
- La configuración de Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica los ajustes en una flota mixta.
- Si tiene problemas de conexión, verifique las credenciales APN, la capacidad de datos de la SIM y que el dispositivo esté registrado en la red antes de asumir problemas del servidor.

## Por qué usar Plaspy con esta configuración

Configurar el VL111 para reportar a Plaspy ofrece a los operadores una visibilidad en tiempo real consistente y telemetría centralizada para vehículos y motocicletas. La combinación de reportes GNSS fiables y un endpoint de servidor homogéneo facilita la incorporación de flotas, permitiendo a despachadores y gerentes monitorear ubicación, eventos y acciones remotas desde una plataforma unificada.

Para más información sobre Plaspy y cómo soporta integraciones de dispositivos como el VL111 visite https://www.plaspy.com. Para referencias de comandos específicos por dispositivo, notas de firmware y detalles de hardware, verifique la documentación actual en el sitio del fabricante https://www.iconcox.com/. Las especificaciones del fabricante, los métodos de instalación y el comportamiento del equipo pueden cambiar, por lo que siempre confirme los pasos de configuración con la documentación oficial de Concox.
