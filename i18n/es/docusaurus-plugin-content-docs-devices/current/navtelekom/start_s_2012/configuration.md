---
slug: /navtelekom/start_s_2012/configuration
id: start_s_2012-configuration
sidebar_label: Configuration
title: Navtelekom - START S-2012 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Navtelekom START S-2012 para enviar GNSS y telemetría a Plaspy con servidor compartido y detección automática de protocolo
keywords:
  - configuración Navtelekom START S-2012
  - configuración START S-2012 para Plaspy
  - configuración rastreador Navtelekom
  - configuración de servidor START S-2012
  - integración rastreador con Plaspy
  - configuración GPS START S-2012
  - guía de configuración rastreador vehicular
  - seguimiento de flotas START S-2012
  - configuración GNSS GSM
  - guía NTC Configurator
---

# Navtelekom - START S-2012 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom START S-2012 con Plaspy. Se centra en los ajustes a nivel de plataforma y en el flujo de trabajo práctico necesarios para reenviar la ubicación GNSS, la telemetría de sensores y los eventos desde el START S-2012 hacia Plaspy. La información está pensada para ayudar a instaladores y equipos de flota a preparar el dispositivo para su integración con Plaspy utilizando las herramientas de configuración del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Navtelekom ofrece NTC Configurator y DRC como herramientas de gestión remota y configuración; siga esas herramientas del proveedor y la documentación oficial de Navtelekom al aplicar los ajustes descritos en esta página.

## Visión general de la configuración

La base de la integración del START S-2012 con Plaspy es apuntar el rastreador al endpoint del servidor de Plaspy y confirmar el transporte, luego validar que los datos GNSS y de sensores lleguen a la plataforma. Plaspy usa un puerto compartido único para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo envíe datos al endpoint correcto.

- Configure el rastreador para enviar telemetría al endpoint del servidor de Plaspy (dominio o IP) en el puerto compartido de Plaspy.
- Elija la opción de transporte que soporte el dispositivo (UDP o TCP) y verifique la conectividad.
- Use NTC Configurator o las herramientas remotas DRC para persistir los ajustes del servidor en el dispositivo.
- Valide la posición en tiempo real, la telemetría de sensores y los reportes de eventos dentro de Plaspy una vez que el dispositivo se conecte.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos al endpoint compartido

## Requisitos habituales antes de la configuración

- Unidad START S-2012 alimentada y cableada según la guía de conexión de Navtelekom.
- Servicio celular activo para la SIM del dispositivo y cobertura verificada en la red de instalación.
- Acceso a las herramientas de configuración del fabricante como NTC Configurator o DRC para gestión remota.
- Cuenta en Plaspy o información de aprovisionamiento para asociar el dispositivo al espacio de trabajo correcto del cliente o flota.
- Firmware actualizado o, cuando sea posible, un nivel de firmware verificado como compatible.
- Acceso físico al dispositivo durante la configuración inicial o un método de configuración remota a través de las herramientas del proveedor.

## Cómo se conecta este rastreador a Plaspy

El START S-2012 utiliza su conexión GSM para enviar posiciones GNSS y datos de sensores al endpoint y puerto del servidor de Plaspy. Una vez direccionado al servidor de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y comenzará a parsear los datos para seguimiento en vivo, eventos y telemetría.

- El dispositivo envía reportes de ubicación GNSS a d.plaspy.com (o 54.85.159.138) en el puerto 8888 mediante UDP o TCP.
- Los datos de sensores y telemetría, como nivel de combustible, lecturas de sensores Bluetooth y entradas de eventos, se reenvían junto con las actualizaciones de ubicación.
- Las entradas de eventos y la salida de control pueden usarse para generar alertas y comandos remotos visibles en Plaspy.
- Los datos de sensores Bluetooth y las integraciones por RS-485 o USB Type-C se transmiten a Plaspy cuando están configurados y son compatibles con el firmware.
- Plaspy recibe el flujo entrante y lo asigna al registro de dispositivo correspondiente una vez que el rastreador se conecta al puerto compartido.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Navtelekom, como NTC Configurator o DRC, para iniciar la configuración.
2. En los ajustes de servidor o telemetría ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto de destino en 8888, el puerto compartido de Plaspy usado por todos los dispositivos compatibles.
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección explícita.
5. Guarde o aplique la configuración en la herramienta del fabricante y permita que el dispositivo reciba los ajustes actualizados.
6. Reinicie o haga ciclo de energía al dispositivo si el fabricante lo indica para activar los nuevos ajustes de servidor.
7. Valide que el START S-2012 reporte a Plaspy y que la posición, telemetría y eventos aparezcan en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El START S-2012 se suele configurar con las herramientas de Navtelekom en lugar de requerir comandos crudos en campo. Los comandos exactos y la interfaz dependen de NTC Configurator o DRC y pueden variar según la versión de firmware y la edición de la herramienta. Al configurar, establezca el servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888, elija UDP o TCP si se solicita, luego guarde y aplique los ajustes mediante la herramienta del proveedor.

Si utiliza un método del proveedor que expone la sintaxis de comandos de bajo nivel, siga el formato documentado por el fabricante en NTC Configurator o DRC y conserve los marcadores de posición que la herramienta requiera. Consulte la documentación de Navtelekom para ejemplos de comandos específicos según su firmware y conjunto de herramientas.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús y la ubicación exacta de los ajustes de servidor y transporte; confirme con las notas de la versión del firmware del dispositivo.
- Seleccionar TCP frente a UDP puede afectar cómo el rastreador agrupa o reintenta mensajes; elija el transporte que se ajuste a sus necesidades de estabilidad y latencia.
- Al usar sensores Bluetooth, asegúrese de que esos periféricos estén emparejados y visibles para el rastreador antes de confiar en la telemetría en Plaspy.
- Verifique el APN de la SIM y el registro celular mediante la herramienta del fabricante si el dispositivo no alcanza el servidor de Plaspy.
- Use NTC Configurator y DRC del fabricante para la gestión remota y así reducir visitas físicas para actualizaciones de firmware o aprovisionamiento masivo.

## Por qué usar Plaspy con esta configuración

Usar el START S-2012 con Plaspy ofrece una solución compacta y cableada de rastreo que entrega posiciones GNSS y telemetría detallada en una única plataforma de gestión de flotas. Para flotas que requieren instalaciones discretas, monitoreo de combustible, datos de sensores ambientales y alertas basadas en eventos, el START S-2012 combinado con Plaspy permite visibilidad unificada y control operativo.

Para obtener más información sobre Plaspy y cómo puede recibir datos del START S-2012, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y las instrucciones de instalación detalladas en el sitio del fabricante https://www.navtelecom.ru/ ya que las capacidades del equipo y los procedimientos de configuración pueden cambiar con el tiempo.
