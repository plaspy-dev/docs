---
slug: /topshine/vt1000f/configuration
id: vt1000f-configuration
sidebar_label: Configuration
title: TopShine - VT1000F Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine VT1000F con ajustes de servidor Plaspy y comandos SMS para configuración GPRS y SMS
keywords:
  - configuración TopShine VT1000F
  - instalación TopShine VT1000F
  - configuración Plaspy VT1000F
  - ajustes servidor VT1000F
  - configuración rastreador GPS VT1000F
  - configuración rastreador Plaspy
  - rastreador vehicular VT1000F
  - comandos SMS VT1000F
  - configuración GPRS VT1000F
  - rastreo de flotas VT1000F
---

# TopShine - Configuración del VT1000F

Esta página documenta el contexto público de configuración para usar el TopShine VT1000F con Plaspy. Incluye los ajustes de servidor Plaspy que debe aplicar al dispositivo, un resumen de los pasos típicos de instalación y los comandos SMS públicos que proporciona el fabricante. Cuando corresponde, esta guía conserva marcadores de posición y ejemplos originales para que pueda adaptarlos a su implementación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT1000F admite configuración por GPRS y por SMS; el fabricante publica comandos SMS y una contraseña predeterminada del dispositivo 000000 en el flujo de configuración pública que se muestra abajo.

## Resumen de la configuración

El proceso de configuración prepara el VT1000F para comunicarse de forma fiable con Plaspy, verifica la conectividad y habilita la visibilidad de la unidad en la plataforma. Los comandos públicos del fabricante muestran una opción de configuración vía SMS; alternativamente puede usar el software o la herramienta de aprovisionamiento oficial de TopShine si está disponible.

- Configure el endpoint de red del dispositivo para apuntar al servidor Plaspy y que los mensajes GPRS lleguen a la plataforma.
- Aplique el APN y los parámetros de datos del operador para que el VT1000F pueda establecer sesión GPRS.
- Cambie el dispositivo a modo GPRS y confirme los ajustes de transporte (TCP o UDP) si el equipo requiere seleccionar el transporte.
- Valide el IMEI y el identificador del dispositivo para que Plaspy pueda mapear la unidad correctamente.
- Confirme que el dispositivo está reportando ubicación y eventos a Plaspy después de aplicar la configuración.
- Use los comandos SMS del fabricante o la herramienta de configuración según su método de aprovisionamiento preferido.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Estos valores son los ajustes públicos del endpoint de Plaspy que debe usar al configurar el VT1000F. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del dispositivo.

## Requisitos típicos antes de la instalación

- Un VT1000F alimentado, con acceso al IMEI de la unidad y el cableado necesario para alimentación y monitoreo de encendido si aplica.
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil.
- Capacidad para enviar SMS al dispositivo o acceso a la utilidad de configuración oficial de TopShine proporcionada por el proveedor.
- Conocimiento de la contraseña predeterminada del dispositivo 000000 cuando se utilicen comandos SMS (presente en la guía pública del fabricante).
- Verificar que los ajustes del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 estén accesibles desde su red.
- Un entorno de prueba en Plaspy para comprobar que el dispositivo reporta correctamente antes de un despliegue masivo.

## Cómo se conecta este rastreador a Plaspy

El VT1000F se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la posición del vehículo, la telemetría y las alarmas aparezcan en la plataforma. Según la configuración, el dispositivo usará sesiones de datos GPRS (TCP o UDP) o hará fallback a reportes por SMS para eventos críticos.

- El rastreador envía datos GPRS a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del dispositivo y mapea los mensajes entrantes al tipo de rastreador correcto.
- Las actualizaciones de ubicación y eventos del VT1000F —como eventos de iButton para conductor, SOS o estado de inmovilizador— se reenvían a Plaspy para monitoreo y alertas.
- El dispositivo puede validarse confirmando que los mensajes llegan al endpoint de Plaspy y aparecen en la plataforma.
- Cuando se admiten comandos SMS, la configuración y la diagnosis pueden realizarse por SMS como parte del flujo de aprovisionamiento.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TopShine o a la interfaz SMS según la documentación del proveedor o instalador.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Configure el puerto del servidor en 8888 en la configuración del dispositivo.
4. Elija el protocolo de transporte UDP o TCP si el equipo requiere una selección explícita.
5. Aplique o guarde la configuración y, si el dispositivo lo solicita, reinicie o corte y restablezca la alimentación del VT1000F.
6. Valide que el dispositivo reporte ubicación y eventos en Plaspy comprobando la unidad en la plataforma.
7. Si usa configuración vía SMS, envíe los comandos del fabricante en el orden recomendado y confirme las respuestas del dispositivo.

