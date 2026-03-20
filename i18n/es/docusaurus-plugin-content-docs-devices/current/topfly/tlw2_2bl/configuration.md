---
slug: /topfly/tlw2_2bl/configuration
id: tlw2_2bl-configuration
sidebar_label: Configuration
title: TopFly - TLW2-2BL Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el TopFly TLW2-2BL para Plaspy con ajustes de servidor públicos comandos SMS y guía de instalación
keywords:
  - Configuración TopFly TLW2-2BL
  - Configuración TLW2-2BL Plaspy
  - Configuración del rastreador TopFly para Plaspy
  - Ajustes del servidor TLW2-2BL
  - Configuración GPS TopFly TLW2-2BL
  - Configuración APN TLW2-2BL
  - Comandos SMS TopFly TLW2-2BL
  - Integración rastreador TLW2-2BL
  - Configuración rastreador GPS TopFly
  - Seguimiento de flotas TLW2-2BL
---

# TopFly - Configuración TLW2-2BL

Esta página describe el contexto público de configuración para usar el rastreador TopFly TLW2-2BL con la plataforma Plaspy. Reúne los ajustes compartidos del servidor Plaspy, los pasos de trabajo más comunes y los comandos SMS públicos que se usan habitualmente para preparar un TLW2-2BL para enviar datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar la incorporación. Los pasos exactos de configuración desde el fabricante y la sintaxis de comandos pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de TopFly y las notas de firmware de su equipo.

## Resumen de la configuración

Configurar un TLW2-2BL para Plaspy prepara el rastreador para enviar posiciones GNSS, telemetría de sensores y alertas de eventos al endpoint de ingestión de Plaspy. Los pasos públicos de configuración se centran en definir el APN de datos y el servidor GPRS de destino para que el dispositivo pueda abrir una sesión de datos y enviar actualizaciones a Plaspy usando el servidor y puerto compartidos.

- Apunte el dispositivo al dominio o IP del servidor Plaspy para que envíe datos a la plataforma.
- Configure el APN y, si aplica, las credenciales del APN cuando el dispositivo utilice conexión de datos móviles.
- Ajuste el intervalo de subida o temporizador para que las actualizaciones de posición coincidan con sus necesidades de monitoreo.
- Seleccione UDP o TCP cuando el dispositivo requiera elección de transporte para la entrega al servidor.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy después de aplicar los ajustes.
- Use SMS o la herramienta del proveedor para aplicar la configuración según la instalación y el acceso disponible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración y envío de datos.
- IP del servidor 54.85.159.138 como alternativa al dominio.
- Puerto 8888 que Plaspy utiliza para las conexiones de dispositivos.
- Soporte de transporte UDP o TCP según la capacidad y preferencia del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador para que no sea necesario seleccionar un protocolo en Plaspy para dispositivos compatibles.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración a escala de flota.

## Requisitos típicos antes de la configuración

- Verifique que el rastreador tenga una SIM activa compatible con LTE o datos móviles y un APN provisionado para acceso a datos.
- Acceso al método de configuración TopFly para su dispositivo, normalmente comandos SMS o la herramienta oficial del fabricante.
- El dispositivo debe estar encendido e instalado o accesible para que pueda recibir y aplicar comandos SMS o configuraciones remotas.
- La contraseña por defecto del dispositivo si se requiere para configuración por SMS; en los ejemplos públicos que siguen se usa la contraseña por defecto 0000.
- Conocimiento básico del APN, usuario APN y contraseña APN de su operador móvil si son necesarios.
- Acceso a una cuenta Plaspy o a un operador que pueda confirmar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TLW2-2BL envía mensajes de posición, telemetría y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma los ingiera y muestre. Plaspy recibe estos mensajes por el transporte configurado, detecta el protocolo del dispositivo y lo mapea para hacerlo visible en los paneles.

