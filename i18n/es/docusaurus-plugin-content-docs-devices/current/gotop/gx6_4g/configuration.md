---
slug: /gotop/gx6_4g/configuration
id: gx6_4g-configuration
sidebar_label: Configuration
title: GOTOP - GX6-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP GX6-4G y compatibilidad con Plaspy, con ajustes de servidor y flujo de configuración
keywords:
  - Configuración GOTOP GX6-4G
  - Instalación GOTOP GX6-4G
  - Configuración servidor GX6-4G
  - Configuración Plaspy GX6-4G
  - Configuración rastreador GOTOP GPS
  - Configuración rastreador de vehículo
  - Instalación rastreador para flotas
  - Configuración telemetría GX6-4G
  - Configuración rastreador Plaspy
  - GOTOP rastreador Plaspy
---

# GOTOP - GX6-4G Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GOTOP GX6-4G con Plaspy. Resume los ajustes prácticos de servidor y los pasos típicos necesarios para preparar el equipo, de modo que pueda comunicarse con la plataforma Plaspy para seguimiento en tiempo real, telemetría y reporte de eventos. La orientación a continuación se basa en los valores públicos de configuración de Plaspy y en la descripción del producto GX6-4G.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando la unidad reporta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los pasos específicos del dispositivo con la documentación oficial de GOTOP y su instalador.

## Resumen de la configuración

Preparar un GX6-4G para su uso con Plaspy se centra en configurar el dispositivo para que reporte ubicación y telemetría al servidor de Plaspy de forma fiable y en validar ese reporte desde la plataforma Plaspy. El objetivo es asegurar que el rastreador tenga conectividad celular, parámetros correctos de servidor y transporte, y que Plaspy reciba el latido (heartbeat) y los mensajes de eventos del dispositivo.

- Configure el GX6-4G para enviar GNSS y telemetría al endpoint del servidor Plaspy usando los valores compartidos de Plaspy.
- Verifique que el equipo tenga una tarjeta SIM funcional y conexión celular para que los datos se transmitan a Plaspy.
- Seleccione el tipo de transporte requerido (UDP o TCP) y configure el dispositivo para usar el puerto 8888.
- Guarde y aplique la configuración, luego valide que el dispositivo aparezca y reporte correctamente en Plaspy.
- Utilice las herramientas del fabricante o los procedimientos del instalador según sea necesario para habilitar entradas del vehículo y canales de telemetría para la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el GX6-4G:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP son compatibles con el dispositivo y aceptados por Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al servidor

Estos valores son los ajustes del endpoint compartido de Plaspy usados entre los dispositivos soportados y deben ingresarse en la configuración del rastreador donde se soliciten host, IP y puerto del servidor.

## Requisitos previos a la configuración

- Una unidad GX6-4G con alimentación y el cableado vehicular y antenas externas conectadas como lo recomienda GOTOP.
- Una tarjeta SIM estándar activa con un plan de datos y cobertura celular adecuada para transmisión 4G.
- Acceso al método oficial de configuración GOTOP para este modelo, como el software del proveedor, la herramienta de configuración o la interfaz de instalador.
- Conocimiento previo de los ajustes del servidor Plaspy d.plaspy.com y 54.85.159.138 y del puerto 8888 antes de comenzar la configuración.
- Una cuenta Plaspy o acceso a la plataforma Plaspy para validar el reporte del dispositivo después de la configuración.
- Un entorno de instalación seguro y conforme a los requisitos del vehículo y la normativa local.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GX6-4G transmite datos GNSS y telemetría del vehículo a través de su enlace celular hacia la nube de Plaspy en el endpoint y puerto compartidos. Plaspy ingiere los mensajes de ubicación y eventos y los asocia con el registro del dispositivo para que usted pueda monitorear posición en vivo, alarmas y rutas históricas.

- El rastreador envía coordenadas GNSS y datos LBS como respaldo al endpoint de Plaspy usando el transporte configurado.
- Entradas del vehículo y telemetría por CAN o UART se reenvían a Plaspy para reporte de eventos y análisis.
- Eventos de alarma como exceso de velocidad, salida de geocerca o cambios de ignición se reportan a Plaspy para alertas y registro.
- El control remoto y las consultas de estado iniciadas desde Plaspy son compatibles cuando el dispositivo y la instalación permiten el control por comandos.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo empleado por el rastreador.

## Flujo habitual de configuración

1. Acceda al método oficial de configuración GOTOP para el GX6-4G usando la herramienta del proveedor, la interfaz web o el software de instalador.
2. Asegúrese de que el GX6-4G tenga una SIM operativa, antenas conectadas y alimentación estable.
3. Ingrese el nombre de host o la IP del servidor Plaspy en la configuración del rastreador usando d.plaspy.com o 54.85.159.138 como host.
4. Configure el puerto del servidor en 8888 para la comunicación con Plaspy.
5. Si el equipo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador y las condiciones de la red.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si la herramienta o el firmware requieren un reinicio.
7. Valide que el GX6-4G reporte a Plaspy revisando el estado del dispositivo y los mensajes recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos y el método para programar el GX6-4G varían según el firmware GOTOP y la herramienta de configuración que usted utilice. Algunos instaladores emplean una utilidad de configuración o interfaz USB, y otros pueden usar SMS o métodos OTA cuando están soportados. Dado que los fabricantes proporcionan distintos formatos de comando, consulte la guía de configuración GOTOP para obtener comandos y ejemplos específicos de su versión de firmware.

Si dispone de ejemplos de comandos proporcionados por el proveedor o notas de firmware de GOTOP, úselos directamente y confirme todos los marcadores y parámetros antes de aplicarlos en unidades de producción.

## Notas de configuración

- Las diferencias de firmware y de herramientas entre distintas versiones de GOTOP pueden cambiar la sintaxis de los comandos y las opciones disponibles. Consulte siempre la documentación GOTOP para el firmware de su dispositivo.
- Elija UDP si prefiere menor sobrecarga para reportes y telemetría de posición típica, o TCP si su red y el instalador prefieren mayor fiabilidad de conexión. Plaspy acepta ambos transportes y detectará el protocolo automáticamente.
- Asegúrese de que la tarjeta SIM tenga un plan de datos activo y que los ajustes del operador requeridos por la SIM sean aplicados por su herramienta de configuración o instalador.
- Para instalaciones que requieran funciones de control remoto, confirme que el cableado y los circuitos de salida para corte de alimentación o combustible estén instalados y probados por un técnico calificado.
- Valide la conectividad en Plaspy después de la configuración y supervise los primeros reportes para confirmar el comportamiento correcto de la telemetría y los eventos.

## Por qué usar Plaspy con esta configuración

Combinar el GOTOP GX6-4G con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real de la flota, alertas basadas en eventos y reporte de telemetría detallada. La combinación permite a los operadores de flotas monitorear rutas, responder a alarmas y acceder a informes históricos y diagnósticos que ayudan a reducir tiempos de inactividad y mejorar la supervisión operacional.

Learn more about Plaspy and how it supports vehicle tracking and fleet workflows at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and installation instructions for the GX6-4G consult the official GOTOP website https://www.gotop.cc/ since manufacturer specifications and setup methods can change over time.
