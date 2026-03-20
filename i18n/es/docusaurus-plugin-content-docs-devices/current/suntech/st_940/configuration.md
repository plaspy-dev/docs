---
slug: /suntech/st_940/configuration
id: st_940-configuration
sidebar_label: Configuration
title: Suntech - ST 940 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST 940 con ajustes de servidor Plaspy, comandos SMS y consejos prácticos
keywords:
  - Configuración Suntech ST 940
  - Configuración ST 940
  - Suntech ST 940 Plaspy
  - Configuración servidor ST 940
  - Configuración rastreador GPS Suntech
  - Configuración SMS ST 940
  - Compatibilidad rastreador Suntech Plaspy
  - Guía configuración rastreador GPS
  - Rastreo vehicular ST 940
  - Rastreador de activos ST 940
---

# Suntech - Configuración ST 940

Esta página presenta el contexto público de configuración para usar el rastreador Suntech ST 940 con Plaspy. Reúne los ajustes de servidor Plaspy que necesita, explica cómo se suele preparar el ST 940 para enviar reportes y ofrece las plantillas públicas de comandos SMS que se usan comúnmente para apuntar el dispositivo hacia Plaspy. Úsela como punto de partida práctico para la integración y la verificación.

Plaspy emplea ajustes compartidos de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que combine la orientación aquí con la documentación del dispositivo y cualquier utilidad de configuración provista por el vendedor.

## Resumen de configuración

El objetivo es preparar un Suntech ST 940 para que envíe sus datos de ubicación y estado a la plataforma Plaspy de forma confiable. En los ST 940 esto suele implicar establecer el APN de la red, configurar el endpoint del servidor Plaspy, ajustar los intervalos de reporte y verificar la identidad del dispositivo que Plaspy utilizará para relacionar el rastreador.

- Configure el APN del operador y las credenciales necesarias para que el equipo use GPRS y alcance Plaspy.
- Apunte el ST 940 al endpoint del servidor Plaspy (dominio o IP) y al puerto correspondiente para que la plataforma reciba los reportes.
- Seleccione el transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Defina un intervalo de reporte apropiado (por ejemplo, 60 segundos como ejemplo operativo) acorde a sus necesidades de monitoreo.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy usando el ID derivado del IMEI.
- Conserve una copia de los SMS enviados o de los archivos de configuración para auditoría y resolución de problemas.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el equipo al endpoint compartido.

## Requisitos previos habituales

- Un ST 940 con batería cargada y una tarjeta SIM funcional que tenga datos y SMS habilitados según lo requiera su configuración.
- Tener a mano el IMEI del dispositivo; a partir de él obtendrá el ID que Plaspy usará para identificar el equipo.
- Información del APN del operador móvil, incluyendo APN, nombre de usuario y contraseña si son requeridos.
- Capacidad para enviar SMS al rastreador o usar la herramienta de configuración del fabricante según lo que el equipo soporte.
- Acceso a la documentación oficial de Suntech o a las herramientas del proveedor para comandos o actualizaciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El ST 940 se configura para conectarse al endpoint de Plaspy para que la plataforma reciba actualizaciones periódicas de ubicación y estado. El dispositivo usa GPRS para alcanzar el servidor configurado y reporta según su programación de envío.

- El rastreador se apunta al endpoint de Plaspy mediante dominio o IP: d.plaspy.com o 54.85.159.138.
- Los datos se envían al puerto 8888, que es el puerto común que Plaspy utiliza para todos los dispositivos.
- El equipo puede usar transporte UDP o TCP en el puerto 8888 según sus opciones de configuración y firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, así que una vez que el servidor y el puerto están correctos la plataforma intentará decodificar los datos entrantes.
- Intervalos de reporte regulares y conectividad GPRS exitosa hacen que el dispositivo sea visible y localizable en la plataforma Plaspy.
- Tras la configuración, debe validar que el dispositivo está reportando y que aparece en Plaspy bajo el ID esperado.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Suntech o a su software, o prepárese para enviar comandos SMS si el equipo se configura por SMS.
2. Obtenga el IMEI del dispositivo y calcule el ID que Plaspy utiliza (ver el ejemplo más abajo).
3. Ingrese el servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138 en el campo de configuración de red correspondiente.
4. Configure el puerto en 8888, ya que es el puerto compartido que usa Plaspy para todos los dispositivos.
5. Seleccione UDP o TCP si el equipo requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o las instrucciones lo indican.
7. Valide que el dispositivo reporte a Plaspy y que aparezca bajo el ID esperado en la plataforma.

## Ejemplos de comandos de configuración

El Suntech ST 940 puede configurarse por SMS usando plantillas de comandos. El ID del dispositivo que se usa en estos comandos es los últimos 9 dígitos del IMEI, excluyendo el dígito final. Por ejemplo, con el IMEI 123456789012345 el ID del dispositivo sería 678901234.

Tenga en cuenta los marcadores:
- {{device_id}} = el ID de 9 dígitos derivado del IMEI como se describió arriba
- {{apn}} = el APN de su operador
- {{apnu}} = nombre de usuario del APN si es necesario
- {{apnp}} = contraseña del APN si es necesaria

1. Reseteo de fábrica opcional inicial (use solo si es necesario):
```
ST300CMD;{{device_id}};02;Reset
```

2. Configurar APN del operador y apuntar el servidor GPRS a Plaspy (el campo numérico después de 02 indica si se incluyen credenciales APN; use 1 para incluir usuario y contraseña o 0 si no son necesarios):
```
ST300NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

3. Establecer intervalo de reporte a 60 segundos (intervalo de ejemplo):
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4. Consultar configuración actual (comando de verificación):
```
ST300CMD;{{device_id}};02;PresetA
```

Envíe cada SMS al número del dispositivo. Reemplace los marcadores por sus valores reales y asegúrese de calcular correctamente el ID del dispositivo a partir del IMEI antes de enviar.

## Notas de configuración

- Las variaciones de firmware y regionales pueden cambiar el formato de los comandos y los campos disponibles; siempre verifique la sintaxis de los comandos contra las notas de la versión del firmware de su dispositivo.
- El ST 940 admite configuración por SMS según la guía pública; también puede ser posible usar software del proveedor o herramientas de configuración si Suntech o su distribuidor las proveen.
- Elija UDP o TCP según su entorno de red y las recomendaciones del operador o del firmware; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- Asegúrese de que la SIM tenga GPRS habilitado para reportes en vivo y que las credenciales APN sean correctas si se requiere autenticación.
- Al solucionar problemas, use el comando de verificación indicado arriba y supervise la presencia del dispositivo en Plaspy después de aplicar los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 940 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar reportes de ubicación y estado desde un rastreador compacto y de larga duración. Apuntar el equipo al endpoint compartido de Plaspy y al puerto común simplifica el despliegue y el monitoreo en flotas mixtas de dispositivos.

Para saber más sobre Plaspy y las integraciones compatibles visite https://www.plaspy.com. Para los detalles más recientes sobre configuración específica del dispositivo, notas de firmware e instrucciones del fabricante consulte el sitio oficial de Suntech http://www.suntechint.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
