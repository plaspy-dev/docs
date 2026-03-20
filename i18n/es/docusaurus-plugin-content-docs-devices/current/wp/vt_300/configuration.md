---
slug: /wp/vt_300/configuration
id: vt_300-configuration
sidebar_label: Configuration
title: WP - VT-300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el WP VT-300 y conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración WP VT 300
  - instalación WP VT 300
  - VT 300 Plaspy
  - configuración rastreador vehicular
  - configuración GPS Plaspy
  - configuración servidor WP VT 300
  - configuración software de seguimiento
  - integración GPS flotas
  - ajustes de red VT 300
  - detección protocolo de rastreador
---

# WP - VT-300 Configuración

Esta página ofrece contexto público sobre la configuración del rastreador GPS WP VT-300 para su uso con Plaspy. Documenta los ajustes de servidor compartidos que Plaspy requiere, describe el flujo de trabajo típico de configuración y destaca consideraciones prácticas para que el VT-300 sea visible y operativo en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante para el VT-300 pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. El WP VT-300 admite múltiples métodos de comunicación, incluyendo voz, datos CS, SMS, GPRS UDP/TCP en redes 2G y opciones 3G como Edge, UMTS y HSDPA; además soporta actualizaciones OTA de firmware y expansión de interfaces definidas por el usuario.

## Resumen de configuración

El objetivo del proceso de configuración es apuntar el VT-300 a Plaspy para que el dispositivo reporte ubicación y estado de forma fiable y quede visible en la plataforma. La configuración prepara el rastreador para la comunicación en red, asegura que se use el transporte y endpoint de servidor correctos, y valida que los mensajes lleguen a Plaspy.

- Configure el rastreador para que reporte al endpoint y puerto del servidor de Plaspy para que los paquetes de ubicación alcancen la plataforma.
- Seleccione el modo de transporte del dispositivo (UDP o TCP) cuando la interfaz de configuración del VT-300 lo requiera.
- Verifique la conectividad celular y el servicio de datos para que el reporte por GPRS o 3G funcione.
- Aplique y guarde los ajustes de configuración del fabricante y reinicie el equipo si así lo indica la documentación.
- Confirme el reporte validando que el dispositivo aparezca en Plaspy y que envíe actualizaciones periódicas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Una unidad WP VT-300 con alimentación instalada o accesible para su configuración.
- Una tarjeta SIM activa con plan de datos si va a usar reporte por GPRS o 3G.
- Acceso al método de configuración oficial del fabricante, como el software del proveedor, comandos SMS o herramienta de configuración OTA.
- Conocimientos básicos para elegir entre UDP o TCP según su red y la preferencia del instalador.
- Señal celular confiable en la ubicación de instalación para el uplink de datos.
- Credenciales o acceso a cualquier portal o aplicación de configuración del fabricante necesarias para guardar ajustes.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el VT-300 envía sus mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, decodificar y mostrar los datos del dispositivo. Plaspy gestiona la detección de protocolo, por lo que el servidor puede aceptar los formatos de mensaje comunes del VT-300 sobre el transporte configurado.

- El dispositivo se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888.
- Seleccione el transporte UDP o TCP en el VT-300 si la configuración exige una selección explícita.
- El VT-300 envía paquetes periódicos de posición y eventos según su lógica de reporte configurada.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para su visualización en la plataforma.
- Una configuración exitosa proporciona visibilidad casi en tiempo real, alertas de eventos y monitoreo operativo en Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del WP VT-300 suministrado por el fabricante, como el software del proveedor, el conjunto de comandos SMS o la interfaz de configuración OTA.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de host del servidor.
3. Establezca el puerto del servidor del dispositivo en 8888 para que coincida con los requisitos de Plaspy.
4. Elija el modo de transporte UDP o TCP si la configuración del VT-300 requiere una selección explícita.
5. Aplique o guarde la configuración usando la herramienta o la secuencia de comandos del fabricante.
6. Reinicie el VT-300 si la herramienta de configuración o el firmware requieren un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando las actualizaciones de posición y mensajes de estado entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VT-300 admite múltiples mecanismos de configuración y los comandos o pasos de menú exactos dependen de la herramienta del fabricante y de la versión del firmware. Dado que los comandos SMS del fabricante, los comandos seriales y las interfaces del software del proveedor varían según la versión, consulte la guía de configuración WP incluida con el dispositivo para la sintaxis exacta y los marcadores de posición que deba completar.

Si utiliza configuración basada en SMS, los flujos típicos incluyen reemplazar marcadores de posición como {{apn}} por los valores APN de su operador o proporcionar credenciales donde se requiera. Cuando el fabricante proporcione comandos de ejemplo, siga su orden y sintaxis exacta y conserve los marcadores de posición.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres exactos de los menús de configuración y la sintaxis requerida de los comandos. Verifique las notas de firmware antes de aplicar ajustes.
- TCP y UDP se comportan de manera diferente en redes celulares. Use UDP para reportes con menor sobrecarga y TCP cuando se prefiera entrega garantizada y comportamiento orientado a sesión.
- El VT-300 admite configuración OTA y actualizaciones de firmware cuando el proveedor lo soporta. OTA puede simplificar despliegues masivos, pero verifique la compatibilidad antes de actualizar en masa.
- La configuración por SMS suele estar disponible como alternativa en dispositivos que la soportan. Use comandos SMS solo si comprende el formato del comando y los marcadores de posición.
- Tenga en cuenta que el VT-300 dispone de una interfaz definida por el usuario (UDI) para expansión. Siga las indicaciones del fabricante al agregar o modificar interfaces externas que afecten el reporte.

## Por qué usar Plaspy con esta configuración

Utilizar el WP VT-300 con Plaspy ofrece a las organizaciones una forma directa de consolidar los datos de seguimiento de vehículos en una sola plataforma que acepta protocolos comunes de rastreadores. Las opciones de comunicación flexibles del VT-300 combinadas con el endpoint compartido de servidor de Plaspy y la detección automática de protocolos facilitan el despliegue del dispositivo y el inicio de la recepción de datos de ubicación y eventos sin necesidad de personalizar servidores por cada equipo.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el WP VT-300 visite https://www.plaspy.com. Dado que los pasos específicos de configuración del dispositivo, el comportamiento del firmware y la documentación del fabricante pueden cambiar con el tiempo, verifique los detalles más actuales de instalación y la sintaxis de comandos con el fabricante en http://www.wondeproud.com/ antes del despliegue.
