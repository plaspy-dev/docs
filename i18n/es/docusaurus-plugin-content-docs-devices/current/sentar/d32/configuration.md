---
slug: /sentar/d32/configuration
id: d32-configuration
sidebar_label: Configuration
title: Sentar - D32 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del reloj GPS Sentar D32 con ajustes de servidor Plaspy y comandos SMS de ejemplo para integración
keywords:
  - Sentar D32 configuración
  - Sentar D32 instalación
  - D32 configuración Plaspy
  - D32 reloj GPS configuración
  - Sentar smartwatch Plaspy
  - D32 configuración software de rastreo
  - D32 ajustes de servidor
  - Sentar D32 configuración APN
  - configuración rastreador GPS Plaspy
  - configuración reloj GPS portátil
---

# Sentar - D32 Configuration

Esta página describe el contexto público de configuración para usar el smartwatch Sentar D32 con Plaspy. Explica el endpoint del servidor y los pasos generales para apuntar un D32 a Plaspy, de modo que el dispositivo reporte ubicación, telemetría y eventos dentro de la plataforma Plaspy. El D32 es un smartwatch GPS Android 4G compatible con Plaspy, con posicionamiento multimodo y ranura para Nano SIM; esta guía se enfoca en el flujo de configuración público y en los comandos SMS de ejemplo cuando están disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, mientras que los pasos de configuración del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El D32 puede configurarse mediante comandos SMS como se muestra en el ejemplo público más abajo, o mediante las herramientas del fabricante cuando estén disponibles. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente, por lo que los ajustes de servidor esenciales son consistentes para la integración.

## Resumen de la configuración

Este proceso prepara el D32 para comunicarse de forma confiable con Plaspy, configurando parámetros de red, el endpoint del servidor Plaspy y el comportamiento de reporte. Los comandos públicos suministrados por el fabricante normalmente se envían por SMS al dispositivo o se aplican con una herramienta de configuración del proveedor. El objetivo es que el dispositivo sea visible en Plaspy para seguimiento en vivo y notificaciones de eventos.

- Configure el APN y los ajustes GPRS del dispositivo para que tenga conectividad de datos y pueda alcanzar Plaspy.
- Apunte el servidor GPRS del dispositivo hacia Plaspy usando el endpoint y puerto compartidos para que las telemetrías sean aceptadas.
- Seleccione UDP o TCP en el dispositivo si fuera necesario, según lo que Plaspy soporte.
- Ajuste los intervalos de subida y la zona horaria para que la frecuencia de reportes y las marcas temporales coincidan con sus necesidades.
- Verifique la configuración con una consulta de estado del dispositivo y confirme que éste aparece en Plaspy.

## Ajustes del servidor Plaspy

- Use el dominio d.plaspy.com como endpoint principal del servidor para el dispositivo.
- La IP del servidor para configuración por IP directa es 54.85.159.138.
- El puerto a utilizar para todos los dispositivos es 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del tracker una vez que el dispositivo se conecta al servidor y utiliza el mismo puerto para todos los dispositivos soportados.

## Requisitos típicos antes de comenzar

- Un dispositivo D32 cargado con una Nano SIM funcional instalada y con servicio de datos activo.
- Acceso al dispositivo para la configuración por SMS o acceso a la herramienta de configuración oficial del fabricante cuando Sentar la proporcione.
- Credenciales APN del operador móvil si la SIM requiere configuración manual del APN.
- La contraseña predeterminada del dispositivo en caso de que los comandos SMS requieran autenticación (los ejemplos públicos abajo usan 123456).
- Conocimientos básicos sobre la elección de UDP o TCP y del intervalo de subida según sus necesidades de monitoreo.
- Una cuenta de usuario en Plaspy y saber cómo confirmar la presencia del dispositivo en la plataforma Plaspy.

## Cómo se conecta este tracker a Plaspy

El D32 está configurado para enviar su ubicación y eventos del dispositivo a través de la red celular al endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy ingiere los datos del tracker, posiciona el dispositivo en el mapa y muestra telemetría y alertas a través de la interfaz. La detección automática de protocolo de Plaspy elimina, en la mayoría de los casos, la necesidad de seleccionar manualmente un mapeo de protocolo.

