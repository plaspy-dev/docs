---
slug: /coban/bn_108b/configuration
id: bn_108b-configuration
sidebar_label: Configuration
title: Coban - BN-108B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban BN-108B y conectarlo a Plaspy con ajustes de servidor compartidos
keywords:
  - configuración Coban BN-108B
  - configuración inicial Coban BN-108B
  - configuración BN-108B Plaspy
  - configuración rastreador GPS BN-108B
  - configuración servidor rastreador Coban
  - integración rastreador Plaspy
  - configuración TCP UDP rastreador GPS
  - configuración seguimiento de activos móviles
  - seguimiento de flotas BN-108B
  - configuración SMS BN-108B
---

# Coban - BN-108B Configuración

Esta página ofrece contexto público sobre la configuración del Coban BN-108B para su uso con Plaspy. Reúne los pasos prácticos y comandos no propietarios que se emplean habitualmente para apuntar el dispositivo a los servidores de Plaspy, validar la conectividad y dejar el rastreador listo para seguimiento en vivo y reporte de eventos. Utilice esta guía junto con la documentación oficial del fabricante para detalles específicos del dispositivo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-108B admite reportes por SMS y por GSM/GPRS, por lo que los ejemplos que siguen reflejan comandos típicos basados en SMS que están documentados públicamente para este modelo.

## Resumen de la configuración

El objetivo de la configuración es preparar el BN-108B para comunicarse de forma fiable con Plaspy, de modo que posiciones, alertas y telemetría se muestren en su cuenta de Plaspy. Una configuración típica establece el APN para GPRS, programa el endpoint y puerto del servidor de Plaspy, selecciona el transporte (UDP o TCP) si el rastreador lo requiere y verifica que el dispositivo esté reportando.

- Configure el APN y las credenciales móviles del dispositivo para que el rastreador pueda conectarse a la red celular y al GPRS.
- Programe el endpoint del servidor de Plaspy (dominio o IP) y el puerto compartido para que el dispositivo envíe la telemetría a Plaspy.
- Seleccione el transporte (UDP o TCP) en el dispositivo si requiere elegir el modo de GPRS.
- Aplique los ajustes, reinicie el dispositivo si es necesario y verifique que las posiciones y eventos aparezcan en Plaspy.
- Use configuración por SMS o las herramientas del fabricante según estén disponibles para realizar estos pasos.

## Ajustes del servidor Plaspy

Al configurar el BN-108B para Plaspy, use los siguientes ajustes públicos exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo correcto después de que el dispositivo intente conectarse.

## Requisitos típicos antes de la configuración

- Una unidad BN-108B con batería cargada y alimentada adecuadamente.
- Una SIM activa instalada con plan de datos y capacidad de SMS para configuración remota.
- Conocimiento del método de configuración por SMS del dispositivo (el BN-108B acepta comandos por SMS).
- La contraseña del dispositivo (el valor por defecto usado en los ejemplos públicos a continuación es 123456) o la contraseña que haya sido configurada.
- Acceso a las instrucciones o herramientas de configuración del fabricante para la versión de firmware de su equipo.
- Un medio para recibir o visualizar los reportes del dispositivo en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El BN-108B envía datos de ubicación y estado a Plaspy mediante el canal de datos GSM/GPRS del dispositivo o a través de reportes SMS. El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y presentar la información.

- El rastreador envía paquetes TCP o UDP a Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante sin necesitar asignaciones de puertos separadas por dispositivo.
- Alarmas y eventos como SOS, desconexión de alimentación, movimiento y batería baja se transmiten a Plaspy y se muestran como alertas.
- Los intervalos de reporte y los modos de ahorro de energía controlan la frecuencia con la que el dispositivo envía actualizaciones a Plaspy para seguimiento en tiempo real o para optimizar la batería.
- Los comandos de configuración por SMS pueden usarse para programar APN, ajustes de servidor y comportamiento de reporte antes o durante el despliegue.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante para el BN-108B (comandos SMS o software del fabricante) y confirme que el dispositivo responde.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 como puerto de destino para Plaspy.
4. Seleccione UDP o TCP si el dispositivo exige elegir el transporte para el modo GPRS.
5. Aplique o guarde la configuración y envíe los comandos al dispositivo (por SMS o mediante la herramienta oficial).
6. Reinicie el dispositivo si el firmware lo requiere o después de un cambio de servidor.
7. Verifique que el dispositivo reporte a Plaspy confirmando que las actualizaciones de posición y los eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El BN-108B admite comandos de configuración por SMS. Los comandos a continuación son públicos y se muestran en el orden que suele usarse. La contraseña por defecto del dispositivo en estos ejemplos es 123456; reemplácela si su equipo utiliza una clave diferente.

- Restauración de fábrica (paso inicial opcional)
```text
begin123456
```

- Ajustar la zona horaria a UTC+0
```text
time zone123456 0
```

- Establecer el APN del operador móvil (reemplace [apn] por el APN de su operador)
```text
apn123456 [apn]
```

- Configurar usuario y contraseña del APN (reemplace [apnu] y [apnp] por las credenciales del operador)
```text
up123456 [apnu] [apnp]
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de actualización de ubicación (ejemplo de formato público)
```text
fix060s060s***n123456
```

- Cambiar el modo GPRS para habilitar el reporte de datos (se muestran dos variantes públicas)
```text
gprs123456,1,1
```
o
```text
gprs123456
```

- Consultar la configuración actual del dispositivo
```text
check123456
```

- Habilitar reporte mejorado de sensores digitales/combustible o ajustar el modo de protocolo
```text
protocol123456 18
```

Notas sobre marcadores y comandos:
- [apn] es un marcador para la cadena APN de su operador. Sustitúyalo por el APN que proporcione el operador de la SIM.
- [apnu] y [apnp] son marcadores para el usuario y la contraseña del APN cuando el operador exige credenciales.
- El comando de restauración de fábrica begin123456 es opcional y debe usarse solo cuando sea necesario durante la configuración inicial o para resolución de problemas.
- El significado exacto de algunos parámetros del modo GPRS puede variar según el firmware; consulte la documentación del fabricante para la versión de firmware de su BN-108B si observa un comportamiento distinto.

## Notas de configuración

- Las revisiones del firmware del fabricante pueden cambiar el formato o el comportamiento de los comandos; verifique los comandos en la documentación del BN-108B correspondiente a su firmware.
- La configuración por SMS es compatible y se usa con frecuencia para ajustes en campo, aunque también pueden existir herramientas del fabricante o software de PC para aprovisionamiento masivo.
- La elección entre UDP y TCP puede afectar garantías de entrega y el comportamiento de cortafuegos; seleccione el transporte que se ajuste a su red y necesidades operativas.
- Plaspy utiliza el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando este se conecte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mantenga la seguridad de la contraseña del dispositivo y reemplace la contraseña por defecto si su despliegue lo requiere.

## Por qué usar Plaspy con esta configuración

Usar el BN-108B con Plaspy proporciona a las organizaciones visibilidad remota confiable de activos móviles, con buena autonomía de batería y modos de reporte flexibles. Configurar el rastreador para que apunte a los ajustes de servidor compartidos de Plaspy simplifica la integración, de modo que pueda recibir rápidamente posiciones en vivo, alertas y trayectorias históricas en una única plataforma.

Learn more about Plaspy and how it integrates with devices like the BN-108B at https://www.plaspy.com. For the most current device-specific configuration details, firmware information, and official command references, verify the manufacturer's documentation at https://www.coban.net/ as methods and firmware behavior can change over time.
