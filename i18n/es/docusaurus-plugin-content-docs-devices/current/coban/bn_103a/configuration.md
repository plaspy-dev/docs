---
slug: /coban/bn_103a/configuration
id: bn_103a-configuration
sidebar_label: Configuration
title: Coban - BN-103A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban BN-103A para conectar con Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración Coban BN-103A
  - Configuración inicial Coban BN-103A
  - BN-103A Plaspy
  - Configuración de servidor BN-103A
  - Configuración rastreador GPS BN-103A
  - Integración rastreador Coban Plaspy
  - Configuración rastreador vehicular
  - Seguimiento de flotas BN-103A
  - Ajustes APN rastreador GPS
  - Comandos SMS BN-103A
---

# Coban - BN-103A — Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Coban BN-103A con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en los comandos públicos por SMS que el fabricante proporciona para preparar el equipo y que reporte ubicación y telemetría a Plaspy. Use esta guía para comprender qué se requiere para integrar un dispositivo BN-103A en Plaspy y qué valores aplicar.

Plaspy utiliza ajustes compartidos de servidor entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos que se muestran como ejemplos públicos proporcionados por el fabricante y verifique cualquier diferencia específica del dispositivo en la documentación oficial de Coban.

## Resumen de configuración

El objetivo de esta configuración es dejar el BN-103A listo para un reporte GPRS estable hacia Plaspy, de modo que el dispositivo aparezca en la plataforma con ubicación en tiempo real y datos de eventos. Los comandos públicos del fabricante, normalmente enviados por SMS, configuran la zona horaria, el APN, el servidor GPRS, el intervalo de reporte y el modo de transporte.

- Configurar el APN y sus credenciales para que se envíen los datos por GPRS.
- Señalar el servidor GPRS hacia el endpoint de Plaspy para que las posiciones lleguen a la plataforma.
- Elegir el modo de transporte (UDP o TCP) y establecer el puerto compartido que usa Plaspy.
- Establecer un intervalo de reporte apropiado para equilibrar frecuencia de actualizaciones y consumo de datos.
- Verificar los ajustes y confirmar que el dispositivo sea visible en Plaspy tras la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS
- IP del servidor 54.85.159.138 como opción numérica de endpoint
- Puerto 8888 que es el puerto que Plaspy usa para todos los dispositivos soportados
- Soporte de transporte para UDP o TCP; el BN-103A puede configurarse en cualquiera de los dos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos típicos

- Un equipo BN-103A con alimentación correctamente instalado o accesible para configuración.
- Una tarjeta SIM activa con plan de datos y ajustes APN correctos del operador móvil.
- Medio para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante si está disponible.
- Conocimiento de la contraseña por defecto del dispositivo tal como se usa en los comandos SMS (el ejemplo público del fabricante usa 123456).
- Comprender si la instalación requiere transporte UDP o TCP para el envío de datos.
- Acceso a una cuenta Plaspy o a un administrador para confirmar el registro y la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el BN-103A reporta posiciones GNSS y alarmas/telemetría por el transporte seleccionado hacia el endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes, identifica automáticamente el protocolo del dispositivo y procesa la ubicación y los eventos para seguimiento en vivo y reproducción histórica.

- El rastreador envía posición y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria una selección manual de protocolo en la plataforma.
- El dispositivo reporta eventos como encendido ACC, estado de puertas, alarmas y, opcionalmente, estado de sensor de combustible a Plaspy.
- Plaspy procesa los reportes para mostrar en mapa en vivo, generar alertas, permitir reproducción y alimentar paneles de informes.
- La elección entre UDP o TCP en el equipo determina el comportamiento del transporte mientras Plaspy escucha en el puerto compartido.

## Flujo de trabajo de configuración

1. Acceda al método oficial de configuración Coban para el BN-103A, normalmente por comandos SMS o software del fabricante, y confirme la contraseña por defecto del dispositivo.
2. Ingrese el endpoint del servidor Plaspy en el dispositivo usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP en el rastreador si el dispositivo requiere selección de transporte.
5. Configure el APN y las credenciales de la SIM instalada para que se establezca la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del proveedor lo requieren.
7. Valide que el dispositivo está reportando a Plaspy y es visible en la plataforma, comprobando actualizaciones de posición y mensajes de eventos.

