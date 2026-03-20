---
slug: /navtelekom/smart_s_2411/configuration
id: smart_s_2411-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2411 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom SMART S-2411 y ajustes de servidor compartido de Plaspy para seguimiento y telemetría
keywords:
  - Configuración Navtelekom SMART S-2411
  - Configuración SMART S-2411 Plaspy
  - Configuración de servidor Navtelekom SMART S-2411
  - Configuración rastreador GPS SMART S-2411
  - Integración SMART S-2411 con Plaspy
  - Configuración rastreador GPS Navtelekom
  - Configuración rastreador de vehículo Plaspy
  - Rastreo de flotas SMART S-2411
  - Configuración Bluetooth SMART S-2411
  - Ajustes de servidor rastreador Navtelekom
---

# Navtelekom - Configuración del SMART S-2411

Esta página presenta el contexto público de configuración y una guía práctica para usar el rastreador Navtelekom SMART S-2411 con la plataforma Plaspy. Describe los ajustes de servidor compartidos que Plaspy requiere, la preparación típica y el flujo de trabajo para configurar un SMART S-2411, así como las consideraciones para validar la conectividad y la visibilidad en el entorno de seguimiento de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que emplee su proveedor. Use esta página como referencia práctica y consulte también la documentación de Navtelekom y herramientas como el NTC Configurator o la gestión remota de Navtelekom para pasos específicos del dispositivo.

## Resumen de configuración

El objetivo de la configuración es apuntar el SMART S-2411 a Plaspy para que envíe de forma confiable las posiciones y la telemetría a la plataforma y quede visible en los mapas en tiempo real y en los informes. Esto implica establecer el endpoint y el puerto de la plataforma en el rastreador, seleccionar el transporte si es necesario y validar que el equipo esté reportando correctamente.

- Configure el endpoint del dispositivo al servidor de Plaspy para que las posiciones y eventos lleguen a la plataforma.
- Seleccione el protocolo de transporte en el rastreador cuando el dispositivo requiera elegir entre UDP o TCP.
- Aplique la configuración y reinicie el rastreador si es necesario para comenzar a reportar a Plaspy.
- Verifique la telemetría, entradas digitales y valores analógicos en Plaspy para confirmar la interpretación correcta.
- Use la configuración local vía Bluetooth o las herramientas remotas del fabricante para actualizaciones de firmware y ajuste avanzado de parámetros.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos del servidor Plaspy al configurar el SMART S-2411 para que reporte a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure el equipo para usar UDP o TCP si el rastreador requiere selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos solo deben apuntar al endpoint y puerto compartidos
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que debe configurar el puerto 8888 en el rastreador

## Requisitos típicos antes de la configuración

- Asegúrese de que el SMART S-2411 tenga alimentación y que la batería interna de respaldo esté cargada para realizar la configuración y las pruebas con seguridad.
- Confirme que el dispositivo tenga conectividad celular y una SIM válida insertada y registrada en la red 2G según lo requiera el rastreador.
- Disponga del método de configuración del fabricante, por ejemplo el NTC Configurator vía Bluetooth o las herramientas de gestión remota de Navtelekom.
- Verifique la versión de firmware y las notas de firmware del dispositivo en Navtelekom para garantizar compatibilidad y disponibilidad de funciones.
- Tenga a mano los datos del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para la configuración.
- Cuento con una cuenta de prueba o acceso a Plaspy donde pueda validar que el dispositivo aparece y reporta telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El SMART S-2411 envía sus fijaciones de ubicación y telemetría a través del enlace celular hacia el endpoint del servidor Plaspy. Una vez apuntado a Plaspy y usando el transporte y puerto correctos, Plaspy recibe los datos del dispositivo, los asocia con la entrada del dispositivo en la plataforma y hace la telemetría disponible para seguimiento en vivo, alertas e informes.

- El rastreador reporta fijaciones GNSS y telemetría configurada (entradas digitales y analógicas) al endpoint y puerto del servidor de Plaspy.
- Las entradas digitales y valores analógicos configurados se envían como eventos de telemetría y Plaspy los interpreta para alertas y paneles.
- El dispositivo usa UDP o TCP cuando está seleccionado y envía paquetes a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en el lado del servidor.
- El reporte exitoso se valida cuando el dispositivo aparece en los mapas en vivo de Plaspy y en los registros de telemetría.

## Procedimiento típico de configuración

1. Acceda al método de configuración oficial del fabricante, como el NTC Configurator vía Bluetooth o las herramientas de gestión remota de Navtelekom.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del rastreador.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP en el rastreador si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y siga las indicaciones del fabricante para confirmar los cambios.
6. Reinicie o corte la alimentación del SMART S-2411 si la herramienta de configuración o el firmware requieren un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de posición y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

No se proporcionan cadenas de comandos específicas del dispositivo en esta página. Los comandos exactos y el método para enviarlos varían según el firmware de Navtelekom y la herramienta de configuración utilizada. Para configuración local use el NTC Configurator vía Bluetooth o el canal de gestión remota de Navtelekom y siga la guía del fabricante para establecer:

- server to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP if required

Si necesita formatos de comandos por línea de comando o por SMS, consulte la documentación de Navtelekom o a su proveedor de hardware; esos métodos y la sintaxis exacta dependen del firmware y están documentados por Navtelekom.

## Notas de configuración

- Las variaciones de firmware pueden cambiar los nombres de parámetros y menús en el NTC Configurator; confirme siempre los nombres de los parámetros para servidor y puerto con la documentación vigente de Navtelekom.
- Elija TCP si necesita una entrega orientada a conexión y su firmware lo soporta; elija UDP si el dispositivo o la red están optimizados para paquetes UDP. Pruebe ambos si el comportamiento no está claro.
- La configuración local por Bluetooth mediante el NTC Configurator es útil para instalaciones de campo y evita la necesidad de acceso cableado durante la puesta en marcha.
- El SMART S-2411 incluye batería de respaldo interna y protección de alimentación; considere el estado de la batería al realizar pruebas iniciales y monitoreo a largo plazo.
- Verifique siempre el host y el puerto del servidor después de guardar la configuración y tras cualquier actualización de firmware, ya que algunas actualizaciones pueden restablecer los parámetros.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2411 con Plaspy ofrece a los gestores de flotas y activos una vía práctica para obtener localización en tiempo real, alertas basadas en eventos y reportes básicos de telemetría sin una configuración de servidor compleja. Las antenas integradas del S-2411, sus entradas discretas, entrada analógica y el configurador Bluetooth simplifican la instalación y la puesta en marcha en campo, mientras que dirigir los datos a Plaspy proporciona mapeo, reproducción histórica y capacidades de alertas para supervisión operativa.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Navtelekom SMART S-2411 visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware y documentación técnica consulte al fabricante en https://www.navtelecom.ru/.
