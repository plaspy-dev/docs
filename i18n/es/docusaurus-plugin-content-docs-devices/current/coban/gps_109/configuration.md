---
slug: /coban/gps_109/configuration
id: gps_109-configuration
sidebar_label: Configuration
title: Coban - GPS-109 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban GPS-109 con Plaspy, incluyendo ajustes de servidor, comandos SMS y flujo de trabajo
keywords:
  - Configuración Coban GPS-109
  - Configuración GPS 109 Plaspy
  - Configuración rastreador Coban
  - Configuración servidor GPS-109
  - Configuración SMS rastreador GPS
  - Configuración dispositivo Plaspy
  - Configuración seguimiento vehicular
  - Software seguimiento GPS-109
  - Instrucciones Coban GPS-109
  - Configuración rastreador GPRS
---

# Coban - Configuración del GPS-109

Esta página explica el contexto público de configuración para usar el rastreador Coban GPS-109 con la plataforma Plaspy. Describe los valores compartidos del servidor Plaspy que debe aplicar en el dispositivo, recopila los comandos SMS publicados para este modelo y detalla el flujo de trabajo típico para registrar y validar un dispositivo en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPS-109 admite métodos de configuración por SMS y GPRS; los ejemplos de comandos SMS que se muestran a continuación son los comandos públicos comúnmente usados para la configuración inicial.

## Resumen de la configuración

El proceso de configuración prepara el GPS-109 para comunicarse con Plaspy y garantiza que el rastreador reporte datos de ubicación y eventos de forma fiable. Use los valores de servidor y las opciones de transporte que se indican abajo para apuntar el dispositivo a Plaspy, y luego valide la conectividad y la visibilidad en su cuenta Plaspy.

- Configure el dispositivo para enviar datos GPRS a Plaspy usando el servidor y puerto compartidos.
- Establezca el APN y las credenciales de APN opcionales para que el rastreador pueda conectarse a la red de datos móviles.
- Seleccione el modo de transporte UDP o TCP en el dispositivo si es necesario, y asegúrese de aplicar la configuración de puerto de Plaspy.
- Verifique que el dispositivo reporte usando el comando de verificación publicado y comprobando el dispositivo en Plaspy.
- De ser necesario, realice un reinicio de fábrica inicial o ajuste de zona horaria antes de finalizar la configuración.

## Valores del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la detección automática de protocolo elimina la necesidad de seleccionar un protocolo en la plataforma.

## Requisitos típicos antes de la instalación

- Un GPS-109 con batería cargada y acceso al instalador o a la persona que conoce la contraseña SMS del dispositivo.
- Una tarjeta SIM GSM válida con datos GPRS habilitados y capacidad de SMS insertada en el rastreador.
- Acceso a la interfaz SMS del dispositivo o a la herramienta de configuración del fabricante para enviar los comandos descritos abajo.
- Conocimiento de la contraseña por defecto del dispositivo si no ha sido cambiada (la contraseña por defecto usada en los ejemplos es 123456).
- Una cuenta en Plaspy y la posibilidad de ver la actividad del dispositivo en la plataforma para validar los reportes.

## Cómo se conecta este rastreador a Plaspy

El GPS-109 se configura para enviar su ubicación y eventos al endpoint y puerto compartidos del servidor Plaspy. Una vez que el equipo esté apuntando a Plaspy y con el APN y los ajustes de transporte correctos, el rastreador enviará paquetes GPRS que Plaspy recibirá y procesará automáticamente.

- El dispositivo envía mensajes de posición y eventos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del rastreador; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar un protocolo especial en la plataforma.
- La visibilidad en la plataforma se logra después de que el dispositivo se conecte y transmita correctamente al servidor y puerto compartidos.
- Los intervalos de actualización y los disparadores de eventos determinan la frecuencia con la que el dispositivo reporta a Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante para el GPS-109, como los comandos SMS o el software del proveedor, y confirme el comportamiento del firmware actual.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888, que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP en el dispositivo si su firmware requiere seleccionar un método de transporte.
5. Configure el APN del dispositivo y, si es necesario, el nombre de usuario y la contraseña del APN para que GPRS funcione.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador requiere un reinicio para aplicar los ajustes GPRS.
7. Valide que el dispositivo reporte a Plaspy enviando un comando de verificación y comprobando la actividad del dispositivo en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El GPS-109 admite configuración por SMS. Los comandos de abajo se presentan en el orden que figura en la guía pública del fabricante. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Preserve y reemplace los marcadores de posición donde se indica.

- Reinicio de fábrica (configuración inicial opcional)
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Configurar el APN del operador
```text
apn123456 [apn]
```
Explicación: Reemplace [apn] con la cadena APN de su operador móvil.

- Ajustar nombre de usuario y contraseña del APN
```text
up123456 [apnu] [apnp]
```
Explicación: Reemplace [apnu] y [apnp] con el usuario y la contraseña del APN si su operador los requiere. Si no son necesarios, utilice valores vacíos según corresponda.

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
Explicación: Esto apunta el rastreador directamente a Plaspy usando la IP pública y el puerto. Alternativamente puede ingresar d.plaspy.com según el soporte de DNS del firmware.

- Establecer el intervalo de actualización de ubicación ejemplo
```text
fix060s060s***n123456
```
Explicación: Este es un ejemplo de comando de intervalo de actualización publicado para este modelo. Modifíquelo conforme a la frecuencia de reporte deseada y las reglas de sintaxis del dispositivo.

- Cambiar a modo GPRS y elegir UDP o TCP
```text
gprs123456,1,1
```
o
```text
gprs123456
```
Explicación: Use la variante que soporte su firmware para activar el modo de datos GPRS. Consulte la documentación del fabricante para el significado exacto de los parámetros en firmwares específicos.

- Comprobar ajustes actuales
```text
check123456
```

- Habilitar estado de sensor de combustible o mejorar reporte de sensores digitales
```text
protocol123456 18
```

Al enviar comandos SMS reemplace 123456 por la contraseña del dispositivo si se ha cambiado respecto al valor por defecto. Si su firmware admite usar el nombre de dominio en lugar de la IP, puede establecer el servidor en d.plaspy.com cuando corresponda.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta y los comandos disponibles para la configuración por SMS; siempre verifique el comportamiento de los comandos en un dispositivo de prueba.
- El GPS-109 ofrece rutas de configuración tanto por SMS como por GPRS; los comandos SMS son útiles para configuración remota cuando no hay acceso a una computadora.
- Elija UDP o TCP en el rastreador según las necesidades de la instalación; Plaspy acepta ambos y detectará automáticamente el protocolo que usa el dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888; esto simplifica la configuración del servidor entre modelos.
- Si cambia la contraseña del dispositivo respecto al valor por defecto, anote la nueva contraseña para evitar quedar bloqueado sin poder reconfigurar por SMS.

## Por qué usar Plaspy con esta configuración

Usar el Coban GPS-109 con Plaspy ofrece a las organizaciones una forma directa de centralizar la visibilidad de los dispositivos y supervisar la ubicación y la actividad de eventos en una sola plataforma. Apuntar el rastreador a Plaspy y validar la conectividad permite que flotas y administradores de activos vean los reportes de los dispositivos de manera consistente, confiando en que Plaspy detectará automáticamente el protocolo del dispositivo.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific instructions firmware notes and manufacturer guidance verify details at the Coban website https://www.coban.net/ as methods and firmware behavior can change over time.
