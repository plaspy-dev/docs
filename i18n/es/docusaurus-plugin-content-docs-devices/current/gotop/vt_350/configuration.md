---
slug: /gotop/vt_350/configuration
id: vt_350-configuration
sidebar_label: Configuration
title: GOTOP - VT-350 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP VT-350 con ajustes de servidor Plaspy y pasos prácticos para seguimiento OBD II
keywords:
  - configuración GOTOP VT-350
  - instalación GOTOP VT-350
  - configuración servidor VT-350
  - configuración VT-350 Plaspy
  - configuración rastreador GPS GOTOP
  - configuración rastreador OBD II
  - configuración seguimiento de vehículos
  - compatibilidad rastreador GPS Plaspy
  - configuración rastreador gestión de flotas
  - configuración plataforma VT 350
---

# GOTOP - Configuración del VT-350

Esta página explica el contexto público de configuración para usar el rastreador OBD GOTOP VT-350 con Plaspy. Describe los ajustes de servidor compartidos y los pasos prácticos necesarios para apuntar el VT-350 a la plataforma Plaspy, de modo que el dispositivo pueda reportar ubicación y estado. El VT-350 es un rastreador tipo OBD II que se conecta al puerto del vehículo, con antenas GSM y GPS integradas, y que soporta reportes por SMS y GPRS, entregando datos como latitud, longitud, velocidad, rumbo y odómetro cuando está configurado.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos de configuración por parte del fabricante para el VT-350 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor. Utilice esta guía para entender los ajustes del lado de Plaspy y el flujo de trabajo típico; siempre verifique los menús específicos del dispositivo y los comandos SMS con la documentación de GOTOP o las herramientas del vendedor.

## Resumen de configuración

Preparar un VT-350 para Plaspy implica configurar el destino de reporte en la red y verificar que el dispositivo pueda enviar datos GPS y eventos a través de GSM GPRS. El objetivo es asegurar que el rastreador reporte de forma fiable al endpoint de Plaspy para que el dispositivo aparezca en su cuenta Plaspy y brinde las funciones de seguimiento y alertas esperadas.

- Apunte el servidor de reporte del VT-350 a Plaspy usando el dominio o la IP proporcionados para que los datos lleguen al endpoint correcto.
- Seleccione la opción de transporte que soporte su firmware, UDP o TCP, y configure el dispositivo para usar el puerto 8888.
- Confirme la conectividad GPRS y los ajustes APN cuando aplique, para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Valide que el dispositivo envíe mensajes de posición y eventos y que Plaspy detecte automáticamente el protocolo del rastreador.
- Pruebe el rastreo mediante comandos y con reportes periódicos para confirmar la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores exactos son los utilizados por Plaspy para todos los dispositivos soportados. Plaspy emplea el mismo puerto para todos los equipos y realiza detección automática del protocolo, por lo que normalmente solo necesita apuntar el rastreador a d.plaspy.com o a la IP indicada y seleccionar el transporte si el dispositivo lo requiere.

## Requisitos previos típicos

- Confirme que el VT-350 esté insertado en un puerto OBD II compatible del vehículo y que reciba alimentación del vehículo.
- Asegúrese de contar con una tarjeta SIM válida con datos y los ajustes APN correctos para GPRS si va a usar reporte por datos.
- Tenga acceso al método de configuración GOTOP para su unidad, ya sea comandos SMS, software del fabricante o una herramienta de configuración del distribuidor.
- Verifique que el firmware del rastreador permita configuración remota y que pueda cambiar el dominio IP del servidor y los ajustes de transporte.
- Mantenga el vehículo estacionado y con buena visibilidad del cielo durante la primera fijación GPS y las pruebas de conexión iniciales.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el VT-350 establece una sesión de datos GPRS y envía sus mensajes de reporte al endpoint del servidor Plaspy, donde la plataforma detectará y decodificará el protocolo del dispositivo. Esto permite que las actualizaciones de ubicación en tiempo real, las alertas y la telemática básica sean visibles en Plaspy una vez que el dispositivo esté registrado correctamente en la cuenta.

- El dispositivo se apunta a d.plaspy.com o a 54.85.159.138 para que los mensajes lleguen al servidor Plaspy.
- El transporte se configura en UDP o TCP según sea necesario; ambos son compatibles y el dispositivo debe usar el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en el servidor.
- Los mensajes del rastreador incluyen reportes de ubicación y eventos que Plaspy procesa para mostrarlos en la plataforma.
- Tras una configuración exitosa, el dispositivo reportará bajo demanda o según el intervalo configurado y aparecerá en Plaspy para su monitoreo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP para su VT-350, por ejemplo, comandos SMS, la utilidad de configuración del fabricante o el software del distribuidor.
2. Ingrese d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de configuración de servidor del dispositivo según la herramienta del fabricante.
3. Configure el puerto del dispositivo en 8888, que es el puerto que usa Plaspy para todos los equipos.
4. Si el rastreador solicita selección de transporte, elija UDP o TCP según su despliegue o la opción de firmware.
5. Configure los parámetros APN o GPRS requeridos para que el VT-350 pueda abrir una conexión de datos a Internet.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del equipo lo exige.
7. Valide que el VT-350 reporte a Plaspy verificando la primera posición o enviando un comando de tracking y confirmando la visibilidad en Plaspy.

## Ejemplos de comandos de configuración

No se incluyen comandos públicos del proveedor para el VT-350 en esta guía. Los comandos exactos de configuración y los formatos SMS para los dispositivos GOTOP varían según el firmware y la herramienta del fabricante. En general, cuando use SMS o una herramienta de configuración, establecerá el destino de Plaspy en los campos que proporciona el fabricante de la siguiente manera:

- Dominio o IP del servidor: d.plaspy.com o 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP si el dispositivo requiere selección

Si obtiene la sintaxis oficial de comandos SMS de GOTOP o de su proveedor, siga su orden y formato exactamente. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte al servidor y puerto configurados.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la disposición de los menús, los formatos de comandos SMS y si el dispositivo requiere entrada por IP o por dominio; consulte la documentación de GOTOP para los comandos exactos.
- Elija UDP o TCP según la opción del dispositivo y el entorno de la red; ambos transportes son compatibles con Plaspy en el puerto 8888, pero el comportamiento puede variar según las redes móviles.
- Si utiliza configuración por SMS para la puesta en marcha inicial, tenga a la mano el número telefónico y el formato de comandos proporcionados por GOTOP; la configuración vía SMS se usa a menudo cuando no hay una utilidad de configuración disponible.
- Verifique los ajustes APN con el proveedor de la SIM y actualícelos en el dispositivo antes de probar el reporte por GPRS a Plaspy.
- Siempre pruebe el dispositivo en un entorno controlado para confirmar que se registre en Plaspy y entregue los datos GPS y de alerta esperados.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-350 con Plaspy ofrece una manera práctica de obtener visibilidad sobre la ubicación, el movimiento y telemática básica del vehículo aprovechando el factor de forma OBD II del rastreador y su reporte por GSM GPRS. Apuntar el VT-350 a Plaspy en d.plaspy.com o en 54.85.159.138 usando el puerto 8888 permite que la plataforma detecte automáticamente el protocolo del dispositivo y muestre la posición y los datos de eventos en la vista de su flota.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los últimos comandos específicos del dispositivo, notas de firmware e instrucciones del fabricante verifique la documentación del VT-350 en https://www.gotop.cc/.
