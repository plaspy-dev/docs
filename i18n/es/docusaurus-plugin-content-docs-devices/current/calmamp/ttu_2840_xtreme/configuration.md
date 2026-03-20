---
slug: /calmamp/ttu_2840_xtreme/configuration
id: ttu_2840_xtreme-configuration
sidebar_label: Configuration
title: CalmAmp - TTU-2840 XTREME Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp TTU-2840 XTREME con ajustes de servidor Plaspy, comandos SMS y flujo práctico de instalación
keywords:
  - Configuración CalmAmp TTU-2840 XTREME
  - Instalación CalmAmp TTU-2840 XTREME
  - Configuración de servidor CalmAmp TTU-2840 XTREME
  - Configuración de rastreador GPS CalmAmp
  - Configuración TTU-2840 XTREME Plaspy
  - Integración de rastreadores con Plaspy
  - Configuración SMS para rastreadores GPS
  - Configuración CalmAmp PULS
  - Configuración de reglas PEG
  - Configuración plataforma de rastreo vehicular
---

# CalmAmp - TTU-2840 XTREME Configuración

Esta página documenta el contexto público de configuración para usar el CalmAmp TTU-2840 XTREME con Plaspy. Se enfoca en los ajustes prácticos del servidor, ejemplos de comandos SMS y los pasos típicos necesarios para apuntar el TTU-2840 XTREME al endpoint de Plaspy, de modo que el dispositivo pueda enviar ubicación y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TTU-2840 XTREME admite configuración por SMS y GPRS en la documentación pública, y esta página muestra cómo aplicar los valores públicos de Plaspy y las prácticas habituales para verificación y validación.

## Resumen de configuración

Este proceso prepara el TTU-2840 XTREME para comunicarse con la plataforma Plaspy estableciendo el APN del equipo, la dirección del servidor GPRS y el puerto, y luego validando que la unidad reporte correctamente. Mediante la interfaz de comandos SMS del dispositivo o las herramientas del fabricante, usted debe apuntar el rastreador a Plaspy para que los mensajes de ubicación y eventos lleguen a la plataforma para monitoreo.

- Configure el APN del operador móvil y, si aplica, las credenciales del APN para que el dispositivo pueda conectar datos.
- Establezca la dirección del servidor GPRS al endpoint de Plaspy para el envío de reportes.
- Configure el puerto del servidor al puerto único que usa Plaspy para todos los dispositivos compatibles.
- Reinicie o arranque el dispositivo si es necesario para aplicar los ajustes.
- Verifique la configuración del dispositivo y que los reportes lleguen a Plaspy para confirmar visibilidad y monitoreo de eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un TTU-2840 XTREME con batería cargada o la alimentación conectada.
- Una tarjeta SIM activa con plan de datos y el APN correcto del operador para GPRS o datos móviles.
- Acceso al método público de configuración del equipo, por ejemplo comandos por SMS o herramientas de aprovisionamiento del fabricante.
- Cobertura de red en una tecnología celular soportada por el dispositivo y confirmación de que GPRS o datos LTE están disponibles.
- El MID o identificador del dispositivo tal como lo devuelve el equipo cuando se consulta (usado en algunos flujos de configuración por SMS).

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el TTU-2840 XTREME envía datos de ubicación y eventos al endpoint del servidor Plaspy para que vehículos y activos sean visibles en la plataforma. El dispositivo se apunta a la dirección y puerto compartidos de Plaspy y puede usar UDP o TCP según el firmware o la preferencia del instalador. La detección automática de protocolo de Plaspy facilita la integración aceptando el protocolo que el dispositivo utilice.

- El equipo envía mensajes de posición y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- La comunicación puede usar UDP o TCP según la configuración del dispositivo y las condiciones de red
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere mensajes sin cambios de puerto por dispositivo
- Las reglas PEG y la lógica de alertas a bordo del TTU-2840 XTREME pueden generar reportes que se reenvían a Plaspy
- Los sistemas de aprovisionamiento por aire como PULS pueden ser usados por instaladores para gestionar ajustes cuando estén disponibles

