---
slug: /itriangle/ts101_basic/configuration
id: ts101_basic-configuration
sidebar_label: Configuration
title: iTriangle - TS101 BASIC Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el iTriangle TS101 BASIC con Plaspy usando ajustes de servidor compartidos
keywords:
  - configuración iTriangle TS101 BASIC
  - instalación iTriangle TS101 BASIC
  - configuración TS101 BASIC Plaspy
  - configuración del rastreador iTriangle
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS
  - configuración de seguimiento de vehículos
  - configuración de rastreo de flotas
  - configuración GPS TS101
  - configuración del servidor Plaspy
---

# iTriangle - Configuración del TS101 BASIC

Esta página ofrece el contexto público de configuración para usar el rastreador iTriangle TS101 BASIC con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y validar que el equipo sea visible y reporte datos en la plataforma. Está pensada para ayudar a técnicos e integradores a preparar el dispositivo para su operación con Plaspy usando información pública.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Todos los dispositivos en Plaspy usan el mismo puerto, y el TS101 BASIC puede enviarlos mediante UDP o TCP al punto de entrada de Plaspy. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre debe verificar la documentación de iTriangle para procedimientos específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el TS101 BASIC para comunicarse de forma fiable con Plaspy, validar la conectividad y hacer visible el dispositivo en la plataforma. El objetivo es garantizar que el rastreador reporte posiciones GNSS y telemetría relevante a Plaspy usando el punto de entrada y puerto compartidos.

- Apuntar el equipo al servidor de Plaspy y confirmar los ajustes de transporte.  
- Configurar el acceso de red en el dispositivo, incluyendo la SIM y el APN según sea necesario para operación TCP/IP 2G.  
- Guardar y aplicar configuraciones, y reiniciar o cortar la alimentación al dispositivo si el procedimiento del fabricante lo requiere.  
- Verificar que los datos de posición y eventos lleguen a Plaspy y comprobar la visibilidad en la plataforma.  
- Usar el almacenamiento interno y las comprobaciones de reporte para confirmar la sincronización de puntos históricos tras una interrupción de conectividad.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com  
- Dirección IP del servidor: 54.85.159.138  
- Puerto: 8888  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Manejo de protocolo: Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el rastreador.

## Requisitos típicos antes de la configuración

- Un equipo TS101 BASIC con alimentación, instalado o conectado a una fuente de banco dentro de su rango de voltaje compatible.  
- Una SIM celular válida con un plan de datos activo adecuado para la red 2G regional del dispositivo, si se usa modo celular.  
- Acceso al método de configuración oficial de iTriangle para el TS101 BASIC (herramienta del fabricante, interfaz web o método de aprovisionamiento soportado).  
- Conocimiento del APN correcto y de cualquier credencial de APN que requiera el proveedor de SIM.  
- Una cuenta de Plaspy y credenciales para validar la visibilidad del dispositivo en la plataforma.  
- Acceso físico al equipo para reiniciarlo o revisar indicadores LED como parte de la verificación.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TS101 BASIC envía posiciones GNSS y telemetría de eventos al punto de entrada y puerto compartidos de Plaspy. Plaspy ingiere los paquetes entrantes, identifica automáticamente el protocolo del rastreador y procesa los datos para seguimiento en vivo, reproducción histórica y alertas.

- El dispositivo reporta fijaciones de posición GNSS y tiempos al punto de entrada d.plaspy.com (o 54.85.159.138) en el puerto 8888.  
- La telemetría como estado de ignición, eventos de entradas digitales, alertas de movimiento o acelerómetro y estado de E/S se envía como paquetes específicos del protocolo a Plaspy.  
- El almacenamiento a bordo conserva puntos históricos durante interrupciones y sincroniza los registros almacenados con Plaspy una vez que se restablece la conectividad.  
- Plaspy utiliza el mismo puerto de escucha para todos los rastreadores soportados y detecta automáticamente el protocolo entrante para rutear y decodificar los datos.  
- La selección de transporte en el dispositivo (UDP o TCP) debe configurarse según las capacidades del equipo y las condiciones de red.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de iTriangle para el TS101 BASIC (herramienta web del fabricante, utilidad USB/serie o herramienta de aprovisionamiento del proveedor).  
2. En los ajustes de red o servidor, ingrese el servidor de Plaspy como dominio d.plaspy.com o la dirección IP 54.85.159.138.  
3. Establezca el puerto de destino en 8888, que es el requerido por Plaspy.  
4. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo exige una selección explícita.  
5. Configure los parámetros celulares necesarios, como el APN y las credenciales del APN, para que el dispositivo pueda establecer una sesión de datos.  
6. Aplique o guarde la configuración y siga las instrucciones del equipo para reiniciar o ciclar la alimentación si es necesario.  
7. Valide que el TS101 BASIC reporte a Plaspy revisando la actividad del equipo y las actualizaciones de posición en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Esta página no incluye comandos específicos del dispositivo porque el método exacto puede variar entre versiones de firmware y herramientas del fabricante. Los dispositivos iTriangle suelen configurarse mediante una utilidad de software del proveedor, una interfaz serie o un servicio de aprovisionamiento OTA. Consulte la documentación oficial del iTriangle TS101 BASIC o la guía de aprovisionamiento de su proveedor para la sintaxis exacta de comandos o los pasos en GUI para establecer el servidor, puerto y parámetros de transporte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar cómo se presentan los ajustes en la herramienta de configuración; confirme la versión de firmware antes de aplicar comandos.  
- Elija TCP o UDP en el dispositivo según la fiabilidad de la red y la guía de iTriangle para el TS101 BASIC; Plaspy acepta cualquiera de los dos transportes en el puerto 8888.  
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, configurar el puerto 8888 es suficiente; Plaspy detectará automáticamente el protocolo entrante.  
- Asegúrese de que el APN de la SIM y las credenciales sean correctos para la operación celular, de modo que el rastreador pueda abrir una sesión TCP o UDP hacia d.plaspy.com.  
- Las prácticas del instalador y las bandas celulares regionales o restricciones del operador pueden afectar la conectividad; verifique la compatibilidad de la red local para 2G cuando aplique.

## Por qué usar Plaspy con esta configuración

Usar el iTriangle TS101 BASIC con Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real del vehículo, ingestión de telemetría y monitoreo por eventos. El almacenamiento a bordo del TS101 BASIC y su soporte multiconstelación GNSS ayudan a mantener la continuidad del rastreo, mientras que la detección automática de protocolos de Plaspy y los ajustes de servidor compartidos simplifican los despliegues con múltiples dispositivos.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante más actuales, verifique la información más reciente en el sitio de iTriangle https://www.itriangle.net/ antes de aplicar configuraciones en producción.
