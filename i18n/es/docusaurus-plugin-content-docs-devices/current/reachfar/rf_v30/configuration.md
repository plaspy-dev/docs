---
slug: /reachfar/rf_v30/configuration
id: rf_v30-configuration
sidebar_label: Configuration
title: Reachfar - RF-V30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Reachfar RF-V30 y compatibilidad con Plaspy, con ajustes de servidor y pasos de conexión
keywords:
  - Configuración Reachfar RF V30
  - Instalación Reachfar RF V30
  - Configuración RF V30 Plaspy
  - Configuración de servidor RF V30
  - Instalación rastreador GPS Reachfar
  - Configuración software de seguimiento RF V30
  - Configuración rastreador de mascotas
  - Configuración de dispositivo Plaspy
  - Configuración GPRS TCPIP RF V30
  - Compatibilidad rastreador GPS con Plaspy
---

# Reachfar - Configuración RF-V30

Esta página documenta el contexto público de configuración para usar el rastreador Reachfar RF-V30 con la plataforma Plaspy. Resume los ajustes de servidor prácticos que Plaspy requiere, los pasos habituales de preparación y flujo de trabajo para conectar un RF-V30, y la orientación general para validar que el equipo está reportando correctamente a Plaspy. Este contenido está dirigido a usuarios técnicos e instaladores que necesitan información de configuración enfocada en la plataforma, sin asumir herramientas propietarias del fabricante.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El RF-V30 soporta transporte GPRS TCP/IP y posicionamiento asistido por WiFi, por lo que el dispositivo es adecuado para enviar ubicación y telemetría a Plaspy una vez que se configure correctamente el servidor y el puerto mediante el método de configuración Reachfar que tenga disponible.

## Visión general de la configuración

El objetivo del proceso de configuración es apuntar el RF-V30 al endpoint de Plaspy, asegurar que el dispositivo pueda usar datos móviles para alcanzar ese endpoint y verificar que Plaspy está recibiendo los mensajes del dispositivo para que el rastreador aparezca en el mapa de la plataforma y en las alertas. La configuración prepara el equipo para actualizaciones en vivo fiables y el registro histórico de rutas en Plaspy.

- Establecer la dirección del servidor y el transporte en el dispositivo para que los paquetes lleguen a Plaspy.
- Asegurarse de que el RF-V30 tenga una SIM activa y datos móviles para enviar mensajes GPRS TCP/IP.
- Verificar que el dispositivo use el puerto compartido de Plaspy y que la plataforma reciba sus primeros mensajes.
- Confirmar el comportamiento de posicionamiento, como GPS y asistido por WiFi, para que cumpla con sus necesidades de reporte.
- Probar la visibilidad de geo-cercas y la telemetría de batería dentro de Plaspy tras aplicar los ajustes.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son los ajustes públicos de endpoint que Plaspy espera para dispositivos RF-V30 configurados para reportar vía GPRS TCP/IP. Use el dominio d.plaspy.com o la IP 54.85.159.138 al ingresar los ajustes de servidor en la herramienta de configuración Reachfar y seleccione el transporte UDP o TCP si el dispositivo requiere elegir un transporte.

## Requisitos típicos antes de la configuración

- Un RF-V30 cargado con batería en buen estado y los accesorios necesarios, como el cable USB incluido para carga y alimentación inicial.
- Una tarjeta SIM activa provisionada para datos móviles y colocada en el dispositivo, con un plan de datos que permita conexiones GPRS TCP/IP.
- Acceso al método oficial de configuración Reachfar o al software (comandos SMS, herramienta web o service tool) provisto por el vendedor o instalador.
- Conocimientos básicos de la interfaz de configuración del dispositivo que vaya a utilizar (herramienta web del fabricante, comandos SMS o aplicación local).
- Una cuenta de Plaspy o acceso para provisionar dispositivos, de modo que pueda validar que el equipo aparece en la plataforma tras la configuración.
- Una ubicación con cobertura celular para permitir la conexión GPRS al endpoint de Plaspy.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el RF-V30 envía paquetes de ubicación y telemetría por GPRS TCP/IP al servidor de Plaspy. Plaspy ingiere esos paquetes en su endpoint compartido, mapea las posiciones, dispara eventos de geo-cerca y almacena el historial de rutas para reproducción y alertas.

