---
slug: /gotop/g60/configuration
id: g60-configuration
sidebar_label: Configuration
title: GOTOP - G60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP G60 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración GOTOP G60
  - Configuración G60
  - GOTOP G60 Plaspy
  - Configuración GPS G60
  - Configuración dispositivo GOTOP
  - Configuración SMS GOTOP G60
  - Configuración GPRS GOTOP G60
  - Configuración rastreador de activos GOTOP
  - Configuración servidor GOTOP G60
  - Configuración seguimiento GOTOP G60
---

# GOTOP - Configuración del G60

Esta página ofrece el contexto público de configuración para utilizar el rastreador GOTOP G60 con Plaspy. Resume los ajustes de servidor compartido de Plaspy que debe aplicar en el equipo, describe los flujos de trabajo habituales de configuración y destaca qué verificar antes de agregar el G60 a su flota en Plaspy. La orientación está enfocada en los puntos de integración públicos y en los pasos prácticos para la conectividad mediante SMS o GPRS.

Plaspy utiliza el mismo endpoint de servidor y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración por parte del fabricante para el G60 pueden variar según la versión de firmware, lote de hardware, tipo de instalación y herramientas del proveedor, por lo que las instrucciones a continuación constituyen una guía práctica pública y no reemplazan la documentación oficial de GOTOP.

## Resumen de configuración

Preparar el G60 para Plaspy implica confirmar que el dispositivo puede alcanzar el servidor de Plaspy y que los ajustes de reporte coinciden con el endpoint y el medio de transporte de la plataforma. El objetivo es configurar el rastreador para que Plaspy reciba actualizaciones regulares de ubicación, alarmas e informes de estado sin modificar el hardware del equipo.

- Direccione el rastreador al endpoint de Plaspy y configure el puerto compartido para que el dispositivo envíe reportes por GPRS.
- Establezca el transporte en UDP o TCP según la interfaz del equipo o la herramienta del fabricante.
- Active los intervalos de reporte y los disparadores de alarma para que evento de movimiento, vibración y batería baja generen mensajes hacia Plaspy.
- Valide la conectividad desde campo confirmando que el dispositivo aparezca en Plaspy y envíe su primera telemetría.
- Use consultas vía SMS para diagnóstico remoto si la configuración GPRS o la cobertura requieren resolución de problemas.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Un GOTOP G60 con batería cargada y encendido, listo para configuración e instalación
- Una tarjeta SIM provisionada para datos y SMS según se requiera para reportes por GPRS o SMS
- Acceso al método o software oficial de configuración GOTOP y al conjunto de comandos SMS necesarios
- Los datos APN de su operador móvil si va a usar reportes por GPRS
- Una cuenta en Plaspy con la información de provisión del dispositivo disponible para vincular IMEI o ID de dispositivo
- Un plan para la colocación inicial y las pruebas que permita verificar calidad de señal y reporte

## Cómo se conecta este rastreador a Plaspy

El G60 envía mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy usando GPRS como canal principal de reporte y SMS como respaldo o vía de gestión remota. Una vez configurado el dispositivo hacia el endpoint de Plaspy, la plataforma ingiere la telemetría y la pone a disposición en paneles e flujos de alertas.

- Los reportes se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse en UDP o TCP según las opciones del dispositivo y las condiciones locales
- Plaspy detecta automáticamente el protocolo del equipo, por lo que se utiliza el mismo puerto para todos los rastreadores compatibles
- Los mensajes de evento, como vibración, movimiento y batería baja, se reenvían a Plaspy para alertas
- Las consultas remotas de parámetros vía SMS permiten verificar la configuración y la versión de firmware

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración GOTOP suministrado por el fabricante o el distribuidor.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o utilice la IP 54.85.159.138 si la herramienta requiere una dirección IP.
3. Configure el puerto del servidor en 8888 para todos los dispositivos Plaspy.
4. Elija UDP o TCP como transporte si el equipo exige la selección explícita.
5. Configure el APN y los ajustes de la SIM para reportes por GPRS si se utilizará transmisión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo cuando la herramienta o el manual lo indiquen.
7. Valide que el rastreador reporte a Plaspy comprobando la visibilidad del dispositivo y la recepción del primer mensaje de telemetría en su cuenta o tablero de Plaspy.

## Ejemplos de comandos de configuración

El G60 puede configurarse mediante las herramientas del fabricante o por comandos SMS según el firmware y el contexto de instalación. Los comandos exactos, la sintaxis y los parámetros disponibles varían según el firmware GOTOP y el conjunto de herramientas del proveedor, por lo que debe consultar el manual oficial de configuración de GOTOP para plantillas y ejemplos precisos. Si prefiere configurar por SMS, revise la lista de comandos GOTOP para usar los tokens y respuestas adecuadas.

## Notas de configuración

- Las variaciones de firmware pueden modificar la sintaxis exacta de los comandos SMS, los parámetros disponibles y el comportamiento por defecto de fábrica. Confirme las instrucciones específicas del firmware antes de aplicar configuraciones masivas.
- Cuando utilice reportes por GPRS, asegúrese de que los valores APN estén correctamente configurados para el operador de la SIM. APN, usuario APN y contraseña APN son campos habitualmente requeridos en las herramientas del fabricante.
- UDP suele ser más simple para reportes de rastreadores y está ampliamente soportado, mientras que TCP puede ofrecer confirmación de entrega en ciertas condiciones de red. Elija el transporte según el soporte del dispositivo y el comportamiento de la red.
- Use consultas remotas por SMS si GPRS no está disponible o cuando necesite confirmar parámetros del equipo y versiones de firmware en campo.
- Dado que Plaspy utiliza un único puerto compartido y detección automática de protocolos, solo necesita configurar el endpoint y el puerto de Plaspy en el dispositivo; Plaspy se encargará del reconocimiento del protocolo.

## Por qué usar Plaspy con esta configuración

Emparejar el GOTOP G60 con Plaspy ofrece una solución práctica para equipos de logística que requieren rastreo de larga autonomía y opciones de montaje discreto. Con GPRS como vía principal de reporte y SMS para consultas remotas, el G60 puede entregar actualizaciones continuas de ubicación y alertas de eventos en Plaspy para visibilidad de rutas, monitoreo de activos y flujos de alarma.

To learn more about Plaspy and how your fleet or assets can be managed on the platform visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer documentation for the GOTOP G60 please verify details on the official GOTOP site https://www.gotop.cc/ as setup steps and firmware behavior can change over time.
