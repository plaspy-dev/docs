---
slug: /jointech/jt705c/configuration
id: jt705c-configuration
sidebar_label: Configuration
title: Jointech - JT705C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech JT705C para conectarlo con Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración Jointech JT705C
  - configuración JT705C
  - JT705C configuración Plaspy
  - configuración servidor JT705C
  - configuración rastreador GPS Plaspy
  - configuración bloqueo de video GPS
  - configuración servidor seguimiento vehicular
  - configuración SMS del rastreador
  - integración rastreador logística
  - configuración plataforma seguimiento de flotas
---

# Jointech - JT705C Configuración

Esta página documenta el contexto público de configuración para usar el Jointech JT705C con Plaspy. Se concentra en los ajustes de servidor compartido de Plaspy y en los pasos prácticos para apuntar un dispositivo JT705C hacia Plaspy, de modo que el equipo reporte ubicación, alarmas y telemetría relacionada a la plataforma.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el JT705C pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía debe usarse junto con la documentación de Jointech y sus procesos de instalación.

## Resumen de configuración

El objetivo al configurar un JT705C para Plaspy es preparar el dispositivo para comunicarse de forma confiable con el backend de Plaspy, validar la conectividad y permitir que la unidad aparezca y reporte eventos en su cuenta de Plaspy. El modelo JT705C admite, entre otros métodos públicos, la configuración de servidor y APN vía SMS.

- Configure el servidor GPRS y el APN del dispositivo para que el JT705C establezca conexión de datos con Plaspy.
- Opcionalmente, establezca usuario y contraseña del APN si su operador móvil los requiere.
- Asegúrese de apuntar el dispositivo al endpoint compartido de Plaspy para que la telemetría y las alarmas se enruten correctamente.
- Valide la selección de transporte (UDP o TCP) y guarde la configuración para que el dispositivo comience a reportar.
- Confirme que el dispositivo aparece y envía actualizaciones en Plaspy tras la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta el protocolo automáticamente, por lo que el JT705C solo necesita apuntar al endpoint de Plaspy y al puerto correcto.

## Requisitos previos típicos

- Una unidad JT705C instalada y con alimentación, con su ID de dispositivo disponible
- Una SIM activa con conexión de datos y capacidad de SMS según el método de configuración elegido
- Acceso a un teléfono o herramienta capaz de enviar comandos SMS al dispositivo si utiliza la configuración por SMS
- El APN correcto del operador móvil (y usuario/contraseña de APN opcionales si son requeridos)
- Acceso a la documentación de configuración de Jointech o al software de instalador como referencia
- Acceso administrativo a Plaspy para verificar el registro del dispositivo y la telemetría tras la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurar el JT705C para usar Plaspy, el dispositivo envía su telemetría y mensajes de eventos al endpoint y puerto compartidos de Plaspy para que los datos se ingresen en su cuenta. Plaspy asocia los mensajes entrantes con el dispositivo registrado y presenta ubicación, eventos de alarma y evidencias relacionadas (como enlaces de video cuando estén disponibles) en la plataforma.

- El dispositivo reporta ubicación y estado a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP; elija según la capacidad del dispositivo o los requerimientos de la red.
- Plaspy detecta automáticamente el protocolo utilizado por el JT705C y procesa los mensajes en consecuencia.
- Una vez que reporta, la ubicación, las alarmas y los datos de evento quedan visibles en Plaspy para mapas, alertas e informes.
- La validación en Plaspy confirma la conectividad exitosa y ayuda a diagnosticar problemas de APN o de transporte.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Jointech para su JT705C, normalmente comandos SMS o la herramienta del proveedor recomendada por su suministrador.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el ajuste de servidor.
3. Configure el puerto en 8888 para que el dispositivo envíe telemetría a Plaspy.
4. Seleccione UDP o TCP si el dispositivo requiere que elija un protocolo de transporte.
5. Proporcione el valor de APN requerido por su operador móvil y, si es necesario, establezca usuario y contraseña del APN.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante exigen un reinicio.
7. Verifique que el JT705C reporte a Plaspy y aparezca en su cuenta con las actualizaciones de ubicación y eventos esperadas.

## Comandos de configuración de ejemplo

El JT705C admite configuración vía SMS. Los comandos públicos para handset que se muestran a continuación se ofrecen en el orden indicado por ejemplos de configuración de Jointech. Reemplace los marcadores por los valores específicos de su dispositivo.

- Reemplace [trackerID] por el ID del dispositivo (IMEI o identificador configurado).
- Reemplace [apn] por el APN de su operador móvil.
- Si su APN requiere autenticación, reemplace [apnu] y [apnp] por el usuario y la contraseña del APN. El comando de usuario y contraseña del APN es opcional cuando el operador no lo exige.

1) Establecer el servidor GPRS y el APN (envíe este SMS al dispositivo):

```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

También puede usar la forma con dominio cuando el dispositivo soporte nombres de dominio (reemplace la IP por el dominio si la unidad resuelve dominios):

```
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2) Opcional: Establecer usuario y contraseña del APN (envíe solo si su APN requiere credenciales):

```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Notas sobre los marcadores:
- [trackerID] — el ID del dispositivo o IMEI usado por los comandos Jointech.
- [apn] — la cadena APN del operador requerida para GPRS/datos.
- [apnu] — usuario del APN si el operador lo solicita.
- [apnp] — contraseña del APN si el operador la solicita.

Si en su instalación utiliza una herramienta de configuración de Jointech en lugar de SMS, aplique los valores equivalentes de servidor, puerto y APN en esa herramienta siguiendo el mismo orden.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos y las funciones disponibles; siempre verifique con la documentación actual de Jointech.
- La configuración por SMS es un método público común para el JT705C; use el conjunto de comandos SMS del dispositivo con cuidado y confirme los formatos de los mensajes.
- Elija UDP o TCP según el comportamiento y la fiabilidad de la red en su entorno; Plaspy acepta ambos en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando este se conecte.
- Si usa resolución por nombre de dominio, asegúrese de que el firmware del dispositivo soporte dominios; de lo contrario use la IP 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Configurar un JT705C para que reporte a Plaspy consolida ubicación, alarmas y evidencias de video en una única plataforma para monitoreo operativo, cumplimiento y respuesta ante incidentes. Para organizaciones que necesitan visibilidad continua sobre envíos de alto valor, integrar la telemetría del JT705C con Plaspy facilita alertas rápidas, flujos de investigación y supervisión centralizada de flotas.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current device-specific configuration methods, firmware details, and manufacturer instructions for the JT705C, verify setup steps with Jointech at https://www.jointcontrols.com/ before deployment.
