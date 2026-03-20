---
slug: /bce/fm_500_light/configuration
id: fm_500_light-configuration
sidebar_label: Configuration
title: BCE - FM-500 Light+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el BCE FM-500 Light+ al servidor Plaspy y verificar visibilidad del dispositivo
keywords:
  - configuración BCE FM-500 Light+
  - configuración FM-500 Light+
  - configuración rastreador GPS BCE
  - configuración FM-500 Light+ Plaspy
  - configuración servidor rastreador GPS
  - configuración seguimiento de vehículos
  - configuración seguimiento de flota
  - configuración dispositivo rastreo de objetos
  - integración rastreador BCE
  - configuración dispositivo Plaspy
---

# BCE - FM-500 Light+ Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS BCE FM-500 Light+ con la plataforma Plaspy. Se enfoca en los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda comunicar su ubicación y estado a la plataforma. La orientación aquí se basa en los valores públicos de servidor de Plaspy y en pasos generales de configuración; no sustituye el manual detallado del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para comprender los requisitos desde el lado de Plaspy y el flujo de configuración común; consulte la documentación de BCE o las herramientas del distribuidor para pantallas y comandos específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el FM-500 Light+ para enviar sus datos de seguimiento (posición, movimiento y eventos de entradas/salidas) a Plaspy usando el endpoint público y el puerto de Plaspy. El objetivo es configurar el rastreador para que Plaspy pueda detectar automáticamente su protocolo y presentar el dispositivo en la plataforma para monitoreo e informes.

- Apunte el FM-500 Light+ al endpoint del servidor Plaspy para que los datos lleguen a su cuenta de Plaspy.
- Use el puerto compartido de Plaspy para que la plataforma acepte y detecte automáticamente el protocolo del dispositivo.
- Valide la conectividad GSM y los ajustes APN para que el rastreador pueda transmitir por la red móvil.
- Guarde y aplique la configuración mediante la herramienta de BCE o el método de configuración soportado.
- Reinicie el dispositivo si es necesario y verifique que el dispositivo sea visible en Plaspy.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported on port 8888  
- Plaspy automatically detects the device tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Un FM-500 Light+ con alimentación y antenas GPS y GSM conectadas y funcionales según corresponda.
- Una tarjeta SIM activa con datos habilitados y los ajustes APN configurados para la red móvil.
- Acceso al método de configuración del fabricante BCE o al software del distribuidor para cambiar el servidor y el puerto.
- Conocimiento de la versión de firmware del dispositivo y de cualquier opción de configuración específica del proveedor.
- Una conexión de red confiable para validar que el rastreador puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el FM-500 Light+ usa su conexión GSM para enviar información de posición y estado del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy recibe el flujo de datos entrante y utiliza detección automática de protocolo para interpretar los mensajes de los modelos compatibles.

- El rastreador envía datos de posición GPS/GLONASS y atributos de movimiento a d.plaspy.com (54.85.159.138) en el puerto 8888.
- Los datos pueden transmitirse por UDP o TCP según el transporte seleccionado en la configuración del dispositivo.
- Entradas, salidas y otros estados de sensores compatibles se incluyen en los reportes que Plaspy analiza.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente cuando llegan los datos.
- Tras una configuración exitosa y el primer paquete recibido, el dispositivo debería aparecer en Plaspy para monitoreo y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del BCE FM-500 Light+ o al software del proveedor proporcionado por el fabricante o distribuidor.
2. Ubique la sección de servidor o ajustes GPRS/conexión en la herramienta de configuración.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
6. Aplique o guarde los cambios de configuración dentro de la herramienta BCE.
7. Reinicie el dispositivo si la herramienta o el equipo solicitan un reinicio para aplicar los nuevos ajustes de red.
8. Valide que el dispositivo reporte a Plaspy revisando la plataforma Plaspy y confirmando la recepción de datos.

## Ejemplos de comandos de configuración

El FM-500 Light+ permite una configuración flexible mediante herramientas del fabricante y interfaces del proveedor. La sintaxis exacta de comandos y los métodos de configuración varían según la versión de firmware y la utilidad de BCE que utilice. Dado que BCE ofrece varias interfaces de configuración, siga la documentación oficial de BCE o la herramienta del distribuidor para ingresar los ajustes de Plaspy (d.plaspy.com o 54.85.159.138, puerto 8888, UDP/TCP). Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo envíe datos al servidor.

## Notas de configuración

- Las versiones de firmware y las herramientas del proveedor pueden cambiar los campos disponibles y la sintaxis de comandos; siempre confirme los campos correctos para servidor, puerto y transporte en la herramienta BCE que esté usando.
- La elección entre UDP y TCP depende de la preferencia del instalador y de las condiciones de la red; ambos son aceptados por Plaspy en el puerto 8888 y Plaspy detectará el protocolo automáticamente.
- Verifique APN y la conectividad de datos de la SIM antes de intentar registrar el dispositivo en Plaspy para evitar falsos negativos durante la validación.
- Después de la configuración, espere unos minutos para que los primeros paquetes lleguen a d.plaspy.com y para que Plaspy detecte y registre el dispositivo.
- Mantenga una copia de la configuración original del dispositivo y anote los cambios para poder revertirlos si es necesario.

## Por qué usar Plaspy con esta configuración

Configurar el BCE FM-500 Light+ para reportar a Plaspy ofrece un camino directo para integrar la telemetría del dispositivo en una plataforma de seguimiento unificada. Las organizaciones que necesitan visibilidad sobre la ubicación de activos, movimientos y estados de entradas/salidas se benefician de apuntar el rastreador al endpoint y puerto compartidos de Plaspy, lo que permite monitoreo centralizado, generación de informes y gestión de eventos.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que confirme los pasos de instalación y las referencias técnicas más recientes con BCE en http://www.bce.en/ antes de realizar instalaciones.
