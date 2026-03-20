---
slug: /hunterpro/cp60_temp/configuration
id: cp60_temp-configuration
sidebar_label: Configuration
title: HunterPro - CP60-TEMP Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del HunterPro CP60-TEMP para integrarlo con Plaspy y los ajustes públicos de servidor
keywords:
  - Configuración HunterPro CP60-TEMP
  - Instalación HunterPro CP60-TEMP
  - Integración CP60-TEMP Plaspy
  - Configuración rastreador HunterPro
  - Configuración servidor CP60-TEMP
  - Configuración GPS Plaspy
  - Configuración monitoreo CP60-TEMP
  - Configuración plataforma GPS Plaspy
  - Seguimiento temperatura remolque refrigerado
  - Sensor de temperatura rastreador GPS
---

# HunterPro - CP60-TEMP Configuración

Esta página describe el contexto público de configuración para usar el rastreador HunterPro CP60-TEMP con Plaspy. Explica los valores de servidor compartidos que Plaspy requiere y los pasos prácticos que la mayoría de los instaladores sigue para preparar un CP60-TEMP y hacerlo visible en la plataforma Plaspy. Use esta documentación para comprender los valores de servidor necesarios y el flujo de trabajo típico; para detalles específicos del dispositivo siga la documentación oficial de HunterPro.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que la guía a continuación se centra en los valores públicos y en el proceso práctico para aplicar la configuración y lograr la integración con Plaspy.

## Resumen de la configuración

Este proceso prepara el CP60-TEMP para reportar temperatura y ubicación a Plaspy usando el endpoint y el puerto compartidos de la plataforma. El objetivo es asegurar que el equipo apunte a Plaspy, utilice el transporte correcto y que la plataforma pueda detectar automáticamente el protocolo del rastreador e iniciar la ingestión de telemetría.

- Apuntar el dispositivo al endpoint del servidor Plaspy para enrutar los datos a la plataforma.
- Confirmar que el dispositivo use el puerto 8888, requerido por Plaspy para todos los dispositivos.
- Seleccionar transporte UDP o TCP en el dispositivo si requiere elección de transporte.
- Aplicar y guardar la configuración en el dispositivo HunterPro usando el método oficial del fabricante.
- Validar que el equipo sea visible en Plaspy y que reporte datos de temperatura y ubicación.

## Valores de servidor de Plaspy

Use estos valores públicos de Plaspy al configurar el CP60-TEMP para comunicarse con la plataforma:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)
- Transport: UDP o TCP pueden usarse; el dispositivo puede configurarse con cualquiera de los dos en el puerto 8888
- Protocol handling: Plaspy detecta automáticamente el protocolo del rastreador para aceptar reportes de equipos compatibles

## Requisitos típicos antes de la configuración

- Acceso físico al CP60-TEMP para la configuración, o acceso a la herramienta de instalador provista por HunterPro
- Fuente de alimentación estable y dispositivo correctamente instalado para que los cambios de configuración se conserven
- Los detalles del servidor Plaspy indicados arriba disponibles para ingresarlos en la interfaz del dispositivo
- Confirmación de la compatibilidad de firmware o revisión de hardware por parte de HunterPro antes de realizar cambios
- Acceso al software de configuración del fabricante, aplicación móvil o método por SMS/comandos según documente HunterPro
- Acceso administrativo a la cuenta Plaspy o al canal de incorporación donde se monitoreará el dispositivo

## Cómo se conecta este rastreador a Plaspy

El CP60-TEMP se configura para enviar datos de temperatura y ubicación al endpoint y puerto compartidos de Plaspy. Una vez apuntado correctamente, Plaspy detecta automáticamente el protocolo del rastreador e inicia la ingestión de la telemetría del dispositivo para monitoreo y alertas.

- El rastreador envía reportes periódicos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los reportes pueden enviarse por UDP o TCP según la configuración del dispositivo y la preferencia del instalador
- Plaspy identifica automáticamente el protocolo del rastreador y mapea los datos entrantes dentro de la plataforma
- Los datos de temperatura y ubicación aparecen en Plaspy para el monitoreo de la cadena de frío
- Eventos del dispositivo y estado de conectividad quedan disponibles en la plataforma una vez que el reporte esté establecido

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de HunterPro para el CP60-TEMP (herramienta web del fabricante, utilidad de escritorio, app móvil o interfaz de comandos).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo del endpoint del dispositivo.
3. Configure el puerto del dispositivo a 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elección; ambos protocolos son compatibles en el puerto 8888.
5. Aplique o guarde la configuración usando la herramienta de HunterPro y confirme que el guardado fue exitoso.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario un reinicio para aplicar cambios de red.
7. Valide que el CP60-TEMP reporte a Plaspy revisando el estado del dispositivo y los datos entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El fabricante define los comandos o campos exactos de configuración para el CP60-TEMP. La sintaxis de comandos y las herramientas pueden variar según el firmware y el software del proveedor. Si dispone de cadenas de comandos o de un formato de archivo de configuración proporcionado por HunterPro, introduzca los valores del servidor Plaspy indicados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) usando el método soportado por el dispositivo.

Si HunterPro suministra comandos SMS específicos, comandos seriales o ejemplos de archivos de configuración para el CP60-TEMP, coloque el dominio o la IP del servidor y el puerto como se muestra en esos comandos y siga el orden requerido por el fabricante. Consulte el manual de HunterPro para las plantillas de comando exactas.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la disposición de menús, la sintaxis de comandos y las opciones de transporte soportadas; confirme siempre la versión de firmware del dispositivo antes de aplicar cambios.
- Elegir UDP frente a TCP puede afectar las garantías de entrega y el comportamiento en redes con pérdida; seleccione el transporte más adecuado para su entorno y pruebe la conectividad.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que los valores importantes a configurar en el equipo son la dirección del servidor y el puerto.
- Mantenga un registro de los comandos del fabricante usados durante la configuración y de cualquier identificador de dispositivo que Plaspy requiera para enlazar el rastreador con su cuenta.
- En caso de duda, siga la documentación y las herramientas de HunterPro para evitar configuraciones incompatibles.

## Por qué usar Plaspy con esta configuración

Integrar el HunterPro CP60-TEMP con Plaspy ofrece a las organizaciones visibilidad centralizada tanto de la temperatura como de la ubicación de activos refrigerados. Usar los ajustes de servidor compartidos de Plaspy simplifica el despliegue a través de flotas y permite que la plataforma interprete automáticamente los datos del rastreador una vez que el dispositivo apunte al endpoint de Plaspy.

Para obtener más información sobre Plaspy y cómo admite la integración de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes sobre la configuración específica del dispositivo, notas de firmware y orientación del fabricante para el CP60-TEMP, verifique la información actual en el sitio de HunterPro http://hunterpro.com.tw/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
