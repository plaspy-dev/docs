---
slug: /glonasssoft/umka315/configuration
id: umka315-configuration
sidebar_label: Configuration
title: GLONASSsoft - UMKa315 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GLONASSsoft UMKa315 para Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - GLONASSsoft UMKa315
  - configuración UMKa315
  - configuración UMKa315 Plaspy
  - configuración rastreador GLONASSsoft
  - configuración Wialon Combine
  - configuración rastreador EGTS
  - configuración servidor Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - rastreador gestión de flotas
---

# GLONASSsoft - Configuración del UMKa315

Esta página describe el contexto público de configuración para usar el rastreador GLONASSsoft UMKa315 con Plaspy. Aquí encontrará los ajustes prácticos de servidor y el flujo de trabajo que deberá seguir para apuntar el dispositivo a Plaspy, de modo que la telemetría, la ubicación y los eventos lleguen a la plataforma. La guía se centra en hechos de integración públicamente disponibles y en pasos estándar de configuración, no en herramientas privadas del fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los paquetes llegan a la plataforma. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del fabricante que usted utilice. Combine siempre las indicaciones de esta página con la documentación del UMKa315 y con los procedimientos de su instalador.

## Visión general de la configuración

El objetivo al configurar el UMKa315 para Plaspy es preparar el dispositivo para que envíe de forma fiable paquetes de telemetría compactos mediante protocolos soportados y que aparezca en la plataforma para monitoreo e informes. Esto implica establecer el endpoint de Plaspy, seleccionar un transporte y verificar la conectividad desde el dispositivo hasta la plataforma.

- Configure la dirección del servidor del dispositivo hacia Plaspy y confirme que el endpoint sea accesible desde el rastreador.
- Ajuste el rastreador para usar el puerto compartido de Plaspy y un método de transporte apropiado.
- Asegúrese de que el dispositivo tenga una conexión de datos válida y que cualquier ajuste de APN o SIM requerido esté configurado.
- Verifique que la posición, las entradas y los datos de BLE o sensores sean visibles en Plaspy después de la configuración.
- Pruebe y ajuste los intervalos de reporte y la asignación de entradas para que coincidan con sus necesidades operativas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los paquetes llegan a la plataforma

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma intentará detectar si el rastreador está usando Wialon Combine, EGTS u otro protocolo compatible.

## Requisitos típicos previos a la configuración

- Energice el UMKa315 y asegúrese de que la batería del dispositivo o la alimentación del vehículo sea estable durante la configuración y las pruebas.
- Una tarjeta SIM activa con plan de datos y los ajustes de APN conocidos para conectividad GPRS.
- Acceso físico o remoto al método de configuración del dispositivo proporcionado por GLONASSsoft, como el software del fabricante, comandos SMS o una herramienta de configuración.
- Una cuenta de Plaspy o acceso a un usuario de Plaspy que pueda confirmar que el dispositivo aparece en la plataforma tras la configuración.
- Información básica de instalación, incluyendo el cableado de encendido, entradas y salidas si planea mapear esas señales en Plaspy.
- Si utiliza sensores o identificación por BLE, tenga los periféricos BLE listos para emparejamiento y pruebas.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el UMKa315 envía telemetría paquetizada usando protocolos binarios compatibles y apunta al endpoint y puerto compartido de Plaspy. Plaspy recibe los paquetes, detecta automáticamente el protocolo y decodifica los datos de ubicación y sensores para su visualización en tiempo real, generación de alertas y registro.

- El dispositivo transmite el protocolo binario Wialon Combine o paquetes EGTS a d.plaspy.com en el puerto 8888.
- Puede usar transporte UDP o TCP en el puerto 8888 según las opciones de configuración del equipo y la fiabilidad de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma al establecer la conexión inicial.
- Los arreglos GPS, los cambios de estado de entradas y las lecturas de sensores BLE se reenvían a Plaspy para visibilidad y generación de eventos.
- Los registros en caja negra u offline almacenados en el dispositivo se cargan al servidor cuando se restablece la conectividad.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GLONASSsoft o al software correspondiente para el UMKa315 según las instrucciones del fabricante.
2. En los ajustes de servidor del dispositivo introduzca el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido usado por Plaspy para todos los equipos.
4. Elija UDP o TCP como transporte si el rastreador requiere seleccionar uno.
5. Ingrese cualquier APN o datos de la SIM necesarios para que el dispositivo pueda abrir una sesión GPRS y alcanzar Plaspy.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo del fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy verificando la telemetría entrante en su cuenta de Plaspy y confirmando que el rastreador aparece en línea.

## Ejemplos de comandos de configuración

El UMKa315 puede configurarse usando las herramientas oficiales de GLONASSsoft, comandos SMS o una utilidad de configuración del proveedor. Los comandos exactos y la sintaxis varían según la versión de firmware y el conjunto de herramientas del fabricante. Consulte el manual del GLONASSsoft UMKa315 o la guía de configuración del proveedor para las cadenas SMS precisas o los pasos de software necesarios para establecer la dirección del servidor, el transporte y los valores de APN.

## Notas de configuración

- Las revisiones de firmware y hardware pueden afectar la sintaxis de los comandos de configuración y las funciones disponibles; confirme la versión de firmware del dispositivo antes de aplicar comandos.
- UDP suele ser preferible por su menor sobrecarga para telemetría, mientras que TCP puede ofrecer mayor fiabilidad de sesión en algunas condiciones de red; elija el transporte que mejor se adapte a su red y necesidades operativas.
- Asegúrese de que los ajustes de APN sean correctos para la SIM instalada y permitan conexiones GPRS hacia d.plaspy.com o 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador tras la llegada de paquetes, por lo que la configuración debe centrarse en el endpoint y el transporte correctos.
- Mantenga a mano la documentación del fabricante para opciones por SMS o utilidades de software que puedan facilitar la configuración masiva o la reconfiguración remota.

## Por qué usar Plaspy con esta configuración

Usar el UMKa315 con Plaspy le brinda un rastreador compacto que envía telemetría binaria eficiente y minimiza el consumo de datos gracias al soporte de Wialon Combine y EGTS. Esta configuración es ideal para visibilidad de flotas, mapeo de entradas y sensores, flujos de identificación basados en BLE y casos de uso donde son importantes las actualizaciones frecuentes y el bajo costo de datos.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para detalles más recientes sobre la configuración específica de dispositivos, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de GLONASSsoft https://glonasssoft.ru/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme los procedimientos actuales antes del despliegue.
