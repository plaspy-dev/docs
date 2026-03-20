---
slug: /thingsys/ts_g17w/configuration
id: ts_g17w-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17W Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el rastreador ThingSys TS-G17W e integración con Plaspy
keywords:
  - configuración ThingSys TS-G17W
  - configuración Plaspy TS-G17W
  - ajustes de servidor TS-G17W
  - configuración rastreador GPS TS-G17W
  - integración de rastreador Plaspy
  - configuración seguimiento de vehículos
  - guía configuración rastreador GPS
  - configuración gestor de flotas
  - guía instalación TS-G17W
  - ajustes servidor Plaspy
---

# ThingSys - Configuración del TS-G17W

Esta página describe la configuración pública disponible para usar el rastreador ThingSys TS-G17W con Plaspy. Resume los ajustes de servidor que Plaspy requiere, los pasos típicos de preparación y los comandos SMS públicos y flujos que se emplean habitualmente para provisionar este modelo en la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para procesar los reportes de los equipos. Los pasos en el lado del fabricante para el TS-G17W pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que siguen reflejan los comandos SMS de muestra proporcionados por ThingSys y preservan los marcadores de posición para credenciales APN cuando aplican.

## Visión general de la configuración

El objetivo de la configuración es preparar el TS-G17W para que envíe de forma fiable datos de ubicación y eventos a Plaspy, de modo que los dispositivos sean visibles en la plataforma para monitoreo, alertas y reproducción histórica.

- Configure el rastreador para usar el endpoint y puerto del servidor Plaspy para que los reportes GPRS lleguen a la plataforma.
- Proporcione las credenciales APN correctas y asegúrese de que la SIM del dispositivo tenga datos y servicio de SMS según sea necesario.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere elegir un transporte y guarde los ajustes.
- Valide la conectividad y confirme que el dispositivo reporte a Plaspy para que aparezca en el panel.
- Opcionalmente use comandos de verificación por SMS para comprobar la configuración cuando esté remoto o durante la instalación.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

## Requisitos típicos antes de la configuración

- Una tarjeta SIM válida con datos habilitados y capacidad de SMS si la configuración o verificación por SMS es necesaria.
- Energizar el TS-G17W y asegurarse de que el dispositivo esté instalado o accesible para la configuración inicial.
- Acceso al método de configuración de ThingSys que soporte la unidad (comandos SMS o la herramienta oficial del proveedor).
- Detalles del APN del operador móvil, incluyendo nombre del APN, usuario y contraseña si se requieren.
- Conocimiento de la contraseña por defecto del dispositivo cuando aplique (la configuración pública de ejemplo usa 123456 como contraseña por defecto).
- Cobertura de red para GPRS (o servicio SMS para verificación) en el área de instalación.

## Cómo se conecta este rastreador a Plaspy

El TS-G17W se configura para enviar su ubicación y eventos al endpoint y puerto compartidos de Plaspy para que Plaspy pueda procesar y mostrar la telemetría del dispositivo.

- El dispositivo envía reportes GPRS al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos y utiliza detección automática del protocolo.
- Las actualizaciones de ubicación, eventos de encendido y alarmas se entregan a Plaspy y se traducen en puntos en vivo y notificaciones.
- Plaspy presenta los datos del rastreador para monitoreo en tiempo real, reglas de geocerca y reproducción histórica de rutas.
- Donde la cobertura es limitada, se pueden usar modos de sondeo por SMS o trace para recuperar el estado del dispositivo y que Plaspy lo ingiera.

## Flujo típico de configuración

1. Acceda al método oficial de configuración ThingSys soportado para el TS-G17W (comandos SMS o la herramienta del fabricante).
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo acepte el equipo.
3. Establezca el puerto del servidor en 8888 para los reportes GPRS.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.
5. Configure las credenciales APN (nombre APN, usuario APN, contraseña APN) y guarde o aplique la configuración.
6. Aplique o guarde los cambios y reinicie el dispositivo si el firmware requiere reboot para que los ajustes tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo en Plaspy o usando comandos SMS de verificación cuando estén soportados.

## Comandos de configuración de ejemplo

La configuración pública de modelo para el TS-G17W describe la puesta a punto por SMS. Los comandos de ejemplo que siguen se presentan en el orden original y preservan los marcadores de posición y la contraseña por defecto cuando se proporcionó. Envíe estos mensajes SMS al número de la SIM del dispositivo según requiera el rastreador.

- Reset de fábrica inicial opcional (use solo si necesita un estado limpio):
```text
FORMAT
```
Nota: FORMAT se proporciona en la muestra como comando de reset de fábrica. Ejecute esto solo si es necesario un reseteo completo durante la configuración inicial.

- Establecer el APN del operador (reemplazar {{apn}} con el nombre APN del operador):
```text
apn123456 {{apn}}
```

- Establecer el usuario del APN (reemplazar {{apnu}} con el usuario APN si aplica):
```text
apnuser123456 {{apnu}}
```

- Establecer la contraseña del APN (reemplazar {{apnp}} con la contraseña APN si aplica):
```text
apnpasswd123456 {{apnp}}
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy:
```text
ip54.85.159.138 8888
```
Nota: Este comando configura el rastreador para reportar a la IP y puerto de Plaspy. Algunas instalaciones pueden permitir el dominio d.plaspy.com en lugar de la IP; siga la herramienta del fabricante o la guía de firmware para soporte de dominio.

- Verificar ajustes actuales usando el comando de comprobación del dispositivo:
```text
CXZT
```
Explicación de los marcadores de posición: {{apn}} es el nombre del APN del operador móvil; {{apnu}} es el usuario APN; {{apnp}} es la contraseña APN. Los comandos de muestra hacen referencia a la contraseña del dispositivo 123456 como valor por defecto cuando el proveedor la publicó; incluya el prefijo de contraseña en los formatos SMS si el dispositivo requiere autenticación antes de aceptar comandos.

## Notas de configuración

- Las variaciones de firmware y revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles. Siempre contraste con la documentación de ThingSys para su build de firmware.
- Decida entre UDP y TCP según las necesidades de la instalación; Plaspy acepta ambos y detectará automáticamente el protocolo del dispositivo.
- La configuración por SMS es útil para instalaciones remotas o sin interfaz, pero requiere que la SIM del dispositivo pueda recibir mensajes SMS.
- Conserve el orden de los comandos de APN y servidor cuando use SMS si la guía del proveedor especifica una secuencia.
- Mantenga la información de la contraseña por defecto a la mano durante el aprovisionamiento y considere cambiar las contraseñas del dispositivo según su política de seguridad, si el equipo lo permite.

## Por qué usar Plaspy con esta configuración

Usar el TS-G17W con Plaspy ofrece un camino sencillo hacia la visibilidad de la flota y el monitoreo basado en eventos. El diseño robusto del dispositivo y sus opciones de conectividad móvil lo hacen adecuado para flotas de vehículos y activos expuestos, mientras que Plaspy procesa sus reportes para ofrecer ubicación en tiempo real, alertas y seguimiento histórico que facilitan la supervisión operativa.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, cambios de firmware y comandos del fabricante, consulte la documentación oficial de ThingSys en https://www.thingsys.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
