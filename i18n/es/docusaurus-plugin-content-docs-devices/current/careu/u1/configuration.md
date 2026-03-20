---
slug: /careu/u1/configuration
id: u1-configuration
sidebar_label: Configuration
title: CAREU - U1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador CAREU U1 y su compatibilidad con Plaspy, incluyendo dirección de servidor, transporte y flujo de instalación
keywords:
  - Configuración CAREU U1
  - Instalación CAREU U1
  - Configuración CAREU U1 Plaspy
  - Configuración rastreador GPS CAREU U1
  - Configuración servidor CAREU U1
  - Configuración plataforma CAREU U1
  - Configuración software rastreo CAREU U1
  - Rastreo de flotas CAREU U1
  - Configuración LTE CAREU U1
  - Configuración dispositivo CAREU U1
---

# CAREU - U1 Configuration

Esta página describe, de forma pública y concisa, cómo configurar el rastreador CAREU U1 para su uso con la plataforma Plaspy. Resume los ajustes del servidor y los pasos prácticos que suelen seguir los instaladores para apuntar un equipo U1 hacia Plaspy y así permitir que el dispositivo reporte posición y estado. Está pensada como referencia técnica para integradores, gestores de flota e instaladores.

El CAREU U1 PLUS LTE es un rastreador con muchas funciones, que incluye módulos GNSS y LTE, opciones de configuración por Bluetooth y múltiples entradas/salidas para accesorios y datos del vehículo. Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y las herramientas de configuración que utilice el proveedor.

## Visión general de la configuración

Este proceso prepara un CAREU U1 para comunicarse con Plaspy y lograr que los datos de ubicación, estado y eventos aparezcan en la plataforma. El objetivo es configurar el dispositivo para que reporte al endpoint del servidor Plaspy y verificar un enlace ascendente confiable para que el rastreador sea visible y gestionable desde la plataforma.

- Apuntar el dispositivo al endpoint del servidor Plaspy y al puerto compartido usado por todos los dispositivos Plaspy.
- Seleccionar el modo de transporte soportado por el dispositivo (UDP o TCP) si es necesario.
- Guardar y aplicar la configuración mediante la herramienta de fabricante o la interfaz Bluetooth.
- Validar la conectividad y comprobar que el dispositivo aparece en Plaspy y envía reportes periódicos.
- Documentar la identidad del equipo que Plaspy utiliza para facilitar la resolución de problemas y el mantenimiento futuro.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un dispositivo CAREU U1 alimentado y funcionando, con las antenas necesarias conectadas según la guía de instalación.
- Una SIM activa con datos móviles habilitados si planea usar el equipo mediante redes LTE, 3G o 2G.
- Acceso al método oficial de configuración CAREU, como el software del proveedor, la app de configuración por Bluetooth o la interfaz de configuración suministrada por el fabricante.
- Conocer el IMEI o identificador único del dispositivo para confirmar la unidad que está configurando en Plaspy.
- Tener claro si usará UDP o TCP como transporte en el dispositivo cuando la elección sea necesaria.
- Acceso a la documentación del fabricante para comandos específicos de firmware o cadenas SMS de configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el U1 envía su posición y eventos al endpoint compartido de Plaspy en el mismo puerto que usan todos los dispositivos soportados. Plaspy acepta la conexión entrante en ese endpoint y determina automáticamente el protocolo correcto que está usando el rastreador.

- El rastreador se configura para enviar datos GPS y del dispositivo al endpoint y al puerto de Plaspy.
- Los datos pueden transmitirse por redes celulares usando las radios LTE, 3G o 2G del dispositivo según lo provea el instalador.
- El rastreador transmite reportes periódicos de posición y notificaciones de eventos para que la unidad sea visible en Plaspy.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Usar el mismo puerto para todos los equipos simplifica la configuración de cortafuegos y redes en despliegues de flota.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración CAREU o al software proporcionado por el fabricante, o use la opción de configuración por Bluetooth si está disponible.
2. Ingrese el servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138 en el campo de dirección del servidor.
3. Configure el puerto del dispositivo en 8888, tal como lo requiere el servicio compartido de Plaspy.
4. Seleccione UDP o TCP como transporte en el dispositivo si el firmware solicita elegir uno.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los cambios fueron aceptados.
6. Reinicie el equipo si el fabricante recomienda un reinicio o si es necesario para que las configuraciones tomen efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece en la plataforma y envía actualizaciones periódicas.

## Ejemplos de comandos de configuración

El CAREU U1 puede configurarse con herramientas del proveedor, aprovisionamiento por Bluetooth o comandos SMS según el firmware y el conjunto de accesorios instalados. Los formatos exactos de comandos y las cadenas SMS varían según la versión del fabricante y el firmware, por lo que no se incluyen comandos universales aquí.

Consulte la documentación de CAREU para la sintaxis de comandos SMS o serie si planea configurar el equipo por comandos de texto o por una interfaz RS232. Si su método de instalación utiliza el software del fabricante, siga los pasos en la aplicación o en el manual para ingresar el dominio o la IP del servidor Plaspy y el puerto 8888, luego elija UDP o TCP según sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de los ajustes o la forma en que se aplican; confirme siempre la versión de firmware antes de seguir una guía paso a paso.
- Si están disponibles UDP y TCP, elija el transporte que mejor se adapte a su red y a las políticas de firewall; Plaspy soporta ambos y detectará automáticamente el protocolo.
- La configuración por Bluetooth puede facilitar la instalación local, pero la configuración por SMS o serie es habitual en instalaciones remotas según el firmware del equipo.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, su atención principal debe centrarse en la dirección correcta del servidor y la selección adecuada del transporte en el dispositivo.
- Mantenga un registro de cualquier ajuste específico del fabricante que cambie para poder revertirlo o replicar la configuración en toda la flota.

## Por qué usar Plaspy con esta configuración

Usar el CAREU U1 con Plaspy ofrece a las organizaciones una forma directa de centralizar datos de posición, eventos y estado de dispositivos en una plataforma única. Las capacidades LTE y de accesorios del U1 lo hacen apto para flotas, transporte refrigerado e integración de datos del vehículo; configurarlo para que reporte a Plaspy brinda visibilidad operativa y reportes consistentes.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer guidance verify details on the CAREU manufacturer site https://www.systech-iot.com/.
