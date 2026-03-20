---
slug: /atrack/al11/configuration
id: al11-configuration
sidebar_label: Configuration
title: ATrack - AL11 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el ATrack AL11 para usarlo con Plaspy incluyendo ajustes de servidor comandos y flujo de instalación práctico
keywords:
  - configuración ATrack AL11
  - instalación ATrack AL11
  - configuración AL11 Plaspy
  - instalación rastreador GPS AL11
  - ajustes servidor ATrack AL11
  - comandos ATrack AL11
  - configuración dispositivo Plaspy
  - configuración plataforma rastreadores GPS
  - rastreo vehicular AL11
  - configuración GPRS AL11
---

# ATrack - Configuración del AL11

Esta página documenta el contexto público de configuración para usar el rastreador ATrack AL11 con Plaspy. Se centra en los ajustes de servidor prácticos y en comandos de ejemplo que se utilizan habitualmente para apuntar el AL11 a Plaspy, de modo que el dispositivo pueda reportar ubicación y eventos a la plataforma. Utilice esta guía para entender qué preparar antes de la integración y dónde buscar detalles específicos del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica el proceso de apuntar los equipos a la plataforma. Los pasos de configuración por parte del fabricante para el AL11 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; los comandos de ejemplo que se muestran aquí son comandos públicos estilo AT y deben compararse con el manual del AL11 o con la utilidad de configuración de ATrack para su firmware y método de instalación específicos.

## Resumen de la configuración

Estos pasos preparan el AL11 para comunicarse con Plaspy y validan la conectividad para que el dispositivo sea visible en la plataforma. Los comandos de ejemplo incluidos son muestras públicas que se usan comúnmente para configurar el reporte de eventos ACC, el intervalo de seguimiento, el formato de los mensajes y el destino del servidor GPRS para Plaspy.

- Configure el reporte de entradas/eventos para que el AL11 envíe eventos de ACC o encendido al servidor.
- Establezca un intervalo de seguimiento periódico para controlar la frecuencia de las actualizaciones de ubicación.
- Seleccione el formato de mensaje (binario o texto) que requiera su integración.
- Apunte la configuración GPRS del dispositivo al endpoint y puerto del servidor Plaspy.
- Verifique el estado del dispositivo usando el comando de consulta proporcionado para confirmar la conectividad.

## Ajustes del servidor Plaspy

Configure el dispositivo para que reporte a Plaspy usando estos ajustes públicos de servidor. Plaspy requiere el mismo puerto para todos los dispositivos y detectará el protocolo del rastreador automáticamente.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Fuente de alimentación confiable para el AL11 y cualquier cableado requerido para la instalación elegida.
- SIM activa con datos (GPRS/4G) y valores APN conocidos del operador móvil.
- Acceso al método oficial de configuración ATrack para el AL11 (serie, USB, SMS o la herramienta del proveedor según corresponda).
- Conocimiento de la versión de firmware y la revisión de hardware del dispositivo para usar la sintaxis de comandos correcta.
- Un terminal o herramienta de configuración capaz de enviar los comandos de configuración estilo AT que utiliza el AL11.
- Alcance de red para que el dispositivo pueda acceder a d.plaspy.com o a 54.85.159.138 en el puerto 8888 desde su conexión celular.

## Cómo se conecta este rastreador a Plaspy

El AL11 puede configurarse para enviar actualizaciones periódicas de ubicación y notificaciones de eventos al endpoint y puerto central de Plaspy. Plaspy recibe esos mensajes y los mapea automáticamente porque la plataforma detecta el protocolo del rastreador.

- El dispositivo reporta al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Los mensajes pueden enviarse por UDP o TCP según la configuración de transporte del dispositivo.
- Configure eventos de ACC o entradas para que los cambios de estado se reporten a Plaspy.
- Establezca un intervalo de rastreo para controlar las cargas regulares de posición al servidor.
- Use el comando de formato del dispositivo para cambiar a binario o al formato de payload preferido antes de apuntarlo a Plaspy.

## Flujo de configuración típico

1. Acceda al método oficial de configuración ATrack AL11 o al software del proveedor adecuado para su dispositivo y firmware.
2. Introduzca la dirección del servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija el protocolo de transporte (UDP o TCP) si el AL11 requiere selección explícita.
5. Configure el reporte de eventos, el intervalo de rastreo y el formato de mensajes según lo requiera su despliegue.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el procedimiento exige un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y utilizando consultas de estado desde el propio equipo.

## Ejemplos de comandos de configuración

Los siguientes comandos de ejemplo públicos se usan con frecuencia en el AL11 para configurar entradas, reportes, intervalo de rastreo, formato de mensajes y el objetivo del servidor GPRS para Plaspy. Mantenga el orden cuando la secuencia sea importante.

- Configure el reporte de la entrada ACC y los reportes y reacciones relacionados
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establezca el intervalo de tiempo a 60 segundos para el rastreo periódico
```text
AT$TRAC=1,60,,,,,2
```

- Ponga el dispositivo en formato de mensaje binario
```text
AT$FORM=1,@P,0,""
```

- Configure el servidor GPRS a Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explicación de los marcadores:
- [apn] = cadena APN del operador
- [apnu] = nombre de usuario APN si es requerido (dejar vacío si no aplica)
- [apnp] = contraseña APN si es requerida (dejar vacío si no aplica)

- Consultar estado del dispositivo
```text
AT$INFO=?
```

Nota: Estos comandos son ejemplos públicos. Use la interfaz de configuración ATrack adecuada para su dispositivo y firmware. Si su instalador utiliza SMS o la herramienta de configuración de ATrack, la sintaxis será equivalente a estos ajustes estilo AT; confirme el formato exacto de los comandos con la documentación vigente de ATrack.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme los comandos exactos para su firmware AL11.
- Elija UDP o TCP según sus necesidades de red; Plaspy acepta ambos y detecta automáticamente el protocolo empleado.
- Asegúrese de reemplazar los marcadores [apn], [apnu] y [apnp] por los valores específicos del operador antes de aplicar el comando GPRS.
- Si encuentra problemas de conectividad, verifique que el dispositivo pueda resolver d.plaspy.com o alcanzar 54.85.159.138 en el puerto 8888 desde la red de la SIM.
- Consulte siempre el manual de ATrack o la herramienta del proveedor para el AL11 si tiene dudas sobre la secuencia, los parámetros requeridos o acciones de reinicio específicas del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el ATrack AL11 para que reporte a Plaspy ofrece una vía directa hacia la visibilidad centralizada de activos móviles y vehículos. Con los ajustes de servidor compartidos de Plaspy y la detección automática del protocolo, las organizaciones pueden reducir la variabilidad en la configuración por dispositivo y poner los equipos en línea más rápidamente para monitoreo operativo y reporte de eventos.

To learn more about Plaspy and how it integrates with devices like the AL11 visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official commands from the manufacturer, verify current documentation at https://www.atrack.com.tw/ as manufacturer specifications and setup procedures can change over time.
