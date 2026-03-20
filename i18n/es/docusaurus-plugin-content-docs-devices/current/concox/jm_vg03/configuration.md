---
slug: /concox/jm_vg03/configuration
id: jm_vg03-configuration
sidebar_label: Configuration
title: Concox - JM-VG03 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Concox JM-VG03 para Plaspy con ajustes públicos de servidor y comandos SMS
keywords:
  - Concox JM-VG03
  - Configuración JM-VG03
  - Configuración Concox
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de servidor Plaspy
  - Configuración de rastreo de vehículos
  - Comandos SMS para rastreador
  - Ajustes APN GPRS
  - Guía de instalación del rastreador
---

# Concox - JM-VG03 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Concox JM-VG03 con Plaspy. Reúne los ajustes de servidor compartidos y los comandos SMS de configuración más usados publicados para el JM-VG03, para que pueda preparar el dispositivo y hacerlo reportar a Plaspy. Use estas indicaciones junto con la documentación del fabricante para los pasos completos de instalación y seguridad.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JM-VG03 puede configurarse mediante comandos SMS como se muestra abajo; según su dispositivo y firmware también podría usar una herramienta de configuración oficial del proveedor.

## Resumen de la configuración

Este proceso prepara al JM-VG03 para comunicarse de forma fiable con Plaspy aplicando el APN y los ajustes de servidor, habilitando el reporte por GPRS y validando la conectividad. El objetivo es que el rastreador envíe datos de posición y eventos al endpoint compartido de Plaspy para que el dispositivo sea visible y gestionable en la plataforma.

- Configure el APN del operador y los parámetros de conexión GPRS para que el dispositivo acceda a datos móviles.
- Apunte el equipo al endpoint de servidor de Plaspy usando los ajustes públicos.
- Active el reporte periódico para que las actualizaciones de ubicación lleguen a la plataforma con una cadencia predecible.
- Verifique la configuración usando el comando de verificación del proveedor y confirme que el dispositivo aparece en Plaspy.
- Tome nota de los marcadores de posición como las credenciales APN para adaptar los comandos al operador móvil.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Una unidad JM-VG03 alimentada y accesible con el cableado y el montaje requeridos.
- Una tarjeta SIM funcional instalada con un plan de datos activo y el APN correcto para su operador.
- Acceso a un teléfono con capacidad SMS u otra herramienta de configuración especificada por el fabricante para enviar comandos.
- El APN y, cuando aplique, el nombre de usuario y la contraseña del APN de su operador móvil.
- La documentación oficial de Concox o la guía de configuración para la versión de firmware y hardware de su dispositivo.
- Acceso físico al dispositivo para reiniciarlo después de la configuración si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el JM-VG03 reporta datos de ubicación y eventos a Plaspy usando conexiones GPRS estándar apuntadas al endpoint compartido de la plataforma. Plaspy recibe esos reportes en el puerto común y determina automáticamente el protocolo correcto para que los dispositivos aparezcan en la plataforma sin variaciones por dispositivo.

- El rastreador usa el APN configurado para establecer una sesión de datos GPRS.
- Está configurado para enviar los reportes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte según la opción del dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llegan los mensajes al puerto compartido.
- Una vez que el reporte comienza, los mensajes de ubicación y eventos se vuelven visibles en la plataforma Plaspy para monitoreo y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante o prepárese para usar comandos SMS según la documentación de Concox.
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña del APN requeridos por la tarjeta SIM.
6. Aplique o guarde la configuración y habilite GPRS o el reporte de datos en el dispositivo.
7. Reinicie el dispositivo si el procedimiento del proveedor lo indica.
8. Valide que el dispositivo reporta a Plaspy y aparece en la plataforma.

## Comandos de configuración de ejemplo

El JM-VG03 puede configurarse enviando mensajes SMS al dispositivo. Los siguientes comandos públicos se presentan en el orden en que aparecen en la guía del proveedor. Marque el comando de reinicio como opcional o para una configuración inicial cuando corresponda.

1. Restablecimiento de fábrica opcional (usar solo si necesita restaurar los valores predeterminados)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador (reemplazar los marcadores según sea necesario)
```
APN,[apn]{{,[apnu],[apnp]}}#
```
- Mantenga los marcadores [apn], [apnu] y [apnp] tal como aparecen. Use solo el APN si no se requiere usuario o contraseña. Si su operador necesita usuario y contraseña para el APN, incluya [apnu] y [apnp] respectivamente.

4. Establecer el servidor GPRS a Plaspy por dominio (forma legible preferida)
```
SERVER,1,d.plaspy.com,8888,0#
```

   O establecer el servidor GPRS por IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el intervalo de actualización periódico a cada 60 segundos (se muestran dos formas comunes)
```
TIMER,60#
```
o
```
TIMER,60,60#
```

6. Habilitar modo GPRS
```
GPRSON,1#
```

7. Verificar parámetros GPRS y ajustes de servidor
```
GPRSSET#
```

Siga los comandos en el orden que coincida con sus necesidades de instalación. Si cambia el APN o el servidor, vuelva a enviar los comandos SERVER y APN correspondientes y luego habilite GPRS y reinicie el dispositivo si es necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre verifique con la documentación de Concox para su versión exacta del dispositivo.
- Elija TCP o UDP según la preferencia del instalador; Plaspy acepta ambos y detecta el protocolo automáticamente en el puerto compartido.
- La configuración vía SMS es un método público común para este modelo; algunos instaladores pueden usar herramientas del proveedor o utilidades USB/serial en su lugar.
- Conserve los marcadores de APN y reemplácelos por los valores de su operador móvil al enviar comandos.
- Tras aplicar los ajustes de servidor y APN, reinicie o haga un ciclo de alimentación del dispositivo si la guía del proveedor lo recomienda para asegurar que los cambios surtan efecto.

## Por qué usar Plaspy con esta configuración

Configurar el Concox JM-VG03 para reportar a Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación y el estado de los vehículos usando el endpoint compartido del servidor de la plataforma. Usar los ajustes de servidor documentados y los comandos SMS del JM-VG03 facilita desplegar dispositivos en una flota y lograr que reporten de forma consistente al mismo endpoint de Plaspy.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com. Por favor verifique los detalles más recientes de configuración específicos del dispositivo, comportamientos de firmware y la sintaxis de comandos con el fabricante en https://www.iconcox.com/ ya que las especificaciones y procedimientos pueden cambiar con el tiempo.
