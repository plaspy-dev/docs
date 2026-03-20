---
slug: /gotop/c790_y/configuration
id: c790_y-configuration
sidebar_label: Configuration
title: GOTOP - C790-Y Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GOTOP C790-Y para integrarlo con Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - configuración GOTOP C790 Y
  - instalación GOTOP C790 Y
  - configuración servidor GOTOP C790 Y
  - C790 Y Plaspy
  - rastreador GOTOP Plaspy
  - configuración rastreador GPS
  - configuración rastreador vehicular
  - configuración seguimiento de flotas
  - configuración plataforma GPS
  - configuración rastreador GPRS
---

# GOTOP - Configuración del C790-Y

Esta página describe el contexto público de configuración para usar el rastreador GOTOP C790-Y con Plaspy. Resume los ajustes de servidor prácticos y el flujo típico de configuración necesario para apuntar el C790-Y a Plaspy y así obtener seguimiento en tiempo real, reporte de eventos y reproducción histórica de rutas. Use esta guía junto con la documentación del fabricante para los pasos específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario indicar el tipo de protocolo en la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor, por lo que confirme detalles con la documentación de GOTOP cuando sea necesario.

## Resumen de la configuración

Configurar el C790-Y para Plaspy prepara el dispositivo para transmitir posición GNSS y telemetría del vehículo vía GPRS a un servidor central de Plaspy, de modo que la plataforma pueda mostrar ubicación en vivo, reproducir historial y generar alertas. Los pasos se enfocan en establecer el endpoint del servidor, verificar el método de transporte y confirmar que el dispositivo sea visible en Plaspy.

- Configure el dispositivo para reportar a Plaspy usando el endpoint y puerto compartidos para que la plataforma lo reconozca.
- Verifique que el dispositivo tenga conexión GPRS activa y el APN correcto si el operador lo requiere.
- Seleccione UDP o TCP en el dispositivo si hay opción de transporte y guarde la configuración.
- Aplique y, si es necesario, reinicie el rastreador para que comience a reportar a Plaspy.
- Confirme que el dispositivo aparece y envía datos dentro de Plaspy una vez completada la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un GOTOP C790-Y alimentado e instalado con energía del vehículo disponible para la configuración y las pruebas.
- Una tarjeta SIM activa con plan de datos que permita GPRS si el rastreador usa celular para reportar.
- Acceso al método de configuración oficial de GOTOP o al software proporcionado por el fabricante o el distribuidor.
- Conocimiento de los ajustes APN del operador móvil si se requieren para la conectividad de datos.
- Capacidad para aplicar y guardar ajustes en el dispositivo y reiniciarlo si el proceso de configuración lo exige.

## Cómo se conecta este rastreador a Plaspy

El C790-Y envía posición GNSS y telemetría del vehículo por GPRS al endpoint del servidor Plaspy para que la plataforma ingiera las actualizaciones de ubicación y los eventos de alarma en tiempo real. Configure el dispositivo para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma detecte y procese automáticamente el protocolo del rastreador.

- El rastreador transmite fijaciones de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el dispositivo si la interfaz requiere seleccionar uno.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática del protocolo.
- Los reportes de eventos como SOS, entrada o salida de geocerca y estado ACC se reenvían a Plaspy para alertas y flujos de trabajo.
- Una vez que comienza el envío de datos, el dispositivo se vuelve visible en Plaspy para seguimiento en vivo y reproducción histórica.

## Flujo de configuración común

1. Acceda al método de configuración oficial de GOTOP o al software que su proveedor haya suministrado según la documentación del fabricante.
2. Ingrese el nombre de host del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la opción de servidor del dispositivo.
3. Configure el puerto del servidor a 8888 como puerto de destino para la telemetría.
4. Seleccione UDP o TCP en el dispositivo si la interfaz de configuración requiere escoger el transporte.
5. Aplique o guarde los cambios de configuración en la herramienta o interfaz del dispositivo.
6. Reinicie el C790-Y si las instrucciones del fabricante indican un reinicio para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo está reportando a Plaspy comprobando la visibilidad del equipo y los datos recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos exactos de configuración y el método para enviarlos dependen de la herramienta del fabricante, del firmware del dispositivo y del flujo de trabajo del proveedor. Los dispositivos GOTOP suelen configurarse con el software del fabricante, una herramienta USB o serial, o mediante comandos SMS cuando el firmware lo admite. Dado que los comandos del fabricante varían por modelo y firmware, consulte la documentación de GOTOP para la sintaxis precisa de los comandos para establecer servidor y APN.

Si utiliza una herramienta del proveedor o de GOTOP, siga sus instrucciones para ingresar:
- Dominio del servidor d.plaspy.com o IP del servidor 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP

Siempre conserve los marcadores de posición necesarios en las herramientas del proveedor y confirme los comandos antes de enviarlos al dispositivo.

## Notas sobre la configuración

- Los menús de firmware y configuración pueden variar entre revisiones de hardware y modelos regionales. Verifique qué firmware utiliza su dispositivo antes de seguir instrucciones.
- Si el dispositivo requiere un APN para GPRS, obtenga el APN, usuario y contraseña correctos del operador móvil e ingréselos usando la herramienta oficial de GOTOP.
- Elija TCP o UDP según la opción de configuración del dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo una vez que el dispositivo se conecte.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica implementaciones múltiples y mantiene consistencia en los ajustes del servidor central.
- Si depende de comandos de configuración vía SMS, confirme con la documentación de GOTOP qué comandos SMS son compatibles con la versión de firmware de su equipo.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP C790-Y con Plaspy ofrece una manera sencilla de integrar posición GNSS y telemetría vehicular en una plataforma centralizada de monitoreo. La combinación del conjunto de funciones del C790-Y con la configuración del servidor Plaspy permite a las organizaciones obtener ubicación en vivo, alertas de eventos y rutas históricas en la misma plataforma para obtener visión operativa y una respuesta más rápida.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, detalles de firmware y orientación del fabricante, verifique la información en el sitio de GOTOP en https://www.gotop.cc/ ya que los comandos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
