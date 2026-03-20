---
slug: /atrack/al300/configuration
id: al300-configuration
sidebar_label: Configuration
title: ATrack - AL300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador ATrack AL300 con Plaspy incluyendo ajustes de servidor y comandos AT de ejemplo
keywords:
  - Configuración ATrack AL300
  - Instalación ATrack AL300
  - Configuración AL300 Plaspy
  - Configuración servidor AL300
  - Configuración rastreador GPS AL300
  - Configuración GPS ATrack
  - Configuración telemática AL300
  - Configuración rastreador Plaspy
  - Rastreo vehicular AL300
  - Configuración firmware AL300
---

# ATrack - Configuración del AL300

Esta página ofrece el contexto público de configuración para usar el rastreador GPS ATrack AL300 con Plaspy. Se centra en los ajustes de servidor prácticos, los requisitos previos necesarios y ejemplos de comandos estilo AT que suelen utilizarse para apuntar el dispositivo hacia Plaspy. El material está pensado para integradores técnicos, administradores de flotas e instaladores que requieren una guía clara y orientada a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos de configuración en el equipo fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los ejemplos aquí son una referencia práctica y se recomienda confirmar los pasos finales con la documentación del fabricante.

## Resumen de la configuración

El proceso de configuración prepara el AL300 para comunicarse de forma fiable con Plaspy y para reportar posición y eventos con el intervalo y formato deseados. El objetivo principal es habilitar el acceso a la red, definir el formato de reporte y establecer el endpoint del servidor para que Plaspy pueda ingerir la telemetría automáticamente.

- Apuntar el AL300 al endpoint y puerto del servidor Plaspy para que el dispositivo pueda abrir una sesión GPRS y enviar reportes.  
- Configurar el modo de reporte y el intervalo para que los mensajes de ubicación y eventos se envíen con la frecuencia requerida.  
- Establecer reglas de reporte de entradas y eventos (por ejemplo ACC o ignición) para asegurarse de que Plaspy reciba las alertas relevantes.  
- Validar la conectividad y el estado del dispositivo desde el rastreador usando el comando de verificación del proveedor.  
- Confirmar que el dispositivo aparece en los paneles de Plaspy una vez que empiece a reportar.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte UDP o TCP (el AL300 puede configurarse para usar cualquiera de los dos)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos

- Un dispositivo AL300 alimentado con acceso a la interfaz de configuración del fabricante o a su herramienta de configuración.  
- Una tarjeta SIM celular válida con un plan de datos y credenciales APN correctas para la red móvil objetivo.  
- Acceso al método de configuración compatible con el AL300 (por ejemplo consola de comandos AT, software del proveedor o configuración por SMS cuando esté soportada).  
- Conocimiento de las credenciales APN y cualquier usuario o contraseña que requiera el operador móvil (en los ejemplos se usan marcadores de posición).  
- Un vehículo de prueba o una fuente de alimentación de banco y un lugar seguro para reiniciar el dispositivo durante la configuración y validación.  
- Acceso a la cuenta de Plaspy o al contacto administrativo para confirmar que el dispositivo aparece y reporta correctamente tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AL300 abre una sesión de datos celular y envía paquetes de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes, detecta el protocolo automáticamente y mapea la telemetría entrante en la plataforma para su monitoreo y alertas.

- El rastreador se configura para reportar al endpoint d.plaspy.com o a la dirección IP 54.85.159.138 en el puerto 8888.  
- El transporte puede establecerse en UDP o TCP en el dispositivo según la preferencia del instalador o el comportamiento de la red.  
- Eventos del dispositivo como ACC/ignición, rastreo por tiempo y eventos de movimiento se transmiten a Plaspy para alertas e informes históricos.  
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que generalmente no es necesario especificar un mapeo de protocolo personalizado en la plataforma.  
- Tras la configuración y un reinicio si es necesario, el dispositivo debería aparecer en Plaspy y comenzar a enviar actualizaciones regulares.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de ATrack o al software proporcionado por el fabricante (por ejemplo consola de comandos AT, herramienta de configuración del proveedor o comandos SMS soportados).  
2. Introduzca el endpoint del servidor Plaspy: puede usar el dominio d.plaspy.com o la IP 54.85.159.138 según su preferencia de configuración.  
3. Ajuste el puerto del servidor a 8888. Plaspy usa este mismo puerto para todos los dispositivos compatibles.  
4. Si el AL300 requiere selección de transporte, elija UDP o TCP según la red y las necesidades de la instalación.  
5. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.  
6. Valide que el dispositivo reporta a Plaspy revisando el comando de estado en el rastreador y confirmando que aparece en los paneles de Plaspy.  
7. Si el dispositivo no es visible, revise la configuración APN, el registro en la red y cualquier restricción de firewall o del operador que pueda bloquear conexiones salientes hacia el endpoint de Plaspy.

## Comandos de configuración de ejemplo

El AL300 admite comandos de configuración estilo AT. La secuencia de ejemplo a continuación sigue los comandos públicos proporcionados por el fabricante para establecer reportes de entradas, intervalos de reporte, formato de mensaje y el servidor GPRS. Conserve el orden al aplicar estos comandos.

- Configurar reporte de evento ACC (ignición) y acciones:
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer intervalo de rastreo/report a 60 segundos:
```text
AT$TRAC=1,60,,,,,2
```

- Configurar formato de mensaje binario (empaquetado):
```text
AT$FORM=1,@P,0,""
```

- Configurar el servidor GPRS y ajustes APN (se mantienen marcadores de posición):
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```

Notas sobre los marcadores:
- {{apn}} es el nombre del APN del operador móvil.  
- {{apnu}} es el nombre de usuario del APN si lo requiere el operador.  
- {{apnp}} es la contraseña del APN si lo requiere el operador.

- Para verificar el estado del dispositivo:
```text
AT$INFO=?
```

Estos comandos se suministran como ejemplos públicos. El transporte exacto del comando y el método de entrada pueden variar (serie directa, USB, herramienta de configuración o SMS) según el firmware y las herramientas del proveedor para el AL300.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme el soporte exacto de comandos para la versión de firmware de su dispositivo.  
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; UDP se usa comúnmente por su menor sobrecarga, mientras que TCP puede ofrecer confirmación de entrega.  
- El comando GPRS de ejemplo usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888; también puede usar el dominio d.plaspy.com cuando el dispositivo soporte nombres de dominio.  
- Mantenga las credenciales APN seguras y verifique que sean correctas para el operador de la SIM.  
- Use el comando de verificación del dispositivo (AT$INFO=? en el ejemplo) para confirmar el estado de registro y la sesión GPRS antes de esperar datos en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el ATrack AL300 con Plaspy proporciona un camino directo hacia visibilidad en tiempo real, alertas por eventos e informes históricos para flotas y activos. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo simplifican la integración para que dispositivos de distintos fabricantes se incorporen con parámetros de servidor consistentes y un comportamiento predecible.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de ATrack https://www.atrack.com.tw/. Las especificaciones del fabricante y los procedimientos de instalación pueden cambiar con el tiempo, por lo que siempre confirme la documentación actual con el proveedor del dispositivo.
