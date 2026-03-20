---
slug: /homtecs/h50/configuration
id: h50-configuration
sidebar_label: Configuration
title: Homtecs - H50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el router Homtecs H50 y conectarlo a los servicios de rastreo de Plaspy
keywords:
  - Configuración Homtecs H50
  - Instalación Homtecs H50
  - Compatibilidad Homtecs H50 Plaspy
  - Configuración de servidor Homtecs H50
  - Configuración plataforma GPS Homtecs H50
  - Configuración de rastreo Homtecs H50
  - Configuración router Homtecs M2M H50
  - Configuración monitorización remota H50
  - Configuración de dispositivo Plaspy
  - Ajustes de servidor Plaspy
---

# Homtecs - H50 Configuración

Esta página explica el contexto público de configuración para usar el Homtecs H50 con la plataforma Plaspy. Se centra en los ajustes compartidos del servidor y en los pasos prácticos que deberá aplicar en el lado del fabricante para que el H50 reporte a Plaspy en casos de uso de flotas o monitorización remota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, opciones de hardware, tipo de instalación y herramientas del proveedor. Use esta guía junto con la documentación oficial de Homtecs para el H50 para confirmar los pasos específicos del equipo.

## Resumen de la configuración

Configurar el Homtecs H50 para Plaspy implica preparar el router para que envíe información de ubicación y estado al endpoint compartido de Plaspy, de modo que los dispositivos sean visibles y gestionables en la plataforma. El H50 es un router industrial 3G versátil con opciones como SIMs de IP fija, DNS dinámico y múltiples interfaces de gestión, factores que influyen en cómo aplicar estas configuraciones.

- Configure el H50 para que reporte telemetría y eventos de conexión al servidor de Plaspy y así los dispositivos aparezcan en la plataforma.
- Establezca la dirección y el puerto del servidor correctos en el H50 mediante las herramientas web oficiales de Homtecs o la interfaz CLI.
- Seleccione el protocolo de transporte que soporte el H50 y ajústelo a los parámetros de Plaspy si el dispositivo lo requiere.
- Valide la conectividad después de aplicar los cambios y confirme que el dispositivo es visible en Plaspy.
- Mantenga cualquier ajuste de APN, autenticación o configuración de SIM que exija su operador móvil.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el Homtecs H50. Plaspy ofrece un endpoint compartido y utiliza el mismo puerto para todos los dispositivos mientras detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar múltiples protocolos de dispositivo en el mismo endpoint

## Requisitos habituales antes de empezar

- Confirme que el H50 tiene una fuente de alimentación operativa y está en un estado que permita cambiar la configuración.
- Asegúrese de tener acceso administrativo al método de configuración del H50 que vaya a usar, como la interfaz web, la CLI o SSH.
- Inserte y active una SIM de datos compatible si conectará por redes móviles, y verifique el APN y las credenciales del operador.
- Disponga de los detalles de red necesarios, como el esquema de IP local, DNS o DDNS si el H50 usa direccionamiento dinámico.
- Reúna la documentación de Homtecs correspondiente a su versión de firmware para seguir los pasos exactos.
- Verifique cualquier regla de VPN, firewall o NAT que pueda bloquear las conexiones salientes hacia Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurar el Homtecs H50 para apuntar a Plaspy, el dispositivo enviará su telemetría a un único endpoint compartido de Plaspy. La plataforma analiza el protocolo entrante y presenta la ubicación y el estado del dispositivo en Plaspy para monitoreo e informes.

- El H50 se configura para reportar al dominio o IP del servidor Plaspy usando el transporte configurado.
- Los paquetes salientes se dirigen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP en el dispositivo si el H50 requiere elegir un transporte; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere un mapeo de puertos por dispositivo en el lado del servidor.
- Tras la conexión exitosa, Plaspy mostrará el dispositivo en línea y comenzará a procesar los eventos reportados.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del Homtecs H50, como la interfaz web, la CLI o SSH, según documente Homtecs.
2. En los ajustes de servidor o reporte, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos.
4. Si el H50 requiere seleccionar un transporte, elija UDP o TCP según la capacidad del equipo y los requisitos de la red.
5. Guarde o aplique la configuración desde la interfaz de gestión del H50.
6. Reinicie el dispositivo si el firmware del H50 exige reboot para que los cambios de red surtan efecto.
7. Valide que el equipo reporta a Plaspy y aparece en línea dentro de la plataforma.

## Comandos de configuración de ejemplo

Los comandos exactos y las interfaces varían según el firmware de Homtecs y el método de gestión elegido. Homtecs soporta administración por web, CLI, SSH y SNMP, así que siga el método oficial para su unidad. Debido a que los comandos específicos dependen del firmware y del modo de gestión, consulte la documentación de Homtecs para la sintaxis exacta y ejemplos de comandos.

Si utiliza una línea de comandos del H50 que acepte configuración de servidor en texto, los comandos conceptuales seguirán este patrón adaptado a la sintaxis propia del equipo:

- Establecer host del servidor a Plaspy
- Establecer IP alternativa del servidor a la IP de Plaspy
- Fijar puerto en 8888
- Seleccionar UDP o TCP como transporte
- Guardar la configuración y reiniciar si es necesario

Reemplace los marcadores conceptuales y siga las etiquetas exactas de la CLI o la interfaz web que aparezcan en la documentación de Homtecs para su versión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar etiquetas de menú, sintaxis de la CLI o si es necesario reiniciar, por lo que siempre confirme los comandos con el manual de Homtecs correspondiente a su revisión de firmware.
- Elija UDP o TCP según la estabilidad de la red y cualquier bloqueo de UDP por parte del operador; Plaspy acepta ambos transportes en el mismo puerto compartido.
- Si emplea SIMs de IP fija, DNS dinámico o NAT del operador, verifique la conexión de datos del H50 y la capacidad de salida hacia d.plaspy.com antes de finalizar la configuración.
- Utilice las funciones integradas del H50 como watchdog y detección de enlaces múltiples según convenga para mantener la conectividad continua.
- Mantenga una copia de seguridad de su configuración funcional para poder restaurarla tras una actualización de firmware o un cambio de hardware.

## Por qué usar Plaspy con esta configuración

Configurar el Homtecs H50 para que reporte a Plaspy ofrece una vía sencilla para integrar un router industrial 3G en una plataforma de flotas o monitorización remota. El enfoque de endpoint compartido de Plaspy simplifica el onboarding de dispositivos porque la plataforma usa el mismo puerto para todos los equipos y detecta automáticamente el protocolo del rastreador, reduciendo los pasos de mapeo por dispositivo en el servidor.

Para organizaciones que necesitan visibilidad continua y monitorización operativa de equipos remotos, usar Plaspy con un H50 proporciona una configuración de servidor predecible y la capacidad de confiar en Plaspy para interpretar protocolos compatibles. Para obtener más información sobre Plaspy visite https://www.plaspy.com y para los detalles más actuales de configuración específica del dispositivo verifique la documentación de Homtecs en http://www.homtecsm2m.com/
