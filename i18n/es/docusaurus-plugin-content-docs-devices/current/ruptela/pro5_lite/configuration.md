---
slug: /ruptela/pro5_lite/configuration
id: pro5_lite-configuration
sidebar_label: Configuration
title: Ruptela - Pro5 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Ruptela Pro5 Lite en Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Ruptela Pro5 Lite
  - Instalación Ruptela Pro5 Lite
  - Configuración servidor Ruptela Pro5 Lite
  - Ruptela Pro5 Lite Plaspy
  - Configuración rastreador Plaspy
  - Guía configuración GPS
  - Guía instalación Pro5 Lite
  - Configuración GPS Ruptela
  - Configuración seguimiento de flotas
  - Configuración telemática vehicular
---

# Ruptela - Configuración Pro5 Lite

Esta página describe el contexto público de configuración necesario para conectar un rastreador Ruptela Pro5 Lite a la plataforma Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy, qué debe preparar en el equipo y en campo, y ofrece una guía práctica para registrar y validar un Pro5 Lite para seguimiento en tiempo real con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los paquetes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de aprovisionamiento de Ruptela que utilice. Use esta guía como referencia práctica y confirme las instrucciones específicas del dispositivo con la documentación oficial de Ruptela cuando sea necesario.

## Resumen de configuración

Configurar el Pro5 Lite para Plaspy consiste principalmente en apuntar el equipo a los puntos finales de servidor de Plaspy, seleccionar el transporte correcto, asegurar la conectividad celular y validar que la telemetría y las posiciones lleguen a la plataforma. El objetivo es un dispositivo que reporte de forma continua y confiable y que aparezca en Plaspy para monitoreo en vivo y análisis histórico.

- Configure el servidor del dispositivo hacia Plaspy usando la dirección pública o la IP para que los datos se enruten a Plaspy.
- Elija el protocolo de transporte apropiado si el rastreador pide seleccionar entre UDP o TCP.
- Verifique los prerrequisitos de conectividad celular para que el rastreador pueda alcanzar d.plaspy.com en el puerto compartido de Plaspy.
- Guarde y aplique la configuración, luego confirme que el rastreador se registre y envíe telemetría a Plaspy.
- Valide las actualizaciones de posición y las corrientes de telemetría en Plaspy para confirmar el parseo y la visibilidad correctos.

## Ajustes del servidor Plaspy

Use los siguientes detalles públicos de conexión a Plaspy al configurar el Pro5 Lite. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando lleguen los paquetes.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la instalación

- Confirme que el Pro5 Lite tenga alimentación y que la batería interna de respaldo, si existe, funcione correctamente.
- Asegúrese de contar con una tarjeta SIM activa con plan de datos y la información APN correcta si usa datos celulares para el reporte.
- Tenga acceso a los métodos de configuración de Ruptela como Ruptela Device Center, comandos SMS o herramientas USB según corresponda.
- Conozca la versión de firmware del dispositivo y revise notas específicas en la documentación de Ruptela.
- Obtenga las credenciales o identificadores requeridos por Plaspy o por su flujo de aprovisionamiento.
- Prepare un entorno de prueba o un solo vehículo para validar los ajustes antes de desplegar a gran escala.

## Cómo se conecta este rastreador a Plaspy

Al configurar el equipo, el Pro5 Lite envía arreglos GNSS y telemetría al endpoint de Plaspy usando el puerto compartido. Plaspy ingiere los paquetes, reconoce automáticamente el protocolo del dispositivo y presenta datos de posición y telemetría para monitoreo en vivo y análisis.

- El rastreador se configura para enviar datos uplink a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según el firmware del rastreador y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo y analiza las corrientes de ubicación y telemetría.
- Las actualizaciones de posición GNSS en vivo aparecen en los paneles de Plaspy una vez que el dispositivo reporta con éxito.
- La telemetría CAN, entradas/salidas (I/O) y sensores enviada por el equipo se reenviará a Plaspy para procesamiento de eventos e informes.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de Ruptela para Pro5 Lite, por ejemplo Ruptela Device Center, configuración por SMS o herramientas USB.
2. Ingrese el servidor de Plaspy por hostname d.plaspy.com o por IP 54.85.159.138 como destino del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido usado por Plaspy para todos los rastreadores soportados.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP de acuerdo con las necesidades de la instalación.
5. Proporcione APN y ajustes de la SIM si se le solicita para que el dispositivo establezca conectividad celular.
6. Aplique o guarde la configuración y siga los mensajes de la herramienta Ruptela para confirmar los cambios.
7. Reinicie el rastreador si su firmware o la herramienta de configuración lo requiere para comenzar el reporte.
8. Valide que el dispositivo reporte a Plaspy y aparezca con posición en vivo y telemetría en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos y las cadenas de configuración para Pro5 Lite dependen de las herramientas y del firmware de Ruptela. Ruptela suele soportar configuración vía Device Center, SMS, GPRS o interfaces USB. Al usar flujos de configuración de Ruptela, apunte el servidor a d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888. Elija UDP o TCP si su equipo requiere selección de transporte. Consulte siempre la documentación de Ruptela o la herramienta Device Center para la sintaxis precisa de comandos y ejemplos según su versión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones disponibles y la sintaxis de comandos. Verifique los comandos y ubicaciones de menú frente a las notas de la versión del firmware.
- Pro5 Lite soporta características de transporte seguro; confirme si su despliegue usa TLS u otras opciones de cifrado y cómo eso se integra con las expectativas de Plaspy.
- TCP y UDP se comportan de forma distinta en redes celulares. Elija UDP para menor sobrecarga cuando sea aceptable, o TCP para mayor fiabilidad de sesión según la cobertura y comportamiento del operador.
- Plaspy usa un único puerto 8888 para todos los dispositivos y detecta automáticamente los protocolos, por lo que usar el puerto compartido simplifica despliegues con múltiples modelos.
- Si usa aprovisionamiento por SMS o herramientas de Ruptela, mantenga un registro de los valores de servidor y puerto utilizados para implementaciones a gran escala.

## Por qué usar Plaspy con esta configuración

Conectar Ruptela Pro5 Lite a Plaspy ofrece una vía sencilla para recibir actualizaciones de posición en tiempo real, la ingestión de telemetría y visibilidad operativa para gestores de flotas y activos. El hardware Pro5 Lite provee las interfaces vehiculares y sensores que requieren los operadores de flota, y Plaspy recibe y normaliza esas corrientes para que paneles, alertas e informes reflejen el estado del vehículo en tiempo real.

Para saber más sobre Plaspy y cómo maneja la integración de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, comportamiento de firmware y detalles del fabricante verifique la información vigente en el sitio oficial de Ruptela https://ruptela.com/.
