---
slug: /teltonika/fmb150/configuration
id: fmb150-configuration
sidebar_label: Configuration
title: Teltonika - FMB150 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para preparar el Teltonika FMB150 para usar con Plaspy, incluye ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMB150
  - Instalación Teltonika FMB150
  - Configuración FMB150 Plaspy
  - Configuración servidor Teltonika FMB150
  - Configuración rastreador GPS FMB150
  - Configuración APN Teltonika FMB150
  - Comando SMS Teltonika FMB150
  - Configuración seguimiento flota FMB150
  - Configuración plataforma GPS Teltonika
  - Seguimiento datos CAN FMB150
---

# Teltonika - Configuración del FMB150

Esta página documenta el contexto público de configuración para usar el rastreador Teltonika FMB150 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera, explica los pasos prácticos de configuración e incluye un comando de ejemplo que se usa habitualmente para enviar parámetros básicos al equipo. Use esta guía para preparar el rastreador y que quede visible y conectado en Plaspy, manteniendo a mano la documentación del fabricante para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor, por lo que debe seguir la documentación de Teltonika y el método de configuración que utilice al aplicar los valores mostrados aquí.

## Resumen de la configuración

El proceso de configuración prepara al FMB150 para comunicarse con Plaspy, verifica la conectividad sobre la red móvil y asegura que el equipo envíe correctamente los datos al endpoint del servidor de Plaspy. El comando de ejemplo público que aparece abajo muestra cómo se suelen enviar parámetros básicos a dispositivos Teltonika usando IDs de parámetros y marcadores.

- Configure el APN de la red y, si aplica, las credenciales APN para que el rastreador pueda usar datos GPRS.
- Apunte el dispositivo al endpoint del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) y confirme que el dispositivo use el puerto compartido de Plaspy.
- Guarde y aplique la configuración, luego verifique que el dispositivo aparezca y reporte en Plaspy.
- Use SMS o la herramienta de configuración de Teltonika según sea apropiado para su instalación y versión de firmware.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo del rastreador de forma automática cuando el equipo se conecte.

## Requisitos típicos antes de la configuración

- El dispositivo debe tener alimentación y ser accesible para configurarlo por SMS o mediante la herramienta oficial de configuración.
- Una tarjeta SIM válida con un APN de datos móviles funcional para GPRS, ya que el FMB150 se comunica por redes 2G GPRS.
- Conocimiento del APN correcto y, si procede, del usuario y la contraseña del APN del operador de la SIM.
- Acceso a la documentación de configuración de Teltonika o al mapeo de parámetros para confirmar los IDs de parámetros según la revisión de firmware.
- Un método para probar la conectividad del equipo, por ejemplo verificando la aparición del dispositivo en Plaspy tras la configuración o usando mensajes de respuesta del dispositivo si están disponibles.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMB150 envía posición y datos del equipo al endpoint y puerto compartido de Plaspy para que el dispositivo sea visible y manejable en la plataforma. Plaspy recibe las conexiones entrantes y aplica detección automática de protocolo para interpretar los mensajes del rastreador.

- El rastreador se configura para apuntar a d.plaspy.com (o a la IP del servidor Plaspy) y usar el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP según las opciones de su equipo.
- Tras la configuración, el dispositivo establece una sesión GPRS e inicia la conexión al endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y enruta la telemetría hacia la plataforma para el seguimiento y la generación de eventos.
- La validación del reporte se realiza comprobando el estado del dispositivo y los mensajes entrantes en Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante para el FMB150 (comando SMS, Teltonika Configurator u otra herramienta soportada).
2. Ingrese la dirección del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo correspondiente de servidor/host.
3. Ajuste el puerto del servidor del dispositivo a 8888 para coincidir con el puerto compartido de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure los parámetros del APN y las credenciales APN necesarias para la conectividad GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si la herramienta o el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando la conexión del equipo y la telemetría dentro de la plataforma Plaspy.

## Comandos de configuración de ejemplo

El siguiente ejemplo es un comando público estilo Teltonika usado para establecer parámetros básicos, incluidos marcadores para el APN y los valores del servidor Plaspy. Reemplace los marcadores con los datos del APN de su operador antes de enviarlo. Este comando se envía comúnmente por SMS o mediante una herramienta de configuración Teltonika según su instalación.

- Ejemplo de SMS o comando de parámetros

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explicación
- {{apn}} es el nombre del APN del operador móvil necesario para datos GPRS.
- {{apnu}} es el nombre de usuario del APN si su operador lo requiere.
- {{apnp}} es la contraseña del APN si su operador lo requiere.
- 2004 se establece en d.plaspy.com para apuntar el rastreador al dominio del servidor Plaspy.
- 2005 se establece en 8888, que es el puerto que usa Plaspy para todos los dispositivos.
- El último parámetro de esta secuencia es específico del dispositivo; consulte la documentación de parámetros de Teltonika para confirmar el significado y los valores esperados según su firmware.

Confirme siempre el mapeo de IDs de parámetros y la sintaxis de comandos contra el manual del Teltonika FMB150 o la herramienta de configuración de Teltonika para su versión de firmware.

## Notas sobre la configuración

- Los IDs de parámetros y los formatos de comandos SMS pueden diferir entre versiones de firmware; verifique el mapeo exacto de parámetros en la documentación de Teltonika para su equipo.
- Puede configurar el servidor por dominio (d.plaspy.com) o por la IP del servidor Plaspy 54.85.159.138 si su herramienta o flujo de trabajo requiere una IP.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy soporta ambos y detectará el protocolo automáticamente cuando el dispositivo se conecte.
- La configuración por SMS suele estar soportada en dispositivos Teltonika, pero la herramienta oficial de Teltonika puede ser preferible para actualizaciones en lote o ajustes específicos de firmware.
- Después de aplicar los cambios, reinicie el dispositivo si es necesario y confirme que los mensajes de ubicación y estado lleguen a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB150 con Plaspy ofrece una forma práctica de recopilar ubicación, estado del vehículo e información CAN para vehículos ligeros, autobuses, camiones y vehículos eléctricos. Apuntar el rastreador a Plaspy usando los ajustes de servidor compartidos simplifica la incorporación de dispositivos y ayuda a los equipos a monitorear flotas y diagnósticos de vehículos desde una sola plataforma.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, mapeos de parámetros y comportamientos de firmware verifique los detalles en el sitio oficial de Teltonika https://www.teltonika-gps.com/ que mantiene la documentación oficial del FMB150.
