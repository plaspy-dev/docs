---
slug: /navtelekom/smart_s_2437/configuration
id: smart_s_2437-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2437 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Navtelekom СМАРТ S-2437 con ajustes de Plaspy y pasos prácticos para rastreo de flotas fiable
keywords:
  - Configuración Navtelekom СМАРТ S-2437
  - Configuración S-2437 Plaspy Navtelekom
  - Configuración rastreador GPS S-2437
  - Rastreador Navtelekom Plaspy
  - Configuración rastreador de vehículo
  - Configuración gestión de flotas rastreador
  - Configuración rastreador GLONASS GPS
  - Ajustes servidor S-2437
  - Configuración protocolo de rastreador
  - Configuración NTC Configurator
---

# Navtelekom - Configuración del СМАРТ S-2437

Esta página describe el contexto público de configuración para usar el Navtelekom СМАРТ S-2437 con Plaspy. Resume los ajustes públicos del servidor Plaspy, el flujo práctico de configuración y los prerrequisitos habituales que instaladores e integradores deben confirmar antes de conectar este rastreador vehicular GLONASS/GPS a la plataforma Plaspy.

Plaspy utiliza endpoints de servidor compartidos y un puerto uniforme para los dispositivos compatibles y detecta el protocolo del rastreador automáticamente. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice, por lo que la guía a continuación se centra en los valores públicos y el proceso práctico necesario para conectar el S-2437 a Plaspy.

## Resumen de la configuración

Este proceso prepara al S-2437 para enviar de manera confiable posiciones GNSS y telemetría de vehículo a Plaspy, de modo que los dispositivos aparezcan y reporten correctamente en la plataforma. El objetivo es configurar el endpoint de red del rastreador, verificar la conectividad celular y confirmar que Plaspy reciba el primer mensaje de posición y telemetría.

- Configure el dispositivo para que reporte al endpoint y puerto compartidos de Plaspy usados por todos los dispositivos.
- Asegúrese de que el dispositivo tenga conectividad celular activa con una SIM adecuada y el APN configurado correctamente.
- Seleccione el protocolo de transporte requerido por su firmware y guarde los ajustes de servidor y puerto.
- Verifique que el dispositivo aparezca en Plaspy y que envíe ubicación y telemetría CAN según lo esperado.
- Use Bluetooth o las herramientas del fabricante para la configuración local y DRC para gestión remota de firmware o aprovisionamiento masivo cuando esté disponible.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Estos valores son los ajustes públicos del endpoint de Plaspy usados para recibir telemetría y datos GPS del S-2437. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del dispositivo de forma automática.

## Requisitos típicos antes de la instalación

- Encienda el dispositivo y confirme que la batería interna esté cargada o que la alimentación del vehículo esté conectada.
- Debe existir conectividad Dual SIM 2G y al menos una SIM debe tener un plan de datos y el APN correcto para su operador.
- Tenga a mano herramientas de configuración local como Bluetooth y NTC Configurator si planea ajustar parámetros in situ.
- Acceso al método de configuración oficial de Navtelekom o al software del proveedor y a la documentación del S-2437.
- Una cuenta en Plaspy o un flujo de aprovisionamiento para confirmar que el dispositivo es visible después de la configuración.
- Acceso opcional al sistema de gestión remota DRC para actualizaciones OTA y aprovisionamiento de flotas si se utiliza en su despliegue.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el СМАРТ S-2437 envía fijaciones GNSS y telemetría del vehículo a Plaspy reportando al endpoint y puerto compartidos de Plaspy. Plaspy recibe actualizaciones de ubicación y mensajes de evento, correlaciona datos de bus CAN y sensores, y muestra esos registros en paneles y reportes.

- El rastreador envía las posiciones GLONASS/GPS a d.plaspy.com en el puerto 8888 utilizando UDP o TCP según la selección.
- La telemetría del bus CAN y las entradas de sensores se empaquetan y envían al mismo endpoint de Plaspy para que el diagnóstico vehicular esté disponible en la plataforma.
- Entradas digitales, eventos de alarma y cambios de estado en salidas programables se reportan a Plaspy para alertas y automatizaciones.
- La conectividad celular Dual SIM mantiene el enlace ascendente y ayuda a preservar la continuidad de la telemetría en áreas con cobertura variable.
- Bluetooth se utiliza para la configuración local pero no para el reporte directo a Plaspy; la gestión remota se realiza mediante firmware y herramientas de aprovisionamiento en red.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial de Navtelekom, como NTC Configurator o la herramienta proporcionada por el proveedor, o utilice el aprovisionamiento local por Bluetooth si está soportado.
2. En los ajustes de servidor introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 como endpoint.
3. Establezca el puerto del dispositivo en 8888, tomando en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere una selección de transporte.
5. Configure el APN de la SIM y los parámetros celulares según sea necesario para que el rastreador tenga conectividad de datos activa.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la recepción de una primera posición o paquete de telemetría en la plataforma.

## Ejemplos de comandos de configuración

El S-2437 puede configurarse usando herramientas Navtelekom o mediante configuración por Bluetooth. La sintaxis exacta de comandos y los comandos por SMS o serie pueden variar según el firmware y la herramienta. Debido a las diferencias en los métodos de configuración del fabricante, consulte el manual del usuario de Navtelekom o el NTC Configurator para formatos de comando y ejemplos específicos del dispositivo.

Si utiliza una configuración basada en SMS o comandos de texto directo proporcionados por Navtelekom, siga la documentación del fabricante para la estructura correcta de los comandos y los marcadores. Plaspy requiere que el host del servidor esté establecido en d.plaspy.com o 54.85.159.138 y el puerto 8888 en la configuración del dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de los ajustes en el configurador y si la selección de transporte es necesaria. Siempre anote la versión de firmware antes de realizar cambios.
- Elija UDP o TCP según la guía del firmware del dispositivo y el entorno de red local. Plaspy detectará el protocolo automáticamente una vez que reciba datos.
- Confirme los ajustes del APN, usuario y contraseña con su operador si el dispositivo requiere configuración APN para acceder a datos celulares.
- Use Bluetooth y el NTC Configurator para el ajuste in situ de parámetros, y DRC para gestión remota de firmware y aprovisionamiento de flotas cuando esté disponible.
- Dado que Plaspy utiliza un solo puerto para todos los dispositivos, asegúrese de que el puerto no esté bloqueado por firewalls intermedios o NAT del operador.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СМАРТ S-2437 con Plaspy ofrece a las flotas una forma práctica de combinar posicionamiento GNSS robusto, telemetría del bus CAN y eventos I/O en una única plataforma telemática. La detección automática de protocolo de Plaspy y el endpoint compartido simplifican los despliegues a gran escala al reducir la variación de endpoints por dispositivo y permitir una ingestión consistente de ubicación y telemetría vehicular.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer instructions confirm the current Navtelekom documentation at https://www.navtelecom.ru/ which may include important updates to setup methods and tools.
