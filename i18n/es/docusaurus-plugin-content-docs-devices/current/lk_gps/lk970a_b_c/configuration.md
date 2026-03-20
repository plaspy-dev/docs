---
slug: /lk_gps/lk970a_b_c/configuration
id: lk970a_b_c-configuration
sidebar_label: Configuration
title: LK-GPS - LK970A/B/C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK GPS LK970A/B/C para conectar con Plaspy usando ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración LK GPS LK970A
  - Configuración LK GPS LK970B
  - Configuración LK GPS LK970C
  - Configuración LK970 para Plaspy
  - Configuración de rastreador Plaspy
  - Configuración servidor rastreador GPS
  - Configuración plataforma de rastreo vehicular
  - Configuración rastreador magnético LK GPS
  - Integración LK970 con Plaspy
  - Configuración rastreador de activos GPS
---

# LK-GPS - Configuración LK970A/B/C

Esta página ofrece el contexto público de configuración para usar el rastreador LK-GPS LK970A/B/C con Plaspy. Resume los ajustes de servidor y el flujo de trabajo prácticos que técnicos e instaladores suelen seguir para poner en línea la serie LK970 con Plaspy, habilitando seguimiento en tiempo real, alertas y reproducción de historial. Las indicaciones están enfocadas en los puntos de integración públicos y en las tareas comunes necesarias para apuntar el dispositivo a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el dispositivo para Plaspy y validar la conectividad; consulte la documentación oficial de LK GPS o las herramientas del proveedor para instrucciones específicas del modelo.

## Visión general de la configuración

El objetivo de este proceso es dejar al LK970A/B/C listo para transmitir de manera confiable datos de GPS y eventos a Plaspy, de modo que el dispositivo aparezca y permanezca visible en la plataforma. Los pasos que siguen enfatizan los ajustes públicos de conexión y las comprobaciones prácticas que confirman que el rastreador está reportando a Plaspy.

- Apuntar el rastreador a los ajustes del servidor Plaspy para que la telemetría y las alertas lleguen a la plataforma.
- Verificar la conectividad celular, carga de la batería y cualquier aprovisionamiento de SIM requerido antes de configurar el servidor.
- Guardar y aplicar los ajustes de servidor y puerto usando la herramienta de configuración del fabricante o el método SMS que suministra LK GPS.
- Seleccionar UDP o TCP si el dispositivo exige una elección explícita y reiniciar el rastreador según sea necesario.
- Confirmar que el dispositivo se registra en el servidor de Plaspy y que aparece en el panel de Plaspy para seguimiento en vivo y reproducción de historial.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Asegúrese de que el rastreador tenga una batería cargada instalada o esté alimentado según las instrucciones del instalador.
- Inserte una tarjeta SIM celular válida y confirme que dispone de un plan de datos activo si el rastreador requiere conectividad celular para transmisión 4G GPS.
- Tenga acceso al método oficial de configuración de LK GPS o al software que provee el vendedor para este modelo.
- Obtenga el IMEI del dispositivo y cualquier identificador de autenticación requerido por su cuenta o flujo de trabajo en Plaspy.
- Confirme la compatibilidad regional, como las bandas LTE soportadas, con el proveedor si desplegará el equipo en distintos países o con distintos operadores.
- Prepare un plan de prueba sencillo para verificar la solución GPS y la conectividad al servidor después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el LK970A/B/C envía paquetes de ubicación y eventos al endpoint y puerto compartidos del servidor Plaspy para que la plataforma pueda ingerir telemetría, alertas y actualizaciones de estado. Plaspy usa un único puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, lo que permite recibir datos de múltiples modelos con ajustes de servidor consistentes.

- El rastreador transmite la posición GPS y eventos del dispositivo a d.plaspy.com o a la IP de servidor indicada.
- El tráfico se envía al puerto 8888 usando UDP o TCP según la configuración del rastreador y la elección del instalador.
- Plaspy recibe y analiza los paquetes del rastreador y presenta ubicación, estado y alertas en la plataforma.
- Las ubicaciones en caché y los eventos en cola se cargan a Plaspy cuando se restablece la conectividad.
- Una configuración correcta hace que el dispositivo aparezca en Plaspy para seguimiento en vivo y revisión de trazas históricas.

## Flujo típico de configuración

1. Encienda el dispositivo e inserte una SIM celular aprovisionada si la variante del rastreador la requiere.
2. Acceda al método oficial de configuración del fabricante o al software para LK970A/B/C suministrado por LK GPS o su vendedor.
3. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o, de manera alternativa, la IP del servidor Plaspy 54.85.159.138.
4. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy.
5. Seleccione el transporte UDP o TCP si el dispositivo requiere la selección explícita.
6. Aplique o guarde la configuración en la herramienta del fabricante y, si se recomienda, reinicie el dispositivo para activar los nuevos ajustes.
7. Valide que el rastreador reporte a Plaspy comprobando la aparición del dispositivo y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la interfaz de configuración varían según el firmware de LK GPS y la herramienta del proveedor. Muchos dispositivos LK GPS se configuran mediante una utilidad de escritorio del proveedor, una app móvil o cadenas de comandos SMS documentadas por el fabricante. Debido a las diferencias de firmware y herramientas, siga el método oficial de configuración de LK GPS para este modelo para establecer el servidor d.plaspy.com (o 54.85.159.138) y el puerto 8888, y para elegir UDP o TCP cuando corresponda.

Si dispone de cadenas de comandos SMS específicas o comandos de consola proporcionados por LK GPS o su distribuidor, aplíquelos en el orden recomendado por el proveedor y verifique cada paso usando la retroalimentación del dispositivo o los registros de conexión en Plaspy.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar las opciones de menú disponibles y el formato de los comandos de configuración; siempre consulte las notas de la versión del proveedor.
- Si el rastreador soporta tanto UDP como TCP, pruebe el transporte preferido para su entorno de red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente al recibir datos.
- Mantenga un registro del IMEI del dispositivo y de cualquier credencial requerida para el aprovisionamiento en Plaspy para simplificar la incorporación.
- Para despliegues en distintas regiones, confirme el soporte de bandas LTE y la compatibilidad con operadores con LK GPS o su suministrador.
- Si el dispositivo admite configuración por SMS, asegúrese de que el número o la SIM desde la que envía los comandos tenga habilitada la capacidad de SMS y que los comandos usen la sintaxis documentada por el fabricante.

## Por qué usar Plaspy con esta configuración

Usar el LK970A/B/C con Plaspy permite a las organizaciones centralizar datos de ubicación y eventos en tiempo real para flotas y activos de alto valor. La familia LK970 ofrece larga autonomía y un formato discreto que, al apuntarlo a Plaspy con los ajustes de servidor compartidos, brinda visibilidad continua, generación de alertas y reproducción de historial necesarios para la supervisión operativa y la respuesta a incidentes.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles más recientes del dispositivo LK GPS en https://www.lk-gps.com para verificar las instrucciones del fabricante y el comportamiento del firmware. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que confirme los detalles específicos del dispositivo con la documentación oficial de LK GPS antes de un despliegue a gran escala.
