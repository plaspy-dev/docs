---
slug: /globalsat/lt_501r/configuration
id: lt_501r-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501R Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat LT-501R y conectarlo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración GlobalSat LT-501R
  - Configuración LT-501R para Plaspy
  - Configuración rastreador GPS GlobalSat
  - Configuración servidor LT-501R
  - Integración LT-501R con Plaspy
  - Configuración software de seguimiento LT-501R
  - Configuración rastreador de activos GlobalSat
  - Configuración LoRaWAN rastreador Plaspy
  - Configuración SMS LT-501R
  - Configuración plataforma rastreador GPS
---

# GlobalSat - LT-501R Configuración

Esta página recopila la información pública de configuración para usar el rastreador GlobalSat LT-501R con Plaspy. Aquí encontrará los ajustes prácticos y ejemplos que proporciona el fabricante para preparar el equipo y que reporte a Plaspy. Use este contenido como referencia de despliegue, complementando la documentación del fabricante y sus procedimientos de instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LT-501R es principalmente un rastreador de activos LoRaWAN; la información aquí incluye un ejemplo de configuración por SMS provisto por el fabricante que apunta el dispositivo al endpoint TCP o UDP de Plaspy cuando esa opción está disponible en su firmware.

## Resumen de la configuración

El objetivo de la configuración es que el LT-501R sea visible y reporte su telemetría a Plaspy de forma fiable. Normalmente esto implica apuntar el dispositivo al endpoint de servidor de Plaspy, seleccionar el transporte adecuado y validar que los reportes llegan a la plataforma.

- Configure el rastreador para que reporte al endpoint compartido de Plaspy y así se ingieran ubicación y datos de sensores.
- Seleccione el transporte correcto (UDP o TCP) cuando el dispositivo requiera elegir uno.
- Proporcione cualquier APN o parámetros de conectividad celular necesarios si el firmware del equipo soporta reporte IP vía SMS.
- Aplique y guarde la configuración, luego reinicie el dispositivo para que los nuevos ajustes entren en vigor.
- Valide la conectividad en Plaspy para confirmar que el rastreador está reportando y aparece en su espacio de trabajo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor de Plaspy al configurar el LT-501R para reporte directo a Plaspy:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: se soporta UDP o TCP; configure el que el dispositivo requiera
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto. Ingrese el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto 8888 en la configuración del dispositivo.

## Requisitos habituales antes de comenzar

- Una unidad LT-501R alimentada con acceso a su IMEI o identificador del dispositivo
- Acceso al método de configuración del fabricante para su unidad, como comandos SMS, herramientas web o de escritorio del proveedor, o utilidades USB
- Si el equipo utiliza reporte IP celular, una tarjeta SIM activa y la información APN adecuada del proveedor de la SIM
- Un método para enviar mensajes SMS de configuración desde un teléfono o servicio que pueda alcanzar el dispositivo
- Acceso a Plaspy y a un espacio de trabajo donde el dispositivo aparecerá una vez que reporte correctamente
- Conocimiento de la versión de firmware del dispositivo y de las variantes regionales que puedan afectar los comandos disponibles

## Cómo se conecta este rastreador a Plaspy

El LT-501R se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir la telemetría para mapas, alertas e historial. Cuando el firmware del fabricante lo permite, el dispositivo puede apuntarse a Plaspy mediante IP o dominio y configurarse para usar transporte TCP o UDP.

- El dispositivo envía cargas de ubicación y sensores a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe los paquetes entrantes y detecta automáticamente el protocolo del rastreador para su procesamiento.
- La telemetría recibida por Plaspy se convierte en actualizaciones de ubicación en tiempo real, recorridos históricos y notificaciones de eventos en su espacio de trabajo.
- Configure el transporte como UDP o TCP en el dispositivo si el firmware exige elegir uno.
- Tras la configuración, el monitoreo en Plaspy valida el reporte y el estado operativo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat para su equipo. Puede ser el formato de comandos SMS documentado, el software del proveedor o herramientas USB/seriaLes según el firmware y la región del LT-501R.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como IP 54.85.159.138 en el campo de servidor o endpoint del dispositivo.
3. Establezca el puerto de reporte en 8888 (este es el puerto compartido que usa Plaspy para todos los dispositivos).
4. Elija UDP o TCP si el dispositivo le solicita seleccionar un protocolo de transporte.
5. Proporcione los ajustes APN o parámetros de conectividad necesarios (use marcadores como [apn], [apnu] y [apnp] cuando apliquen).
6. Aplique o guarde la configuración en el dispositivo y, si es necesario, reinicie para activar los nuevos ajustes.
7. Valide en Plaspy que el dispositivo reporta correctamente y aparece en su espacio de trabajo con la telemetría esperada.

