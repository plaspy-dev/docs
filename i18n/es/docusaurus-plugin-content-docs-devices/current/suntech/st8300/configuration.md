---
slug: /suntech/st8300/configuration
id: st8300-configuration
sidebar_label: Configuration
title: Suntech - ST8300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Suntech ST8300 y compatibilidad con Plaspy con pasos prácticos
keywords:
  - configuración Suntech ST8300
  - instalación Suntech ST8300
  - Suntech ST8300 Plaspy
  - configuración servidor ST8300
  - configuración SMS ST8300
  - configuración rastreador GPS Suntech
  - ajustes APN ST8300
  - rastreo de flotas ST8300
  - configuración plataforma Suntech
  - guía configuración ST8300
---

# Suntech - Configuración del ST8300

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST8300 Series con Plaspy. Reúne los ajustes de servidor prácticos, ejemplos de comandos SMS y la guía de flujo de trabajo necesaria para preparar el dispositivo y que reporte al endpoint de Plaspy. Utilice esta guía para saber cómo apuntar un ST8300 al endpoint de Plaspy y validar la conectividad antes de incorporar el dispositivo al monitoreo de flota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST8300 permite la configuración vía SMS como una opción pública; si el fabricante provee software o provisión OTA, siga esas herramientas para despliegues masivos y mantenimiento de firmware.

## Panorama de la configuración

El proceso de configuración prepara el ST8300 para comunicarse de forma confiable con Plaspy y garantiza que el dispositivo envíe datos de ubicación y eventos al endpoint de la plataforma. Los comandos SMS disponibles públicamente permiten establecer el APN, la dirección y puerto del servidor y los intervalos de reporte; son habituales durante la instalación inicial o la resolución de problemas.

- Configure el APN del dispositivo y la autenticación para que tenga acceso a datos móviles.
- Apunte el dispositivo al dominio o IP del servidor de Plaspy y al puerto compartido de Plaspy.
- Seleccione el transporte (UDP o TCP) si el firmware del dispositivo lo requiere.
- Ajuste los intervalos de reporte según la visibilidad deseada y el plan de datos.
- Valide que el dispositivo sea visible en Plaspy y que se reciban mensajes de ubicación y eventos.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos son los valores públicos del endpoint de Plaspy que debe usar al configurar cualquier dispositivo compatible, incluido el ST8300 Series.

## Requisitos típicos antes de la configuración

- Un dispositivo ST8300 encendido y funcionando con acceso a su número SMS o a la herramienta de configuración del fabricante.
- Una SIM celular activa con datos habilitados y los valores APN correctos para el operador.
- El IMEI del dispositivo disponible para poder calcular el identificador del dispositivo usado en comandos SMS.
- Acceso a la documentación del fabricante o a la interfaz de configuración para su revisión de firmware específica.
- Cobertura celular en la zona para LTE Cat.1 o fallback 2G según la variante del dispositivo.
- Acceso administrativo a Plaspy para confirmar la aparición del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST8300 se configura para reportar posiciones GNSS y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy ingiere la telemetría entrante y detecta automáticamente el protocolo usado por el rastreador, por lo que no es necesario seleccionar un protocolo por dispositivo en la plataforma.

- El dispositivo envía actualizaciones de ubicación periódicas a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del dispositivo o la selección del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes.
- Los reportes incluyen mensajes de ubicación y eventos del dispositivo que Plaspy muestra en tiempo real.
- Una configuración exitosa permite visibilidad para monitoreo en vivo e informes históricos en Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Suntech para su dispositivo y firmware, como comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese la dirección del servidor de Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo solicite un endpoint de servidor.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte en su interfaz de configuración.
5. Configure el APN y cualquier autenticación necesaria y guarde o aplique los ajustes en el dispositivo.
6. Reinicie el dispositivo si el fabricante lo recomienda o si el dispositivo necesita un reboot para aplicar los cambios de red/servidor.
7. Valide que el dispositivo reporte a Plaspy revisando la interfaz de Plaspy por el ID del dispositivo y los mensajes recientes.

Si utiliza configuración basada en SMS, incluya el paso de envío de comandos SMS en el flujo de trabajo y confirme la entrega y aceptación de cada comando antes de avanzar a la validación.

## Comandos de configuración de ejemplo

La configuración pública del ST8300 admite comandos SMS. El ID del dispositivo usado en estos comandos son los últimos 6 dígitos del IMEI excluyendo el dígito de control final. Por ejemplo, si el IMEI es 123456789012345 donde el último dígito es el dígito de control, el device ID sería 901234 según el ejemplo del fabricante. Calcule device_id quitando el último dígito del IMEI y tomando los seis dígitos finales de la secuencia restante.

Importantes marcadores
- {{device_id}} = últimos 6 dígitos del IMEI excluyendo el dígito final del IMEI (calcule según el ejemplo arriba).
- [apn] = el APN de su operador celular.
- [apnu] = nombre de usuario del APN si el operador lo requiere; dejar vacío si no es necesario.
- [apnp] = contraseña del APN si el operador la requiere; dejar vacío si no es necesaria.

1) Establecer el APN del operador y el servidor GPRS
- Use la bandera de autenticación 1 si incluye [apnu] o [apnp]; de lo contrario use 0.

```
SA200NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

O si no hay usuario/contraseña APN:

```
SA200NTW;{{device_id}};02;0;[apn];;;54.85.159.138;8888;;;;
```

2) Establecer el intervalo de actualización a 60 segundos
- Este comando define los intervalos de reporte y parámetros de tiempo comunes.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Verificar configuraciones actuales (comando de verificación)

```
SA200CMD;{{device_id}};02;PresetA
```

Notas sobre el envío de comandos
- Envíe estas líneas como mensajes SMS al número telefónico del dispositivo asociado con la SIM del tracker.
- Reemplace los marcadores por el device_id real y los valores APN para su despliegue.
- El orden es importante: primero configure APN/servidor, luego los intervalos de reporte y finalmente verifique los ajustes.

## Observaciones de configuración

- Las diferencias de firmware y variantes de hardware (por ejemplo ST8300, ST8300R, ST8300RE, ST8300RP) pueden afectar los comandos disponibles y comportamientos exactos; confirme siempre con el fabricante para su variante y firmware específico.
- Si la interfaz del dispositivo requiere una elección de transporte, recuerde que Plaspy soporta tanto UDP como TCP; seleccione el transporte requerido por su red local o preferencia del instalador.
- La configuración por SMS es práctica para unidades individuales o aprovisionamiento inicial, pero las herramientas del proveedor, la provisión OTA o métodos por lotes pueden ser más eficientes para despliegues de flota.
- Asegúrese de que la bandera de autenticación APN coincida con si proporciona nombre de usuario o contraseña; una bandera incorrecta puede impedir la conexión de datos.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que apunte el dispositivo a d.plaspy.com o 54.85.159.138 y use el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con dispositivos Suntech ST8300 ofrece a las organizaciones un endpoint de servidor y un flujo de detección coherentes para ingerir datos de ubicación y eventos. Con Plaspy manejando la detección de protocolo y un único valor de puerto compartido, instaladores y administradores pueden estandarizar los pasos de configuración en flotas mixtas y validar rápidamente la visibilidad del dispositivo en la plataforma.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the official Suntech site http://www.suntechint.com/
