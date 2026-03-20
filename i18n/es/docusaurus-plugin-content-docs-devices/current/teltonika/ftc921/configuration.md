---
slug: /teltonika/ftc921/configuration
id: ftc921-configuration
sidebar_label: Configuration
title: Teltonika - FTC921 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Teltonika FTC921 para usar con Plaspy, incluyendo ajustes de servidor, comandos de ejemplo y guía de verificación
keywords:
  - Configuración Teltonika FTC921
  - Instalación Teltonika FTC921
  - Configuración de servidor FTC921
  - Integración FTC921 con Plaspy
  - Configuración de dispositivo Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración de seguimiento de flotas
  - Configuración de rastreador para e movilidad
  - Rastreador de vehículo Teltonika
  - Comandos de configuración Teltonika
---

# Teltonika - Configuración del FTC921

Esta página describe el contexto público de configuración para usar el Teltonika FTC921 con Plaspy. Reúne los ajustes de servidor prácticos y comandos de ejemplo que puede usar para apuntar un dispositivo FTC921 a Plaspy y permitir el seguimiento en tiempo real y la ingestión de telemetría. El contenido está pensado para integradores de flota y técnicos que preparan dispositivos para compatibilidad con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika o el flujo de comandos SMS que elija. Confirme siempre el significado de parámetros específicos del dispositivo con la documentación de Teltonika cuando sea necesario.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar un FTC921 para que se comunique de forma fiable con Plaspy y aparezca en la vista de su flota. Esto incluye establecer el APN y los parámetros de servidor del dispositivo, seleccionar el transporte cuando sea necesario y validar la conectividad para que el rastreador informe posición y telemetría a Plaspy.

- Configure el APN y las credenciales de red del dispositivo para que el FTC921 tenga conectividad celular.
- Apunte los ajustes de servidor del dispositivo a Plaspy para que las sesiones TCP o UDP lleguen a la plataforma.
- Seleccione UDP o TCP en el puerto 8888 si el dispositivo exige una selección explícita del transporte.
- Guarde o aplique la configuración y reinicie el dispositivo cuando sea necesario para comenzar a reportar.
- Verifique que el rastreador sea visible en Plaspy y que la ubicación y la telemetría lleguen correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo automáticamente, por lo que estos valores son consistentes en las integraciones con Plaspy.

## Requisitos típicos antes de la configuración

- Energía del dispositivo e instalación física completadas para que el rastreador pueda arrancar y registrarse en la red celular.
- Tarjeta SIM activada y ajustes APN correctos para la red móvil que vaya a utilizar.
- Acceso a los métodos de configuración Teltonika compatibles con el FTC921, como comandos SMS, FOTA WEB o las herramientas remotas TCT.
- Los detalles del servidor público de Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles al ingresar los ajustes de servidor.
- Plan para elegir UDP o TCP si su flujo de trabajo o herramienta Teltonika requiere una selección explícita de transporte.
- Capacidad para reiniciar el dispositivo después de aplicar la configuración para asegurar que los ajustes se apliquen.

## Cómo se conecta este rastreador a Plaspy

El FTC921 se configura para enviar ubicación y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir y mostrar la actividad del dispositivo para su flota. Una vez configurado, el rastreador abrirá una sesión con Plaspy y enviará actualizaciones y eventos periódicos según sus reglas internas de reporte.

- El dispositivo envía coordenadas GNSS y telemetría al servidor Plaspy en d.plaspy.com en el puerto 8888.
- El transporte puede usar UDP o TCP según cómo se configure el dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando se establece la conexión, por lo que se usa el mismo puerto para todos los dispositivos soportados.
- El reporte habilita visibilidad de ubicación en tiempo real, alertas de eventos y seguimiento histórico en Plaspy.
- La verificación consiste en confirmar que el dispositivo está enviando paquetes a d.plaspy.com o 54.85.159.138 y que los datos aparecen en Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Teltonika para el FTC921, como comandos SMS, TCT o FOTA WEB.
2. Ingrese el servidor Plaspy como d.plaspy.com o, cuando corresponda, utilice la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888.
4. Elija el transporte UDP o TCP si el dispositivo requiere que seleccione explícitamente uno.
5. Configure el APN y las credenciales de red necesarias para la SIM del dispositivo.
6. Aplique o guarde la configuración en la herramienta Teltonika o envíe el comando SMS al dispositivo.
7. Reinicie el dispositivo si el método de configuración o el firmware requieren un reinicio para aplicar los cambios.
8. Valide que el FTC921 informe a Plaspy verificando la conectividad y la actividad del dispositivo en la plataforma Plaspy.

Si utiliza el enfoque por SMS, asegúrese de enviar comandos desde un número de teléfono que el dispositivo acepte para configuración remota.

## Ejemplo de comandos de configuración

El ejemplo público de configuración Teltonika que se muestra a continuación utiliza un solo comando que establece parámetros APN y el servidor Plaspy. Esto suele aparecer como un comando de configuración en estilo SMS para dispositivos Teltonika.

- Para establecer APN, usuario APN, contraseña APN, dominio del servidor y puerto con el comando setparam de Teltonika:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Notas sobre los marcadores
  - [apn] = la cadena APN de su operador móvil
  - [apnu] = usuario APN si el operador lo requiere
  - [apnp] = contraseña APN si el operador lo requiere

Este comando configura el dispositivo para usar d.plaspy.com y el puerto 8888. Los IDs numéricos de los parámetros corresponden a parámetros de dispositivos Teltonika; consulte la documentación de Teltonika para el mapeo completo de parámetros y el significado de otros IDs como 2006. Si prefiere usar la IP del servidor Plaspy en lugar del dominio en otras herramientas de configuración, puede sustituir 54.85.159.138 cuando la interfaz del dispositivo permita ingresar una dirección IP.

## Notas de configuración

- Los IDs de parámetros Teltonika y los formatos de comando pueden variar según la versión de firmware y la familia de dispositivos; confirme siempre el mapeo de parámetros para el firmware del FTC921 antes de enviar comandos.
- El FTC921 soporta las herramientas de gestión remota de Teltonika (FOTA WEB y TCT) además de la configuración por SMS; elija el método que se ajuste a la escala de su despliegue y a sus necesidades de seguridad.
- Seleccione TCP o UDP según la fiabilidad de la red y el comportamiento del operador; UDP puede ser más ligero, pero TCP ofrece fiabilidad de sesión en algunas redes.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente, asegúrese de apuntar el dispositivo a d.plaspy.com o a la IP del servidor Plaspy y de que el puerto 8888 esté abierto en cualquier cortafuegos intermedio.
- Si usa configuración por SMS, confirme que el dispositivo acepte comandos SMS desde el número remitente y que la configuración por SMS esté habilitada en los ajustes de seguridad del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el FTC921 con Plaspy ofrece a las organizaciones visibilidad consolidada de la ubicación del vehículo, estado de energía y salud del dispositivo para flotas enfocadas en e‑movilidad y protección antirrobo. Con el endpoint compartido de Plaspy y la detección automática de protocolo, integrar dispositivos FTC921 es sencillo una vez aplicados el APN y los ajustes de servidor.

Learn more about Plaspy and how it supports fleet tracking and device telemetry at https://www.plaspy.com. For the latest device parameter definitions, firmware behavior, and manufacturer configuration guidance, verify details with Teltonika on their official site https://www.teltonika-gps.com/ as device setup methods and firmware behavior may change over time.
