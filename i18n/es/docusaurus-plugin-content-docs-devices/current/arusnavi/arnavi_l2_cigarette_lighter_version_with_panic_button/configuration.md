---
slug: /arusnavi/arnavi_l2_cigarette_lighter_version_with_panic_button/configuration
id: arnavi_l2_cigarette_lighter_version_with_panic_button-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Arnavi L2 para Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Arusnavi Arnavi L2 configuración
  - Arnavi L2 configuración Plaspy
  - Configuración de servidor Arnavi L2
  - Configuración rastreador GPS Arnavi L2
  - Arusnavi rastreador GPS Plaspy
  - Configuración rastreador Arnavi L2 en mechero
  - Configuración botón de pánico rastreador
  - Seguimiento de flotas Arnavi L2
  - Integración sensores BLE Arnavi L2
  - Configuración telemetría Arnavi L2
---

# Arusnavi - Arnavi L2 (versión para toma de mechero con botón de pánico) Configuración

Esta página ofrece una guía pública y práctica para configurar el Arusnavi Arnavi L2 (versión para toma de mechero con botón de pánico) con la plataforma Plaspy. Aquí encontrará los valores de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, consideraciones de instalación y el flujo de trabajo habitual que los operadores siguen para poner el equipo en línea en Plaspy. El contenido es práctico y neutral respecto al proveedor, alineado con las capacidades del Arnavi L2 según el fabricante.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del equipo cuando los paquetes llegan a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, la forma de instalación y la herramienta de configuración que utilice (USB, Bluetooth o la interfaz web del proveedor). Use esta guía para comprender los valores de servidor necesarios y el flujo general antes de realizar la configuración o la instalación del dispositivo.

## Resumen de la configuración

El objetivo es preparar el Arnavi L2 para una comunicación fiable con Plaspy, de modo que posición, telemetría y eventos se reciban en su cuenta. Esto implica apuntar el dispositivo al servidor de Plaspy, seleccionar el transporte si es necesario y validar que el equipo informa según lo esperado.

- Configure el dispositivo para que envíe datos al endpoint y puerto de Plaspy para que la ubicación y los eventos se entreguen.
- Confirme los ajustes de transporte (UDP o TCP) y asegúrese de que el dispositivo use el mismo puerto que Plaspy espera.
- Valide la conectividad del dispositivo con Plaspy y verifique la detección correcta del protocolo en la plataforma.
- Habilite el reporte de eventos clave como el botón de pánico, eventos del acelerómetro, datos de sensores BLE y el estado de ignición para que aparezcan en Plaspy.
- Confirme que los registros locales se suben correctamente cuando se restablece la cobertura para que el historial de viajes sea continuo en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el Arnavi L2:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP — el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que llegan los datos del dispositivo

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto. Apuntar el rastreador al dominio o a la IP con el puerto 8888 es el enfoque estándar.

## Requisitos habituales antes de la configuración

- Asegúrese de que el Arnavi L2 esté alimentado a través del arnés para toma de mechero y que tenga una conexión de alimentación vehicular estable durante la configuración.
- Confirme que hay una SIM 2G con capacidad GPRS válida instalada y que la red móvil está disponible para datos; el equipo utiliza GSM GPRS para telemetría.
- Tenga acceso al método de configuración del fabricante que vaya a usar, como herramienta USB para PC, configuración por BLE/móvil o la utilidad web/PC de Arnavi.
- Disponga de una cuenta en Plaspy con permisos para agregar y ver dispositivos, de modo que pueda validar la llegada de datos y la visibilidad del dispositivo en la plataforma.
- Verifique la versión de firmware y las notas de lanzamiento del fabricante que puedan afectar los ajustes de servidor o protocolo.
- Si aplica, prepare valores que requiera la configuración como credenciales APN de la SIM para introducirlas en la herramienta de configuración del equipo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Arnavi L2 envía posición GNSS, telemetría y eventos al endpoint y puerto de Plaspy que haya especificado. Plaspy recibe esos paquetes, detecta automáticamente el protocolo del dispositivo y mapea la información entrante al registro correcto en la plataforma.

