---
slug: /gotop/d22_4g/configuration
id: d22_4g-configuration
sidebar_label: Configuration
title: GOTOP - D22-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el GOTOP D22-4G a Plaspy y activar el seguimiento de flotas en tiempo real
keywords:
  - Configuración GOTOP D22-4G
  - Instalación GOTOP D22-4G
  - Rastreador GOTOP Plaspy
  - Integración D22-4G Plaspy
  - Configuración rastreador GPS GOTOP
  - Instalación rastreador vehicular Plaspy
  - Ajustes servidor D22-4G
  - Seguimiento de flotas D22-4G
  - Configuración rastreador Plaspy
  - Configuración servidor rastreador GPS
---

# GOTOP - D22-4G Configuration

Esta página documenta el contexto público de configuración para usar el rastreador impermeable GOTOP D22-4G con Plaspy. Explica los valores de servidor compartidos por Plaspy que usan todos los dispositivos compatibles y ofrece orientación práctica para preparar el D22-4G y que reporte en la plataforma Plaspy para seguimiento en tiempo real y gestión de flotas.

Plaspy utiliza un único endpoint y puerto compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el D22-4G pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso esta página se centra en los valores públicos del lado de la plataforma y en un flujo de trabajo práctico de integración.

## Resumen de la configuración

Configurar el D22-4G para Plaspy prepara el equipo para enviar de forma fiable datos de ubicación, telemetría y eventos a la plataforma. Los pasos siguientes se enfocan en establecer el destino de red y el transporte para que el dispositivo pueda abrir una conexión TCP/IP y comenzar a enviar eventos GPS y de sensores a Plaspy para visualización, alertas e informes.

- Apuntar el rastreador al servidor de Plaspy para que los paquetes TCP/IP lleguen a la plataforma
- Seleccionar el protocolo de transporte que requiera el equipo (UDP o TCP) y configurar el puerto compartido
- Verificar la conectividad celular y que la SIM del dispositivo tenga servicio de datos activo
- Guardar y aplicar la configuración en el dispositivo y reiniciar si es necesario para que comience a reportar
- Confirmar visibilidad en Plaspy validando que el dispositivo envíe ubicación y eventos

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy  

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando el equipo se conecte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Requisitos típicos antes de la configuración

- Una unidad D22-4G instalada correctamente y alimentada desde el arnés del vehículo o una fuente de energía aprobada
- Una SIM celular activa con datos habilitados y compatible con las bandas 4G de su región y su operador
- Acceso al método de configuración GOTOP recomendado para su unidad, como software del fabricante, una herramienta de configuración o comandos SMS si están soportados
- Cobertura de red 4G LTE en la ubicación del dispositivo para permitir la comunicación TCP/IP con Plaspy
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para ingresar durante la configuración
- Una cuenta Plaspy y completar el registro del dispositivo en la plataforma para vincular el ID reportado con su flota (lado de la plataforma)

## Cómo se conecta este rastreador a Plaspy

Al apuntar al servidor de Plaspy, el D22-4G establece una sesión celular TCP/IP y envía mensajes de ubicación y eventos al endpoint compartido de Plaspy. Plaspy ingiere estos mensajes, asocia el identificador del dispositivo a su cuenta y muestra telemetría en tiempo real y registros históricos para la gestión de flotas.

- El rastreador envía actualizaciones de posición GPS/BDS y eventos de movimiento por 4G TCP/IP a d.plaspy.com o 54.85.159.138 en el puerto 8888  
- Telemetría como estado de ignición, entradas de puerta, alarmas por exceso de velocidad y vibración se envía como mensajes de evento a Plaspy  
- El almacenamiento en búfer offline y la reemisión tras zonas sin cobertura permiten que el dispositivo reenvíe registros almacenados al mismo endpoint de Plaspy cuando se restablece la conectividad  
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse en el puerto compartido, por lo que los mensajes del dispositivo se analizan y muestran en la plataforma  
- El estado de salud del dispositivo y la conectividad se hacen visibles en el panel de Plaspy para el monitoreo operativo

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración GOTOP para el D22-4G (herramienta web del fabricante, aplicación de escritorio o utilidad de configuración aprobada).  
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en la sección de servidor o ajustes de reporte del dispositivo.  
3. Configure el puerto del dispositivo en 8888 como puerto de destino para los reportes.  
4. Seleccione UDP o TCP como transporte si el equipo requiere selección explícita del protocolo.  
5. Aplique o guarde la configuración usando la herramienta GOTOP o la interfaz del dispositivo.  
6. Reinicie el dispositivo si las instrucciones del fabricante indican un reinicio para activar los nuevos ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y las actualizaciones de ubicación en su cuenta o en el panel de la plataforma.

## Ejemplos de comandos de configuración

El fabricante puede ofrecer múltiples métodos de configuración como una utilidad de escritorio, herramienta web o comandos SMS/estilo AT. Aquí no se incluyen las líneas de comando públicas exactas ni la sintaxis SMS porque varían según firmware y herramienta. Si dispone de comandos proporcionados por GOTOP o una hoja de configuración SMS del vendedor, aplique la secuencia que configure:

- server a d.plaspy.com o 54.85.159.138  
- port a 8888  
- transport a UDP o TCP si es requerido

Si necesita comandos a nivel de dispositivo, consulte la guía de configuración del GOTOP D22-4G del fabricante para obtener la sintaxis exacta y el orden recomendado para aplicar los ajustes.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús, la sintaxis de comandos y las opciones de transporte disponibles; confirme siempre los comandos con la versión de firmware del equipo.  
- Elija TCP o UDP de acuerdo con las instrucciones de la herramienta del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Use el nombre de dominio d.plaspy.com o la dirección IP 54.85.159.138; cualquiera de las dos opciones es válida para enrutar a Plaspy, aunque algunos instaladores prefieren nombres de dominio para facilitar futuras actualizaciones de servidor.  
- Mantenga un registro del IMEI o identificador del dispositivo antes de la configuración para poder asociarlo con el activo correcto en Plaspy.  
- Las herramientas de configuración del fabricante y los comandos SMS son la fuente autorizada para los pasos exactos; consulte la documentación GOTOP en caso de duda.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D22-4G con Plaspy ofrece visibilidad centralizada de ubicación de vehículos, eventos y telemetría para operaciones de flota, prevención de pérdidas y seguridad de conductores. Las entradas del D22-4G orientadas a vehículos y sus capacidades de alarma se combinan con la ingestión en tiempo real y la detección automática de protocolo de Plaspy para brindar una solución de rastreo confiable para flotas comerciales.

Learn more about Plaspy and how platform features map to device capabilities at https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and detailed setup instructions for the D22-4G, please verify current information with the manufacturer at https://www.gotop.cc/.
