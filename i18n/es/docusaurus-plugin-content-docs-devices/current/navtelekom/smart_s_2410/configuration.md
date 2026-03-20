---
slug: /navtelekom/smart_s_2410/configuration
id: smart_s_2410-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2410 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar Navtelekom SMART S-2410 con los ajustes públicos de servidor de Plaspy y pasos prácticos
keywords:
  - configuración Navtelekom SMART S-2410
  - instalación Navtelekom SMART S-2410
  - configuración SMART S-2410 Plaspy
  - configuración rastreador GPS Navtelekom
  - configuración servidor SMART S-2410
  - configuración de rastreador Plaspy
  - configuración dispositivo de rastreo vehicular
  - rastreo de flotas SMART S-2410
  - integración rastreador Navtelekom
  - configuración plataforma GPS SMART S-2410
---

# Navtelekom - SMART S-2410 Configuración

Esta página describe el contexto público de configuración para usar el Navtelekom SMART S-2410 con Plaspy. Se enfoca en los ajustes de servidor prácticos y los pasos previos que instaladores e integradores deben seguir para apuntar el dispositivo a Plaspy y así entregar la telemetría de posición y eventos a la plataforma. Use esta guía junto con los diagramas de conexión del fabricante, las instrucciones de NTC Configurator y la documentación de la plataforma DRC.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como NTC Configurator o DRC. Las indicaciones siguientes se centran en el punto de conexión público de Plaspy y en el flujo de trabajo necesario para que el S-2410 informe a la plataforma.

## Resumen de configuración

Este proceso prepara el SMART S-2410 para transmitir posiciones GNSS y eventos de entrada a Plaspy a través del enlace celular. El objetivo es configurar el rastreador con el endpoint del servidor Plaspy, verificar los ajustes de transporte y confirmar que el dispositivo aparece en los paneles de Plaspy.

- Configure el dispositivo para que envíe datos al endpoint del servidor Plaspy y así la telemetría llegue a la plataforma.
- Seleccione el modo de transporte requerido por su herramienta de instalación y ajuste el puerto compartido de Plaspy.
- Verifique la conectividad celular y que la SIM esté activa para telemetría 2G cuando corresponda.
- Use Bluetooth o el software del fabricante para la puesta en marcha local y cambios de parámetros.
- Confirme que el dispositivo informa posición y eventos de entrada a Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el SMART S-2410:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza la detección automática de protocolo, lo que reduce la necesidad de seleccionar un protocolo en el lado de la plataforma.

## Requisitos previos típicos

- Alimentación del vehículo conectada y estable, ya que el SMART S-2410 se alimenta del vehículo y no tiene batería recargable interna.
- SIM activa instalada y verificada para acceso a red 2G donde 2G esté disponible y sea necesario.
- Acceso a herramientas de configuración Navtelekom como NTC Configurator o la plataforma DRC para cambios de firmware y parámetros.
- Un smartphone o tablet con Bluetooth para la puesta en marcha local si se utiliza la interfaz Bluetooth del dispositivo.
- Diagramas de cableado e instalación de Navtelekom para confirmar las conexiones correctas de entradas, salidas y alimentación.
- Acceso administrativo a Plaspy para verificar la presencia del dispositivo y la telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SMART S-2410 transmite datos de ubicación y eventos al endpoint compartido del servidor Plaspy y al puerto indicado. Plaspy acepta la conexión entrante por TCP o UDP y asigna el dispositivo al stream apropiado según la detección automática del protocolo.

- El dispositivo informa posición GNSS, velocidad y rumbo al endpoint de Plaspy.
- Eventos de entradas discretas, como ignición, puertas y alarmas, se envían a Plaspy para alertas y reportes.
- Valores analógicos o entradas configurables se transmiten para que Plaspy muestre telemetría simple, como nivel de combustible.
- Acciones de salidas de control se reportan y pueden monitorearse mediante eventos en Plaspy.
- Todas las comunicaciones se dirigen a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 con UDP o TCP según lo configure el dispositivo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Navtelekom, como NTC Configurator, la plataforma DRC o las herramientas de puesta en marcha por Bluetooth.
2. En los ajustes del servidor del dispositivo introduzca el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el rastreador exige una selección explícita de transporte durante la configuración.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante y confirme que no hay errores de parámetros.
6. Reinicie el dispositivo si la herramienta o el firmware lo requieren para activar los nuevos parámetros de red.
7. Valide que el SMART S-2410 está reportando a Plaspy comprobando la presencia del dispositivo y la telemetría en la interfaz de Plaspy.

## Ejemplos de comandos de configuración

El SMART S-2410 se configura normalmente con las herramientas del fabricante (NTC Configurator o DRC) o mediante la puesta en marcha por Bluetooth. Las sintaxis exactas de comandos y los comandos SMS son específicos del fabricante y pueden variar según el firmware, por lo que debe seguir la documentación de Navtelekom para comandos específicos del dispositivo. Si usa una herramienta local o remota de Navtelekom, establezca el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, luego guarde y reinicie la unidad según sea necesario.

## Notas de configuración

- Las variaciones de firmware pueden cambiar cómo se nombran los parámetros o dónde se encuentran los ajustes en la herramienta de configuración; confirme los nombres de los parámetros con la documentación de Navtelekom.
- Elija UDP o TCP según la preferencia del instalador y las recomendaciones específicas del firmware; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Al comisionar vía Bluetooth, asegúrese de que el dispositivo móvil tenga la versión correcta de la app del fabricante y las credenciales de emparejamiento.
- Use la plataforma DRC para actualizaciones remotas masivas y gestión de firmware si administra muchas unidades.
- Verifique la disponibilidad de la red 2G en su región antes de desplegar modelos antiguos diseñados para operación en 2G.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2410 con Plaspy ofrece visibilidad vehicular sencilla para organizaciones que necesitan reporte confiable de posición y eventos de entrada en regiones donde 2G sigue disponible. La combinación de hardware compacto, múltiples opciones de entradas y puesta en marcha por Bluetooth hace al S-2410 una opción práctica para instalaciones que requieren telemetría esencial y funciones básicas de control remoto.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el SMART S-2410 visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y diagramas de cableado consulte el sitio del fabricante https://www.navtelecom.ru/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
