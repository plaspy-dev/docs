---
slug: /queclink/gl521mg/configuration
id: gl521mg-configuration
sidebar_label: Configuration
title: QuecLink - GL521MG Configuration
sidebar_class_name: menu_item_tracker
description: Configurar QuecLink GL521MG para usar con Plaspy, incluyendo ajustes de servidor, comandos SMS y guía de instalación
keywords:
  - Configuración QuecLink GL521MG
  - Instalación QuecLink GL521MG
  - Configuración GL521MG Plaspy
  - Configuración rastreador QuecLink
  - Configuración servidor GL521MG
  - Configuración plataforma GPS QuecLink
  - Protocolo QuecLink @Track
  - Configuración rastreador de activos
  - Guía instalación rastreador GPS
  - Configuración rastreo vehicular
---

# QuecLink - GL521MG Configuration

Esta página documenta la información pública de configuración para usar el QuecLink GL521MG con Plaspy. Aquí se explica la configuración de servidor compartida por Plaspy, el flujo de trabajo habitual de puesta en marcha y ejemplos de comandos SMS publicados para este modelo. Use esta guía para preparar el GL521MG para reportar a Plaspy y para saber qué verificar antes del despliegue final.

Plaspy utiliza un endpoint y puerto de servidor unificados para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos aquí como ejemplos públicos y confirme los detalles con la documentación del fabricante y el firmware instalado en su equipo.

## Resumen de la configuración

El objetivo de la configuración es dejar el GL521MG listo para comunicarse de forma fiable con la plataforma Plaspy, de modo que la ubicación, los sensores y los eventos de alarma se muestren en su cuenta Plaspy. En el GL521MG esto suele implicar aplicar ajustes de red, apuntar el dispositivo al endpoint de Plaspy y habilitar los reportes y entradas de alarma deseadas.

- Configure el APN y parámetros GPRS para que el dispositivo establezca conectividad de datos móviles.
- Configure el dispositivo para que reporte al endpoint del servidor Plaspy y así la telemetría llegue a la plataforma.
- Ajuste los intervalos de reporte y las entradas de alarma según las necesidades de monitoreo de su despliegue.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.
- Opcionalmente utilice comandos SMS para provisión en campo cuando no disponga de una herramienta de configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la puesta en marcha

- Un dispositivo GL521MG con batería y alimentación, con una SIM activa instalada y datos móviles habilitados.
- El APN correcto, usuario APN y contraseña APN del operador de la SIM.
- Acceso al flujo de comandos SMS de QuecLink o a la herramienta oficial de configuración QuecLink para su versión de firmware.
- Conocimiento de la contraseña del dispositivo si los comandos de configuración requieren autenticación (los ejemplos usan la contraseña pública por defecto queclink).
- Un plan de pruebas para validar que el dispositivo reporte en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El GL521MG envía posiciones y eventos a Plaspy al configurarse para enviar su telemetría al endpoint compartido de Plaspy en el puerto estándar. Plaspy ingiere actualizaciones de posición, lecturas de sensores y eventos de alarma y los asocia con los registros de dispositivo en la plataforma.

- El dispositivo se configura para apuntar a d.plaspy.com y/o 54.85.159.138 en el puerto 8888.
- La telemetría puede enviarse por UDP o TCP según la selección de transporte; Plaspy detectará automáticamente el protocolo del rastreador.
- Los reportes regulares de posición y las actualizaciones programadas aparecerán como actividad del dispositivo en Plaspy.
- Las entradas de alarma y SOS configuradas en el dispositivo se enviarán a Plaspy y pueden activar alertas y notificaciones.
- Tras la configuración, valide la visibilidad del dispositivo y el envío de eventos en Plaspy para confirmar la integración.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GL521MG, por ejemplo comandos SMS, herramientas web o de escritorio, o el flujo de aprovisionamiento del proveedor según su firmware.
2. Ingrese d.plaspy.com como dominio del servidor GPRS o utilice la IP del servidor Plaspy 54.85.159.138 donde lo requiera la interfaz del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP si el dispositivo solicita selección de transporte y guarde la elección.
5. Aplique o guarde la configuración en el dispositivo y, si usa comandos SMS, verifique que los mensajes confirmen la aceptación correcta.
6. Reinicie el equipo si el firmware o el método de configuración lo requiere para aplicar ajustes de red y servidor.
7. Valide que el dispositivo reporte en Plaspy revisando la actividad del dispositivo y la telemetría entrante en la plataforma.

## Comandos de configuración de ejemplo

El GL521MG puede configurarse por SMS usando comandos estilo AT de QuecLink. Los siguientes comandos de ejemplo son parte del contenido público publicado originalmente. La contraseña del dispositivo usada en estos comandos es queclink, que es la contraseña por defecto en los ejemplos. Reemplace los marcadores de posición como [apn], [apnu] y [apnp] por los valores proporcionados por su operador.

- Paso opcional inicial para restaurar ajustes de fábrica (usar sólo si desea resetear el dispositivo):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Ajustar la zona horaria a UTC 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador (reemplace los marcadores por los datos de su operador):
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación: [apn] es la cadena APN del operador, [apnu] es el usuario APN y [apnp] la contraseña APN. Deje usuario y contraseña en blanco si su operador no los requiere.

- Configurar el servidor GPRS a Plaspy por dominio e IP y especificar el puerto 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Explicación: Este ejemplo incluye tanto el dominio d.plaspy.com como la IP del servidor Plaspy 54.85.159.138 y establece el puerto en 8888. La selección de transporte puede ser inferida por el dispositivo; Plaspy soporta UDP o TCP y detectará el protocolo automáticamente.

- Establecer el intervalo de actualización de ubicación a 60 segundos:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS (ejemplo habilita la entrada 2):
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Use las respuestas SMS del dispositivo para confirmar que cada comando fue aceptado. Si su instalación utiliza una herramienta de configuración en lugar de SMS, aplique allí los ajustes equivalentes: configurar APN, establecer servidor/dominio a d.plaspy.com o 54.85.159.138, establecer puerto 8888, seleccionar UDP o TCP si es necesario y habilitar intervalos de reporte y entradas de alarma según corresponda.

## Notas de configuración

- El firmware y las herramientas de aprovisionamiento varían según la versión de QuecLink y las variantes regionales; confirme la sintaxis de los comandos para su firmware antes de provisionar en masa.
- La provisión por SMS es útil para configuraciones en campo, mientras que herramientas de escritorio o soluciones de aprovisionamiento empresarial suelen ser más rápidas para despliegues a gran escala.
- Elija UDP o TCP según sus requisitos de transporte; Plaspy acepta ambos y realiza la detección automática del protocolo.
- Mantenga un registro de las credenciales APN y reemplace los marcadores en los comandos por los valores del operador antes de enviar.
- Los comandos de ejemplo usan la contraseña de muestra queclink; cambie las contraseñas del dispositivo en producción para garantizar la seguridad.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el QuecLink GL521MG ofrece una vía directa para integrar datos de ubicación, sensores y alarmas en una sola plataforma para paneles, historial y alertas. El diseño de baja energía del GL521MG y su conjunto de sensores lo hacen adecuado para activos, cadena de frío y despliegues estáticos donde los reportes programados y las alarmas por eventos son importantes.

Para saber más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para detalles específicos del dispositivo, actualizaciones de firmware y el conjunto de comandos más reciente, verifique la información en el sitio del fabricante https://www.queclink.com/ ya que el firmware y los métodos de configuración pueden cambiar con el tiempo.
