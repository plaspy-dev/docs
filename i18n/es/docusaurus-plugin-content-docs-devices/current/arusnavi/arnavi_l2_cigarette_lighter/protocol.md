---
slug: /arusnavi/arnavi_l2_cigarette_lighter/protocol
id: arnavi_l2_cigarette_lighter-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L2 (cigarette lighter) Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Arnavi L2 para toma de encendedor y su comunicación con Plaspy para gestión de flotas
keywords:
  - Protocolo Arusnavi Arnavi L2
  - Protocolo GPS Arnavi L2
  - Compatibilidad Arnavi L2 con Plaspy
  - Protocolo del rastreador GPS Arusnavi
  - Protocolo de comunicación Arnavi L2
  - Protocolo de rastreo Arnavi L2
  - Rastreador GPS para toma de encendedor
  - Seguimiento de flotas Arnavi L2
  - Protocolo de dispositivo Plaspy
  - Seguimiento de vehículos Arnavi L2
---

# Arusnavi - Arnavi L2 (toma de encendedor) Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS Arusnavi Arnavi L2, de tipo para toma de encendedor, con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión utiliza Plaspy y qué aspectos importan para un reporte e integración exitosos sin exponer detalles privados de implementación.

El Arnavi L2 es un rastreador plug and play que envía posición, estado y telemetría de sensores a través de enlaces celulares y admite GNSS múltiple y sensores BLE. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento puede diferir entre unidades o tras actualizaciones de firmware.

## Visión general del protocolo

El protocolo que utiliza el Arnavi L2 define cómo el rastreador estructura y envía telemetría para que un servidor como Plaspy la procese para mapas, alertas e informes. Información pública del fabricante indica que el rastreador puede operar con un conjunto de protocolos telemáticos comunes y enviar registros almacenados cuando se restablece la conectividad.

- Permite que el rastreador inicie o mantenga una sesión con un servidor remoto para reportes periódicos o por eventos.
- Transporta identidad e información de estado del equipo para que la plataforma pueda atribuir los mensajes entrantes a la unidad correcta.
- Transmite telemetría de GNSS, sensores y entradas/salidas que Plaspy utiliza para actualizaciones de ubicación, eventos de geocerca y paneles de telemetría.
- Soporta comportamiento de carga en búfer, de modo que los registros almacenados en la memoria local (black box) se reenvían al servidor después de la reconexión.
- Puede operar usando una de las variantes de protocolo que el fabricante lista como soportadas, incluyendo INTERNAL, EXTERNAL, USER_AG y EGTS.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. En configuraciones típicas, una vez que el Arnavi L2 está configurado para reportar al endpoint de Plaspy, la plataforma identifica los mensajes del dispositivo y comienza a procesarlos sin que sea necesaria una selección manual de protocolo.

- Plaspy escucha los reportes de dispositivos en el endpoint d.plaspy.com y en la dirección IP del servidor 54.85.159.138 en el puerto configurado.
- La plataforma usa un único puerto para todos los dispositivos, lo que simplifica la configuración de los equipos y el despliegue a escala de flota.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los reportes, por lo que los usuarios rara vez necesitan elegir un perfil de protocolo manualmente en la plataforma.
- Es necesaria una configuración correcta del dispositivo y que la dirección de destino en el rastreador esté bien definida para que la detección automática funcione.
- Si un dispositivo soporta múltiples variantes de protocolo, asegúrese de que el rastreador esté configurado en una variante que el fabricante documente como compatible con servidores de terceros.

## Transporte y contexto de conexión

Opciones de conexión como UDP o TCP y la dirección de destino determinan cómo el Arnavi L2 alcanza Plaspy. El dispositivo puede configurarse para usar uno u otro transporte según el firmware y las opciones de configuración; Plaspy admite ambos modos en el puerto compartido.

- El equipo puede configurarse para usar UDP o TCP según su firmware y capacidades de configuración.
- Plaspy recibe los datos del rastreador en el puerto 8888, que es el puerto común usado para todos los dispositivos en la plataforma.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección numérica del servidor 54.85.159.138.
- Usar el nombre de dominio permite mecanismos estándar de DNS para conmutación por error y cambios de servidor sin reconfigurar cada dispositivo.
- Confirme que la SIM y la conectividad celular del dispositivo funcionan y que el rastreador tiene permiso para abrir conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o cambiar variantes de protocolo y el contenido de los mensajes, por lo que dos unidades con firmware distinto pueden comportarse de manera diferente.
- Las revisiones de hardware o paquetes de funciones opcionales pueden habilitar o eliminar capacidades como el reenvío de sensores BLE o reportes específicos de E/S.
- Los dispositivos a veces soportan múltiples nombres o formatos de protocolo; verifique cuál protocolo está activo en la unidad antes de iniciar la resolución de problemas.
- La selección de la capa de transporte influye significativamente en la fiabilidad en su entorno; elija UDP o TCP según la cobertura y el comportamiento esperado de los paquetes.
- Las herramientas de configuración del fabricante y los mecanismos de actualización pueden cambiar las direcciones o puertos de servidor por defecto durante la provisión.
- Siempre verifique la configuración del dispositivo para asegurarse de que el rastreador está reportando a d.plaspy.com o a la IP del servidor Plaspy y al puerto configurado.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a los administradores a configurar correctamente los dispositivos, interpretar su comportamiento en Plaspy y solucionar problemas de conectividad o datos de forma eficiente. Incluso con la detección automática, conocer lo que el dispositivo debe reportar y qué transporte utiliza reduce las fricciones en el despliegue.

- Ayuda a validar que los dispositivos envían los campos de telemetría esperados, como posición, estado de ignición y valores de sensores.
- Facilita diagnosticar por qué los registros almacenados no llegan tras la restauración de conectividad.
- Permite confirmar más fácilmente que el transporte y la dirección de destino correctos están en uso cuando los dispositivos no pueden alcanzar el servidor.
- Apoya la planificación de actualizaciones de firmware que puedan cambiar el comportamiento del protocolo o las funcionalidades disponibles.
- Mejora las pruebas de integración al añadir un nuevo tipo de vehículo o desplegar una flota mixta con distintos modelos de dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Arnavi L2 con Plaspy ofrece una opción compacta y de bajo esfuerzo para organizaciones que necesitan despliegues rápidos, rastreo portátil y telemetría básica de sensores. La forma de toma de encendedor y el soporte de sensores BLE hacen a este rastreador práctico para taxis, autos de alquiler y otros casos donde se requieren intercambios rápidos entre vehículos manteniendo capacidades centrales de gestión de flota.

Plaspy centraliza los datos entrantes del Arnavi L2 y los presenta mediante mapas, alertas, geocercas e informes históricos para que los equipos puedan actuar sobre la información de ubicación y comportamiento. Si desea conocer más sobre Plaspy, visite https://www.plaspy.com. Para los detalles más actuales del protocolo, notas de firmware y especificaciones del dispositivo, verifique la documentación del fabricante en https://www.arusnavi.ru porque el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
