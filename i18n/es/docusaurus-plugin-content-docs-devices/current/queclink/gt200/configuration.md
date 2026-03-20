---
slug: /queclink/gt200/configuration
id: gt200-configuration
sidebar_label: Configuration
title: QuecLink - GT200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GT200 con Plaspy, incluyendo ajustes de servidor y comandos SMS de ejemplo
keywords:
  - QuecLink GT200 configuración
  - QuecLink GT200 instalación
  - GT200 configuración Plaspy
  - configuración servidor GT200
  - configuración rastreador GPS QuecLink
  - comandos SMS GT200
  - ajustes servidor Plaspy
  - configuración plataforma rastreo GPS
  - instalación software seguimiento GT200
  - configuración dispositivo QuecLink
---

# QuecLink - Configuración del GT200

Esta página documenta el contexto público de configuración para utilizar el QuecLink GT200 con Plaspy. Reúne los ajustes de servidor compartidos por Plaspy, orientación práctica de instalación y ejemplos de comandos SMS públicos disponibles para el GT200. Use esta guía para preparar el dispositivo para que reporte a Plaspy y para saber qué verificar antes y después de la integración.

Plaspy utiliza un único endpoint y puerto compartido para los dispositivos compatibles y realiza la detección automática del protocolo del rastreador. Los pasos de configuración por parte del fabricante para el GT200 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo en esta página muestran un flujo basado en SMS e incluyen la contraseña predeterminada del dispositivo usada en la configuración pública de ejemplo.

## Resumen de la configuración

Esta configuración prepara una unidad GT200 para comunicarse con Plaspy y reportar datos de posición y eventos de forma fiable. El ejemplo público usa comandos SMS para establecer el APN y el reporte GPRS hacia el servidor de Plaspy, además de configurar intervalos de reporte y entradas de alerta.

- Configure GPRS y los ajustes del servidor de reporte para que el GT200 envíe datos a Plaspy.
- Aplique el APN del operador y credenciales relacionadas para que el dispositivo acceda a datos móviles.
- Establezca el endpoint y el puerto del servidor de Plaspy para enrutar los reportes a la plataforma.
- Defina los intervalos de reporte y active entradas importantes como notificaciones SOS.
- Verifique la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para envío de reportes y ingestión en la plataforma.
- IP del servidor 54.85.159.138 como endpoint alternativo direccionable.
- Puerto 8888 como el único puerto utilizado por Plaspy para las conexiones de dispositivos.
- Soporte de transporte para UDP o TCP; el GT200 puede configurarse para usar cualquiera de los dos en el lado del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en la plataforma.

## Requisitos típicos antes de iniciar

- Un dispositivo GT200 con batería cargada y encendido, con acceso a SMS o al método de configuración del fabricante.
- Una tarjeta SIM válida con datos móviles y servicio SMS, y los datos del APN del operador.
- Acceso a la contraseña por defecto del dispositivo si los comandos SMS requieren autenticación (la contraseña de muestra se indica en los ejemplos).
- Instrucciones de configuración del fabricante o acceso a herramientas oficiales de QuecLink cuando estén disponibles.
- Una conexión de red estable para confirmar que el rastreador reporta correctamente a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el GT200 envía actualizaciones de posición, alertas y eventos de entrada al endpoint y puerto del servidor de Plaspy para que el dispositivo sea visible y gestionable dentro de la plataforma.

- El dispositivo se configura para apuntar a d.plaspy.com (o a la IP provista) y al puerto 8888 para los reportes salientes.
- Plaspy acepta datos entrantes por UDP o TCP y empata el protocolo del dispositivo de forma automática.
- Los reportes de posición regulares y las notificaciones de eventos aparecen en Plaspy en cuanto el rastreador se conecta con éxito.
- Los eventos de SOS y otras entradas digitales pueden habilitarse en el GT200 y serán reenviados a Plaspy para su monitoreo.

## Flujo común de configuración

1. Acceda al método de configuración oficial de QuecLink para el GT200, como comandos SMS o software del proveedor.
2. Ingrese d.plaspy.com o 54.85.159.138 como host del servidor GPRS en la configuración del dispositivo.
3. Establezca el puerto 8888 como puerto del servidor; Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP en el rastreador si el firmware del dispositivo lo requiere.
5. Aplique o guarde los cambios de configuración en el dispositivo y envíe los comandos SMS necesarios.
6. Reinicie el rastreador si el firmware exige un reboot para aplicar las configuraciones.
7. Valide que el dispositivo reporte a Plaspy y que sea visible en el panel de la plataforma.

## Comandos de configuración de ejemplo

El GT200 admite comandos de configuración por SMS. El ejemplo público a continuación usa la contraseña de dispositivo de muestra queclink como se muestra en las instrucciones públicas originales. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden indicado al realizar la configuración inicial.

1. Paso inicial opcional Restaurar configuración de fábrica (usar solo cuando sea necesario)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador (reemplazar los marcadores antes de enviar)
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es el APN de la red móvil
- {{apnu}} es el usuario del APN si se requiere
- {{apnp}} es la contraseña del APN si se requiere

4. Configurar el servidor GPRS para reportar a Plaspy (se incluyen dominio e IP en este ejemplo)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el rastreador para usar d.plaspy.com y la IP 54.85.159.138 con el puerto 8888.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detectará el protocolo automáticamente.

5. Establecer el intervalo de actualización de posición a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos
- Estos comandos son ejemplos tomados de contenido público de configuración de QuecLink y se envían al dispositivo por SMS.
- La contraseña de dispositivo de muestra en el ejemplo es queclink y se muestra como predeterminada en los comandos públicos.
- Reemplace los marcadores del APN con los valores de su operador antes de enviar.
- Realice el comando de restauración de fábrica solo cuando comprenda su impacto.

## Notas de configuración

- La configuración por SMS es un método público común para dispositivos GT200; también pueden estar disponibles herramientas del proveedor o métodos OTA según el firmware.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de los comandos o los parámetros disponibles; confirme siempre con el fabricante si tiene dudas.
- Elija UDP o TCP según la preferencia del instalador y el soporte del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que asegúrese de que los firewalls de red permitan tráfico saliente hacia ese puerto desde el dispositivo.
- Mantenga registro de la contraseña del dispositivo usada en los comandos y actualícela según sus políticas de seguridad.

## Por qué usar Plaspy con esta configuración

Usar el GT200 con Plaspy ofrece una forma directa de centralizar la ubicación, alertas y datos de entradas del dispositivo en una sola plataforma. Las capacidades de reporte del GT200, combinadas con la detección automática de protocolos y el endpoint compartido de Plaspy, simplifican el despliegue y reducen la carga de configuración por equipo.

Learn more about Plaspy at https://www.plaspy.com and verify the latest QuecLink GT200 setup details and firmware notes at https://www.queclink.com/. Manufacturer specifications, setup steps, and firmware behavior can change over time so check the official QuecLink documentation for the most current device instructions.
