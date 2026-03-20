---
slug: /autofon/alfa_maiak_xl/configuration
id: alfa_maiak_xl-configuration
sidebar_label: Configuration
title: AutoFon - Альфа-Маяк XL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar AutoFon Альфа-Маяк XL en Plaspy, incluye ajustes de servidor y pasos para reporte por GPRS y SMS
keywords:
  - Configuración AutoFon Альфа-Маяк XL
  - Configuración AutoFon Альфа Maiak XL
  - Configuración servidor Альфа Маяк XL
  - Configuración de dispositivo Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración de seguimiento de vehículos Plaspy
  - Integración Альфа Маяк XL GPRS SMS
  - Configuración rastreador para gestión de flotas
  - Compatibilidad del rastreador AutoFon con Plaspy
  - Configuración de dispositivo de seguimiento de activos
---

# AutoFon - Альфа-Маяк XL Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon Альфа-Маяк XL con la plataforma Plaspy. Resume los ajustes de servidor prácticos que Plaspy requiere y explica los pasos habituales para apuntar el Альфа-Маяк XL a Plaspy para reporte por GPRS o SMS. El contenido está pensado para ayudar a integradores y usuarios técnicos a preparar el dispositivo para que sea visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice el proveedor. Use esta guía como orientación práctica y verifique los detalles específicos del dispositivo con la documentación de AutoFon cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el Альфа-Маяк XL para enviar posiciones y actualizaciones de estado a Plaspy a través de la red, de modo que Plaspy pueda consolidar ubicaciones, alertas y rutas históricas. La acción clave es apuntar el dispositivo al endpoint del servidor Plaspy (d.plaspy.com o la IP equivalente) y usar el puerto compartido de Plaspy para que la plataforma reciba y autodetecte el protocolo del rastreador.

- Proporcione al rastreador la dirección del servidor Plaspy para que los datos enviados por GPRS o SMS se enruten a Plaspy.
- Seleccione el modo de transporte que soporte el dispositivo, UDP o TCP, y configure el mismo puerto Plaspy usado por todos los dispositivos.
- Guarde y aplique la configuración usando las herramientas del fabricante o comandos SMS, según su flujo de trabajo.
- Valide la conectividad confirmando que el rastreador reporta a Plaspy y aparece en la plataforma.
- Use las herramientas de gestión del dispositivo (cuenta web o app móvil de AutoFon) y confirme que la versión de firmware y los intervalos de reporte coinciden con lo esperado.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888 which is the same port used for all devices in Plaspy
- Transport support UDP or TCP — the device may be configured using either transport on port 8888
- Plaspy automatically detects the tracker protocol when incoming data arrives

## Requisitos típicos antes de la configuración

- Acceso al método oficial de configuración de AutoFon, como la cuenta web AutoFon KSA, la app móvil o los comandos SMS documentados
- Un dispositivo Альфа-Маяк XL alimentado y accesible con su SIM embebida de fábrica activa y capaz de enviar GPRS o SMS
- Cobertura de red en el sitio de instalación suficiente para la entrega GSM GPRS o SMS
- Acceso administrativo a cualquier cuenta de agregador o provisión que use el proveedor para configuración remota
- Un registro del identificador del dispositivo o IMEI para correlacionar los reportes entrantes con la lista de dispositivos en Plaspy
- Un plan para probar la frecuencia de reporte y los mensajes SOS o de evento después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Альфа-Маяк XL envía actualizaciones periódicas de posición y eventos a través de redes GSM usando GPRS o SMS. Esas transmisiones se dirigen al endpoint y puerto del servidor Plaspy para que la plataforma pueda analizar y mostrar los datos para monitoreo y alertas.

- El dispositivo envía paquetes GPRS o SMS a d.plaspy.com o a la IP equivalente 54.85.159.138
- Los paquetes llegan al puerto Plaspy 8888 donde la plataforma acepta datos de todos los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los campos de ubicación y estado
- Los mensajes SOS y eventos reenviados a Plaspy se muestran como alertas y notificaciones
- El buffer tipo caja negra del dispositivo garantiza persistencia y reintentos, de modo que Plaspy reciba las actualizaciones cuando la conectividad se restablezca

## Flujo típico de configuración

1. Acceda al método o software oficial del fabricante, como el portal AutoFon KSA, la app móvil o la interfaz SMS documentada.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo proporcionado por Plaspy.
3. Configure el puerto de destino en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; configure el mismo transporte en el dispositivo según lo que exija su instalación.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe el comando de guardado por SMS si utiliza provisión por SMS.
6. Reinicie o corte y vuelva a aplicar la alimentación del dispositivo si las instrucciones del fabricante lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador aparece en la plataforma Plaspy y que se reciben actualizaciones de ubicación o eventos.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos varían según el firmware y las herramientas de aprovisionamiento del fabricante. Los dispositivos AutoFon suelen configurarse mediante el portal AutoFon KSA, aplicaciones móviles o comandos SMS proporcionados por el fabricante. Dado que los comandos y la sintaxis pueden cambiar entre versiones de firmware, esta página no inventa cadenas SMS específicas.

Si dispone de comandos suministrados por el fabricante o de una guía de instalador, úselos para establecer:
- Server address to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP if required

Siempre conserve los marcadores de posición exactamente como los proporciona el proveedor y consulte la documentación de AutoFon para los formatos de comandos vigentes.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos disponibles y los nombres de los parámetros. Confirme la sintaxis exacta con la documentación del fabricante antes de aplicar cambios.
- Elija TCP o UDP según el comportamiento de la red y los requisitos de la instalación; ambos son compatibles al apuntar el dispositivo al puerto 8888.
- Los dispositivos con SIM embebida y aprovisionamiento de fábrica pueden venir parcialmente configurados; verifique la configuración actual antes de modificarla.
- Las prácticas de instalación y las compilaciones regionales de firmware pueden variar, por lo que valide el comportamiento de reporte en una prueba controlada antes del despliegue completo.
- Mantenga un registro del IMEI y de los cambios de configuración para ayudar al soporte de Plaspy o al fabricante en la resolución de problemas si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el Альфа-Маяк XL con Plaspy ofrece una solución práctica para el seguimiento de activos de larga duración y bajo mantenimiento, cuando la instalación discreta y la batería de larga duración son prioritarias. Apuntar el dispositivo al endpoint y puerto compartido de Plaspy permite consolidar actualizaciones de ubicación, disparos SOS y recorridos históricos en una sola plataforma para visibilidad operativa y alertas.

Para aprender más sobre Plaspy y cómo gestiona el reporte de dispositivos y la telemetría de flotas, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y orientación del fabricante más actual, siempre verifique los detalles con AutoFon en https://www.autofon.ru/ ya que las especificaciones y procedimientos de configuración pueden cambiar con el tiempo.
