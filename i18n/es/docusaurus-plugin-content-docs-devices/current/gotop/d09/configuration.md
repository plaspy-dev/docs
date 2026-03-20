---
slug: /gotop/d09/configuration
id: d09-configuration
sidebar_label: Configuration
title: GOTOP - D09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP D09 para conectar con Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - configuración GOTOP D09
  - instalación GOTOP D09
  - configuración servidor GOTOP D09
  - GOTOP D09 Plaspy
  - rastreador de activos GOTOP
  - configuración rastreador GPS magnético
  - opciones de batería D09
  - configuración GPS para activos
  - configuración de rastreo de flotas
  - ajustes del servidor de rastreador GPS
---

# GOTOP - D09 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS de activos GOTOP D09 con Plaspy. Se enfoca en los ajustes del servidor en el lado de Plaspy y en los pasos prácticos que usted o su instalador deben seguir para preparar un D09 y que reporte de forma fiable a la plataforma Plaspy. Use esta guía para planificar la instalación, verificar parámetros y entender cómo las capacidades del D09 se adaptan al modelo de ingestión de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El D09 es un rastreador portátil con base magnética que ofrece posicionamiento multimodal (GPS, BDS, AGPS, WiFi y LBS), varias capacidades de batería (D09A/B/C), soporte 4G LTE y 2G, configuración por SMS y alarmas de eventos — todo configurable para reportar a Plaspy para seguimiento en vivo, alertas y reproducción de historial.

## Resumen de configuración

El objetivo al configurar un GOTOP D09 para Plaspy es garantizar que el dispositivo envíe datos de ubicación y eventos al endpoint compartido de Plaspy para que los activos sean visibles en la plataforma en tiempo real y en trazas históricas. La configuración generalmente consiste en apuntar el D09 al servidor de Plaspy, seleccionar el transporte, guardar parámetros y validar el primer informe en la plataforma Plaspy.

- Configure el endpoint de reporte del dispositivo hacia el servidor de Plaspy para que los mensajes GPS y de alarma lleguen a su cuenta.
- Seleccione el método de transporte (UDP o TCP) si el dispositivo lo solicita y asegúrese de que el puerto esté en el valor estándar usado por Plaspy.
- Aplique y guarde los parámetros en el D09 usando la herramienta de configuración del fabricante o comandos SMS según lo que soporte su dispositivo.
- Valide la conectividad confirmando que el D09 aparece en Plaspy y que envía actualizaciones de ubicación y telemetría en tiempo real.
- Utilice la función de fallback por SMS para búsquedas rápidas de ubicación y para provisionar parámetros cuando no tenga acceso a herramientas directas.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy will automatically detect the tracker protocol once the device reports to the shared Plaspy endpoint

Nota: Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador para simplificar despliegues multi-vendedor.

## Requisitos habituales antes de la configuración

- Un equipo GOTOP D09 cargado y operativo con la opción de batería deseada instalada
- Conexión celular válida y una SIM con datos activa compatible con las bandas de red del D09
- Acceso al método oficial de configuración GOTOP o al software del proveedor y a los comandos de parámetros SMS que el dispositivo soporte
- El IMEI o identificador del dispositivo necesario para registrar o verificar el rastreador en su cuenta de Plaspy
- Una cuenta de Plaspy o acceso al tenant de Plaspy donde el dispositivo será visible
- Herramientas básicas para la colocación y prueba, como un soporte temporal, un teléfono para provisionar por SMS y una computadora si la herramienta del proveedor es web o para PC

## Cómo se conecta este rastreador a Plaspy

Cuando se configura hacia el endpoint de Plaspy, el D09 envía mensajes de posicionamiento y eventos al servidor y puerto compartido de Plaspy para que Plaspy pueda ingerir, mostrar y generar alertas a partir de esos mensajes. La detección automática de protocolo de Plaspy facilita aceptar datos del D09 sin necesidad de una selección manual del protocolo en el backend.