- El dispositivo reporta posiciones GNSS y telemetría a través del módem 2G GPRS hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Las pulsaciones del botón de pánico y los eventos activados por el acelerómetro (remolque, conducción brusca, alarmas) se reenvían a Plaspy como alertas inmediatas.
- Los datos de sensores BLE y los eventos de E/S discretos se incluyen en los paquetes de telemetría y aparecen como flujos de sensores en Plaspy.
- Los registros locales tipo caja negra se suben cuando se restablece la conectividad, de modo que los datos históricos se preservan en Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el dispositivo sin que sea necesario seleccionar el protocolo manualmente en la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración Arnavi apropiado para su dispositivo y firmware (herramienta USB para PC, app móvil BLE o utilidad del proveedor).
2. En los ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto de comunicación en 8888.
4. Seleccione el tipo de transporte UDP o TCP si el dispositivo le solicita elegir uno.
5. Introduzca cualquier APN o ajustes relacionados con la SIM necesarios mediante la herramienta del fabricante si la SIM requiere credenciales personalizadas.
6. Aplique o guarde la configuración en la herramienta del fabricante y, si se le solicita, cargue o escriba los ajustes en el dispositivo.
7. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio tras cambiar los ajustes de servidor.
8. Valide en Plaspy que el equipo aparezca en línea y esté reportando ubicación, telemetría y eventos según lo esperado.

## Ejemplos de comandos de configuración

El método de configuración del Arnavi L2 puede proporcionarse mediante una herramienta para PC, interfaz USB o utilidad móvil BLE. Los formatos y la sintaxis exacta de los comandos varían según la utilidad de configuración de Arnavi y la versión de firmware, por lo que no existe un comando universal público para incluir aquí. Utilice la herramienta oficial de Arnavi para introducir los valores de servidor de Plaspy indicados más arriba y siga las indicaciones de la herramienta del proveedor para guardar y aplicar los ajustes.

Si dispone de ejemplos de comandos o plantillas SMS proporcionadas por Arnavi, mantenga los marcadores de posición como APN, usuario APN o contraseña APN tal y como se indiquen por su operador de SIM y escríbalos en la herramienta del fabricante según las instrucciones.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los elementos del menú disponibles, los nombres de los campos y la ubicación exacta donde se ingresan el servidor y el puerto; verifique siempre la versión de firmware antes de seguir un flujo de trabajo.
- Elija UDP o TCP según lo requiera la herramienta del fabricante; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Al usar una configuración basada en APN, conserve los marcadores de posición que proporcione la herramienta del proveedor como {{apn}}, {{apnu}} o {{apnp}} y reemplácelos por los valores de su operador de SIM.
- Si usa configuración por USB o BLE, asegúrese de que los controladores del dispositivo y las versiones de la app móvil coincidan con las recomendaciones del fabricante para evitar escrituras incompletas.
- Confirme que el plan de la SIM soporte datos GPRS y que la cobertura de red sea suficiente para reportes en tiempo real y cargas de registros.

## Por qué usar Plaspy con esta configuración

Usar el Arnavi L2 con Plaspy ofrece una vía de despliegue rápida para vehículos que requieren instalación ágil y rastreo temporal o portátil. El diseño para toma de mechero reduce el tiempo de instalación, mientras que el botón de pánico, los eventos del acelerómetro y el soporte de sensores BLE ofrecen a los administradores de flota la telemetría y señales de seguridad necesarias para la supervisión operativa. El registro sin conexión asegura la continuidad del historial de viajes incluso cuando la cobertura es intermitente, y las capacidades de configuración remota reducen la necesidad de intervenciones in situ.

Para más información sobre Plaspy y cómo la plataforma puede integrar sus dispositivos Arnavi L2 visite https://www.plaspy.com. Para comportamiento específico de firmware, herramientas de configuración y las instrucciones más recientes del fabricante, verifique los detalles en el sitio oficial de Arnavi https://www.arusnavi.ru. Las especificaciones del fabricante y los pasos de instalación pueden cambiar con el tiempo, así que confirme siempre la documentación vigente del equipo antes de finalizar un despliegue.
