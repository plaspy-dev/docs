---
slug: /jointech/jt709a/configuration
id: jt709a-configuration
sidebar_label: Configuration
title: Jointech - JT709A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech JT709A para conectarlo a Plaspy usando los ajustes públicos del servidor Plaspy
keywords:
  - Configuración Jointech JT709A
  - Configuración JT709A
  - Configuración JT709A Plaspy
  - Configuración servidor JT709A
  - Configuración rastreador GPS Jointech
  - Configuración rastreador de seguridad de activos
  - Integración de rastreador con Plaspy
  - Configuración rastreador de sello de contenedor
  - Configuración SMS JT709A
  - Configuración APN GPRS
---

# Jointech - Configuración JT709A

Esta página documenta el contexto público de configuración para usar el Jointech JT709A con Plaspy. Explica los pasos prácticos y los ajustes públicos necesarios para apuntar el dispositivo a Plaspy y que el rastreador envíe ubicación y telemetría de eventos a la plataforma. Cuando el fabricante publica detalles de configuración, se incluyen aquí como ejemplos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JT709A soporta configuración por SMS para los parámetros GPRS y APN, método común incluido más abajo para preparar el equipo para la comunicación con Plaspy.

## Resumen de la configuración

El objetivo de esta configuración es preparar el JT709A para comunicarse con Plaspy y validar que el dispositivo sea visible y reporte correctamente en la plataforma. Las acciones típicas incluyen definir el endpoint del servidor GPRS, las credenciales APN si son requeridas, elegir el tipo de transporte cuando sea necesario y confirmar el reporte del dispositivo.

- Configurar la dirección del servidor GPRS y el APN para que el rastreador pueda abrir sesión de datos con Plaspy
- Proveer usuario y contraseña del APN cuando el operador de la SIM requiera autenticación
- Seleccionar UDP o TCP en el dispositivo si el rastreador exige elección explícita de transporte
- Guardar y aplicar los ajustes y luego verificar que el equipo se conecte y reporte a Plaspy
- Usar comandos por SMS o la herramienta oficial del fabricante según la instalación y el firmware

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son los ajustes públicos de Plaspy que debe ingresar en el JT709A o al configurar mediante las herramientas del fabricante. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador una vez que el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Un JT709A cargado e instalado o accesible para la configuración
- Una tarjeta SIM activa con datos o GPRS habilitado y capacidad de SMS si va a usar configuración por SMS
- El ID del dispositivo JT709A disponible para usar en comandos SMS o en el software del fabricante
- Acceso al método o herramienta oficial de configuración del fabricante para la revisión de firmware que tenga
- Conocimiento de la cadena APN y del usuario y contraseña APN opcionales que exige el operador móvil
- Acceso administrativo a Plaspy para verificar que el dispositivo aparece y envía telemetría

## Cómo se conecta este rastreador a Plaspy

El JT709A se configura para reportar posición y telemetría de eventos al endpoint y puerto del servidor Plaspy, lo que permite visibilidad y alertas basadas en eventos dentro de la plataforma. Una vez que el dispositivo apunta al endpoint de Plaspy y establece el transporte, Plaspy ingiere automáticamente el protocolo del rastreador.

- El rastreador abre una sesión de datos GPRS dirigida a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El rastreador usa UDP o TCP según la configuración del equipo y el entorno de red
- Los mensajes de ubicación y eventos se entregan a Plaspy, que detecta el protocolo automáticamente
- Plaspy ofrece ubicación en tiempo real, reporte de eventos y visibilidad del estado del dispositivo para el JT709A
- Un reporte exitoso habilita geocercas, alertas y registros de auditoría para eventos de apertura y manipulación

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Jointech para el JT709A, como el protocolo SMS del fabricante o una herramienta de configuración del proveedor
2. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor en la configuración del dispositivo
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos
4. Elija UDP o TCP si el rastreador requiere selección explícita del transporte
5. Proporcione el valor del APN y las credenciales del APN si el proveedor de SIM las solicita
6. Aplique o guarde la configuración y reinicie el equipo si el dispositivo o firmware requiere un reinicio
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta de Plaspy con los datos de ubicación y eventos esperados

## Comandos de configuración de ejemplo

El JT709A puede configurarse enviando comandos por SMS al dispositivo. Reemplace los valores de marcador antes de enviar. El orden de los comandos importa al aplicar GPRS y credenciales APN.

- Ingrese el ID del dispositivo en el comando donde se indica [trackerID]. Este es el identificador único que el rastreador usa para aceptar mensajes de configuración.

1) Configurar servidor GPRS y APN
Envíe este SMS al número del dispositivo, reemplazando los marcadores según corresponda:

```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

- Reemplace [trackerID] por el ID del dispositivo.
- Reemplace [apn] por la cadena APN de su operador móvil.

2) Configurar usuario y contraseña del APN si el operador lo requiere
Este comando es opcional y sólo es necesario cuando el APN exige autenticación:

```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

- Reemplace [apnu] por el usuario del APN si es requerido.
- Reemplace [apnp] por la contraseña del APN si es requerida.

Notas sobre los comandos
- Estos comandos SMS configuran el rastreador para usar la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Alternativamente puede usar el dominio d.plaspy.com en las herramientas del fabricante si el rastreador soporta nombres de dominio.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el firmware y la vía de configuración.
- Mantenga a mano la referencia original de comandos del fabricante y verifique la sintaxis exacta para su revisión de firmware.

## Observaciones de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros disponibles. Confirme siempre los formatos de comando con la documentación del fabricante.
- La configuración por SMS está soportada por los comandos públicos anteriores, pero el software del proveedor o una herramienta de configuración pueden ofrecer un flujo más seguro y para configuraciones en lote.
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones del operador. Plaspy acepta ambos transportes en el puerto compartido.
- Evite exponer credenciales sensibles por canales no seguros. El usuario y la contraseña del APN pueden enviarse por SMS en algunas configuraciones; siga las políticas de seguridad de su organización.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo llega al endpoint del servidor, así que utilice el puerto y los ajustes de servidor compartidos mencionados arriba.

## Por qué usar Plaspy con esta configuración

Usar el JT709A con Plaspy brinda a los equipos operativos una manera directa de centralizar ubicación precisa, eventos de manipulación y telemetría de apertura de activos sellados en una sola plataforma. Esta integración respalda la cadena de custodia, mejora la respuesta a incidentes y reduce visitas innecesarias al sitio al mostrar eventos y el estado del dispositivo en tiempo real.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para las instrucciones de configuración más recientes por dispositivo, notas de firmware y referencias de comandos, verifique los detalles en el sitio del fabricante https://www.jointcontrols.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