## Comandos de configuración de ejemplo

El fabricante facilita comandos SMS públicos para la configuración. Los siguientes comandos son ejemplos públicos; reemplace los marcadores de posición donde se indique. La contraseña predeterminada del dispositivo mostrada en la guía pública es 000000.

- Restablecer a configuración de fábrica (paso inicial opcional)
```text
W000000,990,099###
```

- Establecer el ID del dispositivo
  - La guía del fabricante indica usar los primeros 14 dígitos del IMEI del dispositivo al configurar el Id interno. Tenga en cuenta que Plaspy utiliza el IMEI completo (15 dígitos) como identificador en la plataforma.
```text
W000000,010,12345678901234
```
  Reemplace los dígitos anteriores con los primeros 14 dígitos del IMEI de su dispositivo.

- Configurar el APN del operador
  - Use el APN de su operador móvil. Puede suministrarse opcionalmente usuario y contraseña del APN si su operador lo requiere. Los marcadores de posición a continuación se conservan de la guía pública.
```text
W000000,011,[apn],[apnu],[apnp]
```
  - [apn] = APN del operador
  - [apnu] = usuario APN (opcional)
  - [apnp] = contraseña APN (opcional)

- Establecer el servidor GPRS a Plaspy (IP pública y puerto mostrados)
```text
W000000,012,54.85.159.138,8888
```

- Cambiar el dispositivo a modo GPRS
```text
W000000,013,2
```

- Establecer el intervalo de actualización (valor de ejemplo)
```text
W000000,014,6
```

- Consultar IMEI del dispositivo (comando de verificación)
```text
W000000,601
```

Notas sobre estos comandos:
- El prefijo con la contraseña del dispositivo 000000 sigue los ejemplos públicos. Si la contraseña de su equipo fue cambiada, use la contraseña actual en lugar de 000000.
- Mantenga el orden de comandos cuando realice el aprovisionamiento inicial: restablecimiento de fábrica (opcional), establecer ID del dispositivo, configurar APN, definir servidor, cambiar a GPRS y luego fijar el intervalo de reporte.
- El comando APN conserva marcadores de posición; reemplácelos por los valores de su operador al enviar el SMS.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden modificar los comandos disponibles y la sintaxis exacta de los SMS; confirme siempre la sintaxis de comandos contra la documentación actual de TopShine o las notas de la versión del proveedor.
- El VT1000F admite configuración tanto por SMS como por GPRS según la guía pública; el aprovisionamiento por SMS es útil durante la instalación cuando aún no hay conectividad de datos.
- Elija UDP o TCP según los requisitos de su instalación; Plaspy soporta ambos y detectará automáticamente el protocolo, pero debe establecer el transporte coherente con las políticas de la red local.
- Todos los dispositivos en Plaspy usan el puerto 8888 para conectividad al servidor y Plaspy detecta automáticamente los protocolos de los rastreadores entrantes.
- Cuando utilice marcadores de posición de APN, asegúrese de proporcionar el APN, el usuario y la contraseña correctos para la SIM en uso para que se establezca la sesión GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el VT1000F para reportar a Plaspy ofrece a los operadores una plataforma consolidada para seguimiento en tiempo real, eventos de identificación de conductor, alertas SOS y reporte de telemetría. Las funciones de conmutación entre cinco SIM del VT1000F y la integración con iButton para conductores ayudan a mantener la conectividad continua y a asociar recorridos con conductores, mientras Plaspy ingiere los datos para mapas, alertas y análisis históricos.

Learn more about Plaspy and how to apply these server settings on the Plaspy website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the official TopShine documentation at https://www.gztopshine.com/ as vendor guidance can change over time.
