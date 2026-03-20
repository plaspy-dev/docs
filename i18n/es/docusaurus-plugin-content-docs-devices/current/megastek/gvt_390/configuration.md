---
slug: /megastek/gvt_390/configuration
id: gvt_390-configuration
sidebar_label: Configuration
title: Megastek - GVT-390 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek GVT 390 y conectarlo con Plaspy usando ajustes de servidor compartidos y comandos SMS
keywords:
  - Configuración Megastek GVT 390
  - Instalación Megastek GVT 390
  - GVT 390 Plaspy
  - Configuración rastreador GPS Megastek
  - Ajustes servidor GVT 390
  - Configuración SMS GVT 390
  - rastreo vehicular GVT 390
  - gestión de flotas GVT 390
  - ajustes APN GVT 390
  - configuración protocolo GVT 390
---

# Megastek - GVT-390: Configuración

Esta página describe el contexto público de configuración para usar el rastreador Megastek GVT-390 con Plaspy. Consolida los ajustes de servidor compartidos de Plaspy y los comandos SMS públicos que se usan comúnmente para preparar el GVT-390 y que le permitan comunicarse con la plataforma. El contenido se basa en la descripción del dispositivo y en la secuencia pública de configuración por SMS disponible para este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Cuando se muestran comandos SMS a continuación, son ejemplos públicos; siempre verifique el comportamiento del dispositivo si su hardware o firmware difieren.

## Resumen de la configuración

El objetivo al configurar el GVT-390 para Plaspy es apuntar el rastreador al servidor de Plaspy, confirmar los datos móviles y la configuración APN, y validar que el dispositivo reporte correctamente en la plataforma. Para los modelos GVT-390 el fabricante proporciona una secuencia de configuración basada en SMS que se utiliza habitualmente durante la instalación y las pruebas.

- Configure el acceso a la red y el APN para que el rastreador pueda abrir una sesión GPRS hacia Plaspy.
- Establezca el ID del dispositivo para que la plataforma asocie los reportes entrantes con el activo correcto.
- Apunte el rastreador al servidor y puerto de Plaspy para que los datos lleguen a la plataforma.
- Active el modo GPRS y seleccione el transporte (UDP o TCP) si el firmware del dispositivo lo requiere.
- Valide la conectividad confirmando que el dispositivo envíe ubicación y estado a Plaspy.
- Guarde y, si es necesario, reinicie el equipo para que los ajustes entren en vigor.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GVT-390:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede permitir seleccionar cualquiera)
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son los ajustes compartidos públicos que Plaspy requiere para las conexiones entrantes de los rastreadores.

## Requisitos típicos antes de la configuración

- Una unidad GVT-390 con alimentación, con tarjeta SIM instalada y con datos y servicio SMS activos
- Conocer el IMEI del dispositivo y la contraseña actual del equipo (ejemplo de contraseña por defecto 000000 en ejemplos públicos)
- Acceso a un teléfono con capacidad para enviar SMS o a la herramienta de configuración del fabricante para enviar comandos
- Información correcta del APN proporcionada por el operador de la SIM para datos móviles
- Cobertura de red donde operará el rastreador para permitir conexiones GPRS
- Comprensión básica de UDP frente a TCP si el dispositivo solicita seleccionar el transporte

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GVT-390 usa su conexión GPRS para enviar mensajes de rastreo y estado al endpoint y puerto del servidor Plaspy. Plaspy recibe la conexión entrante y determina automáticamente el protocolo del rastreador para que los datos puedan interpretarse y mostrarse en la plataforma.

- El rastreador abre una sesión GPRS y se conecta al endpoint configurado de Plaspy
- Los reportes se envían al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede seleccionar transporte UDP o TCP en el dispositivo si se requiere; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los reportes con el ID del dispositivo
- La plataforma proporciona visibilidad, estado y reportes de eventos tras la conectividad exitosa

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Megastek para el GVT-390, como los comandos SMS del fabricante o la herramienta de configuración del proveedor.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo requiera la interfaz del dispositivo.
3. Establezca el puerto en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el rastreador solicita la selección.
5. Aplique o guarde la configuración mediante el método del dispositivo (envíe comandos SMS o guarde a través de la herramienta de configuración).
6. Reinicie el dispositivo si las instrucciones del fabricante indican que se requiere un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con el ID de dispositivo correcto.

## Comandos de configuración de ejemplo

El fabricante provee una secuencia de configuración por SMS para el GVT-390. Los comandos de ejemplo que siguen reflejan la secuencia pública y usan la contraseña por defecto del dispositivo mostrada en ejemplos públicos. Reemplace los marcadores antes de enviar.

Notas sobre los marcadores:
- [imei] — reemplace con el número IMEI del dispositivo (normalmente 15 dígitos)
- [apn] — reemplace con el APN del operador proporcionado por la compañía de la SIM
- [apnu] — nombre de usuario del APN opcional si lo requiere el operador
- [apnp] — contraseña del APN opcional si lo requiere el operador
- La contraseña por defecto pública de ejemplo es 000000; cámbiela si su dispositivo usa otra contraseña

1) Establecer el ID del dispositivo (reemplazar [imei] con el IMEI del dispositivo, 15 dígitos)
```
M000000,22,[imei]
```

2) Establecer el APN del operador (reemplace los marcadores según sea necesario; apnu y apnp son opcionales)
```
M000000,23,[apn],[apnu],[apnp]
```

3) Establecer el intervalo de actualización a 60 segundos
```
M000000,25,60
```

4) Establecer el servidor GPRS de Plaspy usando la IP pública del servidor y el puerto
```
M000000,24,56 54.85.159.138,8888
```

5) Habilitar el modo GPRS
```
M000000,21,2
```

Envíe cada comando como SMS desde un número autorizado o a través de la herramienta del fabricante configurada. Mantenga el orden en que primero se configuran el servidor y el APN antes de habilitar el modo GPRS para garantizar que el dispositivo pueda registrarse y conectarse.

## Notas sobre la configuración

- El ejemplo público muestra la configuración por SMS; algunos proveedores también ofrecen herramientas para PC o por aire que realizan los mismos pasos.
- La contraseña por defecto 000000 aparece en ejemplos públicos; si su dispositivo usa otra contraseña ajuste los comandos en consecuencia.
- Las revisiones de firmware y las variantes de hardware pueden afectar la sintaxis requerida de los comandos o los parámetros disponibles; siempre verifique el comportamiento con su versión de firmware.
- Elija UDP o TCP según sus necesidades de instalación; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, asegúrese de que 8888 esté configurado de forma consistente en cada unidad destinada a reportar a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GVT-390 con Plaspy ofrece una forma directa de centralizar los reportes de ubicación y estado de vehículos y activos. La secuencia de configuración pública y los ajustes de servidor compartidos de Plaspy permiten estandarizar las instalaciones para que los dispositivos informen de manera consistente en la plataforma para monitoreo, alertas de eventos y supervisión operativa.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la documentación oficial de Megastek en https://www.megastek.com/ para confirmar los métodos de configuración específicos del dispositivo y los detalles de firmware más recientes. Las especificaciones y procedimientos del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la información más reciente en el sitio de Megastek.
