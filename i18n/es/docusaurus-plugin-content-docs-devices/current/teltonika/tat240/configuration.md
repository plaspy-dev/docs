---
slug: /teltonika/tat240/configuration
id: tat240-configuration
sidebar_label: Configuration
title: Teltonika - TAT240 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika TAT240 con ajustes de servidor Plaspy y pasos prácticos para seguimiento confiable
keywords:
  - Configuración Teltonika TAT240
  - Configuración TAT240
  - Configuración TAT240 Plaspy
  - Configuración rastreador GPS Teltonika
  - Ajustes servidor Plaspy
  - Configuración servidor TAT240
  - Rastreador de activos TAT240
  - Rastreador vehicular TAT240
  - Configuración SMS TAT240
  - Configuración plataforma rastreador GPS
---

# Teltonika - Configuración del TAT240

Esta página presenta información pública para configurar el Teltonika TAT240 con Plaspy. Resume los ajustes de servidor compartidos de Plaspy que debe aplicar al dispositivo y muestra un ejemplo práctico por SMS que se usa comúnmente para establecer parámetros básicos en dispositivos Teltonika. Use esta guía para preparar el rastreador para comunicarse con Plaspy y validar la conectividad básica antes de desplegar a gran escala.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta o comandos SMS que elija. El comando de ejemplo abajo muestra un método público para establecer APN y parámetros de servidor; siempre verifique los comandos con el firmware del dispositivo y la documentación oficial de Teltonika.

## Resumen de la configuración

Este proceso prepara el TAT240 para enviar datos de ubicación y eventos a Plaspy de forma fiable. El objetivo es aplicar los ajustes del servidor Plaspy, confirmar la conectividad celular y los parámetros APN, y garantizar que el dispositivo sea visible en la plataforma Plaspy.

- Configure el dispositivo para reportar a Plaspy usando el endpoint y puerto compartidos de Plaspy.
- Establezca el APN del dispositivo, las credenciales de APN opcionales y la dirección del servidor para que los datos puedan transmitirse por la red celular.
- Elija el método de transporte (UDP o TCP) si el dispositivo y el firmware lo requieren.
- Aplique los ajustes usando las herramientas de Teltonika o comandos SMS y reinicie el dispositivo si es necesario.
- Verifique que el dispositivo aparezca y reporte correctamente en Plaspy una vez configurado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con cualquiera de los dos protocolos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles para simplificar la configuración

## Requisitos típicos antes de comenzar

- Un dispositivo TAT240 cargado y accesible con alimentación aplicada para que pueda recibir comandos de configuración
- Una tarjeta SIM celular activa con datos y la información APN correcta para su operador móvil
- Acceso a las herramientas de configuración de Teltonika o permiso para enviar comandos SMS de configuración al dispositivo
- Conocimiento de los valores APN de su SIM incluyendo marcadores como {{apn}}, {{apnu}} y {{apnp}}
- Capacidad para reiniciar o cortar la alimentación del dispositivo si se requiere un reinicio tras aplicar los ajustes
- Acceso a una cuenta Plaspy o a un administrador para verificar la conectividad del dispositivo en la plataforma

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TAT240 envía datos de posición y eventos desde su radio celular al endpoint de Plaspy en el puerto compartido. Plaspy recibe las conexiones entrantes, detecta el protocolo automáticamente y mapea la telemetría y los eventos al registro del dispositivo en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com (o a 54.85.159.138) en el puerto 8888
- El dispositivo puede usar transporte UDP o TCP para enviar paquetes a Plaspy en el puerto 8888
- Plaspy detecta automáticamente el protocolo del dispositivo y procesa los mensajes entrantes para su visualización y alertas
- Las actualizaciones de posición, los eventos de movimiento y manipulación se muestran en los paneles de Plaspy tras una conexión exitosa
- La monitorización operativa y el reporte de eventos ocurren una vez que el dispositivo enlaza de forma consistente con el endpoint de Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de Teltonika para el TAT240, como Teltonika Configurator, RMS o la configuración por SMS, según su entorno.
2. Introduzca la dirección del servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor de la herramienta de configuración.
3. Ajuste el puerto a 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos.
4. Elija el transporte UDP o TCP si el dispositivo requiere una selección explícita durante la configuración.
5. Configure los ajustes APN y las credenciales del operador usando marcadores como {{apn}}, {{apnu}} y {{apnp}} si es necesario.
6. Aplique o guarde la configuración y reinicie o realice un ciclo de alimentación del dispositivo si el firmware requiere un reinicio para activar los nuevos parámetros.
7. Valide la conectividad confirmando que el dispositivo reporta a Plaspy y aparece en la plataforma con datos de posición y eventos recientes.

## Comandos de configuración de ejemplo

El siguiente ejemplo es un comando SMS público al estilo Teltonika que establece parámetros básicos incluyendo los marcadores APN, la dirección del servidor Plaspy y el puerto compartido. Presérvelos y sustituya por los valores del APN de su operador antes de enviar.

- Ejemplo de comando SMS en lote para establecer APN y parámetros del servidor Plaspy

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando
- {{apn}} es la cadena APN del operador móvil requerida para la conectividad de datos.
- {{apnu}} es el usuario del APN si su operador lo requiere; déjelo vacío si no es necesario.
- {{apnp}} es la contraseña del APN si su operador la requiere; déjelo vacío si no es necesario.
- 2004 se establece en d.plaspy.com que es el dominio del servidor Plaspy usado para el reporte.
- 2005 se establece en 8888 que es el puerto compartido de Plaspy para todos los dispositivos.
- 2006 comúnmente corresponde a un parámetro de transporte o modo de conexión en dispositivos Teltonika; confirme el mapeo exacto para su firmware en la documentación de Teltonika antes de cambiar este valor.

Si usa una herramienta de configuración en lugar de SMS, aplique el mismo dominio o IP del servidor y los valores de puerto en los campos correspondientes y guarde la configuración.

## Observaciones de configuración

- Las versiones de firmware y el mapeo de parámetros de Teltonika pueden variar. Confirme los IDs de parámetros y su comportamiento para su TAT240 específico antes de aplicar comandos SMS.
- Puede configurar el dispositivo mediante SMS o con las herramientas de configuración de Teltonika. Elija el método que se ajuste a su despliegue y verifique que los ajustes se hayan aplicado correctamente.
- La selección entre TCP y UDP puede afectar el manejo de paquetes y las reglas de firewall. Si el dispositivo requiere una selección de transporte, elija el que soporte su red y configúrelo para que coincida con Plaspy en el puerto 8888.
- Plaspy utiliza un único puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conectan, lo que simplifica la provisión de dispositivos.
- Siempre pruebe primero con un dispositivo para validar APN, servidor, transporte y comportamiento de reporte antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika TAT240 con los ajustes compartidos del servidor Plaspy ofrece un camino directo hacia un rastreo de activos fiable y visibilidad de eventos. Configurar el dispositivo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 permite que las posiciones y los eventos de manipulación aparezcan en los paneles de Plaspy, donde usted puede definir alertas, geocercas e intervalos de reporte para cubrir sus necesidades operativas.

Learn more about Plaspy and how the platform supports tracker integrations at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and parameter definitions verify details on the official Teltonika website https://www.teltonika-gps.com/ before applying commands in production.
