---
slug: /istartek/pt55/configuration
id: pt55-configuration
sidebar_label: Configuration
title: iStartek - PT55 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del iStartek PT55 con ajustes de servidor Plaspy, comandos SMS y flujo de configuración para integración sencilla
keywords:
  - configuración iStartek PT55
  - instalación iStartek PT55
  - configuración PT55 Plaspy
  - configuración servidor PT55
  - configuración rastreador GPS PT55
  - configuración dispositivo Plaspy
  - comandos SMS rastreador GPS
  - ajustes APN PT55
  - rastreo de activos PT55
  - configuración GPRS PT55
---

# iStartek - Configuración PT55

Esta página presenta el contexto público de configuración para usar el iStartek PT55 con Plaspy. Se concentra en los ajustes prácticos y en los comandos SMS que preparan el PT55 para reportar ubicación y eventos a Plaspy, y muestra los datos de servidor compartidos que Plaspy espera recibir. Utilice esta guía junto con la documentación oficial del dispositivo para una gestión completa y prácticas de seguridad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, mientras que los pasos exactos a nivel del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT55 admite configuración mediante mensajes SMS y reportes por GPRS; esta guía explica cómo dirigir esos reportes a Plaspy usando los ajustes públicos y ejemplos de comandos SMS.

## Resumen de la configuración

Configurar el PT55 para Plaspy garantiza que el dispositivo pueda alcanzar la plataforma de forma fiable y ser visible en los paneles de Plaspy. El proceso público se centra en establecer el APN y los datos del servidor, elegir el transporte y validar que el dispositivo informe correctamente.

- Configure el APN de la red para que el PT55 pueda establecer una sesión de datos GPRS para reportes UDP.
- Ajuste la entrada de servidor del PT55 para apuntar al dominio o IP del servidor de Plaspy y al puerto compartido.
- Elija el método de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Aplique intervalos de reporte y temporizadores para equilibrar la duración de la batería y la frecuencia de actualización.
- Verifique los parámetros usando la consulta de parámetros del dispositivo y confirme que el tracker sea visible en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el PT55. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan los datos

## Requisitos típicos antes de la configuración

- Un dispositivo PT55 cargado con la SIM instalada y un plan de datos móviles activo si va a usar reportes GPRS.
- Capacidad para enviar SMS para mandar mensajes de configuración al número del dispositivo y realizar la configuración remota.
- Credenciales APN del operador móvil (conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} por si fueran necesarios).
- Acceso a las instrucciones oficiales de iStartek o a la herramienta del instalador para guía específica de firmware.
- Un procedimiento para validar la visibilidad del dispositivo en Plaspy una vez aplicada la configuración.

## Cómo se conecta este tracker a Plaspy

El PT55 envía actualizaciones de ubicación y reportes de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar la telemetría y mostrarla en paneles y flujos de alertas. En la configuración del dispositivo se admiten tanto objetivo por dominio como por IP.

- El PT55 puede configurarse para enviar reportes GPRS UDP a d.plaspy.com en el puerto 8888.
- Alternativamente, se puede apuntar al dispositivo a 54.85.159.138 en el puerto 8888 según la preferencia del instalador.
- El transporte del dispositivo puede configurarse como UDP o TCP; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Las alarmas y la telemetría enviadas al servidor de Plaspy se decodifican y se muestran como eventos de ubicación, puntos de historial y alertas.
- La visibilidad exitosa en Plaspy confirma tanto la conectividad de red como la correcta configuración de servidor/puerto en el tracker.

## Flujo de trabajo de configuración habitual

1. Acceda al método o software de configuración oficial del fabricante, o prepárese para enviar comandos de configuración por SMS según la documentación de iStartek.
2. Introduzca la dirección del servidor de Plaspy ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; UDP se usa comúnmente, pero ambos son compatibles.
5. Configure el APN y, si corresponde, el usuario y la contraseña del APN usando el comando APN o la herramienta del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del equipo lo exige.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; utilice consultas de parámetros o la visibilidad en Plaspy para confirmar.

## Comandos de configuración de ejemplo

El PT55 admite configuración basada en SMS. A continuación figuran los comandos SMS públicos más utilizados en el orden recomendado para la configuración inicial. Envíe cada comando como un mensaje SMS al número del dispositivo.

1. Reinicio de fábrica opcional (use solo si necesita restaurar valores por defecto)
```
FACTORY#
```

2. Ajuste la zona horaria a UTC-0
```
GMT,E,0#
```

3. Configure el APN del operador
- Solo APN mínimo:
```
APN,{{apn}}#
```
- APN con usuario y contraseña opcionales (incluya {{apnu}} y {{apnp}} si su operador lo exige):
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es el APN del operador móvil. {{apnu}} y {{apnp}} son los marcadores opcionales de usuario y contraseña del APN. Mantenga esos marcadores si su operador requiere autenticación.

4. Configure el servidor GPRS para usar Plaspy por dominio (UDP/TCP en puerto 8888)
```
SERVER,1,d.plaspy.com,8888#
```

O configure el servidor GPRS para usar Plaspy por IP
```
SERVER,0,54.85.159.138,8888#
```

5. Establezca el intervalo de reporte/actualización a 60 segundos
```
TIMER,60#
```

6. Verifique los parámetros actuales
```
PARAM#
```

## Notas de configuración

- La configuración por SMS es compatible y común para el PT55, pero algunas implementaciones pueden preferir herramientas del proveedor o configuración por cable si están disponibles.
- Las versiones de firmware y las revisiones de hardware pueden afectar la sintaxis exacta de los comandos y los parámetros disponibles; consulte la documentación oficial de iStartek para notas específicas de firmware.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} al preparar los comandos; reemplácelos con los valores de su operador.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detectará el protocolo automáticamente cuando el dispositivo envíe datos.

## Por qué usar Plaspy con esta configuración

Usar el PT55 con Plaspy proporciona a las organizaciones visibilidad remota fiable con un mantenimiento mínimo. La configuración basada en mensajes del PT55 y su soporte para reportes UDP/SMS facilitan el despliegue en flotas y activos remotos, mientras que Plaspy aporta paneles centralizados, reproducción de historial y alertas necesarias para la monitorización operativa.

Para conocer más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio de iStartek https://istartek.com/ para que su despliegue siga la guía oficial actual.
