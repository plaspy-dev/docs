---
slug: /topfly/solarguardx_200/configuration
id: solarguardx_200-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly SolarGuardX 200 para uso con Plaspy en seguimiento y gestión de flotas
keywords:
  - Configuración TopFly SolarGuardX 200
  - Configuración SolarGuardX 200
  - Configuración tracker TopFly
  - Configuración tracker Plaspy
  - Configuración servidor SolarGuardX 200
  - Configuración GPS SolarGuardX 200
  - Comandos SMS SolarGuardX 200
  - Ajustes APN SolarGuardX 200
  - Configuración seguimiento de flotas
  - Configuración rastreador de contenedores
---

# TopFly - Configuración del SolarGuardX 200

Esta página documenta el contexto público de configuración para usar el TopFly SolarGuardX 200 con Plaspy. Reúne los ajustes prácticos necesarios para apuntar el equipo hacia Plaspy y resume los comandos y el flujo de trabajo publicados por el fabricante para el SolarGuardX 200. El objetivo es ayudar a instaladores, integradores y administradores de flotas a preparar este rastreador para su puesta en marcha en Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El SolarGuardX 200 admite reporte por SMS y por IP; los ejemplos de comandos SMS que aparecen a continuación muestran el método público proporcionado por el fabricante para ajustar la zona horaria, el APN, la dirección del servidor y el intervalo de reporte usando la contraseña por defecto del dispositivo.

## Resumen de configuración

Esta configuración prepara el SolarGuardX 200 para enviar ubicaciones y telemetría de eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. La meta es asegurarse de que el rastreador tenga el APN y los ajustes de servidor correctos, la selección de transporte adecuada y un intervalo de reporte acorde a sus necesidades de monitoreo, de modo que el dispositivo sea visible y gestionable en Plaspy.

- Configure el APN de la red y las credenciales para que el equipo pueda establecer GPRS o datos móviles.
- Apunte el rastreador a Plaspy configurando el dominio o la IP del servidor y el puerto requerido.
- Seleccione UDP o TCP si el dispositivo exige elección de transporte, en función de las limitaciones de la red.
- Ajuste el intervalo de reporte para que las posiciones y eventos lleguen con la cadencia que necesite.
- Valide la conectividad comprobando que el dispositivo aparece en Plaspy y envía los mensajes iniciales de posición y eventos.

## Ajustes del servidor de Plaspy

Al configurar el SolarGuardX 200 para Plaspy, utilice los siguientes ajustes públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP puede seleccionarse en el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y la detección de protocolo se realiza en el servidor para simplificar la configuración del equipo.

## Requisitos habituales antes de la configuración

- Batería cargada o alimentación externa para que el rastreador permanezca encendido durante la configuración.
- SIM válida con plan de datos y la información APN proporcionada por su operador móvil.
- Acceso al método de configuración del SolarGuardX 200 recomendado por el fabricante (SMS o herramienta del proveedor).
- Teléfono con capacidad SMS o herramienta de gestión si va a usar configuración por SMS como en los ejemplos.
- Cobertura de red en las bandas celulares soportadas por la SKU de su dispositivo.
- Contraseña por defecto del dispositivo (se muestra la contraseña por defecto del fabricante más abajo) o credenciales para autenticar los comandos de configuración.

## Cómo se conecta este rastreador a Plaspy

El SolarGuardX 200 envía ubicación y telemetría de eventos al endpoint y puerto compartidos de Plaspy para que su cuenta pueda mostrar ubicación en tiempo real y alertas. El rastreador puede transmitir eventos de bloqueo, manipulación y estado junto con actualizaciones periódicas de posición al endpoint configurado en Plaspy.

