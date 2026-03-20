---
slug: /meitrack/t622l_f9/configuration
id: t622l_f9-configuration
sidebar_label: Configuration
title: Meitrack - T622L-F9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar Meitrack T622L F9 a Plaspy con comandos SMS de ejemplo y ajustes del servidor
keywords:
  - Configuración Meitrack T622L F9
  - Instalación Meitrack T622L F9
  - Configuración rastreador GPS Meitrack
  - Configuración servidor Plaspy
  - Configuración rastreador vehicular
  - Comandos SMS T622L F9
  - Configuración plataforma seguimiento de flotas
  - Configuración servidor rastreador GPS
  - Guía de instalación Meitrack
  - Configuración software de rastreo
---

# Meitrack - T622L-F9: Configuración

Esta página describe la configuración pública necesaria para usar el rastreador Meitrack T622L-F9 con Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de configuración habitual para apuntar el dispositivo a Plaspy, de modo que el equipo pueda reportar ubicaciones y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. La guía que sigue se basa en comandos de configuración públicos y en la información estándar del servidor Plaspy destinada a la integración de dispositivos.

## Resumen de la configuración

Configurar el T622L-F9 para Plaspy prepara el rastreador para enviar sus datos de ubicación y eventos a la plataforma y garantiza visibilidad en el panel de flota. El modelo soporta comandos de configuración por SMS según la documentación pública; el proceso normalmente implica ajustar los detalles del servidor GPRS, el intervalo de reporte y las reglas de notificación.

- Establecer el servidor GPRS del dispositivo hacia Plaspy para que el rastreador reenvíe los datos a la plataforma
- Configurar el intervalo de reporte y la zona horaria para que los datos lleguen en horarios previsibles
- Habilitar o ajustar el reporte de eventos para que las alertas sean visibles dentro de Plaspy
- Utilizar comandos SMS o la herramienta oficial del fabricante para aplicar los ajustes y guardar la configuración
- Verificar que el dispositivo sea visible y esté reportando en Plaspy después de aplicar la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP según la preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos conectados a Plaspy usan el mismo puerto y la plataforma detectará el protocolo que emplea el equipo, por lo que no es necesario enviar un identificador de protocolo a la plataforma.

## Requisitos típicos antes de la configuración

- El dispositivo debe tener alimentación y poder recibir SMS si va a usar comandos SMS para la configuración
- Una SIM con datos habilitados y configurada con el APN correcto y las credenciales que requiera el operador
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta de configuración de Meitrack
- Conocimiento de la contraseña actual del dispositivo si fue cambiada respecto al valor de fábrica
- Un plan para validar el rastreador después de la configuración para confirmar que está reportando a Plaspy
- Entender si el rastreador debe usar UDP o TCP como transporte

## Cómo se conecta este rastreador a Plaspy

El T622L-F9 se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que las actualizaciones de ubicación y los eventos configurados sean visibles en la plataforma. Plaspy recibe la conexión del dispositivo y detecta automáticamente el protocolo para interpretar los mensajes entrantes.

- El rastreador envía datos GPRS a d.plaspy.com o a la IP numérica 54.85.159.138 en el puerto 8888
- Puede elegir UDP o TCP como transporte cuando el dispositivo requiera una selección
- Los informes periódicos de posición y los mensajes de evento se entregan a Plaspy para su procesamiento
- Plaspy agrupa los mensajes entrantes del dispositivo y los asigna al perfil correcto mediante la detección de protocolo
- Validar el dispositivo en Plaspy confirma que los datos se reciben y se parsean correctamente

## Flujo de configuración común

1. Acceda al método de configuración oficial de Meitrack, ya sea mediante comandos SMS o la herramienta de software, para editar los parámetros del dispositivo
2. Ingrese el servidor de Plaspy usando d.plaspy.com o la IP numérica 54.85.159.138 en los ajustes de servidor del dispositivo
3. Configure el puerto del servidor en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos
4. Elija UDP o TCP como transporte si el equipo requiere que se seleccione uno
5. Aplique o guarde la configuración en el rastreador utilizando el método del fabricante
6. Reinicie el dispositivo si es necesario para aplicar los ajustes de red
7. Valide que el rastreador reporte a Plaspy comprobando la actividad del dispositivo en la plataforma

## Comandos de configuración de ejemplo

El T622L-F9 puede configurarse a través de comandos SMS. Los siguientes comandos públicos aparecen en la documentación del fabricante. La contraseña por defecto del dispositivo que se muestra más abajo es 0000. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por el APN, el usuario y la contraseña del APN de su operador cuando sea necesario.

- Reinicio opcional a configuración de fábrica usando la contraseña por defecto 0000
```text
0000,F11
```

- Establecer el servidor GPRS a Plaspy usando la IP numérica del servidor y el puerto, además del APN de la SIM
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es el APN de datos de la tarjeta SIM. {{apnu}} y {{apnp}} son marcadores de posición opcionales para el nombre de usuario y la contraseña del APN si su operador los requiere.

- Ajustar la zona horaria a UTC 0
```text
0000,B36,0
```

- Establecer el intervalo de subida a cada 1 minuto
```text
0000,A12,6,0
```

- Configurar el reporte de eventos tal como se muestra en la documentación pública
```text
0000,C03,0
```

Preserve el orden anterior al seguir el ejemplo del fabricante y reemplace los marcadores de posición con los valores reales del APN. Si cambió la contraseña del dispositivo desde el valor de fábrica 0000, use la contraseña actual.

## Notas de configuración

- Las revisiones de firmware o hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre verifique los comandos según las notas de la versión del firmware del dispositivo
- La configuración por SMS está soportada por los comandos públicos mostrados aquí y puede usarse cuando el dispositivo no se puede acceder mediante una herramienta de configuración
- Cuando esté disponible, elija UDP o TCP según sus necesidades de red; el dispositivo y Plaspy funcionarán con cualquiera de los dos transportes, y Plaspy detectará automáticamente el protocolo
- Use el mismo puerto 8888 para todos los dispositivos al apuntarlos a Plaspy para asegurar un enrutamiento correcto
- Mantenga la contraseña del dispositivo segura y cámbiela desde el valor de fábrica si su política de seguridad lo requiere
- Pruebe la configuración y confirme que el dispositivo aparece en Plaspy antes de finalizar la instalación

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Meitrack T622L-F9 ofrece un camino sencillo hacia la visibilidad consolidada de la flota y el monitoreo operativo. Al apuntar el rastreador al endpoint y puerto compartidos de Plaspy, las organizaciones pueden centralizar los reportes de ubicación y los datos de eventos del dispositivo y beneficiarse de la detección de protocolo y el manejo de dispositivos que ofrece Plaspy.

To learn more about Plaspy and how it integrates with compatible trackers visit https://www.plaspy.com. For the latest device specific commands, firmware notes, or changes to configuration methods verify details on the manufacturer website https://www.meitrack.com/ where Meitrack publishes official documentation and updates.
