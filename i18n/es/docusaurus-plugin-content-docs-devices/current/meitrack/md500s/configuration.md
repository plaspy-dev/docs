---
slug: /meitrack/md500s/configuration
id: md500s-configuration
sidebar_label: Configuration
title: Meitrack - MD500S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Meitrack MD500S con Plaspy, ajustes de servidor, comandos SMS y pasos para integrar el rastreo
keywords:
  - configuración Meitrack MD500S
  - instalación Meitrack MD500S
  - configuración MD500S Plaspy
  - configuración rastreador GPS MD500S
  - configuración rastreador Meitrack
  - configuración dispositivo Plaspy
  - configuración rastreador vehicular MD500S
  - configuración servidor MD500S
  - configuración plataforma GPS Meitrack
  - configuración SMS MD500S
---

# Meitrack - Configuración del MD500S

Esta página documenta el contexto público de configuración para usar el Meitrack MD500S con la plataforma Plaspy. Se concentra en los ajustes prácticos del servidor, un flujo de configuración de ejemplo por SMS incluido en el modelo público y lo que debe verificar antes de integrar el MD500S con Plaspy para seguimiento y telemetría en tiempo real.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MD500S admite configuración por SMS y GPRS como se muestra en los comandos públicos a continuación; aplique esos comandos según su hardware y firmware y verifique el comportamiento frente a la documentación de Meitrack.

## Resumen de configuración

El objetivo al configurar un MD500S para Plaspy es apuntar el dispositivo al endpoint del servidor de Plaspy, asegurar que el equipo pueda enviar datos por el canal celular o de red elegido y verificar su visibilidad en su cuenta de Plaspy. En equipos donde la configuración por SMS está disponible, los comandos SMS establecen parámetros de red e informe para que la unidad transmita telemetría a Plaspy.

- Configure el MD500S para reportar al endpoint y puerto del servidor Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Establezca el APN y, cuando sea necesario, las credenciales del APN para que el dispositivo tenga conectividad GPRS/4G.
- Valide el transporte y la conectividad para que el dispositivo pueda establecer una sesión TCP o UDP con Plaspy.
- Confirme que el dispositivo informe ubicaciones y eventos en la plataforma Plaspy para monitoreo y alertas.
- Opcionalmente, aplique ajustes de zona horaria e intervalo de reporte para alinear la marca temporal de la telemetría y la frecuencia de actualizaciones.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Acceso a la unidad MD500S y a las herramientas del proveedor o a un teléfono con capacidad SMS para enviar comandos de configuración.
- Una tarjeta SIM válida con servicio de datos y capacidad SMS si va a usar GPRS y comandos SMS.
- Alimentación y conexión eléctrica al vehículo según la guía de instalación para que el dispositivo arranque y se registre en la red celular.
- El APN correcto de su operador y cualquier usuario o contraseña de APN si el operador los requiere.
- Documentación del firmware y de las herramientas de configuración de Meitrack para que los comandos coincidan con el comportamiento de su firmware.
- Acceso a la cuenta Plaspy y guía de aprovisionamiento de dispositivos para poder confirmar que el equipo reporta correctamente en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado para Plaspy, el MD500S envía posiciones, estado del dispositivo e informes de eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y pone a disposición en la plataforma la ubicación, la telemetría y los datos de alarma.

- El MD500S se configura para reportar a d.plaspy.com (54.85.159.138) en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP para enviar la telemetría a Plaspy según la elección de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al registro de dispositivo correspondiente.
- Los mensajes de telemetría y eventos permiten visibilidad, alertas y rutas históricas en Plaspy.
- Cuando esté disponible, las referencias de eventos de video y la telemetría sincronizada pueden correlacionarse en Plaspy o vincularse a sistemas de gestión de video.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Meitrack para su MD500S (comandos SMS, Meitrack Manager o la utilidad de configuración del proveedor).
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera su interfaz de configuración.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy admite ambos y detecta el protocolo automáticamente.
5. Aplique o guarde la configuración y espere a que el dispositivo se registre en la red y abra una sesión con Plaspy.
6. Reinicie el equipo si la metodología de configuración o el firmware lo exige para asegurar que los nuevos ajustes entren en vigor.
7. Verifique en Plaspy que el dispositivo comience a reportar localización y mensajes de estado a la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del MD500S que siguen son comandos SMS que puede enviar al dispositivo. Los comandos de muestra usan la contraseña predeterminada 0000 tal como aparece en el contenido público. El primer comando es un restablecimiento a valores de fábrica y solo debe usarse cuando sea necesario o durante la puesta en marcha inicial.

- Opcional: restablecimiento a valores de fábrica (usar solo si pretende restaurar los valores predeterminados):
```text
0000,F11
```

- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto 8888.
  - Comando básico con solo APN:
```text
0000,A21,2,54.85.159.138,8888,[apn]
```
  - Si su APN requiere usuario y contraseña incluya estos marcadores:
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
  - Alternativamente, si prefiere usar el dominio de Plaspy en lugar de la IP, apunte el campo de servidor en su herramienta Meitrack a d.plaspy.com y use el puerto 8888.

- Establecer la zona horaria a UTC+0:
```text
0000,B36,0
```

- Establecer el intervalo de actualización a cada 1 minuto:
```text
0000,A12,6,0
```

- Configurar el reporte de eventos (ejemplo según el contenido público del modelo):
```text
0000,C03,0
```

Notas sobre los marcadores:
- [apn] es la cadena APN proporcionada por su operador móvil.
- [apnu] es el usuario del APN cuando el operador lo requiere; dejar vacío si no es necesario.
- [apnp] es la contraseña del APN cuando el operador la requiere; dejar vacío si no es necesaria.

Envíe estos comandos SMS desde un número autorizado si su equipo está configurado para aceptar comandos solo desde números específicos. Después de enviar los comandos de servidor y APN, verifique que el dispositivo se registre en la red celular y establezca una sesión con el servidor Plaspy en 54.85.159.138 puerto 8888.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden modificar la sintaxis y el comportamiento de los comandos. Verifique siempre los comandos con la documentación del firmware del Meitrack MD500S.
- El MD500S soporta la configuración vía SMS como se muestra, pero muchas implementaciones prefieren Meitrack Manager u herramientas OTA para configuraciones masivas o remotas.
- Elija TCP si su instalación requiere un transporte orientado a conexión; elija UDP para menor overhead. Plaspy acepta ambos y detecta el protocolo automáticamente.
- Usar el dominio d.plaspy.com puede evitar problemas si Plaspy actualiza direcciones IP, pero la IP 54.85.159.138 puede usarse en herramientas que requieran una IP.
- Si utiliza el comando de restablecimiento de fábrica, considérelo opcional y ejecútelo solo cuando sea necesario durante el aprovisionamiento inicial.

## Por qué usar Plaspy con esta configuración

Configurar el MD500S para reportar a Plaspy integra la telemetría robusta del vehículo y datos listos para sincronizar con video en una vista única de gestión de flotas. Las organizaciones obtienen ubicación en tiempo real, monitoreo de eventos y la capacidad de correlacionar eventos de video AI del MD500S con GPS y telemetría de sensores para supervisión operativa y revisión de incidentes.

Learn more about Plaspy and how it supports devices like the MD500S at https://www.plaspy.com. For the most current device-specific configuration commands, firmware details, and regional variant information verify setup steps and command syntax with the official Meitrack documentation at https://www.meitrack.com/ .