- El dispositivo inicia la conexión de datos hacia el servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Los informes de posición y las notificaciones de eventos se envían a Plaspy para su visualización, reglas y alertas.
- Plaspy detecta automáticamente el protocolo entrante y asocia el dispositivo con su cuenta una vez que comienza el reporte.
- El uso correcto de APN y credenciales de red asegura que el rastreador pueda alcanzar el endpoint de Plaspy mediante datos móviles.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante para el SolarGuardX 200 (comandos SMS, herramienta del proveedor o portal de configuración).
2. Ingrese el endpoint del servidor de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según lo permita la herramienta.
3. Ajuste el puerto a 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere elección explícita del transporte.
5. Configure el APN y las credenciales de red para que el equipo pueda registrarse en la red del operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios entren en vigor.
7. Valide que el rastreador informe a Plaspy confirmando que el dispositivo aparece en la plataforma y enviando una actualización de prueba o esperando el primer reporte de posición.

## Ejemplos de comandos de configuración

El SolarGuardX 200 admite configuración vía SMS usando la contraseña del dispositivo. Los comandos SMS públicos proporcionados por el fabricante que aparecen a continuación usan la contraseña por defecto 0000. Envíe cada comando como un SMS separado al número de teléfono del dispositivo. Preserve los marcadores de posición y reemplácelos con los valores de su operador donde se indique.

- Contraseña por defecto del dispositivo usada en estos comandos: 0000

1. Ajustar la zona horaria a UTC 0
```text
GMT,0000,0#
```

2. Configurar el APN del operador (reemplazar los marcadores de posición con los valores de su APN)
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} = APN de la red móvil
- {{apnu}} = nombre de usuario del APN si el operador lo requiere; si no, dejar vacío
- {{apnp}} = contraseña del APN si el operador lo requiere; si no, dejar vacío

3. Ajustar el servidor GPRS a Plaspy usando la IP y el puerto
```text
IP,0000,54.85.159.138 8888#
```
- Alternativamente, puede usar d.plaspy.com en herramientas del fabricante que acepten nombres de dominio.

4. Establecer intervalo de actualización de posición a 60 segundos
```text
TIMER,0000,60:60:0:0#
```
- Este ejemplo configura un intervalo periódico de reporte; consulte la documentación del dispositivo para formatos alternativos de temporizador.

Estos comandos se presentan en el formato público del fabricante. Si el firmware o la herramienta de su rastreador soportan nombres de dominio, puede ingresar d.plaspy.com en lugar de la dirección IP. Plaspy admite tanto UDP como TCP en el puerto 8888 y detectará automáticamente el protocolo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de SMS, la sintaxis de los comandos o los marcadores de posición admitidos; siempre verifique las notas de firmware del dispositivo.
- Si el equipo requiere elegir un transporte, pruebe tanto UDP como TCP para ajustar el comportamiento a la red y las reglas de cortafuegos.
- La configuración por SMS es comúnmente soportada por el SolarGuardX 200, pero también pueden estar disponibles herramientas del proveedor o métodos OTA que simplifican el aprovisionamiento masivo.
- La contraseña por defecto en los comandos públicos es 0000; cambie las credenciales del dispositivo después de la configuración siempre que sea posible para asegurar el equipo.
- Use los valores del servidor de Plaspy exactamente como se listan para garantizar que el dispositivo se conecte correctamente a Plaspy.

## Por qué usar Plaspy con esta configuración

Combinar el SolarGuardX 200 con Plaspy ofrece un camino sencillo para incorporar rastreo robusto y alimentado por energía solar a sus flujos de trabajo de flota o seguridad. Con el reporte de eventos de manipulación y bloqueo junto con actualizaciones fiables de GNSS, el dispositivo suministra a Plaspy la telemetría necesaria para alertas por geocerca, auditoría de rutas y monitoreo de seguridad.

Para saber más sobre cómo Plaspy puede centralizar el rastreo y las alertas de sus dispositivos SolarGuardX 200 visite https://www.plaspy.com. Para los detalles más recientes sobre configuración específica del dispositivo, notas de firmware y referencias oficiales de comandos, verifique la información en el sitio del fabricante https://www.topflytech.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
