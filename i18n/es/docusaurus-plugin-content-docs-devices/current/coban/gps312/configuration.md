---
slug: /coban/gps312/configuration
id: gps312-configuration
sidebar_label: Configuration
title: Coban - GPS312 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban GPS312 con Plaspy, ajustes de servidor, comandos SMS y flujo de configuración
keywords:
  - configuración Coban GPS312
  - configuración GPS312 para Plaspy
  - configuración servidor GPS312
  - configuración rastreador Coban
  - comandos SMS GPS312
  - integración rastreador vehicular Plaspy
  - configuración rastreador GPRS
  - comandos Coban GPS312
  - seguimiento de flotas GPS312
  - configuración plataforma GPS312
---

# Coban - GPS312 Configuración

Esta página explica el contexto público de configuración para usar el Coban GPS312 con Plaspy. Aquí se describen los ajustes compartidos del servidor Plaspy y recomendaciones prácticas basadas en comandos y procedimientos públicos comúnmente empleados para este dispositivo. Use esta guía para preparar el GPS312 y que pueda enviar ubicación y estado a Plaspy para monitoreo de flotas y visibilidad operativa.

Plaspy utiliza el mismo endpoint y puerto de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El GPS312 admite configuración por SMS y por GPRS; cuando se muestran comandos del fabricante a continuación, son ejemplos públicos de SMS usados para apuntar el dispositivo a Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el GPS312 para que envíe datos de ubicación y del dispositivo a la plataforma Plaspy y validar la conectividad para que el equipo sea visible en Plaspy. Los pasos a continuación resumen por qué es necesaria esta configuración y lo que se logra con ella.

- Configurar los parámetros de red del dispositivo para que alcance el endpoint del servidor Plaspy.
- Proveer el APN y, opcionalmente, credenciales APN para que el rastreador use datos GPRS.
- Establecer la IP o dominio del servidor y el puerto compartido de Plaspy para los reportes.
- Seleccionar el transporte (UDP o TCP) si el dispositivo requiere elegir uno.
- Validar y verificar que el dispositivo reporte a Plaspy y aparezca en la plataforma.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el Coban GPS312 para que reporte a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automáticamente detecta el protocolo del rastreador, por lo que la plataforma acepta reportes compatibles del dispositivo

## Requisitos típicos antes de la configuración

- Una tarjeta SIM operativa con plan de datos activo y capacidad SMS si va a configurar el equipo por SMS
- Acceso al GPS312 y la alimentación o cableado necesarios para mantenerlo encendido durante la configuración
- La contraseña por defecto del dispositivo si se requiere para ejecutar comandos; la contraseña pública por defecto que se muestra abajo es 123456
- Conocer el APN del operador y, opcionalmente, el nombre de usuario y la contraseña APN para la SIM
- Acceso al método de configuración oficial de Coban o herramientas del proveedor y la capacidad de enviar comandos SMS si es necesario
- Un plan de pruebas sencillo para confirmar que el dispositivo reporta al servidor Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GPS312 puede configurarse para enviar datos de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos. Una vez configurado, el dispositivo usará GPRS para abrir una conexión de datos y transmitir posiciones periódicas y mensajes de estado a Plaspy para monitoreo y registros históricos.

- El rastreador reporta al endpoint y puerto compartidos de Plaspy indicados arriba
- Plaspy recibe y detecta automáticamente el protocolo del rastreador, por lo que no se requiere selección de protocolo por dispositivo en la plataforma
- Actualizaciones periódicas de posición y eventos configurados se envían desde el dispositivo a Plaspy para seguimiento en tiempo real y historial
- La conexión exitosa se valida al ver el dispositivo aparecer y enviar datos en Plaspy tras la configuración
- El transporte se selecciona en el lado del dispositivo como UDP o TCP y Plaspy acepta ambos en el mismo puerto

## Flujo de trabajo habitual de configuración

Siga estos pasos prácticos para configurar un GPS312 para uso con Plaspy. La secuencia exacta puede variar según el firmware del dispositivo y las herramientas del instalador.

1. Acceda al método oficial de configuración de Coban o al software correspondiente, o prepárese para enviar comandos SMS desde un número de teléfono confiable.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como dirección del servidor del dispositivo según el método de configuración del equipo.
3. Establezca el puerto de reportes en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP en el dispositivo si requiere seleccionar el transporte para las conexiones GPRS.
5. Aplique o guarde la configuración en el equipo usando el método del fabricante o enviando los comandos SMS necesarios.
6. Reinicie el dispositivo si el equipo lo requiere o después de aplicar los cambios.
7. Valide que el GPS312 reporte a Plaspy verificando la visibilidad del dispositivo y los datos recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GPS312 suele aceptar comandos SMS para configuración. Los comandos a continuación son ejemplos públicos y mantienen los placeholders donde corresponde. La contraseña por defecto del dispositivo mostrada en estos ejemplos es 123456.

- Restauración de fábrica (opcional en la configuración inicial)
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Configurar el APN del operador (reemplace {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN (reemplace los placeholders con las credenciales del operador)
```text
up123456 {{apnu}} {{apnp}}
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto provistos
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de actualización de posición (ejemplo público del fabricante)
```text
fix060s060s***n123456
```

- Cambiar a opciones de modo GPRS (el dispositivo puede aceptar una u otra forma según el firmware)
```text
gprs123456,1,1
```
o
```text
gprs123456
```

- Consultar configuración actual del equipo
```text
check123456
```

- Activar reporte de sensor digital mejorado o sensor de combustible (opción de protocolo)
```text
protocol123456 18
```

Notas sobre placeholders y contraseña
- {{apn}} es el APN del operador de la SIM que debe proporcionar.
- {{apnu}} y {{apnp}} son el usuario y la contraseña del APN si su operador requiere autenticación.
- Los ejemplos SMS usan la contraseña por defecto 123456 indicada en documentación pública; utilice la contraseña configurada actualmente en su unidad si ha sido modificada.

## Notas de configuración

- La sintaxis exacta de los SMS y los comandos soportados puede variar según la versión de firmware del GPS312 y la variante regional del dispositivo; confirme siempre los comandos con el manual del equipo si es posible.
- La configuración por SMS es muy utilizada en dispositivos Coban, pero también pueden existir herramientas de instalador o software USB según el proveedor.
- Al elegir transporte TCP o UDP en el dispositivo, recuerde que Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Aplique prácticas conservadoras al cambiar configuraciones: envíe comandos de prueba y verifique las respuestas con el comando check antes de hacer cambios masivos.
- Tenga en cuenta diferencias de firmware y variaciones de mercado; algunos comandos pueden comportarse distinto en versiones nuevas o antiguas.

## Por qué usar Plaspy con esta configuración

Configurar un Coban GPS312 para que reporte a Plaspy ofrece a las organizaciones una vía directa para recopilar ubicación y estado de vehículos en una plataforma única de monitoreo. Usar el endpoint compartido de Plaspy simplifica la incorporación de dispositivos porque todos los rastreadores soportados usan el mismo puerto y Plaspy detecta automáticamente los protocolos, reduciendo la configuración por dispositivo en la plataforma.

Para saber más sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para obtener instrucciones específicas del dispositivo, comportamiento de firmware y detalles del fabricante del Coban GPS312, verifique la información en el sitio oficial de Coban https://www.coban.net/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, así que confirme la guía actual antes de desplegar a gran escala.
