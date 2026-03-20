---
slug: /sentar/d50/configuration
id: d50-configuration
sidebar_label: Configuration
title: Sentar - D50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del reloj GPS Sentar D50 para Plaspy con ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - configuración Sentar D50
  - instalación Sentar D50
  - Sentar D50 Plaspy
  - configuración reloj GPS Sentar D50
  - configuración servidor Sentar D50
  - configuración SMS Sentar D50
  - ajustes APN Sentar D50
  - configuración rastreador Plaspy
  - instalación dispositivo Plaspy
  - guía configuración rastreador GPS
---

# Sentar - Configuración D50

Esta página describe el contexto público de configuración para usar el reloj inteligente 4G para niños Sentar D50 con Plaspy. Explica los ajustes compartidos del servidor Plaspy a los que debe apuntar el D50, detalla los comandos SMS publicados por el fabricante y describe los pasos prácticos para dejar el dispositivo listo para que reporte ubicación y eventos a Plaspy. Use esta guía para saber qué valores debe configurar en el reloj y cómo Plaspy recibe la información.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al recibir datos. El D50 puede enviarlos por UDP o TCP al puerto 8888. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siempre contraste con la documentación de Sentar y con los comandos del dispositivo incluidos más abajo.

## Resumen de la configuración

El proceso de configuración prepara el D50 para comunicarse con la plataforma Plaspy, valida la conectividad de datos móviles y permite que el dispositivo aparezca en su cuenta Plaspy. Los comandos públicos del fabricante que se muestran aquí son ejemplos basados en la documentación pública del D50 e incluyen ajustes de APN y servidor, además de un comando de verificación.

- Apunte el dispositivo a Plaspy usando el dominio o la IP pública y el puerto común de Plaspy.
- Configure el APN del reloj, los parámetros del operador y el servidor GPRS para que el dato móvil pueda subir la telemetría.
- Opcionalmente realice un restablecimiento de fábrica o ajuste de zona horaria como parte del aprovisionamiento inicial.
- Establezca el intervalo de subida para que el dispositivo envíe actualizaciones periódicas de posición a Plaspy.
- Verifique la configuración con el comando de estado del dispositivo antes del despliegue final.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos son los valores públicos del endpoint Plaspy que debe usar al configurar el D50. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y tratará de detectar el protocolo del rastreador automáticamente cuando lleguen datos a ese puerto.

## Requisitos típicos antes de configurar

- Un dispositivo D50 cargado con una nano SIM activa que soporte datos móviles
- Credenciales APN del operador (nombre de APN, usuario, contraseña) y conocimiento de MCC/MNC si se requiere
- Capacidad para enviar comandos SMS al dispositivo cuando el fabricante provee aprovisionamiento por SMS
- Acceso a la documentación del fabricante Sentar o a la herramienta de configuración del proveedor como referencia
- Una ventana corta para validar que el dispositivo está reportando a Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El D50 está configurado para reportar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar posiciones y alertas en casi tiempo real. El comportamiento típico del dispositivo integrado con Plaspy sigue patrones estándar de reporte y subida de eventos.

- El dispositivo sube actualizaciones periódicas de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Las alertas SOS y otros eventos se envían como subidas inmediatas al mismo endpoint de Plaspy
- La telemetría como batería y estado en línea se transmite a Plaspy para monitoreo
- Los mapas, líneas de tiempo y notificaciones de Plaspy reflejan los reportes periódicos y los impulsados por eventos
- La detección automática de protocolo de Plaspy elimina la necesidad de definir mapeos de protocolo en la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Sentar para el D50 (comandos SMS o herramienta del proveedor) según la documentación del fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el ajuste de servidor / GPRS server.
3. Configure el puerto 8888 para el servidor de subida del dispositivo.
4. Seleccione UDP o TCP como opción de transporte si el rastreador exige una selección explícita.
5. Configure el APN y los parámetros del operador usando los datos de su SIM, incluyendo MCC/MNC si el dispositivo los requiere.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante lo recomienda.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos en la plataforma o usando un comando de verificación del dispositivo.

Si utiliza aprovisionamiento por SMS, siga el orden de comandos que se indica a continuación para evitar una mala configuración.

## Comandos de configuración de ejemplo

El fabricante proporciona comandos SMS para el D50. A continuación figuran los comandos tomados del contenido público de configuración. Los comandos se muestran en el mismo orden en que fueron publicados. El etiquetado y los parámetros se mantienen tal como se publicaron; las variables se explican después de la lista.

- Restablecimiento de fábrica opcional (usar solo cuando sea necesario)
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC+0
```text
pw,123456,lz,0,0#
```

- Comprobar MCC y MNC (información IMSI)
```text
pw,123456,imsi#
```

- Establecer APN del operador donde {{apn}} es el nombre del APN, {{apnu}} es el usuario del APN, {{apnp}} es la contraseña del APN, y xxxyy es MCC+MNC si se requiere
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
pw,123456.ip,54.85.159.138,8888#
```

- Ajustar el intervalo de subida a 300 segundos
```text
pw123456,upload,300#
```

- Verificar ajustes (estado del dispositivo)
```text
pw,123456,ts#
```

Notas sobre marcadores y formato:
- {{apn}}, {{apnu}} y {{apnp}} son marcadores para el nombre del APN de su operador, el usuario del APN y la contraseña del APN. Reemplácelos por los valores de su operador al enviar los comandos.
- La contraseña de ejemplo mostrada arriba es 123456 según el contenido público. Use la contraseña actual del dispositivo si ha sido cambiada.
- Los comandos se presentan tal como fueron publicados. La sintaxis y los separadores pueden variar según la versión de firmware. Confirme la sintaxis exacta con la documentación de Sentar si algún comando no es aceptado.

## Notas de configuración

- El aprovisionamiento por SMS es un método común para el D50; asegúrese de poder enviar SMS desde un número que el dispositivo acepte.
- Las actualizaciones de firmware o distintas revisiones de hardware pueden modificar la sintaxis exacta de los comandos o los parámetros requeridos; verifique con el fabricante para su revisión de dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; ambos transportes son compatibles en el puerto 8888, pero el comportamiento puede variar según las condiciones de red.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que no cambie el puerto a menos que el soporte de Plaspy se lo indique explícitamente.
- Mantenga siempre un registro de cualquier contraseña o cambio de configuración que realice durante el aprovisionamiento.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Sentar D50 ofrece visibilidad centralizada y manejo sencillo de eventos para dispositivos wearables. Apuntar el D50 al endpoint y puerto compartidos de Plaspy permite a cuidadores y administradores recibir actualizaciones de ubicación, alertas SOS y telemetría del dispositivo en una sola plataforma, mejorando la conciencia situacional y los tiempos de respuesta.

Para saber más sobre Plaspy y las opciones de integración de dispositivos compatibles visite https://www.plaspy.com. Para métodos de configuración más recientes, notas de firmware y orientación del fabricante, verifique la información actual en el sitio de Sentar en http://www.sentarsmart.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
