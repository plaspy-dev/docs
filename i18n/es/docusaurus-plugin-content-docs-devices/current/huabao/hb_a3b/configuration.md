---
slug: /huabao/hb_a3b/configuration
id: hb_a3b-configuration
sidebar_label: Configuration
title: Huabao - HB-A3B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Huabao HB-A3B y apuntarlo a Plaspy para recibir posiciones, eventos y registros de viaje
keywords:
  - Configuración Huabao HB-A3B
  - Configuración HB-A3B Plaspy
  - Configuración rastreador GPS Huabao
  - Configuración servidor HB-A3B
  - Configuración rastreador Plaspy
  - Configuración plataforma GPS HB-A3B
  - Configuración seguimiento de flotas Huabao
  - Guía de configuración GPS HB-A3B
  - Integración de dispositivo Plaspy
  - Configuración limitador de velocidad GPS
---

# Huabao - HB-A3B Configuración

Esta página documenta el contexto público de configuración para utilizar el Huabao HB-A3B 00 Limitador de Velocidad y Gobernador con Plaspy. Se enfoca en los valores de servidor y en los pasos prácticos necesarios para apuntar el dispositivo a Plaspy, de modo que las posiciones, eventos y los registros de viaje almacenados se entreguen a la plataforma para seguimiento en tiempo real e informes de cumplimiento.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor utilizadas para la configuración. Utilice esta guía para preparar el equipo y aplicar los valores del endpoint de Plaspy, y consulte la documentación de Huabao para menús específicos del dispositivo, comportamientos de firmware y detalles de cableado.

## Resumen de la configuración

Este proceso prepara el HB-A3B para enviar de forma fiable las posiciones GNSS y la telemetría de eventos a Plaspy, y asegura que el dispositivo sea visible en la plataforma para monitoreo, alertas e informes.

- Configure el endpoint de red del dispositivo para que reporte al servidor de Plaspy.
- Verifique la conectividad celular y los ajustes de APN para que las sesiones GPRS estén disponibles.
- Defina las opciones de transporte y guarde la configuración usando las herramientas de Huabao o la interfaz USB local.
- Confirme el reinicio del dispositivo o del servicio si es necesario y valide la telemetría entrante en Plaspy.
- Asegúrese de probar las entradas y salidas del dispositivo necesarias para el limitador de velocidad y las alarmas una vez confirmada la conectividad.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos del servidor Plaspy al configurar el HB-A3B 00 para que reporte telemetría y eventos:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device if it requires a transport selection
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Incluya el dominio o la IP al ingresar los valores del servidor en la herramienta del fabricante. Plaspy aceptará datos del rastreador por UDP o TCP en el puerto 8888 y determinará automáticamente el protocolo al recibirlos.

## Requisitos típicos antes de la configuración

- Una unidad HB-A3B 00 alimentada e instalada con el cableado vehicular requerido y cualquier relé o salidas DBW conectadas según las instrucciones del instalador.
- Una tarjeta SIM activa con plan de datos y ajustes de APN correctos para GPRS en el dispositivo si se usará conectividad celular.
- Acceso al método oficial de configuración de Huabao, como el software de configuración del proveedor, una conexión USB o la herramienta de instalador utilizada por su proveedor.
- Una PC o dispositivo de configuración y los cables o adaptadores necesarios para la configuración por USB o las herramientas locales de firmware.
- Conocimientos básicos del estado de la instalación del equipo, incluyendo el cableado de la entrada ACC y la asignación de entradas de alarma, de modo que el reporte de eventos se mapee correctamente en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El HB-A3B recopila posiciones GNSS, entradas de velocidad del vehículo, estado ACC, entradas de alarma y registros almacenados a bordo, y transmite esos paquetes de datos mediante la red celular al endpoint de Plaspy. Plaspy ingiere la transmisión y mapea los eventos en el panel de flota y en las alertas.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Los datos se transmiten por el canal de datos celular usando GPRS y la tarjeta SIM del dispositivo.
- Plaspy recibe actualizaciones de posición, alarmas de exceso de velocidad, eventos ACC on/off, SOS y alertas de manipulación para su procesamiento inmediato.
- Los registros en búfer almacenados durante brechas de cobertura se cargan cuando el dispositivo recupera señal, manteniendo el historial de viaje completo.
- La plataforma detecta automáticamente el protocolo del rastreador y procesa los datos entrantes sin necesidad de seleccionar el protocolo por dispositivo en el lado de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de Huabao proporcionado por el fabricante o el vendedor.
2. En los ajustes de red del dispositivo ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor a 8888 como puerto de destino para la telemetría.
4. Elija UDP o TCP en el rastreador si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración mediante la herramienta Huabao y siga las indicaciones en pantalla del software del fabricante.
6. Reinicie la unidad HB-A3B si el dispositivo o la herramienta de configuración lo requiere para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de posición en vivo y mensajes de eventos en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El método de configuración del HB-A3B depende de la utilidad de configuración de Huabao, la interfaz de datos USB o la herramienta del instalador del proveedor. Las cadenas de comandos exactas no están estandarizadas públicamente entre versiones de firmware para este modelo, por lo que normalmente se utiliza la herramienta del fabricante para establecer:

- Server domain or IP to d.plaspy.com or 54.85.159.138
- Destination port to 8888
- Transport to UDP or TCP if the device requires selection

Si dispone de un conjunto de comandos proporcionado por el fabricante o de comandos SMS de Huabao para la configuración, utilice la documentación oficial o las herramientas para construir la sintaxis exacta y preserve cualquier marcador de posición como valores de APN cuando sea necesario.

## Notas de configuración

- El firmware y las etiquetas de los menús pueden diferir entre revisiones de hardware y versiones de firmware de Huabao; los nombres de menú para servidor, puerto y transporte pueden variar.
- Elija UDP para menor sobrecarga cuando esté soportado, o TCP cuando prefiera entrega garantizada; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Asegúrese de configurar correctamente el APN de la SIM en el dispositivo para que se puedan establecer sesiones GPRS; el APN generalmente se ajusta mediante la herramienta del fabricante.
- El almacenamiento en búfer del dispositivo asegura que la telemetría de zonas sin cobertura se cargue posteriormente; confirme el comportamiento de buffering en la documentación de Huabao.
- Siempre guarde y, si es necesario, reinicie el dispositivo después de cambiar los ajustes de servidor o transporte para que la nueva configuración entre en vigor.

## Por qué usar Plaspy con esta configuración

Vincular el Huabao HB-A3B 00 con Plaspy centraliza el seguimiento en tiempo real, las alertas de eventos y el historial de viajes para flotas que requieren gobernanza de velocidad y registro de cumplimiento. Plaspy procesa datos de posición GNSS, eventos de exceso de velocidad y alarmas, y registros almacenados para ofrecer visibilidad en el mapa, reproducción histórica y alertas automatizadas adecuadas para flotas comerciales e instalaciones reguladas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los pasos de configuración específicos del dispositivo más recientes, detalles de firmware y orientación de instalación, verifique la información más actual en el sitio del fabricante https://www.huabaotelematics.com/
