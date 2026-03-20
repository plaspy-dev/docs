---
slug: /carscop/cc_338/configuration
id: cc_338-configuration
sidebar_label: Configuration
title: Carscop - CC-338 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Carscop CC-338 con ajustes de servidor Plaspy y comandos SMS de ejemplo para la puesta en marcha
keywords:
  - Carscop CC-338 configuración
  - Carscop CC-338 instalación
  - Integración CC-338 Plaspy
  - Configuración rastreador GPS Carscop
  - Configuración telemática vehicular
  - Configuración OBD II CANBUS
  - Configuración rastreador car sharing
  - Configuración rastreador gestión de flotas
  - Configuración servidor rastreador GPS
  - Configuración rastreador Plaspy
---

# Carscop - CC-338 Configuración

Esta página cubre el contexto público de configuración para usar el Carscop CC-338 con Plaspy. Resume los ajustes de servidor que Plaspy requiere, describe el flujo típico de puesta en marcha e incluye los comandos SMS públicos que suelen utilizarse en la configuración inicial del equipo. El contenido se basa en la descripción del CC-338 y en los comandos y valores predeterminados publicados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El CC-338 admite configuración vía SMS en su conjunto de comandos públicos; use estos comandos o las herramientas del fabricante según corresponda y verifique las diferencias específicas del dispositivo en la documentación oficial del fabricante.

## Resumen de configuración

El objetivo de este proceso es apuntar el CC-338 a Plaspy, garantizar que la conectividad de datos móviles esté activa y validar que el dispositivo reporte ubicación y telemetría a la plataforma. Cuando está correctamente configurado, el CC-338 enviará la telemetría del vehículo y los mensajes de eventos a Plaspy para supervisión en tiempo real y flujos operativos.

- Configure el APN y las credenciales para la SIM instalada para que el equipo use datos móviles por GPRS o LTE.
- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma correcta.
- Active opciones de keepalive o reportes en línea para que la unidad mantenga una conexión activa con Plaspy.
- Verifique la zona horaria y valores predeterminados del dispositivo para que las marcas de tiempo y registros coincidan con su operación.
- Confirme que el dispositivo aparezca y reporte correctamente en Plaspy después de la configuración y de reiniciarlo si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

Estos valores son el endpoint público de Plaspy que debe usar al configurar el equipo o al ingresar los detalles del servidor GPRS/TCP.

## Requisitos previos para la configuración

- Una unidad CC-338 alimentada y accesible con una tarjeta SIM instalada y un plan de datos activo; la capacidad de enviar y recibir SMS es útil para la configuración por SMS.
- La contraseña predeterminada del dispositivo (ejemplo público) para configuración por SMS es 123456; confirme con su proveedor si esto ha sido cambiado.
- Información del APN del operador, nombre de usuario y contraseña necesarios para habilitar la conectividad de datos móviles en el dispositivo.
- Acceso a los comandos SMS del fabricante o a la herramienta de configuración y la posibilidad de enviar SMS desde un número autorizado.
- Un procedimiento claro para probar la conectividad y verificar que el dispositivo aparezca en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el CC-338 envía datos de ubicación, telemetría y eventos al endpoint y puerto compartidos de Plaspy para que los gestores de flota puedan ver el estado y el historial del vehículo en la plataforma Plaspy. Plaspy detecta automáticamente el protocolo del dispositivo y procesa los mensajes sin requerir un puerto exclusivo por equipo.

- El rastreador reporta posiciones GPS y telemetría a bordo al endpoint del servidor Plaspy (d.plaspy.com / 54.85.159.138) en el puerto 8888.
- Los mensajes de telemetría y eventos se envían por TCP o UDP según la selección de transporte del equipo y las condiciones de la red.
- Los comandos de keepalive o reporte en línea mantienen la sesión activa para que Plaspy reciba actualizaciones oportunas.
- Cuando no hay cobertura GSM o GPS, la unidad almacena registros y los reenvía a Plaspy una vez que se restablece la conectividad.
- Plaspy analiza los mensajes entrantes y los pone a disposición para monitoreo, alarmas y flujos de control remoto.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a la interfaz SMS del dispositivo según la documentación de Carscop.
2. Configure el APN del equipo y las credenciales APN necesarias para que haya datos móviles disponibles.
3. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 según el comando o la herramienta de configuración del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
6. Aplique o guarde la configuración y envíe comandos de keepalive o reporte en línea según sea necesario.
7. Reinicie el equipo si el fabricante lo requiere o después de un cambio de servidor.
8. Valide que el dispositivo reporte a Plaspy y aparezca en su instancia de Plaspy con telemetría en vivo.

Si usa configuración por SMS, siga el orden de comandos del fabricante y respete los retardos necesarios entre comandos.

## Ejemplos de comandos de configuración

El ejemplo público de configuración del CC-338 usa comandos SMS. Los comandos de ejemplo a continuación utilizan la contraseña predeterminada del dispositivo 123456 tal como aparece en la configuración pública del modelo. Conserve los marcadores de posición donde se indican.

- Reinicio de fábrica opcional (usar solo cuando sea necesario o durante la provisión inicial):
```text
RESET*123456
```

- Ajustar la zona horaria del dispositivo a UTC+0:
```text
TIMEZONE*123456*+00
```

- Configurar el APN del operador (reemplace [apn] por el APN de su operador):
```text
APN*123456*[apn]
```

- Establecer nombre de usuario y contraseña del APN si el operador los requiere (reemplace marcadores):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Establecer el servidor GPRS con la IP y puerto de Plaspy (este comando público usa la IP de Plaspy y el puerto 8888):
```text
IP*123456*54.85.159.138,8888
```

- Mantener el rastreador en línea (activar reporte periódico/keepalive):
```text
KEEPONLINE*123456
```

Notas sobre los marcadores de posición:
- [apn] — reemplace por la cadena APN de su operador móvil.
- [apnu] — reemplace por el usuario del APN si es requerido.
- [apnp] — reemplace por la contraseña del APN si es requerida.

Estos comandos se proporcionan en la configuración pública del modelo. Algunos equipos o versiones de firmware pueden aceptar comandos equivalentes usando el dominio d.plaspy.com o la configuración mediante el software del fabricante; utilice el método apropiado para su despliegue y verifique con la documentación del fabricante.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones soportadas; siempre verifique los comandos con el número de serie del equipo y la documentación vigente del fabricante.
- El ejemplo público del CC-338 utiliza comandos SMS para la configuración; muchos integradores prefieren la herramienta de configuración del fabricante o un método de aprovisionamiento autenticado cuando está disponible.
- Elija UDP o TCP según su red y las opciones del dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- KEEPONLINE o ajustes equivalentes de keepalive ayudan a mantener una conexión activa para que Plaspy reciba actualizaciones puntuales.
- La contraseña SMS por defecto 123456 se muestra en el ejemplo público; cambie contraseñas de fábrica según las recomendaciones del proveedor para despliegues en producción.

## Por qué usar Plaspy con esta configuración

Usar el CC-338 con Plaspy ofrece a operadores de flotas y proveedores de car sharing una vía integrada para seguimiento en vivo, telemetría y control remoto del vehículo. Apuntar el equipo a Plaspy y habilitar reportes keepalive proporciona visibilidad centralizada de ubicación, eventos de ignición y puertas, alarmas de sensores y telemetría que apoyan los flujos operativos y la respuesta ante incidentes.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique las instrucciones de instalación y la sintaxis de comandos más recientes en la documentación oficial de Carscop en http://www.carscop.com/ antes del despliegue.
