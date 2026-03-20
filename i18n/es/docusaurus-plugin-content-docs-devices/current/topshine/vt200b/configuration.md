---
slug: /topshine/vt200b/configuration
id: vt200b-configuration
sidebar_label: Configuration
title: TopShine - VT200B Configuration
sidebar_class_name: menu_item_tracker
description: Conecte y configure el rastreador TopShine VT200B en Plaspy mediante servidor público y comandos SMS o GPRS
keywords:
  - Configuración TopShine VT200B
  - Instalación TopShine VT200B
  - Integración VT200B Plaspy
  - Configuración rastreador GPS TopShine
  - Configuración servidor VT200B
  - Configuración de dispositivos Plaspy
  - Configuración SMS GPRS VT200B
  - Configuración rastreo de vehículos
  - Instalación rastreador para gestión de flotas
  - Guía de integración VT200B
---

# TopShine - Configuración del VT200B

Esta página documenta el contexto público de configuración para conectar el rastreador GPS TopShine VT200B a la plataforma Plaspy. Reúne los ajustes de servidor prácticos, el flujo de trabajo recomendado y los comandos SMS del fabricante que se usan habitualmente para preparar el dispositivo para el seguimiento en tiempo real con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del vendedor. El VT200B admite configuración por SMS y GPRS (TCP o UDP), y los ejemplos a continuación usan los comandos públicos y los marcadores de posición que el fabricante proporciona cuando están disponibles.

## Resumen de configuración

El proceso prepara al VT200B para comunicarse con Plaspy de modo que el rastreador informe posición, estado y eventos de sensores de forma fiable. Estos pasos se realizan mediante comandos SMS o con la herramienta de configuración del dispositivo para establecer el APN, el endpoint del servidor, el modo de transporte y el intervalo de reporte.

- Configurar el APN de la tarjeta SIM para que pueda enviarse tráfico GPRS.
- Apuntar el rastreador al endpoint del servidor de Plaspy y usar el puerto 8888.
- Seleccionar UDP o TCP si el dispositivo requiere selección explícita del transporte.
- Verificar que la contraseña del dispositivo y el ID sean correctos antes de activar GPRS.
- Confirmar que el dispositivo informe a Plaspy y que los registros almacenados se suban tras la reconexión.
- Usar los comandos SMS del fabricante para una configuración remota rápida cuando no haya herramienta de configuración disponible.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el VT200B para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son el endpoint canónico de Plaspy y deben ingresarse en el dispositivo o enviarse por SMS según el formato de comandos del dispositivo.

## Requisitos típicos antes de la configuración

- Un dispositivo VT200B con alimentación y accesible, con una tarjeta SIM activa que soporte datos GPRS y SMS.
- Conocimiento del APN del operador de la SIM y, opcionalmente, del usuario y la contraseña del APN.
- Acceso al IMEI del dispositivo y al método de configuración (comandos SMS o software del fabricante).
- La contraseña por defecto del dispositivo si no fue cambiada (el fabricante muestra 000000 como ejemplo).
- Un método para recibir o monitorear mensajes de confirmación del dispositivo (respuestas SMS) o una cuenta en Plaspy para validar los reportes entrantes.
- Paciencia para consultar notas de firmware o indicaciones del proveedor si los comandos difieren según la revisión del firmware.

## Cómo se conecta este rastreador a Plaspy

El VT200B envía coordenadas GPS y telemetría al endpoint compartido de Plaspy a través de GPRS usando TCP o UDP. Cuando la conectividad de red se pierde, el dispositivo almacena los registros localmente y los carga automáticamente cuando la conexión se restablece, garantizando continuidad en los paneles de Plaspy.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy y al puerto 8888.
- Telemetría y datos de eventos se envían a d.plaspy.com o 54.85.159.138 usando el transporte seleccionado.
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los mensajes de posición y estado.
- Los registros guardados en la memoria interna se suben a Plaspy una vez que la conectividad GPRS está disponible.
- Alertas como SOS, eventos de geocerca y alarmas I/O se entregan a Plaspy para visibilidad y reportes en la plataforma.

