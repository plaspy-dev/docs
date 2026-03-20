---
slug: /neomatica/adm007_ble/configuration
id: adm007_ble-configuration
sidebar_label: Configuration
title: Neomatica - ADM007 BLE Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Neomatica ADM007 BLE con ajustes del servidor Plaspy y pasos prácticos para despliegue y telemetría rápida
keywords:
  - Configuración Neomatica ADM007 BLE
  - Instalación Neomatica ADM007 BLE
  - ADM007 BLE Plaspy
  - Configuración de servidor ADM007 BLE
  - Configuración rastreador GPS ADM007 BLE
  - Configuración rastreador GPS Neomatica
  - Configuración GPRS ADM007 BLE
  - Sensores BLE Neomatica ADM007 BLE
  - Configuración seguimiento de flota ADM007 BLE
  - Configuración de telemetría ADM007 BLE
---

# Neomatica - Configuración ADM007 BLE

Esta página ofrece el contexto público de configuración para usar el rastreador Neomatica ADM007 BLE con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para conectar el ADM007 BLE tipo enchufe para encendedor con la plataforma Plaspy, aprovechando las rutas de configuración soportadas por el dispositivo: Bluetooth, SMS o GPRS cuando correspondan.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía pone énfasis en los valores del lado Plaspy y en un flujo de configuración práctico para el ADM007 BLE basándose en la descripción pública del dispositivo.

## Resumen de la configuración

El objetivo es preparar el ADM007 BLE para que se comunique de forma fiable con Plaspy, de modo que el dispositivo aparezca en su flota, informe posición y telemetría de sensores BLE, y sincronice los registros locales cuando vuelva la conectividad.

- Configure el dispositivo para enviar datos al endpoint y puerto del servidor Plaspy para que la ubicación en vivo y la telemetría de los sensores lleguen a la plataforma.
- Verifique la selección de transporte (UDP o TCP) y establezca el puerto compartido de Plaspy para que el dispositivo y el servidor coincidan.
- Confirme la conectividad de datos móviles y la disponibilidad de la SIM para que el enlace GPRS esté disponible para el reporte.
- Valide que el dispositivo aparezca en Plaspy y que los registros históricos y la telemetría de sensores se sincronicen correctamente.
- Use Bluetooth o la herramienta del fabricante para cambios locales y FOTA cuando se requieran actualizaciones de firmware.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Detección de protocolo: Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos valores son el endpoint público de Plaspy que debe ingresar en la herramienta de configuración del ADM007 BLE o en la interfaz de configuración remota por SMS.

## Requisitos típicos antes de la configuración

- Fuente de alimentación vehicular o toma de encendedor para la instalación y operación del ADM007 BLE.
- Una NanoSIM con datos móviles activos para proporcionar enlace GPRS y permitir el reporte de posición y telemetría.
- Acceso al método oficial de configuración Neomatica, como la app ADM Configurator por Bluetooth, el software del proveedor o comandos SMS soportados cuando aplique.
- Acceso Bluetooth para configuración local y actualizaciones FOTA si prefiere la gestión local.
- Una cuenta en Plaspy y acceso básico a la plataforma para confirmar el registro del dispositivo y la visibilidad de los datos.
- Confirmación de la versión de firmware y la revisión del dispositivo con Neomatica antes de aplicar configuraciones.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el ADM007 BLE transmite fixes GNSS y lecturas de sensores BLE a través de su conexión celular GPRS al endpoint y puerto compartido de Plaspy. Plaspy recibe y analiza el protocolo entrante automáticamente, y muestra en la plataforma la ubicación en tiempo real, la telemetría y las alertas.

- El rastreador se configura para reportar al endpoint d.plaspy.com en el puerto 8888.
- El transporte de datos puede ser UDP o TCP según la configuración del equipo; ajuste el rastreador en consecuencia.
- La telemetría de sensores BLE se envía junto con los fixes GNSS para que Plaspy muestre las lecturas de sensores con contexto de ubicación.
- Los registros de ruta locales se sincronizan con Plaspy cuando la conectividad GPRS está disponible para historial completo de viajes.
- Las alertas por manipulación o interferencia que genere el dispositivo se reenvían a Plaspy para monitoreo y notificación.

## Flujo de configuración común

1. Acceda al método oficial de configuración Neomatica, por ejemplo la app ADM Configurator vía Bluetooth o la herramienta del fabricante proporcionada por su proveedor.
2. En los ajustes de servidor del dispositivo, ingrese el host del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 (este es el mismo puerto que Plaspy usa para todos los dispositivos compatibles).
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo solicita la selección.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o mediante el canal de configuración soportado.
6. Reinicie o haga un ciclo de energía en el ADM007 BLE si las instrucciones del fabricante indican que es necesario para aplicar los cambios de red.
7. Valide en Plaspy que el dispositivo está reportando y que la ubicación y la telemetría de sensores BLE son visibles en la plataforma.

## Comandos de configuración de ejemplo

El ADM007 BLE puede configurarse usando las herramientas de Neomatica, la app ADM Configurator por Bluetooth, comandos SMS o software del proveedor según el firmware y el canal de distribución. La sintaxis exacta de los comandos y su disponibilidad varían según el firmware y la herramienta; consulte la documentación de Neomatica o a su proveedor para los comandos exactos y formatos de mensaje necesarios para establecer el host, puerto y transporte.

Si utiliza una interfaz SMS proporcionada por el fabricante o cadenas de configuración, ingrese el host de Plaspy como d.plaspy.com o 54.85.159.138 y configure el puerto en 8888, seleccionando UDP o TCP según la opción del dispositivo. Debido a que los formatos de comandos difieren entre firmwares, esta página no incluye cadenas SMS específicas; consulte la guía oficial de comandos Neomatica para las instrucciones exactas.

## Notas de configuración

- Diferencias de firmware: los formatos de comandos, las opciones de transporte disponibles y los nombres de menús pueden variar entre versiones de firmware y revisiones de hardware.
- TCP versus UDP: elija UDP para menor sobrecarga y latencia reducida en muchos casos de rastreo, o TCP si su entorno requiere entrega orientada a conexión; Plaspy soporta ambos en el puerto 8888.
- Comportamiento de sensores BLE: la telemetría BLE se reporta como parte del uplink del dispositivo cuando el ADM007 BLE agrega datos de sensores; verifique el emparejamiento de sensores y los intervalos de reporte en los ajustes del dispositivo.
- Registro local: el ADM007 BLE almacena registros de ruta locales mientras está sin conexión y los sincroniza con Plaspy cuando vuelve la conectividad.
- Documentación del fabricante: confíe en la documentación de Neomatica para las cadenas SMS exactas, flujos de la app y procedimientos FOTA.

## Por qué usar Plaspy con esta configuración

Usar el ADM007 BLE con Plaspy simplifica el despliegue para operadores que requieren instalación rápida y telemática confiable. La forma plug-and-play para encendedor, combinada con soporte de sensores BLE y un uso eficiente de datos móviles, la hace práctica para flotas temporales, alquileres o casos de anti-robo, manteniendo la monitorización y el reporte histórico centralizados en Plaspy.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para los detalles más actuales sobre la configuración específica del dispositivo, comportamiento de firmware y referencias oficiales de comandos, verifique la información más reciente en el sitio de Neomatica https://neomatica.com/.
