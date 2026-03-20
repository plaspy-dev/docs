---
slug: /reachfar/rf_v11/configuration
id: rf_v11-configuration
sidebar_label: Configuration
title: Reachfar - RF-V11 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Reachfar RF V11 para seguimiento centralizado y reenvío de alarmas en Plaspy con ajustes de servidor compartidos y guía práctica
keywords:
  - Configuración Reachfar RF V11
  - Instalación Reachfar RF V11
  - Reachfar RF V11 Plaspy
  - Configuración servidor RF V11
  - Configuración rastreador GPS RF V11
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Instalación rastreador de activos
  - Configuración rastreador antirrobo
  - Seguimiento pequeños activos
---

# Reachfar - RF-V11: Configuración

Esta página documenta el contexto público de configuración para usar el Reachfar RF-V11 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y ofrece orientación práctica de instalación basada en la descripción del producto RF-V11, que destaca un rastreador GPS compacto con batería, sensores magnéticos, de vibración y de sonido, soporte de comandos por SMS y la capacidad de escucha remota.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los ajustes públicos de Plaspy y validar la conectividad, y consulte la documentación de Reachfar para la sintaxis de comandos específica del dispositivo y funciones avanzadas.

## Resumen de configuración

Configurar un RF-V11 para Plaspy prepara el dispositivo para reenviar reportes de posición y eventos de alarma a un único punto final del servidor Plaspy, de modo que usted pueda monitorear pequeños activos de forma centralizada. El objetivo es apuntar el rastreador a Plaspy, confirmar la conectividad y verificar que los eventos aparezcan en la plataforma Plaspy.

- Apunte el RF-V11 al servidor Plaspy d.plaspy.com o a la IP de servidor equivalente para enviar datos de posición y alarma.
- Use el puerto 8888 en la configuración del rastreador para que los datos se enruten a Plaspy en el mismo puerto utilizado por todos los dispositivos.
- Seleccione transporte UDP o TCP en el dispositivo cuando el rastreador requiera elegir un transporte.
- Guarde y aplique la configuración del dispositivo y reinicie el rastreador si el firmware lo solicita.
- Valide que los reportes del dispositivo aparezcan en Plaspy y que los SMS de alarma o eventos se reenvíen según lo esperado.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: Configure UDP o TCP en el dispositivo si se requiere selección de transporte
- Protocol detection: Plaspy detecta automáticamente el protocolo del rastreador
- Note: All devices in Plaspy use the same port so configure port 8888 for the RF-V11 to ensure consistent routing

## Requisitos típicos antes de la instalación

- Batería del dispositivo cargada y gestión básica de energía confirmada
- SIM activa con cobertura de red móvil compatible con la radio GSM cuatribanda del RF-V11
- Acceso al método de configuración Reachfar que vaya a utilizar, como el software oficial, herramienta web o la interfaz de comandos SMS
- Recepción GPS para la obtención de la primera ubicación al validar el reporte de posición
- Cuenta activa en Plaspy o acceso a su entorno Plaspy para validar los datos entrantes del dispositivo
- Conocimientos básicos del conjunto de comandos SMS del RF-V11 o de la herramienta de configuración si va a configurar el dispositivo por SMS

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el RF-V11 se ajusta para enviar reportes de posición y eventos de alarma al punto final y puerto compartido de Plaspy. Plaspy ingiere esos reportes y presenta la información de ubicación y eventos en un panel central para operadores y administradores.

- El dispositivo se apunta a d.plaspy.com o a la IP del servidor 54.85.159.138 y usa el puerto 8888 para el reenvío
- El transporte puede ser UDP o TCP según la opción de configuración del RF-V11 y el soporte del firmware
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda interpretar los reportes sin configuración de protocolo por dispositivo
- Los reportes de posición y los eventos de alarma se reenvían a Plaspy para su mapeo, historial de eventos y manejo de notificaciones
- Las alertas por SMS y las funciones de llamada remota del RF-V11 pueden complementar los reportes del servidor y proporcionar notificaciones locales inmediatas

## Flujo de configuración típico

1. Acceda al método oficial de configuración Reachfar o al software para el RF-V11, o prepárese para usar comandos SMS si el dispositivo se configura por SMS.
2. En la configuración del dispositivo, establezca la dirección del servidor en d.plaspy.com o use la IP del servidor 54.85.159.138 si prefiere ingresar la IP.
3. Configure el puerto de destino en 8888 para coincidir con el puerto compartido de Plaspy para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador o la recomendación del firmware.
5. Aplique o guarde la configuración en el RF-V11 usando la herramienta del fabricante o enviando el comando SMS correspondiente.
6. Reinicie el dispositivo si el firmware exige un reinicio para que los cambios de red o servidor entren en vigor.
7. Valide que el RF-V11 reporte a Plaspy comprobando la presencia del dispositivo en su entorno Plaspy y confirmando que se reciben posiciones o eventos de alarma.

## Ejemplos de comandos de configuración

El RF-V11 soporta comandos remotos por SMS y herramientas de configuración del fabricante, pero los formatos exactos de los comandos pueden variar según el firmware y el software del proveedor. Debido a que la sintaxis de comandos del fabricante difiere entre versiones y vendedores, siga el manual de usuario de Reachfar o la herramienta oficial de configuración para ejemplos precisos de comandos SMS o formatos de archivo de configuración. Si planea usar comandos SMS, tenga preparados los comandos oficiales de Reachfar para ajustar servidor, puerto, transporte y otros parámetros del dispositivo.

## Notas de configuración

- Diferencias de firmware: Las revisiones de firmware y hardware de Reachfar pueden cambiar la sintaxis de comandos, los campos disponibles y el comportamiento de reinicio. Verifique los comandos contra el manual del dispositivo para su versión de firmware.
- TCP versus UDP: Elija UDP cuando prefiera menor overhead y entrega más rápida, o TCP cuando necesite fiabilidad de conexión. El RF-V11 puede permitir cualquiera de los dos; configure el que el dispositivo soporte y que su red prefiera.
- Configuración por SMS: El RF-V11 soporta configuración remota por SMS además de la configuración por software. Los comandos SMS son útiles en instalaciones sin interfaz local, pero confirme las cadenas exactas en el manual oficial.
- Comportamiento de puerto compartido: Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración y las reglas de red en los firewalls.
- Validación: Después de aplicar los ajustes, pruebe tanto los reportes de ubicación como los eventos de alarma para confirmar que las actualizaciones periódicas y las alertas inmediatas llegan a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Reachfar RF-V11 con Plaspy centraliza el seguimiento de pequeños activos y la gestión de alarmas en un único entorno de monitoreo. Para instaladores y operadores que protegen cajas fuertes, puertas, persianas o bienes portátiles, el formato compacto y el conjunto de sensores del RF-V11, combinados con la visibilidad de Plaspy, ofrecen historial centralizado de eventos, mapeo y consolidación de alertas.

Para obtener más información sobre Plaspy y cómo la plataforma puede gestionar dispositivos RF-V11 en despliegues visite https://www.plaspy.com. Para comandos de configuración específicos más recientes, notas de firmware y detalles de hardware, verifique la documentación actual en el sitio de Reachfar https://www.reachfargps.com/.
