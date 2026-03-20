---
slug: /topshine/vt1000/configuration
id: vt1000-configuration
sidebar_label: Configuration
title: TopShine - VT1000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador TopShine VT1000 con los ajustes de servidor de Plaspy y comandos SMS
keywords:
  - Configuración TopShine VT1000
  - Configuración VT1000 Plaspy
  - Configuración rastreador TopShine
  - Configuración servidor VT1000
  - Configuración rastreador GPS VT1000
  - Integración TopShine Plaspy
  - Configuración rastreador de vehículo
  - Rastreo de flotas VT1000
  - Ajustes servidor rastreador GPS
  - Configuración SMS del rastreador
---

# TopShine - VT1000 Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopShine VT1000 con Plaspy. Resume los ajustes de servidor de Plaspy que debe aplicar al VT1000, detalla los prerequisitos típicos y ofrece ejemplos de comandos SMS de provisión que suele utilizarse para la configuración inicial según lo publicado por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y realiza detección automática del protocolo para aceptar conexiones de rastreadores que usan protocolos comunes. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que use esta página como una guía práctica de integración y confirme cualquier detalle específico del dispositivo con la documentación del fabricante.

## Resumen de la configuración

El objetivo de este proceso es preparar el VT1000 para que informe de forma fiable la posición y la telemetría a Plaspy, y para que los gestores de flota puedan comprobar que el dispositivo es visible en la plataforma. El VT1000 admite informes por TCP y UDP y también puede usar SMS para comandos y algunos mecanismos de respaldo; los comandos de ejemplo que siguen utilizan el método de provisión por SMS del fabricante.

- Configure los ajustes de red del dispositivo para que apunten al endpoint y puerto del servidor de Plaspy.
- Provisione el identificador del dispositivo y el APN para que las sesiones de datos GPRS o 4G funcionen.
- Verifique que el dispositivo esté en modo de reporte GPRS o 4G y establezca un intervalo de reporte adecuado.
- Confirme que el rastreador sea visible en Plaspy y que envíe actualizaciones de ubicación y alertas.
- Utilice comandos SMS para la provisión inicial si el instalador no dispone de una herramienta de configuración.

## Ajustes del servidor Plaspy

Use las siguientes configuraciones públicas de Plaspy al configurar el VT1000. Estos valores son los ajustes de servidor compartidos que Plaspy emplea para los dispositivos compatibles.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad VT1000 alimentada y accesible para recibir SMS o para acceso con la herramienta de configuración.
- Una SIM activa con un plan de datos y el APN correcto configurado.
- Capacidad para enviar comandos SMS de provisión desde un teléfono móvil si va a usar la configuración por SMS.
- El IMEI del dispositivo disponible para usarlo como identificador cuando sea necesario.
- Acceso a la documentación del fabricante o al software de configuración para firmware o ajustes avanzados.
- Un plan para validar la conectividad en Plaspy después de la provisión.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el VT1000 envía posición y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes del dispositivo, detecta el protocolo automáticamente y muestra ubicación, alertas y telemetría en la plataforma.

- El dispositivo se configura para enviar paquetes TCP o UDP GPRS o 4G a d.plaspy.com (54.85.159.138) en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo dentro de Plaspy.
- Las actualizaciones regulares de ubicación y los informes de alarma se reenvían a Plaspy para cartografía y alertas.
- SMS puede usarse para la provisión y como transporte alternativo para comandos o diagnósticos.
- Una vez que informe correctamente, el dispositivo aparecerá en Plaspy y brindará visibilidad de telemetría y eventos a los operadores de flota.

## Flujo de trabajo común de configuración

Siga este flujo de trabajo práctico para provisionar un VT1000 y que reporte a Plaspy. Ajuste los pasos según las herramientas del instalador o los procedimientos locales según sea necesario.

