---
slug: /navtelekom/s_2422/protocol
id: s_2422-protocol
sidebar_label: Protocol
title: Navtelekom - СМАРТ S-2422 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Navtelekom СМАРТ S-2422 con servidores Plaspy y contexto de conexión
keywords:
  - Navtelekom СМАРТ S-2422
  - protocolo Navtelekom S-2422
  - protocolo rastreador S-2422 GPS
  - compatibilidad Plaspy
  - protocolo de rastreo GPS
  - rastreador GLONASS GPS
  - telemetría S-2422
  - rastreo de vehículos Plaspy
  - gestión de flotas rastreador
  - integración GPS Navtelekom
---

# Navtelekom - Protocolo СМАРТ S-2422

Esta página ofrece el contexto público del protocolo para usar el rastreador Navtelekom СМАРТ S-2422 con Plaspy. Describe cómo el dispositivo reporta posición GNSS y telemetría a los servidores de Plaspy, explica las expectativas de transporte y conexión, y subraya consideraciones prácticas para una integración exitosa sin exponer detalles de firmware ni formatos de paquete propietarios.

El СМАРТ S-2422 es un rastreador compacto GLONASS/GPS diseñado para instalaciones vehiculares con alimentación permanente. Incluye entradas/salidas para vehículo, soporte RS-485 y 1-Wire, y Bluetooth para configuración local. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto de reporte puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del rastreador define cómo el S-2422 se identifica, reporta coordenadas GNSS, transmite telemetría de sensores y recibe comandos remotos o actualizaciones de configuración opcionales. Esta página se centra en el papel público del protocolo cuando el dispositivo está conectado a Plaspy, en lugar de en tramas de bajo nivel o codificaciones propietarias.

- Permite que el rastreador envíe actualizaciones periódicas de ubicación y telemetría basada en eventos a Plaspy para mapeo y alertas.
- Transporta estados de sensores y entradas digitales como encendido, eventos de puertas y mediciones relacionadas con combustible para visualización y reglas.
- Soporta la entrega de comandos de control o activación de salidas desde la plataforma cuando se utilizan funciones de control remoto.
- Permite a Plaspy correlacionar la identidad del dispositivo con activos de la flota para registrar, filtrar e informar datos.
- Funciona junto con opciones de configuración local como Bluetooth y gestión remota de firmware para mantener la compatibilidad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un punto único compartido y puerto para todos los dispositivos soportados y usa esa conexión para determinar automáticamente el protocolo del rastreador y analizar la telemetría entrante. En la mayoría de implementaciones, un S-2422 correctamente configurado reportará a Plaspy sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha reportes de dispositivos en el endpoint compartido d.plaspy.com y en la dirección de servidor 54.85.159.138 usando el puerto 8888.
- El S-2422 puede configurarse para usar transporte UDP o TCP según los ajustes del dispositivo y las condiciones de la red.
- Dado que todos los dispositivos en Plaspy usan el mismo puerto, la identificación y el análisis de dispositivos se gestionan en el servidor y normalmente no requieren configuración adicional por parte del usuario.
- Si el rastreador está configurado para reportar al endpoint de Plaspy, Plaspy detectará y asociará automáticamente el dispositivo con el parser y el registro de activo correspondientes.
- En general, los usuarios deben asegurarse de que el dispositivo reporte a la dirección correcta de Plaspy y que la conectividad del operador permita tráfico saliente al endpoint y puerto especificados.

## Contexto de transporte y conexión

El contexto de transporte cubre cómo el dispositivo llega a Plaspy más que los detalles internos del protocolo. El S-2422 utiliza su módem GSM para retransmitir datos GNSS y de sensores a través de un enlace celular hacia los servidores de Plaspy. Configurar correctamente el dispositivo para apuntar a Plaspy y seleccionar el modo de transporte son tareas comunes de puesta en marcha.

- El rastreador puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según su flujo de aprovisionamiento.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888; la elección puede afectar características de entrega pero no el modelo de detección de Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que la gestión de puertos se simplifica en flotas mixtas.
- Verifique que el operador de la SIM y el APN permitan conexiones salientes al endpoint de Plaspy y que los firewalls empresariales permitan tráfico hacia el mismo destino y puerto.
- Las opciones de configuración local, como Bluetooth, se utilizan para ajustes del dispositivo y no sustituyen la necesidad de apuntar el rastreador al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El СМАРТ S-2422 se reporta como compatible con Plaspy desde fábrica, pero el comportamiento exacto puede depender de la versión de firmware.
- Revisiones de hardware u opciones de interfaz en el rastreador pueden cambiar los tipos de telemetría disponibles o los intervalos de reporte.
- Algunas funciones, como la telemetría de combustible basada en RS-485 o sensores 1-Wire, requieren cableado y configuración adecuados en el dispositivo para aparecer en Plaspy.
- La selección de transporte entre UDP y TCP puede estar limitada por condiciones de red o políticas del operador y puede influir en la latencia de entrega.
- Actualizaciones remotas de firmware o herramientas de configuración del fabricante pueden alterar el comportamiento del protocolo; por ello, registre la versión de firmware al solucionar problemas.
- Siempre valide la configuración del equipo con la documentación del fabricante ante comportamientos inesperados.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de reporte del rastreador ayuda a los administradores a configurar el dispositivo, solucionar conectividad y garantizar que la telemetría llegue de forma fiable a los paneles y alertas de Plaspy. También orienta decisiones sobre transporte, cableado de sensores y gestión del ciclo de vida del firmware.

- Asegura que el rastreador apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que los datos lleguen a Plaspy.
- Ayuda a diagnosticar si los problemas son por transporte UDP versus TCP o por restricciones de la red del operador.
- Aclara qué canales de telemetría están disponibles desde entradas/salidas, RS-485 y sensores 1-Wire para mapear correctamente los paneles.
- Facilita la planificación de actualizaciones de firmware y pruebas de compatibilidad en una flota mixta.
- Reduce el tiempo de configuración al alinear la configuración del dispositivo con la detección automática de Plaspy y la asociación de activos.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom СМАРТ S-2422 con Plaspy ofrece a los operadores de flotas reporte continuo de posición GLONASS/GPS, visibilidad de telemetría de sensores y acceso a reglas y alertas a nivel de plataforma. La combinación de alimentación permanente, E/S industriales, soporte RS-485 para telemetría de combustible e integración con Plaspy hace que el S-2422 sea adecuado para vehículos que requieren seguimiento persistente y monitoreo operativo.

Si desea conocer más sobre cómo Plaspy funciona con dispositivos como el СМАРТ S-2422 visite https://www.plaspy.com para detalles de la plataforma y guías de despliegue. Para notas específicas más recientes sobre el protocolo del dispositivo, cambios de firmware e instrucciones del fabricante, verifique la información actual en el sitio web de Navtelekom https://www.navtelecom.ru/.