## Flujo común de configuración

1. Acceda al método oficial de configuración de TopShine o su software, o prepárese para enviar comandos SMS conforme a las instrucciones del fabricante.
2. Asegúrese de que la SIM esté activa, que se conozca el APN y que el dispositivo esté encendido y sea alcanzable por SMS.
3. Ingrese el endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en la configuración de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP si el dispositivo exige selección explícita de transporte.
6. Aplique o guarde la configuración en el dispositivo y reinícelo si el procedimiento del dispositivo lo requiere.
7. Valide que el dispositivo reporte a Plaspy verificando la plataforma Plaspy para el dispositivo o confirmando respuestas SMS y registros subidos.

## Ejemplos de comandos de configuración

El VT200B admite configuración por comandos SMS. Los comandos de ejemplo del fabricante y los marcadores de posición se muestran a continuación. El ejemplo usa la contraseña por defecto 000000 donde aparece <password> en los comandos.

Nota: Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} sin cambios y reemplace con el APN de su operador, usuario APN y contraseña APN según sea necesario.

- Restablecer a configuración de fábrica (paso inicial opcional):

```text
W000000,990,099###
```

- Establecer el ID del dispositivo usando los primeros 14 dígitos derivados del IMEI (reemplazar <14-digit-imei> por el valor real de 14 dígitos):

```text
W000000,010,<14-digit-imei>
```

- Configurar el APN del operador (reemplazar {{apn}} con su APN; incluya usuario y contraseña del APN si es necesario usando {{apnu}} y {{apnp}}):

```text
W000000,011,{{apn}}
```

Comando APN extendido opcional con usuario y contraseña:

```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy proporcionados por Plaspy:

```text
W000000,012,54.85.159.138,8888
```

Alternativa usando el dominio de Plaspy en lugar de la IP:

```text
W000000,012,d.plaspy.com,8888
```

- Cambiar el dispositivo a modo GPRS:

```text
W000000,013,2
```

- Establecer el intervalo de actualización (valor de ejemplo mostrado como 6 en la muestra del fabricante):

```text
W000000,014,6
```

- Solicitar el IMEI del dispositivo (comando de verificación):

```text
W000000,601
```

Reemplace la contraseña inicial 000000 por la contraseña real del dispositivo si esta se ha cambiado del valor de fábrica. Al usar el comando de APN, sustituya los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador.

## Notas de configuración

- Los comandos SMS del fabricante pueden variar según la revisión del firmware; verifique la sintaxis exacta en el manual de usuario del VT200B o en las notas de la versión.
- El dispositivo admite métodos de configuración por SMS y GPRS; el SMS es útil para configuraciones remotas o en campo cuando no se dispone de una herramienta de configuración.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que use el puerto 8888 de forma consistente al configurar múltiples unidades.
- Al elegir el transporte, puede seleccionarse TCP o UDP si el dispositivo lo requiere; el comportamiento y la fiabilidad pueden depender del firmware y de las condiciones de red.
- Mantenga una copia del IMEI del dispositivo y del ID configurado para poder mapear la unidad física en la plataforma Plaspy durante la validación.

## Por qué usar Plaspy con esta configuración

Usar el TopShine VT200B con Plaspy ofrece a las flotas un camino directo hacia el seguimiento centralizado, la monitorización de eventos y la reproducción histórica. El soporte del VT200B para GPRS TCP/UDP y SMS, junto con su registrador interno, ayuda a mantener datos continuos para supervisión operativa y análisis de incidentes cuando las condiciones de red varían.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para detalles actualizados sobre la configuración específica del VT200B, notas de firmware y orientación del fabricante, confirme la información más reciente en el sitio oficial de TopShine https://www.gztopshine.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique los comandos y procedimientos con la documentación más reciente.