1. Acceda al método oficial de configuración de TopShine para el VT1000, usando la provisión por SMS o la herramienta de configuración del fabricante según esté disponible.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP en el puerto 8888 si el dispositivo requiere una selección de transporte.
5. Configure el APN y cualquier usuario o contraseña de APN que requiera el operador de la SIM.
6. Aplique o guarde la configuración y cambie el dispositivo al modo de reporte GPRS o 4G si es necesario.
7. Reinicie o apague y encienda el dispositivo si el fabricante recomienda un reinicio tras cambiar los ajustes.
8. Valide que el dispositivo informa a Plaspy comprobando la visibilidad del dispositivo y las actualizaciones de posición recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El VT1000 admite provisión por SMS. A continuación se muestran comandos SMS y plantillas comúnmente publicados en la referencia del fabricante. La contraseña de fábrica utilizada en estos ejemplos es 000000, que es el valor predeterminado en muchas unidades VT1000. Preserve los marcadores de posición donde corresponda:

- Restablecer a ajustes de fábrica (paso inicial opcional)
```text
W000000,990,099###
```

- Establecer el ID del dispositivo
  - La plantilla de ID de dispositivo usa los primeros 14 dígitos derivados del IMEI. Plaspy utilizará el IMEI completo de 15 dígitos para la identificación del dispositivo en la plataforma.
```text
W000000,010,{{device_id14}}
```
  - Sustituya {{device_id14}} por los primeros 14 dígitos que obtenga del IMEI. Por ejemplo, si el IMEI es 123456789012345 use 12345678901234 en este comando.

- Establecer el APN del operador
  - Si sólo se requiere un APN:
```text
W000000,011,{{apn}}
```
  - Si se requiere usuario y contraseña del APN, incluya estos marcadores:
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
  - Explicación de los marcadores:
    - {{apn}} = APN de datos celulares del operador de la SIM
    - {{apnu}} = usuario del APN si es requerido
    - {{apnp}} = contraseña del APN si es requerida

- Establecer el servidor GPRS y el puerto apuntando a Plaspy
```text
W000000,012,54.85.159.138,8888
```
  - Esto configura el dispositivo para enviar datos a Plaspy en el puerto 8888.

- Cambiar el dispositivo al modo de reporte GPRS
```text
W000000,013,2
```

- Establecer el intervalo de actualización (código numérico del fabricante)
```text
W000000,014,6
```
  - El valor numérico usado aquí sigue el significado del fabricante para la frecuencia de reporte. Confirme la semántica del intervalo con la documentación de TopShine.

- Obtener IMEI del dispositivo (comando de verificación)
```text
W000000,601
```

Nota: El formato exacto de los SMS y las secuencias de comandos necesarias pueden variar según la versión de firmware y personalizaciones locales del dispositivo. Use la documentación del fabricante como fuente autorizada cuando tenga dudas.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando o las funciones disponibles. Verifique la sintaxis de los comandos contra las notas de la versión del firmware del VT1000.
- La provisión por SMS es útil cuando se está en sitio o no se dispone de una herramienta de configuración, pero asegúrese de que la SIM pueda recibir y enviar SMS.
- La selección TCP frente a UDP puede afectar la fiabilidad o la latencia. Elija el transporte recomendado para su entorno de red; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- La contraseña predeterminada del dispositivo en los ejemplos públicos es 000000. Si su dispositivo tiene una contraseña distinta, sustitúyala en los comandos donde corresponda.
- Confirme las credenciales del APN con el operador móvil antes de configurarlas en el dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el VT1000 con Plaspy permite a las flotas combinar de forma práctica telemetría de vehículos, conectividad de pasajeros y soporte de video en una sola plataforma en la nube. Al apuntar el VT1000 a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirmar los ajustes de transporte, los equipos pueden comenzar rápidamente a recopilar en tiempo real ubicación, alertas y datos de sensores en Plaspy para despacho, seguridad e informes.

Learn more about how Plaspy organizes device telemetry and fleet visibility at https://www.plaspy.com. For the latest VT1000 specific commands, firmware notes, and device manuals, verify setup details on the manufacturer website https://www.gztopshine.com/ since device behavior and provisioning steps can change as firmware and hardware are updated.
