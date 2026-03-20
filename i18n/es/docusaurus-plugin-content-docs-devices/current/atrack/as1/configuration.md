---
slug: /atrack/as1/configuration
id: as1-configuration
sidebar_label: Configuration
title: ATrack - AS1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ATrack AS1 y reportar a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración ATrack AS1
  - Instalación ATrack AS1
  - Configuración servidor AS1
  - Configuración AS1 Plaspy
  - Configuración GPS AS1
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Rastreo vehicular AS1
  - Rastreo de activos AS1
  - Configuración plataforma GPS ATrack
---

# ATrack - Configuración del AS1

Esta página aborda el contexto público de configuración para usar el ATrack AS1 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy y los pasos prácticos para poner un AS1 en línea en la plataforma, utilizando únicamente información pública del fabricante y comandos de ejemplo cuando están disponibles.

Plaspy emplea un único endpoint y puerto de servidor compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante para el AS1 pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor, por lo que debe seguir los ejemplos de esta guía junto con la documentación oficial de ATrack y cualquier utilidad de configuración proporcionada por su proveedor.

## Resumen de la configuración

Esta sección resume los objetivos prácticos al configurar un AS1 para Plaspy. El objetivo es preparar el equipo para conectarse a Plaspy, validar su conectividad y asegurar que el rastreador sea visible y reporte correctamente en la plataforma.

- Configure el AS1 para enviar datos al endpoint del servidor de Plaspy usando los ajustes de servidor compartidos.
- Active el reporte periódico y los eventos requeridos para que Plaspy reciba actualizaciones de ubicación y alertas.
- Valide la conectividad GPRS u otra conectividad celular y confirme que el dispositivo puede alcanzar Plaspy.
- Verifique que el dispositivo reporte correctamente en Plaspy y resuelva la selección de transporte entre UDP y TCP.
- Use comandos o herramientas del fabricante para persistir la configuración y confirme mediante consultas de estado.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos del servidor de Plaspy al configurar el AS1. Plaspy centraliza las conexiones de los dispositivos y detecta automáticamente los protocolos de los rastreadores.

- Dominio de servidor d.plaspy.com para configuraciones basadas en DNS
- IP de servidor 54.85.159.138 para configuración por IP directa
- Puerto 8888 como puerto de destino para las conexiones de los rastreadores
- Transporte compatible UDP o TCP según preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden usar cualquiera de los dos transportes y ser reconocidos

Nota: Todos los dispositivos en Plaspy usan el mismo puerto. Configure el AS1 para usar el puerto 8888 con UDP o TCP según corresponda.

## Requisitos habituales antes de la configuración

- Una unidad AS1 funcional con batería suficiente o batería primaria instalada y el equipo encendido.
- Una tarjeta SIM válida con plan de datos y acceso GPRS/HSPA o la conectividad de red necesaria para que el dispositivo envíe datos.
- Acceso a los métodos de configuración de ATrack, como comandos SMS, una herramienta de configuración del fabricante o la consola del dispositivo dependiendo de su unidad.
- Los ajustes APN correctos de su operador móvil para completar los campos APN del dispositivo.
- Conocimiento de la versión de firmware del dispositivo y de cualquier nota del proveedor que afecte la sintaxis o el comportamiento de los comandos.
- Una forma de verificar la alcanzabilidad de red hacia el servidor de Plaspy (resolución DNS a d.plaspy.com o ping a la IP proporcionada cuando esté permitido).

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AS1 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y gestionar el dispositivo.

- El AS1 se configura para reportar al dominio del servidor de Plaspy o a la IP directa y al puerto compartido 8888.
- El transporte de datos puede usar UDP o TCP según la configuración seleccionada en el dispositivo.
- El dispositivo envía mensajes de rastreo periódicos y reportes de eventos configurados para que Plaspy reciba actualizaciones de movimiento y estado.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que simplifica el soporte entre distintos dispositivos y reduce la necesidad de configurar protocolos por equipo.
- Una vez que el dispositivo esté enviando paquetes a d.plaspy.com o 54.85.159.138 en el puerto 8888, debería aparecer dentro de Plaspy para su monitoreo y visualización.

## Flujo de trabajo típico de configuración

Siga este flujo de trabajo práctico para configurar un AS1 para Plaspy. Los pasos asumen que tiene acceso al método de configuración del dispositivo adecuado para su unidad.

1. Acceda al método o software oficial de configuración de ATrack (comandos SMS, herramienta USB/serial o utilidad de configuración del proveedor).
2. Ingrese el servidor de Plaspy por el dominio d.plaspy.com o por la IP directa del servidor 54.85.159.138 en los ajustes de servidor.
3. Establezca el puerto de destino en 8888, que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP si su equipo requiere selección de transporte y guarde esa opción.
5. Configure el APN y los ajustes GPRS relacionados para que el AS1 tenga conectividad de datos celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy revisando el estado en la plataforma y confirmando los mensajes entrantes del AS1.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo públicos provienen de la guía de configuración del ATrack AS1. Se presentan en orden y muestran ajustes comunes para preparar el dispositivo para Plaspy. Mantenga los marcadores de posición tal como aparecen y reemplácelos con sus valores cuando corresponda.

1. Configurar reporte de evento ACC (encendido) y acciones
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Establecer intervalo de tiempo a 60 segundos para reportes de rastreo
```text
AT$TRAC=1,60,,,,,2
```

3. Poner el dispositivo en modo binario (formato de protocolo)
```text
AT$FORM=1,@P,0,""
```

4. Configurar GPRS y APN con la IP y puerto del servidor de Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- [apn] es el APN de su operador móvil
- [apnu] es el usuario APN si su operador lo requiere
- [apnp] es la contraseña APN si su operador la requiere

5. Consultar estado e información del dispositivo
```text
AT$INFO=?
```

Notas sobre estos comandos:
- Reemplace los marcadores de APN con los valores proporcionados por su operador de SIM.
- La línea AT$GPRS apunta el dispositivo a la IP y puerto del servidor de Plaspy. Alternativamente puede usar d.plaspy.com cuando su herramienta de configuración acepte un dominio en lugar de una IP.
- Si su instalador o firmware espera parámetros específicos para TCP vs UDP, elija el transporte apropiado según lo descrito en el Flujo de trabajo típico de configuración.

## Observaciones de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y el orden de los parámetros; confirme siempre la compatibilidad de comandos con la versión de firmware de su dispositivo.
- El AS1 admite métodos de configuración por SMS y por línea de comandos además de la configuración por datos; elija el método que mejor se adapte a su instalación y necesidades de seguridad.
- Cuando sea posible, utilice el dominio d.plaspy.com para resolución basada en DNS; la IP directa 54.85.159.138 se proporciona para entornos donde DNS no esté disponible.
- Seleccione UDP o TCP según las condiciones de su red y los requisitos de la instalación; Plaspy detectará el protocolo automáticamente.
- Mantenga un registro de los ajustes aplicados y verifique el reporte después de un reinicio o un corte de energía.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el ATrack AS1 ofrece una forma práctica de centralizar la visibilidad de los dispositivos, el monitoreo de eventos y el reporte de ubicaciones en flotas o activos distribuidos. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación de múltiples equipos porque todos los dispositivos compatibles usan el mismo puerto y la detección automática de protocolo reduce la resolución de problemas por dispositivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y verifique notas de configuración específicas del fabricante, diferencias de firmware y la documentación más reciente del AS1 en https://www.atrack.com.tw/ para asegurarse de que su configuración coincida con las capacidades actuales del dispositivo y la guía del proveedor.