- El dispositivo envía datos GNSS y de localización asistida a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los mensajes de telemetría y eventos se suben con el intervalo configurado para que Plaspy muestre posiciones casi en tiempo real.
- Alertas como pulsaciones de SOS se reenvían a Plaspy y pueden integrarse en flujos de gestión de incidentes.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando este se conecta al puerto compartido y comienza a parsear los mensajes.
- El transporte de conexión puede ser UDP o TCP, según la configuración del dispositivo y las condiciones de la red.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Sentar, ya sea la app móvil del proveedor, la herramienta web o la interfaz de comandos SMS documentada por Sentar.
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP directa 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Configure los valores APN para el operador del dispositivo usando los marcadores de posición de APN si es necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del proveedor lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo en Plaspy o usando el comando de verificación que se muestra a continuación.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS de ejemplo se extraen del contenido público de configuración del Sentar D32. Se proporcionan solo como referencia y reflejan el conjunto de comandos publicados públicamente. La configuración de muestra usa la contraseña predeterminada 123456 cuando se requiere. Nota sobre etiquetas: el comando de restauración de fábrica es opcional y debe usarse solo cuando sea necesario durante la provisión inicial o resolución de problemas.

1. Restauración de fábrica (opcional durante la configuración inicial)
```text
pw,123456,factory#
```

2. Establecer la zona horaria a UTC+0
```text
pw,123456,lz,0,0#
```

3. Consultar MCC y MNC (identificadores del operador)
```text
pw,123456,imsi#
```

4. Configurar el APN del operador donde xxx es MCC y yy es MNC
Nota: estos marcadores de posición deben reemplazarse por los valores del operador de la SIM. Mantenga los marcadores de APN tal como aparecen.
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
- [apn] = nombre APN del operador
- [apnu] = usuario APN si se requiere
- [apnp] = contraseña APN si se requiere
- xxxyy = dígitos combinados de MCC y MNC cuando el dispositivo requiere este formato

5. Establecer el servidor GPRS para apuntar a Plaspy (ejemplo con IP directa)
```text
pw,123456,ip,54.85.159.138,8888#
```
Alternativamente puede usar el dominio:
```text
pw,123456,ip,d.plaspy.com,8888#
```

6. Establecer intervalo de subida a 300 segundos
```text
pw,123456,upload,300#
```

7. Consultar la configuración actual en el dispositivo
```text
pw,123456,ts#
```

Si su dispositivo utiliza una sintaxis SMS diferente o cuenta con una herramienta de configuración de Sentar, siga ese método y aplique los mismos valores de dominio o IP y puerto mostrados aquí. Reemplace los marcadores como [apn], [apnu] y [apnp] con los datos de su operador.

## Notas de configuración

- La sintaxis SMS y el orden de parámetros del fabricante pueden variar según la versión de firmware; siempre verifique el formato exacto de los comandos en la documentación de Sentar para su versión de firmware.
- Use la configuración por SMS únicamente cuando esté soportada y sea práctica para su despliegue; las herramientas del proveedor pueden ofrecer aprovisionamiento masivo o una interfaz gráfica que evite enviar comandos SMS manualmente.
- Cuando el dispositivo solicite la selección de transporte, elija UDP o TCP según la fiabilidad de la red y las recomendaciones de Sentar; Plaspy acepta ambos en el puerto 8888.
- Confirme las credenciales APN con el operador móvil antes de ingresarlas; valores APN incorrectos impedirán que el dispositivo alcance d.plaspy.com.
- La contraseña por defecto 123456 aparece en ejemplos públicos; cambie las contraseñas del dispositivo cuando sea posible para cumplir con sus políticas de seguridad después del aprovisionamiento inicial.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D32 para que reporte a Plaspy proporciona a las organizaciones un seguimiento confiable desde la muñeca y reporte de eventos que se integra en una plataforma amplia de conciencia situacional. El endpoint y puerto compartidos de Plaspy simplifican el onboarding de dispositivos porque los mismos ajustes del servidor se usan de forma consistente, y Plaspy detecta automáticamente el protocolo del tracker para parsear mensajes y mostrar la telemetría.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique la guía de configuración más reciente en el sitio del fabricante en http://www.sentarsmart.com/ antes de realizar despliegues a gran escala.
