---
slug: /stars_nav/bts_100/configuration
id: bts_100-configuration
sidebar_label: Configuration
title: Stars Nav - BTS-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Stars Nav BTS-100 con Plaspy, ajustes de servidor y pasos prácticos
keywords:
  - Configuración Stars Nav BTS-100
  - Instalación Stars Nav BTS-100
  - Configuración BTS-100 Plaspy
  - Configuración rastreador GPS Plaspy
  - GPS Bluetooth SPP
  - Configuración POI BTS-100
  - Seguimiento de flotas BTS-100
  - Configuración servidor rastreador GPS
  - Transmisión de posición BTS-100
  - Configuración plataforma GPS Plaspy
---

# Stars Nav - Configuración del BTS-100

Esta página documenta el contexto público de configuración para usar el Stars Nav BTS-100 con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos habituales que integradores y usuarios finales siguen para que el BTS-100 aporte ubicación y alertas de POI a los flujos de trabajo de Plaspy. El BTS-100 transmite datos tipo NMEA (posición y telemetría) por Bluetooth Serial Port Profile y gestiona archivos POI mediante la utilidad de PC suministrada y la interfaz mini USB.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante para el BTS-100 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello esta guía enfatiza los valores del lado Plaspy y un flujo de trabajo genérico, recomendando siempre verificar las instrucciones específicas del dispositivo en la documentación oficial de Stars Nav.

## Visión general de la configuración

Este proceso prepara al BTS-100 para entregar su flujo tipo NMEA por Bluetooth SPP a un gateway o dispositivo habilitado para Plaspy que reenvíe los datos al servidor de Plaspy. El objetivo es asegurar que la alimentación del rastreador sea aceptada por Plaspy y quede disponible para mapas, alertas e informes de flota.

- Configure el BTS-100 y cualquier dispositivo de reenvío para que la transmisión GPS se dirija a Plaspy.
- Ingrese los ajustes del servidor Plaspy en el dispositivo que reenvía los datos para apuntar correctamente a Plaspy.
- Valide la conectividad para que las actualizaciones de posición aparezcan en los mapas y registros de Plaspy.
- Confirme los ajustes de POI y del intervalo de trazado en el BTS-100 según las necesidades de reporte.
- Guarde y pruebe la configuración con un flujo de posición en vivo para verificar la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el gateway o el dispositivo que aceptará el stream Bluetooth SPP del BTS-100 y lo reenviará a Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según el dispositivo que reenvía
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Ingrese el dominio o la IP en la configuración del dispositivo o gateway. Plaspy acepta UDP o TCP en el puerto 8888 y detectará el protocolo usado por la alimentación del rastreador.

## Requisitos previos habituales

- Un BTS-100 cargado con Bluetooth SPP habilitado y emparejado con el dispositivo que hará el reenvío
- Una cuenta en Plaspy y un gateway, teléfono o unidad de navegación con acceso de red capaz de reenviar datos GPS a servidores externos
- Acceso a la utilidad oficial de Stars Nav para PC y un cable mini USB para actualizaciones de POI y ajustes del dispositivo cuando sea necesario
- Conectividad a internet fiable en el dispositivo de reenvío para alcanzar d.plaspy.com
- Conocimiento de si el dispositivo de reenvío requiere seleccionar UDP o TCP para el envío de datos de seguimiento
- Acceso administrativo al gateway o a la aplicación de reenvío para ingresar servidor y puerto

## Cómo se conecta este rastreador a Plaspy

El BTS-100 proporciona un flujo continuo tipo NMEA por Bluetooth SPP. Un gateway o dispositivo de reenvío compatible con Plaspy lee ese flujo y lo envía al endpoint y puerto compartido del servidor Plaspy para que Plaspy procese la ubicación, velocidad y hora UTC para mapas y alertas.

- El BTS-100 transmite longitud, latitud, velocidad y UTC por Bluetooth SPP hacia un dispositivo revisor
- El dispositivo revisor se configura para enviar ese flujo a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El reenvío puede usar UDP o TCP según los requisitos del dispositivo y las condiciones de red
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos reenviados para visualización e informes
- Las alertas locales de POI permanecen en el BTS-100 mientras Plaspy conserva la telemetría histórica y los análisis a nivel de flota

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Stars Nav o a la utilidad de PC suministrada con el BTS-100.
2. Empareje el BTS-100 con el dispositivo revisor o gateway vía Bluetooth SPP y confirme que existe un flujo tipo NMEA activo.
3. En la configuración del dispositivo revisor ingrese d.plaspy.com o 54.85.159.138 como servidor destino.
4. Ajuste el puerto destino a 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos admitidos.
5. Seleccione UDP o TCP en el dispositivo revisor si se requiere elegir el transporte.
6. Aplique o guarde la configuración y reinicie la aplicación o el dispositivo de reenvío si es necesario.
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de posición en vivo en su cuenta o panel de Plaspy.

## Ejemplo de comandos de configuración

La configuración del BTS-100 se gestiona típicamente mediante la utilidad de PC de Stars Nav y el emparejamiento Bluetooth en lugar de comandos de texto directos. Los comandos exactos o las acciones de menú varían según el firmware y la versión de la utilidad. Por ello, siga las indicaciones de la utilidad del proveedor para establecer la transmisión por Bluetooth SPP y cargar archivos POI vía mini USB. Si utiliza un gateway que acepta comandos textuales, ingrese el dominio o la IP del servidor Plaspy y el puerto tal como se describe en la documentación del gateway.

## Notas de configuración

- Las versiones de firmware y las revisiones de la utilidad de PC pueden cambiar la disposición de menús y los nombres de los ajustes; siempre verifique la versión de su utilidad Stars Nav.
- La subida de POI y los ajustes del dispositivo se realizan por mini USB con la herramienta de PC suministrada; mantenga copias de seguridad de los archivos POI antes de efectuar cambios.
- Elija UDP o TCP según el dispositivo revisor y la fiabilidad de la red; TCP puede ser más fiable en enlaces inestables mientras que UDP es más ligero.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador en las transmisiones entrantes.
- Verifique cualquier especificidad de transporte o reenvío en la documentación de Stars Nav si el dispositivo revisor requiere un formato o encapsulación especial.

## Por qué usar Plaspy con esta configuración

Usar el BTS-100 con Plaspy ofrece un camino sencillo para integrar una fuente GPS Bluetooth SPP fiable en un sistema centralizado de monitoreo y reportes de flota. El flujo continuo tipo NMEA del BTS-100, sus intervalos de trazado configurables y las alertas de POI locales lo hacen adecuado para flotas y conductores que necesitan advertencias en cabina y visibilidad centralizada a través de Plaspy.

Para obtener más información sobre Plaspy y cómo puede utilizar la telemetría del BTS-100 para mapas, alertas e informes visite https://www.plaspy.com. Por favor verifique los detalles de configuración específicos más recientes, el comportamiento del firmware y las instrucciones del fabricante en el sitio de Stars Nav en http://www.starsnav.com/ ya que los métodos del fabricante y el firmware pueden cambiar con el tiempo.