## Ejemplos de comandos de configuración

El fabricante proporciona comandos SMS como método público para configurar el BN-103A. Los comandos de ejemplo a continuación usan la contraseña por defecto 123456 según el contenido público de configuración. Reemplace los marcadores y valores antes de enviar.

- Reset de fábrica inicial opcional (usar solo si necesita borrar configuraciones previas)
```
begin123456
```

- Ajustar la zona horaria a UTC+0
```
time zone123456 0
```

- Establecer el APN del operador
```
apn123456 {{apn}}
```
Reemplace {{apn}} con el APN de su operador móvil.

- Establecer usuario y contraseña del APN
```
up123456 {{apnu}} {{apnp}}
```
Reemplace {{apnu}} y {{apnp}} con el usuario y la contraseña del APN del operador si son necesarios. Deje en blanco u omita si el operador no los requiere.

- Configurar el servidor GPRS a la IP y puerto de Plaspy
```
adminip123456 54.85.159.138 8888
```
También puede usar la forma de dominio si su firmware la acepta; el ejemplo numérico público se muestra arriba.

- Establecer intervalo de actualización/reporte (ejemplo de comando periódico de posición)
```
fix060s060s***n123456
```
Este ejemplo es una muestra del fabricante para configurar intervalos; adáptelo según la frecuencia de reporte deseada y la documentación del dispositivo.

- Cambiar a modo GPRS y seleccionar transporte UDP o TCP
```
gprs123456,1,1
```
o, para un comando más simple si está soportado:
```
gprs123456
```
Consulte el manual del equipo para el significado exacto de los parámetros; el ejemplo del fabricante muestra ambas formas.

- Consultar los ajustes actuales del dispositivo
```
check123456
```

- Habilitar protocolo extendido para sensor de combustible y reporte mejorado de entradas digitales
```
protocol123456 18
```

Notas sobre marcadores y contraseñas:
- {{apn}}, {{apnu}} y {{apnp}} son marcadores para el APN del operador celular, usuario APN y contraseña APN. Reemplace antes de enviar el SMS.
- Los comandos de ejemplo usan la contraseña por defecto 123456; confirme la contraseña de su equipo y cámbiela mediante el método oficial si lo considera necesario por seguridad.

## Notas de configuración

- La configuración por SMS se muestra según el ejemplo público del fabricante. Algunos entornos de instalación pueden usar una herramienta de software o un cable de configuración; siga el método que soporte su proveedor y firmware.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles. Siempre confirme los comandos contra el manual del BN-103A de su versión de dispositivo.
- Elija UDP o TCP según su red y necesidades de reporte; Plaspy escucha en el puerto 8888 y detectará automáticamente el protocolo del dispositivo al recibir los mensajes.
- Verifique el APN y las credenciales de la SIM con su proveedor móvil antes de configurar para evitar fallas de conexión.
- Considere cambiar la contraseña por defecto del equipo después de la configuración exitosa siguiendo las instrucciones de Coban para mejorar la seguridad.

## Por qué usar Plaspy con esta configuración

Usar el BN-103A con Plaspy ofrece visibilidad centralizada de la ubicación de vehículos, alarmas y telemetría en toda la flota. Con el dispositivo configurado para reportar al endpoint y puerto compartidos de Plaspy, los administradores de flotas pueden recibir actualizaciones en tiempo real, notificaciones de eventos y reproducción histórica para apoyar la seguridad y la toma de decisiones operativas.

Aprenda más sobre cómo Plaspy puede administrar dispositivos BN-103A y otros activos de flota en https://www.plaspy.com y verifique los detalles de configuración específicos de cada dispositivo, cambios de firmware y comandos oficiales en el sitio del fabricante https://www.coban.net/. Las especificaciones del fabricante, la sintaxis de comandos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme la información actual con la documentación oficial de Coban.
