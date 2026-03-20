---
slug: /pst/pst_avl01/configuration
id: pst_avl01-configuration
sidebar_label: Configuration
title: PST - PST-AVL01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador PST PST-AVL01 y que se comunique con Plaspy usando ajustes de servidor compartido
keywords:
  - configuración rastreador PST
  - configuración PST PST-AVL01
  - configuración PST-AVL01 Plaspy
  - configuración rastreador GPS PST
  - configuración seguimiento de vehículos
  - configuración rastreador gestión de flotas
  - configuración servidor PST
  - integración rastreador GPS Plaspy
  - guía configuración PST AVL01
  - ajustes servidor rastreador PST
---

# PST - PST-AVL01 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador PST PST-AVL01 con Plaspy. Se centra en los ajustes prácticos del servidor y las acciones comunes necesarias para apuntar un dispositivo PST-AVL01 a Plaspy, de modo que el equipo pueda enviar su ubicación y estado a la plataforma. Cuando están disponibles, se incluyen ejemplos de comandos SMS proporcionados por el fabricante como referencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PST-AVL01 soporta comunicación GSM y GPRS y puede configurarse vía SMS como muestran los ejemplos a continuación, por lo que debe seguir la documentación del fabricante y estos ajustes públicos al integrarlo con Plaspy.

## Resumen de la configuración

El objetivo de configurar un PST-AVL01 para Plaspy es preparar el dispositivo para enviar datos de ubicación y eventos al endpoint de Plaspy de forma fiable. Esto implica ajustar la zona horaria y el APN del equipo, configurar el endpoint y puerto del servidor GPRS y cambiar el dispositivo a modo GPRS para que reporte a Plaspy.

- Definir parámetros de red del dispositivo, como APN y servidor GPRS, para que el rastreador pueda abrir una sesión de datos.  
- Configurar el dispositivo para que reporte al endpoint y puerto del servidor de Plaspy y asegurar la llegada de los mensajes a la plataforma.  
- Validar la conectividad utilizando métodos de verificación del fabricante, como respuestas SMS o reportes en la plataforma.  
- Asegurar que la zona horaria y los parámetros básicos estén correctos para obtención de marcas de tiempo coherentes.  
- Cambiar el dispositivo a modo GPRS o modo de reporte de datos para que las actualizaciones de ubicación se entreguen a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Estos valores son los ajustes públicos del endpoint de Plaspy para usar al configurar el PST-AVL01. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto.

## Requisitos típicos antes de la configuración

- Un equipo PST-AVL01 con alimentación, una SIM disponible y un plan de datos o GPRS activo según lo requiera el rastreador.  
- Conocimiento de la contraseña por defecto del equipo si se requiere para comandos SMS o configuración remota. El ejemplo de PST abajo usa la contraseña por defecto 000000.  
- Acceso al método de configuración del fabricante soportado por el dispositivo, como comandos SMS o software del proveedor.  
- Los ajustes APN correctos del operador móvil para habilitar la conectividad GPRS. Use los marcadores de posición del APN según sea necesario.  
- Capacidad para enviar comandos SMS desde un teléfono o sistema de gestión si el equipo se configura vía SMS.  
- Un plan para validar los reportes en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El PST-AVL01 se configura para abrir una sesión GPRS y enviar datos al endpoint del servidor de Plaspy. Una vez que el dispositivo apunte a la dirección y puerto compartidos de Plaspy, la plataforma recibirá las actualizaciones de ubicación y determinará automáticamente el protocolo del rastreador para que el equipo aparezca en la plataforma.

- El dispositivo se configura para reportar al dominio o IP y puerto del servidor de Plaspy.  
- Los datos se envían mediante UDP o TCP según la configuración del dispositivo y las condiciones de red.  
- Plaspy recibe conexiones entrantes de dispositivos en el puerto 8888 y reconoce automáticamente el protocolo del rastreador.  
- Los mensajes de ubicación y eventos se entregan a Plaspy, donde se vuelven visibles en la vista de flotas.  
- La visibilidad en la plataforma se confirma observando los check-ins y la telemetría del dispositivo en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software del PST-AVL01, como la interfaz de comandos SMS documentada por PST.  
2. Ingrese el endpoint del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según requiera el método de configuración del equipo.  
3. Configure el puerto del servidor en 8888. Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar transporte. Confirme cuál es el transporte preferido para su red.  
5. Aplique o guarde la configuración en el rastreador usando el método del fabricante, por ejemplo, enviando los comandos SMS correspondientes.  
6. Reinicie o corte la alimentación del equipo si las instrucciones del dispositivo indican hacerlo para aplicar los ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy comprobando la conexión del equipo o la primera actualización de ubicación en la plataforma Plaspy.

