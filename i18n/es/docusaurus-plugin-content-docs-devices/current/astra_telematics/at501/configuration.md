---
slug: /astra_telematics/at501/configuration
id: at501-configuration
sidebar_label: Configuration
title: Astra Telematics - AT501 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Astra Telematics AT501 para apuntar al servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Astra Telematics AT501
  - AT501 configuración
  - configuración AT501 para Plaspy
  - configuración de servidor Astra AT501
  - configuración rastreador GPS AT501
  - integración AT501 Plaspy
  - guía configuración rastreador de activos
  - seguimiento de activos AT501
  - configuración SMS AT501
  - aprovisionamiento BLE AT501
---

# Astra Telematics - AT501 Configuración

Esta página describe el contexto público de configuración para usar el Astra Telematics AT501 Mini Asset Tracker con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, detalla los pasos prácticos de preparación y muestra ejemplos de comandos SMS que se usan públicamente para apuntar un AT501 a Plaspy. Use esta guía para preparar el dispositivo antes de registrarlo y para que sea visible en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT501 soporta canales de aprovisionamiento locales como BLE y métodos de configuración del fabricante, y también puede configurarse mediante comandos SMS como se muestra a continuación.

## Resumen de la configuración

Preparar el AT501 para Plaspy implica indicarle al dispositivo qué APN usar para datos celulares y qué servidor y puerto usar para enviar la telemetría. El objetivo práctico es asegurar que el rastreador pueda establecer un enlace GPRS/LTE y reportar posición y eventos de forma fiable a Plaspy.

- Configure el APN del equipo y, opcionalmente, las credenciales APN para que acceda a la red celular.
- Apunte el equipo al endpoint del servidor de Plaspy y confirme el puerto y el tipo de transporte.
- Valide la conectividad desde el rastreador hacia Plaspy y confirme que el dispositivo aparece en la plataforma.
- Use aprovisionamiento por BLE o por SMS para la configuración en sitio según las herramientas del instalador y el firmware.
- Pruebe el envío de eventos y de reportes por movimiento para verificar que los mensajes programados y los disparados por el acelerómetro llegan a Plaspy.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto usado por el rastreador.

## Requisitos típicos antes de la configuración

- Un AT501 alimentado con la batería reemplazable cargada o instalada y acceso físico al equipo para el aprovisionamiento.
- Una conexión celular válida para el dispositivo usando su eSIM o la suscripción del operador y los ajustes APN correctos.
- Acceso al método de configuración del fabricante que vaya a utilizar, como las herramientas de aprovisionamiento BLE o la configuración por SMS.
- Un teléfono o herramienta capaz de enviar SMS al número del dispositivo si opta por la provisión vía SMS.
- Documentación de la revisión de firmware y hardware del equipo para seguir las instrucciones y comandos adecuados del fabricante.
- Confirmación de los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) antes de guardar la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT501 envía uplinks programados y basados en eventos a través de su conexión celular hacia el endpoint del servidor Plaspy. Una vez configurado para Plaspy, el dispositivo reportará ubicación y telemetría al endpoint compartido de Plaspy y aparecerá en la plataforma para monitoreo y alertas.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador o las opciones del firmware; Plaspy aceptará cualquiera de los dos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará los mensajes apropiados del AT501.
- Los reportes incluyen actualizaciones de posición programadas y telemetría por eventos como alertas de movimiento disparadas por el acelerómetro.
- La configuración exitosa se valida confirmando que el dispositivo aparece y reporta en la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el AT501, como las herramientas de aprovisionamiento por BLE o el método de configuración por SMS descrito en la documentación del fabricante.
2. Ingrese la dirección del servidor Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en la pantalla de ajustes de servidor o GPRS.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP como transporte si el equipo requiere seleccionar el protocolo para los uplinks.
5. Configure el APN y, opcionalmente, usuario y contraseña del APN para que el rastreador pueda establecer la conectividad de datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y la llegada de telemetría en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El AT501 admite configuración vía SMS usando los siguientes comandos de documentación pública. Envíe estos comandos como mensajes de texto al número del dispositivo en el orden requerido por su proceso de configuración. Los marcadores de posición se mantienen y deben reemplazarse por los valores de APN y credenciales de su operador.

- Configurar el APN del operador
```text
$APAD,[apn]
```
Reemplace [apn] por el APN de su operador celular. Este comando configura el APN de datos del dispositivo.

- Configurar el usuario del APN (opcional)
```text
$APUN,[apnu]
```
Reemplace [apnu] por el usuario del APN si su operador lo requiere. Omitir si no es necesario.

- Configurar la contraseña del APN (opcional)
```text
$APPW,[apnp]
```
Reemplace [apnp] por la contraseña del APN si su operador lo requiere. Omitir si no es necesario.

- Configurar el servidor GPRS a Plaspy por IP
```text
$IPAD,54.85.159.138
```
Esto apunta el rastreador directamente a la IP del servidor Plaspy. Alternativamente, use el dominio d.plaspy.com en su herramienta del fabricante si admite nombres de dominio.

- Configurar el puerto del servidor para Plaspy
```text
$PORT,8888
```
Todos los equipos que usan Plaspy emplean el puerto 8888. Configure este puerto independientemente de la elección de transporte.

Notas sobre los marcadores de posición
- [apn] es el nombre del punto de acceso (APN) para la SIM de su operador.
- [apnu] y [apnp] son valores opcionales de usuario y contraseña del APN utilizados por algunos operadores.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando o los procedimientos de aprovisionamiento; confirme siempre la documentación del proveedor del AT501 antes de aplicar comandos.
- El equipo soporta tanto opciones de transporte UDP como TCP; elija el transporte recomendado por su despliegue y firmware. Plaspy acepta ambos y detecta el protocolo automáticamente.
- La configuración por SMS es una opción pública soportada mostrada aquí, pero muchos instaladores preferirán BLE o el software del proveedor para aprovisionamiento masivo y diagnósticos.
- Al usar el dominio d.plaspy.com, algunas herramientas prefieren la IP 54.85.159.138; ambos son soportados públicamente por Plaspy.
- Aplique la configuración y luego valide la llegada de reportes en Plaspy para asegurarse de que el rastreador es visible y que la telemetría llega según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar el AT501 con Plaspy ofrece a las organizaciones un método práctico para recopilar telemetría de activos a largo plazo y recibir alertas basadas en movimiento sin mantenimiento frecuente. El diseño de bajo consumo del AT501, su reporte por eventos y su uplink celular multinetwork, combinados con el endpoint compartido de Plaspy, proporcionan un flujo de datos consistente para la visibilidad de activos y los flujos de trabajo de gestión de flotas.

Learn more about Plaspy and how it integrates with supported trackers by visiting https://www.plaspy.com. Please verify the latest AT501 configuration methods, firmware behavior, and manufacturer instructions at the Astra Telematics website https://astratelematics.com/ since device specific steps and commands can change over time.