- El rastreador se configura para reportar al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los mensajes se envían usando UDP o TCP según la selección del dispositivo y las características de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los datos entrantes de posición y eventos para visualización en tiempo real.
- Mensajes periódicos por temporizador aseguran visibilidad continua e historial en Plaspy.
- Las alarmas y eventos de entradas que reporte el rastreador se envían a Plaspy para alertas y registro.

## Flujo común de configuración

1. Acceda al método oficial de configuración TopFly para el TLW2-2BL, por ejemplo comandos SMS o la herramienta de configuración del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor o IP del dispositivo.
3. Configure el puerto del dispositivo a 8888, que es el puerto que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para las conexiones al servidor.
5. Configure el APN y las credenciales APN opcionales para que el dispositivo pueda abrir una sesión GPRS o LTE.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el procedimiento del proveedor lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad y los mensajes de posición recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El TLW2-2BL puede configurarse enviando mensajes SMS con el formato de comandos que se muestra a continuación. Estos son ejemplos públicos de comandos SMS y usan la contraseña por defecto del dispositivo 0000 según el ejemplo del fabricante. Mantenga el orden al aplicar comandos que dependan de que se establezca conectividad.

- Ajustar la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Configurar el APN del operador y las credenciales APN opcionales
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: conserve los marcadores [apn], [apnu] y [apnp]. Reemplace [apn] por el APN de su operador móvil. Reemplace [apnu] y [apnp] por el usuario y la contraseña del APN si su operador los requiere; déjelos vacíos si no son necesarios.

- Configurar el servidor GPRS con la IP y el puerto de Plaspy
```text
IP,0000,54.85.159.138 8888#
```
Explicación: este comando configura el dispositivo para enviar datos a la IP y puerto del servidor Plaspy. Puede sustituir d.plaspy.com en herramientas del proveedor o en formatos SMS que acepten nombres de host si se admite.

- Ajustar el temporizador de subida a 60 segundos
```text
TIMER,0000,60:60:0:0#
```
Explicación: este ejemplo configura el intervalo de subida del dispositivo. Ajuste los valores según sus requisitos de frecuencia de reporte y las capacidades del firmware del dispositivo.

Nota: estos comandos son ejemplos públicos de SMS. Algunas instalaciones pueden usar software del fabricante o herramientas de aprovisionamiento en lugar de SMS. Confirme siempre la sintaxis de comandos para su versión de firmware.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Confirme el formato exacto de los comandos SMS con la documentación de TopFly para su versión de firmware.
- Elija UDP o TCP según la confiabilidad de la red y el comportamiento del operador; algunos operadores funcionan mejor con UDP y otros prefieren TCP por la estabilidad de sesión.
- La configuración por SMS está soportada en los comandos públicos anteriores; las herramientas del proveedor o una utilidad local de configuración pueden ofrecer los mismos ajustes con un flujo de trabajo diferente.
- Los comandos SMS de ejemplo utilizan la contraseña por defecto 0000 según los ejemplos públicos; cambie la contraseña después del aprovisionamiento cuando sea posible.
- Plaspy utiliza un único puerto compartido 8888 y detección automática de protocolo, lo que simplifica el aprovisionamiento masivo de dispositivos en una flota.

## Por qué usar Plaspy con esta configuración

Usar el TLW2-2BL con Plaspy ofrece un camino sencillo para obtener visibilidad confiable de vehículos y activos. La conectividad LTE del rastreador y su capacidad de buffering, junto con la detección de protocolo y el endpoint unificado de Plaspy, facilitan la incorporación y despliegues a gran escala. Las organizaciones obtienen reportes consistentes de ubicación, telemetría y alarmas en Plaspy para monitoreo operativo, alertas y análisis histórico.

Para saber más sobre Plaspy y cómo esta configuración encaja en flujos de trabajo de flota más amplios visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y procedimientos del fabricante, verifique la documentación actual en https://www.topflytech.com/ ya que los detalles del fabricante y los métodos de configuración pueden cambiar con el tiempo.