Si usa el método SMS de PST, ejecute los comandos de configuración en el orden requerido por PST y reemplace los marcadores de posición como [apn] por los valores de su operador móvil.

## Comandos de configuración de ejemplo

El fabricante del PST-AVL01 documenta un flujo de configuración basado en SMS. Los comandos de ejemplo a continuación son muestras públicas que muestran el orden y la estructura usados para configurar el equipo. Estos comandos se envían como mensajes SMS al rastreador y el ejemplo utiliza la contraseña por defecto del equipo 000000. Conserve los marcadores de posición tal como aparecen y reemplácelos por valores reales al aplicarlos en su dispositivo.

1. Establecer la zona horaria a UTC 0
```text
W000000,032,0
```

2. Configurar el APN del operador
```text
W000000,011,[apn],[apnu],[apnp]
```
- [apn] es la cadena APN del operador móvil.  
- [apnu] es el usuario del APN si el operador lo requiere. Dejar en blanco si no se usa.  
- [apnp] es la contraseña del APN si el operador la requiere. Dejar en blanco si no se usa.  
- Si su operador no requiere usuario ni contraseña, envíe solo W000000,011,[apn].

3. Establecer el servidor GPRS con la IP y puerto de Plaspy
```text
W000000,012,54.85.159.138,8888
```
- Este comando usa la IP y el puerto 8888 del servidor Plaspy según lo publicado.

4. Cambiar el dispositivo a modo GPRS
```text
W000000,013,1
```

Notas sobre estos comandos:
- Cada comando anterior es un mensaje SMS formateado para el PST-AVL01 y usa la contraseña de ejemplo 000000.  
- Si su dispositivo requiere el dominio del servidor en lugar de la IP, use d.plaspy.com en el comando del servidor donde el firmware del rastreador lo soporte.  
- Envíe los comandos en el orden mostrado para asegurar que el APN y los ajustes del servidor se apliquen antes de habilitar el modo GPRS.

## Notas de configuración

- El ejemplo del PST-AVL01 arriba usa configuración por SMS, que es común en muchos dispositivos PST. Verifique que su dispositivo específico soporte configuración por SMS.  
- Las versiones de firmware y revisiones de hardware pueden cambiar el formato de los comandos, los parámetros requeridos o las contraseñas por defecto. Confirme los comandos con la documentación del fabricante para la revisión de su equipo.  
- Elija UDP o TCP según la fiabilidad de la red y el soporte del operador. Algunas redes son más fiables con UDP y otras con TCP. Plaspy acepta ambos en el puerto 8888.  
- Reemplace marcadores de posición como [apn], [apnu] y [apnp] con los valores proporcionados por el operador móvil. Si el operador no requiere usuario o contraseña, omita esos valores o déjelos vacíos según las instrucciones del dispositivo.  
- Plaspy usa un puerto de servidor compartido y detección automática de protocolo, por lo que una vez que el dispositivo apunte al endpoint de Plaspy la plataforma intentará reconocer el protocolo del rastreador.

## Por qué usar Plaspy con esta configuración

Usar el PST-AVL01 con Plaspy ofrece una forma sencilla de añadir visibilidad de los vehículos y monitoreo operativo a su flota. Al configurar el rastreador para que reporte al endpoint y puerto compartidos de Plaspy, las organizaciones pueden consolidar los datos de ubicación, monitorear eventos y administrar dispositivos en una única plataforma que detecta automáticamente el protocolo del rastreador.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo. Verifique los detalles de configuración más recientes con el fabricante y consulte la documentación oficial de PST para su modelo y versión de firmware exactos.
