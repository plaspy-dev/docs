---
slug: /istartek/pt29/configuration
id: pt29-configuration
sidebar_label: Configuration
title: iStartek - PT29 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek PT29 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración iStartek PT29
  - instalación iStartek PT29
  - configuración PT29 para Plaspy
  - configuración de servidor PT29
  - configuración rastreador GPS PT29
  - rastreador GPS iStartek Plaspy
  - configuración SMS PT29
  - configuración rastreador GPS para mascotas
  - configuración de servidor para rastreador GPS
  - ajustes APN PT29
---

# iStartek - Configuración del PT29

Esta página describe el contexto público de configuración para usar el iStartek PT29 con la plataforma Plaspy. Se enfoca en los ajustes de servidor y los comandos SMS prácticos que normalmente se usan para apuntar el PT29 hacia Plaspy, de modo que el dispositivo pueda reportar ubicación y estado a la plataforma. Cuando están disponibles, se reproducen los comandos SMS proporcionados por el fabricante y se explican los marcadores que deben reemplazarse.

Plaspy utiliza ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT29 admite configuración por SMS y ajuste de servidor GPRS, por lo que esta guía presenta los comandos SMS públicos y un flujo de trabajo típico para registrar el dispositivo en Plaspy, junto con recomendaciones de verificación según la documentación del fabricante.

## Resumen de la configuración

Configurar un PT29 para Plaspy prepara el dispositivo para enviar mensajes periódicos de ubicación y estado al servidor de Plaspy, de modo que las posiciones se muestren en la plataforma y se puedan procesar alertas. Los comandos públicos a continuación están pensados para enviarse por SMS desde un teléfono de gestión o mediante una herramienta de configuración compatible que reenvíe comandos SMS al dispositivo.

- Configurar el APN del dispositivo para que los datos móviles y el reporte GPRS funcionen con la SIM instalada
- Apuntar el rastreador al punto de acceso del servidor de Plaspy y al puerto para que la telemetría llegue a la plataforma
- Establecer un intervalo de reporte para que el rastreador envíe actualizaciones de ubicación con la frecuencia deseada
- Opcionalmente restablecer o verificar parámetros para asegurar una configuración inicial conocida
- Validar la conectividad y confirmar que el dispositivo sea visible en Plaspy después de la configuración

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el PT29. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol type beyond choosing UDP or TCP if the device requires it

## Requisitos previos típicos

- Un PT29 con batería cargada y una Nano SIM activa instalada con datos móviles o capacidad de SMS habilitada
- Información del APN del operador de la SIM para poder completar el marcador del APN si es necesario
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante que pueda enviar los mismos comandos
- Una cuenta en la plataforma Plaspy o acceso para validar después de que el rastreador empiece a reportar
- Un lugar con cobertura celular para el registro inicial y los reportes periódicos
- El dispositivo debe estar encendido y con los permisos o ajustes de usuario necesarios habilitados para la configuración remota

## Cómo se conecta este rastreador a Plaspy

El PT29 reporta ubicación, telemetría y mensajes de estado a través de la red celular hacia el servidor y puerto compartidos de Plaspy, de modo que la plataforma pueda normalizar los datos, mostrar posiciones en mapas, activar alertas y almacenar el historial. Configure el dispositivo para que apunte al endpoint de Plaspy y así los mensajes se reciban y procesen sin enrutamientos de servidor personalizados.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy
- Los mensajes de ubicación y estado llegan a Plaspy, donde se analizan y se presentan en mapas en tiempo real
- El reporte de eventos como alertas SOS y notificaciones de movimiento se integra en los flujos de trabajo de Plaspy
- Actualizaciones periódicas de posición permiten construir trayectorias históricas y evaluar geocercas
- La visibilidad en Plaspy posibilita monitoreo, generación de informes e integración con otras funciones de la plataforma

## Flujo típico de configuración