- El dispositivo se configura para reportar a d.plaspy.com (o la IP equivalente) en el puerto 8888.
- El D09 puede usar transporte UDP o TCP en el puerto 8888 según la selección en los ajustes del dispositivo.
- Las actualizaciones de ubicación, alarmas por movimiento o caída, avisos de batería baja y otra telemetría se reenvían a Plaspy para su visualización en el mapa en tiempo real y para el historial.
- Los mensajes de ubicación por SMS continúan disponibles como canal de respaldo para consultas rápidas de posición cuando sea necesario.
- La detección automática del protocolo de Plaspy gestiona la selección del protocolo del proveedor una vez que el dispositivo comienza a reportar.

## Flujo de configuración típico

1. Acceda al método oficial de configuración GOTOP o al software del proveedor (herramienta para PC, consola web o configuración por SMS) suministrado.
2. En los ajustes del servidor del dispositivo introduzca d.plaspy.com o 54.85.159.138 como endpoint de reporte.
3. Configure el puerto de reporte en 8888 (este es el puerto que Plaspy usa para todos los dispositivos).
4. Elija UDP o TCP si el D09 requiere una selección de transporte en sus parámetros.
5. Aplique o guarde la configuración usando la herramienta del proveedor o envíe los comandos SMS de parámetros necesarios al dispositivo.
6. Reinicie o haga un ciclo de energía al D09 si las instrucciones del fabricante indican que es necesario para activar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy comprobando el primer mensaje de ubicación en vivo y los eventos en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos varían según la versión de firmware de GOTOP y según utilice la herramienta PC/web del proveedor o comandos SMS. Los dispositivos GOTOP suelen soportar configuración por parámetros vía SMS y las herramientas del proveedor ofrecen una interfaz para fijar servidor, puerto, transporte e intervalos de reporte. Debido a que los comandos y la sintaxis difieren entre revisiones de firmware, consulte el manual de configuración GOTOP suministrado con su D09 para la sintaxis y ejemplos concretos.

Si prefiere el aprovisionamiento por SMS, los patrones públicos habituales incluyen enviar cadenas de parámetros por SMS al número IMEI del dispositivo o al número de la SIM para establecer servidor y puerto; estas cadenas SMS son específicas del proveedor. Consulte la documentación oficial de GOTOP para el formato exacto de comandos según el firmware de su D09.

## Notas de configuración

- Las diferencias de firmware y las versiones de las herramientas del proveedor pueden cambiar los nombres exactos de los parámetros y la sintaxis de los comandos SMS; siempre verifique el conjunto de comandos para el firmware de su dispositivo.
- TCP versus UDP: seleccione el transporte requerido por su instalación o permitido por su red. Plaspy soporta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- La configuración por SMS es comúnmente soportada en el D09 y resulta útil para aprovisionamiento remoto cuando no hay acceso a herramientas directas.
- Mantenga la batería del dispositivo cargada durante la configuración y pruebas iniciales, especialmente en modelos de mayor autonomía como el D09C.
- Confirme la cobertura celular en el sitio de despliegue, ya que el reporte fiable a d.plaspy.com requiere una conexión de datos activa o capacidad de SMS como respaldo.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D09 con Plaspy le permite transmitir de manera sencilla posicionamiento multimodal y eventos de alarma a una plataforma centralizada de gestión de flotas y activos. La robustez del D09, su montaje magnético y las opciones de batería lo hacen práctico para protección de activos discretos, mientras que Plaspy se encarga de la ingestión, visualización y alertas para monitoreo en vivo y análisis de trazas históricas.

Learn more about Plaspy and how it works with devices like the GOTOP D09 at https://www.plaspy.com. For device-specific command syntax, firmware notes, and the latest configuration guidance from the manufacturer, verify the current documentation at https://www.gotop.cc/ as methods and firmware behavior can change over time.
