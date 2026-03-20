---
slug: /careu/ez2/configuration
id: ez2-configuration
sidebar_label: Configuration
title: CAREU - EZ2 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador GPS CAREU EZ2 para reportar a Plaspy con ajustes públicos de servidor y guía práctica de instalación
keywords:
  - configuración CAREU EZ2
  - instalación CAREU EZ2
  - configuración EZ2 Plaspy
  - configuración de rastreador Plaspy
  - configuración rastreador GPS EZ2
  - integración rastreador CAREU
  - configuración de rastreador de vehículos
  - configuración GPS para flotas
  - ajustes de servidor EZ2
  - telemetría CAN OBD II
---

# CAREU - Configuración EZ2

Esta página describe el contexto público de configuración para utilizar el rastreador GPS CAREU EZ2 con Plaspy. Resume los ajustes de servidor públicos y el flujo de configuración práctico que se utiliza para apuntar un equipo EZ2 a la plataforma Plaspy, de modo que ubicación, telemetría CAN/OBD II y eventos del dispositivo se entreguen en los paneles de Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el borde de la plataforma. Los pasos de configuración del fabricante para el EZ2 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía se enfoca en los ajustes públicos del lado Plaspy y en recomendaciones prácticas basadas en las capacidades del EZ2, como conectividad 4G LTE Cat 1 con fallback a 2G y telemetría CAN/OBD II U1Lite+.

## Resumen de la configuración

El objetivo al configurar el CAREU EZ2 para Plaspy es garantizar que el rastreador pueda establecer un enlace de datos estable con el endpoint compartido de Plaspy para que posiciones, diagnósticos del vehículo y datos de eventos lleguen de forma fiable. Use la interfaz de configuración del fabricante para apuntar el EZ2 al servidor de Plaspy y valide la conectividad y el reporte.

- Configure los ajustes de red del dispositivo para que el EZ2 envíe datos al dominio o IP del servidor de Plaspy.
- Establezca el puerto y el transporte para que el rastreador pueda abrir una sesión con Plaspy en el puerto de ingestión estándar.
- Verifique APN, plan de datos de la SIM y conectividad celular para habilitar LTE y el fallback a 2G.
- Valide que el dispositivo reporte ubicación y telemetría CAN/OBD II en Plaspy tras la configuración.
- Confirme que eventos de inmovilizador, geocercas y accesorios sean visibles en Plaspy según sea necesario.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el CAREU EZ2. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta a la plataforma.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos habituales antes de la configuración

- Tarjeta SIM activa con plan de datos y servicio del operador habilitado para LTE y fallback a 2G según se requiera.
- Datos de APN, usuario y contraseña del operador móvil si la SIM lo solicita.
- Instalación física del equipo con alimentación aplicada y acceso a la herramienta de configuración del fabricante o a comandos SMS.
- Acceso al manual de configuración de CAREU, herramienta web o portal del proveedor para cambiar ajustes de servidor y transporte.
- Cuenta o proyecto en Plaspy donde pueda confirmar que el dispositivo se ha registrado y está enviando telemetría.
- Conocimientos básicos sobre si su instalación requiere transporte TCP o UDP para que el rastreador se conecte.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el CAREU EZ2 establece una conexión saliente por la red celular hacia el endpoint compartido de ingestión de Plaspy en el puerto indicado. El rastreador envía reportes periódicos de posición, telemetría CAN/OBD II y mensajes de eventos que Plaspy procesa y muestra en la plataforma.

- El EZ2 se configura para reportar al dominio o IP del servidor Plaspy en el puerto 8888
- El rastreador utiliza UDP o TCP como transporte para enviar telemetría a Plaspy
- Plaspy inspecciona las conexiones entrantes y detecta automáticamente el protocolo del dispositivo para el parseo correcto
- Las actualizaciones de ubicación, la telemetría diagnóstica y los eventos de geocerca/inmovilizador se encaminan a los paneles de Plaspy
- Las cargas de logs a bordo y los logs reproducidos se envían al mismo endpoint de Plaspy para preservar los datos históricos

## Flujo de configuración típico

1. Acceda al método oficial de configuración de CAREU, como la herramienta web, la utilidad del proveedor o la interfaz de comandos SMS documentada por el fabricante.
2. Localice la sección de ajustes de servidor o APN e ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como alternativa.
3. Establezca el puerto del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los equipos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su instalación o recomendación del proveedor.
5. Configure el APN y los ajustes relacionados con la SIM necesarios para la conectividad celular y guarde o aplique los cambios.
6. Reinicie o arranque de nuevo el equipo EZ2 si el procedimiento del fabricante lo requiere para aplicar cambios de red.
7. Valide que el dispositivo se haya registrado en Plaspy y esté reportando ubicación y telemetría correctamente en su proyecto Plaspy.

## Ejemplos de comandos de configuración

El CAREU EZ2 admite múltiples métodos de configuración del lado del fabricante y sintaxis de comandos según firmware y herramientas. Los comandos exactos y las cadenas SMS pueden variar por versión de firmware y se encuentran en la documentación de CAREU y las herramientas del proveedor. Dado que no se incluye aquí un conjunto público de comandos de configuración, utilice el manual de CAREU o la herramienta del instalador para aplicar los siguientes ajustes públicos de Plaspy:

- server domain d.plaspy.com or server IP 54.85.159.138
- port 8888
- transport UDP or TCP

Consulte la documentación oficial de CAREU para el formato exacto de comando o SMS requerido en su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de los menús de configuración, la sintaxis de comandos o las cadenas SMS; siempre confirme el firmware del dispositivo antes de aplicar ajustes.
- UDP y TCP se comportan de forma diferente con equipos de red y NAT; pruebe ambos transportes si tiene problemas de conectividad y consulte la guía del instalador.
- Asegúrese de que los ajustes de APN coincidan con el proveedor de la SIM; entradas de APN incorrectas son una causa común de fallos en las subidas de telemetría.
- Confirme que los canales de inmovilizador, CAN/OBD II y accesorios estén mapeados según lo esperado en la configuración de CAREU para que Plaspy reciba los campos telemétricos previstos.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo, así que concéntrese en el servidor/transporte correcto y la conectividad celular en el lado del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el CAREU EZ2 para que reporte a Plaspy ofrece a gestores de flotas y equipos operativos acceso consolidado a ubicación en tiempo real, diagnósticos del vehículo y controles basados en eventos como inmovilización y alertas de geocerca. La telemetría CAN/OBD II y el soporte de accesorios del EZ2, combinados con las capacidades de la plataforma Plaspy, proporcionan información accionable para la gestión de combustible, planificación de mantenimiento y flujos de trabajo de seguridad.

Para saber más sobre Plaspy y cómo gestiona la ingestión de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo CAREU EZ2, comandos y comportamiento de firmware consulte el sitio del fabricante https://www.systech-iot.com/ ya que la documentación del proveedor puede actualizarse con el tiempo.
