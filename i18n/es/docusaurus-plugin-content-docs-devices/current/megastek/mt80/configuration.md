---
slug: /megastek/mt80/configuration
id: mt80-configuration
sidebar_label: Configuration
title: Megastek - MT80 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek MT80 con Plaspy usando servidor compartido y ajustes por SMS o GPRS
keywords:
  - Megastek MT80
  - Configuración Megastek MT80
  - Configuración MT80
  - Configuración servidor MT80
  - Plaspy MT80
  - Configuración rastreador GPS
  - Configuración reloj GPS para salud
  - Configuración GPRS MT80
  - Comandos SMS MT80
  - Integración MT80 Plaspy
---

# Megastek - Configuración MT80

Esta página documenta el contexto público de configuración para usar el reloj GPS Megastek MT80 Series con Plaspy. Explica los ajustes de servidor compartido de Plaspy a los que debe apuntar el equipo, los flujos de trabajo de configuración más comunes y ejemplos de comandos SMS publicados con frecuencia para esta familia de dispositivos. Use esta guía para preparar el MT80 para reportar ubicación, eventos y telemetría hacia Plaspy.

Plaspy utiliza un endpoint de ingestión compartido y detecta automáticamente el protocolo del rastreador para los dispositivos compatibles. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. La configuración del modelo MT80 que se muestra a continuación incluye ejemplos de comandos SMS comúnmente usados para establecer APN, servidor e intervalos de reporte; revise la documentación del fabricante y las notas de firmware antes de aplicar cambios.

## Resumen de configuración

El objetivo al configurar un MT80 para Plaspy es preparar el reloj para comunicarse de forma fiable con el endpoint de ingestión de Plaspy y validar el reporte para que el dispositivo aparezca en el panel de Plaspy. La configuración normalmente define el APN de la red, el servidor y puerto de reporte del dispositivo, el intervalo de reporte y el identificador del dispositivo.

- Configure el APN del equipo para que pueda usar datos GPRS y conectarse a Plaspy.
- Apunte el rastreador al endpoint y puerto compartidos de servidor de Plaspy para la ingestión.
- Establezca un intervalo de reporte adecuado para que las actualizaciones de ubicación y eventos lleguen en tiempo real según lo esperado.
- Valide la identidad del dispositivo (IMEI o ID de dispositivo) para que el rastreador sea reconocido en Plaspy.
- Verifique que los reportes y alarmas del dispositivo aparezcan en Plaspy después de guardar y reiniciar el equipo.

## Ajustes del servidor Plaspy

Al integrar el MT80 con Plaspy, use los siguientes ajustes públicos del servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you only need to point the device to the server and port

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y confía en la detección automática del protocolo para interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Un MT80 con batería cargada y una SIM funcional que soporte datos y SMS según lo requiera su configuración.
- Acceso al IMEI o al número de serie del dispositivo para poder establecer los campos de identificación cuando sea necesario.
- El APN del operador y, opcionalmente, el usuario y la contraseña del APN si su operadora los exige (los marcadores {{apn}}, {{apnu}} y {{apnp}} se usan en los comandos).
- Capacidad para enviar comandos SMS al reloj o acceso a la herramienta de configuración del proveedor según la variante y el firmware del MT80.
- Conocimiento de la contraseña por defecto del dispositivo en caso de que la configuración por SMS la requiera; los comandos de ejemplo abajo usan la contraseña publicada por defecto 000000.

## Cómo se conecta este rastreador a Plaspy

La serie MT80 puede enviar ubicación, eventos y telemetría de salud a Plaspy por SMS o GPRS (TCP/UDP), según la variante y la configuración. Una vez apuntado al endpoint y puerto compartidos de Plaspy, el dispositivo entrega actualizaciones regulares y alarmas que Plaspy ingiere y presenta en la plataforma.

