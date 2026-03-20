---
slug: /suntech/st8310_u/configuration
id: st8310_u-configuration
sidebar_label: Configuration
title: Suntech - ST8310/U Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST8310 U con ajustes de servidor Plaspy y ejemplos de SMS para integración
keywords:
  - Configuración Suntech ST8310 U
  - Configurar ST8310 para Plaspy
  - Configuración rastreador GPS Suntech
  - Configuración servidor ST8310 U
  - Configuración dispositivo Plaspy
  - Seguimiento vehicular ST8310
  - Comandos SMS ST8310
  - Ajustes APN Suntech
  - Seguimiento de flotas Suntech Plaspy
  - Configuración de reportes ST8310 U
---

# Suntech - Configuración ST8310/U

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST8310/U con Plaspy. Reúne los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, explica cómo se deriva la identificación del equipo (device ID) a partir del IMEI para configuraciones por SMS, y muestra ejemplos de comandos SMS publicados para este modelo para que prepare el rastreador para la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice esta guía como referencia práctica e verifique cualquier diferencia específica del dispositivo con la documentación del fabricante.

## Resumen de la configuración

El proceso de configuración prepara el ST8310/U para enviar telemetría y eventos a Plaspy, de modo que el dispositivo sea visible en su panel de flota y pueda recibir comandos remotos. Para este modelo el fabricante proporciona plantillas de comandos SMS para configurar el APN, el servidor GPRS y los intervalos de reporte.

- Configure los parámetros de red del dispositivo y el servidor GPRS para que apunten a Plaspy
- Establezca los intervalos de reporte para que las actualizaciones de posición aparezcan con la frecuencia esperada en Plaspy
- Valide la conectividad y la identificación del dispositivo para que Plaspy lo reconozca
- Use los comandos SMS proporcionados o la herramienta oficial de Suntech para aplicar los ajustes
- Confirme que Plaspy recibe mensajes del dispositivo y que la detección de protocolo es exitosa

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuraciones basadas en DNS
- IP del servidor 54.85.159.138 como endpoint alternativo directo
- Puerto 8888, que Plaspy usa de forma uniforme para todos los dispositivos compatibles
- El transporte puede configurarse como UDP o TCP según el soporte del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

## Requisitos típicos antes de la configuración

- Un equipo ST8310 o ST8310U encendido y accesible con IMEI legible
- Una SIM activa con servicio de datos para conectividad GPRS o LTE y capacidad de SMS si usará configuración por SMS
- Credenciales APN del operador móvil para habilitar datos GPRS
- Acceso al método de configuración que soporte esta unidad, como SMS o la herramienta de Suntech
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para confirmar que el dispositivo reporta correctamente
- Conocimientos básicos del IMEI del dispositivo y cómo derivar el device ID para las plantillas SMS

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST8310/U envía posiciones GNSS y eventos del dispositivo al endpoint y puerto compartidos de Plaspy descritos arriba. Plaspy recibe esos mensajes, determina automáticamente el manejador de protocolo correcto y muestra el dispositivo en la plataforma para rastreo en tiempo real y monitorización de eventos.

- El rastreador debe apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- La selección de transporte puede ser UDP o TCP si el dispositivo exige una elección explícita
- Plaspy detecta el protocolo del rastreador automáticamente y comienza a procesar los datos entrantes
- Los reportes del dispositivo habilitan visibilidad de ubicación, registro de eventos y flujos telemáticos en Plaspy
- Use los comandos de intervalo de reporte para controlar la frecuencia de envío de actualizaciones a Plaspy

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial de Suntech para el ST8310/U, como comandos SMS o la herramienta del fabricante.
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o servidor GPRS.
3. Configure el puerto 8888, que es el puerto compartido utilizado por Plaspy para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según lo soporte y lo requiera su instalación.
5. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para que se apliquen los parámetros de red.
6. Valide que el dispositivo reporte a Plaspy observando los mensajes entrantes en la plataforma y confirmando que el equipo aparece en línea.
7. Ajuste intervalos de reporte, APN u otros parámetros del operador según sea necesario y vuelva a validar la conectividad.

## Ejemplos de comandos de configuración

El fabricante del ST8310/U proporciona plantillas de comandos SMS para configurar el APN del operador, el servidor GPRS y el intervalo de reporte. Estas plantillas usan un device ID derivado del IMEI. El device ID corresponde a los seis dígitos finales del IMEI excluyendo el último dígito de control del IMEI. Por ejemplo, si el IMEI aparece como 123456789012345, el device ID en estas plantillas sería 901234.

Reemplace los marcadores de posición así:
- Reemplace [device_id] con el ID de seis dígitos derivado del IMEI como se describió arriba
- Reemplace [apn] con el APN de su operador
- Reemplace [apnu] con el usuario del APN si su operador lo requiere
- Reemplace [apnp] con la contraseña del APN si su operador la requiere

1) Configure el APN del operador y el servidor GPRS para que apunten a Plaspy. Use el dominio o la IP e incluya el puerto 8888. Plantilla SMS de ejemplo:

```
SA200NTW;[device_id];02;0;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

O si su dispositivo acepta el dominio en lugar de la IP:

```
SA200NTW;[device_id];02;0;[apn];[apnu];[apnp];d.plaspy.com;8888;;;;
```

2) Establezca el intervalo de reporte a 60 segundos. Plantilla SMS de ejemplo:

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

3) Verifique la configuración actual con el comando de comprobación:

```
SA200CMD;[device_id];02;PresetA
```

Notas sobre los marcadores:
- [apn] es la cadena APN de su operador móvil
- [apnu] es el usuario del APN si se requiere; de lo contrario déjelo vacío
- [apnp] es la contraseña del APN si se requiere; de lo contrario déjelo vacío
- [device_id] debe calcularse a partir del IMEI del dispositivo según el ejemplo anterior

Si su herramienta de instalación o el firmware requieren un orden de campos distinto o usan nombres de dominio para la configuración del servidor GPRS, aplique el dominio d.plaspy.com o la IP 54.85.159.138 y siempre establezca el puerto 8888.

## Notas de configuración

- Las diferencias de firmware y de las herramientas pueden cambiar la sintaxis exacta de los SMS o los campos requeridos; utilice estas plantillas como ejemplos públicos publicados y verifique contra la revisión de firmware del dispositivo.
- El ST8310/U soporta configuración por SMS tal como se muestra en las plantillas del fabricante; algunos instaladores prefieren la utilidad de configuración Suntech o aprovisionamiento OTA si está disponible.
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red; ambos son compatibles y Plaspy detectará y procesará el tráfico entrante.
- Asegúrese de que las credenciales APN sean correctas y que la SIM tenga datos habilitados; ajustes APN incorrectos son una causa común de falta de conectividad.
- Al realizar pruebas, use el comando de verificación para leer las presets y confirmar que el servidor y el puerto están configurados con los valores de Plaspy

## Por qué usar Plaspy con esta configuración

Usar el ST8310/U con Plaspy proporciona a las flotas visibilidad en tiempo real y control operativo confiable mediante un único endpoint de servidor compartido. Apuntar el rastreador a d.plaspy.com o 54.85.159.138 en el puerto 8888 con el intervalo de reporte adecuado asegura que Plaspy reciba datos de posición y eventos y pueda aplicar flujos de trabajo de la plataforma como alarmas por geocerca, registro de eventos y acciones de control remoto.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración por dispositivo más recientes, el comportamiento del firmware y detalles del fabricante, verifique la información en el sitio oficial de Suntech en http://www.suntechint.com/ ya que las instrucciones del proveedor y las versiones de firmware pueden cambiar con el tiempo.