- El dispositivo reporta al endpoint de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el puerto 8888 según lo permita el firmware del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que los mensajes se analizan y se asocian al registro de dispositivo correcto.
- Las fijaciones de ubicación provienen del GPS y del posicionamiento asistido por WiFi y se envían a Plaspy para actualizaciones en vivo del mapa y almacenamiento histórico.
- La telemetría, como batería e informes de estado, se transmite a Plaspy para que la plataforma pueda generar alertas de baja batería y mostrar el estado del dispositivo.

## Flujo común de configuración

1. Acceda al método oficial de configuración Reachfar o al software proporcionado por el vendedor, instalador o la documentación del fabricante.
2. En los ajustes de servidor del dispositivo, ingrese el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 según lo requerido por Plaspy.
4. Elija la opción de transporte UDP o TCP si la interfaz de configuración del RF-V30 solicita una selección.
5. Guarde o aplique la configuración en el RF-V30 y confirme que el dispositivo aceptó los nuevos ajustes.
6. Reinicie el equipo si el fabricante recomienda un reboot para que los ajustes de red entren en vigor.
7. Valide que el RF-V30 reporte a Plaspy revisando la lista de dispositivos y el mapa en vivo en su cuenta Plaspy y confirmando que lleguen actualizaciones de ubicación, eventos de geo-cerca o telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos y las herramientas de configuración para el Reachfar RF-V30 varían según el firmware y las herramientas del proveedor. Los dispositivos Reachfar se configuran comúnmente con el conjunto de herramientas proporcionado por el fabricante o mediante comandos SMS documentados por Reachfar. Dado que los métodos de configuración difieren entre versiones de firmware y canales de distribución, esta página no proporciona un conjunto universal de comandos. Consulte el manual del usuario Reachfar o a su proveedor para obtener la sintaxis exacta de los comandos o la utilidad de configuración para establecer el servidor en d.plaspy.com o 54.85.159.138 en el puerto 8888 y elegir UDP o TCP si es necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú, la sintaxis de los comandos SMS o el comportamiento de las herramientas de servicio; siempre consulte la documentación Reachfar para comandos específicos por dispositivo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que no necesita un puerto único por dispositivo al apuntar a Plaspy.
- Elija TCP o UDP según el soporte del dispositivo y la fiabilidad de la red; TCP puede ofrecer entrega más confiable mientras que UDP puede preferirse por menor overhead dependiendo del firmware.
- Pruebe la conectividad en una ubicación con cobertura celular y verifique que las actualizaciones de ubicación, las alertas de geo-cerca y la telemetría de batería aparezcan en Plaspy tras la configuración.
- El posicionamiento asistido por WiFi en el RF-V30 puede mejorar las fijaciones en entornos urbanos e interiores; este comportamiento se controla mediante ajustes del dispositivo que varían según el firmware.

## Por qué utilizar Plaspy con esta configuración

Usar el RF-V30 con Plaspy ofrece visibilidad sencilla para el rastreo de mascotas y otros casos: propietarios y administradores obtienen ubicación en tiempo real, alertas de geo-cerca y reproducción histórica de rutas en una sola plataforma. El transporte GPRS TCP/IP y el posicionamiento asistido por WiFi del RF-V30 funcionan con el endpoint compartido de Plaspy, por lo que la configuración se centra en apuntar correctamente el dispositivo al servidor de Plaspy y validar la conectividad.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos RF-V30 a escala, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de Reachfar https://www.reachfargps.com/ porque los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