1. Acceda al método oficial de configuración de iStartek para el PT29, ya sea por comandos SMS o por la herramienta suministrada por el proveedor, y confirme que el dispositivo responde
2. Configure el APN del dispositivo usando el comando de APN proporcionado, reemplazando el marcador por el APN de su operador
3. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138
4. Establezca el puerto del servidor en 8888, que es el puerto que usa Plaspy para todos los dispositivos
5. Elija UDP o TCP en el dispositivo si requiere seleccionar un transporte; ambos están soportados en el puerto 8888
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para aplicar los cambios
7. Valide que el PT29 reporte a Plaspy comprobando la visibilidad del equipo en su cuenta de Plaspy y confirmando mensajes de posición recientes

## Comandos de configuración de ejemplo

El PT29 admite configuración por SMS. A continuación se muestran los comandos SMS públicos proporcionados por el fabricante, presentados en orden. Envíe estas cadenas SMS desde su teléfono de gestión al PT29 respetando las reglas de SMS del operador y la contraseña SMS del dispositivo si está configurada.

- Comando opcional de reseteo de fábrica cuando se parte de un estado desconocido
```text
FACTORY#
```
- Establecer la zona horaria a UTC 0 como ejemplo
```text
GMT,E,0#
```
- Configurar el APN del operador. Reemplace los valores de marcador según sea necesario
```text
APN,[apn],[apnu],[apnp]#
```
Explicación de los marcadores del APN
- [apn] es el nombre del APN del operador requerido para datos y GPRS
- [apnu] es el nombre de usuario del APN si su operador lo solicita
- [apnp] es la contraseña del APN si su operador la solicita
Si sólo se requiere el nombre del APN envíe APN,[apn]#

- Configurar el servidor GPRS a Plaspy usando el dominio y puerto
```text
SERVER,1,d.plaspy.com,8888#
```
O configurar el servidor GPRS a Plaspy por IP y puerto
```text
SERVER,0,54.85.159.138,8888#
```
- Establecer el intervalo de actualización de ubicación a cada 60 segundos
```text
TIMER,60#
```
- Verificar los parámetros actuales con el comando de estado
```text
PARAM#
```

Envíe los comandos en el orden mostrado cuando el orden sea importante. Use el comando de reseteo de fábrica solo cuando necesite devolver el dispositivo a los valores predeterminados de fábrica como paso inicial opcional.

## Notas de configuración

- La configuración por SMS está documentada por el fabricante y es un método común para ajustes en campo y configuraciones remotas
- Revisiones de firmware y variantes de hardware pueden aceptar formatos de comando ligeramente distintos o requerir una contraseña SMS del dispositivo; verifique las notas del fabricante para su unidad PT29
- Elija UDP o TCP según la fiabilidad de su red y las características del operador; Plaspy soporta ambos transportes en el puerto 8888
- Los marcadores del APN deben completarse con los valores específicos del operador para la SIM en uso para habilitar el reporte GPRS
- Tras realizar cambios, espere un breve período para que el dispositivo se registre en la red y aparezca en Plaspy antes de continuar con la resolución de problemas

## Por qué usar Plaspy con esta configuración

Configurar el PT29 para reportar a Plaspy proporciona visibilidad consistente para mascotas y pequeños activos mediante un único endpoint de servidor compartido. Usar los comandos SMS proporcionados o las herramientas del proveedor para apuntar el rastreador a d.plaspy.com o 54.85.159.138 en el puerto 8888 permite la ingestión inmediata de mensajes de ubicación y estado, soportando monitoreo en tiempo real, alertas de geocercas y reproducción histórica para recuperación y auditoría.

Para saber más sobre Plaspy y cómo la plataforma puede gestionar dispositivos PT29 a escala visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración específica del dispositivo, el comportamiento del firmware y la documentación del fabricante, verifique la información en el sitio de iStartek https://istartek.com/ ya que los métodos y formatos de comando pueden cambiar con las revisiones de firmware y hardware regionales.
