---
slug: /teltonika/fmb120/configuration
id: fmb120-configuration
sidebar_label: Configuration
title: Teltonika - FMB120 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB120 con el servidor Plaspy d.plaspy.com, incluye ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMB120
  - Instalación Teltonika FMB120
  - Configuración FMB120 Plaspy
  - Configuración del servidor FMB120
  - Configuración rastreador GPS Teltonika
  - Configuración software seguimiento FMB120
  - Configuración plataforma GPS Teltonika FMB120
  - Configuración rastreador Plaspy
  - Seguimiento de vehículos Teltonika
  - Seguimiento de flotas FMB120
---

# Teltonika - Configuración del FMB120

Esta página describe el contexto público de configuración para usar el Teltonika FMB120 con Plaspy. Se centra en los ajustes prácticos del servidor y en los pasos mínimos de configuración del rastreador que son públicamente accesibles, para que usted prepare el dispositivo y pueda comunicarse con Plaspy y aparecer en la plataforma para seguimiento en tiempo real y reporte de eventos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El comando de ejemplo incluido en esta página se proporciona como guía pública y usa marcadores de posición que usted deberá sustituir por valores específicos del operador.

## Visión general de la configuración

El proceso de configuración prepara al FMB120 para enviar ubicación y telemetría a Plaspy y valida la conectividad para que el dispositivo sea visible en la plataforma. El objetivo principal es apuntar el rastreador al endpoint del servidor Plaspy, seleccionar el método de transporte que el equipo soporte y confirmar que el dispositivo informe correctamente.

- Configure el acceso de red para que el dispositivo tenga conexión celular operativa y los valores APN correctos.
- Establezca la dirección y puerto del servidor del dispositivo para que apunten a Plaspy.
- Seleccione el protocolo de transporte si el equipo requiere una selección manual.
- Guarde y aplique la configuración y reinicie el dispositivo cuando sea necesario.
- Verifique que el dispositivo aparezca en Plaspy y que esté enviando actualizaciones de ubicación y eventos básicos de estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos soportados y todos usan el mismo puerto

## Requisitos previos típicos antes de la configuración

- Un dispositivo FMB120 cargado e instalado con acceso a la alimentación del vehículo o la batería interna según corresponda.
- Una SIM GSM 2G funcional con un plan de datos o SMS activo y los datos APN correctos del operador celular.
- Acceso al método o software oficial de configuración de Teltonika adecuado para su dispositivo y firmware.
- El APN, nombre de usuario del APN y contraseña del APN proporcionados por su operador móvil para completar los campos de red del dispositivo.
- Conocimientos básicos de cómo enviar comandos de configuración al dispositivo usando el método soportado por el fabricante.
- El firmware del equipo debería ser lo bastante reciente como para soportar los campos de configuración usados en esta guía.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMB120 envía datos de ubicación y eventos a través del enlace celular al endpoint y puerto compartidos del servidor Plaspy, de modo que el equipo quede visible en la plataforma. Plaspy procesa los datos entrantes y asocia cada mensaje con la entrada de dispositivo correcta mediante detección de protocolo.

- El dispositivo apunta al dominio o IP del servidor Plaspy y envía telemetría a d.plaspy.com o a 54.85.159.138.
- Los datos se transmiten al puerto 8888 del servidor Plaspy para todos los dispositivos soportados.
- El equipo utiliza UDP o TCP como transporte según lo que esté configurado en el rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador y maneja los mensajes entrantes para su procesamiento y visualización.
- Una vez reportando, las actualizaciones de ubicación, eventos de entradas/salidas digitales y los datos de sensores soportados aparecen en los paneles y alertas de Plaspy.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Teltonika adecuado para su dispositivo y firmware (herramienta del fabricante, interfaz SMS o utilitario de configuración).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor.
3. Establezca el puerto en 8888 para el endpoint de Plaspy.
4. Seleccione UDP o TCP en el dispositivo si este requiere una selección manual del transporte.
5. Proporcione las credenciales APN del operador donde se requiera usando los valores suministrados por su operador móvil.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el proceso exige un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad del equipo y las actualizaciones en vivo en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El siguiente comando público es un formato común de actualización de parámetros estilo Teltonika y establece los valores básicos de red y servidor. Incluye marcadores de posición para las credenciales APN que usted debe reemplazar por los valores de su operador.

- Ejemplo de comando por SMS o configuración:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición y campos en el comando anterior:
- {{apn}} es el nombre del APN proporcionado por su operador móvil.
- {{apnu}} es el nombre de usuario del APN si su operador lo requiere. Déjelo vacío si no es necesario.
- {{apnp}} es la contraseña del APN si su operador la solicita.
- 2004 está configurado a d.plaspy.com para apuntar el dispositivo al dominio Plaspy. También puede usar la IP 54.85.159.138 en herramientas del fabricante donde se requiera una IP.
- 2005 establece el puerto a 8888 que es usado por Plaspy para todos los dispositivos.
- 2006 se relaciona con la selección de transporte o un parámetro relacionado que usa el dispositivo; consulte la documentación de Teltonika para el significado exacto y los valores según su firmware.

Siempre verifique la sintaxis exacta del comando y el significado del parámetro de transporte según la documentación de Teltonika para la versión de firmware de su dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden alterar los IDs de parámetros y los formatos de comando; confirme los números de parámetro en la documentación de su firmware antes de aplicar comandos.
- Algunos métodos de configuración usan comandos SMS mientras que otros emplean un configurador para PC o una herramienta móvil; elija el método soportado por su dispositivo y firmware.
- Plaspy soporta tanto transportes UDP como TCP en el puerto 8888. Seleccione el transporte que coincida con la capacidad del equipo y las condiciones de red.
- Todos los dispositivos que usan Plaspy emplean el mismo puerto y Plaspy intentará detectar automáticamente el protocolo del dispositivo una vez que reciba datos.
- Al solucionar problemas de conectividad, confirme los ajustes APN, el estado del servicio de la SIM y que el dispositivo pueda resolver o alcanzar d.plaspy.com o 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMB120 para reportar a Plaspy es una forma práctica de obtener ubicación en tiempo real, telemetría básica y monitoreo de eventos en una plataforma de flota unificada. Para organizaciones que requieren seguimiento costo efectivo, la combinación del FMB120 con Plaspy habilita mapas en vivo, alertas y flujos simples de control remoto como inmovilización y eventos disparados por entradas/salidas.

Para saber más sobre Plaspy y cómo maneja la incorporación de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Los comandos específicos del dispositivo, el comportamiento de firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información de configuración más reciente en el sitio del fabricante https://www.teltonika-gps.com/.
