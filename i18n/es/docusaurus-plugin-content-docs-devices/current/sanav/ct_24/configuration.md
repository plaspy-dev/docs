---
slug: /sanav/ct_24/configuration
id: ct_24-configuration
sidebar_label: Configuration
title: Sanav - CT-24 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Sanav CT-24 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Sanav CT-24
  - Configuración CT-24
  - Sanav CT-24 Plaspy
  - Configuración GPS CT-24
  - Configuración rastreador Sanav
  - Configuración servidor CT-24
  - Configuración SMS CT-24
  - Rastreo vehicular CT-24
  - Configuración rastreador Plaspy
  - Rastreador GPS CT-24
---

# Sanav - Configuración CT-24

Esta página documenta el contexto público de configuración para usar el rastreador Sanav CT-24 con Plaspy. Reúne los ajustes de servidor prácticos, ejemplos de comandos SMS y la guía de flujo de trabajo necesaria para apuntar un CT-24 a Plaspy, de modo que el dispositivo transmita ubicación y datos básicos a la plataforma. La orientación que se muestra abajo se basa en la descripción del CT-24 y en los comandos de configuración por SMS disponibles públicamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que facilita la integración. Los pasos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor; use esta página como referencia práctica y consulte la documentación oficial de Sanav para detalles específicos del dispositivo.

## Resumen de la configuración

El CT-24 se puede preparar para comunicarse con Plaspy usando los métodos de configuración que Sanav admite. El objetivo es asegurar que el rastreador tenga la configuración de datos móviles correcta, el endpoint del servidor Plaspy y un perfil de reporte adecuado para que el dispositivo aparezca y reporte de forma fiable en la plataforma.

- Configure el APN del operador móvil para que el CT-24 pueda establecer una sesión de datos GPRS.
- Apunte el servidor GPRS del dispositivo a Plaspy usando el endpoint compartido del servidor.
- Seleccione el transporte (UDP o TCP) en el puerto 8888 para que los datos lleguen a Plaspy.
- Establezca intervalos de reporte y enrutamiento para que el rastreador envíe actualizaciones periódicas a Plaspy.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de la configuración.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el CT-24. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un CT-24 con batería cargada y acceso al método de configuración por SMS o a la herramienta del fabricante.
- Una tarjeta SIM activa con datos móviles habilitados y la información APN correcta para el operador.
- Conocimiento de la contraseña del dispositivo o credenciales de acceso usadas por el CT-24 (el ejemplo público usa la contraseña por defecto 0000).
- Capacidad para enviar comandos SMS al dispositivo si usa configuración por SMS y para recibir las respuestas de confirmación por SMS.
- Acceso a la documentación oficial de Sanav o a sus recursos de soporte para confirmar el formato de los comandos y el comportamiento según firmware.

## Cómo se conecta este rastreador a Plaspy

El CT-24 se configura para reportar ubicación y datos al dirigir su ruta de datos GPRS al endpoint y puerto del servidor Plaspy. Una vez que el rastreador tenga conectividad móvil y los ajustes del servidor, Plaspy aceptará las conexiones entrantes y detectará automáticamente el protocolo del dispositivo para que los datos puedan procesarse y mostrarse en la plataforma.

- El rastreador envía ubicación y actualizaciones periódicas al endpoint compartido de Plaspy.
- Los datos se envían por UDP o TCP según la configuración, en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del CT-24 y asigna los mensajes entrantes al parser adecuado.
- Las actualizaciones de estado y los eventos del dispositivo se muestran en la plataforma Plaspy una vez que comienza el envío de reportes.
- Intervalos regulares de latido o posición permiten el monitoreo operativo y la generación de alertas dentro de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Sanav para el CT-24, normalmente comandos SMS o la herramienta del fabricante, y confirme el formato de comandos para su versión de firmware.
2. Configure el APN móvil para la SIM instalada usando los valores proporcionados por su operador.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 y configure el puerto en 8888.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección de transporte para datos GPRS.
5. Aplique o guarde la configuración en el dispositivo enviando el comando apropiado o usando la herramienta del fabricante.
6. Reinicie el CT-24 si el dispositivo o el firmware lo requieren para aplicar los cambios de red o servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos en la plataforma y confirmando las actualizaciones de ubicación.

## Comandos de configuración de ejemplo

El CT-24 admite configuración por SMS. Los siguientes comandos de ejemplo provienen de la guía pública de configuración del dispositivo. Reemplace los marcadores y el nombre de usuario según lo requiera su dispositivo y firmware. La contraseña de dispositivo en el ejemplo es 0000, que es la que aparece en los ejemplos públicos.

- Restablecimiento de fábrica (opcional o para configuración inicial)
  
```
#username,0000,9*
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador:
  - [apn] es el nombre del APN
  - [apnu] es el usuario del APN si lo requiere
  - [apnp] es la contraseña del APN si lo requiere

```
#username,0000,3,[apn],[apnu],[apnp]*
```

- Establecer el servidor GPRS a Plaspy usando la IP pública del servidor y el puerto

```
#username,0000,18,54.85.159.138:8888*
```

- Definir la ruta para la transmisión de datos (comando de ruta de ejemplo de la guía pública)

```
#username,0000,14,9*
```

- Establecer el intervalo de actualización a 60 segundos (comando de intervalo de reporte de ejemplo)

```
#username,0000,6,60,9999*
```

Notas sobre los comandos
- Mantenga el orden de los comandos si el fabricante recomienda una secuencia específica.
- Reemplace #username con el nombre de usuario del dispositivo o el prefijo de comando requerido por su firmware CT-24 si aplica.
- Conserve los marcadores [apn], [apnu] y [apnp] y sustituya por los valores proporcionados por su operador.
- La entrada del servidor GPRS apunta el rastreador a Plaspy usando la IP y puerto 54.85.159.138:8888 que corresponde a d.plaspy.com.

## Observaciones de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar el formato exacto de los comandos SMS o los parámetros disponibles. Verifique la documentación de Sanav para el firmware de su dispositivo.
- La configuración por SMS está soportada por los comandos públicos mostrados más arriba, pero en algunas instalaciones se prefiere la herramienta del fabricante o un servicio de aprovisionamiento.
- Elija UDP o TCP según el rendimiento del operador y el comportamiento del dispositivo; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los rastreadores soportados y detectará automáticamente el protocolo usado por el CT-24.
- Confirme siempre las credenciales del APN y la asignación de datos de la SIM antes de aplicar los ajustes del servidor GPRS para evitar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Apuntar un Sanav CT-24 a Plaspy ofrece una forma práctica de centralizar el reporte de ubicación, el estado del dispositivo y la visibilidad de eventos básicos para flotas, activos o rastreo personal. Usar un único endpoint y puerto compartidos simplifica implementaciones grandes y ayuda a reducir la carga de configuración por dispositivo, mientras que la plataforma identifica y parsea automáticamente el protocolo del CT-24.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Sanav CT-24 visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y detalles de configuración consulte el sitio del fabricante Sanav en http://es.sanav.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
