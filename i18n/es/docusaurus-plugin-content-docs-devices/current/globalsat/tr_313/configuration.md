---
slug: /globalsat/tr_313/configuration
id: tr_313-configuration
sidebar_label: Configuration
title: GlobalSat - TR-313 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat TR-313 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - GlobalSat TR-313
  - Configuración TR-313
  - Configurar TR-313
  - Configuración rastreador GlobalSat
  - Configuración TR-313 Plaspy
  - Configuración GPS Plaspy
  - Configuración servidor TR-313
  - Configuración plataforma GlobalSat
  - Configuración SMS TR-313
  - Rastreador personal TR-313
---

# GlobalSat - Configuración del TR-313

Esta página describe el contexto público de configuración para usar el rastreador personal GlobalSat TR-313 con Plaspy. Reúne los ajustes de servidor de Plaspy que debe aplicar y muestra los comandos públicos de configuración por SMS que se utilizan comúnmente para apuntar un TR-313 a un servidor de terceros. Esta guía está dirigida a usuarios técnicos que preparan el equipo para su integración con Plaspy y a administradores que necesitan pasos claros y prácticos para completar la puesta en marcha y la validación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TR-313 admite cadenas de configuración por SMS en su documentación pública, por lo que esta página incluye los comandos SMS de ejemplo y las notas necesarias para dirigir el dispositivo al endpoint de Plaspy.

## Visión general de la configuración

El proceso de configuración prepara el TR-313 para reportar posición y estado a Plaspy definiendo el destino de red y los parámetros relacionados. Con el endpoint y puerto compartidos de Plaspy, el objetivo es asegurar que el dispositivo envíe su telemetría a la dirección y transporte correctos para que la plataforma la reciba y decodifique automáticamente.

- Configure el TR-313 para usar Plaspy como servidor remoto para que los reportes de ubicación lleguen a la plataforma.
- Establezca el host y el puerto del servidor y seleccione UDP o TCP si el firmware del dispositivo lo requiere.
- Use el formato de comandos SMS del TR-313 para aplicar los valores de configuración cuando el flujo de trabajo sea por aire o vía SMS.
- Reinicie o reinicie el rastreador si es necesario para que los nuevos ajustes entren en vigor y Plaspy pueda detectar el protocolo del dispositivo.
- Valide la conectividad confirmando que el rastreador aparece en Plaspy y reporta las actualizaciones de posición esperadas.

## Configuración del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy usa el mismo puerto para todos los dispositivos compatibles y se apoya en la detección automática de protocolo cuando un rastreador se conecta.

## Requisitos previos habituales

- Asegúrese de que el TR-313 tenga alimentación y sea accesible para su configuración.
- Una SIM activa que pueda enviar/recibir SMS y datos según lo requiera la instalación.
- Conozca el IMEI del dispositivo y cualquier dato de cuenta necesario para las herramientas del fabricante.
- Acceso al método de configuración del fabricante, como comandos SMS o software del proveedor.
- Una cuenta en Plaspy y acceso a la plataforma para validar el dispositivo después de la configuración.
- Un entorno de prueba o un dispositivo en staging para confirmar el comportamiento antes del despliegue en flota.

## Cómo se conecta este rastreador a Plaspy

El TR-313 se configura para enviar sus mensajes de ubicación y estado al endpoint y puerto del servidor Plaspy, de modo que la plataforma pueda recibir, identificar y mostrar el dispositivo. Una vez apuntado el dispositivo al endpoint de Plaspy, la detección automática de protocolo interpreta los mensajes del rastreador y los vincula con el registro de dispositivo correcto.

- El rastreador transmite telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la opción seleccionada durante la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo entrante y procesa los mensajes para el TR-313.
- Tras la configuración y el reinicio, el dispositivo comienza a reportar y se vuelve visible en la plataforma Plaspy.
- Los operadores pueden supervisar la conectividad y el reporte de eventos desde la interfaz de Plaspy cuando el dispositivo esté activo.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del GlobalSat TR-313, como el formato de comandos SMS del fabricante o la herramienta del proveedor.
2. Tenga a mano el IMEI del dispositivo y los parámetros APN que requiera su operador móvil.
3. Introduzca la dirección del servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en el campo de host del servidor.
4. Establezca el puerto del servidor en 8888.
5. Elija el transporte UDP o TCP si la configuración del TR-313 requiere seleccionar el tipo de transporte.
6. Aplique o guarde los ajustes y luego reinicie el dispositivo si es necesario.
7. Valide que el dispositivo reporta a Plaspy y aparece en su cuenta con las actualizaciones esperadas.

## Ejemplos de comandos de configuración

El TR-313 puede configurarse mediante comandos SMS en el formato proporcionado por el fabricante. A continuación se muestran comandos públicos de ejemplo extraídos del patrón de configuración del TR-313. Estos comandos usan marcadores de posición que debe reemplazar con valores específicos del dispositivo antes de enviarlos.

- Comando de configuración (reemplazar marcadores antes de enviar):

```text
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Comando de reinicio (reinicio opcional después de la configuración):

```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notas sobre marcadores y campos:
- {{imei}}: Reemplace con el número IMEI del dispositivo.
- {{apn}}: Reemplace con el nombre APN de su operador móvil.
- {{apnu}}: Reemplace con el usuario APN si se requiere; deje en blanco si no aplica.
- {{apnp}}: Reemplace con la contraseña APN si se requiere; deje en blanco si no aplica.
- E0 y E1 en el comando de configuración están establecidos en la IP pública de Plaspy 54.85.159.138 y el puerto 8888 respectivamente.
- Los valores finales *{{checksum}} y *{{checksumreeboot}} son checksums calculados que requiere el formato de comando del dispositivo (vea las notas abajo).

Mantenga el orden de los comandos cuando la documentación del fabricante indique que la secuencia es importante: primero aplique los ajustes de servidor y APN, luego opcionalmente reinicie el rastreador.

## Notas de configuración

- Los ejemplos del TR-313 usan cadenas de configuración por SMS; verifique la entrega del SMS y la sustitución correcta del IMEI antes de enviar.
- Los checksums en el ejemplo suelen calcularse como un valor hexadecimal por XOR del cuerpo del comando y deben añadirse en mayúsculas con dos dígitos hexadecimales. El ejemplo del fabricante incluye un script de cálculo de checksum para generar el valor correcto.
- Elija UDP o TCP según las opciones de configuración disponibles en el dispositivo; Plaspy acepta cualquiera de los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Revisiones de firmware y herramientas del proveedor pueden cambiar la sintaxis exacta del comando o los campos requeridos; siempre contraste con la documentación más reciente de GlobalSat.
- Reiniciar el dispositivo tras aplicar los ajustes suele ser necesario para que tengan efecto; el comando de reinicio provisto se etiqueta como paso opcional de seguimiento.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un GlobalSat TR-313 correctamente configurado ofrece visibilidad centralizada para dispositivos de seguimiento personal, permitiendo a organizaciones y cuidadores monitorear ubicaciones, recibir alertas y gestionar equipos desde una sola plataforma. Apuntar el TR-313 al endpoint y puerto compartidos de Plaspy simplifica la incorporación, ya que Plaspy detecta automáticamente el protocolo del dispositivo y se encarga de la decodificación para los formatos de rastreador compatibles.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el GlobalSat TR-313, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y detalles del fabricante, verifique la documentación vigente en el sitio oficial de GlobalSat https://www.globalsat.com.tw/.
