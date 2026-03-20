---
slug: /astra_telematics/at405/configuration
id: at405-configuration
sidebar_label: Configuration
title: Astra Telematics - AT405 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Astra Telematics AT405 con Plaspy, incluyendo ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Astra Telematics AT405
  - configuración AT405
  - configuración Astra Telematics
  - configuración AT405 para Plaspy
  - configuración de servidor AT405
  - configuración de plataforma GPS AT405
  - configuración de software de rastreo AT405
  - configuración de dispositivo para Plaspy
  - rastreo vehicular AT405
  - configuración SMS AT405
---

# Astra Telematics - Configuración del AT405

Esta página reúne la información pública necesaria para configurar el Astra Telematics AT405 para su uso con Plaspy. Incluye los ajustes del servidor que usa Plaspy, el flujo práctico de configuración y ejemplos de comandos SMS que se usan habitualmente para apuntar un AT405 a Plaspy. Use esta guía para preparar el dispositivo para comunicarse con Plaspy y validar la conectividad básica tras la instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en lado del fabricante y las herramientas disponibles pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las utilidades del proveedor. El AT405 admite comandos de configuración vía SMS en muchas versiones de firmware; esta página incluye ejemplos públicos de comandos SMS cuando aplica.

## Resumen de configuración

Configurar el AT405 para Plaspy consiste principalmente en asegurarse de que el dispositivo pueda alcanzar el endpoint del servidor de Plaspy y transmitir sus datos GNSS y telemetría de forma fiable. La puesta en marcha práctica se centra en definir el APN del operador y el endpoint del servidor, confirmar los ajustes de transporte y validar que el dispositivo aparezca en Plaspy.

- Configure el APN del operador para que el dispositivo se registre en la red celular y pueda usar GPRS.
- Establezca el servidor GPRS en el endpoint de Plaspy (d.plaspy.com o la IP de Plaspy) y configure el puerto compartido de Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo solicita elegir transporte.
- Guarde y aplique la configuración, luego valide que el dispositivo sea visible y esté reportando en Plaspy.
- Si prefiere configurar el equipo mediante SMS del fabricante, utilice los comandos de ejemplo que aparecen más abajo.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos compatibles con Plaspy usan el mismo puerto y la plataforma detectará el protocolo que emplea el rastreador en cuanto comience a enviar datos al servidor.

## Requisitos previos habituales

- El dispositivo está alimentado e instalado correctamente según la guía de instalación del AT405.
- Una SIM celular válida con datos habilitados y la información APN correcta del operador.
- Capacidad para enviar SMS al dispositivo si va a usar comandos de configuración vía SMS.
- Acceso al método oficial de configuración de Astra Telematics o al software correspondiente para la versión de firmware y revisión de hardware del dispositivo.
- Cobertura de red y conectividad GPRS/LTE en el lugar de instalación.
- Una cuenta en Plaspy o acceso organizacional a la plataforma Plaspy para verificar que el dispositivo aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT405 transmite la ubicación GNSS y la telemetría disponible por la red celular al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los datos entrantes del dispositivo, identifica automáticamente el protocolo y muestra el dispositivo en el panel de Plaspy para monitoreo y alertas.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El AT405 puede usar transporte UDP o TCP para enviar datos a Plaspy según el firmware y la selección realizada.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.
- Los datos enviados a Plaspy incluyen ubicación y estado del dispositivo para monitoreo, almacenamiento histórico y uso en alertas.
- Tras la configuración, confirme la visibilidad del dispositivo y la telemetría reciente en Plaspy para validar la conexión.

## Procedimiento típico de configuración

1. Acceda al método oficial de configuración de Astra Telematics o al software para el AT405 (guía web del fabricante, comandos SMS o herramienta del proveedor) correspondiente a su firmware.
2. Introduzca el endpoint del servidor de Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
3. Ajuste el puerto del servidor a 8888, que es el puerto compartido que utiliza Plaspy para todos los dispositivos.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su preferencia de instalación o las características de la red.
5. Configure el APN del operador y, donde sea necesario, el usuario y contraseña del APN para que el dispositivo pueda establecer una sesión de datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el dispositivo lo requieren.
7. Valide que el AT405 reporte a Plaspy comprobando la presencia del equipo y la telemetría reciente en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El AT405 admite configuración vía SMS en muchas versiones de firmware. Los siguientes comandos son ejemplos públicos en formato SMS que se usan comúnmente para establecer el APN y los ajustes del servidor Plaspy. Envíe cada comando como un SMS separado al número del dispositivo desde un número autorizado.

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operador)
```text
$APAD,{{apn}}
```

- (Opcional) Establecer el usuario del APN si su operador lo requiere (reemplace {{apnu}} por el usuario del APN)
```text
$APUN,{{apnu}}
```

- (Opcional) Establecer la contraseña del APN si su operador lo requiere (reemplace {{apnp}} por la contraseña del APN)
```text
$APPW,{{apnp}}
```

- Establecer el servidor GPRS a la IP de Plaspy
```text
$IPAD,54.85.159.138
```

- Establecer el puerto del servidor al puerto compartido de Plaspy
```text
$PORT,8888
```

Notas sobre los marcadores:
- {{apn}} es la cadena APN de su operador móvil.
- {{apnu}} es el usuario del APN si el operador lo solicita.
- {{apnp}} es la contraseña del APN si el operador lo solicita.

Envíe los comandos opcionales de usuario y contraseña del APN solo si su operador exige autenticación. Tras enviar estos SMS, aplique/guarde los ajustes y reinicie el AT405 si el firmware del dispositivo lo recomienda.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el soporte exacto de comandos SMS, la sintaxis o el orden requerido; confirme con las notas de la versión del firmware del dispositivo.
- La configuración por SMS es un método público común para este modelo, pero los fabricantes también proporcionan herramientas de software y utilidades de configuración; use el método apropiado para su instalación.
- Elija UDP o TCP según las características de la red; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Todos los dispositivos Plaspy usan el mismo puerto y la plataforma realiza la detección automática del protocolo cuando el dispositivo se conecta.
- Verifique los detalles del APN con su operador móvil antes de configurar para evitar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Combinar el Astra Telematics AT405 con Plaspy ofrece una forma directa de recopilar ubicación en tiempo real, estado y telemetría de vehículos para monitoreo, alertas e informes históricos. La conectividad celular del AT405 y sus interfaces de telemetría lo hacen práctico para operadores de flotas que necesitan visibilidad constante y control remoto dentro de la plataforma Plaspy.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona las conexiones y los datos de los dispositivos, visite https://www.plaspy.com. Para instrucciones específicas más recientes, comportamiento de firmware y orientación del fabricante, consulte el sitio de Astra Telematics https://astratelematics.com/.
