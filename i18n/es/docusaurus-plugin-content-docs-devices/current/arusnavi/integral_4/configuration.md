---
slug: /arusnavi/integral_4/configuration
id: integral_4-configuration
sidebar_label: Configuration
title: Arusnavi - Integral 4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Arusnavi Integral 4 con Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - Arusnavi Integral 4
  - configuración Integral 4
  - configuración rastreador Arusnavi
  - configuración Plaspy
  - configuración servidor rastreador GPS
  - configuración seguimiento de vehículos
  - rastreador gestión de flota
  - configuración Integral 4 Plaspy
  - configuración GPS Arusnavi
  - integración protocolo rastreador
---

# Arusnavi - Configuración Integral 4

Esta página describe el contexto público de configuración para usar el Arusnavi Integral 4 con Plaspy. Incluye los ajustes de servidor habituales y el flujo de trabajo típico para que técnicos e integradores preparen el dispositivo y permita la comunicación con Plaspy para monitoreo y generación de reportes centralizados. La información siguiente se centra en los datos de conexión compartidos de Plaspy y en pasos generales basados en documentación pública del fabricante y prácticas comunes de instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar el endpoint y puerto de Plaspy, y confirme las opciones específicas del dispositivo con las herramientas o la documentación de Arusnavi.

## Resumen de la configuración

Preparar el Integral 4 para su integración con Plaspy garantiza que el rastreador envíe posición, telemetría y eventos de forma confiable a la plataforma central. El proceso se centra en configurar el dispositivo para que reporte a Plaspy, validar la conectividad y confirmar que los datos aparecen en la interfaz de monitoreo de Plaspy.

- Configure los ajustes de servidor del equipo para apuntar al endpoint y puerto de Plaspy, de modo que los datos se enruten a la plataforma.
- Seleccione el método de transporte (UDP o TCP) si el dispositivo requiere selección de transporte y confirme la comunicación.
- Use la herramienta oficial de configuración de Arusnavi o el método aprobado para aplicar los ajustes y guardarlos.
- Valide que GNSS, telemetría CAN/RS-485 y eventos de entradas discretas sean visibles en Plaspy después de que el dispositivo establezca conexión.
- Confirme que la función dual SIM y la conectividad celular estén activas para mantener el reporte continuo a Plaspy.

## Ajustes de servidor de Plaspy

Al configurar el Integral 4 para Plaspy, utilice los siguientes ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Dispositivo alimentado con el voltaje de operación recomendado y, si corresponde, conectado a la fuente de energía del vehículo o a una fuente de banco.
- Conectividad celular activa para la(s) SIM instaladas y verificación de que el módem 2G esté habilitado para la región.
- Acceso al método oficial de configuración de Arusnavi, como la herramienta de configuración para PC por USB, la app móvil vía Bluetooth o USB, o la interfaz web de gestión del fabricante.
- IMEI del dispositivo o identificador único anotado para registro o mapeo dentro de Plaspy.
- Firmware relativamente actualizado para la variante del equipo, a fin de asegurar el comportamiento y la compatibilidad del protocolo conocidos.
- Acceso a los conectores físicos para verificación in situ de GNSS, CAN, RS-485 y cableado de entradas/salidas si se usará telemetría o sensores.

## Cómo se conecta este rastreador a Plaspy

Integral 4 transmite posiciones GNSS, telemetría recopilada y mensajes de eventos a Plaspy a través de su enlace celular. El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy; la plataforma detecta el protocolo automáticamente para que los datos entrantes se analicen y asignen al perfil de dispositivo correcto.

- Envía posiciones GNSS y actualizaciones de movimiento al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 por el puerto 8888.
- Reporta telemetría desde interfaces CAN, RS-485 y UART opcional a Plaspy para diagnóstico y monitoreo de sensores.
- En equipos con registro tipo black box, los registros almacenados en caché se reenvían a Plaspy cuando se restablece la conectividad.
- Los eventos de entradas discretas, el estado de ignición y lecturas de sensores BLE aparecen como eventos en Plaspy una vez que el rastreador está conectado.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria una selección de protocolo adicional dentro de la plataforma.

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración de Arusnavi, como la herramienta de PC por USB, la app móvil vía Bluetooth/USB o la interfaz web provista por Arusnavi.
2. Localice la sección de monitoreo o ajustes de servidor en la herramienta del fabricante donde se ingresan el host y el puerto del servidor.
3. Ingrese el servidor de Plaspy como d.plaspy.com o, de forma opcional, 54.85.159.138 en el campo de host del servidor.
4. Ajuste el puerto a 8888, que es el puerto de monitoreo que Plaspy utiliza para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere seleccionar un tipo de transporte para la comunicación con el servidor.
6. Aplique o guarde los cambios de configuración en la herramienta de Arusnavi y confirme que los ajustes se escribieron en el dispositivo.
7. Reinicie el equipo si la herramienta del fabricante lo requiere o después de aplicar cambios de red/servidor.
8. Valide que el dispositivo reporte a Plaspy comprobando el estado de conexión y la telemetría entrante en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y el formato de configuración pueden variar según el firmware de Arusnavi y el método de configuración que utilice (herramienta USB, app móvil o interfaz web). Debido a que las herramientas del fabricante difieren entre versiones de firmware y variantes de dispositivo, siga la documentación de Arusnavi o la interfaz de la herramienta de configuración para establecer el host del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP cuando sea necesario.

Si dispone de un conjunto específico de comandos públicos por parte de Arusnavi o un mapa de comandos para el firmware de su dispositivo, aplíquelos en el orden recomendado por Arusnavi y respete los marcadores de posición que el fabricante proporcione.

## Notas de configuración

- Las variaciones de firmware de Arusnavi pueden cambiar las pantallas de configuración, los nombres de campo o la sintaxis de comandos; confirme siempre las etiquetas exactas en la herramienta que esté usando.
- Los transportes TCP y UDP se comportan de forma diferente en redes celulares; elija el transporte recomendado por su integrador o pruebe ambos para confirmar la entrega fiable. Plaspy detectará y gestionará el protocolo automáticamente.
- Dado que Plaspy usa el mismo puerto para los dispositivos soportados, el puerto principal del servidor permanece en 8888 independientemente del modelo.
- Revise los ajustes de SIM dual para asegurar que la SIM preferida proporcione conectividad de datos en la región de operación del equipo.
- Al usar registro tipo black box, pruebe un escenario de pérdida y restauración de conectividad para confirmar que los registros históricos se reenvían a Plaspy según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar Integral 4 con Plaspy ofrece una forma directa de centralizar la ubicación de vehículos, telemetría y eventos para el monitoreo de flotas y activos. El soporte multi GNSS del dispositivo, el módem celular con SIM dual y su amplio conjunto de interfaces lo hacen adecuado para flujos de telemetría donde Plaspy consolida posición, datos de sensores CAN/RS-485 y eventos discretos en paneles, alertas e informes históricos.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the most current device specific configuration details, firmware behavior and manufacturer instructions, verify information on the Arusnavi website at https://www.arusnavi.ru.
