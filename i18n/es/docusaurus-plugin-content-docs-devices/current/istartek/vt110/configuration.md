---
slug: /istartek/vt110/configuration
id: vt110-configuration
sidebar_label: Configuration
title: iStartek - VT110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del iStartek VT110 y cómo conectarlo a Plaspy con la configuración de servidor compartido
keywords:
  - configuración iStartek VT110
  - instalación iStartek VT110
  - configuración VT110 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración servidor VT110
  - configuración rastreador iStartek
  - comandos SMS VT110
  - configuración rastreo vehicular
  - instalación seguimiento de flota
  - integración rastreador GPS Plaspy
---

# iStartek - Configuración del VT110

Esta página describe el contexto público de configuración para usar el rastreador iStartek VT110 con Plaspy. Se centra en los ajustes prácticos del servidor y del equipo necesarios para que el VT110 reporte posición y eventos a Plaspy, sin sustituir la documentación del fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el método de instalación y las herramientas del proveedor. Cuando están disponibles, incluimos los comandos SMS de configuración del VT110 que se usan comúnmente para establecer el servidor, el APN, los intervalos y para verificar parámetros.

## Visión general de la configuración

El objetivo de la configuración es preparar el VT110 para que comunique de forma confiable con la plataforma Plaspy, envíe datos de ubicación y eventos, y aparezca en la interfaz de Plaspy para monitoreo y reportes en tiempo real.

- Configure los parámetros de GPRS y del servidor para que el dispositivo envíe datos a Plaspy.
- Establezca intervalos de reporte acorde con sus necesidades de monitoreo y consumo de red.
- Verifique la conectividad móvil y los ajustes APN necesarios para la SIM instalada.
- Valide que el dispositivo sea visible y esté reportando correctamente en Plaspy después de la configuración.
- Tenga en cuenta el firmware y las instrucciones del fabricante al aplicar los ajustes.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el VT110:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte mediante UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

Estos valores son los puntos de conexión compartidos que Plaspy proporciona para los rastreadores GPS compatibles y deben ingresarse exactamente como se muestran en el método de configuración del VT110 que utilice.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM 2G compatible instalada y activada para datos GPRS y SMS si va a usar configuración por SMS.
- Acceso al lugar de instalación del VT110 y alimentación, o una batería interna cargada para configuración segura.
- Familiaridad con el método de configuración del fabricante para el VT110, como comandos SMS o software del proveedor.
- Información APN válida del operador móvil que presta servicio a la SIM.
- Capacidad para recibir y enviar SMS desde el número autorizado que provisionará el rastreador si usa comandos SMS.

## Cómo se conecta este rastreador a Plaspy

El VT110 se configura para enviar mensajes periódicos de ubicación y eventos al endpoint y puerto compartido de Plaspy, de modo que la plataforma pueda mostrar ubicación en vivo, alertas y datos históricos.

- El equipo envía fijaciones de posición GNSS y basadas en estaciones GSM a Plaspy en los intervalos configurados.
- Se reporta telemetría como kilometraje, rumbo, eventos ACC (encendido) y señales de alarma al endpoint de Plaspy.
- Plaspy recibe la conexión entrante en el puerto 8888 y determina automáticamente el protocolo del dispositivo.
- Una vez configurados el servidor y el APN, el rastreador aparecerá en Plaspy para monitoreo, alertas y reportes.
- Puede seleccionar transporte UDP o TCP en el dispositivo si es necesario; Plaspy admite ambos y detecta el protocolo de forma automática.

## Flujo típico de configuración

1. Acceda al método oficial de configuración iStartek para el VT110 (comandos SMS o herramienta del proveedor) según las instrucciones del equipo.
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija transporte UDP o TCP en el dispositivo si solicita selección de transporte.
5. Configure el APN para la SIM instalada y ajuste la autenticación del operador si es necesario.
6. Aplique o guarde la configuración y reinicie el VT110 si el dispositivo requiere reboot para activar los cambios.
7. Valide que el equipo reporte a Plaspy revisando el estado del dispositivo en la plataforma y usando el comando PARAM para comprobar parámetros si está disponible.

## Comandos de configuración de ejemplo

El VT110 admite configuración por SMS. A continuación se muestran comandos SMS públicos que se usan comúnmente, en el orden típico de aplicación. Envíe cada comando como SMS desde el número autorizado al rastreador.

1. Restablecimiento de fábrica opcional (usar solo cuando sea necesario)
```text
FACTORY#
```

2. Establecer la zona horaria a UTC+0
```text
GMT,E,0#
```

3. Configurar el APN del operador
```text
APN,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}#
```
- Explicación: Reemplace [apn] por el APN de su operador móvil. Si su operador requiere usuario y contraseña, incluya [apnu] y [apnp] respectivamente. Mantenga el formato de los marcadores si usa una herramienta de aprovisionamiento que sustituya valores.

4. Establecer el servidor GPRS utilizando el dominio y puerto de Plaspy (preferido, más legible)
```text
SERVER,1,d.plaspy.com,8888#
```

5. Alternativa: establecer el servidor GPRS usando la IP y el puerto de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de reporte a cada 60 segundos
```text
TIMER,60#
```

7. Verificar parámetros actuales
```text
PARAM#
```

Nota: Preserve el símbolo almohadilla (#) al final cuando envíe comandos SMS. Use la forma de DOMINIO (d.plaspy.com) para un mantenimiento más sencillo; la forma con IP se ofrece como alternativa.

## Notas de configuración

- La configuración por SMS es comúnmente soportada en el VT110; verifique si su firmware exige SMS o una herramienta del proveedor antes de proceder.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o añadir funciones; confirme siempre la compatibilidad de comandos con la revisión de su dispositivo.
- Elija TCP o UDP según sus preferencias de red; Plaspy admite ambos y detectará automáticamente el protocolo entrante en el puerto 8888.
- Use el dominio d.plaspy.com cuando sea posible para permitir que la plataforma gestione cambios de IP en el backend; ingrese la IP solo si su entorno restringe DNS.
- Al aplicar comandos de restablecimiento de fábrica, consíderelos opcionales y úselos únicamente para solución de problemas o aprovisionamiento inicial según lo recomiende el fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el VT110 para reportar a Plaspy ofrece a gerentes de flota y operadores visibilidad confiable de la ubicación del vehículo, eventos de viaje y alarmas mediante un punto de servidor compartido. La combinación de posicionamiento GNSS y por estaciones GSM, junto con intervalos de reporte configurables, ayuda a equilibrar la puntualidad de las actualizaciones con el uso de red para el monitoreo operativo y la respuesta a incidentes.

Para saber más sobre Plaspy e integraciones soportadas visite https://www.plaspy.com. Para comandos específicos más recientes, notas de firmware e información de hardware, verifique los detalles con el fabricante en https://istartek.com/ ya que los métodos de instalación y el comportamiento del firmware pueden cambiar con el tiempo.
