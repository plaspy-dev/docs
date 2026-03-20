---
slug: /xirgo/xt_6200/configuration
id: xt_6200-configuration
sidebar_label: Configuration
title: Xirgo - XT-6200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT-6200 para conectarlo al servidor Plaspy d.plaspy.com con puerto 8888 y detección automática de protocolo
keywords:
  - Xirgo XT 6200
  - Configuración XT 6200
  - Configurar rastreador Xirgo
  - XT 6200 Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de activos
  - Configuración seguimiento de vehículos
  - Configuración servidor Plaspy
  - Comandos SMS XT 6200
  - Ajustes APN del rastreador
---

# Xirgo - XT-6200 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Xirgo XT-6200 con Plaspy. Reúne los ajustes de servidor y la guía práctica que necesitará para apuntar el XT-6200 a la plataforma Plaspy, de modo que el dispositivo pueda reportar ubicación y estado para monitoreo y registro histórico.

Plaspy utiliza una configuración de servidor compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos concretos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT-6200 admite configuración por SMS como se muestra en los comandos de ejemplo más abajo, y también ofrece interfaces como serie y USB que los instaladores pueden usar según su flujo de trabajo.

## Resumen de configuración

El objetivo de esta configuración es preparar el XT-6200 para que establezca una sesión de datos y envíe reportes a Plaspy en el endpoint de la plataforma. Esto incluye configurar el APN del dispositivo (si su SIM lo requiere), ajustar el endpoint del servidor Plaspy y validar que los mensajes lleguen correctamente a la plataforma.

- Configurar el APN del operador para que el dispositivo pueda abrir sesión de datos si la SIM lo requiere
- Establecer la dirección o dominio del servidor GPRS para que el XT-6200 envíe telemetría a Plaspy
- Elegir el transporte y el puerto para que los paquetes lleguen al endpoint de Plaspy
- Validar la conectividad y confirmar que el dispositivo aparezca en los reportes de Plaspy
- Usar SMS o las herramientas del proveedor según la preferencia del instalador

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del dispositivo automáticamente cuando el rastreador envíe datos al servidor.

## Requisitos típicos antes de la instalación

- Una unidad XT-6200 alimentada y accesible con batería adecuada o alimentación externa
- Una tarjeta SIM con plan de datos activo y capacidad de SMS si va a usar comandos SMS para configurar el equipo
- Datos del APN del operador de su SIM (nombre del APN y, opcionalmente, usuario y contraseña)
- Acceso al método de configuración del fabricante o a la cadena de herramientas aprobada por el proveedor para el XT-6200
- Verificaciones básicas de conectividad como señal celular y visibilidad GPS en el sitio de instalación
- Permiso para enviar comandos SMS al número telefónico del dispositivo si se emplea configuración por SMS

## Cómo se conecta este rastreador a Plaspy

El XT-6200 se configura para reportar datos de ubicación y estado a la plataforma Plaspy enviando paquetes GPRS o mensajes TCP/UDP al endpoint y puerto compartido de Plaspy. Plaspy recibe los datos en el puerto 8888 y automáticamente identifica el protocolo del rastreador para interpretar y mostrar la información en la plataforma.

- El dispositivo envía telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Use transporte UDP o TCP según la preferencia del instalador o la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo entrante para parsear los mensajes
- Una conexión exitosa permite a Plaspy mostrar ubicación en tiempo real y reportes de eventos
- La visibilidad en la plataforma facilita el monitoreo operativo y la reproducción histórica

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Xirgo, como los comandos SMS del proveedor o el software del fabricante
2. Introduzca el servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)
4. Seleccione UDP o TCP en el rastreador si el dispositivo requiere elegir el transporte
5. Configure los valores APN del operador para que el dispositivo pueda establecer conectividad GPRS si es necesario
6. Aplique o guarde la configuración y reinicie el dispositivo si el XT-6200 requiere un reboot para que los cambios surtan efecto
7. Valide que el dispositivo esté reportando a Plaspy comprobando la presencia del rastreador en la plataforma y confirmando mensajes entrantes

## Ejemplo de comandos de configuración

El XT-6200 permite configuración por SMS. El fabricante proporciona comandos SMS públicos para establecer el APN y el servidor GPRS. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden indicado.

- Configure el APN del operador. Reemplace los marcadores con los valores de su operador:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explicación de los marcadores
- {{apn}} es el nombre del APN proporcionado por el operador móvil
- {{apnu}} es el usuario del APN cuando el operador lo solicita; si no aplica, dejar en blanco
- {{apnp}} es la contraseña del APN cuando el operador lo solicita; si no aplica, dejar en blanco

- Configure el servidor GPRS a Plaspy. Esto apunta el dispositivo a Plaspy usando el puerto 8888 y la IP del servidor:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```

Notas
- Envíe primero el comando de APN y luego el comando de servidor GPRS para asegurar que el dispositivo pueda abrir una sesión de datos.
- Estos comandos son los comandos SMS públicos extraídos de la documentación del fabricante y se muestran en el orden proporcionado por el fabricante.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el formato exacto de los comandos y su comportamiento; confirme siempre la sintaxis correcta para la revisión de firmware instalada.
- Cuando esté disponible, use la herramienta del fabricante o el servicio de configuración para instalaciones masivas o de campo; el SMS es útil para dispositivos individuales o actualizaciones remotas.
- Elija UDP o TCP según la fiabilidad de la red y las necesidades de la instalación; Plaspy acepta ambos y detectará el protocolo.
- Asegúrese de que las credenciales APN sean correctas para la SIM y permitan conectividad de datos; una configuración APN incorrecta impedirá la conexión GPRS.
- Todos los dispositivos en Plaspy usan el puerto 8888, por lo que la configuración del puerto del servidor es uniforme entre los rastreadores soportados.

## Por qué usar Plaspy con esta configuración

Configurar el Xirgo XT-6200 para reportar a Plaspy ofrece un camino sencillo para centralizar la telemetría remota de activos en una única plataforma de monitoreo. Con el endpoint del servidor Plaspy y el puerto compartido configurados en el dispositivo, las organizaciones obtienen visibilidad de la ubicación y la actividad del equipo, lo que facilita la gestión operativa y la supervisión de activos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para conocer los comandos específicos más recientes, el comportamiento del firmware y los detalles del fabricante verifique la documentación oficial de Xirgo en https://xirgo.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
