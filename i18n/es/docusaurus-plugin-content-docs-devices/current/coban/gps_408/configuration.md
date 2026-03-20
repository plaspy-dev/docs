---
slug: /coban/gps_408/configuration
id: gps_408-configuration
sidebar_label: Configuration
title: Coban - GPS-408 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban GPS-408 con valores del servidor Plaspy y comandos SMS para puesta en marcha y verificación
keywords:
  - Coban GPS-408 configuración
  - Coban GPS-408 instalación
  - GPS-408 configuración Plaspy
  - configuración rastreador Coban
  - instalación rastreador vehicular
  - configuración servidor rastreador GPS
  - ajustes servidor Plaspy
  - comandos SMS GPS-408
  - integración seguimiento vehicular
  - rastreador para gestión de flotas
---

# Coban - GPS-408 Configuration

Esta página documenta el contexto público de configuración para usar el rastreador Coban GPS-408 con la plataforma Plaspy. Se centra en los pasos prácticos y los comandos públicos necesarios para apuntar un GPS-408 a Plaspy, de modo que el dispositivo pueda reportar ubicación y estado. Cuando están disponibles, se incluyen los comandos SMS proporcionados por el fabricante para la configuración y verificación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del vendedor. El GPS-408 admite métodos de configuración por SMS y GPRS; los comandos de ejemplo a continuación reflejan secuencias públicas de SMS que se usan comúnmente para el aprovisionamiento inicial.

## Resumen de la configuración

El objetivo al configurar un GPS-408 para Plaspy es preparar el rastreador para que transmita de forma fiable la telemetría al servidor de Plaspy y aparezca en la plataforma para monitoreo e informes. Esto incluye establecer el APN y los detalles de GPRS, seleccionar el protocolo de transporte si es necesario y validar que el equipo está reportando.

- Configure el APN y las credenciales de red para que el dispositivo tenga acceso a datos móviles donde sea necesario.
- Establezca la dirección del servidor y el puerto del dispositivo para apuntar a Plaspy y enrutar los datos de ubicación a la plataforma.
- Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
- Valide el reporte del dispositivo y utilice comandos de verificación para confirmar la conectividad.
- Guarde y aplique la configuración; reinicie el dispositivo si es necesario para comenzar el reporte en vivo.

## Ajustes del servidor Plaspy

Al configurar el GPS-408 para Plaspy, use los siguientes ajustes públicos de servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos admitidos

## Requisitos típicos antes de la configuración

- Un GPS-408 con batería y acceso físico para configuración vía SMS o acceso del instalador.
- Una tarjeta SIM válida instalada con datos habilitados y capacidad SMS cuando sea necesario.
- El APN del operador móvil, usuario APN y contraseña APN del proveedor de la SIM (en los ejemplos se usan los marcadores [apn], [apnu], [apnp]).
- Acceso al método de comandos SMS del fabricante o a la herramienta oficial de configuración del GPS-408.
- Conocimiento de la contraseña por defecto del dispositivo si se necesita para los comandos; los comandos públicos que aparecen abajo usan la contraseña por defecto 123456.
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para confirmar que el rastreador aparece después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El GPS-408 se configura para enviar mensajes de ubicación y estado al endpoint y puerto del servidor Plaspy. Plaspy recibe la telemetría entrante y detecta automáticamente el protocolo del rastreador para que los dispositivos puedan registrarse y monitorearse en la plataforma.

- El rastreador establece una sesión de datos GPRS usando el APN y las credenciales del operador configurados.
- El dispositivo envía mensajes de posición y eventos a la dirección y puerto del servidor configurado.
- Los mensajes pueden entregarse por UDP o TCP según la configuración del rastreador y las condiciones de la red.
- Plaspy detecta el protocolo del rastreador al recibir los mensajes y mapea los datos del dispositivo en la plataforma.
- Una vez validado el reporte, el dispositivo queda visible en Plaspy para seguimiento en tiempo real y reproducción histórica.

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante para el GPS-408 (comandos SMS o herramienta del proveedor) tal como lo documenta Coban.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según la sintaxis del comando del equipo.
3. Configure el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Si el equipo requiere selección de transporte, elija UDP o TCP según sus necesidades de red.
5. Configure el APN y las credenciales APN para que el dispositivo pueda abrir una sesión de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo requiere.
7. Valide que el dispositivo reporte a Plaspy usando comandos de verificación y comprobando el estado en la plataforma.

## Comandos de configuración de ejemplo

El GPS-408 acepta comandos SMS para muchas tareas de configuración. Los siguientes comandos son pasos públicos en SMS para este modelo. Los ejemplos usan la contraseña por defecto del dispositivo 123456. Mantenga los marcadores [apn], [apnu] y [apnp] y sustitúyalos por los valores de su operador.

- Reinicio opcional a configuración de fábrica (usar solo si necesita borrar ajustes actuales):
```text
begin123456
```

- Establecer la zona horaria a UTC 0:
```text
time zone123456 0
```

- Establecer el APN del operador (reemplace [apn] por el APN de su operador):
```text
apn123456 [apn]
```

- Establecer usuario y contraseña del APN (reemplace los marcadores según corresponda):
```text
up123456 [apnu] [apnp]
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
adminip123456 54.85.159.138 8888
```

- Ejemplo de intervalo de actualización (se conserva el formato específico del dispositivo):
```text
fix060s060s***n123456
```

- Cambiar el dispositivo a modo GPRS y seleccionar transporte (se muestran dos formas; use la apropiada para su firmware):
```text
gprs123456,1,1
```
o
```text
gprs123456
```

- Comprobar ajustes actuales:
```text
check123456
```

- Habilitar protocolo extendido o reporte de sensor de combustible/digital (ejemplo de valor de protocolo):
```text
protocol123456 18
```

Notas sobre los marcadores y la contraseña:
- [apn] es la cadena APN del operador móvil requerida para datos.
- [apnu] es el usuario APN si lo proporciona el operador.
- [apnp] es la contraseña APN si lo proporciona el operador.
- Los comandos anteriores usan la contraseña por defecto del dispositivo 123456 en los ejemplos. Si su contraseña difiere, sustituya por la contraseña actual.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las opciones soportadas; consulte la documentación del fabricante si un comando no se comporta como espera.
- El GPS-408 admite la configuración por SMS como se muestra, y los ajustes del servidor GPRS apuntan el dispositivo a Plaspy usando la IP y el puerto proporcionados.
- Elija UDP o TCP según la fiabilidad de la red y sus necesidades operativas; algunas instalaciones prefieren UDP por menor sobrecarga y otras TCP por la entrega garantizada.
- Después de cambiar el servidor o la configuración GPRS, puede ser necesario un ciclo de alimentación o reinicio para que el rastreador abra una nueva sesión hacia Plaspy.
- Mantenga las credenciales del dispositivo seguras y cambie las contraseñas por defecto en despliegues de producción cuando el dispositivo lo permita.

## Por qué usar Plaspy con esta configuración

Configurar el Coban GPS-408 para que reporte a Plaspy ofrece una manera directa de centralizar la ubicación y el estado de vehículos en una sola plataforma de monitoreo. Las organizaciones obtienen visibilidad centralizada para seguimiento, reportes de eventos y alertas operativas una vez que el rastreador está apuntando a Plaspy y se verifica su reporte.

Para obtener más información sobre Plaspy y su compatibilidad con rastreadores, visite https://www.plaspy.com. Para comandos específicos más recientes, comportamiento de firmware y documentación del fabricante, verifique la información en el sitio de Coban https://www.coban.net/ ya que los métodos y especificaciones pueden cambiar con el tiempo.
