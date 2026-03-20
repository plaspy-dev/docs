---
slug: /queclink/gb100p/configuration
id: gb100p-configuration
sidebar_label: Configuration
title: QuecLink - GB100P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GB100P para integrarlo con Plaspy, incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
  - QuecLink GB100P
  - Configuración GB100P
  - Configuración GB100P Plaspy
  - Configuración rastreador QuecLink
  - Guía configuración rastreador GPS
  - Instalación seguimiento de vehículos
  - Ajustes servidor QuecLink GB100P
  - Configuración servidor Plaspy
  - Configuración SMS GB100P
  - Configuración telemática UBI
---

# QuecLink - Configuración GB100P

Esta página describe el contexto público de configuración para usar el QuecLink GB100P con la plataforma Plaspy. Incluye los ajustes del servidor de Plaspy que debe apuntar el dispositivo, resume el flujo típico de configuración y ofrece ejemplos públicos de comandos SMS para preparar un GB100P para la ingestión por Plaspy. Use esta guía como referencia práctica mientras consulta la documentación oficial de QuecLink para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos concretos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; el GB100P puede configurarse mediante comandos SMS (ejemplos incluidos más abajo) u otros métodos de configuración de QuecLink según cómo esté aprovisionado el equipo.

## Resumen de la configuración

Configurar un GB100P para Plaspy prepara el dispositivo para enviar ubicación y telemetría al endpoint de Plaspy, verifica la conectividad por celular y permite que la plataforma muestre el equipo y sus eventos. Los comandos de ejemplo que siguen muestran los SMS públicos más comunes para ajustar el APN, el destino del servidor, el intervalo de reporte y las entradas de eventos.

- Apunte el dispositivo a los ajustes del servidor de Plaspy para que los mensajes se dirijan a Plaspy para su procesamiento.
- Configure el APN del operador móvil para que el reporte por GPRS funcione de forma fiable en la ubicación del dispositivo.
- Defina los intervalos de reporte y las entradas de evento para que el GB100P envíe la telemetría requerida a Plaspy.
- Valide la conectividad y la accesibilidad al servidor para que el dispositivo aparezca en Plaspy y envíe actualizaciones en tiempo real.
- Opcionalmente, restaure los valores de fábrica si parte de una configuración desconocida antes de aplicar los ajustes de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 (el dispositivo puede configurarse usando UDP o TCP)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para las conexiones al servidor

## Requisitos típicos antes de la configuración

- Una tarjeta SIM adecuada con datos habilitados y la información correcta del APN para el operador móvil
- Acceso al GB100P (alimentación, ubicación e acceso del instalador necesarios para enviar comandos SMS)
- Conocimiento de la contraseña por defecto del dispositivo queclink si los comandos SMS requieren autenticación
- Acceso a las herramientas oficiales de configuración de QuecLink, la sintaxis SMS o el software de instalador que recomiende el proveedor
- Un plan de prueba para verificar que el dispositivo informa al dominio o IP del servidor Plaspy y que aparece en la plataforma Plaspy

## Cómo se conecta este rastreador a Plaspy

El GB100P se configura para enviar sus paquetes de GPS y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir los paquetes de ubicación, choque y eventos para visibilidad en tiempo real e informes históricos. Dependiendo de la configuración, el dispositivo usará TCP o UDP en el puerto configurado y Plaspy detectará automáticamente el protocolo y analizará los mensajes entrantes.

- El dispositivo envía paquetes comprimidos de GPS y telemetría al endpoint d.plaspy.com en el puerto 8888
- El dispositivo puede usar transporte UDP o TCP según la configuración
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes sin cambiar puertos por dispositivo
- El reporte de eventos, como paquetes de choque o entradas SOS, se reenvía a Plaspy para alertas y análisis
- Conectividad exitosa hace que el dispositivo aparezca y reporte en la plataforma Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de QuecLink recomendado para su despliegue (comandos SMS, software de gestión de QuecLink o una herramienta de instalador).
2. Asegúrese de que el dispositivo tenga una SIM operativa y configure el APN del operador móvil usando el método de configuración del equipo.
3. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el GB100P y reinicie el dispositivo si el método lo solicita.
6. Valide que el dispositivo reporte correctamente a Plaspy confirmando la conectividad en la plataforma y comprobando la llegada de mensajes.
7. Si la conectividad falla, revise el APN, la cobertura y la sintaxis de los comandos SMS y vuelva a aplicar la configuración según sea necesario.

## Comandos de configuración de ejemplo

El QuecLink GB100P puede configurarse por SMS usando comandos de estilo AT. Los siguientes comandos públicos por SMS son ejemplos típicos extraídos de contenido público de QuecLink. La contraseña por defecto utilizada en estos ejemplos es queclink. Envíe cada comando como un SMS separado al número del dispositivo. Si parte de una configuración desconocida, el paso de restauración de fábrica puede realizarse primero y es opcional para dispositivos nuevos.

1. Restauración opcional a valores de fábrica (configuración inicial opcional)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador móvil
Nota: reemplace los marcadores con los valores de su operador. {{apn}} es el nombre del APN, {{apnu}} es el usuario del APN si se requiere, y {{apnp}} es la contraseña del APN si se requiere.
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Configurar el servidor GPRS tanto por dominio como por IP para Plaspy y establecer el puerto 8888
Este comando incluye el dominio y la IP de Plaspy como ejemplos públicos y especifica el puerto 8888 para ambas entradas.
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de reporte a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS para la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Si utiliza una herramienta de software del fabricante en lugar de SMS, aplique los mismos ajustes equivalentes en la herramienta siguiendo las indicaciones de QuecLink. Mantenga el orden de los comandos cuando aplique pasos iniciales de aprovisionamiento donde el orden sea significativo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y la sintaxis SMS; verifique la compatibilidad de comandos con el firmware del dispositivo antes de aplicar cambios.
- El GB100P admite configuración por SMS en ejemplos públicos, así que asegúrese de que el servicio SMS y el formato de los comandos sean correctos para su operador.
- Elija UDP o TCP para el transporte según el comportamiento de la red y la preferencia del instalador; Plaspy detectará el protocolo automáticamente cuando el dispositivo se conecte.
- Dado que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, use ese puerto al registrar los ajustes del servidor del dispositivo.
- Tenga presente la contraseña por defecto queclink; cámbiela si su política de seguridad lo requiere y luego utilice la contraseña actualizada para los comandos SMS subsecuentes.

## Por qué usar Plaspy con esta configuración

Usar el GB100P con Plaspy ofrece a las organizaciones un camino directo para recopilar GPS de alta resolución e información inercial, y procesar esos datos para seguimiento en tiempo real, alertas de eventos e informes históricos. Para programas que requieren captura de eventos de choque, puntuación UBI o almacenamiento confiable en cobertura celular intermitente, combinar el GB100P con Plaspy facilita una ingestión y monitoreo telemáticos centralizados y fiables.

Learn more about Plaspy at https://www.plaspy.com and confirm device specific configuration steps, firmware behavior, and the latest manufacturer guidance at the official QuecLink site https://www.queclink.com/ as these details can change over time.
