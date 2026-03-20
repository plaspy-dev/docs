---
slug: /teltonika/fmc880/configuration
id: fmc880-configuration
sidebar_label: Configuration
title: Teltonika - FMC880 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Teltonika FMC880 a Plaspy usando la configuración de servidor compartida
keywords:
  - Configuración Teltonika FMC880
  - Configuración FMC880 Plaspy
  - Configuración servidor Teltonika
  - Configuración rastreador GPS FMC880
  - Configuración dispositivo Plaspy
  - Configuración rastreo vehicular
  - Configuración SMS FMC880
  - Integración Teltonika FMC880
  - Configuración plataforma GPS
  - Configuración rastreador de flota
---

# Teltonika - FMC880 Configuración

Esta página describe el contexto público de configuración para usar el Teltonika FMC880 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los pasos habituales de preparación y muestra el comando público de ejemplo para apuntar un FMC880 al endpoint de Plaspy. El FMC880 es un rastreador robusto montado en batería, con 4G LTE Cat 1 y respaldo 2G, GNSS dual banda L1 L5 y soporte BLE para sensores; es compatible con Plaspy desde el primer momento.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika o los comandos SMS que utilice. Cuando estén disponibles, en esta página se incluye el comando público en estilo SMS que los dispositivos Teltonika suelen aceptar para la configuración básica de parámetros.

## Resumen de la configuración

El objetivo de esta configuración es preparar el FMC880 para que se comunique de forma fiable con Plaspy y así la ubicación del dispositivo y la telemetría de sensores aparezcan en la plataforma. La configuración se centra en establecer el APN del dispositivo y el endpoint y transporte del servidor Plaspy, validar la conectividad y confirmar que el rastreador informe correctamente a Plaspy.

- Configure el APN del dispositivo y los valores de autenticación para que el rastreador tenga una conexión de datos celulares funcional.
- Apunte el FMC880 al dominio o IP del servidor Plaspy y establezca el puerto acordado para que la telemetría se enrute a Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) si el equipo lo requiere y guarde la configuración.
- Valide que el dispositivo se conecta y es visible en Plaspy; Plaspy detecta automáticamente el protocolo del rastreador.
- Use el comando de parámetros de Teltonika de ejemplo más abajo como punto de partida y adáptelo según su firmware y necesidades de despliegue.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones al servidor

## Requisitos típicos antes de la configuración

- Un FMC880 con energía, correctamente montado en batería o conectado al vehículo y listo para configurar.
- Una SIM celular activa con un APN compatible y servicio de datos para la variante de dispositivo que va a desplegar.
- Acceso al método oficial de configuración Teltonika para su equipo, como comandos SMS o el software de configuración Teltonika que coincida con el firmware del dispositivo.
- Conocimiento de su APN, nombre de usuario APN y contraseña APN si el operador móvil los requiere.
- Un método para recibir las respuestas del dispositivo para verificación, por ejemplo retroalimentación por SMS o registros de conexión desde la herramienta Teltonika.
- Opcionalmente, un entorno de pruebas o un dispositivo de repuesto para validar ajustes antes de un despliegue masivo.

## Cómo se conecta este rastreador a Plaspy

Una vez que el FMC880 esté configurado con un APN funcional y el endpoint de Plaspy, enviará correcciones GNSS y la telemetría de sensores disponible a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión en el puerto estándar y determina automáticamente el protocolo correcto del rastreador para que los dispositivos aparezcan en la plataforma sin necesidad de seleccionar el protocolo por cada equipo.

- El rastreador informa posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las consideraciones de red.
- Plaspy realiza la detección automática del protocolo para interpretar los datos entrantes del FMC880.
- Los eventos del dispositivo y las lecturas de sensores se reenvían a Plaspy para visualización, alertas e historial.
- Una conexión y reporte exitosos harán que el FMC880 sea visible y manejable en Plaspy una vez validados.

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración Teltonika apropiado para su firmware FMC880, como la configuración por comandos SMS o la herramienta de configuración Teltonika.
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en el campo de host del servidor.
3. Configure el puerto de comunicación en 8888, que es el puerto que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere una selección de transporte.
5. Proporcione el APN y cualquier credencial APN necesaria para su SIM para que el dispositivo pueda establecer datos celulares.
6. Aplique o guarde la configuración y reinicie el rastreador si su flujo de trabajo o firmware exige un reinicio para activar los cambios.
7. Valide que el dispositivo informa a Plaspy comprobando el estado de conectividad del equipo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

La configuración pública del FMC880 puede realizarse usando un comando setparam en estilo Teltonika. El siguiente ejemplo muestra el formato público del comando que puede usar para establecer los valores del APN y apuntar el dispositivo a Plaspy. Reemplace los marcadores con los datos de su operador.

- Ejemplo de comando Teltonika setparam

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores
  - {{apn}} es el APN de la tarjeta SIM proporcionado por su operador móvil.
  - {{apnu}} es el nombre de usuario APN si lo requiere su operador; déjelo en blanco u omítalo si no es necesario.
  - {{apnp}} es la contraseña APN si la requiere su operador; déjelo en blanco u omítalo si no es necesario.
  - Los campos 2004 y 2005 se configuran con el dominio y puerto del servidor Plaspy d.plaspy.com y 8888 respectivamente.
  - El parámetro 2006 se incluye en el comando público; consulte la documentación Teltonika para el mapeo exacto relativo al transporte o comportamiento según su firmware.

Nota: Los números de parámetro como 2001 2002, etc., son identificadores de parámetros Teltonika usados en el comando del dispositivo. Confirme el mapeo exacto de parámetros y cualquier parámetro adicional requerido con la documentación Teltonika de su versión de firmware.

## Notas sobre la configuración

- El mapeo de parámetros Teltonika y los formatos admitidos por SMS o por la herramienta pueden variar según la versión de firmware y la revisión de hardware; siempre verifique el significado de los parámetros con la documentación oficial Teltonika para su dispositivo.
- Puede configurar el servidor usando el dominio d.plaspy.com o la IP 54.85.159.138; el uso del dominio permite enrutamiento basado en DNS mientras que la IP se ofrece como alternativa explícita.
- Seleccione UDP o TCP en función de la fiabilidad de su red y las indicaciones en la herramienta Teltonika o las notas de firmware; el dispositivo puede requerir una bandera de transporte explícita.
- Los comandos setparam vía SMS son comúnmente compatibles con dispositivos Teltonika, pero confirme el soporte de comandos SMS y la sintaxis requerida para la variante FMC880 que tenga.
- Aplique y guarde los cambios de configuración, luego reinicie o corte y restaure la alimentación del dispositivo si su flujo de trabajo o firmware exige un reinicio para activar los nuevos parámetros.

## Por qué usar Plaspy con esta configuración

Usar el FMC880 con Plaspy ofrece a los operadores visibilidad fiable de vehículos y activos junto con monitorización ambiental mediante sensores BLE. El diseño robusto del FMC880 y su resistencia celular complementan el rastreo centralizado, las reglas de eventos y los informes de Plaspy para proporcionar supervisión operativa en flotas, servicios de alquiler y activos remotos. Apuntar el FMC880 al endpoint de servidor compartido de Plaspy y confirmar el APN y la configuración de transporte es una forma directa de poner a los dispositivos a reportar en la plataforma.

Para más información sobre Plaspy e integraciones de dispositivos soportados visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware y referencias de parámetros Teltonika verifique la documentación actual en https://www.teltonika-gps.com/ ya que los métodos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
