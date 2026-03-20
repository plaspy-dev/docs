---
slug: /meitrack/ta255/configuration
id: ta255-configuration
sidebar_label: Configuration
title: Meitrack - TA255 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Meitrack TA255 a Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - configuración Meitrack TA255
  - configuración TA255 para Plaspy
  - configuración servidor Meitrack TA255
  - configuración rastreador GPS TA255
  - configuración de dispositivos Plaspy
  - configuración SMS TA255
  - ajustes GPRS TA255
  - configuración rastreador de activos
  - guía de compatibilidad Plaspy
  - lista de verificación despliegue TA255
---

# Meitrack - TA255 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Meitrack TA255 con Plaspy. Resume los ajustes del servidor compartido de Plaspy que deberá aplicar en el equipo y ofrece comandos SMS prácticos publicados para la serie TA255. Use esta guía para preparar el rastreador para reportar a Plaspy y validar la conectividad básica antes de completar un despliegue a gran escala.

Plaspy utiliza un único endpoint y puerto compartido para dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos aquí como un punto de partida práctico y verifique los detalles contra la documentación de Meitrack o las herramientas de su proveedor cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es apuntar el TA255 a Plaspy, confirmar que el dispositivo alcanza la red GPRS y verificar que los datos de ubicación y eventos aparezcan en la plataforma Plaspy. El TA255 acepta comandos de configuración por SMS que muchos instaladores usan para establecer el servidor GPRS, intervalos de reporte y comportamiento de notificación de eventos.

- Configure el servidor GPRS del equipo para que apunte a Plaspy y la telemetría se entregue de forma fiable.
- Establezca un intervalo de reporte adecuado para equilibrar la duración de la batería y la visibilidad.
- Configure la zona horaria y la notificación de eventos para que los eventos tengan marcas de tiempo correctas y se procesen adecuadamente.
- Valide la conectividad con el endpoint de Plaspy y confirme que el dispositivo es visible en la plataforma.
- Mantenga un registro de cualquier cambio en la contraseña por defecto y en la configuración para soporte futuro.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com es el host canónico de Plaspy para la configuración de dispositivos y setups basados en DNS.
- La IP del servidor 54.85.159.138 puede usarse cuando el dispositivo requiere una entrada basada en IP.
- El puerto 8888 es el puerto de destino que Plaspy utiliza para todos los dispositivos compatibles.
- El TA255 puede configurarse para usar UDP o TCP hacia el puerto 8888 según las opciones del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que los dispositivos que usan el mismo puerto pueden manejarse sin selección de protocolo por dispositivo en el servidor.
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto 8888 para un manejo uniforme entre modelos.

## Requisitos típicos antes de la configuración

- Un TA255 con batería cargada y alimentación funcional; si aplica, módulos de batería instalados o carga solar conectada.
- Una SIM celular válida con datos habilitados y GPRS disponible para la región de la red objetivo.
- Acceso a un teléfono capaz de enviar SMS al equipo para configuración por SMS, o la herramienta oficial de configuración de Meitrack si está disponible.
- La contraseña por defecto del equipo si no fue cambiada; los comandos de ejemplo abajo usan la contraseña por defecto 0000.
- Los ajustes APN correctos del operador de la SIM para permitir conectividad GPRS.
- Referencia a la documentación oficial de Meitrack o notas de firmware para comandos y opciones específicas de la variante.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TA255 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, decodificar y presentar la telemetría del dispositivo. La detección automática de protocolo de Plaspy significa que la plataforma identificará el protocolo del rastreador sin registro de protocolo por dispositivo.

- El equipo se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- La telemetría y los eventos se entregan por el transporte seleccionado (UDP o TCP) al puerto único de Plaspy.
- Plaspy decodifica automáticamente el protocolo entrante y hace visible el dispositivo en su cuenta Plaspy una vez que el dispositivo está asociado.
- Actualizaciones regulares de posición, eventos de movimiento y lecturas de sensores configurados se reenvían a Plaspy para visualización y alertas.
- La validación del reporte se realiza confirmando que el dispositivo aparece en Plaspy y que las marcas de tiempo de las posiciones recientes coinciden con lo esperado.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Meitrack, o prepare un teléfono para enviar los comandos SMS al rastreador según lo descrito por Meitrack.
2. Ingrese el endpoint de Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto de destino en 8888, que es el puerto único usado por Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el TA255 requiere elegir el tipo de transporte para el reporte GPRS.
5. Aplique o guarde la configuración en el dispositivo y asegúrese de que el equipo acepte los ajustes (respuesta por SMS o confirmación del software).
6. Reinicie el dispositivo si el firmware lo requiere para que los nuevos ajustes de red entren en vigor.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y la telemetría más reciente en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El TA255 soporta comandos de configuración por SMS. Los comandos de ejemplo a continuación usan la contraseña por defecto del equipo 0000. Reemplace el prefijo de contraseña por la contraseña configurada si la ha cambiado.

- Restablecimiento de fábrica o restauración a ajustes de fábrica
  ```
  0000,F11
  ```
  Nota: Use este comando como paso inicial opcional cuando necesite borrar configuraciones anteriores.

- Establecer el servidor GPRS a la IP de Plaspy y puerto 8888 con marcadores APN
  ```
  0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
  ```
  Explicación de los marcadores
  - [apn] es el nombre del APN de la red móvil requerido para datos GPRS
  - [apnu] es el nombre de usuario del APN si el operador lo requiere
  - [apnp] es la contraseña del APN si el operador la exige
  Nota: apnu y apnp suelen ser opcionales y pueden omitirse si su proveedor de SIM no los requiere.

- Establecer la zona horaria a UTC 0
  ```
  0000,B36,0
  ```

- Establecer el intervalo de actualización de ubicación a una vez por minuto
  ```
  0000,A12,6,0
  ```

- Configurar el reporte básico de eventos
  ```
  0000,C03,0
  ```

Preserve el orden de los comandos cuando los aplique durante la configuración inicial si depende de un restablecimiento de fábrica o de un flujo secuencial.

## Notas de configuración

- Las variantes de firmware y hardware regionales pueden cambiar los comandos SMS o el formato de parámetros disponibles; siempre consulte las notas de la versión de Meitrack para su variante TA255.
- El TA255 soporta configuración por SMS como se muestra, pero muchos instaladores prefieren las herramientas de software de Meitrack para aprovisionamiento masivo y flujos FOTA.
- Cuando un dispositivo exige elegir el tipo de transporte, pruebe tanto UDP como TCP si surgen problemas de conectividad; Plaspy soporta ambos transportes en el puerto 8888.
- Los marcadores APN [apn], [apnu] y [apnp] deben completarse con los valores proporcionados por su operador móvil. Usuario y contraseña suelen ser opcionales.
- Si cambia la contraseña del equipo desde el valor por defecto 0000, actualice sus registros de aprovisionamiento y use la nueva contraseña en comandos SMS posteriores.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack TA255 con Plaspy ofrece a las organizaciones una vía sencilla hacia visibilidad continua y telemetría para remolques, contenedores y otros activos de larga duración. Los ajustes de servidor compartidos de Plaspy simplifican despliegues masivos porque todos los equipos apuntan al mismo endpoint y puerto, y Plaspy detecta automáticamente los protocolos de los dispositivos, minimizando la gestión de protocolos por equipo.

Para obtener más información sobre Plaspy y cómo soporta la conectividad de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. Para detalles específicos del dispositivo, actualizaciones de firmware y las referencias de comandos TA255 más actuales, verifique la información en el sitio del fabricante https://www.meitrack.com/
