---
slug: /navtelekom/signal_s_2115/configuration
id: signal_s_2115-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2115 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del rastreador Navtelekom СИГНАЛ S-2115 con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - configuración Navtelekom СИГНАЛ S-2115
  - configuración S-2115 Navtelekom
  - configuración S-2115 Plaspy
  - configuración de servidor S-2115
  - configuración del rastreador GPS Navtelekom
  - configuración de rastreador Plaspy
  - rastreo de vehículos S-2115
  - integración S-2115 con Plaspy
  - configuración de rastreador obsoleto
  - configuración de servidor para rastreador GPS
---

# Navtelekom - СИГНАЛ S-2115 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom СИГНАЛ S-2115 con Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de trabajo que permiten al S-2115 reportar posiciones y eventos a la plataforma Plaspy, aprovechando la información pública del fabricante como la utilidad de configuración por USB, comandos SMS y de voz, y el soporte de firmware antiguo para unidades archivadas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar el endpoint y puerto públicos de Plaspy en su S-2115, y luego consulte la guía del operador SIGNAL S-2115 y la documentación del NTC Configurator para procedimientos específicos del dispositivo.

## Resumen de configuración

Este proceso prepara el S-2115 para comunicarse de forma confiable con la plataforma Plaspy, de modo que el dispositivo entregue actualizaciones de posición en tiempo real y notificaciones de eventos. Los pasos se enfocan en apuntar el rastreador al servidor Plaspy, seleccionar el transporte y confirmar que los datos llegan a la plataforma.

- Configure el dispositivo para que apunte al endpoint de Plaspy y así los mensajes de posición GNSS y las alarmas se enruten a Plaspy.
- Seleccione el método de transporte soportado por el equipo (UDP o TCP) y utilice el mismo puerto compartido usado por Plaspy.
- Aplique los ajustes con la herramienta del fabricante o mediante los métodos remotos soportados.
- Valide la conectividad y el reporte de eventos en Plaspy para asegurar visibilidad de vehículo y funcionamiento de alarmas.
- Mantenga actualizado el firmware y la utilidad NTC Configurator cuando sea posible para coincidir con el comportamiento documentado de las unidades S-2115.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe ingresarse como host de reporte en el dispositivo.
- Se puede usar la IP de servidor 54.85.159.138 cuando se requiera una dirección numérica.
- El puerto 8888 es el puerto de ingestión de Plaspy para todos los dispositivos.
- El transporte soporta UDP o TCP; el dispositivo puede configurarse con cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma aceptará los datos del S-2115 una vez que servidor y puerto estén correctos.

Nota: Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados e intentará detectar el protocolo correcto de forma automática.

## Requisitos previos a la configuración

- Acceso a la unidad SIGNAL S-2115 y a las herramientas locales de configuración necesarias, como el NTC Configurator vía USB.
- Un equipo con alimentación instalado o conectado temporalmente a una fuente de prueba para permitir la configuración y verificación.
- Un servicio celular activo en el dispositivo si utiliza datos GSM o reporte por SMS durante la configuración.
- Documentación del fabricante o la guía archivada del operador del S-2115 para consultar comandos soportados y notas de firmware.
- Un plan para elegir entre UDP o TCP según la preferencia del instalador o las condiciones de la red; Plaspy acepta ambos.
- Acceso al dominio del servidor Plaspy d.plaspy.com o a la IP numérica 54.85.159.138 al ingresar los ajustes del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El S-2115 envía posiciones GNSS y notificaciones de eventos a través de GSM al endpoint y puerto de Plaspy configurados. Una vez que apunte a d.plaspy.com o a 54.85.159.138 con el puerto 8888, Plaspy recibirá los mensajes de posición y alarma y los presentará en la plataforma para monitoreo e informes.

- El dispositivo reporta actualizaciones de ubicación al endpoint de Plaspy para que los vehículos aparezcan en tiempo real en el mapa.
- Los mensajes de evento y alarma, como detección de impacto o movimiento, se reenvían a Plaspy para alertas y registros.
- El transporte puede configurarse en UDP o TCP en el puerto 8888 según la configuración del dispositivo o las necesidades de red.
- Plaspy detecta automáticamente el protocolo usado por el rastreador, por lo que no es necesario seleccionar el protocolo desde la plataforma.
- Una configuración correcta se traduce en telemetría y eventos de alarma visibles en los paneles e historial de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software como NTC Configurator, o use la interfaz de comandos por SMS/voz del dispositivo.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en la opción de host del rastreador.
3. Establezca el puerto de reporte en 8888, que es el puerto compartido de ingestión de Plaspy para todos los dispositivos.
4. Elija la opción de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Aplique o guarde la configuración con la herramienta del fabricante y confirme que los cambios se escribieron en el equipo.
6. Reinicie el dispositivo si la herramienta o las instrucciones indican que es necesario para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de posición y los eventos de alarma en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El archivo público de configuración del S-2115 referencia la configuración local por USB mediante el NTC Configurator y cambios remotos por SMS, DTMF o menú de voz, pero no publica una única cadena de comandos universal para todos los despliegues. Los formatos exactos de comandos y nombres de parámetros varían según el firmware y la versión del NTC Configurator, por lo que debe usar la guía del operador oficial y la utilidad NTC Configurator para aplicar el servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888.

Si prefiere la configuración local, use NTC Configurator por USB para establecer el host en d.plaspy.com y el puerto en 8888, luego guarde y reinicie el dispositivo. Si debe usar comandos por SMS, consulte la guía del operador SIGNAL S-2115 para los nombres precisos de los parámetros SMS y mantenga los marcadores de posición como [apn] tal como los documenta Navtelekom.

## Notas de configuración

- Las versiones de firmware y del NTC Configurator pueden usar nombres de parámetros o menús diferentes; verifique que su herramienta coincida con la documentación archivada del S-2115.
- El S-2115 soporta configuración remota vía SMS, DTMF y menús de voz según el archivo del proveedor; las cadenas de comandos exactas las suministra el fabricante y pueden variar según el firmware.
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del operador; Plaspy acepta cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- Dado que el S-2115 figura como descatalogado o archivado, asegúrese de contar con el firmware archivado correcto y la versión del NTC Configurator correspondiente a su unidad.
- Confirme siempre que el equipo apunte a d.plaspy.com o 54.85.159.138 y utilice el puerto 8888 antes de finalizar la configuración y probar el reporte en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СИГНАЛ S-2115 con Plaspy ofrece a las organizaciones una forma práctica de centralizar la ubicación de vehículos, la detección de impactos y el enrutamiento de alarmas desde rastreadores legacy o archivados. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy simplifica la incorporación y permite que Plaspy gestione la detección del protocolo, de modo que los equipos puedan enfocarse en el monitoreo operativo y la respuesta.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique los detalles de configuración y firmware específicos del dispositivo en el sitio del fabricante https://www.navtelecom.ru/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe consultar la documentación oficial de Navtelekom para confirmar los procedimientos vigentes del S-2115.
