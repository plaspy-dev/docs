---
slug: /autoseeker/at_3/configuration
id: at_3-configuration
sidebar_label: Configuration
title: Autoseeker - AT-3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-3 para Plaspy, con ajustes de servidor, flujo de instalación y requisitos para rastreo de mascotas en vivo
keywords:
  - Configuración Autoseeker AT-3
  - Instalación Autoseeker AT-3
  - Autoseeker AT-3 Plaspy
  - Configuración rastreador GPS AT-3
  - Guía de configuración Autoseeker
  - Integración de dispositivos Plaspy
  - Configuración rastreador de mascotas
  - Instalación rastreador GPS para mascotas
  - Configuración de servidor Autoseeker
  - Configuración plataforma de rastreo
---

# Autoseeker - Configuración del AT-3

Esta página explica el contexto público de configuración para usar el Autoseeker AT-3, un rastreador GPS 4G para mascotas, con la plataforma Plaspy. Se centra en los ajustes de servidor y en los pasos prácticos relevantes para preparar un AT-3 para que informe ubicación y telemetría a Plaspy, permitiendo mapas en vivo, notificaciones y reproducción de historial.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siga las indicaciones aquí junto con la documentación de Autoseeker y las instrucciones de su proveedor.

## Resumen de la configuración

Preparar un AT-3 para Plaspy implica configurar el dispositivo para que envíe fixes GNSS y telemetría al punto de ingestión de Plaspy y validar que el equipo aparezca en la plataforma. El objetivo es un reporte periódico fiable para que Plaspy muestre ubicación en vivo, alertas e historial.

- Apunte el rastreador al endpoint de Plaspy y confirme el ajuste de transporte si es requerido.
- Asegúrese de que el dispositivo tenga conexión celular funcional y servicio de datos activo para las subidas periódicas.
- Guarde los ajustes y, si es necesario, reinicie el dispositivo para que tomen efecto los nuevos detalles del servidor.
- Verifique que el dispositivo envíe actualizaciones de posición y mensajes de estado que se reflejen en Plaspy.
- Confirme que las alertas como eventos de geocerca y notificaciones de batería baja se entreguen correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporta UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador al recibir datos
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de configurar

- Un AT-3 cargado, con batería activa y acceso físico al dispositivo para la configuración inicial.
- Una SIM con datos provisionada para uso en redes 4G compatibles y cobertura adecuada en su zona.
- El IMEI o número de serie del dispositivo disponible para registro y verificación en Plaspy.
- Acceso al método oficial de configuración Autoseeker o al software proporcionado por el fabricante o vendedor.
- Una cuenta en Plaspy y acceso a las funciones de registro o incorporación de dispositivos en la plataforma.
- Herramientas básicas de prueba como una geocerca temporal o una breve prueba de movimiento para validar el reporte después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT-3 transmite fixes de posición GNSS y telemetría de estado a través de la red celular hacia un endpoint de ingestión de Plaspy. Una vez configurado para apuntar a Plaspy, el rastreador usa el transporte y puerto establecidos para enviar mensajes que Plaspy ingiere y decodifica automáticamente.

- El rastreador envía mensajes de posición y estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el registro del dispositivo.
- Los datos reportados quedan visibles en Plaspy para mapas en vivo, notificaciones y reproducción histórica.
- Eventos como entrada o salida de geocerca o batería baja se reenvían al sistema de alertas de Plaspy cuando está configurado.

## Flujo común de configuración

1. Confirme que el AT-3 esté encendido, que la SIM esté instalada y activa, y que tenga a mano el IMEI o número de serie del equipo.
2. Acceda al método de configuración oficial de Autoseeker o al software que proporcione el fabricante o su proveedor.
3. En los ajustes de servidor del dispositivo, ingrese el dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
5. Elija UDP o TCP si el dispositivo solicita seleccionar un protocolo de transporte.
6. Aplique o guarde la configuración en la herramienta del fabricante y, si se requiere, reinicie el rastreador para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y el mapa en vivo para ver posiciones y mensajes de estado entrantes.

## Ejemplos de comandos de configuración

Los comandos exactos y el formato dependen de la herramienta de configuración Autoseeker, el firmware o el conjunto de comandos SMS que proporcione el fabricante. Como los métodos del fabricante varían, siga las instrucciones oficiales de Autoseeker o la herramienta del proveedor para establecer servidor y puerto. Plaspy acepta datos del dispositivo cuando está configurado para enviar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP.

Si recibe comandos públicos del fabricante destinados a la configuración del dispositivo, aplíquelos en el orden que especifique el fabricante y preserve los marcadores de posición como [apn] u otros según lo requiera el equipo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús, la sintaxis de los comandos SMS o la secuencia de configuración. Siempre concuerde las instrucciones con la revisión de firmware del dispositivo.
- La elección de UDP o TCP puede afectar las características de entrega. UDP suele ser más liviano mientras que TCP asegura la entrega; use la opción que mejor se adapte a su red y a la guía del dispositivo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que no necesita variar puertos al añadir múltiples rastreadores a la plataforma.
- Si utiliza SMS o software del proveedor para configurar el AT-3, asegúrese de que los comandos hagan referencia exactamente a d.plaspy.com o a 54.85.159.138 y al puerto 8888.
- Después de la configuración, realice una prueba breve en vivo (mueva el dispositivo o active un evento de estado) para confirmar que el equipo aparece en Plaspy y que las alertas se entregan.

## Por qué usar Plaspy con esta configuración

Integrar el Autoseeker AT-3 con Plaspy ofrece una vía sencilla hacia el rastreo centralizado de mascotas, alertas y reproducción histórica. Para propietarios, refugios y operaciones de cuidado animal, esta configuración convierte la ubicación y telemetría del dispositivo en información útil mediante mapas en vivo, notificaciones de geocerca y revisión de rutas históricas.

Para saber más sobre Plaspy y cómo maneja la conectividad de dispositivos y las alertas visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware e instrucciones del fabricante consulte https://autoseekergps.com/.
