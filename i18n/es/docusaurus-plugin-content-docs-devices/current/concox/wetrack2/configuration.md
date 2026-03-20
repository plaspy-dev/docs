---
slug: /concox/wetrack2/configuration
id: wetrack2-configuration
sidebar_label: Configuration
title: Concox - WeTrack2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox WeTrack2 para uso con Plaspy en seguimiento en tiempo real
keywords:
  - Concox WeTrack2 configuración
  - Concox WeTrack2 instalación
  - WeTrack2 configuración Plaspy
  - WeTrack2 configuración de servidor
  - configuración rastreador GPS Concox
  - WeTrack2 configuración por SMS
  - WeTrack2 ajustes APN
  - configuración rastreador vehicular
  - configuración seguimiento de flotas
  - rastreador GPS Plaspy
---

# Concox - Configuración de WeTrack2

Esta página recopila la información pública y práctica necesaria para configurar un rastreador Concox WeTrack2 con Plaspy. Aquí encontrará los pasos habituales para apuntar un dispositivo WeTrack2 hacia Plaspy y permitir que el equipo envíe posiciones y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo a continuación provienen de instrucciones públicas de configuración por SMS de Concox y muestran un flujo común para ajustar APN, servidor, temporizadores y modo GPRS mediante SMS.

## Resumen de configuración

Configurar un WeTrack2 para Plaspy prepara el dispositivo para establecer conexión de datos móviles y reportar posiciones GNSS, eventos y estados a Plaspy. El objetivo principal es establecer el APN y el endpoint del servidor, habilitar el reporte por GPRS y verificar que el dispositivo aparezca en la plataforma.

- Apuntar el dispositivo a los ajustes del servidor Plaspy para que envíe telemetría al endpoint correcto.  
- Configurar el APN del operador y el modo de datos para que el rastreador use datos móviles.  
- Ajustar intervalos de actualización y activar GPRS para que las posiciones lleguen con frecuencia a Plaspy.  
- Verificar que el dispositivo reporte y sea visible en Plaspy después de la configuración.  
- Registrar los comandos SMS y los pasos de verificación usados durante la configuración.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- Soporte de transporte UDP o TCP en el puerto 8888 (configure UDP o TCP si el dispositivo requiere seleccionar el transporte)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos habituales

- Un dispositivo WeTrack2 alimentado e instalado o accesible para configuración.  
- Una tarjeta SIM activa con plan de datos móviles y capacidad de SMS insertada en el dispositivo.  
- Capacidad para enviar comandos SMS al rastreador desde un número autorizado si se utiliza configuración por SMS.  
- Información del APN proporcionada por el operador móvil para la conectividad GPRS.  
- Acceso a la documentación de Concox o a las herramientas del proveedor para flujos de configuración alternativos si no desea usar SMS.  
- Conocimientos básicos para verificar el reporte del dispositivo en Plaspy una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

El WeTrack2 puede configurarse para enviar posiciones GNSS, actualizaciones de estado y notificaciones de eventos al endpoint compartido de Plaspy usando el puerto compartido. Una vez establecidos el servidor y el APN, el dispositivo transmite datos de ubicación y telemetría para que Plaspy los presente en tiempo real.

- El rastreador se configura para reportar al endpoint compartido de Plaspy (d.plaspy.com) o a la IP del servidor Plaspy en el puerto 8888.  
- El dispositivo usa datos móviles (GPRS) para enviar posiciones y telemetría a Plaspy después de habilitar APN y GPRS.  
- Plaspy recibe posiciones GNSS y disparadores de eventos como estado de encendido y alertas de movimiento.  
- La plataforma convierte la telemetría entrante en mapas en vivo, alertas e informes históricos para monitoreo operativo.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint funcionan para los dispositivos soportados.

## Flujo común de configuración

1. Acceda al método oficial de configuración Concox que planea usar, normalmente comandos SMS para WeTrack2 o la herramienta del proveedor recomendada.  
2. Configure el APN del operador en el dispositivo usando el comando APN con los valores de su operador.  
3. Introduzca el dominio d.plaspy.com o la IP 54.85.159.138 como servidor GPRS y establezca el puerto 8888.  
4. Elija transporte UDP o TCP si la configuración del dispositivo requiere seleccionar el transporte.  
5. Habilite el reporte por GPRS y ajuste el intervalo de actualización del dispositivo (por ejemplo 60 segundos) para que envíe actualizaciones regulares.  
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios tengan efecto.  
7. Verifique que el dispositivo reporte a Plaspy y aparezca en su cuenta; revise posiciones entrantes y mensajes de estado.

## Comandos de ejemplo para configuración

El WeTrack2 comúnmente soporta configuración vía SMS. Los comandos siguientes se extraen de las instrucciones públicas de configuración por SMS de Concox. Envíe cada comando como un SMS al número del dispositivo en el orden indicado durante la configuración inicial. Marque cualquier paso de restablecimiento como opcional y úselo solo cuando sea necesario.

1. Restablecimiento de fábrica opcional (usar solo si desea restaurar valores predeterminados antes de configurar):
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0:
```
GMT,E,0#
```

3. Configurar el APN del operador (reemplazar los marcadores con los valores de su operador):
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} es la cadena APN de su operador de red.  
- {{apnu}} y {{apnp}} son usuario y contraseña de APN opcionales si su operador los requiere.

4. Configurar el servidor GPRS por dominio (apunta el dispositivo al dominio de Plaspy en el puerto 8888):
```
SERVER,1,d.plaspy.com,8888,0#
```

5. O configurar el servidor GPRS por IP (opción alternativa usando la IP del servidor Plaspy):
```
SERVER,0,54.85.159.138,8888,0#
```

6. Establecer el intervalo de actualización a 60 segundos (dos variantes comunes):
```
TIMER,60#
```
o
```
TIMER,60,60#
```

7. Activar el modo GPRS para que el dispositivo transmita por datos móviles:
```
GPRSON,1#
```

8. Verificar los parámetros actuales de GPRS y servidor:
```
GPRSSET#
```

Nota: Mantenga el orden anterior al realizar la configuración inicial. Use el comando APN con sus valores específicos antes de activar GPRS. Si usa el comando SERVER con la variante de dominio, el dispositivo resolverá d.plaspy.com; la variante por IP es un método alternativo.

## Notas de configuración

- La configuración por SMS es común para WeTrack2, pero pueden existir herramientas del proveedor o métodos de configuración directa; siga el método recomendado por su proveedor.  
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones soportadas; confirme siempre los formatos de comando con la documentación actual de Concox si está disponible.  
- Elija UDP o TCP según las opciones del dispositivo y el comportamiento de la red; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.  
- Verifique las credenciales de APN con su operador móvil e incluya usuario y contraseña solo cuando sean requeridos.  
- Tras guardar los ajustes, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto.

## Por qué usar Plaspy con esta configuración

Configurar el WeTrack2 para que reporte en Plaspy ofrece visibilidad centralizada de ubicación, estado de encendido, alertas de movimiento y otra telemetría para flotas de scooters, motocicletas y vehículos ligeros. Usar los ajustes del servidor compartido de Plaspy simplifica el despliegue en muchos dispositivos, ya que todos los equipos soportados usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos como WeTrack2, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y la guía oficial de Concox, verifique los detalles de configuración en el sitio del fabricante https://www.iconcox.com/.
