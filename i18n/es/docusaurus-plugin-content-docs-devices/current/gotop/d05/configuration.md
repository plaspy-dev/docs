---
slug: /gotop/d05/configuration
id: d05-configuration
sidebar_label: Configuration
title: GOTOP - D05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP D05 y conectarlo a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración GOTOP D05
  - instalación GOTOP D05
  - GOTOP D05 Plaspy
  - configuración servidor GOTOP D05
  - configuración rastreador GPS GOTOP D05
  - rastreo de flotas GOTOP D05
  - integración GOTOP D05
  - configuración GPS Plaspy
  - configuración servidor rastreador GPS
  - configuración seguimiento de vehículos
---

# GOTOP - Configuración D05

Esta página ofrece el contexto público de configuración para usar el rastreador GOTOP D05 con Plaspy. Resume los ajustes prácticos de servidor y el flujo de trabajo de configuración que usted utilizará para apuntar un D05 a Plaspy y obtener ubicación en tiempo real, alarmas y reproducción de historial, además de describir capacidades clave del dispositivo como larga autonomía, conectividad 4G con respaldo 2G y telemetría encriptada.

Plaspy utiliza ajustes de servidor compartidos entre los trackers compatibles y detecta automáticamente el protocolo del dispositivo, por lo que se emplea un único endpoint y puerto para todos los equipos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta guía junto con la documentación de GOTOP y el método de configuración del proveedor que tenga disponible.

## Resumen de la configuración

Configurar el D05 para Plaspy hace que el rastreador envíe mensajes de ubicación y estado encriptados al servicio de Plaspy para que el dispositivo aparezca en mapas, paneles y alertas. El objetivo es proporcionar un destino y transporte consistentes para que Plaspy ingiera los datos y muestre telemetría en vivo y en historial.

- Apunte el D05 al dominio o IP del servidor de Plaspy para que la telemetría llegue al endpoint correcto.
- Use el puerto compartido de Plaspy para que la plataforma acepte la conexión y detecte automáticamente el protocolo.
- Confirme la selección de transporte (UDP o TCP) si el equipo lo requiere y configure el dispositivo para usar ese transporte al puerto 8888.
- Valide la conectividad desde el dispositivo hasta Plaspy y compruebe la visibilidad en los mapas y listados de eventos de Plaspy.
- Guarde y aplique los ajustes en el dispositivo y realice un reinicio si es necesario para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

Estos son los valores públicos de conexión de Plaspy que debe ingresar en la herramienta o app de configuración de GOTOP. Plaspy acepta conexiones en el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo que utiliza el D05.

## Requisitos típicos antes de empezar

- Una unidad D05 con batería suficiente para la configuración y las pruebas.
- Una tarjeta SIM válida instalada y activa para datos celulares si va a usar el dispositivo en la red móvil.
- Acceso al método de configuración GOTOP que utiliza en su instalación, como la app para smartphone, el portal web o la herramienta oficial del fabricante.
- Cobertura de red 4G LTE o respaldo 2G en la zona donde operará el equipo.
- Conocimiento del APN del operador y credenciales cuando la SIM y el proveedor lo requieran.
- Una cuenta en Plaspy o el flujo de incorporación necesario para registrar y ver el dispositivo una vez que empiece a reportar.

## Cómo se conecta este tracker a Plaspy

El D05 envía posiciones encriptadas y paquetes de eventos por su enlace celular hacia el endpoint y puerto compartido de Plaspy. Plaspy ingiere esos paquetes, los asocia a un registro de dispositivo y presenta los datos en mapas, alarmas e historial.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy para que toda la telemetría llegue a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte se ajusta a UDP o TCP en el dispositivo si la herramienta de configuración requiere seleccionar transporte.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes de ubicación y alarma sin configuración por dispositivo en el servidor.
- Los reportes y eventos aparecen en la vista en vivo de Plaspy para monitoreo en tiempo real y se almacenan para reproducción histórica.
- La transmisión de datos encriptada desde el D05 proporciona privacidad de la telemetría en tránsito hacia Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración GOTOP, por ejemplo la app del fabricante para smartphone, el portal web o el software de configuración que recibió con el equipo.
2. En los ajustes de servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Configure el puerto del dispositivo en 8888 para que coincida con el endpoint de Plaspy.
4. Elija UDP o TCP en el equipo si la selección de transporte es requerida por el firmware.
5. Ingrese cualquier APN o ajustes relacionados con la SIM que se requieran y guarde la configuración en la herramienta GOTOP.
6. Aplique o guarde la configuración y reinicie el rastreador si las instrucciones del fabricante exigen un reinicio.
7. Valide que el D05 está reportando a Plaspy comprobando la visibilidad del dispositivo en el portal de Plaspy y confirmando que llegan paquetes de posición, latido o alarma.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para aplicar los ajustes de servidor dependen de la interfaz de configuración GOTOP y del firmware. El D05 se suele configurar usando la app de GOTOP para smartphone, el portal web o la herramienta del fabricante en lugar de un conjunto único de comandos universales. Consulte la herramienta de configuración GOTOP para los campos específicos donde ingresará el dominio del servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888, y elija UDP o TCP si se solicita.

Si su instalación utiliza comandos textuales o una consola de configuración avanzada, siga la referencia de comandos oficial de GOTOP que acompaña su dispositivo o que provea el fabricante para establecer el servidor y el transporte. Use la app o el portal del fabricante como método principal a menos que tenga instrucciones explícitas que incluyan ejemplos de comandos de GOTOP.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware del D05 pueden exponer los ajustes de servidor y transporte en menús distintos; consulte la documentación de GOTOP para pasos específicos por versión.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo, por lo que no necesita un puerto único por equipo.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de red; UDP es habitual por su menor overhead en telemetría mientras que TCP puede preferirse cuando se requiere fiabilidad y entrega ordenada.
- Tenga a mano los detalles del APN del operador al configurar la SIM; un APN incorrecto es una causa común de falta de conectividad.
- Verifique siempre los ajustes después de aplicarlos y observe que aparezca el primer paquete de posición en Plaspy para confirmar la integración.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D05 con Plaspy ofrece visibilidad centralizada y sencilla para el seguimiento de activos y vehículos con larga autonomía en espera. El D05 combina larga duración de batería, GNSS multiconstelación y conectividad celular fiable, por lo que puede entregar telemetría de posición y alarmas de forma consistente a Plaspy para monitoreo en vivo, alertas por geocerca y reproducción histórica.

Para saber más sobre Plaspy y los flujos de trabajo compatibles visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y orientación del fabricante consulte la documentación de GOTOP en https://www.gotop.cc/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
