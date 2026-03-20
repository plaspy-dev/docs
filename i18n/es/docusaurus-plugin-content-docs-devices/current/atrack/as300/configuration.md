---
slug: /atrack/as300/configuration
id: as300-configuration
sidebar_label: Configuration
title: ATrack - AS300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ATrack AS300 con Plaspy, incluyendo ajustes de servidor, comandos y flujo de instalación
keywords:
  - Configuración ATrack AS300
  - Configuración AS300 Plaspy
  - Configuración servidor AS300
  - Rastreador GPS ATrack AS300
  - Configuración GPRS AS300
  - Configuración TCP UDP AS300
  - Configuración dispositivo Plaspy
  - Configuración rastreador de activos
  - Ajustes APN AS300
  - Comandos ATrack AS300
---

# ATrack - Configuración del AS300

Esta página describe cómo configurar públicamente el rastreador compacto ATrack AS300 para su uso con la plataforma Plaspy. Se enfoca en los pasos prácticos, comandos públicos y ajustes necesarios para apuntar el dispositivo a los servidores de Plaspy y verificar el reporte básico, de modo que el equipo sea visible y manejable desde Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando sea posible, esta guía incluye ejemplos de comandos públicos y el flujo de configuración común para el AS300, recomendando revisar también la documentación oficial del fabricante.

## Resumen de la configuración

Configurar el AS300 para trabajar con Plaspy prepara el equipo para enviar posiciones, telemetría y eventos al punto de ingestión de Plaspy, de modo que el dispositivo aparezca en su cuenta y comience a reportar señales útiles. La guía de configuración del modelo AS300 contiene los comandos de uso común para establecer el reporte de eventos, los intervalos de reporte, el formato binario y la configuración GPRS que apunta el dispositivo a Plaspy.

- Configure el dispositivo para reportar eventos de movimiento, manipulación (tamper) y entradas digitales, para que Plaspy pueda generar alertas y mantener historial.
- Establezca un intervalo de reporte adecuado a su caso de uso para equilibrar latencia y vida útil de batería.
- Configure los parámetros de red, incluido el APN y el endpoint del servidor Plaspy, para que el AS300 pueda establecer una conexión GPRS.
- Valide que el dispositivo esté apuntando al servidor de Plaspy y recibiendo confirmaciones para que sea visible en la plataforma.
- Verifique el formato binario o el protocolo esperado por Plaspy y confirme que el rastreador envíe datos por UDP o TCP según lo requerido.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos ajustes compartidos se usan en Plaspy para todos los dispositivos compatibles y deben ingresarse en el AS300 durante la configuración cuando el dispositivo solicite host y puerto del servidor.

## Requisitos típicos antes de la configuración

- Asegúrese de que el AS300 esté alimentado y cuente con batería suficiente o un cargador conectado para realizar la configuración.
- Tenga acceso al método de configuración oficial de ATrack recomendado para su firmware, por ejemplo serial, USB, SMS o el software del fabricante.
- Una línea celular válida con credenciales APN para la SIM o eSIM instalada en el equipo.
- Conocimiento de si su instalación requiere UDP o TCP para el envío de datos.
- Acceso administrativo a la cuenta de Plaspy o al panel de gestión de flotas para verificar que el dispositivo aparezca una vez que empiece a reportar.
- Un plan de pruebas básico para validar reportes y activadores de eventos después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

El AS300 se configura para enviar posiciones GNSS, telemetría de sensores y reportes por eventos al endpoint compartido de Plaspy y su puerto. Una vez que el rastreador establece la conexión GPRS usando el APN y los ajustes de servidor configurados, entregará paquetes en formato binario o en el protocolo correspondiente a Plaspy mediante el transporte seleccionado.

- Los ajustes GPRS del dispositivo deben apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que los datos se enruten a Plaspy.
- El AS300 puede usar UDP o TCP para transmitir datos; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los comandos de reporte de eventos permiten que el AS300 envíe cambios de estado de ACC, movimiento, tamper y entradas a Plaspy para generar alertas.
- Los intervalos de reporte controlan la frecuencia con la que el AS300 envía posición y telemetría al servidor de Plaspy.
- Existen comandos de verificación que se pueden usar para chequear el estado del equipo antes y después de apuntarlo al servidor de Plaspy.

## Flujo común de configuración

1. Acceda al método o software de configuración oficial de ATrack recomendado para su versión de firmware del AS300.
2. Ingrese el host del servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo solicite los ajustes de servidor.
3. Establezca el puerto en 8888, que es el puerto usado por Plaspy para los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; ambos son compatibles con Plaspy.
5. Configure el APN y cualquier dato de autenticación necesario para la conectividad celular usando las credenciales de su operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reinicio para aplicar cambios de red.
7. Valide que el AS300 reporte a Plaspy comprobando el estado del dispositivo y confirmando la recepción de paquetes en la plataforma Plaspy.

Si su guía de configuración del modelo AS300 incluye comandos específicos (a continuación), aplíquelos en secuencia como parte de este flujo usando el canal de configuración oficial.

## Ejemplos de comandos de configuración

Los siguientes comandos públicos están incluidos en la configuración del modelo AS300 y pueden usarse con la interfaz de comandos admitida por ATrack. Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos con el APN, usuario y contraseña de su operador cuando sea necesario.

- Configurar comportamiento de evento ACC y reglas de reporte
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer intervalo de rastreo basado en tiempo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

- Poner el dispositivo en modo de formato binario
```text
AT$FORM=1,@P,0,""
```

- Configurar el servidor GPRS y ajustes APN para apuntar a Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Nota: [apn] es el APN del operador, [apnu] es el usuario del APN (si lo requiere) y [apnp] es la contraseña del APN (si lo requiere). Reemplace los marcadores por las credenciales de su operador.

- Consultar estado del dispositivo
```text
AT$INFO=?
```

Ejecute estos comandos usando la interfaz o herramienta recomendada por el fabricante para su firmware. El orden es importante al habilitar eventos, modo de rastreo, formato de datos y los ajustes del servidor GPRS.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los parámetros disponibles; confirme siempre el formato exacto de comandos para la versión de firmware de su dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy acepta ambos y detecta el protocolo automáticamente, pero la retransmisión y las consideraciones de firewall pueden influir en su elección.
- Use los marcadores de APN solo con credenciales válidas del operador. Si la operadora no requiere usuario o contraseña, deje esos campos vacíos o como lo indica el proveedor.
- Algunos instaladores prefieren probar primero conectividad con la IP 54.85.159.138 y luego cambiar al dominio d.plaspy.com una vez que el DNS funcione correctamente en el entorno del dispositivo.
- Si usa SMS o el software del fabricante para enviar comandos, verifique que ese método de transporte esté soportado por su revisión específica de firmware del AS300.

## Por qué usar Plaspy con esta configuración

Usar el AS300 con Plaspy ofrece un camino sencillo hacia la visibilidad de activos, alertas por movimiento y manipulación, y la agregación de telemetría para flujos de trabajo logísticos y de alquiler. Al configurar el equipo para reportar al servidor compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 y seleccionar el transporte e intervalo de reporte apropiados, las organizaciones pueden equilibrar la visibilidad en tiempo real con la duración de la batería y la eficiencia en el uso de datos.

Learn more about Plaspy and how it ingests device telemetry at https://www.plaspy.com. For the most current AS300 device specific setup instructions, firmware notes, and command references please verify details at the ATrack website https://www.atrack.com.tw/ as manufacturer methods and firmware behavior can change over time.
