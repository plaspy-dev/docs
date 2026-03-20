---
slug: /v_sun/tlt_1b/configuration
id: tlt_1b-configuration
sidebar_label: Configuration
title: V-SUN - TLT-1B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador V-SUN TLT-1B con ajustes de servidor Plaspy y comandos SMS para GPRS
keywords:
  - Configuración V-SUN TLT-1B
  - Instalación V-SUN TLT-1B
  - Configuración servidor V-SUN TLT-1B
  - Configuración rastreador GPS TLT-1B
  - Configuración V-SUN en Plaspy
  - Configuración GPRS rastreador GPS
  - Rastreo vehicular TLT-1B
  - Configuración de dispositivo Plaspy
  - Comandos SMS TLT-1B
  - Configuración APN V-SUN TLT-1B
---

# V-SUN - Configuración del TLT-1B

Esta página describe el contexto público de configuración para usar el rastreador V-SUN TLT-1B con la plataforma Plaspy. Incluye los ajustes compartidos del servidor Plaspy que debe aplicar para apuntar un TLT-1B a Plaspy y resume los comandos SMS y pasos prácticos que normalmente se usan para preparar el dispositivo para reporte en tiempo real vía GPRS.

Plaspy usa endpoints de servidor comunes y un único puerto de plataforma para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando llegan los datos. Los pasos específicos del fabricante para el TLT-1B pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; los comandos que se muestran aquí son los comandos SMS de documentación pública para muchas unidades TLT-1B y deben validarse con la documentación más reciente de V-SUN.

## Resumen de la configuración

Este proceso prepara el TLT-1B para enviar datos de ubicación a Plaspy mediante GPRS, de modo que el dispositivo quede visible en la plataforma. Los pasos se enfocan en asegurar que las credenciales de red, el endpoint del servidor, el puerto y los intervalos de reporte estén correctamente aplicados y verificados.

- Configure el APN del dispositivo para que el TLT-1B pueda establecer la conexión GPRS.
- Ajuste el dispositivo para reportar al endpoint y puerto del servidor Plaspy.
- Seleccione UDP o TCP si el dispositivo requiere una elección de transporte.
- Aplique intervalos de reporte para estado en movimiento y estático para controlar la frecuencia de actualizaciones.
- Active los modos de GPRS y GPS para que el rastreador transmita datos a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP en el dispositivo si se requiere
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados

## Requisitos previos comunes

- Una tarjeta SIM funcional con datos habilitados y los ajustes APN correctos del operador móvil
- Alimentación del TLT-1B y acceso al dispositivo para enviar y recibir comandos SMS de configuración
- Conocimiento de la contraseña del dispositivo usada para configuración por SMS (los ejemplos públicos usan la contraseña por defecto 0000)
- Acceso a la documentación oficial de V-SUN o la guía del instalador para cualquier paso específico del equipo
- Un método para verificar la conectividad, por ejemplo monitorear Plaspy hasta que el dispositivo aparezca después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TLT-1B puede subir datos de posicionamiento mediante GPRS a un servidor designado; al configurarlo para Plaspy envía paquetes al endpoint y puerto compartidos de Plaspy para que la ubicación y el estado aparezcan en la plataforma. También soporta envío de posiciones por SMS a teléfonos, pero el seguimiento en tiempo real en Plaspy requiere reporte GPRS al servidor configurado.

- El rastreador abre una conexión GPRS usando el APN y las credenciales del operador.
- Está configurado para enviar reportes al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El dispositivo usa UDP o TCP si requiere selección de transporte.
- Plaspy detecta automáticamente el protocolo entrante y asocia los datos del dispositivo con la plataforma.
- Una vez que los reportes están activos, el dispositivo queda visible en Plaspy para seguimiento en tiempo real e historial.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante, por ejemplo la interfaz de comandos SMS documentada o la herramienta de configuración de V-SUN.
2. Configure el APN y las credenciales del operador para que el rastreador pueda establecer una sesión de datos GPRS.
3. Ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Seleccione UDP o TCP si el dispositivo requiere elegir un transporte para reportes GPRS.
6. Aplique o guarde la configuración y envíe cualquier comando SMS de activación que requiera el dispositivo.
7. Reinicie o haga un ciclo de alimentación del dispositivo si el fabricante lo recomienda.
8. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma.

## Ejemplos de comandos de configuración

El TLT-1B suele aceptar comandos SMS para configuración. A continuación se muestran los ejemplos públicos de comandos SMS en el orden documentado por el fabricante. La configuración de muestra usa la contraseña por defecto del dispositivo 0000. Considere el reset de fábrica como opcional para la puesta en marcha o la resolución de problemas.

1. Reset de fábrica (opcional; use solo si es necesario)
```
*RESET#0000##
```

2. Configurar el APN del operador
- Solo APN:
```
#803#0000#[apn]##
```
- APN con usuario y contraseña:
```
#803#0000#[apn]#[apnu]#[apnp]##
```
Explicación: [apn] es el APN de su operador móvil. [apnu] y [apnp] son los campos opcionales de nombre de usuario y contraseña del APN si su operador los requiere.

3. Establecer el servidor GPRS a la IP y puerto de Plaspy (el ejemplo público usa IP y puerto proporcionados)
```
#804#0000#54.85.159.138#8888##
```
Nota: También puede configurar un nombre de dominio si el dispositivo lo soporta, pero el ejemplo documentado usa la IP del servidor Plaspy.

4. Establecer el intervalo de actualización para cuando el dispositivo está en movimiento (ejemplo)
```
#805#0000#120#1##
```
5. Establecer el intervalo de actualización para estado estático (ejemplo)
```
#809#0000#120#1##
```
Nota: Estos valores controlan los intervalos de reporte; confirme el significado y las unidades en la documentación del fabricante.

6. Habilitar modo GPRS (comando de activación ejemplo)
```
7100000
```

7. Habilitar modo GPS (comando de activación ejemplo)
```
2220000
```

Cada comando debe enviarse como SMS desde un número autorizado o mediante el método documentado por V-SUN. Reemplace los marcadores de posición y los valores numéricos según su operador y preferencias de reporte.

## Notas de configuración

- La configuración por SMS es un método común de V-SUN y se muestra aquí porque está documentada públicamente para muchas unidades TLT-1B.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre verifique con el manual del dispositivo.
- Si el rastreador o el firmware requiere seleccionar el transporte, elija UDP o TCP según sus necesidades operativas; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los comandos de ejemplo usan la contraseña por defecto 0000; cambie la contraseña del dispositivo en despliegues en producción y mantenga las credenciales seguras.
- Confirme el APN, el nombre de usuario y la contraseña con el operador de la SIM antes de aplicar los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el V-SUN TLT-1B con Plaspy brinda a las organizaciones una vía sencilla para obtener visibilidad en tiempo real y revisar trayectorias históricas al enrutar los reportes GPRS del dispositivo a un único endpoint de Plaspy. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad de la puesta en marcha y ayudan a que los rastreadores empiecen a reportar rápidamente.

Learn more about Plaspy and how it collects and displays device data at https://www.plaspy.com. For the most current device specific commands, firmware notes, and detailed installation guidance verify the latest information from the manufacturer at http://www.v-sun.cc/ as device behavior and setup methods can change over time.
