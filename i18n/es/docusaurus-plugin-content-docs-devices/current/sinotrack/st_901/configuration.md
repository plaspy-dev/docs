---
slug: /sinotrack/st_901/configuration
id: st_901-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901 Configuration
sidebar_class_name: menu_item_tracker
description: Configure SinoTrack ST-901 para reportar a Plaspy mediante comandos SMS y ajustes de servidor compartido
keywords:
  - Configuración SinoTrack ST-901
  - Configurar ST-901 en Plaspy
  - Configuración servidor SinoTrack ST 901
  - Configuración rastreador GPS ST 901
  - Configuración de rastreador Plaspy
  - Comandos SMS ST-901
  - Configuración APN GPRS
  - Guía de instalación rastreador de vehículo
  - Rastreo de flotas ST-901
  - Inmovilizador ST-901
---

# SinoTrack - Configuración ST-901

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-901 con Plaspy. Se centra en los pasos prácticos y los comandos SMS públicos que apuntan el rastreador hacia Plaspy para que el dispositivo reporte ubicación y eventos de alarma a la plataforma. Utilice esta guía junto con la documentación del equipo y las mejores prácticas de instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Los comandos SMS de ejemplo que se muestran abajo son el método documentado públicamente para el ST-901 y explican cómo configurar el APN, el servidor, los intervalos de reporte y cómo verificar los ajustes.

## Resumen de la configuración

Este proceso prepara el ST-901 para comunicarse con el endpoint de ingestión de Plaspy, de modo que los mensajes de posición, alarma y estado lleguen a su cuenta de Plaspy. El énfasis está en configurar el APN para GPRS, establecer el endpoint y puerto del servidor, habilitar el modo GPRS y verificar que el dispositivo reporte correctamente.

- Apuntar el rastreador a Plaspy usando el endpoint público y el puerto para que los paquetes GPRS se envíen a Plaspy.
- Configurar el APN del operador móvil para que el rastreador pueda establecer una sesión GPRS y enviar datos.
- Habilitar los intervalos de reporte y el modo GPRS para que el ST-901 transmita actualizaciones periódicas de ubicación y alarmas.
- Verificar la configuración del dispositivo con el comando RCONF para confirmar el ID del equipo y los ajustes del servidor.
- Validar que el dispositivo sea visible en Plaspy tras la configuración y que se reciban alertas y mensajes de estado.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS o entrada de hostname donde sea soportado
- IP del servidor 54.85.159.138 como dirección pública de ingestión para configuración directa por IP
- Puerto 8888 utilizado para conexiones de dispositivos hacia Plaspy
- Soporte de transporte por UDP o TCP según las capacidades del dispositivo y requisitos locales
- Plaspy detecta automáticamente el protocolo del rastreador en conexiones entrantes y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la instalación

- Un ST-901 con alimentación instalado o temporalmente alimentado para configuración y pruebas
- Una tarjeta SIM activa con plan de datos y los detalles del APN del operador disponibles
- Capacidad para enviar y recibir comandos SMS desde el número de teléfono de instalación para la configuración por SMS
- Acceso al IMEI del dispositivo y cualquier dato de activación o registro que el instalador deba anotar
- Instrucciones del fabricante o el método oficial de configuración de SinoTrack para referencia durante la instalación
- Un flujo de pruebas para validar el reporte del dispositivo en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El ST-901 se configura para reenviar paquetes GPRS al endpoint compartido de ingestión y al puerto de Plaspy, de modo que Plaspy reciba mensajes de ubicación, alarma y estado para su procesamiento y visualización. Una vez configurado correctamente, Plaspy puede mostrar seguimiento en tiempo real, alertas y telemetría del dispositivo.

- El rastreador envía actualizaciones periódicas de ubicación por GPRS al endpoint y puerto configurados de Plaspy.
- Eventos de alarma y estado, como encendido ACC, pérdida de alimentación principal, violaciones de geocerca y exceso de velocidad se reenvían a Plaspy para su manejo.
- SMS permanece disponible para alertas directas o como canal de respaldo si la conectividad de datos no está disponible.
- El dispositivo se apunta al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888 para que los paquetes entren en la canalización de procesamiento de Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes.

## Flujo típico de configuración

1. Consulte el método oficial de configuración por SMS de SinoTrack tal como lo documenta el fabricante o el proveedor.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP para el transporte si el ST-901 requiere selección explícita; escoja el transporte soportado por su red y su plan de monitoreo.
5. Envíe comandos SMS para establecer el APN, la IP o dominio del servidor y los intervalos de reporte según lo requiera el equipo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador necesita un reboot para aplicar los ajustes.
7. Valide que el ST-901 reporte a Plaspy comprobando la visibilidad del dispositivo y los eventos en su cuenta de Plaspy y usando el comando de verificación del dispositivo.

## Ejemplos de comandos de configuración

El ST-901 soporta configuración por comandos SMS. Los siguientes comandos públicos se presentan en el orden recomendado por SinoTrack para la configuración inicial. Envíe cada comando como SMS al número del dispositivo desde un número móvil autorizado.

- Restaurar configuración de fábrica (opcional)
```text
RESET
```
- Establecer la zona horaria a UTC+0
```text
8960000E00
```
- Configurar el APN del operador móvil
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
  - {{apn}} es el nombre del APN del operador
  - {{apnu}} es el usuario del APN si se requiere (deje en blanco o use un marcador si no es necesario)
  - {{apnp}} es la contraseña del APN si se requiere

- Configurar el servidor de reporte GPRS a Plaspy usando la IP y el puerto de Plaspy
```text
8040000 54.85.159.138 8888
```
  - Alternativamente puede configurar el servidor con d.plaspy.com cuando el dispositivo soporte DNS

- Establecer intervalo de actualización con el motor encendido
```text
8050000 60
```
  - El ejemplo usa 60 segundos como intervalo de reporte

- Establecer intervalo de actualización con el motor apagado
```text
8090000 60
```
  - El ejemplo usa 60 segundos como intervalo en reposo

- Cambiar el dispositivo al modo GPRS para comenzar el reporte de datos
```text
7100000
```

- Verificar la configuración actual y leer el ID del dispositivo
```text
RCONF
```
  - El comando RCONF devuelve la configuración del equipo incluyendo el ID usado por Plaspy

## Notas de configuración

- Estos comandos SMS son el método públicamente documentado para la configuración del ST-901; pueden existir también herramientas del proveedor o software para PC que sigan un flujo similar.
- Los marcadores como {{apn}} {{apnu}} y {{apnp}} deben reemplazarse por los datos del APN de su operador. No siempre se requiere usuario y contraseña.
- Las versiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o las opciones disponibles; confirme los comandos con la documentación vigente de SinoTrack.
- Elija UDP o TCP como transporte solo si el dispositivo expone esa opción; Plaspy acepta conexiones por ambos transportes en el puerto compartido.
- Use el comando RCONF para confirmar el ID del dispositivo y los ajustes del servidor después de la configuración y antes de validar en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el SinoTrack ST-901 para reportar a Plaspy permite a las organizaciones obtener visibilidad consolidada de la posición de los vehículos, estado de encendido, eventos de alimentación y condiciones de alarma en sus flotas. La configuración por SMS del ST-901 y su reporte estándar por GPRS facilitan la integración con Plaspy para seguimiento en tiempo real, alertas y supervisión operativa.

Para conocer más sobre Plaspy y cómo gestionar dispositivos y flotas con nuestra plataforma visite https://www.plaspy.com. Para instrucciones específicas de dispositivo, notas de firmware y detalles del fabricante verifique la información en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
