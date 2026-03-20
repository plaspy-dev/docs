---
slug: /navtelekom/smart_s_2423_mid/configuration
id: smart_s_2423_mid-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 MID+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración para Navtelekom SMART S-2423 MID+ mostrando compatibilidad con Plaspy y ajustes de servidor compartidos para instalación rápida
keywords:
  - Configuración Navtelekom SMART S-2423 MID+
  - Instalación Navtelekom SMART S-2423 MID+
  - Configuración SMART S-2423 MID+ Plaspy
  - Rastreador Navtelekom Plaspy
  - Rastreo de flotas SMART S-2423 MID+
  - Ajustes de servidor SMART S-2423 MID+
  - Configuración rastreador GPS Navtelekom
  - Instalación SMART S-2423 MID+
  - Configuración de dispositivo Plaspy
  - Configuración plataforma GPS Navtelekom
---

# Navtelekom - SMART S-2423 MID+ Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom SMART S-2423 MID+ con Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de trabajo típico que los integradores usan para aprovisionar el dispositivo, de modo que la posición y la telemetría queden visibles en Plaspy. Cuando se requieran herramientas del fabricante o pasos de firmware, esta guía indica las acciones adecuadas sin sustituir la documentación oficial del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como el NTC Configurator referenciado por Navtelekom. Use esta guía para preparar dispositivos para el aprovisionamiento en Plaspy y luego confirme los pasos específicos del dispositivo en la documentación oficial de Navtelekom.

## Resumen de configuración

El objetivo de la configuración es dirigir al SMART S-2423 MID+ para que envíe su ubicación y telemetría a Plaspy, de modo que el activo sea visible y manejable en la plataforma. La configuración normalmente se realiza usando las herramientas de instalación de Navtelekom o las interfaces de configuración del dispositivo y requiere establecer el endpoint del servidor Plaspy y los parámetros de transporte.

- Apunte el dispositivo al endpoint del servidor Plaspy para que los reportes se entreguen a Plaspy en tiempo real.
- Configure el transporte del dispositivo para usar UDP o TCP en el puerto compartido de Plaspy.
- Valide la conectividad celular y la alimentación para que el rastreador pueda transmitir reportes.
- Use el NTC Configurator o la herramienta del fabricante para aplicar ajustes y actualizar el firmware según sea necesario.
- Verifique que el dispositivo aparezca en Plaspy después de la configuración y que estén llegando reportes de telemetría y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta reportes de protocolos soportados sin necesidad de registrar el protocolo por dispositivo

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y que el SMART S-2423 MID+ puede configurarse para usar UDP o TCP en el puerto 8888.

## Requisitos típicos antes de la instalación

- Una unidad SMART S-2423 MID+ alimentada con GNSS interno y hardware celular funcional
- Una SIM con servicio celular válida y conectividad de datos en el vehículo para permitir conexiones salientes a Plaspy
- Acceso al método de configuración de Navtelekom, como la utilidad NTC Configurator u otras herramientas aprobadas por el fabricante
- Identificadores del dispositivo útiles para el aprovisionamiento en la plataforma, como IMEI o número de serie según lo requiera su cuenta Plaspy o su integrador
- Firmware actualizado recomendado antes del aprovisionamiento para evitar errores conocidos o diferencias de protocolo
- Acceso del instalador o integrador al cableado del vehículo y a los sensores que planea reenviar a Plaspy

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SMART S-2423 MID+ envía reportes de posición y telemetría al endpoint compartido del servidor Plaspy para que los operadores de flota puedan monitorear vehículos y eventos de forma centralizada. El dispositivo usa su módem celular para establecer conexiones salientes y reenvía GNSS, eventos del acelerómetro y las entradas de sensores configuradas a Plaspy.

- Los reportes del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador y las opciones del firmware
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes del dispositivo
- Los reportes incluyen ubicación y telemetría para que los activos sean visibles en los paneles y flujos de alerta de Plaspy
- Después de la configuración y de una conexión exitosa, Plaspy recibirá actualizaciones periódicas y mensajes generados por eventos desde el rastreador

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Navtelekom o al software, por ejemplo el NTC Configurator usado para los SMART S-2423 MID+.
2. Ubique la sección de ajustes de servidor o reportes remotos en el configurador o en el menú del dispositivo.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como endpoint de reporte.
4. Establezca el puerto de reporte en 8888 según lo requerido por Plaspy.
5. Elija el protocolo de transporte UDP o TCP si el firmware del dispositivo exige seleccionar uno.
6. Aplique o guarde la configuración en el NTC Configurator y cargue los ajustes al dispositivo.
7. Reinicie o haga un ciclo de energía en el dispositivo si la herramienta o la documentación del firmware recomienda reiniciarlo para aplicar los cambios.
8. Valide que el dispositivo reporte a Plaspy confirmando que el IMEI o el identificador del dispositivo aparece en su cuenta Plaspy y que se registren mensajes recientes de posición y telemetría.

## Ejemplos de comandos de configuración

Esta sección de configuración de modelo no incluye cadenas públicas de comandos en bruto. El SMART S-2423 MID+ se configura típicamente con herramientas de Navtelekom como el NTC Configurator o una utilidad aprobada por el fabricante, y los comandos o pasos exactos dependen de la versión de firmware y de la versión de la utilidad. Siga el flujo de trabajo del NTC Configurator para establecer el endpoint de Plaspy en d.plaspy.com o 54.85.159.138 y el puerto en 8888, o consulte el manual del dispositivo para alternativas por SMS o comandos de consola si su instalación utiliza esos métodos.

Si dispone de ejemplos de comandos suministrados por Navtelekom o de una guía del instalador, respete el orden de los comandos requeridos y aplíquelos mediante la herramienta recomendada. Para conjuntos de comandos específicos del dispositivo, consulte la documentación oficial de Navtelekom.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y la ruta exacta a los ajustes del servidor en el NTC Configurator; confirme la versión de firmware del dispositivo antes de aplicar ajustes.
- La elección entre TCP y UDP puede afectar la fiabilidad y la semántica de entrega de mensajes; elija el transporte adecuado para su red y las prácticas del integrador. Plaspy acepta ambos en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte a d.plaspy.com o a 54.85.159.138.
- Mantenga un registro del IMEI del dispositivo y de los cambios de configuración para simplificar la solución de problemas y el aprovisionamiento en la plataforma.
- Si planea reenviar datos de sensores o periféricos (por ejemplo vía RS-485 o 1-Wire), verifique el cableado de los conectores y la configuración de las entradas del dispositivo en la documentación del fabricante antes de habilitar esos flujos.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom SMART S-2423 MID+ con Plaspy ofrece una forma confiable de centralizar la ubicación de vehículos, la telemetría de sensores y el reporte de eventos para operaciones de flota. El diseño compacto del dispositivo, sus antenas GNSS y GSM internas y las múltiples opciones de E/S lo convierten en una opción práctica para integradores que desean recopilar telemetría y enviarla a un único endpoint de plataforma.

Para obtener más información sobre la plataforma Plaspy y cómo recibe los datos del dispositivo, visite https://www.plaspy.com. Para los pasos de configuración específicos del dispositivo más actuales, el comportamiento del firmware y las instrucciones detalladas para instaladores, verifique la información con el fabricante en https://www.navtelecom.ru/ ya que los métodos y el firmware pueden cambiar con el tiempo.