## Comandos de configuración de ejemplo

El ejemplo del fabricante incluye comandos de configuración basados en SMS. Estos son comandos públicos que aparecen en la documentación del modelo y se reproducen aquí en forma legible. Conserve los marcadores y calcule la suma de verificación tal como indica el proveedor antes de enviar el SMS.

- Nota de formato del proveedor: Format used by Plaspy TSPRXAB27GHKLMnaicz*U!

- Comando de configuración (reemplace los marcadores y calcule la suma de verificación antes de enviar):
```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```
Explicación:
- [imei] — reemplace con el número IMEI del dispositivo.
- [apn] — nombre del APN para el operador de la SIM.
- [apnu] — nombre de usuario del APN si lo requiere su operador; dejar en blanco si no aplica.
- [apnp] — contraseña del APN si la requiere su operador; dejar en blanco si no aplica.
- E0 y E1 son la IP y el puerto del servidor Plaspy respectivamente, como se indicó arriba.
- A1=1 normalmente habilita la primera ranura de servidor en el dispositivo (consulte la documentación del proveedor para el significado del modo).
- [checksum] es una suma de verificación hexadecimal de dos dígitos calculada sobre el texto del comando hasta antes del carácter '*'.

- Comando opcional de reinicio (usar después de configurar si requiere reinicio):
```text
GSC,[imei],3,0,LH*[checksum]!
```
Etiqueta: Reiniciar el dispositivo (opcional si su flujo de trabajo exige reinicio para aplicar ajustes).

Cálculo de checksum (método provisto por el proveedor):
- La suma de verificación es el XOR de todos los códigos de caracteres en la cadena del comando hasta el carácter '*' (no incluido).
- Convierta el número resultante a un valor hexadecimal de dos caracteres en mayúsculas (agregue un cero a la izquierda si es necesario) y colóquelo en el marcador [checksum].
- Muchas herramientas del proveedor o utilidades web calculan este checksum automáticamente; si envía SMS manualmente podría necesitar un asistente externo para calcularlo.

Importante: Verifique siempre la sintaxis exacta de los comandos para su revisión de firmware antes de enviar comandos SMS. Los ejemplos anteriores reflejan el formato público del proveedor presente en la documentación del dispositivo.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar los comandos disponibles o los nombres de parámetros; confirme que los comandos coinciden con su firmware LT-501R.
- El ejemplo mostrado arriba es para configuración vía SMS; algunos instaladores usan el software del fabricante o herramientas USB que gestionan automáticamente checksums y el codificado de parámetros.
- Cuando tenga la opción, elija UDP o TCP según su entorno de red; Plaspy acepta ambos y analizará automáticamente el protocolo entrante.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, asegúrese de que el puerto 8888 sea accesible desde la ruta de red del dispositivo cuando use reporte por IP.
- Mantenga la documentación del fabricante a mano para cualquier indicador específico del equipo, como la selección de ranura de servidor o el comportamiento del parámetro A1.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el LT-501R centraliza la telemetría de activos en una sola plataforma, donde los equipos pueden monitorear ubicación, eventos de movimiento y detecciones de sensores en despliegues de larga duración. Plaspy ingiere el tráfico configurado del dispositivo y ofrece mapeo, alertas e informes históricos que ayudan a los equipos de operaciones y protección de activos a responder rápidamente y mantener la conciencia situacional.

Para saber más sobre Plaspy y cómo ingiere datos de rastreadores, visite https://www.plaspy.com. Para detalles específicos de configuración, notas de firmware y la documentación del fabricante más actualizada para la serie LT-501R, verifique la información en el sitio de GlobalSat https://www.globalsat.com.tw/ ya que las especificaciones y métodos de configuración del proveedor pueden cambiar con el tiempo.