## Flujo común de configuración

1. Acceda al método oficial de configuración del TTU-2840 XTREME, por ejemplo comandos SMS o herramientas de aprovisionamiento del proveedor como PULS.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP para el transporte si el dispositivo requiere una selección de transporte.
5. Aplique o guarde la configuración en el dispositivo usando el comando o la herramienta recomendada por el fabricante.
6. Reinicie o haga un reboot del rastreador si es necesario para aplicar los cambios de red y servidor.
7. Valide que el dispositivo está reportando a Plaspy comprobando los mensajes entrantes o usando el comando de verificación del equipo cuando esté disponible.

## Comandos de configuración de ejemplo

El TTU-2840 XTREME puede configurarse por SMS según la guía pública. El dispositivo espera que la ID sea el MID de 10 dígitos que responde al comando !R0. A continuación se muestran los comandos SMS públicos y su propósito. Mantenga los marcadores de posición cuando los reemplace por los valores de su operador.

1. Configurar el APN del operador
Envíe un SMS con la ID del equipo y el comando siguiente. Reemplace {{apn}} con el APN de su operador.

```
!RP,2306,0,{{apn}}
```

2. Configurar el nombre de usuario del APN (si se requiere)
Reemplace {{apnu}} con el usuario del APN que le proporcione su carrier.

```
!RP,2314,0,{{apnu}}
```

3. Configurar la contraseña del APN (si se requiere)
Reemplace {{apnp}} con la contraseña del APN que le proporcione su carrier.

```
!RP,2315,0,{{apnp}}
```

4. Apuntar el servidor GPRS a Plaspy por IP
Esto establece la IP del servidor al servidor público de Plaspy.

```
!RP,2319,0,54.85.159.138
```

5. Establecer el puerto del servidor al puerto compartido de Plaspy
Esto configura el puerto del dispositivo a 8888, que Plaspy utiliza para todos los equipos.

```
!RP,769,0,8888
```

6. Reiniciar el rastreador para aplicar ajustes
El reinicio suele ser necesario para aplicar cambios en la configuración de red y servidor.

```
!R3,70,0
```

7. Verificar configuración actual
Use el comando de verificación del equipo para leer los valores de configuración.

```
!RO
```

Notas sobre marcadores de posición e identificadores:
- {{apn}} es la cadena APN de su operador móvil.
- {{apnu}} y {{apnp}} son usuario y contraseña opcionales del APN; inclúyalos solo si su operador los requiere.
- El MID de 10 dígitos referenciado en algunos flujos CalmAmp se devuelve con el comando !R0 según la documentación pública.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los comandos SMS disponibles o los códigos de parámetros; confirme la sintaxis exacta del comando para su versión de firmware.
- El TTU-2840 XTREME admite configuración por SMS en materiales públicos, pero los instaladores pueden preferir las herramientas de aprovisionamiento de CalmAmp o las actualizaciones OTA cuando estén disponibles.
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador; Plaspy aceptará cualquiera y detectará el protocolo automáticamente.
- Confirme siempre que el APN, las credenciales del APN y el plan de datos estén activos antes de diagnosticar la conectividad con el servidor Plaspy.
- Después de aplicar los ajustes, un reinicio normalmente asegura que el nuevo servidor GPRS y el puerto se utilicen para las conexiones salientes.

## Por qué usar Plaspy con esta configuración

Usar el TTU-2840 XTREME con Plaspy ofrece un camino sencillo para ingresar datos de ubicación y eventos a una única plataforma de monitoreo. El endpoint compartido y el modelo de puerto único de Plaspy simplifican despliegues grandes al reducir la variación por dispositivo en la configuración del servidor, mientras que la detección automática de protocolo de la plataforma elimina la necesidad de especificar detalles de protocolo en muchos casos.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y guías del fabricante, verifique la información más reciente en el sitio de CalmAmp http://www.calamp.com/.