- El reloj se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o IP 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP; elija el transporte disponible en el equipo y soportado por la red.
- Plaspy detecta automáticamente el protocolo del rastreador entrante, por lo que los mensajes se analizan sin necesidad de seleccionar manualmente el protocolo en el servidor.
- Los reportes incluyen actualizaciones periódicas de ubicación y alarmas de eventos para que el dispositivo sea visible y accionable dentro de Plaspy.
- Después de la configuración, valide la conectividad para que la telemetría, SOS y otros eventos aparezcan en el panel de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el MT80, o prepárese para enviar comandos SMS si su firmware lo permite.
2. Introduzca el servidor de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del dispositivo.
3. Configure el puerto del servidor en 8888.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según corresponda para su despliegue.
5. Configure el APN y las credenciales del APN que requiera su operador móvil (use los marcadores {{apn}} {{apnu}} {{apnp}} si aplica).
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para que los ajustes surtan efecto.
7. Valide que el dispositivo informe a Plaspy confirmando que las actualizaciones de ubicación y los mensajes de evento aparecen en la plataforma.

## Comandos de configuración de ejemplo

La documentación del modelo MT80 publica con frecuencia comandos SMS para configuración. Los ejemplos que siguen usan la contraseña por defecto del dispositivo 000000 en las cadenas de comando tal como aparecen en material público. Reemplace 000000 por la contraseña de su dispositivo si es diferente.

- Establecer el ID del dispositivo (use el IMEI del equipo o los últimos 15 dígitos del IMEI como identificador). Reemplace <IMEI_15> por los últimos 15 dígitos del IMEI del dispositivo:

```
M000000,22,<IMEI_15>
```

Ejemplo: si los últimos 15 dígitos del IMEI son 012345678901234, envíe:
```
M000000,22,012345678901234
```

- Establecer el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador requiere usuario y contraseña para el APN, incluya {{apnu}} y {{apnp}} como se muestra (estos marcadores pueden ser opcionales según el operador):

```
M000000,23,{{apn}}
```

O con usuario y contraseña:
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

- Establecer el intervalo de actualización a 60 segundos:

```
M000000,25,60
```

- Configurar el servidor GPRS para apuntar el dispositivo a Plaspy. El comando publicado incluye un índice y luego la IP y el puerto del servidor. El ejemplo usa la IP pública y el puerto de Plaspy:

```
M000000,24,56 54.85.159.138,8888
```

- Habilitar el modo GPRS (ejemplo de comando para cambiar el dispositivo a reporte por GPRS):

```
M000000,21,2
```

Notas sobre estos comandos:
- Los comandos de ejemplo usan la contraseña por defecto publicada 000000. Cambie la contraseña en los comandos si su dispositivo tiene otra.
- Mantenga los marcadores como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores de su operador.
- El dispositivo también puede aceptar el servidor en forma de dominio. Si usa dominio en lugar de IP, asegúrese de que el firmware del dispositivo soporte resolución DNS y use d.plaspy.com en lugar de la IP.
- Si su flujo de trabajo de configuración utiliza una herramienta del proveedor en lugar de SMS, aplique los mismos valores de servidor, puerto y APN en esa herramienta.

## Notas de configuración

- Las diferencias de firmware y variantes de hardware pueden cambiar la sintaxis exacta de los comandos o las opciones disponibles; confirme siempre con las notas de la versión del fabricante para su variante y firmware MT80.
- El MT80 admite configuración por SMS como se muestra arriba en muchos ejemplos publicados; también pueden estar disponibles software del proveedor o métodos OTA para ciertas variantes.
- Elija TCP o UDP según el soporte de su red y del dispositivo. Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Cambie la contraseña SMS por defecto 000000 cuando sea posible para mejorar la seguridad y la gestión del dispositivo.
- Tras cualquier cambio de configuración, confirme que el dispositivo se registra en la red celular y que envía paquetes con éxito a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar la serie MT80 con Plaspy ofrece un camino sencillo para combinar telemetría de salud wearable y reporte de ubicación en una sola plataforma. Apuntar el dispositivo a los ajustes de servidor compartido de Plaspy y validar los reportes proporciona visibilidad en tiempo real, manejo de alarmas y reproducción histórica que son útiles para cuidadores, servicios de monitorización médica y despliegues supervisados.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup methods and firmware behavior with the manufacturer at https://www.megastek.com/ to ensure your MT80 configuration is current and supported.
