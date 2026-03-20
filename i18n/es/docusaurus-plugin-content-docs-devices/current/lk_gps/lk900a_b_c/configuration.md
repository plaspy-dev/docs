---
slug: /lk_gps/lk900a_b_c/configuration
id: lk900a_b_c-configuration
sidebar_label: Configuration
title: LK-GPS - LK900A/B/C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador LK-GPS LK900A/B/C con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - LK-GPS LK900A
  - LK-GPS LK900B
  - LK-GPS LK900C
  - configuración LK900A
  - configuración LK900 en Plaspy
  - configuración servidor LK900
  - guía configuración Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - rastreador de activos Plaspy
---

# LK-GPS - Configuración LK900A/B/C

Esta página describe el contexto público de configuración para usar la serie LK-GPS LK900A/B/C con Plaspy. Resume los ajustes de servidor y el flujo práctico necesarios para apuntar el rastreador LK900 a Plaspy, de modo que los datos de ubicación y eventos lleguen a la plataforma. Las indicaciones aquí están orientadas a los valores de integración públicos que Plaspy requiere y a los pasos de configuración del fabricante habitualmente disponibles para instaladores.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use esta página para preparar el equipo y confirmar los valores centrales del endpoint de Plaspy; luego siga la herramienta oficial de configuración de LK-GPS o los comandos SMS para instrucciones específicas del dispositivo.

## Visión general de la configuración

Esta configuración prepara el LK900A/B/C para enviar la ubicación GPS y telemetría a Plaspy, de modo que el dispositivo sea visible en el panel web y la app móvil de Plaspy. Los pasos se enfocan en garantizar que el rastreador pueda alcanzar el endpoint de Plaspy y que utilice el transporte y puerto correctos.

- Configure el rastreador para reportar a Plaspy usando el endpoint y puerto compartido.
- Verifique que los datos móviles y la configuración APN sean válidos para la SIM y la región instaladas.
- Seleccione el modo de transporte compatible con el equipo, UDP o TCP, y ajuste el puerto al de Plaspy.
- Guarde y aplique la configuración del dispositivo usando la herramienta del fabricante o los comandos SMS soportados.
- Compruebe que el rastreador aparezca en Plaspy y que reporte actualizaciones de posición y alertas de eventos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol at the shared endpoint

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar dispositivos LK-GPS para la integración con Plaspy.

## Requisitos típicos antes de la configuración

- Un dispositivo LK900A/B/C con batería cargada o una instalación con alimentación lista para configurar y probar.
- Una SIM celular válida con servicio de datos activo y el APN correcto para la red.
- Acceso al método oficial de configuración de LK-GPS, como el software del fabricante, el conjunto de comandos SMS o la herramienta de configuración proporcionada por el proveedor.
- Conocimientos básicos para elegir UDP o TCP si el dispositivo requiere selección manual del transporte.
- Acceso a una cuenta Plaspy o al flujo de aprovisionamiento para registrar el equipo una vez que comience a reportar.
- Una ubicación de prueba y una ventana de tiempo para validar que las actualizaciones en vivo llegan a Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El LK900A/B/C envía posición GPS y telemetría a través de la red celular al endpoint en la nube de Plaspy. Una vez configurado con los ajustes compartidos de servidor de Plaspy, las actualizaciones de ubicación, las alertas de eventos y el historial son visibles en la plataforma Plaspy para monitoreo e informes.

- El rastreador se configura para reportar a d.plaspy.com o alternativamente a 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP como transporte si el dispositivo requiere selección; ambos son aceptados por Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para que el servidor pueda interpretar los datos sin cambiar el puerto por dispositivo.
- Eventos como activación de geocercas, detección de movimiento y batería baja se envían a Plaspy y se muestran en la plataforma.
- Plaspy recibe reportes periódicos o por intervalo para la reproducción del historial y el análisis operativo.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de LK-GPS proporcionado por el fabricante o el proveedor.
2. Ubique la opción de servidor o host remoto en la interfaz de configuración del dispositivo.
3. Ingrese d.plaspy.com o, alternativamente, 54.85.159.138 como dirección del servidor.
4. Configure el puerto del servidor en 8888.
5. Seleccione UDP o TCP si el dispositivo requiere elección de transporte y guarde la selección.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y las actualizaciones de posición recientes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

Los comandos y herramientas exactos para configurar el LK900A/B/C varían según firmware y proveedor. La configuración del fabricante se realiza comúnmente mediante una herramienta de escritorio, una app móvil o un conjunto de comandos SMS. Debido a que los comandos específicos del modelo los proporciona LK-GPS o el distribuidor, consulte la guía de configuración de LK-GPS para la sintaxis exacta.

Si su proveedor facilita la configuración por SMS, el flujo público típico es:
- Use el comando SMS del fabricante para establecer el dominio o IP del servidor.
- Envíe un comando SMS para ajustar el puerto a 8888.
- Envíe un comando SMS para seleccionar el transporte UDP o TCP si es necesario.
- Envíe un comando SMS para guardar y reiniciar el dispositivo.

Consulte siempre la documentación oficial de LK-GPS o la lista de comandos del proveedor para el texto y el orden exacto de los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los menús de configuración disponibles y la sintaxis de los comandos SMS; verifique el conjunto de comandos correcto para su versión de dispositivo.
- Si el dispositivo soporta ambos UDP y TCP, elija el transporte recomendado por su instalador o por las pruebas; Plaspy acepta ambas opciones en el mismo puerto.
- Confirme que la configuración APN celular sea correcta para la tarjeta SIM instalada antes de iniciar la resolución de problemas de conectividad a d.plaspy.com.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados y realiza detección automática de protocolo en el servidor, por lo que no es necesario cambiar el puerto por dispositivo.
- Al realizar pruebas, permita una breve ventana para que el dispositivo se registre y envíe su primera posición después de la configuración y el reinicio.

## Por qué usar Plaspy con esta configuración

Usar el LK-GPS LK900A/B/C con Plaspy ofrece una forma sencilla de enviar ubicación en tiempo real, alertas de geocerca y telemetría a un único endpoint en la nube. Para flotas y operadores de activos, esta configuración centraliza los datos de rastreo y las notificaciones de eventos para que los equipos puedan monitorear activos, analizar rutas y responder a incidentes desde la plataforma Plaspy.

Learn more about Plaspy at https://www.plaspy.com and verify device specific configuration and firmware guidance on the LK-GPS website https://www.lk-gps.com. Manufacturer configuration methods and firmware behavior can change over time, so always confirm the current instructions on LK-GPS official documentation.
