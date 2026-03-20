---
slug: /suntech/st_340lc/configuration
id: st_340lc-configuration
sidebar_label: Configuration
title: Suntech - ST 340LC Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST 340LC para que el dispositivo reporte a Plaspy, con ejemplos de servidor y comandos SMS
keywords:
  - Configuración Suntech ST 340LC
  - Configuración ST 340LC
  - Configuración rastreador GPS Suntech
  - Configuración de dispositivo Plaspy
  - Configuración de servidor ST 340LC
  - Guía de configuración rastreador GPS
  - Configuración de rastreo de vehículos
  - Configuración rastreador para motocicleta
  - Configuración GPRS del rastreador
  - Comandos SMS ST 340LC
---

# Suntech - Configuración del ST 340LC

Esta página reúne la información pública para configurar el rastreador Suntech ST 340LC con Plaspy. Incluye los ajustes del servidor que deberá usar en Plaspy y los comandos y pasos públicos que normalmente se emplean para apuntar el equipo a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando hay comandos proporcionados por el fabricante, se incluyen aquí; siempre verifique con la documentación del equipo o las herramientas del instalador para comportamientos específicos del firmware.

## Resumen de la configuración

El objetivo es preparar el ST 340LC para que se comunique de forma confiable con la plataforma Plaspy y para que la ubicación y el estado del dispositivo sean visibles en Plaspy. Para este modelo la configuración pública disponible utiliza comandos SMS para programar el ID del dispositivo, el APN y los ajustes de servidor GPRS, así como el intervalo de reporte.

- Configure el rastreador para que reporte al endpoint y puerto del servidor de Plaspy para que los datos lleguen a la plataforma.
- Programe el APN y la información del servidor GPRS para que el dispositivo pueda establecer conectividad móvil.
- Establezca un intervalo de reporte acorde con sus necesidades operativas para controlar la frecuencia de actualizaciones y el impacto en la batería.
- Opcionalmente realice un reinicio a valores de fábrica o un comando de verificación para asegurar que los ajustes se aplicaron.
- Valide en Plaspy que el dispositivo aparece en línea y está reportando ubicaciones y eventos.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Un equipo ST 340LC cargado e instalado y accesible para programación por SMS o mediante la herramienta del fabricante
- Una tarjeta SIM activa provisionada para datos móviles y con el APN correcto del operador
- Capacidad para enviar SMS al dispositivo si opta por la configuración vía SMS
- El IMEI del dispositivo para poder derivar el ID de dispositivo de nueve dígitos que requieren los comandos
- Acceso a la guía de configuración oficial de Suntech o a la herramienta de instalador para confirmar la sintaxis específica del firmware

## Cómo se conecta este rastreador a Plaspy

El ST 340LC se configura para enviar su ubicación y datos operativos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes entrantes del dispositivo y los asocia con el registro del dispositivo para que usted pueda monitorear ubicación y estado en la plataforma.

- El dispositivo envía datos a d.plaspy.com o a 54.85.159.138 usando el puerto 8888
- Puede elegir UDP o TCP como transporte si el dispositivo requiere selección explícita
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes en consecuencia
- Intervalos de reporte regulares garantizan que el dispositivo aparezca en la plataforma Plaspy para visibilidad en tiempo real
- Se pueden enviar comandos de verificación para confirmar la configuración del dispositivo antes de comprobar la visibilidad en Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Suntech, al software del fabricante o utilice los comandos SMS según la documentación de Suntech.
2. Ingrese la dirección del servidor Plaspy ya sea como el nombre de dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes GPRS/servidor.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP si el dispositivo requiere una selección explícita de transporte.
5. Introduzca el APN y, si es necesario, los campos de usuario y contraseña APN con los marcadores [apn], [apnu], [apnp].
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren.
7. Valide que el dispositivo reporta a Plaspy revisando el estado en línea y las actualizaciones de posición recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La información pública de configuración del ST 340LC incluye la sintaxis de comandos SMS comúnmente usada para programar el equipo. El dispositivo espera un valor de ID calculado a partir del IMEI. El ID es la secuencia de nueve dígitos obtenida tomando el IMEI, excluyendo el último dígito del IMEI, y usando los últimos nueve dígitos de la secuencia restante.

Ejemplo de extracción del ID del dispositivo
- Si el IMEI aparece como 12345 678901234 5 entonces el ID del dispositivo es 678901234.

Use los siguientes comandos por SMS al número del dispositivo. Reemplace DEVICE_ID con el ID de nueve dígitos descrito arriba. Conserve los marcadores [apn], [apnu] y [apnp] cuando sustituya sus valores del operador.

1) Restablecer a configuración de fábrica (paso inicial opcional)
- Este comando se usa comúnmente para restablecer la configuración antes de provisionar. Úselo sólo si es necesario.
```
ST300CMD;DEVICE_ID;02;Reset
```

2) Configurar APN del operador y servidor GPRS
- El campo siguiente a DEVICE_ID contiene un indicador que señala si se proporcionan usuario o contraseña del APN (establezca 1 si suministra [apnu] o [apnp], de lo contrario establezca 0). Los campos del servidor incluyen la IP y el puerto de Plaspy 54.85.159.138 y 8888.
```
ST300NTW;DEVICE_ID;02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Si no proporciona usuario o contraseña APN, cambie la bandera a 0:
```
ST300NTW;DEVICE_ID;02;0;[apn];;;;54.85.159.138;8888;;;;
```
- Nota: mantenga los marcadores [apn], [apnu] y [apnp] y sustituya sus valores del operador. La bandera 1 o 0 indica si se usan los campos de usuario o contraseña.

3) Establecer intervalo de reporte a 60 segundos
- Este comando programa intervalos de reporte periódicos usados por el dispositivo.
```
ST300RPT;DEVICE_ID;02;60;60;60;3;0;0;0;0;0
```

4) Verificar ajustes (lectura)
- Use este comando para solicitar que el dispositivo reporte sus ajustes preestablecidos configurados.
```
ST300CMD;DEVICE_ID;02;PresetA
```

Siga el orden de comandos anterior cuando corresponda: reset (opcional), configuración de red/servidor, intervalo de reporte y luego verificación.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar parámetros y sintaxis de los comandos; confirme siempre los comandos contra la documentación de Suntech para su unidad.
- El dispositivo soporta configuración por SMS en los ejemplos anteriores; según el proveedor, también pueden estar disponibles herramientas de instalador o métodos de configuración por USB/serie proporcionados por Suntech.
- Elija UDP o TCP según la preferencia del instalador y el soporte del firmware del equipo; Plaspy admite ambos transportes y detectará el protocolo automáticamente.
- Mantenga las credenciales APN seguras y verifique los valores correctos del APN con el operador móvil antes de programar el equipo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y acepta conexiones usando el dominio d.plaspy.com o la IP 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Configurar el ST 340LC para que reporte a Plaspy ofrece a las organizaciones una vía sencilla para rastrear vehículos y activos con un dispositivo de bajo consumo y costo efectivo. Enviar datos al endpoint y puerto compartidos de Plaspy asegura una entrega consistente de ubicaciones y eventos, y permite que Plaspy detecte y analice automáticamente el protocolo del rastreador.

Para saber más sobre Plaspy y cómo la plataforma maneja la conectividad de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. Para detalles específicos más recientes sobre la configuración del dispositivo, notas de firmware y comandos del fabricante, confirme la información con Suntech en http://www.suntechint.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
