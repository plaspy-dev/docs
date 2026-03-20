---
slug: /calmamp/lmu_2000/configuration
id: lmu_2000-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-2000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CalmAmp LMU-2000 y conectar el rastreador a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración CalmAmp LMU-2000
  - Instalación LMU-2000
  - Configuración de servidor CalmAmp
  - Comandos SMS LMU-2000
  - Integración Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - Rastreador para gestión de flotas
  - LMU-2000 OBD-II
  - Compatibilidad CalmAmp Plaspy
---

# CalmAmp - LMU-2000 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador CalmAmp LMU-2000 con Plaspy. Reúne los ajustes de servidor esenciales y los pasos prácticos que comúnmente se usan para apuntar un LMU-2000 a Plaspy, e incluye ejemplos de comandos SMS cuando están disponibles públicamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía como punto de partida y consulte la documentación del fabricante para variaciones específicas del dispositivo.

## Resumen de configuración

El objetivo de los pasos de configuración que siguen es preparar el LMU-2000 para que se comunique de forma fiable con Plaspy, comprobar que el dispositivo esté en línea y habilitar su visibilidad y monitoreo dentro de la plataforma Plaspy.

- Configure el APN y el transporte GPRS/SMS del dispositivo para garantizar conectividad celular.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los mensajes de ubicación y eventos lleguen a la plataforma.
- Establezca el puerto y el tipo de transporte (UDP o TCP) según exija la interfaz del dispositivo.
- Reinicie o aplique los cambios y valide que el dispositivo informe a Plaspy.
- Verifique que el dispositivo aparezca y envíe datos en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador, por lo que los dispositivos configurados para alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 serán direccionados hacia la plataforma Plaspy.

## Requisitos previos

- Un LMU-2000 con alimentación instalado físicamente o conectado para poder configurarlo.
- Una SIM activa con datos o capacidad SMS y las credenciales APN correctas del operador móvil.
- Acceso a un teléfono o herramienta de configuración que pueda enviar comandos SMS si usará configuración vía SMS.
- Acceso al método oficial de configuración del fabricante o herramienta de gestión (por ejemplo comandos SMS o sistemas de aprovisionamiento).
- Tener a mano los valores del servidor Plaspy: d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Saber si el dispositivo debe usar UDP o TCP en el puerto 8888 (algunos equipos requieren selección explícita).

## Cómo se conecta este rastreador a Plaspy

El CalmAmp LMU-2000 se configura para enviar mensajes de ubicación y eventos al endpoint y puerto del servidor Plaspy. Los mensajes viajan por el transporte soportado por el dispositivo (GPRS/UDP o SMS cuando aplique) y son ingeridos por Plaspy, que reconoce automáticamente el protocolo del equipo.

- El dispositivo se apunta a d.plaspy.com o directamente a 54.85.159.138 como servidor GPRS.
- Los mensajes se envían al puerto 8888 donde Plaspy recibe el tráfico de los rastreadores.
- El LMU-2000 puede usar UDP o TCP como transporte; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Eventos, fijaciones GPS y mensajes de estado reportados por el LMU-2000 se procesan para que el dispositivo sea visible en la plataforma Plaspy.
- Se pueden usar métodos de gestión OTA o comandos por SMS para actualizar parámetros y confirmar la configuración.

## Flujo típico de configuración

1. Acceda al método oficial de configuración CalmAmp para su dispositivo, por ejemplo comandos SMS o el sistema de aprovisionamiento del fabricante.
2. Asegúrese de que el dispositivo tenga una SIM válida y el APN configurado para usar GPRS o SMS como transporte.
3. Ingrese la información del servidor de Plaspy: use el dominio d.plaspy.com o la IP 54.85.159.138 como dirección del servidor.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Guarde o aplique los cambios en el dispositivo usando el método del fabricante.
6. Reinicie o haga un reboot del rastreador si es necesario para que los nuevos ajustes surtan efecto.
7. Valide que el dispositivo informe a Plaspy revisando el estado del equipo y los mensajes entrantes en la plataforma.

Si utiliza comandos de configuración por SMS, realice el paso 1 enviando los mensajes SMS apropiados desde un número autorizado según lo requiera el dispositivo.

## Ejemplos de comandos de configuración

El LMU-2000 puede configurarse por SMS. Los siguientes comandos SMS públicos se usan comúnmente para establecer APN, servidor y puerto. El dispositivo responderá con un MID (ID de 10 dígitos) al comando de consulta; use ese ID cuando el fabricante lo solicite.

Note: Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator values.

- Query device ID (returns MID 10 digits)
```text
!R0
```

- Set the operator APN
```text
!RP,2306,0,{{apn}}
```

- Set the APN username (if required)
```text
!RP,2314,0,{{apnu}}
```

- Set the APN password (if required)
```text
!RP,2315,0,{{apnp}}
```

- Set the GPRS server to Plaspy by IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker to apply changes (reboot is typically required for settings to take effect)
```text
!R3,70,0
```

- Check current settings on the device
```text
!RO
```

Mantenga el orden de los comandos al aplicarlos: configure primero el APN y las credenciales, luego el servidor y el puerto, y finalmente reinicie. Si su dispositivo o firmware admite el nombre de dominio en lugar de la IP, puede usar d.plaspy.com donde el equipo soporte la configuración por hostname.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar nombres de parámetros y códigos de comando; verifique los comandos según la versión de firmware de su equipo.
- El LMU-2000 soporta configuración vía SMS y también puede ser gestionado por CalAmp provisioning systems; siga el método apropiado para su despliegue.
- Puede configurar el servidor por dominio d.plaspy.com o por la IP 54.85.159.138; ambos apuntan a la ingestión de Plaspy en el puerto 8888.
- Elija UDP o TCP según la capacidad del dispositivo; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Tenga listos los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} para completar con las credenciales del operador; omita los comandos de usuario o contraseña si no son necesarios.

## Por qué usar Plaspy con esta configuración

Usar el CalmAmp LMU-2000 con Plaspy ofrece una ruta sencilla hacia la visibilidad de la flota y el monitoreo operativo. El diseño compacto del LMU-2000, su interfaz OBD-II y su motor de eventos, junto con la ingestión centralizada de Plaspy, facilitan capturar ubicación, eventos básicos del vehículo y alertas para flujos de trabajo de gestión de flotas.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Device-specific configuration steps, firmware behavior, and manufacturer details can change over time, so please verify the latest information with the manufacturer at http://www.calamp.com/ before applying large scale configuration changes.
