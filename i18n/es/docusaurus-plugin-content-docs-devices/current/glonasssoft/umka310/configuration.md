---
slug: /glonasssoft/umka310/configuration
id: umka310-configuration
sidebar_label: Configuration
title: GLONASSsoft - UMKa310 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GLONASSsoft UMKa310 con los ajustes de servidor compartido de Plaspy
keywords:
  - configuración GLONASSsoft UMKa310
  - configuración UMKa310
  - UMKa310 Plaspy configuración
  - configuración rastreador GLONASSsoft
  - configuración servidor UMKa310
  - configuración GPS UMKa310
  - seguimiento de flotas UMKa310
  - configuración rastreador Plaspy
  - configuración telemetría UMKa310
  - configuración Wialon Combine UMKa310
---

# GLONASSsoft - Configuración del UMKa310

Esta página documenta el contexto público de configuración para usar el rastreador GLONASSsoft UMKa310 con Plaspy. Explica los ajustes de servidor que Plaspy requiere y cómo dirigir el UMKa310 hacia Plaspy para el envío en tiempo real de posición, telemetría y eventos. Utilice esta guía para comprender los pasos prácticos y los requisitos previos antes de integrar el UMKa310 con la plataforma Plaspy.

Plaspy utiliza un endpoint de servidor compartido y un único puerto para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo al conectarse. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el método de configuración empleado (SMS, GPRS o Bluetooth). Confirme siempre la sintaxis de comandos y el comportamiento específico del dispositivo con la documentación oficial de GLONASSsoft cuando sea necesario.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el UMKa310 para comunicarse de forma fiable con Plaspy, validar la conectividad y habilitar la visibilidad del equipo dentro de la plataforma. La configuración típica se centra en apuntar el dispositivo al endpoint de Plaspy y asegurarse de que tiene acceso a la red y el transporte correcto seleccionado.

- Apuntar el UMKa310 al endpoint de Plaspy para que la telemetría y los datos GNSS se reenvíen correctamente.
- Configurar el dispositivo para usar el puerto compartido de Plaspy y seleccionar el modo de transporte que soporte el equipo.
- Validar la conectividad y que el dispositivo aparezca en Plaspy tras la configuración.
- Opcionalmente, configurar servidores secundarios si necesita redundancia o servicios paralelos además de Plaspy.
- Usar el método de configuración soportado por el fabricante (SMS, GPRS o Bluetooth) para realizar estos cambios en el UMKa310.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Utilice el dominio o la IP al configurar el UMKa310; ambos apuntan al mismo endpoint de Plaspy y la plataforma aceptará la conexión del dispositivo en el puerto 8888.

## Requisitos típicos antes de la configuración

- Una unidad UMKa310 alimentada y funcional instalada o colocada en un banco de pruebas.  
- Una tarjeta SIM válida con un plan de datos activo y los ajustes APN necesarios configurados para el reenvío por GPRS.  
- Acceso al método de configuración oficial de GLONASSsoft que vaya a utilizar, como comandos SMS, la interfaz de configuración por GPRS o la herramienta Bluetooth 4.0.  
- Acceso a una cuenta Plaspy o los detalles del servidor de destino para validar que el dispositivo aparece en la plataforma después de la configuración.  
- Herramientas básicas para reiniciar o ciclar la alimentación del dispositivo si es necesario durante la configuración.  
- Documentación del fabricante para el UMKa310 que permita confirmar la sintaxis de comandos específica del firmware y la disponibilidad de funciones.

## Cómo se conecta este rastreador a Plaspy

El UMKa310 transmite coordenadas GNSS, datos de movimiento y telemetría a Plaspy reenviando su flujo de telemetría al endpoint y puerto compartidos de Plaspy. El dispositivo soporta protocolos abiertos y puede enviar la misma transmisión a varios servidores, por lo que configurar una de sus ranuras de servidor para apuntar a Plaspy es un paso de integración sencillo.

- El equipo envía datos de navegación GNSS y telemetría al endpoint del servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- UMKa310 soporta el protocolo binario abierto Wialon Combine y también puede funcionar con flujos tipo EGTS que Plaspy detectará.  
- El rastreador puede reenviar datos hasta a tres servidores simultáneamente, permitiendo que Plaspy reciba una copia junto a otros endpoints.  
- Los reportes de eventos y la detección de movimiento del acelerómetro a bordo se envían a Plaspy para alertas en vivo y reproducción histórica.  
- Tras la configuración, Plaspy identifica automáticamente el protocolo del rastreador por lo que no es necesario seleccionar manualmente el protocolo por dispositivo en el servidor.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de GLONASSsoft que usará para el UMKa310 (comandos SMS, herramienta de configuración GPRS o herramienta de configuración Bluetooth).  
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo correspondiente del dispositivo.  
3. Configure el puerto 8888 en la entrada del servidor primario (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar el protocolo de transporte.  
5. Aplique o guarde la configuración en el UMKa310 usando la herramienta o el conjunto de comandos del fabricante.  
6. Reinicie o corte la alimentación del dispositivo si el firmware lo requiere para activar los nuevos ajustes de servidor.  
7. Valide que el dispositivo reporta a Plaspy comprobando la presencia del equipo y la telemetría reciente en su cuenta o en la vista de la plataforma Plaspy.

Si planea usar una de las ranuras de servidor adicionales del UMKa310, repita los pasos de servidor y puerto en esas ranuras según sea necesario para configurar redundancia o consumidores de datos paralelos.

## Ejemplos de comandos de configuración

El UMKa310 soporta configuración vía SMS, GPRS y Bluetooth, y el conjunto exacto de comandos o la estructura del archivo de configuración depende de la versión de firmware y de la herramienta de GLONASSsoft que utilice. Dado que estos comandos los controla el fabricante y pueden cambiar, esta página no incluye cadenas SMS específicas ni cargas binarias de configuración del dispositivo.

Consulte la guía de configuración oficial del GLONASSsoft UMKa310 para la sintaxis concreta de los comandos y ejemplos cuando configure vía SMS o Bluetooth. Use la documentación del fabricante para obtener los comandos exactos necesarios para establecer el host del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y las funciones disponibles; siempre verifique los comandos según la revisión de firmware del UMKa310 que tenga.  
- Elija TCP o UDP según sus necesidades de red y fiabilidad; Plaspy acepta ambos y detecta automáticamente el protocolo al conectarse.  
- Si su UMKa310 está configurado para reenviar a múltiples servidores, asegúrese de que al menos una ranura apunte a Plaspy en el puerto 8888 para garantizar la visibilidad en la plataforma.  
- La configuración por SMS es útil para dispositivos remotos sin acceso local inmediato, mientras que Bluetooth resulta conveniente para ajustes presenciales y diagnóstico.  
- Confirme los ajustes de APN y el plan de datos de la SIM según lo requiera su operador móvil para que el dispositivo pueda establecer la conexión GPRS hacia el endpoint de Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el UMKa310 para que envíe su telemetría a Plaspy brinda a operadores de flotas y gestores de activos visibilidad centralizada de ubicación, movimiento y telemetría de sensores. El soporte del UMKa310 para protocolos abiertos, transferencia por lotes para reducir consumo de datos y el reenvío a múltiples servidores facilita su integración con Plaspy para seguimiento en tiempo real, monitoreo de eventos y reproducción histórica, manteniendo los costos operativos controlados.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For device specific command syntax, firmware details and the latest UMKa310 configuration procedures, please verify current information at the manufacturer site https://glonasssoft.ru/.
